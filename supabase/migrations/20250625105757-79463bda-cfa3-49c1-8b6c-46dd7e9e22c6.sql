
-- Create a table to store chat conversations
CREATE TABLE public.chat_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_name TEXT,
  user_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table to store individual chat messages
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES public.chat_conversations(id) ON DELETE CASCADE NOT NULL,
  message TEXT NOT NULL,
  sender TEXT NOT NULL CHECK (sender IN ('user', 'ai')),
  message_type TEXT DEFAULT 'text' CHECK (message_type IN ('text', 'system', 'forwarded')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table to store messages that need to be forwarded to Gabriela
CREATE TABLE public.forwarded_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES public.chat_conversations(id) ON DELETE CASCADE NOT NULL,
  user_name TEXT NOT NULL,
  user_email TEXT,
  user_phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - no user authentication required for public chat
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forwarded_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no authentication required)
CREATE POLICY "Anyone can create conversations" 
  ON public.chat_conversations 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view conversations" 
  ON public.chat_conversations 
  FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can create messages" 
  ON public.chat_messages 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view messages" 
  ON public.chat_messages 
  FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can create forwarded messages" 
  ON public.forwarded_messages 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view forwarded messages" 
  ON public.forwarded_messages 
  FOR SELECT 
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_chat_messages_conversation_id ON public.chat_messages(conversation_id);
CREATE INDEX idx_chat_messages_created_at ON public.chat_messages(created_at);
CREATE INDEX idx_forwarded_messages_status ON public.forwarded_messages(status);
