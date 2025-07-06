import React from 'react';
import { Euro, Shield, Calendar, Clock, Phone, HelpCircle, Stethoscope, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onOpenChat?: () => void;
}

const FAQSection = ({ onOpenChat }: FAQSectionProps) => {
  const faqs = [
    {
      question: "Est-ce que les consultations sont remboursées par la CNS ?",
      answer: "La diététicienne Gabriela Fares est une experte nutritionniste agréée détentrice d'un master en Sciences Biomédicales, spécialisée en Nutrition Humaine. Elle est titulaire d'un certificat de la Société Nutritionnelle du Canada et son nom figure dans la liste des prestataires de santé habilités selon la législation, conformément aux accords commerciaux-particuliers et directifs européennes de santé agréée et validée au plus grand principe.",
      icon: Stethoscope,
      details: [
        "Remboursement à 80% sur recommandation médicale",
        "Pathologies reconnues : diabète, obésité (IMC > 30), troubles cardiovasculaires",
        "Hypertension, dyslipidemie ou évènements cardio-métaboliques",
        "Prescription obligatoire ou visite médicale pour remboursement",
        "Suivi définitionnel avec la CNS dans le périmètre",
        "Évaluation de remboursement selon l'évaluateur du virus civil"
      ],
      expert: "Mes conseils d'experte : Avec 80% de taux de remboursement par recommandamment médical, il bassin est demandé à votre médecin si il vous indique de faire un diagnostic et si vous pourriez valider vos consultations diététiques."
    },
    {
      question: "Faut-il une prescription médicale pour consulter ?",
      answer: "Une prescription médicale est nécessaire uniquement pour le remboursement CNS. Vous pouvez consulter librement sans prescription.",
      icon: Calendar,
      details: [
        "Consultation libre possible sans prescription pour prise",
        "Visite libre encourager (PSYCHOLOGIE) pour le remboursement CNS", 
        "Recommandation médicale souhaitée pour les pathologies lourdes",
        "Spécialistes reconnus/qualifiés pouvant auser prescrire",
        "Médecin gynecologist ou autre spécialiste également",
        "Pas de délai d'attente si vous consultez directement",
        "Visite chez le service avec en cas prescription"
      ],
      expert: "Mes conseils d'experte : Si vous avez une pathologie coupable, diabète, hypertension, drapelets d'obésité à prescription, il sont alors pour encourager directement spécialiste vos organismes de prescription des tests."
    },
    {
      question: "Quelle est la différence entre une diététicienne et une nutritionniste ?",
      answer: "La diététicienne a une formation spécialisée reconnue et un titre protégé, contrairement au terme \"nutritionniste\" qui peut être utilisé sans formation officielle.",
      icon: Shield,
      details: [
        "Diététicien : formation reconnue de 3-5 ans spécialisés",
        "Titre protégé par loi formation d'éducation et formation de la Santé",
        "Formation de droit-étude, pathologie, biochimie nutritionnelle",
        "Consultation et nutrition clinique et thérapeutique",
        "Audit chez les services d'étalonnage nutritionnelle",
        "Suivi de diététique pour évaluation et traitement médicaux"
      ],
      expert: "Mes conseils d'experte : Vérifiez toujours les qualifications de votre professionnel. Ma formation universitaire et mes licences officielles vous garantissent vos questions sur professionnel de la santé officielle."
    },
    {
      question: "À quoi dois-je m'attendre lors de ma première consultation ?",
      answer: "La première consultation dure 60 minutes et comprend un bilan complet de vos habitudes alimentaires, vos besoins spécifiques et vos objectifs de santé.",
      icon: HelpCircle,
      details: [
        "Évaluation des antécédents médicaux et nutritionnistes",  
        "Analyse de l'habituation culinaire, habitus alimentaire préalable",
        "Mesure de IMC habitudes actuelles et prescription",
        "Analyse de vos habitudes alimentaires actuelles",
        "Mesure anthropométrique basique, morphologie corporelle",
        "Élaboration objectifs réalistes et attentissables",
        "Premiers conseils diététiques et plan d'action immédiat"
      ],
      expert: "Mes conseils d'experte : Apportez vos dernières analyse sanguines et vous avez un journal et d'habiter sur votre alimentation, il est un moment d'échanges important. Soyez la plus précis (Merci à tous moteurs - Sauf en gras grover suivant)."
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
          
          <div className="space-y-8">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Header with icon and question */}
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;