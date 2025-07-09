import React from 'react';
import { MapPin, Calendar, Clock, UserCheck, Lock } from 'lucide-react';

const HeroSection = () => {
  const handleBookingClick = (location: string) => {
    // Replace with actual Doctena URLs for each location
    const bookingUrls = {
      luxembourg: '#', // Replace with actual Doctena URL
      ettelbruck: '#', // Replace with actual Doctena URL
      insenborn: '#' // Replace with actual Doctena URL
    };
    
    window.open(bookingUrls[location as keyof typeof bookingUrls], '_blank');
  };

  return (
    <section 
      className="pt-16 pb-16 relative overflow-hidden bg-cover bg-center bg-no-repeat -mt-2"
      style={{
        backgroundImage: `url('/lovable-uploads/0a8ef731-1e37-42fe-9edc-6fab463ddcc2.png')`
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-inter font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
            <div>Atteignez Votre Santé Idéale</div>
            <div>avec une</div>
            <div>Diététicienne Certifiée</div>
            <div>Près de Chez Vous</div>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-inter font-normal drop-shadow-lg">
            Trois cabinets accueillants à Luxembourg-Ville, Ettelbruck et Insenborn. 
            Accompagnement nutritionnel personnalisé selon vos objectifs.
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium shadow-lg">
              <Clock className="h-4 w-4 text-green-400" />
              Places limitées disponibles cette semaine
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <button
              onClick={() => handleBookingClick('luxembourg')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[64px]"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏛️</span>
                <MapPin className="h-5 w-5" />
              </div>
              Réserver Luxembourg-Ville
            </button>
            
            <button
              onClick={() => handleBookingClick('ettelbruck')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[64px]"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏘️</span>
                <MapPin className="h-5 w-5" />
              </div>
              Réserver Ettelbruck
            </button>
            
            <button
              onClick={() => handleBookingClick('insenborn')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[64px]"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <MapPin className="h-5 w-5" />
              </div>
              Réserver Insenborn
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium shadow-lg">
              <UserCheck className="h-4 w-4 text-green-400" />
              Plus de 1,000 patients accompagnés
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium shadow-lg">
              <Lock className="h-4 w-4 text-green-400" />
              Données traitées de manière sécurisée
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;