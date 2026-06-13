import React from 'react';
import { Scale, Heart, Zap, Baby, Salad, Stethoscope } from 'lucide-react';
import { scrollToElement } from '../utils/scrollUtils';
import CNSReimbursementBadge from './CNSReimbursementBadge';

const ServicesSection = () => {
  const scrollToCabinets = () => {
    scrollToElement('cabinets');
  };
  
  const services = [
    {
      icon: Scale,
      title: "Gestion du Poids & Alimentation Saine",
      description: "Perte de poids durable et changements de mode de vie sains"
    },
    {
      icon: Stethoscope,
      title: "Nutrition pour Conditions Médicales",
      description: "Accompagnement spécialisé pour diabète, hypertension et troubles digestifs"
    },
    {
      icon: Zap,
      title: "Nutrition Anti-Inflammatoire & Vitalité",
      description: "Réduisez l'inflammation et regagnez en énergie grâce à une alimentation ciblée"
    },
    {
      icon: Baby,
      title: "Nutrition Pédiatrique",
      description: "Soutenir une croissance et un développement sains chez l'enfant"
    },
    {
      icon: Heart,
      title: "Nutrition Pré & Post-Natale",
      description: "Soutien nutritionnel pendant la grossesse et l'allaitement"
    },
    {
      icon: Salad,
      title: "Planification de Repas & Éducation",
      description: "Apprenez à faire des choix alimentaires éclairés pour une santé durable"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Choisissez votre type de consultation
                </h3>
                <p className="text-lg text-gray-600 mb-3">
                  Deux options adaptées à vos besoins et votre situation
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 h-full">
              {/* Consultations CNS */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Consultations CNS</h4>
                    <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      Approche 100% personnalisée
                    </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Sur prescription médicale pour les pathologies suivantes :
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Diabète</strong> type 1 et type 2</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Diabète</strong> pendant la grossesse</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Pré-diabète</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Obésité</strong> adulte (IMC ≥30)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Obésité</strong> enfant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Hypertension</strong> artérielle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Cholestérol</strong> élevé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Syndrome</strong> métabolique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Maladies</strong> intestinales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Maladie cœliaque</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Intolérance</strong> au lactose ou fructose</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Troubles des conduites alimentaires</strong> (Anorexie)</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  {/* CNS Badge */}
                  <CNSReimbursementBadge variant="compact" className="mb-4" />
                  
                  <p className="text-xs text-gray-600 text-center mb-4">
                    Consultations avec <span className="font-bold">prise en charge CNS</span> selon la nomenclature officielle sur présentation d'une ordonnance médicale valide.
                  </p>
                
                <button 
                  onClick={scrollToCabinets}
                  className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Prendre RDV (avec ordonnance)
                </button>
                </div>
              </div>
              
              {/* Consultations Privées */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Consultations Privées</h4>
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Accès immédiat
                  </span>
                </div>
                
                <div className="flex-grow">
                
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Pour tous vos objectifs de santé et bien-être :
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Perte de poids</strong> durable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Rééquilibrage</strong> alimentaire</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Vitalité</strong> et énergie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Soutien</strong> personnalisé et éducation nutritionnelle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Gestion du stress</strong> par l'alimentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Bien-être</strong> digestif</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Allergies</strong> alimentaires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Intolérances</strong> alimentaires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Préparation</strong> à la grossesse</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Grossesse</strong> & allaitement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Alimentation</strong> de l'enfant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700"><strong>Ménopause</strong> et alimentation</span>
                  </div>
                </div>
                </div>
                
                <div className="mt-auto">
                <p className="text-xs text-gray-600 text-center mb-4">
                  <span className="font-semibold">Rendez-vous cette semaine</span> sans prescription
                </p>
                
                <button 
                  onClick={scrollToCabinets}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Prendre RDV immédiatement
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;