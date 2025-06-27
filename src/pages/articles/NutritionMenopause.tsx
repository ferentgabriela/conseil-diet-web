
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const NutritionMenopause = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            to="/#blog" 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          {/* Article header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Nutrition et Ménopause"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Gabriela Ferent</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 min de lecture</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>15 juin 2024</span>
                </div>
              </div>
              
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Nutrition Féminine
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Nutrition et Ménopause : Guide Complet pour Maintenir son Poids
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                La ménopause bouleverse votre métabolisme ? Découvrez comment adapter votre alimentation pour maintenir un poids santé et réduire les symptômes.
              </p>
            </div>
          </div>

          {/* Article content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                La ménopause est une étape naturelle de la vie d'une femme, mais elle s'accompagne souvent de défis nutritionnels particuliers. Les changements hormonaux peuvent affecter le métabolisme, la répartition des graisses et l'appétit, rendant la gestion du poids plus complexe.
              </p>

              <h2>Les changements métaboliques pendant la ménopause</h2>
              <p>
                Pendant la ménopause, plusieurs facteurs influencent votre métabolisme :
              </p>
              <ul>
                <li>Diminution des œstrogènes</li>
                <li>Ralentissement du métabolisme de base</li>
                <li>Changements dans la répartition des graisses</li>
                <li>Perte de masse musculaire</li>
              </ul>

              <h2>Stratégies nutritionnelles adaptées</h2>
              <p>
                Pour maintenir un poids santé pendant la ménopause, voici mes recommandations principales :
              </p>

              <h3>1. Privilégier les protéines</h3>
              <p>
                Les protéines sont essentielles pour maintenir la masse musculaire. Visez 1,2 à 1,6g par kg de poids corporel par jour.
              </p>

              <h3>2. Choisir les bons glucides</h3>
              <p>
                Optez pour des glucides complexes qui stabilisent la glycémie et procurent une satiété durable.
              </p>

              <h3>3. Intégrer les phytoestrogènes</h3>
              <p>
                Les aliments riches en phytoestrogènes peuvent aider à compenser la baisse d'œstrogènes naturels.
              </p>

              <h2>Plan alimentaire type</h2>
              <p>
                Voici un exemple de journée type adaptée à la ménopause :
              </p>
              <ul>
                <li><strong>Petit-déjeuner :</strong> Flocons d'avoine avec fruits rouges et graines de lin</li>
                <li><strong>Déjeuner :</strong> Saumon grillé avec quinoa et légumes verts</li>
                <li><strong>Collation :</strong> Yaourt grec avec noix</li>
                <li><strong>Dîner :</strong> Légumineuses avec légumes de saison</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Adapter son alimentation pendant la ménopause demande patience et bienveillance envers soi-même. N'hésitez pas à consulter un professionnel pour un accompagnement personnalisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionMenopause;
