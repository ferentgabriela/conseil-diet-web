
import React from 'react';
import { Star, TrendingDown, Heart, Calendar, Quote } from 'lucide-react';

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
      story: "J'ai retrouvé confiance en moi sans me priver. Gabriela m'a accompagnée avec patience et bienveillance. Aujourd'hui, je me sens à nouveau bien dans ma peau.",
      condition: "Perte de poids post-grossesse",
      avatar: "👩‍💼",
      background: "from-pink-50 to-rose-100"
    },
    {
      name: "Michel",
      result: "-8kg",
      timeframe: "en 3 mois",
      story: "Mon diabète est maintenant stabilisé. Les conseils de Gabriela ont transformé ma relation à l'alimentation. Plus de frustration, que du plaisir de bien manger.",
      condition: "Diabète type 2",
      avatar: "👨‍💻",
      background: "from-blue-50 to-cyan-100"
    },
    {
      name: "Claire",
      result: "-15kg",
      timeframe: "en 6 mois",
      story: "Fini l'hypertension ! J'ai appris à manger sainement tout en gardant le plaisir de cuisiner. Mes analyses sont parfaites et je déborde d'énergie.",
      condition: "Hypertension",
      avatar: "👩‍🍳",
      background: "from-green-50 to-emerald-100"
    }
  ];

  return (
    <section id="transformations" className="relative py-20 bg-white">
      {/* Curved top transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-20 fill-gradient-to-br from-green-50 via-blue-25 to-green-25 transform -translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f0fdf4"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ils l'ont fait, vous aussi vous pouvez y arriver
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les transformations réelles de patients qui ont repris le contrôle de leur santé avec mon accompagnement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {transformations.map((story, index) => (
              <div key={index} className={`relative bg-gradient-to-br ${story.background} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-gray-400 opacity-50" />
                  </div>

                  {/* Results highlight */}
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-green-600 mb-2 flex items-center justify-center gap-2">
                      <TrendingDown className="h-8 w-8" />
                      {story.result}
                    </div>
                    <p className="text-lg text-gray-600 font-medium">{story.timeframe}</p>
                    <p className="text-sm text-blue-600 font-medium bg-white/50 rounded-full px-3 py-1 inline-block mt-2">
                      {story.condition}
                    </p>
                  </div>

                  {/* Star rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Story */}
                  <blockquote className="text-gray-700 text-center mb-6 leading-relaxed italic">
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
              </div>
            ))}
          </div>

          {/* Results summary */}
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-lg mb-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Résultats moyens de mes patients au Luxembourg
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <p className="text-3xl font-bold text-green-600 mb-2">8-15kg</p>
                <p className="text-gray-700">Perte de poids moyenne</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-3xl font-bold text-blue-600 mb-2">95%</p>
                <p className="text-gray-700">Satisfaction patients</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <p className="text-3xl font-bold text-purple-600 mb-2">3-6 mois</p>
                <p className="text-gray-700">Durée moyenne suivi</p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA after proof */}
          <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl p-8 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Votre transformation commence maintenant
              </h3>
              <p className="text-xl text-green-100 mb-6">
                Rejoignez les centaines de patients qui ont déjà transformé leur vie au Luxembourg
              </p>
              <button
                onClick={scrollToCabinets}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calendar className="h-6 w-6" />
                Prendre rendez-vous maintenant
              </button>
              <p className="text-sm text-green-200 mt-3">
                🔥 Dernières places disponibles cette semaine
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-20 transform translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#gradient)"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#f0fdf4', stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:'#dbeafe', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#f0fdf4', stopOpacity:1}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default TransformationStoriesSection;
