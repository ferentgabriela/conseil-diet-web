
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ isMenuOpen, scrollToSection }: MobileMenuProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // On homepage, scroll to section and update URL hash
      scrollToSection(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      // On other pages, navigate to homepage with hash
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handlePageClick = (path: string) => {
    navigate(path);
  };

  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden pb-4 animate-fade-in">
      <div className="flex flex-col space-y-4 px-2">
        <button
          onClick={() => handleMenuClick('apropos')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          {t('navigation.about')}
        </button>
        <button
          onClick={() => handleMenuClick('services')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          Prestations
        </button>
        <button
          onClick={() => handleMenuClick('processus')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          {t('navigation.process')}
        </button>
        <button
          onClick={() => handleMenuClick('transformations')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          {t('navigation.testimonials')}
        </button>
        <button
          onClick={() => handlePageClick('/contact')}
          className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold py-2"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
