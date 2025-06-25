
import React from 'react';
import { ExternalLink, Shield, Heart, CheckCircle, Star } from 'lucide-react';

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
            Types de Consultations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le type de consultation adapté à vos besoins et bénéficiez d'un accompagnement personnalisé
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
                  'Diabète (type 1 et 2)',
                  'Obésité (IMC ≥ 30)',
                  'Troubles du comportement alimentaire',
                  'Hypertension artérielle',
                  'Dyslipidémies',
                  'Syndrome métabolique'
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
                <strong>Économisez jusqu'à 80%</strong> avec le remboursement CNS
              </p>
            </div>

            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              Prendre RDV CNS
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
                  <span className="text-blue-700 font-bold text-lg">Accès direct</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4 font-medium">Disponible pour :</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Perte de poids personnalisée',
                  'Rééquilibrage alimentaire',
                  'Nutrition sportive',
                  'Allergies et intolérances',
                  'Accompagnement grossesse',
                  'Bien-être nutritionnel'
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
                <strong>Rendez-vous immédiat</strong> sans prescription médicale
              </p>
            </div>

            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              Prendre RDV Privé
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
