
import React from 'react';
import { ChevronRight, Heart, Scale, Baby } from 'lucide-react';

const FAQBlogSection = () => {
  const faqArticles = [
    {
      id: 1,
      icon: <Scale className="h-6 w-6" />,
      question: "Comment perdre du poids après la grossesse ?",
      answer: "La perte de poids post-grossesse nécessite une approche progressive et bienveillante. Il est recommandé d'attendre 6-8 semaines après l'accouchement avant de commencer un programme de perte de poids.",
      points: [
        "Reprendre une alimentation équilibrée progressivement",
        "Privilégier les aliments riches en nutriments essentiels",
        "Maintenir une hydratation optimale, surtout si vous allaitez",
        "Intégrer une activité physique douce et progressive",
        "Dormir suffisamment pour réguler les hormones de la faim"
      ],
      category: "Grossesse & Allaitement"
    },
    {
      id: 2,
      icon: <Heart className="h-6 w-6" />,
      question: "Quels aliments éviter pour réduire le cholestérol ?",
      answer: "Pour réduire efficacement le cholestérol, il est essentiel de limiter certains aliments tout en privilégiant ceux qui ont un effet protecteur sur votre système cardiovasculaire.",
      points: [
        "Réduire les graisses saturées (charcuterie, fromages gras)",
        "Limiter les aliments ultra-transformés et frits",
        "Éviter les pâtisseries industrielles riches en graisses trans",
        "Privilégier les fibres solubles (avoine, légumineuses)",
        "Consommer des oméga-3 (poissons gras, noix, graines de lin)"
      ],
      category: "Cholestérol"
    },
    {
      id: 3,
      icon: <Baby className="h-6 w-6" />,
      question: "Pourquoi mon IMC est-il élevé et que faire ?",
      answer: "Un IMC élevé (≥25) peut avoir plusieurs causes. L'important est de comprendre votre situation personnelle pour adopter la meilleure stratégie.",
      points: [
        "Évaluer votre composition corporelle complète",
        "Identifier les facteurs contributifs (stress, sommeil, hormones)",
        "Adopter une alimentation anti-inflammatoire",
        "Pratiquer une activité physique adaptée à votre condition",
        "Bénéficier d'un suivi professionnel pour un plan personnalisé"
      ],
      category: "Perte de Poids"
    }
  ];

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Questions Fréquentes - Nutrition Luxembourg
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Réponses d'expert aux questions les plus posées par mes patients
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {faqArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    {article.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {article.question}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {article.answer}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Points clés à retenir :</h4>
                  <ul className="space-y-2">
                    {article.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Par Gabriela Ferent</span> - Diététicienne nutritionniste Luxembourg
                  </div>
                  <button
                    onClick={scrollToCabinets}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Consultation personnalisée
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'une réponse personnalisée ?
            </h3>
            <p className="text-gray-600 mb-6">
              Chaque situation est unique. Prenez rendez-vous pour un conseil adapté à votre profil.
            </p>
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-lg"
            >
              Prendre rendez-vous
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQBlogSection;
