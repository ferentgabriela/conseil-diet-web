import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const AboutPracticeSection = () => {
  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Votre Partenaire en Nutrition pour la Vie
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed font-bold">
                Clarté, bienveillance et expertise certifiée
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-3">
                Gabriela Ferent vous accompagne à chaque étape de votre parcours nutritionnel. Avec une approche personnalisée et fondée sur la science, chaque consultation est conçue pour répondre à vos besoins uniques.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accompagnement Bienveillant</h3>
                  <p className="text-gray-600 text-base">Approche personnalisée qui respecte votre mode de vie et vos préférences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Basé sur les Preuves</h3>
                  <p className="text-gray-600 text-base">Dernières avancées scientifiques appliquées à des solutions pratiques et durables</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tous Âges Bienvenus</h3>
                  <p className="text-gray-600 text-base">Soins spécialisés pour adultes, enfants et familles à chaque étape de la vie</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="rounded-2xl aspect-square overflow-hidden">
                <picture>
                  <source srcSet="/lovable-uploads/gabriela-portrait-consultation.webp" type="image/webp" />
                  <img 
                    src="/lovable-uploads/gabriela-portrait-consultation.jpg"
                    alt="Photo de Gabriela Ferent, diététicienne nutritionniste professionnelle au Luxembourg"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPracticeSection;