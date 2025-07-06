import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const AboutPracticeSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Votre Partenaire en Nutrition pour la Vie
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Notre cabinet est dédié à vous aider à trouver clarté et confiance dans votre alimentation. 
                Avec des années d'expérience et des certifications avancées, nous offrons un accompagnement 
                nutritionnel bienveillant et basé sur les preuves pour adultes, enfants et familles.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Que vous souhaitiez perdre du poids, gérer une condition médicale, ou simplement vous sentir au mieux, 
                nous adaptons chaque séance à vos besoins uniques.
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
                  <p className="text-gray-600">Approche personnalisée qui respecte votre mode de vie et vos préférences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Basé sur les Preuves</h3>
                  <p className="text-gray-600">Dernières avancées scientifiques appliquées à des solutions pratiques et durables</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tous Âges Bienvenus</h3>
                  <p className="text-gray-600">Soins spécialisés pour adultes, enfants et familles à chaque étape de la vie</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
                <p className="text-gray-500">Photo professionnelle de la diététicienne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPracticeSection;