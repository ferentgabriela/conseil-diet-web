
import React from 'react';
import { MapPin, Users, Euro } from 'lucide-react';

const TrustBar = () => {
  return (
    <div className="bg-green-50 border-b border-green-100 py-2 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-green-700">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span className="font-medium">3 cabinets</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span className="font-medium">1000+ patients satisfaits</span>
          </div>
          <div className="flex items-center gap-1">
            <Euro className="h-3 w-3" />
            <span className="font-medium">Remboursé jusqu'à 80%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
