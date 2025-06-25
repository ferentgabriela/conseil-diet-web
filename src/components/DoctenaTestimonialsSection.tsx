
import React, { useEffect } from 'react';

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

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages de Patients
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les expériences de patients qui ont fait confiance à mon accompagnement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Widget container with better integration */}
          <div className="relative">
            {/* Background decoration to soften the transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-green-25 to-white rounded-xl"></div>
            
            {/* Widget wrapper with subtle styling */}
            <div className="relative bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
              {/* Top decoration bar */}
              <div className="h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              
              {/* Widget container */}
              <div className="p-6">
                <div 
                  data-toggle="doc-reviews" 
                  data-doctor-eid="492d6313-2026-4e38-ba00-ffd3a88d67de" 
                  data-language="fr"
                  id="doctena-reviews-widget"
                ></div>
              </div>
            </div>
            
            {/* Side decorations */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-green-200 rounded-r-full opacity-30"></div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-green-200 rounded-l-full opacity-30"></div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Prêt(e) à commencer votre parcours nutritionnel ?
          </p>
          <a
            href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg"
          >
            Prendre Rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctenaTestimonialsSection;
