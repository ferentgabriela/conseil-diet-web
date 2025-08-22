
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavigationMenuProps {
  scrollToSection: (sectionId: string) => void;
}

const NavigationMenu = ({ scrollToSection }: NavigationMenuProps) => {
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

  return (
    <div className="flex items-center space-x-1 lg:space-x-2">
      <button
        onClick={() => handleMenuClick('apropos')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        {t('navigation.about')}
      </button>
      <button
        onClick={() => handleMenuClick('processus')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        {t('navigation.process')}
      </button>
      <button
        onClick={() => handleMenuClick('transformations')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        {t('navigation.testimonials')}
      </button>
      <button
        onClick={() => handleMenuClick('cabinets')}
        className="nav-menu-item text-gray-800 hover:text-green-600 font-semibold text-sm lg:text-lg px-2 lg:px-4 py-2 rounded-md transition-colors"
      >
        {t('navigation.cabinets')}
      </button>
    </div>
  );
};

export default NavigationMenu;
