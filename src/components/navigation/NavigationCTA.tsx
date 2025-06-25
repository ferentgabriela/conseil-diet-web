
import React from 'react';
import { Calendar } from 'lucide-react';

interface NavigationCTAProps {
  scrollToCabinets: () => void;
}

const NavigationCTA = ({ scrollToCabinets }: NavigationCTAProps) => {
  return (
    <div className="hidden md:block">
      <button
        onClick={scrollToCabinets}
        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover-scale"
      >
        <Calendar className="h-5 w-5" />
        Réserver ma consultation
      </button>
      <div className="text-xs text-green-700 font-medium mt-1 text-center">
        🔥 Places disponibles cette semaine
      </div>
    </div>
  );
};

export default NavigationCTA;
