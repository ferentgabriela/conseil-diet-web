import React from 'react';
import { Euro, Shield, Calendar, Clock, Phone, HelpCircle, Stethoscope, ArrowRight, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQSectionProps {
  onOpenChat?: () => void;
}

const FAQSection = ({ onOpenChat }: FAQSectionProps) => {
  const faqs = [
    {
      question: "Est-ce que les consultations sont remboursées par la CNS ?",
      answer: "Oui, la CNS rembourse 80% des consultations diététiques sur prescription médicale pour certaines pathologies spécifiques.",
      icon: Euro,
      details: [
        "Les tarifs des consultations CNS respectent la nomenclature officielle fixée par la CNS Luxembourg",
        "Remboursement à 80% du tarif conventionnel avec prescription médicale",
        "Uniquement les pathologies inscrites dans la nomenclature CNS donnent droit au remboursement de 80%",
        "Chaque suivi diététique comprend un bilan nutritionnel initial et un rapport final envoyés systématiquement à votre médecin prescripteur selon les règles CNS",
        "Pathologies couvertes : diabète, obésité (IMC ≥30), troubles cardiovasculaires",
        "Hypertension, dyslipidemies et syndrome métabolique également couverts",
        "Prescription obligatoire de votre médecin traitant ou spécialiste",
        "Durée généralement de 6-12 mois selon la pathologie",
        "Possibilité de renouvellement selon l'évolution de votre état"
      ],
      expert: "Mon conseil d'experte : Dans 90% des cas, les conditions de remboursement sont remplies. N'hésitez pas à demander à votre médecin s'il peut vous prescrire des consultations diététiques !"
    },
    {
      question: "Faut-il une prescription médicale pour consulter ?",
      answer: "Une prescription médicale est nécessaire uniquement pour le remboursement CNS. Vous pouvez consulter librement sans prescription.",
      icon: Calendar,
      details: [
        "Consultation libre possible sans prescription (tarif privé)",
        "Prescription nécessaire UNIQUEMENT pour le remboursement CNS",
        "Votre médecin traitant peut facilement établir la prescription",
        "Spécialistes (endocrinologue, cardiologue) peuvent aussi prescrire",
        "Pas de délai d'attente si vous consultez directement",
        "Même qualité de service avec ou sans prescription"
      ],
      expert: "Mon conseil d'experte : Si vous avez une pathologie (surpoids, diabète, hypertension), demandez d'abord la prescription. Sinon, vous pouvez commencer directement et demander la prescription plus tard."
    },
    {
      question: "Quelle différence entre consultations CNS et privées ?",
      answer: "Les consultations CNS nécessitent une ordonnance médicale et concernent uniquement certaines pathologies définies par la CNS. Les consultations privées ne nécessitent pas d'ordonnance et s'adressent à tous les autres objectifs nutritionnels.",
      icon: FileText,
      details: [
        "Consultations CNS : ordonnance médicale obligatoire",
        "Pathologies spécifiques définies par la CNS uniquement",
        "Remboursement à 80% selon nomenclature officielle",
        "Rapports obligatoires au médecin prescripteur",
        "Consultations privées : accès libre sans ordonnance",
        "Tous objectifs nutritionnels (bien-être, performance, prévention)",
        "Tarif privé, paiement direct",
        "Même qualité de service et d'accompagnement"
      ],
      expert: "Mon conseil d'experte : Si vous avez une pathologie reconnue par la CNS, optez pour le remboursement. Pour les objectifs de bien-être général ou prévention, les consultations privées offrent plus de flexibilité."
    },
    {
      question: "Quelle est la différence entre une diététicienne et une nutritionniste ?",
      answer: "La diététicienne a une formation spécialisée reconnue et un titre protégé, contrairement au terme \"nutritionniste\" qui peut être utilisé sans formation officielle.",
      icon: Shield,
      details: [
        "Diététicienne : formation universitaire de 3-4 ans minimum",
        "Titre protégé par la loi, inscription obligatoire au Ministère de la Santé",
        "Formation en physiologie, pathologie, biochimie nutritionnelle",
        "Compétence en nutrition clinique et thérapeutique",
        "Nutritionniste : terme générique, pas de formation obligatoire",
        "Seule la diététicienne peut pratiquer la nutrition médicale"
      ],
      expert: "Mon conseil d'experte : Vérifiez toujours les qualifications de votre professionnel. Ma formation universitaire et mon inscription officielle vous garantissent une prise en charge sérieuse et sécurisée."
    },
    {
      question: "À quoi dois-je m'attendre lors de ma première consultation ?",
      answer: "La première consultation dure 60 minutes et comprend un bilan complet de votre situation, vos habitudes alimentaires et l'établissement d'un plan personnalisé.",
      icon: HelpCircle,
      details: [
        "Durée : 60 minutes complètes, sans précipitation",
        "Anamnèse complète : santé, habitudes, histoire pondérale",
        "Analyse de vos habitudes alimentaires actuelles",
        "Mesures anthropométriques (poids, composition corporelle)",
        "Définition d'objectifs réalistes et personnalisés",
        "Premiers conseils pratiques et plan d'action immédiat"
      ],
      expert: "Mon conseil d'experte : Apportez vos dernières analyses sanguines si vous en avez, et n'hésitez pas à noter vos questions à l'avance. Plus je vous connais, mieux je peux vous aider !"
    },
    {
      question: "Proposez-vous des plans alimentaires personnalisés ?",
      answer: "Chaque patient reçoit un plan alimentaire entièrement personnalisé, adapté à ses goûts, contraintes, pathologies et objectifs spécifiques.",
      icon: Calendar,
      details: [
        "Plan 100% personnalisé selon vos goûts et aversions",
        "Adaptation à vos contraintes professionnelles et familiales",
        "Prise en compte des pathologies et intolérances",
        "Menus variés et recettes pratiques incluses",
        "Ajustements réguliers selon vos progrès",
        "Liste de courses et conseils pratiques fournis"
      ],
      expert: "Mon conseil d'experte : Un bon plan alimentaire doit s'adapter à votre vie, pas l'inverse ! Je crée des programmes que vous pouvez suivre même avec une vie bien remplie."
    },
    {
      question: "Est-ce que je vais devoir me priver ou suivre un régime strict ?",
      answer: "Absolument pas ! Mon approche privilégie l'équilibre et le plaisir alimentaire. Fini les privations et la frustration.",
      icon: HelpCircle,
      details: [
        "Aucune interdiction alimentaire drastique",
        "Apprentissage de l'équilibre et de la modération",
        "Conservation du plaisir de manger et de partager",
        "Techniques pour gérer les envies et les écarts",
        "Rééducation progressive sans choc psychologique",
        "Maintien de la vie sociale et des sorties"
      ],
      expert: "Mon conseil d'experte : Les régimes restrictifs échouent dans 95% des cas. Mon approche bienveillante vous permet de perdre du poids durablement tout en gardant une relation saine avec la nourriture."
    },
    {
      question: "Quels résultats puis-je espérer et en combien de temps ?",
      answer: "Les premiers résultats apparaissent dans les 2-4 semaines. Une transformation durable s'observe généralement sur 3-6 mois selon vos objectifs.",
      icon: Clock,
      details: [
        "1-2 semaines : amélioration de l'énergie et du sommeil",
        "3-4 semaines : perte de poids visible (1-2kg), moins de fringales",
        "6-8 semaines : amélioration des analyses (cholestérol, glycémie)",
        "3 mois : perte de 6-12kg, nouvelles habitudes ancrées",
        "6 mois : transformation complète et stabilisation",
        "Résultats durables si respect du suivi personnalisé"
      ],
      expert: "Mon conseil d'experte : La régularité des consultations est clé. Mes patients qui respectent le rythme de suivi atteignent leurs objectifs dans 95% des cas !"
    },
    {
      question: "Travaillez-vous avec des personnes ayant du diabète, de l'hypertension ou d'autres pathologies ?",
      answer: "Oui, je suis spécialisée en nutrition thérapeutique et j'accompagne régulièrement des patients avec diverses pathologies chroniques.",
      icon: Stethoscope,
      details: [
        "Diabète type 1 et 2 : gestion glycémique optimisée",
        "Hypertension : approche nutritionnelle pour réduire la tension",
        "Dyslipidémies : stratégies pour améliorer le bilan lipidique",
        "Troubles digestifs : adaptation alimentaire personnalisée",
        "Pathologies rénales et hépatiques : expertise spécialisée",
        "Collaboration avec votre équipe médicale"
      ],
      expert: "Mon conseil d'experte : L'alimentation peut considérablement améliorer vos paramètres de santé. Certains de mes patients ont pu réduire leurs médicaments grâce aux changements nutritionnels !"
    },
    {
      question: "Vos conseils prennent-ils en compte mes habitudes et mon emploi du temps ?",
      answer: "Absolument ! Je m'adapte entièrement à votre rythme de vie, vos contraintes professionnelles et familiales pour créer un plan réalisable au quotidien.",
      icon: Phone,
      details: [
        "Adaptation aux horaires de travail atypiques",
        "Solutions pour les repas d'affaires et déplacements",
        "Conseils pratiques pour les familles avec enfants",
        "Meal prep et organisation pour gagner du temps",
        "Alternatives pour les contraintes budgétaires",
        "Maintien de votre vie sociale et sorties"
      ],
      expert: "Mon conseil d'experte : Un bon plan nutritionnel doit s'intégrer naturellement dans votre quotidien. Je trouve toujours des solutions pratiques, même pour les emplois du temps les plus chargés !"
    },
    {
      question: "Dans quelles villes se trouvent vos cabinets et comment prendre rendez-vous ?",
      answer: "Je consulte dans 3 cabinets au Luxembourg : Luxembourg-Ville, Ettelbruck et Insenborn. Prise de rendez-vous simple et flexible selon votre localisation.",
      icon: Calendar,
      details: [
        "Luxembourg-Ville : centre-ville, parking disponible",
        "Ettelbruck : idéal pour le Nord du pays, facilement accessible",
        "Insenborn : parfait pour l'Ouest, cadre intimiste",
        "Même équipement et approche dans tous les cabinets",
        "Possibilité de changer de cabinet selon vos besoins",
        "Prise de rendez-vous en ligne ou par téléphone"
      ],
      expert: "Mon conseil d'experte : Choisissez le cabinet le plus pratique pour vous - proximité domicile ou travail. La régularité des rendez-vous est plus importante que la localisation !"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vos Questions, Mes Réponses d'Experte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avec plus de 10 ans d'expérience, je réponds aux débats sur questions les plus fréquentes de mes patients au Luxembourg
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div]:rounded-b-none group">
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4 w-full rounded-2xl relative">
                      <div className="flex items-center gap-4 justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white text-left">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                            <svg 
                              className="w-4 h-4 text-white transform transition-transform duration-300 group-data-[state=open]:rotate-180" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="p-8 pb-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {faq.answer}
                    </p>
                    
                    {/* Details list */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Dans le détail :</h4>
                      <ul className="space-y-3">
                        {faq.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Expert advice */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">💡</span>
                        </div>
                        <p className="text-blue-800 font-medium">
                          {faq.expert}
                        </p>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="text-center">
                      <button className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <Calendar className="h-5 w-5" />
                        Consultation personnalisée
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {/* Footer info */}
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500">
                        Gabriela Fares • Diététicienne nutritionniste Luxembourg
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;