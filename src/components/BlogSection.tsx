import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import nutritionMenopause from '@/assets/nutrition-menopause-optimized.webp';
import allaitement from '@/assets/allaitement-optimized.webp';
import diabeteAliments from '@/assets/diabete-aliments-optimized.webp';
import cholesterol from '@/assets/cholesterol-optimized.webp';
import cholesterolFoods from '@/assets/cholesterol-foods-optimized.webp';
import pertePoidsApres40 from '@/assets/perte-poids-40-optimized.webp';
import weightLoss40plus from '@/assets/weight-loss-40plus-optimized.webp';
import thyroide from '@/assets/thyroide-optimized.webp';
import hypertensionDash from '@/assets/hypertension-dash-optimized.webp';
const BlogSection = () => {
  const articles = [{
    id: 'nutrition-menopause',
    title: 'Nutrition et Ménopause : Guide Complet pour Maintenir son Poids',
    description: 'La ménopause bouleverse votre métabolisme ? Découvrez comment adapter votre alimentation pour maintenir un poids santé et réduire les symptômes.',
    category: 'Nutrition Féminine',
    categoryColor: 'bg-pink-100 text-pink-800',
    author: 'Gabriela Ferent',
    readTime: '8 min',
    image: nutritionMenopause,
    link: '/articles/nutrition-menopause-guide'
  }, {
    id: 'allaitement-perte-poids',
    title: 'Allaitement et Perte de Poids : Ce que Vous Devez Savoir',
    description: 'Comment perdre du poids sainement pendant l\'allaitement ? Tous mes conseils pour concilier perte de poids et production de lait maternel.',
    category: 'Maternité',
    categoryColor: 'bg-green-100 text-green-800',
    author: 'Gabriela Ferent',
    readTime: '10 min',
    image: allaitement,
    link: '/articles/allaitement-perte-poids'
  }, {
    id: 'diabete-aliments',
    title: 'Diabète Type 2 : 10 Aliments à Privilégier au Quotidien',
    description: 'Contrôlez votre glycémie naturellement avec ces aliments recommandés par les nutritionnistes. Menu type et conseils pratiques inclus.',
    category: 'Diabète',
    categoryColor: 'bg-blue-100 text-blue-800',
    author: 'Gabriela Ferent',
    readTime: '12 min',
    image: diabeteAliments,
    link: '/articles/diabete-aliments-recommandes'
  }, {
    id: 'cholesterol-alimentation',
        title: 'Cholestérol : Les Aliments à Éviter et Ceux à Privilégier',
        description: 'Réduisez votre cholestérol naturellement avec ces conseils nutritionnels éprouvés. Plan d\'action et recettes incluses.',
        category: 'Prévention',
        categoryColor: 'bg-purple-100 text-purple-800',
        author: 'Gabriela Ferent',
        readTime: '7 min',
        image: cholesterolFoods,
    link: '/articles/cholesterol-alimentation'
  }, {
    id: 'perte-poids-apres-40',
        title: 'Perte de Poids Après 40 ans : Stratégies Efficaces',
        description: 'Perdre du poids après 40 ans demande une approche spécifique. Découvrez mes conseils adaptés aux changements hormonaux.',
        category: 'Nutrition Féminine',
        categoryColor: 'bg-pink-100 text-pink-800',
        author: 'Gabriela Ferent',
        readTime: '9 min',
        image: weightLoss40plus,
    link: '/articles/perte-poids-apres-40'
  }, {
    id: 'thyroide-alimentation',
    title: 'Thyroïde et Alimentation : Optimiser votre Métabolisme',
    description: 'Troubles thyroïdiens ? Découvrez quels aliments favorisent ou perturbent le bon fonctionnement de votre thyroïde.',
    category: 'Santé Hormonale',
    categoryColor: 'bg-indigo-100 text-indigo-800',
    author: 'Gabriela Ferent',
    readTime: '11 min',
    image: thyroide,
    link: '/articles/thyroide-alimentation'
  }, {
    id: 'hypertension-regime-dash',
    title: 'Hypertension : Le Régime DASH pour Réduire la Tension',
    description: 'Contrôlez votre tension artérielle naturellement avec le régime DASH. Menus, recettes et conseils pratiques.',
    category: 'Prévention',
    categoryColor: 'bg-purple-100 text-purple-800',
    author: 'Gabriela Ferent',
    readTime: '8 min',
    image: hypertensionDash,
    link: '/articles/hypertension-regime-dash'
  }, {
    id: 'troubles-digestifs',
    title: 'Troubles Digestifs : Solutions Nutritionnelles Naturelles',
    description: 'Ballonnements, inconfort digestif ? Découvrez comment adapter votre alimentation pour retrouver un confort intestinal.',
    category: 'Bien-être Digestif',
    categoryColor: 'bg-teal-100 text-teal-800',
    author: 'Gabriela Ferent',
    readTime: '10 min',
    image: diabeteAliments,
    link: '/articles/troubles-digestifs-solutions'
  }];
  return <section id="blog" className="py-20 bg-gradient-to-br from-green-25 to-blue-25">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              📚 Conseils d'Expert
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conseils Nutritionnels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez mes conseils professionnels pour transformer votre alimentation et votre santé
            </p>
          </div>

          {/* Fixed height container with scrolling */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 h-[600px] overflow-hidden">
            <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid md:grid-cols-3 gap-6">
                              {articles.map((article, index) => <Link key={article.id} to={article.link} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                                  {/* Article Image */}
                                  <div className="relative h-24 overflow-hidden flex-shrink-0">
                                    <img src={article.image} alt={`Image illustrative pour l'article: ${article.title}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
                                    <div className="absolute top-4 left-4">
                                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}>
                                        {article.category}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Article Content */}
                                  <div className="p-4 flex flex-col flex-1">
                                    {/* Author & Reading Time */}
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                      <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        <span>{article.author}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{article.readTime}</span>
                                      </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                                      {article.title}
                                    </h3>

                                    {/* Description - flex-grow pushes read more to bottom */}
                                    <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">
                                      {article.description}
                                    </p>

                                    {/* Read More */}
                                    <div className="flex items-center gap-2 text-green-600 font-semibold text-xs group-hover:gap-3 transition-all mt-auto">
                                      <span>Lire l'article</span>
                                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                  </div>
                                </Link>)}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin de conseils personnalisés ?
            </h3>
            <p className="text-gray-600 mb-6">
              Chaque situation est unique. Prenez rendez-vous pour un accompagnement sur-mesure adapté à vos besoins spécifiques.
            </p>
            <button onClick={() => {
                        const cabinetsSection = document.getElementById('cabinets');
                        if (cabinetsSection) {
                          cabinetsSection.scrollIntoView({
                            behavior: 'smooth'
                          });
                        }
                      }} className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg mb-4">
                          <User className="h-5 w-5" />
                          Prendre RDV sur Doctena
                        </button>
            
          </div>
        </div>
      </div>
    </section>;
};
export default BlogSection;