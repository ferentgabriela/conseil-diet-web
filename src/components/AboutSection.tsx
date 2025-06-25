
import React from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À propos de Gabriela Ferent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diététicienne certifiée avec plus de 10 ans d'expérience dans l'accompagnement nutritionnel au Luxembourg
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cabinet de diététique moderne"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Une approche personnalisée pour votre santé
              </h3>
              <p className="text-gray-600 mb-6">
                Diplômée en diététique et nutrition, je vous accompagne dans votre parcours de santé avec une approche bienveillante et scientifiquement fondée. Mon objectif est de vous aider à atteindre vos objectifs nutritionnels tout en préservant le plaisir de manger.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Diététicienne certifiée au Luxembourg</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Spécialisée en nutrition thérapeutique</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Plus de 1000 patients accompagnés</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h4>
              <p className="text-gray-600">
                Formation continue et mise à jour des connaissances nutritionnelles
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Bienveillance</h4>
              <p className="text-gray-600">
                Accompagnement sans jugement, dans le respect de vos habitudes
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Disponibilité</h4>
              <p className="text-gray-600">
                Consultations dans 3 cabinets pour votre convenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
