-- Drop existing restrictive policies that aren't providing proper protection
DROP POLICY IF EXISTS "System only access to forwarded_messages" ON public.forwarded_messages;
DROP POLICY IF EXISTS "System only insert to forwarded_messages" ON public.forwarded_messages;

-- Create explicit deny policies for all operations
-- These PERMISSIVE policies will block all direct client access to the table
CREATE POLICY "Block all direct SELECT access to forwarded_messages"
ON public.forwarded_messages
FOR SELECT
TO public
USING (false);

CREATE POLICY "Block all direct INSERT access to forwarded_messages"
ON public.forwarded_messages
FOR INSERT
TO public
WITH CHECK (false);

CREATE POLICY "Block all direct UPDATE access to forwarded_messages"
ON public.forwarded_messages
FOR UPDATE
TO public
USING (false)
WITH CHECK (false);

CREATE POLICY "Block all direct DELETE access to forwarded_messages"
ON public.forwarded_messages
FOR DELETE
TO public
USING (false);

-- Edge functions using the service role key will bypass RLS,
-- so backend operations will continue to work while all client access is blocked