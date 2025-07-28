import React from 'react';
import { Star, Quote } from 'lucide-react';
const TestimonialsSection = () => {
  const testimonials = [{
    text: "Son professionnalisme, son approche personnalisée et ses conseils pratiques m'ont aidé à améliorer mes habitudes alimentaires de manière durable.",
    author: "Pedro",
    location: "Accompagnement nutritionnel",
    date: "Février 2025",
    rating: 5
  }, {
    text: "Gabriela est très professionnelle. Elle prend le temps nécessaire pour écouter le patient et trouver la meilleure solution pour lui.",
    author: "Diana",
    location: "Consultation personnalisée",
    date: "Juillet 2024",
    rating: 5
  }, {
    text: "Gabriela est une experte dans son domaine et possède l'expertise nécessaire pour cela. J'ai été et suis très satisfaite de ses services. De plus, ses actions ont une direction précise et atteignent l'objectif souhaité. Merci !",
    author: "Carmen",
    location: "Suivi spécialisé",
    date: "Juin 2024",
    rating: 5
  }];
  const renderStars = (rating: number) => {
    return Array.from({
      length: rating
    }, (_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de mes patients
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez l'expérience de ceux qui ont fait confiance à mon expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary opacity-50 mr-2" />
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;