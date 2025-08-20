import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

const ArticlesPopulairesSection = () => {
  const popularArticles = [
    {
      title: "Perte de Poids Après 40 ans : Stratégies Efficaces",
      description: "Découvrez comment adapter votre alimentation aux changements hormonaux après 40 ans",
      url: "/articles/perte-poids-apres-40"
    },
    {
      title: "Cholestérol : Les Aliments à Éviter et Ceux à Privilégier", 
      description: "Réduisez votre cholestérol naturellement avec ces conseils nutritionnels éprouvés",
      url: "/articles/cholesterol-alimentation"
    },
    {
      title: "Diabète Type 2 : 10 Aliments à Privilégier au Quotidien",
      description: "Contrôlez votre glycémie naturellement avec ces aliments recommandés",
      url: "/articles/diabete-aliments-recommandes"
    },
    {
      title: "Hypertension : Le Régime DASH pour Réduire la Tension",
      description: "Contrôlez votre tension artérielle naturellement avec le régime DASH",
      url: "/articles/hypertension-regime-dash"
    },
    {
      title: "Nutrition et Ménopause : Guide Complet pour Maintenir son Poids",
      description: "Adaptez votre alimentation aux changements hormonaux de la ménopause",
      url: "/articles/nutrition-menopause-guide"
    },
    {
      title: "Thyroïde et Alimentation : Optimiser votre Métabolisme",
      description: "Découvrez quels aliments favorisent le bon fonctionnement de votre thyroïde",
      url: "/articles/thyroide-alimentation"
    },
    {
      title: "Troubles Digestifs : Solutions Nutritionnelles Naturelles",
      description: "Retrouvez un confort intestinal grâce à une alimentation adaptée",
      url: "/articles/troubles-digestifs-solutions"
    },
    {
      title: "Allaitement et Perte de Poids : Ce que Vous Devez Savoir",
      description: "Perdez du poids sainement pendant l'allaitement sans compromettre votre lait",
      url: "/articles/allaitement-perte-poids"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Conseils d'Expert
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Articles populaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez mes conseils nutritionnels professionnels pour améliorer votre santé et votre bien-être
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.url}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center text-green-600 font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Lire l'article</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Besoin de conseils personnalisés ? Consultez-moi pour un accompagnement sur-mesure.
            </p>
            <button
              onClick={() => {
                const cabinetsSection = document.getElementById('cabinets');
                if (cabinetsSection) {
                  cabinetsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPopulairesSection;