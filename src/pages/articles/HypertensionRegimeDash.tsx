import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import dashDietImage from '@/assets/dash-diet-foods-optimized.webp';

const HypertensionRegimeDash = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hypertension : Le Régime DASH Expliqué</title>
        <meta name="description" content="Le régime DASH pour réduire l'hypertension expliqué simplement. Guide complet de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
        <link rel="canonical" href="https://www.conseildietetique.lu/articles/hypertension-regime-dash" />
        <meta property="og:title" content="Hypertension : Le Régime DASH Expliqué" />
        <meta property="og:description" content="Le régime DASH pour réduire l'hypertension expliqué simplement. Guide complet de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
        <meta property="og:url" content="https://www.conseildietetique.lu/articles/hypertension-regime-dash" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Hypertension : Le Régime DASH Expliqué Simplement",
          "datePublished": "2024-01-15",
          "dateModified": "2024-01-15",
          "author": { "@type": "Person", "name": "Gabriela Ferent" },
          "publisher": { "@type": "Organization", "name": "Conseil Diététique Luxembourg" },
          "mainEntityOfPage": "https://www.conseildietetique.lu/articles/hypertension-regime-dash"
        })}</script>

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
                src={dashDietImage}
                alt="Hypertension et Régime DASH - Aliments recommandés pour réduire la tension"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="sync"
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
                  <span>10 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>1 juin 2024</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <span className="bg-hsl(var(--category-cardio)) text-hsl(var(--category-cardio-text)) px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Cardiovasculaire
              </span>
              
              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-hsl(var(--blog-text-primary)) mb-6 leading-tight">
                Hypertension : Le Régime DASH Expliqué Simplement et Efficacement
              </h1>
              
              <p className="text-xl text-hsl(var(--blog-text-secondary)) leading-relaxed">
                Réduisez votre tension artérielle naturellement avec le régime DASH scientifiquement prouvé. Guide complet avec menus types et conseils pratiques pour débuter dès aujourd'hui.
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-hsl(var(--blog-text-primary)) prose-p:text-hsl(var(--blog-text-secondary)) prose-li:text-hsl(var(--blog-text-secondary)) prose-strong:text-hsl(var(--blog-text-primary))">
                
                {/* Introduction DASH */}
                <div className="bg-hsl(var(--muted)) rounded-2xl p-6 mb-8 border-l-4 border-hsl(var(--primary))">
                  <h2 className="text-2xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🎯 Qu'est-ce que le régime DASH ?</h2>
                  <p className="text-lg">
                    <strong>DASH</strong> signifie "Dietary Approaches to Stop Hypertension" (Approches Diététiques pour Stopper l'Hypertension). C'est un plan alimentaire scientifiquement prouvé pour réduire la tension artérielle de manière naturelle et durable.
                  </p>
                </div>

                {/* Principes DASH */}
                <div className="bg-gradient-to-r from-hsl(var(--category-cardio)) to-hsl(var(--accent)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">📋 Principes fondamentaux du régime DASH</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">🧂</div>
                      <p className="font-semibold">Réduction du sodium</p>
                      <p className="text-sm">Moins de 2300mg/jour</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <p className="font-semibold">Plus de minéraux</p>
                      <p className="text-sm">Potassium, magnésium, calcium</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">🌿</div>
                      <p className="font-semibold">Aliments entiers</p>
                      <p className="text-sm">Non transformés</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">📏</div>
                      <p className="font-semibold">Portions contrôlées</p>
                      <p className="text-sm">Équilibre des quantités</p>
                    </div>
                  </div>
                </div>

                {/* Aliments à privilégier */}
                <h2 className="text-3xl font-bold mb-8 text-hsl(var(--blog-text-primary))">🥗 Aliments stars du régime DASH</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary)) flex items-center gap-2">
                      <span>🥬</span> Légumes et fruits (8-10 portions/jour)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🥬</span>
                          <span>Légumes verts à feuilles</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🍅</span>
                          <span>Tomates, poivrons, brocolis</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🍌</span>
                          <span>Bananes, oranges, baies</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🍈</span>
                          <span>Melons, raisins, pommes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-hsl(var(--muted)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary)) flex items-center gap-2">
                      <span>🌾</span> Céréales complètes (6-8 portions/jour)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🥣</span>
                        <span>Avoine, quinoa, riz brun</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🍞</span>
                        <span>Pain et pâtes complètes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary)) flex items-center gap-2">
                      <span>🐟</span> Protéines maigres (2-3 portions/jour)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🐠</span>
                        <span>Poissons et fruits de mer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🐔</span>
                        <span>Volaille sans peau</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu 3 jours */}
                <h2 className="text-3xl font-bold mb-8 text-hsl(var(--blog-text-primary))">📅 Menu type sur 3 jours</h2>
                
                <div className="grid gap-6 mb-10">
                  <div className="bg-gradient-to-r from-hsl(var(--category-cardio)) to-hsl(var(--accent)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">📅 Jour 1</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div><strong>🌅 Matin :</strong> Porridge d'avoine aux baies + lait écrémé</div>
                        <div><strong>🌞 16h :</strong> Yaourt nature + amandes</div>
                      </div>
                      <div className="space-y-2">
                        <div><strong>☀️ Midi :</strong> Salade quinoa + saumon grillé</div>
                        <div><strong>🌙 Soir :</strong> Blanc de poulet + brocolis + riz brun</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-hsl(var(--accent)) to-hsl(var(--category-cardio)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">📅 Jour 2</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div><strong>🌅 Matin :</strong> Smoothie banane-épinards + pain complet</div>
                        <div><strong>🌞 16h :</strong> Pomme + noix</div>
                      </div>
                      <div className="space-y-2">
                        <div><strong>☀️ Midi :</strong> Soupe de lentilles + salade verte</div>
                        <div><strong>🌙 Soir :</strong> Poisson blanc + légumes rôtis + patate douce</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-hsl(var(--muted)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">📅 Jour 3</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div><strong>🌅 Matin :</strong> Œufs brouillés + légumes + toast complet</div>
                        <div><strong>🌞 16h :</strong> Yaourt aux fruits</div>
                      </div>
                      <div className="space-y-2">
                        <div><strong>☀️ Midi :</strong> Salade méditerranéenne + pois chiches</div>
                        <div><strong>🌙 Soir :</strong> Dinde aux légumes + quinoa</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Résultats attendus */}
                <div className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">📊 Résultats scientifiquement prouvés</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-left">
                      <h3 className="font-semibold mb-2">🎯 Effets sur la tension</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Réduction de 8-14 mmHg</li>
                        <li>• Amélioration en 2-4 semaines</li>
                        <li>• Bénéfices durables</li>
                      </ul>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold mb-2">✨ Autres bénéfices</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Perte de poids si nécessaire</li>
                        <li>• Amélioration de l'énergie</li>
                        <li>• Santé cardiovasculaire globale</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg">
                    Le régime DASH n'est pas seulement efficace contre l'hypertension, c'est un mode de vie alimentaire sain pour toute la famille. Sa flexibilité et ses bases scientifiques solides en font un choix excellent pour une santé cardiovasculaire optimale.
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

export default HypertensionRegimeDash;