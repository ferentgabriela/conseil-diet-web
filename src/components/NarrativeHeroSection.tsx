
import React from 'react';
import { Calendar, Shield, Heart, CheckCircle, Play, ArrowRight, Sparkles } from 'lucide-react';

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
            {/* Emotional Hook with Visual Enhancement */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-4">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">Transformation garantie sans frustration</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Vous méritez de vous sentir bien dans votre corps
              </h1>
              
              <div className="relative">
                <p className="text-xl md:text-2xl mb-8 text-green-100">
                  Arrêtez les régimes yo-yo. Commencez une vraie transformation avec Gabriela Ferent.
                </p>
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Enhanced Video Play Button */}
            <div className="mb-8">
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-500 text-lg hover:scale-110 transform">
                <div className="relative">
                  <Play className="h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
                <span>Découvrez mon approche</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Visual Problem Statement */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-red-500/80 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✗</span>
                  </div>
                  Fini les régimes qui ne marchent pas
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-left">
                    <h3 className="font-semibold mb-2 text-green-200">✓ Mon approche</h3>
                    <p className="text-green-100">Plan sur-mesure adapté à votre mode de vie, sans privation ni frustration.</p>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-2 text-green-200">✓ Vos résultats</h3>
                    <p className="text-green-100">Perte de poids durable avec un suivi bienveillant et professionnel.</p>
                  </div>
                </div>
                
                {/* Visual promises grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-2" />
                    <span className="font-medium text-sm">Sans privation</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-2" />
                    <span className="font-medium text-sm">Suivi bienveillant</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <CheckCircle className="h-5 w-5 text-green-300 mx-auto mb-2" />
                    <span className="font-medium text-sm">Résultats durables</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Primary CTA */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <button
                  onClick={scrollToCabinets}
                  className="relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-500 text-xl shadow-xl hover:shadow-2xl transform hover:scale-110 group overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <Calendar className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Commencer ma transformation</span>
                  <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-xl bg-green-500/30 animate-ping"></div>
              </div>
              
              <div className="flex items-center gap-2 mt-4 mb-3">
                <div className="flex">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-200 ml-1"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-400 ml-1"></div>
                </div>
                <p className="text-sm text-orange-200 font-bold">
                  Places limitées cette semaine !
                </p>
              </div>
              
              <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <Shield className="h-4 w-4 text-green-300" />
                <span className="text-sm font-medium">
                  Remboursé par la CNS jusqu'à 80% • Sans engagement
                </span>
              </div>
            </div>

            {/* Enhanced Secondary CTA */}
            <div className="text-center">
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-2 text-white hover:text-green-200 font-medium transition-all duration-300 hover:scale-105"
              >
                <Heart className="h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="relative">
                  Découvrez pourquoi me choisir
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></div>
                </span>
              </button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-green-100 mt-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                <span>1000+ transformations réussies</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-200"></div>
                <span>Perte de poids moyenne : 8-15kg</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-3 h-3 bg-purple-300 rounded-full animate-pulse delay-400"></div>
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
