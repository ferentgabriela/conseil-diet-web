
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie L.",
      location: "Luxembourg",
      rating: 5,
      text: "Gabriela m'a accompagnée dans ma perte de poids avec beaucoup de bienveillance. Ses conseils pratiques m'ont permis de retrouver une relation saine avec la nourriture."
    },
    {
      name: "Jean-Pierre M.",
      location: "Ettelbruck",
      rating: 5,
      text: "Excellent suivi pour mon diabète. Les consultations sont remboursées par la CNS et Gabriela est très professionnelle. Je recommande vivement !"
    },
    {
      name: "Sophie K.",
      location: "Luxembourg",
      rating: 5,
      text: "Approche très personnalisée et adaptée à mon mode de vie. Les rendez-vous sont faciles à prendre sur Doctena et les conseils sont concrets."
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de Patients
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les expériences de patients qui ont fait confiance à mon accompagnement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
                <Quote className="h-8 w-8 text-green-200 absolute top-4 left-4" />
                
                <div className="flex items-center mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
