
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationMenuProps {
  scrollToSection: (sectionId: string) => void;
}

const NavigationMenu = ({ scrollToSection }: NavigationMenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // On homepage, scroll to section
      scrollToSection(sectionId);
    } else {
      // On other pages, navigate to homepage then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="flex items-center space-x-1 lg:space-x-2">
      <button
        onClick={() => handleMenuClick('accueil')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        Accueil
      </button>
      <button
        onClick={() => handleMenuClick('apropos')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        Mon Approche
      </button>
      <button
        onClick={() => handleMenuClick('processus')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        Votre Parcours
      </button>
      <button
        onClick={() => handleMenuClick('transformations')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        Témoignages
      </button>
      <button
        onClick={() => handleMenuClick('services')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        Consultations
      </button>
    </div>
  );
};

export default NavigationMenu;
