import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { create, verify, getNumericDate } from "https://deno.land/x/djwt@v2.8/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://conseildietetique.lu',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Session expiration time in seconds (1 hour)
const SESSION_EXPIRY_SECONDS = 3600;

// Get the admin password - no fallback for security
const ADMIN_PASSWORD = Deno.env.get('ADMIN_PANEL_PASSWORD');

// Secret key for JWT signing - derived from admin password
async function getJWTKey(): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(ADMIN_PASSWORD || 'temp-key'),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
  return keyMaterial;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if admin password is configured
    if (!ADMIN_PASSWORD) {
      console.error('ADMIN_PANEL_PASSWORD secret not configured');
      return new Response(JSON.stringify({ 
        authenticated: false,
        error: 'Admin authentication not configured' 
      }), {
        status: 503,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json();
    
    // Handle token validation request
    if (body.action === 'validate' && body.token) {
      try {
        const key = await getJWTKey();
        const payload = await verify(body.token, key);
        
        // Check if token is expired
        if (payload.exp && payload.exp < Date.now() / 1000) {
          return new Response(JSON.stringify({ 
            valid: false,
            error: 'Session expired' 
          }), {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
        
        return new Response(JSON.stringify({ 
          valid: true,
          expiresAt: payload.exp
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.log('Invalid token validation attempt');
        return new Response(JSON.stringify({ 
          valid: false,
          error: 'Invalid token' 
        }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Handle login request
    const { password } = body;
    
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
    
    // Generate a signed JWT token with expiration
    const key = await getJWTKey();
    const expirationTime = getNumericDate(SESSION_EXPIRY_SECONDS);
    
    const sessionToken = await create(
      { alg: "HS256", typ: "JWT" },
      { 
        sub: "admin",
        exp: expirationTime,
        iat: getNumericDate(0)
      },
      key
    );
    
    return new Response(JSON.stringify({ 
      authenticated: true,
      sessionToken,
      expiresAt: expirationTime
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
