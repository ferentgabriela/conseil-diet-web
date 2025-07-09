
import React from 'react';

const NavigationLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <img 
        src="/lovable-uploads/e1934c39-b732-4300-b8d3-e377e50c49ff.png" 
        alt="Conseil Diététique Logo" 
        className="h-12 md:h-16 w-auto"
      />
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-green-700">
          Conseil Diététique
        </h1>
        <p className="text-sm md:text-base text-green-600 -mt-1 font-medium">
          Résultats Durables
        </p>
      </div>
    </div>
  );
};

export default NavigationLogo;
