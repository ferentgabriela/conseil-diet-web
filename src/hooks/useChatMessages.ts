
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  message: string;
  sender: 'user' | 'ai';
  message_type: 'text' | 'system' | 'forwarded';
  created_at: string;
}

// Database message type (what we get from Supabase)
interface DatabaseMessage {
  id: string;
  message: string;
  sender: string;
  message_type: string | null;
  created_at: string;
  conversation_id: string;
}

export const useChatMessages = (sessionId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Helper function to convert database message to our Message type
  const convertDatabaseMessage = (dbMessage: DatabaseMessage): Message => ({
    id: dbMessage.id,
    message: dbMessage.message,
    sender: dbMessage.sender as 'user' | 'ai',
    message_type: (dbMessage.message_type || 'text') as 'text' | 'system' | 'forwarded',
    created_at: dbMessage.created_at,
  });

  // Enhanced language detection helper
  const detectLanguage = (text: string): 'fr' | 'en' | 'ro' | 'de' => {
    const lowerText = text.toLowerCase();
    
    // Romanian keywords - more comprehensive list
    const romanianKeywords = ['salut', 'bună', 'mulțumesc', 'vă rog', 'îmi poți', 'cum pot', 'informații', 'programare', 'consultație', 'dietetician', 'problema', 'sănătate', 'ajuta', 'rezolva', 'trimitere', 'doctor', 'fac', 'departe', 'unde', 'când', 'acum', 'aici', 'pentru', 'prin', 'după', 'înainte'];
    const romanianCount = romanianKeywords.filter(keyword => lowerText.includes(keyword)).length;
    
    // German keywords
    const germanKeywords = ['hallo', 'guten', 'danke', 'bitte', 'können sie', 'wie kann', 'informationen', 'termin', 'beratung', 'ernährungsberatung', 'problem', 'gesundheit', 'überweisung', 'arzt'];
    const germanCount = germanKeywords.filter(keyword => lowerText.includes(keyword)).length;
    
    // English keywords
    const englishKeywords = ['hello', 'thank you', 'please', 'can you', 'how can', 'information', 'appointment', 'consultation', 'dietitian', 'problem', 'health', 'help', 'referral', 'doctor'];
    const englishCount = englishKeywords.filter(keyword => lowerText.includes(keyword)).length;
    
    // French keywords
    const frenchKeywords = ['bonjour', 'merci', 'pouvez', 'comment', 'informations', 'rendez-vous', 'consultation', 'diététicienne', 'problème', 'santé', 'aider', 'prescription', 'docteur'];
    const frenchCount = frenchKeywords.filter(keyword => lowerText.includes(keyword)).length;
    
    // Determine language based on highest keyword count
    const scores = {
      ro: romanianCount,
      de: germanCount,
      en: englishCount,
      fr: frenchCount
    };
    
    const maxScore = Math.max(...Object.values(scores));
    if (maxScore === 0) return 'fr'; // Default to French
    
    // Return the language with the highest score
    return Object.keys(scores).find(lang => scores[lang as keyof typeof scores] === maxScore) as 'fr' | 'en' | 'ro' | 'de';
  };

  // Create or get conversation
  const initializeConversation = async () => {
    try {
      // Check if conversation already exists
      const { data: existingConv } = await supabase
        .from('chat_conversations')
        .select('id')
        .eq('session_id', sessionId)
        .maybeSingle();

      if (!existingConv) {
        // Create new conversation
        const { error } = await supabase
          .from('chat_conversations')
          .insert({
            session_id: sessionId,
          });

        if (error) throw error;
      }
    } catch (error) {
      console.error('Error initializing conversation:', error);
    }
  };

  // Load existing messages
  const loadMessages = async () => {
    try {
      const { data: conversation } = await supabase
        .from('chat_conversations')
        .select('id')
        .eq('session_id', sessionId)
        .maybeSingle();

      if (conversation) {
        const { data: messagesData, error } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('conversation_id', conversation.id)
          .order('created_at', { ascending: true });

        if (error) throw error;

        if (messagesData) {
          const convertedMessages = messagesData.map(convertDatabaseMessage);
          setMessages(convertedMessages);
        }
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  // Send message and get AI response
  const sendMessage = async (userMessage: string) => {
    setIsLoading(true);

    try {
      // Ensure conversation exists first
      await initializeConversation();
      
      // Get conversation ID
      const { data: conversation } = await supabase
        .from('chat_conversations')
        .select('id')
        .eq('session_id', sessionId)
        .maybeSingle();

      if (!conversation) {
        throw new Error('Conversation not found');
      }

      // Save user message
      const { data: userMsgData, error: userMsgError } = await supabase
        .from('chat_messages')
        .insert({
          conversation_id: conversation.id,
          message: userMessage,
          sender: 'user',
          message_type: 'text'
        })
        .select()
        .single();

      if (userMsgError) throw userMsgError;

      // Add user message to state immediately
      setMessages(prev => [...prev, convertDatabaseMessage(userMsgData)]);

      // Detect language and get AI response
      const detectedLanguage = detectLanguage(userMessage);
      console.log('Detected language:', detectedLanguage);

      // Call our AI function
      const { data: aiData, error: aiError } = await supabase.functions.invoke('ai-chat', {
        body: {
          message: userMessage,
          language: detectedLanguage
        }
      });

      if (aiError) throw aiError;

      const aiResponse = aiData.response;

      // Save AI response
      const { data: aiMsgData, error: aiMsgError } = await supabase
        .from('chat_messages')
        .insert({
          conversation_id: conversation.id,
          message: aiResponse,
          sender: 'ai',
          message_type: 'text'
        })
        .select()
        .single();

      if (aiMsgError) throw aiMsgError;

      // Add AI message to state
      setMessages(prev => [...prev, convertDatabaseMessage(aiMsgData)]);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessages = {
        fr: "Impossible d'envoyer le message. Veuillez réessayer.",
        en: "Unable to send message. Please try again.",
        ro: "Nu pot trimite mesajul. Vă rog încercați din nou.",
        de: "Nachricht kann nicht gesendet werden. Bitte versuchen Sie es erneut."
      };
      const detectedLanguage = detectLanguage(userMessage);
      toast({
        title: detectedLanguage === 'en' ? "Error" : detectedLanguage === 'ro' ? "Eroare" : detectedLanguage === 'de' ? "Fehler" : "Erreur",
        description: errorMessages[detectedLanguage],
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initializeConversation();
    loadMessages();
  }, [sessionId]);

  return {
    messages,
    sendMessage,
    isLoading
  };
};
