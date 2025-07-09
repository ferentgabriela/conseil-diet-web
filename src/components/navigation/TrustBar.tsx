
import React from 'react';
import { MapPin, Users, Euro } from 'lucide-react';

const TrustBar = () => {
  return (
    <>
      <div className="w-full h-12" style={{ backgroundColor: 'hsl(var(--nav-trust-bar))' }}>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm font-semibold w-full" style={{ color: 'hsl(var(--nav-trust-text))' }}>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>3 cabinets</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>1000+ patients satisfaits</span>
            </div>
            <div className="flex items-center gap-2">
              <Euro className="h-4 w-4" />
              <span>Remboursé jusqu'à 80%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustBar;
