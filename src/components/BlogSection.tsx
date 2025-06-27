import React from 'react';
import { Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const articles = [
    {
      title: "Nutrition et Ménopause : Guide Complet pour Maintenir son Poids",
      excerpt: "La ménopause bouleverse votre métabolisme ? Découvrez comment adapter votre alimentation pour maintenir un poids santé et réduire les symptômes.",
      readTime: "8 min",
      category: "Nutrition Féminine",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "nutrition-menopause-guide"
    },
    {
      title: "Allaitement et Perte de Poids : Ce que Vous Devez Savoir",
      excerpt: "Comment perdre du poids sainement pendant l'allaitement ? Tous mes conseils pour concilier perte de poids et production de lait maternel.",
      readTime: "10 min",
      category: "Maternité",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "allaitement-perte-poids"
    },
    {
      title: "Diabète Type 2 : 10 Aliments à Privilégier au Quotidien",
      excerpt: "Contrôlez votre glycémie naturellement avec ces aliments recommandés par les nutritionnistes. Menu type et conseils pratiques inclus.",
      readTime: "12 min",
      category: "Diabète",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "diabete-aliments-recommandes"
    },
    {
      title: "Cholestérol : Les Aliments à Éviter et Ceux à Privilégier",
      excerpt: "Réduisez votre cholestérol naturellement avec ces conseils nutritionnels éprouvés. Plan d'action et recettes incluses.",
      readTime: "7 min",
      category: "Prévention",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "cholesterol-alimentation"
    },
    {
      title: "Troubles Digestifs : Solutions Naturelles et Alimentation",
      excerpt: "Ballonnements, reflux, constipation... Découvrez comment soulager vos troubles digestifs grâce à une alimentation adaptée et des remèdes naturels.",
      readTime: "9 min",
      category: "Digestion",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "troubles-digestifs-solutions"
    },
    {
      title: "Perte de Poids Après 40 ans : Stratégies Efficaces",
      excerpt: "Votre métabolisme ralentit avec l'âge ? Adaptez votre approche nutritionnelle avec ces stratégies spécialement conçues pour les plus de 40 ans.",
      readTime: "11 min",
      category: "Minceur",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "perte-poids-apres-40"
    },
    {
      title: "Hypertension : Le Régime DASH Expliqué Simplement",
      excerpt: "Réduisez votre tension artérielle naturellement avec le régime DASH. Guide complet avec menus types et conseils pratiques pour débuter.",
      readTime: "10 min",
      category: "Cardiovasculaire",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "hypertension-regime-dash"
    },
    {
      title: "Thyroïde et Alimentation : Ce qu'il Faut Savoir",
      excerpt: "Hypothyroïdie ou hyperthyroïdie ? Découvrez comment adapter votre alimentation pour soutenir le bon fonctionnement de votre thyroïde.",
      readTime: "13 min",
      category: "Endocrinologie",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "thyroide-alimentation"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative">
      {/* Curved top transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-20 fill-white transform -translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
              <BookOpen className="h-4 w-4" />
              <span className="font-medium">Conseils d'Expert</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Guide Nutrition Luxembourg
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez mes conseils professionnels pour transformer votre alimentation et votre santé
            </p>
          </div>

          {/* Scrollable Articles Area */}
          <div className="mb-12">
            <ScrollArea className="h-[600px] w-full rounded-2xl border bg-white/50 backdrop-blur-sm shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {articles.map((article, index) => (
                  <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>Gabriela Ferent</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <Link 
                        to={`/articles/${article.slug}`}
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                      >
                        Lire l'article
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin de conseils personnalisés ?
            </h3>
            <p className="text-gray-600 mb-6">
              Chaque situation est unique. Prenez rendez-vous pour un accompagnement sur-mesure adapté à vos besoins spécifiques.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <User className="h-5 w-5" />
              Consultation personnalisée
            </button>
          </div>
        </div>
      </div>

      {/* Bottom curved transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-20 fill-white transform translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default BlogSection;
