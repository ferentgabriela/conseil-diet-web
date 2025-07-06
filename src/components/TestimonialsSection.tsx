import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I finally feel in control of my eating habits. Thank you for the practical advice and encouragement!",
      author: "Sophie",
      location: "Luxembourg",
      rating: 5
    },
    {
      text: "After years of trying different diets, I learned what really works for my body.",
      author: "Marc",
      location: "Ettelbruck",
      rating: 5
    },
    {
      text: "Professional, kind, and effective. Highly recommend.",
      author: "Claire",
      location: "Insenborn",
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who have transformed their relationship with food and health.
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
                
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium">Join hundreds of satisfied clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;