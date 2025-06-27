
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiabeteAliments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/#blog" 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Diabète Type 2"
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
                  <span>12 min de lecture</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>10 juin 2024</span>
                </div>
              </div>
              
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Diabète
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Diabète Type 2 : 10 Aliments à Privilégier au Quotidien
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Contrôlez votre glycémie naturellement avec ces aliments recommandés par les nutritionnistes. Menu type et conseils pratiques inclus.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Les 10 aliments indispensables</h2>
              <p>
                Pour mieux gérer votre diabète de type 2, voici les aliments à intégrer régulièrement dans votre alimentation :
              </p>

              <h3>1. Les légumes verts à feuilles</h3>
              <p>
                Épinards, brocolis, chou kale - riches en fibres et faibles en glucides, ils ont un impact minimal sur la glycémie.
              </p>

              <h3>2. Les poissons gras</h3>
              <p>
                Saumon, sardines, maquereau - excellentes sources d'oméga-3 qui protègent le système cardiovasculaire.
              </p>

              <h3>3. Les légumineuses</h3>
              <p>
                Haricots, lentilles, pois chiches - riches en protéines et fibres, ils aident à stabiliser la glycémie.
              </p>

              <h3>4. L'avoine</h3>
              <p>
                Riche en bêta-glucanes, l'avoine aide à ralentir l'absorption des glucides.
              </p>

              <h3>5. Les noix et graines</h3>
              <p>
                Amandes, noix, graines de chia - sources de bonnes graisses et de protéines.
              </p>

              <h3>6. L'avocat</h3>
              <p>
                Riche en graisses monoinsaturées, il contribue à améliorer la sensibilité à l'insuline.
              </p>

              <h3>7. Les baies</h3>
              <p>
                Myrtilles, framboises, mûres - riches en antioxydants et à index glycémique bas.
              </p>

              <h3>8. Le yaourt grec nature</h3>
              <p>
                Riche en protéines et probiotiques, sans sucres ajoutés.
              </p>

              <h3>9. L'huile d'olive extra vierge</h3>
              <p>
                Source de graisses monoinsaturées et d'antioxydants.
              </p>

              <h3>10. Les œufs</h3>
              <p>
                Protéines complètes, ils n'affectent pas la glycémie et procurent une bonne satiété.
              </p>

              <h2>Menu type pour une journée</h2>
              <ul>
                <li><strong>Petit-déjeuner :</strong> Omelette aux épinards + avocat + baies</li>
                <li><strong>Déjeuner :</strong> Saumon grillé + quinoa + légumes verts</li>
                <li><strong>Collation :</strong> Yaourt grec + noix</li>
                <li><strong>Dîner :</strong> Lentilles + légumes rôtis à l'huile d'olive</li>
              </ul>

              <h2>Conseils pratiques</h2>
              <p>
                Pour optimiser votre gestion du diabète :
              </p>
              <ul>
                <li>Surveillez régulièrement votre glycémie</li>
                <li>Mangez à heures régulières</li>
                <li>Associez toujours fibres et protéines</li>
                <li>Restez actif après les repas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabeteAliments;
