import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  message: string;
  sender: 'user' | 'assistant';
  created_at: string;
  message_type?: string;
}

export const useChatHistory = (sessionId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMessages = async () => {
    if (!sessionId) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('chat-history', {
        body: { sessionId }
      });

      if (error) {
        // Silent error handling - don't log to console to avoid SEO issues
        return;
      }

      setMessages(data.messages || []);
    } catch (error) {
      // Silent error handling - don't log to console to avoid SEO issues
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, [sessionId]);

  return { messages, setMessages, isLoading, loadMessages };
};