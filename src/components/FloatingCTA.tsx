
import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
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
          <p className="font-semibold mb-2 text-sm">
            🔥 Consultation disponible aujourd'hui
          </p>
          <p className="text-xs text-green-100 mb-3">
            Remboursée jusqu'à 80% par la CNS
          </p>
          
          <button
            onClick={scrollToCabinets}
            className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm shadow-md"
          >
            <Calendar className="h-4 w-4" />
            Prendre RDV
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
