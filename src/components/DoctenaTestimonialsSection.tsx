
import React, { useEffect } from 'react';
import { Star, Quote, Calendar, ExternalLink, ArrowRight, Sparkles, Heart } from 'lucide-react';

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

  const highlightedTestimonials = [
    {
      quote: "Son professionnalisme, son approche personnalisée et ses conseils pratiques m'ont aidée à améliorer mes habitudes alimentaires de manière durable.",
      author: "Pedro",
      date: "Février 2025",
      rating: 5,
      treatment: "Accompagnement nutritionnel",
      emoji: "🌟"
    },
    {
      quote: "Gabriela est très professionnelle. Elle prend le temps nécessaire pour écouter le patient et trouver la meilleure solution pour lui.",
      author: "Diana",
      date: "Juillet 2024",
      rating: 5,
      treatment: "Consultation personnalisée",
      emoji: "💪"
    },
    {
      quote: "Gabriela est une experte dans son domaine et possède l'expertise nécessaire pour cela. J'ai été et suis très satisfaite de ses services. De plus, ses actions ont une direction précise et atteignent l'objectif souhaité. Merci !",
      author: "Carmen",
      date: "Juin 2024",
      rating: 5,
      treatment: "Suivi spécialisé",
      emoji: "🎯"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero testimonials section */}
      <div className="py-20 bg-gradient-to-br from-green-50 via-blue-25 to-green-25 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-700">Témoignages vérifiés</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Témoignages de Patients
            </h2>
            <div className="max-w-2xl mx-auto relative">
              <p className="text-xl text-gray-600">
                Découvrez les transformations réelles de patients qui ont fait confiance à mon accompagnement
              </p>
              
              {/* Visual decorations */}
              <div className="absolute -top-4 -right-8 text-2xl animate-bounce">❤️</div>
              <div className="absolute -bottom-4 -left-8 text-2xl animate-pulse">⭐</div>
            </div>
          </div>

          {/* Enhanced testimonials carousel */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {highlightedTestimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 relative hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                    {testimonial.emoji}
                  </div>
                  
                  {/* Quote icon with animation */}
                  <div className="absolute -top-4 -left-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Quote className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Enhanced star rating */}
                  <div className="flex mb-4 pt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-800 font-medium mb-6 leading-relaxed flex-grow relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Enhanced author section */}
                  <div className="flex items-center justify-between mt-auto relative z-10">
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <div className="flex items-center gap-1 mb-1">
                        <Heart className="h-3 w-3 text-green-500" />
                        <p className="text-sm text-green-600">{testimonial.treatment}</p>
                      </div>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{testimonial.emoji}</span>
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
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
