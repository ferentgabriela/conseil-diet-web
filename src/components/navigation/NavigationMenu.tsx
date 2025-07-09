
import React from 'react';

interface NavigationMenuProps {
  scrollToSection: (sectionId: string) => void;
}

const NavigationMenu = ({ scrollToSection }: NavigationMenuProps) => {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1 space-x-2 ml-4">
      <button
        onClick={() => scrollToSection('accueil')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-lg px-4 py-2 rounded-md"
      >
        Accueil
      </button>
      <button
        onClick={() => scrollToSection('apropos')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-lg px-4 py-2 rounded-md"
      >
        Mon Approche
      </button>
      <button
        onClick={() => scrollToSection('processus')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-lg px-4 py-2 rounded-md"
      >
        Votre Parcours
      </button>
      <button
        onClick={() => scrollToSection('transformations')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-lg px-4 py-2 rounded-md"
      >
        Témoignages
      </button>
      <button
        onClick={() => scrollToSection('services')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-lg px-4 py-2 rounded-md"
      >
        Consultations
      </button>
    </div>
  );
};

export default NavigationMenu;
