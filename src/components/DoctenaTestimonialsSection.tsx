
import React, { useEffect, useState, useRef } from 'react';
import { Star, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const DoctenaTestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Load Doctena testimonials script only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Load script only when visible
          const script = document.createElement('script');
          script.src = 'https://api.doctena.lu/js/widgetRatings/calendar/build.php';
          script.async = true;
          document.head.appendChild(script);

          // Add iframe title after Doctena widget loads
          const checkAndAddIframeTitle = () => {
            const iframe = document.querySelector('#doctena-reviews-widget iframe');
            if (iframe && !iframe.hasAttribute('title')) {
              iframe.setAttribute('title', 'Avis patients vérifiés Doctena - Témoignages consultation diététique');
            }
          };

          // Check for iframe periodically after script loads
          const titleChecker = setInterval(() => {
            checkAndAddIframeTitle();
            const iframe = document.querySelector('#doctena-reviews-widget iframe');
            if (iframe && iframe.hasAttribute('title')) {
              clearInterval(titleChecker);
            }
          }, 500);

          // Clear checker after 10 seconds to avoid infinite checking
          setTimeout(() => clearInterval(titleChecker), 10000);
        }
      },
      { rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://api.doctena.lu/js/widgetRatings/calendar/build.php"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [isVisible]);

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
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

            {/* Enhanced CTA after reviews */}
            <div className="mt-12">
              <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl p-8 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-repeat bg-center" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold mb-4">
                    Votre transformation commence maintenant
                  </h3>
                  <p className="text-xl text-green-100 mb-6">
                    Rejoignez les centaines de clients satisfaits qui ont déjà transformé leur vie au Luxembourg
                  </p>
                  <button onClick={scrollToCabinets} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Calendar className="h-6 w-6" />
                    Prendre rendez-vous maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctenaTestimonialsSection;
