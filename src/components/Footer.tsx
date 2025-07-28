
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
          <div className="flex items-center hover:text-green-600 transition-colors cursor-pointer">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+352691379172">+352 691 379 172</a>
          </div>
          <div className="flex items-center hover:text-green-600 transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            <a href="mailto:dieteticienne@conseildietetique.lu">dieteticienne@conseildietetique.lu</a>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500 mt-6 leading-snug">
          <p>
            Gabriela Ferent • Diététicienne autorisée<br />
            Code prestataire CNS : 361043-09 / Membre ANDL<br />
            <a href="/mentions-legales" className="underline hover:text-green-600 transition-colors">Mentions légales</a> | {' '}
            <a href="/tarifs-prise-en-charge" className="underline hover:text-green-600 transition-colors">Tarifs &amp; prise en charge</a> | {' '}
            <a href="/transparence" className="underline hover:text-green-600 transition-colors">Transparence</a>
          </p>
        </div>
        
        <div className="text-center text-xs text-gray-500 mt-4">
          © 2024 Gabriela Ferent - Diététicienne agréée au Luxembourg
        </div>
        <div className="text-center text-xs text-gray-500 mt-2">
          Vos données sont traitées en conformité avec la réglementation RGPD en vigueur au Luxembourg.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
