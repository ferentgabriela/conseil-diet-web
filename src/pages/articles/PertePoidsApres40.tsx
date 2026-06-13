import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import weightLossImage from '@/assets/weight-loss-40plus-optimized.webp';

const PertePoidsApres40 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Perte de Poids Après 40 ans : Stratégies</title>
        <meta name="description" content="Découvrez des stratégies nutritionnelles adaptées pour perdre du poids après 40 ans. Conseils pratiques et durables de Gabriela Ferent, diététicienne." />
        <link rel="canonical" href="https://conseildietetique.lu/articles/perte-poids-apres-40" />
        <meta property="og:title" content="Perte de Poids Après 40 ans : Stratégies" />
        <meta property="og:description" content="Découvrez des stratégies nutritionnelles adaptées pour perdre du poids après 40 ans. Conseils pratiques et durables de Gabriela Ferent, diététicienne au Luxembourg." />
        <meta property="og:url" content="https://conseildietetique.lu/articles/perte-poids-apres-40" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Perte de Poids Après 40 ans : Stratégies Durables",
          "datePublished": "2024-01-15",
          "dateModified": "2024-01-15",
          "author": { "@type": "Person", "name": "Gabriela Ferent" },
          "publisher": { "@type": "Organization", "name": "Conseil Diététique Luxembourg" },
          "mainEntityOfPage": "https://conseildietetique.lu/articles/perte-poids-apres-40"
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
                src={weightLossImage}
                alt="Perte de Poids Après 40 ans - Stratégies efficaces et durables"
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
                  <span>11 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>3 juin 2024</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <span className="bg-hsl(var(--category-weight)) text-hsl(var(--category-weight-text)) px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Minceur
              </span>
              
              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-hsl(var(--blog-text-primary)) mb-6 leading-tight">
                Perte de Poids Après 40 ans : Stratégies Efficaces et Durables
              </h1>
              
              <p className="text-xl text-hsl(var(--blog-text-secondary)) leading-relaxed">
                Votre métabolisme ralentit avec l'âge ? Découvrez comment adapter intelligemment votre approche nutritionnelle avec ces stratégies scientifiquement prouvées pour les plus de 40 ans.
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-hsl(var(--blog-text-primary)) prose-p:text-hsl(var(--blog-text-secondary)) prose-li:text-hsl(var(--blog-text-secondary)) prose-strong:text-hsl(var(--blog-text-primary))">
                
                {/* Introduction */}
                <div className="bg-hsl(var(--muted)) rounded-2xl p-6 mb-8 border-l-4 border-hsl(var(--primary))">
                  <h2 className="text-2xl font-bold mb-4 text-hsl(var(--blog-text-primary))">⏰ Pourquoi c'est différent après 40 ans ?</h2>
                  <p className="text-lg mb-4">
                    Après 40 ans, plusieurs facteurs rendent la perte de poids plus complexe, mais pas impossible !
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🐌</span>
                      <span>Métabolisme ralenti</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💪</span>
                      <span>Perte de masse musculaire</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔄</span>
                      <span>Changements hormonaux</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">😴</span>
                      <span>Stress et manque de sommeil</span>
                    </div>
                  </div>
                </div>

                {/* Stratégie 1 */}
                <div className="bg-gradient-to-r from-hsl(var(--category-weight)) to-hsl(var(--accent)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">💪 Stratégie 1 : Préserver la masse musculaire</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🥩 Apport protéique optimal</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-hsl(var(--primary)) rounded-full"></span>
                          <span>1,2 à 1,6g de protéines par kg</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-hsl(var(--primary)) rounded-full"></span>
                          <span>Répartir sur tous les repas</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-hsl(var(--primary)) rounded-full"></span>
                          <span>Privilégier les protéines complètes</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-hsl(var(--primary)) rounded-full"></span>
                          <span>Collations protéinées</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🏋️ Exercices de résistance</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🏃</span>
                          <span>Musculation 2-3x/semaine</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🤸</span>
                          <span>Exercices au poids du corps</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🧘</span>
                          <span>Yoga ou Pilates</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🚶</span>
                          <span>Marche active quotidienne</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stratégie 2 */}
                <div className="bg-gradient-to-r from-hsl(var(--accent)) to-hsl(var(--category-weight)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">🔥 Stratégie 2 : Optimiser le métabolisme</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">⏰ Jeûne intermittent adapté</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🚀</span>
                          <span>Commencer progressivement</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">⏳</span>
                          <span>Méthode 16:8 ou 14:10 — À adapter selon votre profil hormonal et toujours sous supervision.</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">💧</span>
                          <span>Maintenir l'hydratation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">👂</span>
                          <span>Écouter son corps</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🌶️ Aliments thermogéniques</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">☕</span>
                          <span>Thé vert et café</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🌶️</span>
                          <span>Épices (gingembre, cannelle)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🥩</span>
                          <span>Protéines maigres</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🥬</span>
                          <span>Légumes verts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stratégie 3 */}
                <div className="bg-hsl(var(--muted)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">⚖️ Stratégie 3 : Gérer les hormones</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-hsl(var(--primary))">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🍯 Régulation de l'insuline</h3>
                      <ul className="space-y-2">
                        <li>• Limiter les sucres rapides</li>
                        <li>• Privilégier les glucides complexes</li>
                        <li>• Associer fibres et protéines</li>
                        <li>• Manger à heures régulières</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border-l-4 border-hsl(var(--primary))">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🧘 Gestion du stress</h3>
                      <ul className="space-y-2">
                        <li>• Techniques de relaxation</li>
                        <li>• Sommeil de qualité (7-8h)</li>
                        <li>• Activité physique régulière</li>
                        <li>• Temps pour soi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Plan nutritionnel */}
                <h2 className="text-3xl font-bold mb-8 text-hsl(var(--blog-text-primary))">🍽️ Plan nutritionnel type</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="space-y-4">
                    <div className="bg-hsl(var(--category-weight)) p-6 rounded-2xl">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span>🌅</span> Petit-déjeuner (7h30)
                      </h3>
                      <ul className="space-y-1">
                        <li>• Œufs brouillés aux épinards</li>
                        <li>• Avocat sur pain complet</li>
                        <li>• Thé vert</li>
                      </ul>
                    </div>
                    
                    <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span>🌞</span> Collation (16h)
                      </h3>
                      <ul className="space-y-1">
                        <li>• Yaourt grec nature</li>
                        <li>• Poignée de noix</li>
                        <li>• Fruit de saison</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span>☀️</span> Déjeuner (12h30)
                      </h3>
                      <ul className="space-y-1">
                        <li>• Salade composée avec protéines</li>
                        <li>• Quinoa ou riz brun</li>
                        <li>• Légumes de saison</li>
                        <li>• Huile d'olive</li>
                      </ul>
                    </div>
                    
                    <div className="bg-hsl(var(--category-weight)) p-6 rounded-2xl">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <span>🌙</span> Dîner (19h30)
                      </h3>
                      <ul className="space-y-1">
                        <li>• Poisson ou légumineuses</li>
                        <li>• Légumes vapeur</li>
                        <li>• Salade verte</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Erreurs à éviter */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-8 rounded-2xl mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-red-800">❌ Erreurs à éviter absolument</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-red-700">
                      <span className="text-xl">🚫</span>
                      <span>Régimes trop restrictifs</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-700">
                      <span className="text-xl">😴</span>
                      <span>Négliger le sommeil</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-700">
                      <span className="text-xl">🏃</span>
                      <span>Trop de cardio, pas assez de musculation</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-700">
                      <span className="text-xl">📊</span>
                      <span>Comparer aux résultats d'avant</span>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">🎯 L'approche gagnante après 40 ans</h2>
                  <p className="text-lg mb-6">
                    Perdre du poids après 40 ans demande une approche différente, plus patiente et plus globale. L'important est de créer un mode de vie durable qui respecte les besoins de votre corps à cette étape de la vie.
                  </p>
                  <a 
                    href="/#services" 
                    className="inline-flex items-center gap-2 bg-hsl(var(--primary-foreground)) text-hsl(var(--primary)) px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                    title="Découvrir nos prestations pour la perte de poids après 40 ans"
                  >
                    ✨ Prêt(e) pour un accompagnement personnalisé ?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PertePoidsApres40;