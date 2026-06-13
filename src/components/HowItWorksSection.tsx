import React from 'react';
import { Calendar, FileText, TrendingUp, ArrowRight, Sparkles, Heart, CheckCircle } from 'lucide-react';
import { scrollToElement } from '../utils/scrollUtils';

const HowItWorksSection = () => {
  const scrollToCabinets = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToElement('cabinets', 60); // Add extra offset for sticky bar
  };

  const steps = [{
    icon: Calendar,
    title: "RDV Initial + Évaluation",
    description: "Analyse complète de vos habitudes, objectifs et contraintes personnelles",
    detail: "À mon premier RDV, j'ai senti que j'étais enfin comprise.",
    color: "green",
    visual: "🎯"
  }, {
    icon: FileText,
    title: "Plan Personnalisé",
    description: "Programme nutritionnel sur-mesure adapté à votre mode de vie",
    detail: "Pas de régime strict, mais des conseils pratiques et réalisables.",
    color: "blue",
    visual: "📋"
  }, {
    icon: TrendingUp,
    title: "Suivi & Adaptation",
    description: "Accompagnement continu et ajustements selon vos progrès",
    detail: "Un soutien bienveillant qui fait toute la différence.",
    color: "purple",
    visual: "📈"
  }];
  return <section id="processus" className="py-20 bg-gradient-to-br from-white via-green-25 to-blue-25">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Processus éprouvé</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment ça marche ?
            </h2>
            <div className="max-w-2xl mx-auto relative">
              <p className="text-xl text-gray-600">
                Un processus simple et efficace pour des résultats durables
              </p>
              
              {/* Visual elements */}
              <div className="absolute -top-2 -right-8 text-2xl animate-bounce">✨</div>
              
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              green: 'bg-green-100 text-green-600 border-green-200',
              blue: 'bg-blue-100 text-blue-600 border-blue-200',
              purple: 'bg-purple-100 text-purple-600 border-purple-200'
            };
            return <div key={index} className="relative group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                      {step.visual}
                    </div>
                    
                    {/* Step number with animation */}
                    
                    
                    {/* Icon with enhanced styling */}
                    <div className={`w-16 h-16 ${colorClasses[step.color]} rounded-xl flex items-center justify-center mb-6 border-2 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{step.title}</h3>
                                        <p className="text-gray-700 mb-6 flex-grow leading-relaxed relative z-10 text-left">{step.description}</p>
                    
                    {/* Enhanced patient quote */}
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 border-l-4 border-green-500 relative z-10 group-hover:from-green-50 group-hover:to-blue-50 transition-colors duration-300">
                      <div className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600 italic">"{step.detail}"</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced arrow between steps */}
                  {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="relative">
                        <ArrowRight className="h-8 w-8 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>}
                </div>;
          })}
          </div>

          {/* Enhanced Process CTA */}
          <div className="text-center bg-gradient-to-r from-green-50 via-white to-blue-50 rounded-3xl p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transform rotate-45 scale-150"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-3xl font-bold text-gray-900">
                  Prêt(e) à commencer votre parcours ?
                </h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Prenez rendez-vous dès maintenant pour votre première consultation et découvrez comment transformer votre relation à l'alimentation
              </p>
              
              <div className="relative inline-block group">
                <button onClick={scrollToCabinets} className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-2xl hover:from-green-700 hover:to-green-800 active:scale-105 transition-all duration-500 text-xl shadow-2xl shadow-green-600/30 hover:shadow-green-600/50 transform hover:scale-110 overflow-hidden z-20">
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
                  
                  <Calendar className="h-6 w-6 relative z-30 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-30">Voir les disponibilités</span>
                  <ArrowRight className="h-5 w-5 relative z-30 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                {/* Hover ring animation */}
                <div className="absolute inset-0 rounded-2xl bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;