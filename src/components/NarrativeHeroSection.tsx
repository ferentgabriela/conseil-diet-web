
import React from 'react';
import { Calendar, Shield, Heart, CheckCircle } from 'lucide-react';

const NarrativeHeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('apropos');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="pt-8 pb-16 bg-gradient-to-br from-green-50 via-blue-25 to-green-25 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Problem Statement */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Vous êtes fatigué de suivre des régimes sans résultats ?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Entre le travail, la vie familiale... votre santé passe au second plan.
            </p>
          </div>

          {/* Solution Promise */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              Avec un plan sur-mesure, je vous aide à atteindre vos objectifs tout en savourant ce que vous mangez.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Gabriela Ferent</strong> • Diététicienne Nutritionniste certifiée au Luxembourg
            </p>
            
            {/* Key promises */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Sans privation</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Suivi bienveillant</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Résultats durables</span>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col items-center mb-8">
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-3 px-12 py-6 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse mb-4"
            >
              <Calendar className="h-6 w-6" />
              Commencer ma transformation
            </button>
            <p className="text-sm text-green-700 font-medium mb-3">
              🔥 Places disponibles cette semaine
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700 font-medium">
                Remboursé par la CNS jusqu'à 80% • Sans engagement
              </span>
            </div>
          </div>

          {/* Secondary CTA for narrative flow */}
          <div className="text-center">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium transition-colors hover-scale"
            >
              <Heart className="h-4 w-4" />
              Découvrez pourquoi me choisir
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 mt-8">
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

export default NarrativeHeroSection;
