import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, BookOpen, Phone, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { checkGonePage, createGoneResponse } from '@/middleware/gonePages';

const Custom404 = () => {
  const location = useLocation();
  
  // Check if this should be a 410 Gone instead of 404
  useEffect(() => {
    if (checkGonePage(location.pathname)) {
      // This would ideally be handled by server middleware
      // For now, we'll just show a different message
      console.log('This page should return 410 Gone');
    }
  }, [location.pathname]);
  
  useEffect(() => {
    // Log the 404 to our tracking system
    const log404 = async () => {
      try {
        await supabase.functions.invoke('log-404', {
          body: {
            path: location.pathname,
            referrer: document.referrer || '',
            userAgent: navigator.userAgent || ''
          }
        });
      } catch (error) {
        console.error('Failed to log 404:', error);
      }
    };
    
    log404();
  }, [location.pathname]);
  
  const isGonePage = checkGonePage(location.pathname);
  
  const topArticles = [
    {
      title: "Perte de Poids Après 40 ans",
      description: "Stratégies efficaces pour perdre du poids après 40 ans",
      url: "/articles/perte-poids-apres-40"
    },
    {
      title: "Cholestérol et Alimentation",
      description: "Les aliments à éviter et ceux à privilégier",
      url: "/articles/cholesterol-alimentation"
    },
    {
      title: "Diabète Type 2",
      description: "10 aliments à privilégier au quotidien",
      url: "/articles/diabete-aliments-recommandes"
    },
    {
      title: "Nutrition et Ménopause",
      description: "Guide complet pour maintenir son poids",
      url: "/articles/nutrition-menopause-guide"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404/410 Hero */}
        <div className="mb-8">
          <div className={`text-8xl font-bold mb-4 ${isGonePage ? 'text-red-600' : 'text-green-600'}`}>
            {isGonePage ? '410' : '404'}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isGonePage ? 'Page supprimée' : 'Page non trouvée'}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {isGonePage 
              ? 'Cette page a été intentionnellement supprimée et ne reviendra pas.'
              : 'Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.'
            }
          </p>
          <p className="text-gray-500">
            Chemin demandé : <code className="bg-gray-100 px-2 py-1 rounded text-sm">{location.pathname}</code>
          </p>
        </div>
        
        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link
            to="/"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <Home className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Accueil</div>
              <div className="text-sm text-gray-600">Retour à la page d'accueil</div>
            </div>
          </Link>
          
          <Link
            to="/#cabinets"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <Phone className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Rendez-vous</div>
              <div className="text-sm text-gray-600">Prendre un rendez-vous</div>
            </div>
          </Link>
          
          <Link
            to="/#blog"
            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <BookOpen className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Conseils</div>
              <div className="text-sm text-gray-600">Articles de nutrition</div>
            </div>
          </Link>
        </div>
        
        {/* Search Suggestion */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-6 w-6 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">
              Peut-être cherchiez-vous...
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Voici quelques suggestions basées sur les pages les plus populaires de notre site :
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {topArticles.map((article, index) => (
              <Link
                key={index}
                to={article.url}
                className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {article.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="bg-green-100 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-green-900 mb-2">
            Besoin d'aide ?
          </h2>
          <p className="text-green-800 mb-4">
            Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+352691379172"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              +352 691 379 172
            </a>
            <a
              href="mailto:gabriela@conseildietetique.lu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        {/* Breadcrumb for context */}
        <div className="mt-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600 transition-colors">
            Accueil
          </Link>
          <span className="mx-2">→</span>
          <span>Page non trouvée</span>
        </div>
      </div>
    </div>
  );
};

export default Custom404;