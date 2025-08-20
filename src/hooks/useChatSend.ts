import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Message {
  id: string;
  message: string;
  sender: 'user' | 'assistant';
  created_at: string;
  message_type?: string;
}

export const useChatSend = (sessionId: string, onNewMessage: (message: Message) => void) => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || !sessionId) return;

    setIsLoading(true);
    try {
      // Add user message immediately to UI
      const userMsg: Message = {
        id: `temp-${Date.now()}`,
        message: userMessage,
        sender: 'user',
        created_at: new Date().toISOString(),
        message_type: 'text'
      };
      onNewMessage(userMsg);

      // Send to secure chat-write function
      const { data, error } = await supabase.functions.invoke('chat-write', {
        body: { sessionId, message: userMessage }
      });

      if (error) {
        console.error('Error sending message:', error);
        toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        return;
      }

      // Add AI response to UI
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        message: data.response,
        sender: 'assistant',
        created_at: new Date().toISOString(),
        message_type: 'text'
      };
      onNewMessage(aiMsg);

    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
};