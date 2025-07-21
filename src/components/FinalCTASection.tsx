import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const FinalCTASection = () => {
  const handleBookingClick = (location: string) => {
    const bookingUrls = {
      luxembourg: 'https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22943',
      ettelbruck: 'https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#24538',
      insenborn: 'https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22919'
    };
    
    window.open(bookingUrls[location as keyof typeof bookingUrls], '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 via-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Clock className="h-16 w-16 mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prêt à Franchir le Pas ?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Votre parcours de santé commence par un clic. Réservez votre consultation dès aujourd'hui.
            </p>
            <p className="text-lg text-white/80 mb-12">
              Ne reportez plus votre santé. Rejoignez des centaines de clients qui ont déjà transformé leur vie.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">🏢 Luxembourg-Ville</h3>
              <p className="text-white/80 mb-4">Emplacement central avec parking pratique</p>
              <button
                onClick={() => handleBookingClick('luxembourg')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Réserver
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">🌿 Ettelbruck</h3>
              <p className="text-white/80 mb-4">Cadre paisible au cœur de la ville</p>
              <button
                onClick={() => handleBookingClick('ettelbruck')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Réserver
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">🏡 Insenborn</h3>
              <p className="text-white/80 mb-4">Atmosphère chaleureuse avec une touche personnelle</p>
              <button
                onClick={() => handleBookingClick('insenborn')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Réserver
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-amber-100/20 border border-amber-300/30 rounded-lg p-6 max-w-lg mx-auto">
            <p className="text-amber-100 font-semibold">
              ⚡ Places limitées disponibles cette semaine
            </p>
            <p className="text-white/80 text-sm mt-2">
              N'attendez pas - votre avenir plus sain commence aujourd'hui
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;