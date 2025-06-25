
import React from 'react';
import { Shield, Star, MapPin } from 'lucide-react';

const TrustBar = () => {
  return (
    <div className="bg-green-50 border-b border-green-100 py-2 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-green-700">
          <div className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            <span className="font-medium">Remboursement CNS jusqu'à 80%</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            <span className="font-medium">1000+ patients accompagnés</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span className="font-medium">3 cabinets au Luxembourg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
