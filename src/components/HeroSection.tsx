import React from 'react';
import { MapPin, Calendar, Clock, UserCheck, Lock } from 'lucide-react';

const HeroSection = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" 
      className="pt-16 pb-16 relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center -mt-2"
      style={{
        backgroundImage: `url('/lovable-uploads/1f309c72-ddb5-4bae-944e-68046c01bf90.png')`
      }}
      role="banner"
      aria-label="Section hero avec image de comptoir de cuisine et légumes frais en arrière-plan"
    >
      {/* Simplified single gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline with fade-in animation */}
          <h1 className="text-[32px] md:text-[48px] font-bold text-white mb-4 leading-tight drop-shadow-2xl animate-fade-in">
            Reprenez le contrôle de votre santé dès aujourd'hui
          </h1>
          
          {/* Subheadline with margin-top and fade-in animation */}
          <h2 className="text-[16px] md:text-[20px] font-normal text-white mt-4 mb-8 drop-shadow-lg animate-fade-in [animation-delay:0.2s]">
            3 cabinets au Luxembourg – Consultations remboursées CNS & privées
          </h2>
          
          {/* CTA Button with enhanced hover effects and fade-in animation */}
          <button
            onClick={scrollToCabinets}
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#4CAF50] text-white text-[14px] md:text-[18px] font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in [animation-delay:0.4s]"
            aria-label="Réserver une consultation de nutrition"
          >
            Je réserve ma consultation
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