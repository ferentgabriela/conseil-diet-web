import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, UserCheck, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { scrollToElement } from '../utils/scrollUtils';

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: '/lovable-uploads/1f309c72-ddb5-4bae-944e-68046c01bf90.webp',
      alt: "Consultation de diététique au Luxembourg avec équipements de mesure corporelle professionnels",
    },
    {
      src: '/lovable-uploads/93b38569-b3fe-4bfa-bc2d-80b6a547847b.webp',
      alt: "Diététicienne nutritionniste présentant des fruits frais pour une alimentation équilibrée",
    },
    {
      src: '/lovable-uploads/6b584fa2-7cae-45b4-8d71-ff67ae89fad3.webp',
      alt: "Légumes frais et variés représentant une alimentation saine recommandée en consultation diététique",
    },
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
      {/* Image slideshow with optimized loading - only render first image initially */}
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "low"}
          decoding={index === 0 ? "sync" : "async"}
          sizes="100vw"
          width="1335"
          height="890"
        />
      ))}
      
      {/* Gradient overlay — darkened for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      
      <div className="hero-content">
        {/* Text background overlay for better readability */}
        <div className="hero-text-overlay">
          {/* Main H1 heading */}
                    <h1 className="hero-title">
                      Reprenez le contrôle de votre santé
                    </h1>
          
                    {/* Subtitle — name + title */}
                    <h2 className="hero-subtitle">
                      Gabriela Ferent — Diététicienne nutritionniste au Luxembourg
                    </h2>
          
                    {/* Locations with pin icons */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-3 hero-description">
                      <span className="inline-flex items-center gap-1.5">📍 Luxembourg-Ville</span>
                      <span className="inline-flex items-center gap-1.5">📍 Ettelbruck</span>
                      <span className="inline-flex items-center gap-1.5">📍 Insenborn</span>
                    </div>
          
                    {/* Key info — consultations with/without prescription */}
                    <p className="hero-description font-semibold">
                      Consultations avec ou sans ordonnance — Prise en charge CNS
                    </p>
          
          {/* CTA Button with enhanced hover effects and fade-in animation */}
          <button
            onClick={scrollToCabinets}
            className="hero-cta transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            aria-label="Je réserve ma consultation de nutrition"
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;