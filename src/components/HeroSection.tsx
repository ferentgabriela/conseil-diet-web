
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
          {/* SEO-optimized H1 with location keywords */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Diététicienne Luxembourg | Gabriela Ferent
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-700 font-semibold mb-6">
            Consultations CNS Remboursées & Privées au Luxembourg
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Reprenez le contrôle de votre santé avec un accompagnement nutritionnel personnalisé
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Nutritionniste diplômée à Luxembourg-Ville, Ettelbruck et Insenborn • Remboursement CNS jusqu'à 80% • Perte de poids durable
          </p>
          
          {/* Enhanced CTA Button with more emotional trigger */}
          <div className="flex flex-col items-center mb-6">
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
            >
              <Calendar className="h-6 w-6" />
              Commencez votre transformation
            </button>
            <p className="text-sm text-green-700 font-medium mt-2">
              🔥 Places disponibles cette semaine
            </p>
            <div className="flex items-center gap-2 mt-3 px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700 font-medium">
                Sans engagement • Remboursé par la CNS jusqu'à 80%
              </span>
            </div>
          </div>
          
          {/* Trust badges with results-focused messaging */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>1000+ transformations réussies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Perte de poids moyenne : 8-15kg</span>
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
