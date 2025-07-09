import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Map } from 'lucide-react';

const LocationsSection = () => {
  const locations = [
    {
      name: "Luxembourg City",
      address: "123 Avenue de la Liberté, 1931 Luxembourg",
      phone: "+352 26 12 34 56",
      hours: "Mon-Fri: 8:00-18:00, Sat: 9:00-13:00",
      mapUrl: "https://maps.google.com/?q=Luxembourg+City+Dietician"
    },
    {
      name: "Ettelbruck",
      address: "45 Grand-Rue, 9050 Ettelbruck",
      phone: "+352 81 23 45 67",
      hours: "Mon-Fri: 8:30-17:30, Sat: 9:00-12:00",
      mapUrl: "https://maps.google.com/?q=Ettelbruck+Dietician"
    },
    {
      name: "Insenborn",
      address: "12 Rue de l'Église, 8570 Insenborn",
      phone: "+352 95 34 56 78",
      hours: "Tue, Thu, Sat: 9:00-17:00",
      mapUrl: "https://maps.google.com/?q=Insenborn+Dietician"
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
              const getButtonColor = (locationName: string) => {
                switch (locationName) {
                  case "Luxembourg City":
                    return "bg-green-600 hover:bg-green-700";
                  case "Ettelbruck":
                    return "bg-blue-600 hover:bg-blue-700";
                  case "Insenborn":
                    return "bg-teal-600 hover:bg-teal-700";
                  default:
                    return "bg-green-600 hover:bg-green-700";
                }
              };

              return (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      📍 {location.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Adresse</p>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Téléphone</p>
                        <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-700">
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Horaires</p>
                        <p className="text-gray-600 text-sm">{location.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                    <button
                      onClick={() => window.open(location.mapUrl, '_blank')}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <Map className="h-4 w-4" />
                    </button>
                    
                    <Link 
                      to={location.name === "Luxembourg City" ? "/luxembourg" : location.name === "Ettelbruck" ? "/ettelbruck" : "/insenborn"}
                      className={`w-full px-6 py-3 text-white font-semibold rounded-lg transition-colors ${getButtonColor(location.name)} flex items-center justify-center`}
                    >
                      Réserver {location.name === "Luxembourg City" ? "Luxembourg-Ville" : location.name}
                    </Link>
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