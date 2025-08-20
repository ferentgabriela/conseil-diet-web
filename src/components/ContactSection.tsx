
import React from 'react';

interface ContactSectionProps {
  onOpenChat: () => void;
}

const ContactSection = ({ onOpenChat }: ContactSectionProps) => {
  return (
    <section className="py-12 bg-gray-50 border-t">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Questions ?
          </h3>
          <p className="text-gray-600 mb-6">
            N'hésitez pas à nous contacter pour plus d'informations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Poser une question
            </button>
            <button
              onClick={() => {
                const email = 'dieteticienne' + '@' + 'conseildietetique.lu';
                window.location.href = 'mailto:' + email;
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Email direct
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
