import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import digestiveImage from '@/assets/digestive-health-foods-optimized.webp';

const TroublesDigestifs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Troubles Digestifs : Solutions Naturelles et Rééquilibrage Alimentaire — Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Solutions naturelles pour les troubles digestifs et rééquilibrage alimentaire. Guide pratique de Gabriela Ferent, diététicienne au Luxembourg." />
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
                src={digestiveImage}
                alt="Troubles Digestifs - Solutions naturelles et rééquilibrage alimentaire"
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
                  <span>9 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>5 juin 2024</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <span className="bg-hsl(var(--category-digestion)) text-hsl(var(--category-digestion-text)) px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Digestion
              </span>
              
              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-hsl(var(--blog-text-primary)) mb-6 leading-tight">
                Troubles Digestifs : Solutions Naturelles et Rééquilibrage Alimentaire
              </h1>
              
              <p className="text-xl text-hsl(var(--blog-text-secondary)) leading-relaxed">
                Ballonnements, reflux, constipation... Découvrez comment soulager efficacement vos troubles digestifs grâce à une alimentation adaptée et des remèdes naturels éprouvés.
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-hsl(var(--blog-text-primary)) prose-p:text-hsl(var(--blog-text-secondary)) prose-li:text-hsl(var(--blog-text-secondary)) prose-strong:text-hsl(var(--blog-text-primary))">
                
                {/* Introduction */}
                <div className="bg-hsl(var(--muted)) rounded-2xl p-6 mb-8 border-l-4 border-hsl(var(--primary))">
                  <h2 className="text-2xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🎯 Les troubles digestifs les plus fréquents</h2>
                  <p className="text-lg mb-4">Les troubles digestifs touchent une grande partie de la population. Voici les plus courants :</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">💨</span>
                      <span>Ballonnements et gaz</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🔥</span>
                      <span>Reflux gastro-œsophagien</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🐌</span>
                      <span>Constipation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">💧</span>
                      <span>Diarrhées</span>
                    </div>
                  </div>
                </div>

                {/* Ballonnements */}
                <div className="bg-gradient-to-r from-hsl(var(--category-digestion)) to-hsl(var(--accent)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">💨 Ballonnements : causes et solutions</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-red-700">🚫 Aliments à éviter</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🫘</span>
                          <span>Légumineuses non trempées</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🥦</span>
                          <span>Crucifères si sensibilité</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🧪</span>
                          <span>Édulcorants artificiels</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🥤</span>
                          <span>Boissons gazeuses</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-green-700">✅ Solutions naturelles</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🌿</span>
                          <span>Infusions de fenouil ou menthe</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🌰</span>
                          <span>Graines de carvi</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">💆</span>
                          <span>Massage abdominal</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🚶</span>
                          <span>Marche après les repas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reflux */}
                <div className="bg-gradient-to-r from-hsl(var(--accent)) to-hsl(var(--category-digestion)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">🔥 Reflux gastro-œsophagien</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🍽️ Conseils alimentaires</h3>
                      <ul className="space-y-2">
                        <li>• Éviter les repas copieux</li>
                        <li>• Limiter les aliments acides</li>
                        <li>• Réduire le café et l'alcool</li>
                        <li>• Manger lentement</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🌿 Remèdes naturels</h3>
                      <ul className="space-y-2">
                        <li>• Jus d'aloe vera</li>
                        <li>• Camomille</li>
                        <li>• Bicarbonate (occasionnellement)</li>
                        <li>• Surélever la tête du lit</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Constipation */}
                <div className="bg-hsl(var(--muted)) p-8 rounded-2xl mb-10">
                  <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">🐌 Constipation : solutions douces</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-hsl(var(--primary))">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🌾 Aliments riches en fibres</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🟣</span>
                          <span>Pruneaux et figues</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🥬</span>
                          <span>Légumes verts à feuilles</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🌰</span>
                          <span>Graines de lin moulues</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🌾</span>
                          <span>Céréales complètes</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border-l-4 border-hsl(var(--primary))">
                      <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">💧 Hydratation et mouvement</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">💧</span>
                          <span>1,5 à 2L d'eau par jour</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🍋</span>
                          <span>Eau tiède citronnée le matin</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🏃</span>
                          <span>Activité physique régulière</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">💆</span>
                          <span>Massage abdominal circulaire</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Programme 14 jours */}
                <h2 className="text-3xl font-bold mb-8 text-hsl(var(--blog-text-primary))">📅 Programme de rééquilibrage digestif (14 jours)</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-hsl(var(--category-digestion)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🌟 Semaine 1 : Détox douce</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🚫</span>
                        <span>Éliminer les aliments transformés</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🥕</span>
                        <span>Privilégier les légumes cuits</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🍵</span>
                        <span>Boire des tisanes digestives</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🧘</span>
                        <span>Manger dans le calme</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 text-hsl(var(--blog-text-primary))">🔄 Semaine 2 : Réintroduction</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🥗</span>
                        <span>Réintroduire les crudités</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🫘</span>
                        <span>Tester les légumineuses</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">👀</span>
                        <span>Surveiller les réactions</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">📝</span>
                        <span>Tenir un journal alimentaire</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">🎯 Votre système digestif est unique</h2>
                  <p className="text-lg mb-6">
                    Chaque système digestif est unique. Il est important d'identifier vos propres déclencheurs et d'adapter votre alimentation en conséquence. N'hésitez pas à consulter un professionnel si les troubles persistent.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-hsl(var(--primary-foreground)) text-hsl(var(--primary)) px-6 py-3 rounded-full font-semibold">
                    🌟 Accompagnement digestif personnalisé
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

export default TroublesDigestifs;