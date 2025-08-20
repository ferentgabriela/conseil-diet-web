import { corsHeaders } from '../_shared/cors.ts';

interface Live404Entry {
  path: string;
  referrer: string;
  userAgent: string;
  timestamp: string;
  ip?: string;
}

const MAX_ENTRIES = 200;

async function readLive404Log(): Promise<Live404Entry[]> {
  try {
    // In a real implementation, this would read from a persistent storage
    // For now, we'll return an empty array as this is just the logging endpoint
    return [];
  } catch {
    return [];
  }
}

async function appendLive404Log(entry: Live404Entry): Promise<void> {
  try {
    // In a real implementation, this would append to persistent storage
    // For demo purposes, we'll just log it
    console.log('404 logged:', JSON.stringify(entry));
  } catch (error) {
    console.error('Failed to log 404:', error);
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }
  
  try {
    const body = await req.json();
    const { path, referrer, userAgent } = body;
    
    if (!path) {
      return new Response('Path is required', { status: 400, headers: corsHeaders });
    }
    
    const entry: Live404Entry = {
      path,
      referrer: referrer || '',
      userAgent: userAgent || '',
      timestamp: new Date().toISOString(),
      ip: req.headers.get('x-forwarded-for') || 'unknown'
    };
    
    await appendLive404Log(entry);
    
    return new Response('OK', { headers: corsHeaders });
  } catch (error) {
    console.error('Error logging 404:', error);
    return new Response('Internal server error', { 
      status: 500, 
      headers: corsHeaders 
    });
  }
});