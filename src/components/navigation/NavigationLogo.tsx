
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationLogo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // On homepage, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // On other pages, navigate to homepage
      navigate('/');
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={handleLogoClick} className="cursor-pointer">
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
    </div>
  );
};

export default NavigationLogo;
