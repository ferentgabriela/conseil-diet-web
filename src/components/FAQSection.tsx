
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Euro, Shield, Calendar, Clock, Phone, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenChat?: () => void;
}

const FAQSection = ({ onOpenChat }: FAQSectionProps) => {
  const faqs = [
    {
      question: "How much does a consultation cost?",
      answer: "Session prices start at €80. We will confirm the cost before your booking. Different types of consultations may have varying prices, and we'll always be transparent about costs upfront.",
      icon: Euro
    },
    {
      question: "Are your services reimbursed by insurance?",
      answer: "Some insurance providers cover dietician consultations. Please check with your insurer for specific coverage details. We can provide you with the necessary documentation for reimbursement requests.",
      icon: Shield
    },
    {
      question: "How do I book an appointment?",
      answer: "Simply click the button for your preferred location to schedule via Doctena. You can choose from our three convenient locations: Luxembourg City, Ettelbruck, or Insenborn.",
      icon: Calendar
    },
    {
      question: "How long is a typical consultation?",
      answer: "Initial consultations typically last 60-90 minutes, while follow-up sessions are usually 45-60 minutes. This allows us sufficient time to understand your needs and create a personalized plan.",
      icon: Clock
    },
    {
      question: "Do you offer online consultations?",
      answer: "Yes, we offer both in-person and online consultations to accommodate your schedule and preferences. Online sessions are just as effective for many types of nutritional guidance.",
      icon: Phone
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a list of current medications, recent lab results if available, and a food diary if you've been keeping one. This helps us understand your current situation better.",
      icon: HelpCircle
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Have questions? We have answers. Don't see what you're looking for? Feel free to contact us.
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
              Still have questions? Don't postpone your health any longer.
            </p>
            {onOpenChat && (
              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <HelpCircle className="h-5 w-5" />
                Ask a Question
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
