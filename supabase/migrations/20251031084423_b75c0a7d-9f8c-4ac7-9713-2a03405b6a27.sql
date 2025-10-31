-- Drop existing restrictive policies that aren't working as intended
DROP POLICY IF EXISTS "System only access to chat_messages" ON public.chat_messages;
DROP POLICY IF EXISTS "System only insert to chat_messages" ON public.chat_messages;

-- Create explicit deny policies for all operations
-- These PERMISSIVE policies will block all direct access to the table
CREATE POLICY "Block all direct SELECT access to chat_messages"
ON public.chat_messages
FOR SELECT
TO public
USING (false);

CREATE POLICY "Block all direct INSERT access to chat_messages"
ON public.chat_messages
FOR INSERT
TO public
WITH CHECK (false);

CREATE POLICY "Block all direct UPDATE access to chat_messages"
ON public.chat_messages
FOR UPDATE
TO public
USING (false)
WITH CHECK (false);

CREATE POLICY "Block all direct DELETE access to chat_messages"
ON public.chat_messages
FOR DELETE
TO public
USING (false);

-- The service role key used in edge functions will bypass RLS entirely,
-- so backend operations will continue to work while all client access is blocked