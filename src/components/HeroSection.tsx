import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const HeroSection = () => {
  const handleBookingClick = (location: string) => {
    // Replace with actual Doctena URLs for each location
    const bookingUrls = {
      luxembourg: '#', // Replace with actual Doctena URL
      ettelbruck: '#', // Replace with actual Doctena URL
      insenborn: '#' // Replace with actual Doctena URL
    };
    
    window.open(bookingUrls[location as keyof typeof bookingUrls], '_blank');
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-green-25 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Achieve Your Ideal Health with a Certified Dietician Near You
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Three welcoming clinics in Luxembourg City, Ettelbruck, and Insenborn. 
            Personal nutrition guidance tailored to your goals.
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <button
              onClick={() => handleBookingClick('luxembourg')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MapPin className="h-5 w-5" />
              📍 Book in Luxembourg City
            </button>
            
            <button
              onClick={() => handleBookingClick('ettelbruck')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MapPin className="h-5 w-5" />
              📍 Book in Ettelbruck
            </button>
            
            <button
              onClick={() => handleBookingClick('insenborn')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MapPin className="h-5 w-5" />
              📍 Book in Insenborn
            </button>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-amber-800 font-medium text-sm">
              ⚡ Limited appointments available weekly—reserve your spot now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;