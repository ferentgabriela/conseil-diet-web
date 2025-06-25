
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment savoir si ma consultation sera remboursée par la CNS ?",
      answer: "Les consultations diététiques sont remboursées à 80% par la CNS sur prescription médicale pour certaines pathologies : diabète, obésité (IMC ≥ 30), troubles du comportement alimentaire, hypertension, dyslipidémies et syndrome métabolique. Consultez votre médecin traitant pour obtenir une prescription."
    },
    {
      question: "Combien de temps dure une consultation ?",
      answer: "Une première consultation dure généralement 60 minutes pour faire un bilan complet. Les consultations de suivi durent 30 à 45 minutes selon vos besoins."
    },
    {
      question: "À quelle fréquence dois-je venir en consultation ?",
      answer: "La fréquence dépend de vos objectifs et de votre pathologie. En général, nous planifions des rendez-vous toutes les 2 à 4 semaines au début, puis nous espaçons progressivement."
    },
    {
      question: "Dois-je apporter quelque chose lors de ma première consultation ?",
      answer: "Apportez votre prescription médicale (si consultation CNS), vos dernières analyses de sang, la liste de vos médicaments et un carnet alimentaire si vous en tenez un."
    },
    {
      question: "Proposez-vous des consultations en ligne ?",
      answer: "Actuellement, toutes les consultations se déroulent en présentiel dans mes cabinets de Luxembourg, Ettelbruck ou Insenborn pour un suivi optimal."
    },
    {
      question: "Quels sont les tarifs des consultations privées ?",
      answer: "Les tarifs des consultations privées sont communiqués lors de la prise de rendez-vous. N'hésitez pas à me contacter pour plus d'informations."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Vous avez d'autres questions ? N'hésitez pas à me contacter.
            </p>
            <a
              href="mailto:gabriela@conseildietetique.lu"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Poser une question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
