import React from 'react';
import { MapPin, Phone, Clock, Map } from 'lucide-react';

const LocationsSection = () => {
  const locations = [
    {
      name: "Luxembourg-Ville",
      address: "74, Avenue De La Faïencerie, 1510 Luxembourg",
      phone: "+352 691 379 172",
      hours: "Mercredi: 13h00-18h00",
      mapUrl: "https://www.google.com/maps/place/Cabinet+Di%C3%A9t%C3%A9ticienne+Gabriela+Ferent+-+Luxembourg/@49.6188034,6.1132753,17z/data=!3m1!4b1!4m6!3m5!1s0x47954f903aeab367:0x7409fab28a8304ed!8m2!3d49.6188!4d6.1181462!16s%2Fg%2F11xnmvzkc5?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Ettelbruck",
      address: "25, Grand-Rue, 9050 Ettelbruck, Luxembourg",
      phone: "+352 691 379 172",
      hours: "Mardi: 8h00-20h00",
      mapUrl: "https://www.google.com/maps/place/Cabinet+Di%C3%A9t%C3%A9ticienne+Gabriela+Ferent+-+Ettelbruck/@49.8463508,6.0958766,17z/data=!3m1!4b1!4m6!3m5!1s0x4795551cdb34d89b:0xc1452c1c5705ff8b!8m2!3d49.8463474!4d6.0984515!16s%2Fg%2F11xnm_lzpw?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Insenborn",
      address: "15, Burwiss, 9660 Insenborn, Luxembourg",
      phone: "+352 691 379 172",
      hours: "Lun, Jeu, Ven: 9h00-19h00\nSam: 9h00-14h00",
      mapUrl: "https://maps.google.com/?q=15+Burwiss+9660+Insenborn+Luxembourg"
    }
  ];

  return (
    <section id="locations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Cabinets
            </h2>
            <p className="text-lg text-gray-600">
              Trois emplacements pratiques à travers le Luxembourg pour mieux vous servir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => {

              return (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      📍 {location.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-4 flex-grow flex flex-col">
                    <div className="flex items-start gap-3 min-h-[4rem]">
                      <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Adresse</p>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 min-h-[3rem]">
                      <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Téléphone</p>
                        <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-700" title={`Appeler le cabinet de ${location.name}`}>
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 min-h-[3rem]">
                      <Clock className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Horaires</p>
                        <p className="text-gray-600 text-sm whitespace-pre-line">{location.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => window.open(location.mapUrl, '_blank')}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      <Map className="h-4 w-4" />
                      Voir sur la carte
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;