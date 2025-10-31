import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://conseildietetique.vercel.app',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Secure admin password stored as environment variable
const ADMIN_PASSWORD = Deno.env.get('ADMIN_PANEL_PASSWORD') || 'change-me-in-production';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { password } = await req.json();
    
    if (!password || typeof password !== 'string') {
      return new Response(JSON.stringify({ 
        authenticated: false,
        error: 'Password is required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate password server-side
    const isValid = password === ADMIN_PASSWORD;
    
    if (!isValid) {
      console.log('Failed admin authentication attempt');
      return new Response(JSON.stringify({ 
        authenticated: false,
        error: 'Invalid password' 
      }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Successful admin authentication');
    
    // Generate a simple session token (in production, use JWT or similar)
    const sessionToken = crypto.randomUUID();
    
    return new Response(JSON.stringify({ 
      authenticated: true,
      sessionToken
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in admin-auth function:', error);
    return new Response(JSON.stringify({ 
      authenticated: false,
      error: 'Internal server error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
