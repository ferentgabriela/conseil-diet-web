import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

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
              Our Locations
            </h2>
            <p className="text-lg text-gray-600">
              Three convenient locations across Luxembourg to serve you better.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
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
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-700">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600 text-sm">{location.hours}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => window.open(location.mapUrl, '_blank')}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Location
            </h3>
            <p className="text-gray-700 mb-6">
              All locations offer the same high-quality, personalized nutrition services.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                Book Luxembourg City
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Book Ettelbruck
              </button>
              <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                Book Insenborn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;