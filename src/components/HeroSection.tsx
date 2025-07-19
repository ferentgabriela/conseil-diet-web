import React from 'react';
import { MapPin, Calendar, Clock, UserCheck, Lock } from 'lucide-react';

const HeroSection = () => {
  const handleBookingClick = () => {
    // You can customize this to open a specific booking page
    window.open('#', '_blank');
  };

  return (
    <section 
      className="pt-16 pb-16 relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center -mt-2"
      style={{
        backgroundImage: `url('/lovable-uploads/3c621b05-bfca-49e3-829a-a0d7198dbdc5.png')`
      }}
      role="banner"
      aria-label="Cadre circulaire coloré composé de fruits et légumes frais, symbolisant une alimentation saine"
    >
      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-[26px] md:text-[42px] font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            Reprenez le contrôle de votre santé dès aujourd'hui
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-[16px] md:text-[20px] font-normal text-white mb-8 drop-shadow-lg">
            3 cabinets au Luxembourg – Consultations remboursées CNS & privées
          </h2>
          
          {/* CTA Button */}
          <button
            onClick={handleBookingClick}
            className="inline-flex items-center px-6 py-3 bg-[#4CAF50] text-white text-[16px] md:text-[18px] font-medium rounded-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Réserver une consultation de nutrition"
          >
            Je réserve ma consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;