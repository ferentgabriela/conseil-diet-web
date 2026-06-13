
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavigationLogo = () => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // On homepage, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex items-center">
      {location.pathname === '/' ? (
        <button onClick={handleLogoClick} className="cursor-pointer" aria-label="Logo Conseil Diététique Luxembourg - Gabriela Ferent">
          <img 
            src="/lovable-uploads/179c4bde-bcf3-45a7-8ea4-73a54222deb3.png" 
            alt="Logo Conseil Diététique Luxembourg - Gabriela Ferent" 
            className="h-12 md:h-16 lg:h-20 w-auto transition-transform hover:scale-105"
            width="180"
            height="80"
            loading="eager"
            decoding="async"
          />
        </button>
      ) : (
        <Link to="/" className="cursor-pointer" aria-label="Logo Conseil Diététique Luxembourg - Gabriela Ferent - Retour à l'accueil">
          <img 
            src="/lovable-uploads/179c4bde-bcf3-45a7-8ea4-73a54222deb3.png" 
            alt="Logo Conseil Diététique Luxembourg - Gabriela Ferent" 
            className="h-12 md:h-16 lg:h-20 w-auto transition-transform hover:scale-105"
            width="180"
            height="80"
            loading="eager"
            decoding="async"
          />
        </Link>
      )}
    </div>
  );
};

export default NavigationLogo;
