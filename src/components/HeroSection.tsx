import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, UserCheck, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/lovable-uploads/1f309c72-ddb5-4bae-944e-68046c01bf90.png', // Original kitchen image
    '/lovable-uploads/93b38569-b3fe-4bfa-bc2d-80b6a547847b.png', // Doctor with fruits
    '/lovable-uploads/6b584fa2-7cae-45b4-8d71-ff67ae89fad3.png', // Fresh vegetables
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" 
      className="pt-16 pb-16 relative overflow-hidden min-h-[80vh] flex items-center -mt-2"
      role="banner"
      aria-label="Section hero avec images de nutrition et bien-être en arrière-plan"
    >
      {/* Image slideshow */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline with fade-in animation */}
          <h1 className="text-[32px] md:text-[48px] font-bold text-white mb-4 leading-tight drop-shadow-2xl animate-fade-in">
            {t('hero.title')}
          </h1>
          
          {/* Subheadline with margin-top and fade-in animation */}
          <h2 className="text-[16px] md:text-[20px] font-normal text-white mt-4 mb-8 drop-shadow-lg animate-fade-in [animation-delay:0.2s]">
            {t('hero.subtitle')}
          </h2>
          
          {/* CTA Button with enhanced hover effects and fade-in animation */}
          <button
            onClick={scrollToCabinets}
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#4CAF50] text-white text-[14px] md:text-[18px] font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in [animation-delay:0.4s]"
            aria-label="Réserver une consultation de nutrition"
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
      
      {/* Hidden image for accessibility */}
      <img 
        src="/lovable-uploads/1f309c72-ddb5-4bae-944e-68046c01bf90.png" 
        alt="Comptoir de cuisine moderne avec légumes frais colorés, symbolisant une alimentation saine et équilibrée"
        className="sr-only"
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;