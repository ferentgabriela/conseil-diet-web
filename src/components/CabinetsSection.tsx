
import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';

const CabinetsSection = () => {
  return (
    <section id="cabinets" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos Cabinets
          </h2>
          <p className="text-gray-600">
            3 locations au Luxembourg pour votre convenance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Luxembourg-Ville</h4>
            <p className="text-gray-600 mb-4 text-sm">Centre-ville</p>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Réserver <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Ettelbruck</h4>
            <p className="text-gray-600 mb-4 text-sm">Nord du Luxembourg</p>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#24538"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Réserver <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
            <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Insenborn</h4>
            <p className="text-gray-600 mb-4 text-sm">Proche d'Ettelbruck</p>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22919"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Réserver <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetsSection;
