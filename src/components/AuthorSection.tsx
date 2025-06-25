
import React from 'react';
import { Award, GraduationCap, Users, MapPin } from 'lucide-react';

const AuthorSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qui suis-je ? - Gabriela Ferent
            </h2>
            <p className="text-xl text-gray-600">
              Diététicienne nutritionniste diplômée au Luxembourg
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Votre Experte en Nutrition
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diplômée en diététique et nutrition, je vous accompagne depuis plus de 10 ans 
                  dans votre parcours de santé au Luxembourg. Ma spécialisation dans la nutrition 
                  thérapeutique me permet de vous offrir un suivi personnalisé et efficace.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Passionnée par l'approche holistique de la santé, je combine expertise scientifique 
                  et écoute bienveillante pour vous aider à atteindre vos objectifs de façon durable.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-2 border-green-200 rounded-xl p-4 text-center">
                  <GraduationCap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Formation</h4>
                  <p className="text-sm text-gray-600">Diplôme reconnu UE</p>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 text-center">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Expérience</h4>
                  <p className="text-sm text-gray-600">10+ années</p>
                </div>
                <div className="bg-white border-2 border-purple-200 rounded-xl p-4 text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Patients</h4>
                  <p className="text-sm text-gray-600">1000+ suivis</p>
                </div>
                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 text-center">
                  <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Cabinets</h4>
                  <p className="text-sm text-gray-600">3 au Luxembourg</p>
                </div>
              </div>
            </div>

            {/* Author Image Placeholder */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-48 h-48 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-green-200">
                <Users className="h-24 w-24 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gabriela Ferent</h3>
              <p className="text-green-700 font-medium mb-4">Diététicienne Nutritionniste</p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>📍 Luxembourg-Ville • Ettelbruck • Insenborn</p>
                <p>📞 Consultations CNS & Privées</p>
                <p>🎓 Diplômée • Certifiée • Expérimentée</p>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Mes Spécialisations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Perte de poids durable',
                'Diabète type 1 & 2',
                'Nutrition post-grossesse',
                'Troubles alimentaires',
                'Hypertension',
                'Cholestérol',
                'Nutrition sportive',
                'Allergies alimentaires'
              ].map((specialization, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <span className="text-sm font-medium text-gray-700">{specialization}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
