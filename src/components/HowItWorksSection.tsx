
import React from 'react';
import { Calendar, FileText, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: Calendar,
      title: "RDV Initial + Évaluation",
      description: "Analyse complète de vos habitudes, objectifs et contraintes personnelles",
      detail: "À mon premier RDV, j'ai senti que j'étais enfin comprise.",
      color: "green"
    },
    {
      icon: FileText,
      title: "Plan Personnalisé",
      description: "Programme nutritionnel sur-mesure adapté à votre mode de vie",
      detail: "Pas de régime strict, mais des conseils pratiques et réalisables.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Suivi & Adaptation",
      description: "Accompagnement continu et ajustements selon vos progrès",
      detail: "Un soutien bienveillant qui fait toute la différence.",
      color: "purple"
    }
  ];

  return (
    <section id="processus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un processus simple et efficace pour des résultats durables
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                green: 'bg-green-100 text-green-600 border-green-200',
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200'
              };
              
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${colorClasses[step.color]} rounded-xl flex items-center justify-center mb-6 border-2`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-700 mb-6 flex-grow leading-relaxed">{step.description}</p>
                    
                    {/* Patient quote */}
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                      <p className="text-sm text-gray-600 italic">"{step.detail}"</p>
                    </div>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Process CTA */}
          <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt(e) à commencer votre parcours ?
            </h3>
            <p className="text-gray-600 mb-6">
              Prenez rendez-vous dès maintenant pour votre première consultation
            </p>
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              Voir les disponibilités
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
