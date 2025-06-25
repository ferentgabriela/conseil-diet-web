
import React from 'react';
import { Award, Heart, Users, Clock, Shield, BookOpen, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-green-25">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos de Gabriela Ferent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diététicienne certifiée avec plus de 10 ans d'expérience dans l'accompagnement nutritionnel au Luxembourg
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cabinet de diététique moderne"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Une approche personnalisée pour votre santé
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Diplômée en diététique et nutrition, je vous accompagne dans votre parcours de santé avec une approche bienveillante et scientifiquement fondée. Mon objectif est de vous aider à atteindre vos objectifs nutritionnels tout en préservant le plaisir de manger.
              </p>
              
              {/* Key Stats with Icons */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center bg-white/70 rounded-xl p-4 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gray-900">1000+</span>
                    <p className="text-gray-600">patients accompagnés avec succès</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/70 rounded-xl p-4 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gray-900">10+</span>
                    <p className="text-gray-600">années d'expérience clinique</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/70 rounded-xl p-4 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gray-900">3</span>
                    <p className="text-gray-600">cabinets pour votre convenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Diplômes Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Certifications & Diplômes
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Diététicienne</h4>
                <p className="text-sm text-gray-600">Certifiée au Luxembourg</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Formation</h4>
                <p className="text-sm text-gray-600">Continue en nutrition</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">CNS</h4>
                <p className="text-sm text-gray-600">Agréée pour remboursements</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Qualité</h4>
                <p className="text-sm text-gray-600">Normes luxembourgeoises</p>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Expertise</h4>
              <p className="text-gray-600 leading-relaxed">
                Formation continue et mise à jour des connaissances nutritionnelles selon les dernières recherches scientifiques
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Bienveillance</h4>
              <p className="text-gray-600 leading-relaxed">
                Accompagnement sans jugement, dans le respect de vos habitudes et contraintes personnelles
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Disponibilité</h4>
              <p className="text-gray-600 leading-relaxed">
                Consultations dans 3 cabinets strategiquement situés pour votre convenance au Luxembourg
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
