import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, UserCheck, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { scrollToElement } from '../utils/scrollUtils';

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
    scrollToElement('cabinets');
  };

  return (
    <section id="accueil" 
      className="pt-16 pb-16 relative overflow-hidden min-h-[80vh] flex items-center -mt-2"
      role="banner"
      aria-label="Section hero avec images de nutrition et bien-être en arrière-plan"
    >
      {/* Image slideshow with optimized loading */}
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={index === 0 ? "Consultation de diététique en cours avec équipements de mesure corporelle professionnels" : "Images de nutrition et bien-être"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "low"}
          decoding={index === 0 ? "sync" : "async"}
          width="1200"
          height="800"
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Text background overlay for better readability */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            {/* Main H1 heading with fade-in animation */}
            <h1 className="text-[40px] md:text-[56px] font-bold text-white mb-4 leading-tight animate-fade-in">
              Diététicienne à Luxembourg — Gabriela Ferent
            </h1>
            
            {/* First subtitle with larger size */}
            <h2 className="text-[22px] md:text-[28px] font-medium text-white mt-4 mb-2 animate-fade-in [animation-delay:0.2s]">
              3 cabinets au Luxembourg
            </h2>
            
            {/* Second subtitle with smaller size */}
            <h3 className="text-[16px] md:text-[20px] font-normal text-white mb-8 animate-fade-in [animation-delay:0.3s]">
              Des consultations adaptées à votre santé, avec ou sans ordonnance
            </h3>
            
            {/* CTA Button with enhanced hover effects and fade-in animation */}
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-green-700 text-white text-[16px] md:text-[20px] font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in [animation-delay:0.4s]"
              aria-label="Je réserve ma consultation de nutrition"
            >
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;