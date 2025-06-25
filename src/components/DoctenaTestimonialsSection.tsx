import React, { useEffect } from 'react';
import { Star, Quote, Calendar, ExternalLink } from 'lucide-react';

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

  const highlightedTestimonials = [
    {
      quote: "Son professionnalisme, son approche personnalisée et ses conseils pratiques m'ont aidé à améliorer mes habitudes alimentaires de manière durable.",
      author: "Pedro",
      date: "Février 2025",
      rating: 5,
      treatment: "Accompagnement nutritionnel"
    },
    {
      quote: "Gabriela est très professionniste. Elle prende le temps nécessaire pour écouter le patient et trouver la meilleure solution pour lui.",
      author: "Diana",
      date: "Juillet 2024",
      rating: 5,
      treatment: "Consultation personnalisée"
    },
    {
      quote: "Mme Gabriela Ferent est une experte dans son domaine et possède l'expertise nécessaire pour cela, j'ai été et suis très satisfaite de ses services, de plus, ses actions ont une direction précise et atteignent l'objectif souhaité, merci !",
      author: "Carmen",
      date: "Juin 2024",
      rating: 5,
      treatment: "Suivi spécialisé"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero testimonials section */}
      <div className="py-20 bg-gradient-to-br from-green-50 via-blue-25 to-green-25 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Témoignages de Patients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les transformations réelles de patients qui ont fait confiance à mon accompagnement
            </p>
          </div>

          {/* Highlighted testimonials carousel */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {highlightedTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 relative hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                {/* Star rating */}
                <div className="flex mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-800 font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-green-600">{testimonial.treatment}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Top decoration with rating summary */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <span className="text-xl font-bold">4.9/5</span>
                </div>
                <p className="text-green-100">Basé sur les avis patients vérifiés</p>
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

      {/* Strong CTA section */}
      <div className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt(e) à commencer votre transformation ?
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines de patients qui ont déjà transformé leur relation à l'alimentation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calendar className="h-6 w-6" />
              Prendre Rendez-vous Maintenant
              <ExternalLink className="h-5 w-5" />
            </a>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
              <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
              <span className="text-sm">Consultation sans engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctenaTestimonialsSection;
