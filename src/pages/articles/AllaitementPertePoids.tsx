
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import allaitementImage from '@/assets/allaitement-optimized.webp';

const AllaitementPertePoids = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Allaitement et Perte de Poids : Ce que Vous Devez Savoir — Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Guide nutritionnel pour l'allaitement et la perte de poids post-grossesse. Conseils de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
        <link rel="canonical" href="https://conseildietetique.lu/articles/allaitement-perte-poids" />
        <meta property="og:title" content="Allaitement et Perte de Poids : Ce que Vous Devez Savoir" />
        <meta property="og:description" content="Guide nutritionnel pour l'allaitement et la perte de poids post-grossesse. Conseils de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
        <meta property="og:url" content="https://conseildietetique.lu/articles/allaitement-perte-poids" />
        <meta property="og:type" content="article" />
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
                src={allaitementImage}
                alt="Allaitement et Perte de Poids - Guide complet pour maman allaitante"
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
                  <span>12 juin 2024</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <span className="bg-hsl(var(--category-maternity)) text-hsl(var(--category-maternity-text)) px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Maternité
              </span>
              
              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-hsl(var(--blog-text-primary)) mb-6 leading-tight">
                Allaitement et Perte de Poids : Ce que Vous Devez Savoir
              </h1>
              
              <p className="text-xl text-hsl(var(--blog-text-secondary)) leading-relaxed">
                Comment perdre du poids sainement pendant l'allaitement ? Découvrez tous mes conseils pour concilier perte de poids et production de lait maternel optimal.
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-hsl(var(--blog-text-primary)) prose-p:text-hsl(var(--blog-text-secondary)) prose-li:text-hsl(var(--blog-text-secondary)) prose-strong:text-hsl(var(--blog-text-primary))">
                
                {/* Introduction with visual emphasis */}
                <div className="bg-hsl(var(--muted)) rounded-2xl p-6 mb-8 border-l-4 border-hsl(var(--primary))">
                  <h2 className="text-2xl font-bold mb-4 text-hsl(var(--blog-text-primary))">L'allaitement et le métabolisme</h2>
                  <p className="text-lg">
                    L'allaitement demande beaucoup d'énergie à votre corps. En moyenne, une mère qui allaite brûle environ <strong>500 calories supplémentaires</strong> par jour. Cependant, cela ne signifie pas qu'il faut drastiquement réduire son apport calorique.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">Principes pour une perte de poids saine</h2>
                <p className="text-lg mb-6">
                  Voici les règles d'or pour perdre du poids tout en maintenant une lactation optimale :
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h4 className="font-semibold text-hsl(var(--blog-text-primary)) mb-2">🍽️ Calories minimales</h4>
                    <p>Ne pas descendre sous 1800 calories par jour</p>
                  </div>
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h4 className="font-semibold text-hsl(var(--blog-text-primary)) mb-2">⚖️ Perte progressive</h4>
                    <p>Viser 0,5 à 1 kg par semaine maximum</p>
                  </div>
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h4 className="font-semibold text-hsl(var(--blog-text-primary)) mb-2">💧 Hydratation</h4>
                    <p>Maintenir une hydratation optimale</p>
                  </div>
                  <div className="bg-hsl(var(--accent)) p-6 rounded-2xl">
                    <h4 className="font-semibold text-hsl(var(--blog-text-primary)) mb-2">🥗 Nutrition</h4>
                    <p>Privilégier les aliments nutritifs</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">Aliments à privilégier</h2>
                <p className="text-lg mb-6">
                  Certains aliments sont particulièrement bénéfiques pendant l'allaitement :
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-hsl(var(--accent)) rounded-xl">
                    <div className="text-2xl">🌾</div>
                    <div>
                      <h4 className="font-semibold text-hsl(var(--blog-text-primary))">Avoine</h4>
                      <p>Riche en fibres et peut stimuler la production de lait</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-hsl(var(--accent)) rounded-xl">
                    <div className="text-2xl">🐟</div>
                    <div>
                      <h4 className="font-semibold text-hsl(var(--blog-text-primary))">Saumon</h4>
                      <p>Excellente source d'oméga-3 et de protéines de qualité</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-hsl(var(--accent)) rounded-xl">
                    <div className="text-2xl">🥬</div>
                    <div>
                      <h4 className="font-semibold text-hsl(var(--blog-text-primary))">Épinards</h4>
                      <p>Riches en fer et folates essentiels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-hsl(var(--accent)) rounded-xl">
                    <div className="text-2xl">🌰</div>
                    <div>
                      <h4 className="font-semibold text-hsl(var(--blog-text-primary))">Graines de lin</h4>
                      <p>Source d'oméga-3 végétaux et de fibres</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">Conseils pratiques au quotidien</h2>
                
                <div className="bg-gradient-to-r from-hsl(var(--category-maternity)) to-hsl(var(--accent)) p-8 rounded-2xl mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-hsl(var(--blog-text-primary))">🎯 Astuces pour réussir</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-hsl(var(--primary)) rounded-full"></span>
                      Préparez des collations saines à l'avance
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-hsl(var(--primary)) rounded-full"></span>
                      Gardez une bouteille d'eau à portée de main
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-hsl(var(--primary)) rounded-full"></span>
                      Demandez de l'aide pour la préparation des repas
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-hsl(var(--primary)) rounded-full"></span>
                      Écoutez votre corps et reposez-vous
                    </li>
                  </ul>
                </div>

                {/* Call-to-action conclusion */}
                <div className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Votre bien-être avant tout</h2>
                  <p className="text-lg mb-6">
                    La période d'allaitement n'est pas le moment idéal pour des régimes restrictifs. Privilégiez une approche douce et bienveillante qui respecte vos besoins nutritionnels et ceux de votre bébé.
                  </p>
                  <a 
                    href="/prestations" 
                    className="inline-flex items-center gap-2 bg-hsl(var(--primary-foreground)) text-hsl(var(--primary)) px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                    title="Découvrir nos prestations nutrition pour l'allaitement"
                  >
                    ✨ Un accompagnement personnalisé vous intéresse ?
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

export default AllaitementPertePoids;
