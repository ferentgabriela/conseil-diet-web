import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

// Restrict CORS to production domain only to prevent unauthorized access
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://conseildietetique.vercel.app',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Rate limiting helper
async function checkRateLimit(supabase: any, identifier: string, endpoint: string, maxRequests = 5, windowMinutes = 5): Promise<boolean> {
  const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000);
  
  // Clean old entries
  await supabase
    .from('rate_limits')
    .delete()
    .lt('window_start', windowStart.toISOString());
  
  // Check current usage
  const { data: existing } = await supabase
    .from('rate_limits')
    .select('request_count')
    .eq('identifier', identifier)
    .eq('endpoint', endpoint)
    .gte('window_start', windowStart.toISOString())
    .single();
  
  if (existing && existing.request_count >= maxRequests) {
    return false;
  }
  
  // Update or create rate limit entry
  if (existing) {
    await supabase
      .from('rate_limits')
      .update({ request_count: existing.request_count + 1 })
      .eq('identifier', identifier)
      .eq('endpoint', endpoint)
      .gte('window_start', windowStart.toISOString());
  } else {
    await supabase
      .from('rate_limits')
      .insert({
        identifier,
        endpoint,
        request_count: 1,
        window_start: new Date().toISOString()
      });
  }
  
  return true;
}

