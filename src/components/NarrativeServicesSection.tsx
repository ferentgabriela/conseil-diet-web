
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
    <section id="services" className="relative py-20 bg-gradient-to-br from-white via-green-25 to-blue-25">
      {/* Curved top transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-20 fill-white transform -translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      <div key={index} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white/90 transition-colors">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6 text-center border border-green-100">
                  <p className="text-sm text-gray-600">
                    Consultations remboursées à hauteur de 80% par la CNS selon la nomenclature officielle sur présentation d'une ordonnance médicale valide.
                  </p>
                </div>

                <button
                  onClick={scrollToCabinets}
                  className="w-full px-6 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Réserver ma consultation CNS
                </button>
              </div>
            </div>

            {/* Private Consultations */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 -translate-x-16 opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-300 rounded-full translate-y-12 translate-x-12 opacity-20"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      <div key={index} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white/90 transition-colors">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6 text-center border border-blue-100">
                  <p className="text-sm text-gray-600">
                    <strong className="text-blue-600">Rendez-vous cette semaine</strong> sans prescription
                  </p>
                </div>

                <button
                  onClick={scrollToCabinets}
                  className="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Commencer dès maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-20 fill-white transform translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default NarrativeServicesSection;
