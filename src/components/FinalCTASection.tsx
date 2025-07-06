import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const FinalCTASection = () => {
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
    <section className="py-16 bg-gradient-to-br from-green-600 via-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Clock className="h-16 w-16 mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Your health journey starts with one click. Reserve your consultation today.
            </p>
            <p className="text-lg text-white/80 mb-12">
              Don't postpone your health any longer. Join hundreds of clients who have already transformed their lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">🏢 Luxembourg City</h3>
              <p className="text-white/80 mb-4">Central location with convenient parking</p>
              <button
                onClick={() => handleBookingClick('luxembourg')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Book Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">🌿 Ettelbruck</h3>
              <p className="text-white/80 mb-4">Peaceful setting in the heart of town</p>
              <button
                onClick={() => handleBookingClick('ettelbruck')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Book Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">🏡 Insenborn</h3>
              <p className="text-white/80 mb-4">Cozy atmosphere with personal touch</p>
              <button
                onClick={() => handleBookingClick('insenborn')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Book Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-amber-100/20 border border-amber-300/30 rounded-lg p-6 max-w-lg mx-auto">
            <p className="text-amber-100 font-semibold">
              ⚡ Limited appointments available this week
            </p>
            <p className="text-white/80 text-sm mt-2">
              Don't wait - your healthier future starts today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;