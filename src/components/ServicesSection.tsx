
import React from 'react';
import { ExternalLink, Shield, Heart, CheckCircle, Star } from 'lucide-react';
import AISummaryBlock from './AISummaryBlock';

const ServicesSection = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Consultation Diététique Luxembourg
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nutritionniste diplômée • Remboursement CNS • Perte de poids personnalisée
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* CNS Consultations */}
          <div className="group bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-green-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-6 group-hover:bg-green-700 transition-colors">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Consultations CNS</h3>
                <div className="flex items-center gap-2">
                  <span className="text-green-700 font-bold text-lg">Remboursées à 80%</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-green-500 text-green-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4 font-medium">Sur prescription médicale pour :</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Diabète type 1 et 2 • Perte de poids médicale',
                  'Obésité (IMC ≥ 30) • Suivi spécialisé',
                  'Troubles alimentaires • Accompagnement expert',
                  'Hypertension • Nutrition adaptée',
                  'Cholestérol • Rééquilibrage nutritionnel',
                  'Syndrome métabolique • Approche globale'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <strong>Économisez jusqu'à 80%</strong> avec le remboursement CNS Luxembourg
              </p>
            </div>

            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              Réservez votre consultation CNS
            </button>
          </div>

          {/* Private Consultations */}
          <div className="group bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-6 group-hover:bg-blue-700 transition-colors">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Consultations Privées</h3>
                <div className="flex items-center gap-2">
                  <span className="text-blue-700 font-bold text-lg">Accès immédiat</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4 font-medium">Nutrition personnalisée pour :</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Perte de poids • Résultats durables sans privation',
                  'Rééquilibrage alimentaire • Habitudes saines',
                  'Nutrition sportive • Performance optimisée',
                  'Allergies alimentaires • Solutions adaptées',
                  'Grossesse & allaitement • Suivi spécialisé',
                  'Bien-être digestif • Confort retrouvé'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Heart className="h-4 w-4 text-blue-600" />
                <strong>Rendez-vous cette semaine</strong> sans prescription médicale
              </p>
            </div>

            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              Commencez dès maintenant
            </button>
          </div>
        </div>

        {/* Results-focused testimonial highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Transformations Réelles de Patients
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-3xl font-bold text-green-600 mb-2">-12kg</p>
                <p className="text-sm text-gray-600">En 4 mois sans privation</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-3xl font-bold text-blue-600 mb-2">-8kg</p>
                <p className="text-sm text-gray-600">Diabète stabilisé</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-3xl font-bold text-purple-600 mb-2">-15kg</p>
                <p className="text-sm text-gray-600">Hypertension normalisée</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Summary Block */}
        <AISummaryBlock variant="services" />
      </div>
    </section>
  );
};

export default ServicesSection;
