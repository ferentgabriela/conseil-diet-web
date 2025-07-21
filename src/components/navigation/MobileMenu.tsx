
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ isMenuOpen, scrollToSection }: MobileMenuProps) => {
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

  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden pb-4 animate-fade-in">
      <div className="flex flex-col space-y-4 px-2">
        <button
          onClick={() => handleMenuClick('accueil')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          Accueil
        </button>
        <button
          onClick={() => handleMenuClick('apropos')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          Mon Approche
        </button>
        <button
          onClick={() => handleMenuClick('processus')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          Votre Parcours
        </button>
        <button
          onClick={() => handleMenuClick('transformations')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          Témoignages
        </button>
        <button
          onClick={() => handleMenuClick('services')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          Consultations
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
