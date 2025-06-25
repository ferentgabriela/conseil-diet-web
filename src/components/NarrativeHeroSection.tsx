
import React from 'react';
import { Calendar, Shield, Heart, CheckCircle, Play } from 'lucide-react';

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
    <section id="accueil" className="relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(59, 130, 246, 0.6) 100%), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`
          }}
        />
        
        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Emotional Hook */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Vous méritez de vous sentir bien dans votre corps
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Arrêtez les régimes yo-yo. Commencez une vraie transformation avec Gabriela Ferent.
              </p>
            </div>

            {/* Video Play Button */}
            <div className="mb-8">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 text-lg">
                <Play className="h-6 w-6" />
                Découvrez mon approche
              </button>
            </div>

            {/* Problem Statement */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fini les régimes qui ne marchent pas
              </h2>
              <p className="text-lg mb-6 text-green-100">
                Avec un plan sur-mesure, je vous aide à atteindre vos objectifs sans privation ni frustration.
              </p>
              
              {/* Key promises */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="font-medium">Sans privation</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="font-medium">Suivi bienveillant</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="font-medium">Résultats durables</span>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col items-center mb-8">
              <button
                onClick={scrollToCabinets}
                className="inline-flex items-center gap-3 px-12 py-6 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 mb-4"
              >
                <Calendar className="h-6 w-6" />
                Commencer ma transformation
              </button>
              <p className="text-sm text-green-200 font-medium mb-3">
                🔥 Places disponibles cette semaine
              </p>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <Shield className="h-4 w-4 text-green-300" />
                <span className="text-sm font-medium">
                  Remboursé par la CNS jusqu'à 80% • Sans engagement
                </span>
              </div>
            </div>

            {/* Secondary CTA for narrative flow */}
            <div className="text-center">
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 text-white hover:text-green-200 font-medium transition-colors"
              >
                <Heart className="h-4 w-4" />
                Découvrez pourquoi me choisir
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-green-100 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>1000+ transformations réussies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>Perte de poids moyenne : 8-15kg</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>3 cabinets au Luxembourg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved transition */}
      <div className="relative">
        <svg 
          className="absolute bottom-0 left-0 w-full h-20 fill-white transform translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default NarrativeHeroSection;
