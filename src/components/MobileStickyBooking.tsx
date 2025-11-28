import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const MobileStickyBooking = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-green-700 shadow-2xl border-t-2 border-green-500 animate-fade-in">
      <div className="px-4 py-3">
        <a
          href="https://www.doctena.lu/fr/praticien/gabriela_ferent-4479925"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-white text-green-700 font-bold text-center px-6 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg transform hover:scale-105"
        >
          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>Prendre Rendez-vous</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBooking;
