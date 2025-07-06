import React from 'react';
import { Calendar, Heart, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ConsultationChoice = () => {
  const scrollToCabinets = () => {
    // For now, we'll scroll to top and later this can be enhanced to go to cabinets section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <img
                  src="/lovable-uploads/d6c589d8-1c79-4015-8eb9-4161eb6ba337.png"
                  alt="Gabriela Ferent - Diététicienne nutritionniste Luxembourg"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choisissez votre type de consultation
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deux options adaptées à vos besoins et votre situation
              </p>
            </div>

            {/* Consultation Options */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* CNS Consultations */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-100">
                <div className="bg-green-50 p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Consultations CNS
                  </h2>
                  <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Remboursées à 80%
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6 font-medium">
                    Sur prescription médicale pour les pathologies suivantes :
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      'Diabète type 1 & 2',
                      'Obésité (IMC ≥ 30)',
                      'Troubles alimentaires',
                      'Hypertension artérielle',
                      'Cholestérol élevé',
                      'Syndrome métabolique'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <p className="text-green-800 text-sm font-medium text-center">
                      Économisez jusqu'à 80% avec le remboursement CNS
                    </p>
                  </div>
                  
                  <button 
                    onClick={scrollToCabinets}
                    className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors duration-200"
                  >
                    Réserver ma consultation CNS
                  </button>
                </div>
              </div>

              {/* Private Consultations */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-100">
                <div className="bg-blue-50 p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Consultations Privées
                  </h2>
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Accès immédiat
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6 font-medium">
                    Pour tous vos objectifs de santé et bien-être :
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      'Perte de poids durable',
                      'Rééquilibrage alimentaire',
                      'Nutrition sportive',
                      'Allergies alimentaires',
                      'Grossesse & allaitement',
                      'Bien-être digestif'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 text-sm font-medium text-center">
                      Rendez-vous cette semaine sans prescription
                    </p>
                  </div>
                  
                  <button 
                    onClick={scrollToCabinets}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200"
                  >
                    Commencer dès maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ConsultationChoice;