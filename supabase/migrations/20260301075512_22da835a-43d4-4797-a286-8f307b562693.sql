
-- Drop chat-related tables (no longer needed after chat removal)
DROP TABLE IF EXISTS chat_messages CASCADE;
DROP TABLE IF EXISTS forwarded_messages CASCADE;
DROP TABLE IF EXISTS chat_conversations CASCADE;
DROP TABLE IF EXISTS rate_limits CASCADE;
