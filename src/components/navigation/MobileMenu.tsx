
import React from 'react';
import { Calendar } from 'lucide-react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
  scrollToCabinets: () => void;
}

const MobileMenu = ({ isMenuOpen, scrollToSection, scrollToCabinets }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden pb-4 animate-fade-in">
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => scrollToSection('accueil')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
        >
          Accueil
        </button>
        <button
          onClick={() => scrollToSection('apropos')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
        >
          Mon Approche
        </button>
        <button
          onClick={() => scrollToSection('processus')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
        >
          Votre Parcours
        </button>
        <button
          onClick={() => scrollToSection('transformations')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
        >
          Témoignages
        </button>
        <button
          onClick={() => scrollToSection('services')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
        >
          Consultations
        </button>
        
        <button
          onClick={scrollToCabinets}
          className="w-full inline-flex items-center gap-2 justify-center px-6 py-4 text-white font-semibold rounded-lg"
          style={{ 
            backgroundColor: 'hsl(var(--nav-cta-green))',
            minHeight: '48px'
          }}
        >
          <Calendar className="h-5 w-5" />
          Réserver ma consultation
        </button>
        <div className="text-xs font-medium text-center" style={{ color: 'hsl(var(--nav-trust-text))' }}>
          🔥 Places disponibles cette semaine
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
