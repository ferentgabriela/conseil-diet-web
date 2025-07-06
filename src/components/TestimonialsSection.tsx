import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Son professionnalisme, son approche personnalisée et ses conseils pratiques m'ont aidé à améliorer mes habitudes alimentaires de manière durable.",
      author: "Pedro",
      location: "Accompagnement nutritionnel",
      date: "Février 2025",
      rating: 5
    },
    {
      text: "Gabriela est très professionnelle. Elle prend le temps nécessaire pour écouter le patient et trouver la meilleure solution pour lui.",
      author: "Diana",
      location: "Consultation personnalisée",
      date: "Juillet 2024",
      rating: 5
    },
    {
      text: "Gabriela est une experte dans son domaine et possède l'expertise nécessaire pour cela. J'ai été et suis très satisfaite de ses services. De plus, ses actions ont une direction précise et atteignent l'objectif souhaité. Merci !",
      author: "Carmen",
      location: "Suivi spécialisé",
      date: "Juin 2024",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Témoignages réels de personnes qui ont transformé leur relation avec la nourriture et la santé.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-lg relative">
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-green-200" />
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-8 text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium">Rejoignez des centaines de clients satisfaits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;