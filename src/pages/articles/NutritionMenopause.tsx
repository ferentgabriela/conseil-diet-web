
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import StickyBookingBar from '@/components/StickyBookingBar';
import nutritionMenopause from '@/assets/nutrition-menopause-optimized.webp';

const NutritionMenopause = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nutrition et Ménopause : Guide pour Maintenir son Poids</title>
        <meta name="description" content="Guide nutritionnel pour la ménopause et le maintien du poids. Conseils adaptés de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
        <link rel="canonical" href="https://conseildietetique.lu/articles/nutrition-menopause-guide" />
        <meta property="og:title" content="Nutrition et Ménopause : Guide pour Maintenir son Poids" />
        <meta property="og:description" content="Guide nutritionnel pour la ménopause et le maintien du poids. Conseils adaptés de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
        <meta property="og:url" content="https://conseildietetique.lu/articles/nutrition-menopause-guide" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Nutrition et Ménopause : Maintenir son Poids",
          "datePublished": "2024-01-15",
          "dateModified": "2024-01-15",
          "author": { "@type": "Person", "name": "Gabriela Ferent" },
          "publisher": { "@type": "Organization", "name": "Conseil Diététique Luxembourg" },
          "mainEntityOfPage": "https://conseildietetique.lu/articles/nutrition-menopause-guide"
        })}</script>

      </Helmet>
      <Navigation />
      <StickyBookingBar />
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
                src={nutritionMenopause}
                alt="Nutrition et Ménopause - Guide complet pour maintenir son poids naturellement"
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
                  <span>8 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>15 juin 2024</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <span className="bg-hsl(var(--category-feminine)) text-hsl(var(--category-feminine-text)) px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Nutrition Féminine
              </span>
              
              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-hsl(var(--blog-text-primary)) mb-6 leading-tight">
                Nutrition et Ménopause : Guide Complet pour Maintenir son Poids
              </h1>
              
              <p className="text-xl text-hsl(var(--blog-text-secondary)) leading-relaxed">
                La ménopause bouleverse votre métabolisme ? Découvrez comment adapter votre alimentation pour maintenir un poids santé et réduire les symptômes naturellement.
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-hsl(var(--blog-text-primary)) prose-p:text-hsl(var(--blog-text-secondary)) prose-li:text-hsl(var(--blog-text-secondary)) prose-strong:text-hsl(var(--blog-text-primary))">
                
                {/* Introduction with visual emphasis */}
                <div className="bg-hsl(var(--muted)) rounded-2xl p-6 mb-8 border-l-4 border-hsl(var(--primary))">
                  <h2 className="text-2xl font-bold mb-4 text-hsl(var(--blog-text-primary))">Une transition naturelle</h2>
                  <p className="text-lg">
                    La ménopause est une étape naturelle de la vie d'une femme, mais elle s'accompagne souvent de défis nutritionnels particuliers. Les changements hormonaux peuvent affecter le métabolisme, la répartition des graisses et l'appétit.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">Les changements métaboliques</h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h4 className="font-semibold text-hsl(var(--blog-text-primary)) mb-2">🔻 Diminution des œstrogènes</h4>
                    <p>Impact direct sur le métabolisme</p>
                  </div>
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h4 className="font-semibold text-hsl(var(--blog-text-primary)) mb-2">🐌 Métabolisme ralenti</h4>
                    <p>Baisse du métabolisme de base</p>
                  </div>
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h4 className="font-semibold text-hsl(var(--blog-text-primary)) mb-2">📍 Répartition des graisses</h4>
                    <p>Changement vers la zone abdominale</p>
                  </div>
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h4 className="font-semibold text-hsl(var(--blog-text-primary)) mb-2">💪 Perte musculaire</h4>
                    <p>Diminution progressive de la masse</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">Stratégies nutritionnelles adaptées</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-hsl(var(--category-feminine)) to-hsl(var(--accent)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-3 text-hsl(var(--blog-text-primary))">🥩 1. Privilégier les protéines</h3>
                    <p>Les protéines sont essentielles pour maintenir la masse musculaire. Visez <strong>1,2 à 1,6g par kg</strong> de poids corporel par jour.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-hsl(var(--accent)) to-hsl(var(--category-feminine)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-3 text-hsl(var(--blog-text-primary))">🌾 2. Choisir les bons glucides</h3>
                    <p>Optez pour des glucides complexes qui stabilisent la glycémie et procurent une satiété durable.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-hsl(var(--category-feminine)) to-hsl(var(--accent)) p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-3 text-hsl(var(--blog-text-primary))">🌸 3. Intégrer les phytoestrogènes</h3>
                    <p>Les aliments riches en phytoestrogènes peuvent aider à compenser la baisse d'œstrogènes naturels.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">Plan alimentaire type</h2>
                
                <div className="bg-hsl(var(--muted)) p-8 rounded-2xl mb-8">
                  <h3 className="text-xl font-semibold mb-6 text-hsl(var(--blog-text-primary))">🗓️ Exemple de journée adaptée</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm font-semibold">Matin</span>
                      <p>Flocons d'avoine avec fruits rouges et graines de lin</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm font-semibold">Midi</span>
                      <p>Saumon grillé avec quinoa et légumes verts</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm font-semibold">16h</span>
                      <p>Yaourt grec avec noix</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm font-semibold">Soir</span>
                      <p>Légumineuses avec légumes de saison</p>
                    </div>
                  </div>
                </div>

                {/* Call-to-action conclusion */}
                <div className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Patience et bienveillance</h2>
                  <p className="text-lg mb-6">
                    Adapter son alimentation pendant la ménopause demande patience et bienveillance envers soi-même. N'hésitez pas à consulter un professionnel pour un accompagnement personnalisé.
                  </p>
                  <a 
                    href="/#services" 
                    className="inline-flex items-center gap-2 bg-hsl(var(--primary-foreground)) text-hsl(var(--primary)) px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                    title="Découvrir nos prestations diététiques pour la ménopause"
                  >
                    💫 Besoin d'un accompagnement personnalisé ?
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

export default NutritionMenopause;