// Language detection helper
function detectLanguage(text: string): string {
  const lowerText = text.toLowerCase();
  
  if (/\b(bonjour|salut|merci|oui|non|comment|pourquoi|où|quand|que|qui|je suis|c'est|il y a)\b/.test(lowerText)) {
    return 'fr';
  } else if (/\b(bună|salut|mulțumesc|da|nu|cum|de ce|unde|când|ce|cine|sunt|este|există)\b/.test(lowerText)) {
    return 'ro';
  } else if (/\b(guten|hallo|danke|ja|nein|wie|warum|wo|wann|was|wer|ich bin|es ist|gibt)\b/.test(lowerText)) {
    return 'de';
  } else {
    return 'en';
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sessionId, message } = await req.json();
    
    if (!sessionId || typeof sessionId !== 'string' || sessionId.length < 10) {
      return new Response(JSON.stringify({ error: 'Invalid session ID' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid message' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate message length to prevent abuse
    if (message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Message too long. Maximum 2000 characters.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Initialize Supabase client with service role
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rateLimitOk = await checkRateLimit(supabase, `${clientIP}:${sessionId}`, 'chat-write', 10, 10);
    
    if (!rateLimitOk) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please wait before sending more messages.' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Initialize conversation if needed
    let conversation;
    const { data: existingConv } = await supabase
      .from('chat_conversations')
      .select('id')
      .eq('session_id', sessionId)
      .maybeSingle();

    if (existingConv) {
      conversation = existingConv;
    } else {
      const { data: newConv, error: convError } = await supabase
        .from('chat_conversations')
        .insert({ session_id: sessionId })
        .select('id')
        .single();

      if (convError) {
        console.error('Error creating conversation:', convError);
        throw new Error('Failed to create conversation');
      }
      conversation = newConv;
    }

    // Insert user message
    const { error: userMessageError } = await supabase
      .from('chat_messages')
      .insert({
        conversation_id: conversation.id,
        message: message.trim(),
        sender: 'user'
      });

    if (userMessageError) {
      console.error('Error saving user message:', userMessageError);
      throw new Error('Failed to save message');
    }

    // Get AI response
    const language = detectLanguage(message);
    const systemPrompts = {
      fr: `Tu es l'assistant IA de Gabriela Ferent, diététicienne nutritionniste agréée au Luxembourg. Tu représentes son expertise professionnelle avec bienveillance et professionnalisme.

CONTEXTE PROFESSIONNEL:
- Gabriela est diététicienne nutritionniste agréée, membre de l'ADLUX (Association des Diététiciens du Luxembourg)
- Elle pratique au Cabinet Médical Hamilius au centre-ville de Luxembourg et propose aussi des consultations à domicile
- Spécialisée dans la gestion du poids, diabète, troubles digestifs, nutrition sportive, et accompagnement pendant la grossesse

INSTRUCTIONS STRICTES:
1. Réponds UNIQUEMENT aux questions liées à la nutrition, diététique, et aux services de Gabriela
2. Si on te demande autre chose, redirige poliment vers les sujets nutritionnels
3. Pour les questions médicales complexes, recommande de consulter Gabriela directement
4. Sois empathique, professionnel, et informatif
5. N'invente jamais d'informations sur les services ou tarifs
6. Encourage les consultations personnalisées pour des conseils adaptés

SERVICES DISPONIBLES:
- Consultations individuelles (cabinet et domicile)
- Gestion du poids et rééquilibrage alimentaire
- Accompagnement diabète et maladies métaboliques
- Nutrition sportive
- Troubles digestifs
- Nutrition pendant grossesse/allaitement
- Éducation nutritionnelle

INFORMATIONS PRATIQUES:
- Cabinet: Cabinet Médical Hamilius, Luxembourg-Ville
- Consultations à domicile disponibles
- Membre ADLUX
- Remboursement possible selon mutuelle

RÉSERVATION EN LIGNE:
Pour prendre rendez-vous, visitez directement: https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Termine toujours en proposant de prendre rendez-vous si approprié.`,

      en: `You are the AI assistant for Gabriela Ferent, a certified dietitian-nutritionist in Luxembourg. You represent her professional expertise with kindness and professionalism.

PROFESSIONAL CONTEXT:
- Gabriela is a certified dietitian-nutritionist, member of ADLUX (Association of Dietitians of Luxembourg)
- She practices at Cabinet Médical Hamilius in Luxembourg City center and also offers home consultations
- Specialized in weight management, diabetes, digestive disorders, sports nutrition, and pregnancy support

STRICT INSTRUCTIONS:
1. Respond ONLY to questions related to nutrition, dietetics, and Gabriela's services
2. If asked about anything else, politely redirect to nutritional topics
3. For complex medical questions, recommend consulting Gabriela directly
4. Be empathetic, professional, and informative
5. Never invent information about services or rates
6. Encourage personalized consultations for tailored advice

AVAILABLE SERVICES:
- Individual consultations (office and home)
- Weight management and dietary rebalancing
- Diabetes and metabolic disease support
- Sports nutrition
- Digestive disorders
- Pregnancy/breastfeeding nutrition
- Nutritional education

PRACTICAL INFORMATION:
- Office: Cabinet Médical Hamilius, Luxembourg City
- Home consultations available
- ADLUX member
- Possible reimbursement according to insurance

ONLINE BOOKING:
To book an appointment, visit directly: https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Always end by suggesting to book an appointment if appropriate.`,

      ro: `Ești asistentul IA al Gabrielei Ferent, dietetician-nutriționist certificat în Luxemburg. Reprezinți expertiza ei profesională cu bunătate și profesionalism.

CONTEXT PROFESIONAL:
- Gabriela este dietetician-nutriționist certificat, membru ADLUX (Asociația Dieteticienilor din Luxemburg)
- Practică la Cabinet Médical Hamilius în centrul orașului Luxembourg și oferă și consultații la domiciliu
- Specializată în managementul greutății, diabet, tulburări digestive, nutriție sportivă și suport în timpul sarcinii

INSTRUCȚIUNI STRICTE:
1. Răspunde DOAR la întrebări legate de nutriție, dietetică și serviciile Gabrielei
2. Dacă ești întrebat despre altceva, redirecționează politicos către subiecte nutriționale
3. Pentru întrebări medicale complexe, recomandă consultarea directă cu Gabriela
4. Fii empatic, profesional și informativ
5. Nu inventa niciodată informații despre servicii sau tarife
6. Încurajează consultațiile personalizate pentru sfaturi adaptate

SERVICII DISPONIBILE:
- Consultații individuale (cabinet și domiciliu)
- Managementul greutății și reechilibrarea alimentară
- Suport pentru diabet și boli metabolice
- Nutriție sportivă
- Tulburări digestive
- Nutriție în timpul sarcinii/alăptării
- Educație nutrițională

INFORMAȚII PRACTICE:
- Cabinet: Cabinet Médical Hamilius, Orașul Luxembourg
- Consultații la domiciliu disponibile
- Membră ADLUX
- Rambursare posibilă conform asigurării

PROGRAMARE ONLINE:
Pentru a programa o întâlnire, vizitează direct: https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Termină întotdeauna sugerând să programezi o întâlnire dacă este adecvat.`,

      de: `Du bist der KI-Assistent von Gabriela Ferent, einer zertifizierten Diätassistentin-Ernährungsberaterin in Luxemburg. Du repräsentierst ihre professionelle Expertise mit Freundlichkeit und Professionalität.

PROFESSIONELLER KONTEXT:
- Gabriela ist zertifizierte Diätassistentin-Ernährungsberaterin, Mitglied der ADLUX (Vereinigung der Diätassistenten Luxemburgs)
- Sie praktiziert im Cabinet Médical Hamilius im Zentrum von Luxembourg-Stadt und bietet auch Hausbesuche an
- Spezialisiert auf Gewichtsmanagement, Diabetes, Verdauungsstörungen, Sporternährung und Schwangerschaftsbetreuung

STRENGE ANWEISUNGEN:
1. Antworte NUR auf Fragen zu Ernährung, Diätetik und Gabrielas Dienstleistungen
2. Falls nach etwas anderem gefragt wird, leite höflich zu Ernährungsthemen um
3. Bei komplexen medizinischen Fragen empfiehl eine direkte Beratung bei Gabriela
4. Sei empathisch, professionell und informativ
5. Erfinde niemals Informationen über Dienstleistungen oder Preise
6. Ermutige zu personalisierten Beratungen für maßgeschneiderte Ratschläge

VERFÜGBARE DIENSTLEISTUNGEN:
- Einzelberatungen (Praxis und Hausbesuch)
- Gewichtsmanagement und Ernährungsumstellung
- Diabetes- und Stoffwechselerkrankungen-Betreuung
- Sporternährung
- Verdauungsstörungen
- Schwangerschafts-/Stillzeitnutrition
- Ernährungsbildung

PRAKTISCHE INFORMATIONEN:
- Praxis: Cabinet Médical Hamilius, Luxembourg-Stadt
- Hausbesuche verfügbar
- ADLUX-Mitglied
- Kostenerstattung je nach Versicherung möglich

ONLINE-BUCHUNG:
Um einen Termin zu buchen, besuchen Sie direkt: https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874

Beende immer mit dem Vorschlag, einen Termin zu vereinbaren, falls angemessen.`
    };

    const systemPrompt = systemPrompts[language as keyof typeof systemPrompts] || systemPrompts.en;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', await response.text());
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Insert AI message
    const { error: aiMessageError } = await supabase
      .from('chat_messages')
      .insert({
        conversation_id: conversation.id,
        message: aiResponse,
        sender: 'ai'
      });

    if (aiMessageError) {
      console.error('Error saving AI message:', aiMessageError);
      throw new Error('Failed to save AI response');
    }

    console.log('Chat exchange completed successfully');

    return new Response(JSON.stringify({ 
      response: aiResponse
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-write function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to process message. Please try again.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});