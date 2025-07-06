import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Calendar, Phone, Clock } from 'lucide-react';

const LocationInsenborn = () => {
  const handleBookingClick = () => {
    // Replace with actual Doctena URL for Insenborn
    window.open('#', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-green-50 to-teal-25">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Dietician in Insenborn – Your Local Nutrition Expert
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Visit our Insenborn clinic for compassionate, personalized nutrition advice.
            </p>
            
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center gap-3 px-10 py-5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calendar className="h-6 w-6" />
              Book in Insenborn
            </button>
            
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-amber-800 font-medium text-sm">
                ⚡ Limited appointments available weekly—reserve your spot now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Insenborn Location
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">12 Rue de l'Église, 8570 Insenborn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+35295345678" className="text-green-600 hover:text-green-700">
                        +352 95 34 56 78
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Tue, Thu, Sat: 9:00-17:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={handleBookingClick}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Your Appointment Now
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Insenborn Clinic<br />
                  Cozy Atmosphere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Location */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Our Insenborn Clinic?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Community Focus</h3>
                <p className="text-gray-600">
                  Serving the western Luxembourg community with personalized, local care.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Intimate Setting</h3>
                <p className="text-gray-600">
                  Cozy atmosphere with personal touch - perfect for comfortable, private consultations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Schedule</h3>
                <p className="text-gray-600">
                  Convenient appointment times including weekend availability to fit your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LocationInsenborn;