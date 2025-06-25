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

  // Language detection helper
  const detectLanguage = (text: string): 'fr' | 'en' | 'ro' | 'de' => {
    const lowerText = text.toLowerCase();
    
    // Romanian keywords
    const romanianKeywords = ['salut', 'bună', 'mulțumesc', 'vă rog', 'îmi poți', 'cum pot', 'informații', 'programare', 'consultație', 'dietetician', 'problema', 'sănătate', 'ajuta', 'rezolva'];
    if (romanianKeywords.some(keyword => lowerText.includes(keyword))) return 'ro';
    
    // German keywords
    const germanKeywords = ['hallo', 'guten', 'danke', 'bitte', 'können sie', 'wie kann', 'informationen', 'termin', 'beratung', 'ernährungsberatung', 'problem', 'gesundheit'];
    if (germanKeywords.some(keyword => lowerText.includes(keyword))) return 'de';
    
    // English keywords
    const englishKeywords = ['hello', 'thank you', 'please', 'can you', 'how can', 'information', 'appointment', 'consultation', 'dietitian', 'problem', 'health', 'help'];
    if (englishKeywords.some(keyword => lowerText.includes(keyword))) return 'en';
    
    // Default to French (primary language for Luxembourg)
    return 'fr';
  };

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

      // Detect language and generate AI response
      const detectedLanguage = detectLanguage(userMessage);
      const aiResponse = generateAIResponse(userMessage, detectedLanguage);

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

  // Multilingual AI response generator
  const generateAIResponse = (userMessage: string, language: 'fr' | 'en' | 'ro' | 'de'): string => {
    const lowerMessage = userMessage.toLowerCase();

    // General health questions
    if (lowerMessage.includes('sănătate') || lowerMessage.includes('problema') || lowerMessage.includes('rezolv') || 
        lowerMessage.includes('health') || lowerMessage.includes('problem') || lowerMessage.includes('solve') ||
        lowerMessage.includes('santé') || lowerMessage.includes('problème') || lowerMessage.includes('résoudre') ||
        lowerMessage.includes('gesundheit') || lowerMessage.includes('problem') || lowerMessage.includes('lösen')) {
      
      const responses = {
        fr: `Je comprends que vous avez des préoccupations de santé. En tant qu'assistant de Gabriela Ferent, diététicienne certifiée, je peux vous orienter vers les bonnes solutions.

**🏥 Consultations disponibles :**
• **CNS** (sur prescription médicale) - Remboursées à 80%
• **Privées** - Accès direct sans prescription

**📋 Pathologies couramment traitées :**
• Diabète et prédiabète
• Surpoids et obésité
• Troubles digestifs
• Hypertension
• Cholestérol élevé
• Troubles alimentaires

**🔗 Prendre rendez-vous :** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Pour une évaluation personnalisée, je vous recommande de réserver une consultation. Avez-vous une prescription médicale ou souhaitez-vous une consultation privée ?`,

        en: `I understand you have health concerns. As Gabriela Ferent's assistant, a certified dietitian, I can guide you to the right solutions.

**🏥 Available consultations:**
• **CNS** (with medical prescription) - 80% reimbursed
• **Private** - Direct access without prescription

**📋 Commonly treated conditions:**
• Diabetes and prediabetes
• Overweight and obesity
• Digestive disorders
• Hypertension
• High cholesterol
• Eating disorders

**🔗 Book appointment:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

For a personalized assessment, I recommend booking a consultation. Do you have a medical prescription or would you prefer a private consultation?`,

        ro: `Înțeleg că aveți preocupări legate de sănătate. În calitate de asistent al Gabrielei Ferent, dietetician certificat, vă pot ghida către soluțiile potrivite.

**🏥 Consultații disponibile:**
• **CNS** (cu prescripție medicală) - Rambursate 80%
• **Private** - Acces direct fără prescripție

**📋 Afecțiuni frecvent tratate:**
• Diabet și prediabet
• Suprapondere și obezitate
• Tulburări digestive
• Hipertensiune
• Colesterol ridicat
• Tulburări alimentare

**🔗 Programare:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Pentru o evaluare personalizată, vă recomand să rezervați o consultație. Aveți o prescripție medicală sau preferați o consultație privată?`,

        de: `Ich verstehe, dass Sie gesundheitliche Bedenken haben. Als Assistent von Gabriela Ferent, einer zertifizierten Ernährungsberaterin, kann ich Sie zu den richtigen Lösungen führen.

**🏥 Verfügbare Beratungen:**
• **CNS** (mit ärztlicher Verschreibung) - 80% erstattet
• **Privat** - Direkter Zugang ohne Verschreibung

**📋 Häufig behandelte Erkrankungen:**
• Diabetes und Prädiabetes
• Übergewicht und Adipositas
• Verdauungsstörungen
• Bluthochdruck
• Hoher Cholesterinspiegel
• Essstörungen

**🔗 Termin buchen:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Für eine persönliche Beurteilung empfehle ich Ihnen, eine Beratung zu buchen. Haben Sie eine ärztliche Verschreibung oder bevorzugen Sie eine private Beratung?`
      };
      
      return responses[language];
    }

    // CNS information responses
    if (lowerMessage.includes('cns') || lowerMessage.includes('remboursement') || lowerMessage.includes('sécurité sociale') || 
        lowerMessage.includes('reimbursement') || lowerMessage.includes('insurance') || 
        lowerMessage.includes('rambursare') || lowerMessage.includes('asigurare') ||
        lowerMessage.includes('erstattung') || lowerMessage.includes('versicherung')) {
      
      const responses = {
        fr: `Les consultations diététiques sont remboursées par la CNS sur prescription médicale pour certaines pathologies comme :

• Diabète (type 1 et 2)
• Obésité (IMC ≥ 30)
• Troubles du comportement alimentaire
• Maladies cardiovasculaires
• Syndrome métabolique

📋 **Prescription obligatoire** de votre médecin traitant
💳 **Remboursement** : 80% du tarif conventionné
📞 **Prise de rendez-vous** : https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Souhaitez-vous plus d'informations sur une pathologie spécifique ?`,

        en: `Dietetic consultations are reimbursed by CNS with medical prescription for certain pathologies such as:

• Diabetes (type 1 and 2)
• Obesity (BMI ≥ 30)
• Eating disorders
• Cardiovascular diseases
• Metabolic syndrome

📋 **Medical prescription required** from your family doctor
💳 **Reimbursement**: 80% of conventional rate
📞 **Book appointment**: https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Would you like more information about a specific pathology?`,

        ro: `Consultațiile dietetice sunt rambursate de CNS cu prescripție medicală pentru anumite patologii precum:

• Diabet (tip 1 și 2)
• Obezitate (IMC ≥ 30)
• Tulburări ale comportamentului alimentar
• Boli cardiovasculare
• Sindrom metabolic

📋 **Prescripție obligatorie** de la medicul de familie
💳 **Rambursare**: 80% din tariful convențional
📞 **Programează întâlnire**: https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Doriți mai multe informații despre o patologie specifică?`,

        de: `Diätberatungen werden von der CNS mit ärztlicher Verschreibung für bestimmte Pathologien erstattet wie:

• Diabetes (Typ 1 und 2)
• Adipositas (BMI ≥ 30)
• Essstörungen
• Herz-Kreislauf-Erkrankungen
• Metabolisches Syndrom

📋 **Ärztliche Verschreibung erforderlich** von Ihrem Hausarzt
💳 **Erstattung**: 80% des konventionellen Tarifs
📞 **Termin buchen**: https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Möchten Sie weitere Informationen zu einer spezifischen Pathologie?`
      };
      
      return responses[language];
    }

    // Appointment booking responses
    if (lowerMessage.includes('rendez-vous') || lowerMessage.includes('rdv') || lowerMessage.includes('doctena') ||
        lowerMessage.includes('appointment') || lowerMessage.includes('booking') ||
        lowerMessage.includes('programare') || lowerMessage.includes('întâlnire') ||
        lowerMessage.includes('termin') || lowerMessage.includes('buchung')) {
      
      const responses = {
        fr: `🗓️ **Prise de rendez-vous en ligne via Doctena :**

**Cabinets disponibles :**
• Luxembourg-Ville
• Ettelbruck  
• Insenborn

**Types de consultations :**
• Consultations CNS (sur prescription)
• Consultations privées (accès direct)

🔗 **Réserver maintenant :** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Les créneaux sont mis à jour en temps réel. Vous pouvez choisir le cabinet le plus proche de chez vous !`,

        en: `🗓️ **Online appointment booking via Doctena:**

**Available clinics:**
• Luxembourg City
• Ettelbruck  
• Insenborn

**Types of consultations:**
• CNS consultations (with prescription)
• Private consultations (direct access)

🔗 **Book now:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Time slots are updated in real-time. You can choose the clinic closest to you!`,

        ro: `🗓️ **Programare online prin Doctena:**

**Cabinete disponibile:**
• Orașul Luxemburg
• Ettelbruck  
• Insenborn

**Tipuri de consultații:**
• Consultații CNS (cu prescripție)
• Consultații private (acces direct)

🔗 **Rezervă acum:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Intervalele orare sunt actualizate în timp real. Puteți alege cabinetul cel mai apropiat de dvs.!`,

        de: `🗓️ **Online-Terminbuchung über Doctena:**

**Verfügbare Praxen:**
• Luxemburg-Stadt
• Ettelbruck  
• Insenborn

**Arten von Beratungen:**
• CNS-Beratungen (mit Verschreibung)
• Private Beratungen (direkter Zugang)

🔗 **Jetzt buchen:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Terminslots werden in Echtzeit aktualisiert. Sie können die Praxis wählen, die Ihnen am nächsten liegt!`
      };
      
      return responses[language];
    }

    // Pathologies and treatments
    if (lowerMessage.includes('pathologie') || lowerMessage.includes('traite') || lowerMessage.includes('maladie') ||
        lowerMessage.includes('pathology') || lowerMessage.includes('treat') || lowerMessage.includes('disease') ||
        lowerMessage.includes('patologie') || lowerMessage.includes('tratează') || lowerMessage.includes('boală') ||
        lowerMessage.includes('pathologie') || lowerMessage.includes('behandelt') || lowerMessage.includes('krankheit')) {
      
      const responses = {
        fr: `🏥 **Pathologies et troubles traités par Gabriela Ferent :**

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

📞 **Contactez Gabriela** pour une évaluation personnalisée ou prenez rendez-vous sur Doctena.`,

        en: `🏥 **Pathologies and disorders treated by Gabriela Ferent:**

**CNS reimbursed pathologies:**
• Diabetes type 1 and 2
• Obesity (BMI ≥ 30)
• Eating disorders
• High blood pressure
• Dyslipidemia
• Metabolic syndrome

**Private consultations:**
• Weight loss
• Nutritional rebalancing
• Sports nutrition
• Allergies and food intolerances
• Nutrition during pregnancy
• Support for seniors

📞 **Contact Gabriela** for a personalized assessment or make an appointment on Doctena.`,

        ro: `🏥 **Patologii și tulburări tratate de Gabriela Ferent:**

**Patologii rambursate de CNS:**
• Diabet zaharat tip 1 și 2
• Obezitate (IMC ≥ 30)
• Tulburări de comportament alimentar
• Hipertensiune arterială
• Dislipidemii
• Sindrom metabolic

**Consultații private:**
• Pierdere în greutate
• Reechilibrare nutrițională
• Nutriție sportivă
• Alergii și intoleranțe alimentare
• Nutriție în timpul sarcinii
• Sprijin pentru seniori

📞 **Contactați Gabriela** pentru o evaluare personalizată sau faceți o programare pe Doctena.`,

        de: `🏥 **Von Gabriela Ferent behandelte Pathologien und Störungen:**

**Von der CNS erstattete Pathologien:**
• Diabetes Typ 1 und 2
• Adipositas (BMI ≥ 30)
• Essstörungen
• Bluthochdruck
• Dyslipidämie
• Metabolisches Syndrom

**Private Beratungen:**
• Gewichtsverlust
• Ernährungsumstellung
• Sportlerernährung
• Allergien und Nahrungsmittelunverträglichkeiten
• Ernährung während der Schwangerschaft
• Unterstützung für Senioren

📞 **Kontaktieren Sie Gabriela** für eine persönliche Beurteilung oder vereinbaren Sie einen Termin auf Doctena.`
      };
      
      return responses[language];
    }

    // Contact information responses
    if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('email') ||
        lowerMessage.includes('phone') || lowerMessage.includes('telefon') ||
        lowerMessage.includes('kontakt')) {
      
      const responses = {
        fr: `📞 **Contacter Gabriela Ferent :**

**Email :** gabriela@conseildietetique.lu
**Prise de RDV :** Via Doctena (recommandé)

**Cabinets :**
🏢 Luxembourg-Ville
🏢 Ettelbruck
🏢 Insenborn

**Horaires :** Lundi à Vendredi, 8h00 - 18h00

Pour une demande spécifique ou urgente, utilisez le bouton "Contacter Gabriela" pour envoyer un message direct.

🔗 **Doctena :** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`,

        en: `📞 **Contact Gabriela Ferent:**

**Email:** gabriela@conseildietetique.lu
**Appointments:** Via Doctena (recommended)

**Clinics:**
🏢 Luxembourg City
🏢 Ettelbruck
🏢 Insenborn

**Hours:** Monday to Friday, 8:00 AM - 6:00 PM

For specific or urgent requests, use the "Contact Gabriela" button to send a direct message.

🔗 **Doctena:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`,

        ro: `📞 **Contactați Gabriela Ferent:**

**Email:** gabriela@conseildietetique.lu
**Programări:** Prin Doctena (recomandat)

**Cabinete:**
🏢 Orașul Luxemburg
🏢 Ettelbruck
🏢 Insenborn

**Program:** Luni până Vineri, 8:00 - 18:00

Pentru solicitări specifice sau urgente, folosiți butonul "Contactați Gabriela" pentru a trimite un mesaj direct.

🔗 **Doctena:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`,

        de: `📞 **Gabriela Ferent kontaktieren:**

**E-Mail:** gabriela@conseildietetique.lu
**Termine:** Über Doctena (empfohlen)

**Praxen:**
🏢 Luxemburg-Stadt
🏢 Ettelbruck
🏢 Insenborn

**Öffnungszeiten:** Montag bis Freitag, 8:00 - 18:00 Uhr

Für spezifische oder dringende Anfragen verwenden Sie den Button "Gabriela kontaktieren", um eine direkte Nachricht zu senden.

🔗 **Doctena:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`
      };
      
      return responses[language];
    }

    // Default welcome responses - only shown for very generic greetings
    if (lowerMessage.includes('salut') || lowerMessage.includes('bună') || lowerMessage.includes('hello') || 
        lowerMessage.includes('bonjour') || lowerMessage.includes('hallo') || lowerMessage.includes('guten')) {
      
      const responses = {
        fr: `Bonjour ! Je suis l'assistant de Gabriela Ferent, diététicienne diplômée au Luxembourg.

**Je peux vous aider avec :**
• Informations sur les consultations remboursées CNS
• Prise de rendez-vous via Doctena
• Renseignements sur les pathologies traitées
• Coordonnées des cabinets

**Actions rapides :**
• Cliquez sur "Prendre rendez-vous sur Doctena" pour réserver
• Utilisez "Contacter Gabriela" pour un message direct
• Posez-moi une question spécifique !

Comment puis-je vous aider aujourd'hui ?`,

        en: `Hello! I'm Gabriela Ferent's assistant, a certified dietitian in Luxembourg.

**I can help you with:**
• Information about CNS-reimbursed consultations
• Appointment booking via Doctena
• Information about treated pathologies
• Clinic contact details

**Quick actions:**
• Click "Book appointment on Doctena" to reserve
• Use "Contact Gabriela" for a direct message
• Ask me a specific question!

How can I help you today?`,

        ro: `Bună! Sunt asistentul Gabrielei Ferent, dietetician certificat în Luxemburg.

**Vă pot ajuta cu:**
• Informații despre consultațiile rambursate CNS
• Programare prin Doctena
• Informații despre patologiile tratate
• Detalii de contact ale cabinetelor

**Acțiuni rapide:**
• Faceți clic pe "Programează pe Doctena" pentru a rezerva
• Folosiți "Contactați Gabriela" pentru un mesaj direct
• Adresați-mi o întrebare specifică!

Cu ce vă pot ajuta astăzi?`,

        de: `Hallo! Ich bin der Assistent von Gabriela Ferent, einer zertifizierten Ernährungsberaterin in Luxemburg.

**Ich kann Ihnen helfen bei:**
• Informationen über CNS-erstattete Beratungen
• Terminbuchung über Doctena
• Informationen über behandelte Pathologien
• Kontaktdaten der Praxen

**Schnelle Aktionen:**
• Klicken Sie auf "Termin auf Doctena buchen" zum Reservieren
• Verwenden Sie "Gabriela kontaktieren" für eine direkte Nachricht
• Stellen Sie mir eine spezifische Frage!

Wie kann ich Ihnen heute helfen?`
      };
      
      return responses[language];
    }

    // If no specific pattern matches, provide a helpful response based on detected language
    const responses = {
      fr: `Je comprends votre question. En tant qu'assistant de Gabriela Ferent, diététicienne certifiée, je peux vous aider avec :

• **Consultations CNS** remboursées (sur prescription)
• **Consultations privées** (accès direct)
• **Informations** sur les pathologies traitées
• **Prise de rendez-vous** via Doctena

Pour une réponse plus précise, pourriez-vous me dire ce que vous recherchez exactement ? Par exemple :
- Avez-vous une prescription médicale ?
- Souhaitez-vous des informations sur une pathologie spécifique ?
- Voulez-vous prendre rendez-vous ?

🔗 **Réserver directement :** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`,

      en: `I understand your question. As Gabriela Ferent's assistant, a certified dietitian, I can help you with:

• **CNS consultations** reimbursed (with prescription)
• **Private consultations** (direct access)
• **Information** about treated conditions
• **Appointment booking** via Doctena

For a more precise answer, could you tell me what you're looking for exactly? For example:
- Do you have a medical prescription?
- Would you like information about a specific condition?
- Do you want to book an appointment?

🔗 **Book directly:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`,

      ro: `Înțeleg întrebarea dumneavoastră. În calitate de asistent al Gabrielei Ferent, dietetician certificat, vă pot ajuta cu:

• **Consultații CNS** rambursate (cu prescripție)
• **Consultații private** (acces direct)
• **Informații** despre afecțiunile tratate
• **Programare** prin Doctena

Pentru un răspuns mai precis, îmi puteți spune exact ce căutați? De exemplu:
- Aveți o prescripție medicală?
- Doriți informații despre o afecțiune specifică?
- Vreți să programați o întâlnire?

🔗 **Rezervați direct:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`,

      de: `Ich verstehe Ihre Frage. Als Assistent von Gabriela Ferent, einer zertifizierten Ernährungsberaterin, kann ich Ihnen helfen mit:

• **CNS-Beratungen** erstattet (mit Verschreibung)
• **Private Beratungen** (direkter Zugang)
• **Informationen** über behandelte Erkrankungen
• **Terminbuchung** über Doctena

Für eine genauere Antwort, könnten Sie mir sagen, wonach Sie genau suchen? Zum Beispiel:
- Haben Sie eine ärztliche Verschreibung?
- Möchten Sie Informationen über eine spezifische Erkrankung?
- Möchten Sie einen Termin buchen?

🔗 **Direkt buchen:** https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874`
    };

    return responses[language];
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
