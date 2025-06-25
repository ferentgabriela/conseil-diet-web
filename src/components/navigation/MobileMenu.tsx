
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
          Pourquoi Gabriela ?
        </button>
        <button
          onClick={() => scrollToSection('processus')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
        >
          Comment ça marche
        </button>
        <button
          onClick={() => scrollToSection('transformations')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
        >
          Résultats de patients
        </button>
        <button
          onClick={() => scrollToSection('services')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
        >
          Consultations
        </button>
        
        <button
          onClick={scrollToCabinets}
          className="inline-flex items-center gap-2 justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg"
        >
          <Calendar className="h-5 w-5" />
          Réserver ma consultation
        </button>
        <div className="text-xs text-green-700 font-medium text-center">
          🔥 Places disponibles cette semaine
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
