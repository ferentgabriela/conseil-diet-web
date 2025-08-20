
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import diabeteImage from '@/assets/diabete-aliments-optimized.webp';

const DiabeteAliments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Diabète Type 2 : 10 Aliments à Privilégier au Quotidien — Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Guide alimentaire pour le diabète type 2. Découvrez les aliments recommandés par Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
      </Helmet>
      <Navigation />
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link 
            to="/#blog" 
            className="inline-flex items-center gap-2 text-hsl(var(--blog-text-secondary)) hover:text-hsl(var(--primary)) mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Retour au blog
          </Link>

          {/* Hero Section */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden mb-12">
            <div className="relative h-80 md:h-96">
              <img 
                src={diabeteImage}
                alt="Diabète Type 2 - Aliments recommandés pour contrôler la glycémie"
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
                  <span>12 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>10 juin 2024</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <span className="bg-hsl(var(--category-diabetes)) text-hsl(var(--category-diabetes-text)) px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                Diabète
              </span>
              
              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl font-bold text-hsl(var(--blog-text-primary)) mb-6 leading-tight">
                Diabète Type 2 : 10 Aliments à Privilégier au Quotidien
              </h1>
              
              <p className="text-xl text-hsl(var(--blog-text-secondary)) leading-relaxed">
                Contrôlez votre glycémie naturellement avec ces aliments recommandés par les nutritionnistes. Menu type et conseils pratiques inclus.
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-hsl(var(--blog-content-bg)) rounded-3xl shadow-[var(--blog-shadow-medium)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-hsl(var(--blog-text-primary)) prose-p:text-hsl(var(--blog-text-secondary)) prose-li:text-hsl(var(--blog-text-secondary)) prose-strong:text-hsl(var(--blog-text-primary))">
                
                <h2 className="text-3xl font-bold mb-8 text-hsl(var(--blog-text-primary))">Les 10 aliments indispensables</h2>
                <p className="text-lg mb-8">
                  Pour mieux gérer votre diabète de type 2, voici les aliments à intégrer régulièrement dans votre alimentation :
                </p>

                <div className="grid gap-6 mb-12">
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--category-diabetes)) rounded-2xl border-l-4 border-hsl(var(--category-diabetes-text))">
                    <div className="text-3xl">🥬</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">1. Légumes verts à feuilles</h3>
                      <p>Épinards, brocolis, chou kale - riches en fibres et faibles en glucides, ils ont un impact minimal sur la glycémie.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--accent)) rounded-2xl border-l-4 border-hsl(var(--primary))">
                    <div className="text-3xl">🐟</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">2. Poissons gras</h3>
                      <p>Saumon, sardines, maquereau - excellentes sources d'oméga-3 qui protègent le système cardiovasculaire.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--category-diabetes)) rounded-2xl border-l-4 border-hsl(var(--category-diabetes-text))">
                    <div className="text-3xl">🫘</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">3. Légumineuses</h3>
                      <p>Haricots, lentilles, pois chiches - riches en protéines et fibres, ils aident à stabiliser la glycémie.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--accent)) rounded-2xl border-l-4 border-hsl(var(--primary))">
                    <div className="text-3xl">🌾</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">4. Avoine</h3>
                      <p>Riche en bêta-glucanes, l'avoine aide à ralentir l'absorption des glucides.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--category-diabetes)) rounded-2xl border-l-4 border-hsl(var(--category-diabetes-text))">
                    <div className="text-3xl">🥜</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">5. Noix et graines</h3>
                      <p>Amandes, noix, graines de chia - sources de bonnes graisses et de protéines.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--accent)) rounded-2xl border-l-4 border-hsl(var(--primary))">
                    <div className="text-3xl">🥑</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">6. Avocat</h3>
                      <p>Riche en graisses monoinsaturées, il contribue à améliorer la sensibilité à l'insuline.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--category-diabetes)) rounded-2xl border-l-4 border-hsl(var(--category-diabetes-text))">
                    <div className="text-3xl">🫐</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">7. Baies</h3>
                      <p>Myrtilles, framboises, mûres - riches en antioxydants et à index glycémique bas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--accent)) rounded-2xl border-l-4 border-hsl(var(--primary))">
                    <div className="text-3xl">🥛</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">8. Yaourt grec nature</h3>
                      <p>Riche en protéines et probiotiques, sans sucres ajoutés.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--category-diabetes)) rounded-2xl border-l-4 border-hsl(var(--category-diabetes-text))">
                    <div className="text-3xl">🫒</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">9. Huile d'olive extra vierge</h3>
                      <p>Source de graisses monoinsaturées et d'antioxydants.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-hsl(var(--accent)) rounded-2xl border-l-4 border-hsl(var(--primary))">
                    <div className="text-3xl">🥚</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-hsl(var(--blog-text-primary))">10. Œufs</h3>
                      <p>Protéines complètes, ils n'affectent pas la glycémie et procurent une bonne satiété.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-hsl(var(--blog-text-primary))">Menu type pour une journée</h2>
                
                <div className="bg-hsl(var(--muted)) p-8 rounded-2xl mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm font-semibold">Matin</span>
                      <p>Omelette aux épinards + avocat + baies</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm font-semibold">Midi</span>
                      <p>Saumon grillé + quinoa + légumes verts</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm font-semibold">16h</span>
                      <p>Yaourt grec + noix</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) px-3 py-1 rounded-full text-sm font-semibold">Soir</span>
                      <p>Lentilles + légumes rôtis à l'huile d'olive</p>
                    </div>
                  </div>
                </div>

                {/* Conseils pratiques */}
                <div className="bg-hsl(var(--primary)) text-hsl(var(--primary-foreground)) p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">Conseils pratiques pour optimiser votre gestion</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-hsl(var(--primary-foreground)) rounded-full"></span>
                      Surveillez régulièrement votre glycémie
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-hsl(var(--primary-foreground)) rounded-full"></span>
                      Mangez à heures régulières
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-hsl(var(--primary-foreground)) rounded-full"></span>
                      Associez toujours fibres et protéines
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-hsl(var(--primary-foreground)) rounded-full"></span>
                      Restez actif après les repas
                    </div>
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

export default DiabeteAliments;
