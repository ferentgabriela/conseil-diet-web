
import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Clock } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame to avoid forced reflows
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in">
      <div className="bg-green-600 text-white rounded-2xl shadow-2xl p-4 max-w-sm border-2 border-green-500">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-yellow-300" />
            <p className="font-semibold text-sm">
              🔥 Dernières places disponibles
            </p>
          </div>
          <p className="text-xs text-green-100 mb-3">
            Consultation cette semaine • Prise en charge CNS possible
          </p>
          
          <button
            onClick={scrollToCabinets}
            className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm shadow-md transform hover:scale-105"
          >
            <Calendar className="h-4 w-4" />
            Réserver maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
