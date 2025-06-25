
import React from 'react';

interface NavigationMenuProps {
  scrollToSection: (sectionId: string) => void;
}

const NavigationMenu = ({ scrollToSection }: NavigationMenuProps) => {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1 space-x-8 ml-8">
      <button
        onClick={() => scrollToSection('accueil')}
        className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
      >
        Accueil
      </button>
      <button
        onClick={() => scrollToSection('apropos')}
        className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
      >
        Pourquoi Gabriela ?
      </button>
      <button
        onClick={() => scrollToSection('processus')}
        className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
      >
        Comment ça marche
      </button>
      <button
        onClick={() => scrollToSection('transformations')}
        className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
      >
        Résultats de patients
      </button>
      <button
        onClick={() => scrollToSection('services')}
        className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
      >
        Consultations
      </button>
    </div>
  );
};

export default NavigationMenu;
