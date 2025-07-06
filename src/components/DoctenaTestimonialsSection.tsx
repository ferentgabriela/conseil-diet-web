
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
                Tous les avis patients
              </h3>
              <p className="text-gray-600">
                Consultez l'ensemble des témoignages vérifiés via Doctena
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

      {/* Enhanced Strong CTA section */}
      <div className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
        </div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">Rejoignez nos patients satisfaits</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt(e) à commencer votre transformation ?
            </h3>
            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Rejoignez les centaines de patients qui ont déjà transformé leur relation à l'alimentation avec un accompagnement professionnel et bienveillant
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="relative group">
                <button
                  onClick={scrollToCabinets}
                  className="relative inline-flex items-center gap-3 px-10 py-5 bg-white text-green-700 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-500 text-xl shadow-xl hover:shadow-2xl transform hover:scale-110 overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/50 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <Calendar className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Prendre RDV Maintenant</span>
                  <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-2xl bg-white/30 animate-ping opacity-75"></div>
              </div>
              
              <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                <span className="text-sm font-medium">Consultation sans engagement</span>
              </div>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-green-100">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>Places limitées cette semaine</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse delay-200"></div>
                <span>Remboursement CNS 80%</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-400"></div>
                <span>Suivi personnalisé garanti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctenaTestimonialsSection;
