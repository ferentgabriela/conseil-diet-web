import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

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
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-green-25 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Atteignez Votre Santé Idéale avec une Diététicienne Certifiée Près de Chez Vous
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-500 mb-8 font-normal">
            Trois cabinets accueillants à Luxembourg-Ville, Ettelbruck et Insenborn. 
            Accompagnement nutritionnel personnalisé selon vos objectifs.
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
              🔥 Places limitées disponibles cette semaine
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
          
          <div className="text-center mt-6 mb-4">
            <p className="text-gray-600 font-medium">
              ✨ Plus de 1,000 patients accompagnés avec succès
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-green-800 font-medium text-sm">
              🔒 Vos données sont traitées de manière confidentielle et sécurisée
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;