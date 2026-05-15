import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, BookOpen, Phone, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound = () => {
  const scrollToCabinets = () => {
    window.location.href = '/#cabinets';
  };

  const popularArticles = [
    {
      title: "Perte de poids après 40 ans",
      url: "/articles/perte-poids-apres-40",
      description: "Stratégies nutritionnelles efficaces pour une perte de poids durable"
    },
    {
      title: "Diabète et alimentation",
      url: "/articles/diabete-aliments", 
      description: "Guide complet pour gérer le diabète par l'alimentation"
    },
    {
      title: "Cholestérol et nutrition",
      url: "/articles/cholesterol-alimentation",
      description: "Comment réduire naturellement le cholestérol"
    },
    {
      title: "Hypertension et régime DASH",
      url: "/articles/hypertension-regime-dash",
      description: "Le régime DASH pour contrôler la tension artérielle"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col pt-[34px]">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Status */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-green-600 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Page non trouvée
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La page que vous recherchez n'existe pas ou a été déplacée. 
              Voici quelques suggestions pour continuer votre visite.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link 
              to="/"
              className="flex flex-col items-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accueil</h3>
              <p className="text-sm text-gray-600 text-center">Retour à la page principale</p>
            </Link>

            <button
              onClick={scrollToCabinets}
              className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Réserver</h3>
              <p className="text-sm text-gray-600 text-center">Prendre rendez-vous</p>
            </button>

            <Link 
              to="/articles/perte-poids-apres-40"
              className="flex flex-col items-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Articles</h3>
              <p className="text-sm text-gray-600 text-center">Conseils nutrition</p>
            </Link>
          </div>

          {/* Popular Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Articles populaires</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  to={article.url}
                  className="p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all group text-left"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Besoin d'aide ?</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-green-600" />
                <a href="tel:+352691379172" className="hover:text-green-600 transition-colors" title="Appeler pour une consultation">
                  +352 691 379 172
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-green-600" />
                <span 
                  className="hover:text-green-600 transition-colors cursor-pointer"
                  onClick={() => {
                    const email = 'dieteticienne' + '@' + 'conseildietetique.lu';
                    window.location.href = 'mailto:' + email;
                  }}
                >
                  dieteticienne [at] conseildietetique.lu
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;