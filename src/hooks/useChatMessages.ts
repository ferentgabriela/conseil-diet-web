
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

  // Create or get conversation
  const initializeConversation = async () => {
    try {
      // Check if conversation already exists
      const { data: existingConv } = await supabase
        .from('chat_conversations')
        .select('id')
        .eq('session_id', sessionId)
        .single();

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
        .single();

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
      // Get conversation ID
      const { data: conversation } = await supabase
        .from('chat_conversations')
        .select('id')
        .eq('session_id', sessionId)
        .single();

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

      // Generate AI response
      const aiResponse = generateAIResponse(userMessage);

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
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Simple AI response generator (to be replaced with actual AI integration)
  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // CNS information
    if (lowerMessage.includes('cns') || lowerMessage.includes('remboursement') || lowerMessage.includes('sécurité sociale')) {
      return `Les consultations diététiques sont remboursées par la CNS sur prescription médicale pour certaines pathologies comme :

• Diabète (type 1 et 2)
• Obésité (IMC ≥ 30)
• Troubles du comportement alimentaire
• Maladies cardiovasculaires
• Syndrome métabolique

📋 **Prescription obligatoire** de votre médecin traitant
💳 **Remboursement** : 80% du tarif conventionné
📞 **Prise de rendez-vous** : https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Souhaitez-vous plus d'informations sur une pathologie spécifique ?`;
    }

    // Appointment booking
    if (lowerMessage.includes('rendez-vous') || lowerMessage.includes('rdv') || lowerMessage.includes('doctena')) {
      return `🗓️ **Prise de rendez-vous en ligne via Doctena :**

**Cabinets disponibles :**
• Luxembourg-Ville
• Ettelbruck  
• Insenborn

**Types de consultations :**
• Consultations CNS (sur prescription)
• Consultations privées (accès direct)

🔗 **Réserver maintenant :** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Les créneaux sont mis à jour en temps réel. Vous pouvez choisir le cabinet le plus proche de chez vous !`;
    }

    // Pathologies and treatments
    if (lowerMessage.includes('pathologie') || lowerMessage.includes('traite') || lowerMessage.includes('maladie')) {
      return `🏥 **Pathologies et troubles traités par Gabriela Ferent :**

**Pathologies remboursées CNS :**
• Diabète type 1 et 2
• Obésité (IMC ≥ 30)
• Troubles du comportement alimentaire
• Hypertension artérielle
• Dyslipidémies
• Syndrome métabolique

**Consultations privées :**
• Perte de poids
• Rééquilibrage alimentaire
• Nutrition sportive
• Allergies et intolérances alimentaires
• Nutrition pendant la grossesse
• Accompagnement des seniors

📞 **Contactez Gabriela** pour une évaluation personnalisée ou prenez rendez-vous sur Doctena.`;
    }

    // Contact information
    if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('email')) {
      return `📞 **Contacter Gabriela Ferent :**

**Email :** gabriela@conseildietetique.lu
**Prise de RDV :** Via Doctena (recommandé)

**Cabinets :**
🏢 Luxembourg-Ville
🏢 Ettelbruck
🏢 Insenborn

**Horaires :** Lundi à Vendredi, 8h00 - 18h00

Pour une demande spécifique ou urgente, utilisez le bouton "Contacter Gabriela" pour envoyer un message direct.

🔗 **Doctena :** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`;
    }

    // Default response
    return `Bonjour ! Je suis l'assistant de Gabriela Ferent, diététicienne diplômée au Luxembourg.

**Je peux vous aider avec :**
• Informations sur les consultations remboursées CNS
• Prise de rendez-vous via Doctena
• Renseignements sur les pathologies traitées
• Coordonnées des cabinets

**Actions rapides :**
• Cliquez sur "Prendre rendez-vous sur Doctena" pour réserver
• Utilisez "Contacter Gabriela" pour un message direct
• Posez-moi une question spécifique !

Comment puis-je vous aider aujourd'hui ?`;
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
