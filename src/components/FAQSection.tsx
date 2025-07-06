
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Euro, Shield, Calendar, Clock, Phone, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenChat?: () => void;
}

const FAQSection = ({ onOpenChat }: FAQSectionProps) => {
  const faqs = [
    {
      question: "Combien coûte une consultation ?",
      answer: "Les consultations débutent à partir de 80€. Nous confirmerons le coût avant votre réservation. Différents types de consultations peuvent avoir des tarifs variables, et nous serons toujours transparents sur les coûts à l'avance.",
      icon: Euro
    },
    {
      question: "Vos services sont-ils remboursés par l'assurance ?",
      answer: "Certaines compagnies d'assurance couvrent les consultations diététiques. Veuillez vérifier auprès de votre assureur pour les détails de couverture spécifiques. Nous pouvons vous fournir la documentation nécessaire pour les demandes de remboursement.",
      icon: Shield
    },
    {
      question: "Comment puis-je prendre rendez-vous ?",
      answer: "Cliquez simplement sur le bouton de votre localisation préférée pour planifier via Doctena. Vous pouvez choisir parmi nos trois emplacements pratiques : Luxembourg-Ville, Ettelbruck ou Insenborn.",
      icon: Calendar
    },
    {
      question: "Quelle est la durée d'une consultation type ?",
      answer: "Les consultations initiales durent généralement 60-90 minutes, tandis que les séances de suivi durent habituellement 45-60 minutes. Cela nous permet de disposer d'un temps suffisant pour comprendre vos besoins et créer un plan personnalisé.",
      icon: Clock
    },
    {
      question: "Proposez-vous des consultations en ligne ?",
      answer: "Oui, nous proposons des consultations en présentiel et en ligne pour s'adapter à votre horaire et vos préférences. Les séances en ligne sont tout aussi efficaces pour de nombreux types d'accompagnement nutritionnel.",
      icon: Phone
    },
    {
      question: "Que dois-je apporter à mon premier rendez-vous ?",
      answer: "Veuillez apporter une liste de vos médicaments actuels, des résultats d'analyses récentes si disponibles, et un journal alimentaire si vous en tenez un. Cela nous aide à mieux comprendre votre situation actuelle.",
      icon: HelpCircle
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquemment Posées
            </h2>
            <p className="text-lg text-gray-600">
              Vous avez des questions ? Nous avons les réponses. Vous ne trouvez pas ce que vous cherchez ? N'hésitez pas à nous contacter.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => {
                const IconComponent = faq.icon;
                return (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-14">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Vous avez encore des questions ? Ne remettez plus votre santé à plus tard.
            </p>
            {onOpenChat && (
              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <HelpCircle className="h-5 w-5" />
                Poser une Question
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
