import React from 'react';
import { Phone, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
          <div className="flex items-center hover:text-green-600 transition-colors cursor-pointer">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+352691379172" itemProp="telephone" title="Appeler Gabriela Ferent diététicienne">+352 691 379 172</a>
          </div>
          <div className="flex items-center hover:text-green-600 transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            <span 
              itemProp="email"
              className="cursor-pointer" 
              onClick={() => {
                const email = 'dieteticienne' + '@' + 'conseildietetique.lu';
                window.location.href = 'mailto:' + email;
              }}
            >
              dieteticienne@conseildietetique.lu
            </span>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500 mt-6 leading-snug">
          <p>
            <span itemProp="name">Gabriela Ferent</span> • Diététicienne autorisée<br />
            Code prestataire CNS : 361043-09 / <a href="https://www.andl.lu/project/ferent-gabriela/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600 transition-colors" title="Voir le profil professionnel sur l'Association des Diététiciens">Membre ANDL</a><br />
            <a href="/mentions-legales" className="underline hover:text-green-600 transition-colors" title="Consulter les mentions légales du site">Mentions légales</a> | {' '}
            <a href="/#services" className="underline hover:text-green-600 transition-colors" title="Découvrir toutes nos prestations diététiques">Nos prestations</a> | {' '}
            <a href="/tarifs-prise-en-charge" className="underline hover:text-green-600 transition-colors" title="Voir les tarifs et informations de remboursement">Tarifs &amp; prise en charge</a> | {' '}
            <a href="/transparence" className="underline hover:text-green-600 transition-colors" title="Consulter la politique de transparence">Transparence</a>
          </p>
        </div>
        
        
        
      </div>
    </footer>;
};
export default Footer;