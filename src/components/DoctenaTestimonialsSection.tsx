
import React, { useEffect } from 'react';
import { Star, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const DoctenaTestimonialsSection = () => {
  // Load Doctena testimonials script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.doctena.lu/js/widgetRatings/calendar/build.php';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://api.doctena.lu/js/widgetRatings/calendar/build.php"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Full testimonials widget section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ce Que Disent Nos Clients
              </h3>
              <p className="text-gray-600">
                Témoignages réels de personnes qui ont transformé leur relation avec la nourriture et la santé.
              </p>
            </div>

            {/* Enhanced widget container */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Enhanced top decoration */}
              <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-600 p-8 text-white text-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-7 w-7 fill-yellow-300 text-yellow-300 animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">4.9/5</span>
                  </div>
                  <p className="text-green-100 text-lg">Basé sur les avis patients vérifiés</p>
                </div>
              </div>
              
              {/* Widget container */}
              <div className="p-8">
                <div 
                  data-toggle="doc-reviews" 
                  data-doctor-eid="492d6313-2026-4e38-ba00-ffd3a88d67de" 
                  data-language="fr"
                  id="doctena-reviews-widget"
                  className="min-h-[400px]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctenaTestimonialsSection;
