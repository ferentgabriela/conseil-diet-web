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
  return;
};
export default TestimonialsSection;