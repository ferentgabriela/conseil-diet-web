
import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px and if not dismissed
      setIsVisible(window.scrollY > 300 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className="bg-green-600 text-white rounded-2xl shadow-2xl p-4 max-w-sm border-2 border-green-500">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          <X className="h-4 w-4 text-white" />
        </button>
        
        <div className="pr-4">
          <p className="font-semibold mb-2 text-sm">
            🔥 Consultation disponible aujourd'hui
          </p>
          <p className="text-xs text-green-100 mb-3">
            Remboursée jusqu'à 80% par la CNS
          </p>
          
          <a
            href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm shadow-md"
          >
            <Calendar className="h-4 w-4" />
            Réserver
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
