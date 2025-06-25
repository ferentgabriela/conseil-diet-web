
import React from 'react';
import { Star, TrendingDown, Heart, Calendar } from 'lucide-react';

const TransformationStoriesSection = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transformations = [
    {
      name: "Sarah",
      result: "-12kg",
      timeframe: "en 4 mois",
      story: "J'ai retrouvé confiance en moi sans me priver. Gabriela m'a accompagnée avec patience et bienveillance.",
      condition: "Perte de poids post-grossesse",
      avatar: "👩‍💼"
    },
    {
      name: "Michel",
      result: "-8kg",
      timeframe: "en 3 mois",
      story: "Mon diabète est maintenant stabilisé. Les conseils de Gabriela ont transformé ma relation à l'alimentation.",
      condition: "Diabète type 2",
      avatar: "👨‍💻"
    },
    {
      name: "Claire",
      result: "-15kg",
      timeframe: "en 6 mois",
      story: "Fini l'hypertension ! J'ai appris à manger sainement tout en gardant le plaisir de cuisiner.",
      condition: "Hypertension",
      avatar: "👩‍🍳"
    }
  ];

  return (
    <section id="transformations" className="py-20 bg-gradient-to-br from-green-50 via-blue-25 to-green-25">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ils l'ont fait
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les transformations réelles de patients qui ont repris le contrôle de leur santé
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {transformations.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Results highlight */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-green-600 mb-2 flex items-center justify-center gap-2">
                    <TrendingDown className="h-8 w-8" />
                    {story.result}
                  </div>
                  <p className="text-lg text-gray-600 font-medium">{story.timeframe}</p>
                  <p className="text-sm text-blue-600 font-medium">{story.condition}</p>
                </div>

                {/* Star rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Story */}
                <blockquote className="text-gray-700 text-center mb-6 leading-relaxed">
                  "{story.story}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-3">
                  <div className="text-3xl">{story.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900">{story.name}</p>
                    <p className="text-sm text-gray-500">Patient vérifié</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results summary */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Résultats moyens de mes patients
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-3xl font-bold text-green-600 mb-2">8-15kg</p>
                <p className="text-gray-700">Perte de poids moyenne</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">95%</p>
                <p className="text-gray-700">Satisfaction patients</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <p className="text-3xl font-bold text-purple-600 mb-2">3-6 mois</p>
                <p className="text-gray-700">Durée moyenne suivi</p>
              </div>
            </div>
          </div>

          {/* CTA after proof */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">
              Votre transformation commence maintenant
            </h3>
            <p className="text-xl text-green-100 mb-6">
              Rejoignez les centaines de patients qui ont déjà transformé leur vie
            </p>
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calendar className="h-6 w-6" />
              Prendre rendez-vous maintenant
            </button>
            <p className="text-sm text-green-200 mt-3">
              🔥 1 place disponible cette semaine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesSection;
