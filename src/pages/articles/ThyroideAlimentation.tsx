import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import thyroidImage from '@/assets/thyroid-nutrition-optimized.webp';

const ThyroideAlimentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Thyroïde et Alimentation : Guide Complet pour Optimiser Votre Santé — Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Guide alimentaire pour optimiser la fonction thyroïdienne. Conseils nutritionnels de Gabriela Ferent, diététicienne au Luxembourg." />
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
                src={thyroidImage}
                alt="Thyroïde et Alimentation - Aliments pour optimiser la fonction thyroïdienne"
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
                  <span>13 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>30 mai 2024</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <span className="bg-hsl(var(--category-endocrine)) text-hsl(var(--category-endocrine-text)) px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Endocrinologie
              </span>
              
              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-hsl(var(--blog-text-primary)) mb-6 leading-tight">
                Thyroïde et Alimentation : Guide Complet pour Optimiser Votre Santé
              </h1>
              
              <p className="text-xl text-hsl(var(--blog-text-secondary)) leading-relaxed">
                Hypothyroïdie ou hyperthyroïdie ? Découvrez comment adapter précisément votre alimentation pour soutenir le bon fonctionnement de votre thyroïde et retrouver votre équilibre.
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-hsl(var(--blog-text-primary)) prose-p:text-hsl(var(--blog-text-secondary)) prose-li:text-hsl(var(--blog-text-secondary)) prose-strong:text-hsl(var(--blog-text-primary))">
                
                {/* Introduction */}
                <div className="bg-hsl(var(--muted)) rounded-2xl p-6 mb-8 border-l-4 border-hsl(var(--primary))">
                  <h2 className="text-2xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🦋 Comprendre la thyroïde</h2>
                  <p className="text-lg">
                    La thyroïde est une petite glande en forme de papillon située dans le cou. Elle produit des hormones essentielles qui régulent le métabolisme, la température corporelle, et de nombreuses autres fonctions vitales.
                  </p>
                </div>

                {/* Hypothyroïdie Section */}
                <div className="bg-gradient-to-r from-hsl(var(--category-endocrine)) to-hsl(var(--accent)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">❄️ Hypothyroïdie : quand la thyroïde ralentit</h2>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">😴</div>
                      <p className="font-semibold">Fatigue chronique</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">⚖️</div>
                      <p className="font-semibold">Prise de poids</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">🥶</div>
                      <p className="font-semibold">Frilosité</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🍽️ Nutrition pour l'hypothyroïdie</h3>
                  <div className="space-y-4">
                    <div className="bg-white/50 p-4 rounded-xl">
                      <h4 className="font-semibold mb-2">⚡ Iode (avec précaution)</h4>
                      <p>Algues marines, poissons, fruits de mer, sel iodé en quantité raisonnable</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-xl">
                      <h4 className="font-semibold mb-2">🛡️ Sélénium</h4>
                      <p>1-2 noix du Brésil par jour, poissons gras, œufs, graines de tournesol</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-xl">
                      <h4 className="font-semibold mb-2">⚙️ Zinc</h4>
                      <p>Huîtres, viandes maigres, graines de citrouille, légumineuses</p>
                    </div>
                  </div>
                </div>

                {/* Hyperthyroïdie Section */}
                <div className="bg-gradient-to-r from-hsl(var(--accent)) to-hsl(var(--category-endocrine)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">🔥 Hyperthyroïdie : quand la thyroïde s'emballe</h2>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">💓</div>
                      <p className="font-semibold">Palpitations</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">😰</div>
                      <p className="font-semibold">Nervosité</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">💦</div>
                      <p className="font-semibold">Transpiration</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🥛 Nutrition pour l'hyperthyroïdie</h3>
                  <div className="space-y-4">
                    <div className="bg-white/50 p-4 rounded-xl">
                      <h4 className="font-semibold mb-2">🦴 Calcium & Magnésium</h4>
                      <p>Produits laitiers, légumes verts, sardines, amandes, chocolat noir</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-xl">
                      <h4 className="font-semibold mb-2">🥦 Crucifères bénéfiques</h4>
                      <p>Chou, brocoli, chou-fleur, radis - peuvent aider à calmer la thyroïde</p>
                    </div>
                  </div>
                </div>

                {/* Menus types */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-hsl(var(--muted)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">📋 Menu Hypothyroïdie</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3"><span className="font-semibold">🌅</span>Œufs + avocat + pain complet</div>
                      <div className="flex gap-3"><span className="font-semibold">☀️</span>Saumon + quinoa + légumes verts</div>
                      <div className="flex gap-3"><span className="font-semibold">🌙</span>Poulet + patate douce + haricots verts</div>
                    </div>
                  </div>
                  
                  <div className="bg-hsl(var(--muted)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">📋 Menu Hyperthyroïdie</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3"><span className="font-semibold">🌅</span>Smoothie épinards + yaourt calcium</div>
                      <div className="flex gap-3"><span className="font-semibold">☀️</span>Sardines + salade + crudités</div>
                      <div className="flex gap-3"><span className="font-semibold">🌙</span>Brocolis + riz complet + légumineuses</div>
                    </div>
                  </div>
                </div>

                {/* Conseils pratiques */}
                <div className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">⚕️ Suivi médical essentiel</h2>
                  <p className="text-lg mb-6">
                    L'alimentation joue un rôle important dans la gestion des troubles thyroïdiens, mais elle ne remplace jamais un traitement médical approprié. Chaque cas est unique et nécessite un suivi personnalisé.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-hsl(var(--primary-foreground)) text-hsl(var(--primary)) px-6 py-3 rounded-full font-semibold">
                    🎯 Consultation nutritionnelle spécialisée
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ThyroideAlimentation;