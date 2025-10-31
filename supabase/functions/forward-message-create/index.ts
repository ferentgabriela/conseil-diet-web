import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://conseildietetique.vercel.app',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Rate limiting helper
async function checkRateLimit(supabase: any, identifier: string, endpoint: string, maxRequests = 2, windowMinutes = 60): Promise<boolean> {
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
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sessionId, userName, userEmail, userPhone, message, website } = await req.json();
    
    // Honeypot check - if website field is filled, it's likely a bot
    if (website && website.trim().length > 0) {
      console.log('Bot detected via honeypot field');
      return new Response(JSON.stringify({ error: 'Invalid request' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    if (!sessionId || typeof sessionId !== 'string' || sessionId.length < 10) {
      return new Response(JSON.stringify({ error: 'Invalid session ID' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!userName || !message || userName.trim().length === 0 || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Name and message are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Initialize Supabase client with service role
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rateLimitOk = await checkRateLimit(supabase, `${clientIP}:${sessionId}`, 'forward-message-create', 2, 60);
    
    if (!rateLimitOk) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Only 2 forward messages per hour allowed.' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Creating forwarded message for session:', sessionId);

    // Get conversation ID for proper referencing
    let conversationId = null;
    const { data: conversation } = await supabase
      .from('chat_conversations')
      .select('id')
      .eq('session_id', sessionId)
      .maybeSingle();

    if (conversation) {
      conversationId = conversation.id;
    }

    // Create the forwarded message
    const { data: forwardedMessage, error: createError } = await supabase
      .from('forwarded_messages')
      .insert({
        conversation_id: conversationId,
        session_id: sessionId,
        user_name: userName.trim(),
        user_email: userEmail?.trim() || null,
        user_phone: userPhone?.trim() || null,
        message: message.trim(),
        status: 'pending'
      })
      .select()
      .single();

    if (createError) {
      console.error('Error creating forwarded message:', createError);
      throw new Error('Failed to create forwarded message');
    }

    console.log('Forwarded message created successfully:', forwardedMessage.id);

    return new Response(JSON.stringify({ 
      success: true,
      id: forwardedMessage.id 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in forward-message-create function:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});