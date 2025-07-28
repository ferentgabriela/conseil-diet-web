import React from 'react';
import { Star, TrendingDown, Heart, Calendar, Quote } from 'lucide-react';
const TransformationStoriesSection = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const transformations = [{
    name: "Pedro",
    result: "Des conseils clairs et applicables",
    story: "Son professionnalisme, son approche personnalisée et ses conseils pratiques m'ont aidé à améliorer mes habitudes alimentaires de manière durable.",
    avatar: "👨‍💼",
    background: "from-red-50 to-rose-100"
  }, {
    name: "Diana",
    result: "Une écoute attentive et motivante",
    story: "Gabriela est très professionnelle. Elle prend le temps nécessaire pour écouter le patient et trouver la meilleure solution pour lui.",
    avatar: "👩‍💻",
    background: "from-blue-50 to-cyan-100"
  }, {
    name: "Carmen",
    result: "Des habitudes durables, sans frustration",
    story: "Gabriela est une experte dans son domaine et possède l'expertise nécessaire pour cela. J'ai été et suis très satisfaite de ses services. De plus, ses actions ont une direction précise et atteignent l'objectif souhaité. Merci !",
    avatar: "👩‍🍳",
    background: "from-green-50 to-emerald-100"
  }];
  return <section id="transformations" className="relative py-20 bg-white">
      {/* Curved top transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        
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
            {transformations.map((story, index) => <div key={index} className={`relative bg-gradient-to-br ${story.background} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group h-full`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-gray-400 opacity-50" />
                  </div>

                  {/* Testimonial highlight */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {story.result}
                    </h3>
                  </div>

                  {/* Star rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                  </div>

                  {/* Story - flexible height to fill available space */}
                  <blockquote className="text-gray-700 text-center mb-6 leading-relaxed italic flex-grow flex items-center justify-center">
                    "{story.story}"
                  </blockquote>

                  {/* Author - pinned to bottom */}
                  <div className="flex items-center justify-center gap-3 mt-auto">
                    <div className="text-3xl">{story.avatar}</div>
                    <div>
                      <p className="font-bold text-gray-900">{story.name}</p>
                      <p className="text-sm text-gray-500">Patient vérifié</p>
                    </div>
                  </div>
                </div>
              </div>)}
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
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-repeat bg-center" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Votre transformation commence maintenant
              </h3>
              <p className="text-xl text-green-100 mb-6">
                Rejoignez les centaines de patients qui ont déjà transformé leur vie au Luxembourg
              </p>
              <button onClick={scrollToCabinets} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                <Calendar className="h-6 w-6" />
                Prendre rendez-vous maintenant
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        
      </div>
    </section>;
};
export default TransformationStoriesSection;