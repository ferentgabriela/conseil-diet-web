
import React from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ isMenuOpen, scrollToSection }: MobileMenuProps) => {
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
      </div>
    </div>
  );
};

export default MobileMenu;
