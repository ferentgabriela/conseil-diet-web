
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { conversationId } = await req.json();

    console.log('Processing forward message request for conversation:', conversationId);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get the forwarded message details
    const { data: forwardedMessage, error: messageError } = await supabase
      .from('forwarded_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .eq('session_id', conversationId) // Add session_id filter for security
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
      throw new Error('Conversation not found');
    }

    const { data: messages, error: messagesError } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('conversation_id', conversation.id)
      .order('created_at', { ascending: true });

    if (messagesError) {
      console.error('Error fetching messages:', messagesError);
      throw new Error('Error fetching conversation history');
    }

    // Format conversation history
    const conversationHistory = messages
      .map(msg => `${msg.sender === 'user' ? 'Patient' : 'Assistant'}: ${msg.message}`)
      .join('\n\n');

    // Create email content
    const emailSubject = `Nouveau message patient - ${forwardedMessage.user_name}`;
    
    const emailHTML = `
      <h2>Nouveau message d'un patient</h2>
      
      <h3>Informations du patient:</h3>
      <ul>
        <li><strong>Nom:</strong> ${forwardedMessage.user_name}</li>
        ${forwardedMessage.user_email ? `<li><strong>Email:</strong> ${forwardedMessage.user_email}</li>` : ''}
        ${forwardedMessage.user_phone ? `<li><strong>Téléphone:</strong> ${forwardedMessage.user_phone}</li>` : ''}
      </ul>
      
      <h3>Message du patient:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${forwardedMessage.message.replace(/\n/g, '<br>')}
      </div>
      
      <h3>Historique de la conversation:</h3>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0; font-family: monospace; font-size: 12px;">
        ${conversationHistory.replace(/\n/g, '<br>')}
      </div>
      
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

  } catch (error) {
    console.error('Error in forward-message function:', error);
    return new Response(JSON.stringify({ 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
