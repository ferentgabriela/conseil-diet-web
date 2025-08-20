import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const CholesterolAlimentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cholestérol : Guide Complet des Aliments à Éviter et à Privilégier — Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Guide alimentaire pour réduire le cholestérol naturellement. Conseils nutritionnels de Gabriela Ferent, diététicienne au Luxembourg." />
      </Helmet>
      <Navigation />
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-hsl(var(--blog-text-secondary)) hover:text-hsl(var(--primary)) mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Retour au blog
          </Link>

          {/* Hero Section */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden mb-12">
            <div className="relative h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Cholestérol et Alimentation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="p-8 md:p-12">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-hsl(var(--blog-text-secondary))">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">Gabriela Ferent</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>7 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>8 juin 2024</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <span className="bg-hsl(var(--category-prevention)) text-hsl(var(--category-prevention-text)) px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Prévention
              </span>
              
              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-hsl(var(--blog-text-primary)) mb-6 leading-tight">
                Cholestérol : Guide Complet des Aliments à Éviter et à Privilégier
              </h1>
              
              <p className="text-xl text-hsl(var(--blog-text-secondary)) leading-relaxed">
                Réduisez votre cholestérol naturellement avec ces conseils nutritionnels éprouvés. Plan d'action sur 7 jours et recettes savoureuses incluses.
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-hsl(var(--blog-text-primary)) prose-p:text-hsl(var(--blog-text-secondary)) prose-li:text-hsl(var(--blog-text-secondary)) prose-strong:text-hsl(var(--blog-text-primary))">
                
                {/* Introduction */}
                <div className="bg-hsl(var(--muted)) rounded-2xl p-6 mb-8 border-l-4 border-hsl(var(--primary))">
                  <h2 className="text-2xl font-bold mb-4 text-hsl(var(--blog-text-primary))">💡 Comprendre le cholestérol</h2>
                  <p className="text-lg">
                    Le cholestérol n'est pas toujours l'ennemi ! Votre corps en a besoin pour fonctionner, mais c'est l'équilibre entre <strong>"bon" (HDL)</strong> et <strong>"mauvais" (LDL)</strong> cholestérol qui compte vraiment.
                  </p>
                </div>

                {/* Aliments à limiter */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-red-800">🚫 Aliments à limiter</h2>
                  <p className="text-lg mb-6 text-red-700">Ces aliments peuvent augmenter votre taux de cholestérol LDL :</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/70 p-4 rounded-xl border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 mb-2">🥓 Viandes grasses</h4>
                      <p className="text-red-700">Charcuteries, viandes rouges grasses</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 mb-2">🧀 Produits laitiers entiers</h4>
                      <p className="text-red-700">Fromages gras, crème, beurre</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 mb-2">🍟 Fritures et transformés</h4>
                      <p className="text-red-700">Aliments frits, plats préparés</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 mb-2">🥐 Pâtisseries</h4>
                      <p className="text-red-700">Viennoiseries, gâteaux industriels</p>
                    </div>
                  </div>
                </div>

                {/* Aliments à privilégier */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-green-800">✅ Aliments à privilégier</h2>
                  <p className="text-lg mb-6 text-green-700">Ces super-aliments aident à réduire le cholestérol naturellement :</p>
                  
                  <div className="space-y-6">
                    <div className="bg-white/70 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold mb-4 text-green-800">🌾 Fibres solubles</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🥣</span>
                          <span>Avoine et orge</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🫘</span>
                          <span>Légumineuses (haricots, lentilles)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🍎</span>
                          <span>Pommes et agrumes</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🥬</span>
                          <span>Légumes verts</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/70 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold mb-4 text-green-800">🐟 Acides gras oméga-3</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🐠</span>
                          <span>Poissons gras (saumon, sardines)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🌰</span>
                          <span>Graines de lin et de chia</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🥜</span>
                          <span>Noix</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🫒</span>
                          <span>Huile d'olive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plan d'action 7 jours */}
                <h2 className="text-3xl font-bold mb-8 text-hsl(var(--blog-text-primary))">📅 Plan d'action sur 7 jours</h2>
                
                <div className="grid gap-4 mb-10">
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm">Jour 1</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong>Matin :</strong> Porridge d'avoine aux fruits rouges
                      </div>
                      <div>
                        <strong>Midi :</strong> Salade de lentilles au saumon
                      </div>
                      <div>
                        <strong>Soir :</strong> Légumes vapeur et blanc de poulet
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-hsl(var(--muted)) p-6 rounded-2xl">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm">Jour 2</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong>Matin :</strong> Smoothie avocat-épinards-pomme
                      </div>
                      <div>
                        <strong>Midi :</strong> Soupe de haricots blancs
                      </div>
                      <div>
                        <strong>Soir :</strong> Poisson blanc aux légumes
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm">Jour 3-7</span>
                    </h3>
                    <p className="text-sm">Continuez en alternant ces principes et en variant les légumes, poissons et légumineuses selon vos goûts !</p>
                  </div>
                </div>

                {/* Conseils supplémentaires */}
                <div className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">💫 Conseils pour réussir</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-left">
                      <h3 className="font-semibold mb-2">🏃 Style de vie</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Activité physique régulière</li>
                        <li>• Maintenir un poids santé</li>
                        <li>• Éviter le tabac</li>
                      </ul>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold mb-2">🧘 Bien-être</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Limiter le stress</li>
                        <li>• Surveiller la tension</li>
                        <li>• Bilans réguliers</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg">
                    Réduire son cholestérol par l'alimentation demande de la patience et de la constance. Ces changements, adoptés progressivement, amélioreront durablement votre santé cardiovasculaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CholesterolAlimentation;