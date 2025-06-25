
import React from 'react';
import { ExternalLink, Calendar, Shield } from 'lucide-react';

const HeroSection = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-blue-25 to-green-25 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Reprenez le contrôle de votre santé
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            avec un accompagnement nutritionnel personnalisé
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Consultations à Luxembourg, remboursées jusqu'à 80% par la CNS, pour une approche bienveillante et efficace de votre alimentation
          </p>
          
          {/* Enhanced CTA Button */}
          <div className="flex flex-col items-center mb-6">
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
            >
              <Calendar className="h-6 w-6" />
              Prendre RDV
            </button>
            <div className="flex items-center gap-2 mt-3 px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700 font-medium">
                Sans engagement • Remboursé par la CNS jusqu'à 80%
              </span>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>1000+ patients accompagnés</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Consultations conformes aux normes CNS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>3 cabinets au Luxembourg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
