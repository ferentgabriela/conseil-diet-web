import React from 'react';
import { ArrowRight, Users, Star, Shield, CheckCircle, Award, MapPin, GraduationCap, BookOpen, Heart, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import cabinetModerne from '@/assets/cabinet-moderne-optimized.webp';

const CombinedAboutAuthorSection = () => {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-green-25">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gabriela Ferent - Votre Diététicienne au Luxembourg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diététicienne nutritionniste diplômée avec plus de 10 ans d'expérience dans l'accompagnement nutritionnel personnalisé
            </p>
          </div>

          {/* Author Profile & Credentials */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Author Image & Basic Info */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-48 h-48 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-green-200 overflow-hidden">
                <img
                  src="/lovable-uploads/41289576-41fe-474c-8330-dbd57c4e21b3.png"
                  alt="Gabriela Ferent - Diététicienne Nutritionniste Luxembourg"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gabriela Ferent</h3>
              <p className="text-green-700 font-medium mb-4">Diététicienne Nutritionniste Certifiée</p>
              <div className="text-sm text-gray-600 space-y-2">
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Luxembourg-Ville • Ettelbruck • Insenborn
                </p>
                <p>📞 Consultations CNS & Privées</p>
                <p>🎓 Diplômée • Certifiée • Expérimentée</p>
              </div>
            </div>

            {/* Professional Background */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Votre Experte en Nutrition Thérapeutique
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diplômée en diététique et nutrition, je vous accompagne depuis plus de 10 ans 
                  dans votre parcours de santé au Luxembourg. Ma spécialisation dans la nutrition 
                  thérapeutique me permet de vous offrir un suivi personnalisé et efficace avec des résultats durables.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Passionnée par l'approche holistique de la santé, je combine expertise scientifique 
                  et écoute bienveillante pour vous aider à atteindre vos objectifs tout en préservant le plaisir de manger.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-2 border-green-200 rounded-xl p-4 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">1000+</h4>
                  <p className="text-sm text-gray-600">Patients suivis</p>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 text-center">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">10+</h4>
                  <p className="text-sm text-gray-600">Années d'expérience</p>
                </div>
                <div className="bg-white border-2 border-purple-200 rounded-xl p-4 text-center">
                  <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Diplôme</h4>
                  <p className="text-sm text-gray-600">Reconnu UE</p>
                </div>
                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 text-center">
                  <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">3 Cabinets</h4>
                  <p className="text-sm text-gray-600">Au Luxembourg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Mes Spécialisations Thérapeutiques
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Perte de poids durable',
                'Diabète type 1 & 2',
                'Nutrition post-grossesse',
                'Troubles alimentaires',
                'Hypertension artérielle',
                'Cholestérol élevé',
                'Nutrition anti-inflammatoire',
                'Allergies alimentaires'
              ].map((specialization, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm border border-green-100">
                  <span className="text-sm font-medium text-gray-700">{specialization}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Diplômes */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Certifications & Agréments Professionnels
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Diététicienne</h4>
                <p className="text-sm text-gray-600">Certifiée Luxembourg</p>
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
                <h4 className="font-bold text-gray-900 mb-2">CNS Agréée</h4>
                <p className="text-sm text-gray-600">Prise en charge CNS</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Qualité</h4>
                <p className="text-sm text-gray-600">Standards Luxembourg</p>
              </div>
            </div>
          </div>

          {/* Professional Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Expertise Scientifique</h4>
              <p className="text-gray-600 leading-relaxed">
                Formation continue et mise à jour des connaissances nutritionnelles selon les dernières recherches scientifiques et protocoles luxembourgeois
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Approche Bienveillante</h4>
              <p className="text-gray-600 leading-relaxed">
                Accompagnement sans jugement, dans le respect de vos habitudes et contraintes personnelles pour des résultats durables
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Accessibilité</h4>
              <p className="text-gray-600 leading-relaxed">
                3 cabinets stratégiquement situés au Luxembourg pour votre convenance, avec consultations CNS et privées
              </p>
            </div>
          </div>

          {/* Professional Image */}
          <div className="text-center">
            <img
              src={cabinetModerne}
              alt="Cabinet de diététique moderne Gabriela Ferent Luxembourg avec équipements professionnels"
              className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto h-80 object-cover"
              loading="lazy"
              decoding="async"
            />
            <p className="text-gray-600 mt-4 text-sm">
              Cabinet moderne équipé pour vos consultations nutritionnelles au Luxembourg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedAboutAuthorSection;
