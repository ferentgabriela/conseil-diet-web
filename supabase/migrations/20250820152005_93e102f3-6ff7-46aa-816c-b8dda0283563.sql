-- Create rate_limits table for abuse protection
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  identifier TEXT NOT NULL, -- IP address or session ID
  endpoint TEXT NOT NULL, -- which endpoint is being rate limited
  request_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on rate_limits
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Create index for efficient lookups
CREATE INDEX IF NOT EXISTS idx_rate_limits_identifier_endpoint ON public.rate_limits(identifier, endpoint);
CREATE INDEX IF NOT EXISTS idx_rate_limits_window_start ON public.rate_limits(window_start);

-- RLS policy for rate_limits (only allow system access)
CREATE POLICY "System only access to rate_limits" 
ON public.rate_limits 
FOR ALL 
USING (false);

-- Update RLS policies to be more restrictive
-- Remove public SELECT policies for chat tables
DROP POLICY IF EXISTS "Users can view conversations by session_id" ON public.chat_conversations;
DROP POLICY IF EXISTS "Users can view messages for accessible conversations" ON public.chat_messages;
DROP POLICY IF EXISTS "Users can view forwarded messages by session_id" ON public.forwarded_messages;

-- Create more restrictive policies that only allow system access through edge functions
CREATE POLICY "System only access to chat_conversations" 
ON public.chat_conversations 
FOR SELECT 
USING (false);

CREATE POLICY "System only access to chat_messages" 
ON public.chat_messages 
FOR SELECT 
USING (false);

CREATE POLICY "System only access to forwarded_messages" 
ON public.forwarded_messages 
FOR SELECT 
USING (false);

-- Keep INSERT policies but make them more restrictive
DROP POLICY IF EXISTS "Users can create conversations with session_id" ON public.chat_conversations;
DROP POLICY IF EXISTS "Users can create messages for existing conversations" ON public.chat_messages;
DROP POLICY IF EXISTS "Users can create forwarded messages with session_id" ON public.forwarded_messages;

-- Only allow inserts through edge functions (they will use service role)
CREATE POLICY "System only insert to chat_conversations" 
ON public.chat_conversations 
FOR INSERT 
WITH CHECK (false);

CREATE POLICY "System only insert to chat_messages" 
ON public.chat_messages 
FOR INSERT 
WITH CHECK (false);

CREATE POLICY "System only insert to forwarded_messages" 
ON public.forwarded_messages 
FOR INSERT 
WITH CHECK (false);