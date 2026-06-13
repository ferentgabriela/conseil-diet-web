import React from 'react';
import { Phone, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-0 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
          <div className="flex items-center hover:text-green-600 transition-colors py-3 sm:py-0">
            <a href="https://wa.me/352691379172" target="_blank" rel="noopener noreferrer" itemProp="telephone" title="Contacter Gabriela Ferent sur WhatsApp" className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+352 691 379 172</span>
            </a>
          </div>
          <div className="flex items-center hover:text-green-600 transition-colors py-3 sm:py-0">
            <a href="mailto:dieteticienne@conseildietetique.lu" itemProp="email" title="Envoyer un email à Gabriela Ferent" className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>dieteticienne@conseildietetique.lu</span>
            </a>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500 mt-6 leading-snug">
          <p>
            <span itemProp="name">Gabriela Ferent</span> • Diététicienne autorisée<br />
            Code prestataire CNS : 361043-09 / <a href="https://www.andl.lu/project/ferent-gabriela/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600 transition-colors py-1.5 sm:py-0 inline-block sm:inline" title="Voir le profil professionnel sur l'Association des Diététiciens">Membre ANDL</a><br />
            <a href="/mentions-legales" className="underline hover:text-green-600 transition-colors py-1.5 sm:py-0 inline-block sm:inline" title="Consulter les mentions légales du site">Mentions légales</a> | {' '}
            <a href="/#services" className="underline hover:text-green-600 transition-colors py-1.5 sm:py-0 inline-block sm:inline" title="Découvrir toutes nos prestations diététiques">Nos prestations</a> | {' '}
            <a href="/tarifs-prise-en-charge" className="underline hover:text-green-600 transition-colors py-1.5 sm:py-0 inline-block sm:inline" title="Voir les tarifs et informations de remboursement">Tarifs &amp; prise en charge</a> | {' '}
            <a href="/transparence" className="underline hover:text-green-600 transition-colors py-1.5 sm:py-0 inline-block sm:inline" title="Consulter la politique de transparence">Transparence</a>
          </p>
        </div>
        
        
        
      </div>
    </footer>;
};
export default Footer;