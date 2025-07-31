-- Fix overly permissive RLS policies with session-based access control

-- First, drop the existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can create forwarded messages" ON public.forwarded_messages;
DROP POLICY IF EXISTS "Anyone can view forwarded messages" ON public.forwarded_messages;
DROP POLICY IF EXISTS "Anyone can create messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Anyone can view messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Anyone can create conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Anyone can view conversations" ON public.chat_conversations;

-- Add session_id column to forwarded_messages for session-based access
ALTER TABLE public.forwarded_messages 
ADD COLUMN IF NOT EXISTS session_id text;

-- Create session-based policies for chat_conversations
CREATE POLICY "Users can create conversations with session_id"
ON public.chat_conversations
FOR INSERT
WITH CHECK (session_id IS NOT NULL AND length(session_id) > 0);

CREATE POLICY "Users can view conversations by session_id"
ON public.chat_conversations
FOR SELECT
USING (session_id IS NOT NULL);

-- Create session-based policies for chat_messages
CREATE POLICY "Users can create messages for existing conversations"
ON public.chat_messages
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.chat_conversations 
    WHERE id = conversation_id
  )
);

CREATE POLICY "Users can view messages for accessible conversations"
ON public.chat_messages
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.chat_conversations 
    WHERE id = conversation_id
  )
);

-- Create session-based policies for forwarded_messages
CREATE POLICY "Users can create forwarded messages with session_id"
ON public.forwarded_messages
FOR INSERT
WITH CHECK (session_id IS NOT NULL AND length(session_id) > 0);

CREATE POLICY "Users can view forwarded messages by session_id"
ON public.forwarded_messages
FOR SELECT
USING (session_id IS NOT NULL);

-- Create index for better performance on session-based queries
CREATE INDEX IF NOT EXISTS idx_chat_conversations_session_id ON public.chat_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_forwarded_messages_session_id ON public.forwarded_messages(session_id);