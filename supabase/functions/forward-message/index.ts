
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://conseildietetique.vercel.app',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// HTML escaping helper to prevent XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Rate limiting helper
async function checkRateLimit(supabase: any, identifier: string, endpoint: string, maxRequests = 3, windowMinutes = 60): Promise<boolean> {
  const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000);
  
  // Clean old entries
  await supabase
    .from('rate_limits')
    .delete()
    .lt('window_start', windowStart.toISOString());
  
  // Check current usage
  const { data: existing } = await supabase
    .from('rate_limits')
    .select('request_count')
    .eq('identifier', identifier)
    .eq('endpoint', endpoint)
    .gte('window_start', windowStart.toISOString())
    .single();
  
  if (existing && existing.request_count >= maxRequests) {
    return false;
  }
  
  // Update or create rate limit entry
  if (existing) {
    await supabase
      .from('rate_limits')
      .update({ request_count: existing.request_count + 1 })
      .eq('identifier', identifier)
      .eq('endpoint', endpoint)
      .gte('window_start', windowStart.toISOString());
  } else {
    await supabase
      .from('rate_limits')
      .insert({
        identifier,
        endpoint,
        request_count: 1,
        window_start: new Date().toISOString()
      });
  }
  
  return true;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { conversationId } = await req.json();

    if (!conversationId || typeof conversationId !== 'string' || conversationId.length < 10) {
      return new Response(JSON.stringify({ error: 'Invalid conversation ID' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Processing forward message request for session:', conversationId);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rateLimitOk = await checkRateLimit(supabase, `${clientIP}:${conversationId}`, 'forward-message', 2, 60);
    
    if (!rateLimitOk) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Only 2 messages per hour allowed.' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get the forwarded message details by session_id (conversationId is actually sessionId)
    const { data: forwardedMessage, error: messageError } = await supabase
      .from('forwarded_messages')
      .select('*')
      .eq('session_id', conversationId)
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (messageError || !forwardedMessage) {
      console.error('Error fetching forwarded message:', messageError);
      throw new Error('Message not found');
    }

    // Get the conversation messages for context
    const { data: conversation, error: convError } = await supabase
      .from('chat_conversations')
      .select('id')
      .eq('session_id', conversationId)
      .single();

    if (convError || !conversation) {
      console.error('Error fetching conversation:', convError);
      // Still proceed even without conversation context
    }

    let messages: Array<{message: string, sender: string, created_at: string}> = [];
    if (conversation) {
      const { data: messageData, error: messagesError } = await supabase
        .from('chat_messages')
        .select('message, sender, created_at')
        .eq('conversation_id', conversation.id)
        .order('created_at', { ascending: true })
        .limit(20); // Limit for performance

      if (!messagesError && messageData) {
        messages = messageData;
      }
    }

    // Format conversation history with proper escaping
    const conversationHistory = messages
      .map(msg => `${msg.sender === 'user' ? 'Patient' : 'Assistant'}: ${escapeHtml(msg.message)}`)
      .join('<br><br>');

    // Create email content with proper HTML escaping
    const emailSubject = `Nouveau message patient - ${escapeHtml(forwardedMessage.user_name)}`;
    
    const emailHTML = `
      <h2>Nouveau message d'un patient</h2>
      
      <h3>Informations du patient:</h3>
      <ul>
        <li><strong>Nom:</strong> ${escapeHtml(forwardedMessage.user_name)}</li>
        ${forwardedMessage.user_email ? `<li><strong>Email:</strong> ${escapeHtml(forwardedMessage.user_email)}</li>` : ''}
        ${forwardedMessage.user_phone ? `<li><strong>Téléphone:</strong> ${escapeHtml(forwardedMessage.user_phone)}</li>` : ''}
      </ul>
      
      <h3>Message du patient:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${escapeHtml(forwardedMessage.message).replace(/\n/g, '<br>')}
      </div>
      
      ${conversationHistory ? `
      <h3>Historique de la conversation:</h3>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0; font-family: monospace; font-size: 12px;">
        ${conversationHistory}
      </div>
      ` : ''}
      
      <hr>
      <p><em>Ce message a été envoyé automatiquement depuis votre assistant IA.</em></p>
    `;

    // Send email to Gabriela
    const emailResponse = await resend.emails.send({
      from: "Assistant Diététique <onboarding@resend.dev>",
      to: ["gabriela.ferent@conseildietetique.lu"],
      subject: emailSubject,
      html: emailHTML,
    });

    console.log('Email sent successfully:', emailResponse);

    // Update the forwarded message status
    const { error: updateError } = await supabase
      .from('forwarded_messages')
      .update({ status: 'sent' })
      .eq('id', forwardedMessage.id);

    if (updateError) {
      console.error('Error updating forwarded message status:', updateError);
    }

    return new Response(JSON.stringify({ 
      success: true,
      emailId: emailResponse.data?.id 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Error in forward-message function:', error);
    return new Response(JSON.stringify({ 
      error: error?.message || 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
