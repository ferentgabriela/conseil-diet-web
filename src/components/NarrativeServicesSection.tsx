import React from 'react';
import { Shield, Heart, CheckCircle, Calendar } from 'lucide-react';

const NarrativeServicesSection = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white mb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choisissez votre type de consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deux options adaptées à vos besoins et votre situation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CNS Consultations */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Consultations CNS</h3>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full inline-block">
                  <span className="font-bold">Remboursées à 80%</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 font-medium mb-6 text-center">
                  Sur prescription médicale pour les pathologies suivantes :
                </p>
                <div className="space-y-3">
                  {[
                    'Diabète type 1 & 2',
                    'Obésité (IMC ≥ 30)',
                    'Troubles alimentaires',
                    'Hypertension artérielle',
                    'Cholestérol élevé',
                    'Syndrome métabolique'
                  ].map((condition, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/70 rounded-lg p-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 mb-6 text-center">
                <p className="text-sm text-gray-600">
                  <strong className="text-green-600">Économisez jusqu'à 80%</strong> avec le remboursement CNS
                </p>
              </div>

              <button
                onClick={scrollToCabinets}
                className="w-full px-6 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
              >
                Réserver ma consultation CNS
              </button>
            </div>

            {/* Private Consultations */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Consultations Privées</h3>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block">
                  <span className="font-bold">Accès immédiat</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 font-medium mb-6 text-center">
                  Pour tous vos objectifs de santé et bien-être :
                </p>
                <div className="space-y-3">
                  {[
                    'Perte de poids durable',
                    'Rééquilibrage alimentaire',
                    'Nutrition sportive',
                    'Allergies alimentaires',
                    'Grossesse & allaitement',
                    'Bien-être digestif'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/70 rounded-lg p-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 mb-6 text-center">
                <p className="text-sm text-gray-600">
                  <strong className="text-blue-600">Rendez-vous cette semaine</strong> sans prescription
                </p>
              </div>

              <button
                onClick={scrollToCabinets}
                className="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
              >
                Commencer dès maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeServicesSection;
