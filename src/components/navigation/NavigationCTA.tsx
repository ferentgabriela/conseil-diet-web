
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
        className="nav-cta-lift inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-lg"
        style={{ 
          backgroundColor: 'hsl(var(--nav-cta-green))',
          minHeight: '48px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--nav-cta-green-hover))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--nav-cta-green))';
        }}
      >
        <Calendar className="h-5 w-5" />
        Réserver ma consultation
      </button>
      <div className="text-xs font-medium mt-1 text-center" style={{ color: 'hsl(var(--nav-trust-text))' }}>
        Places disponibles cette semaine
      </div>
    </div>
  );
};

export default NavigationCTA;
