
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThyroideAlimentation = () => {
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
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Thyroïde et Alimentation"
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
                  <span>13 min de lecture</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>30 mai 2024</span>
                </div>
              </div>
              
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Endocrinologie
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Thyroïde et Alimentation : Ce qu'il Faut Savoir
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Hypothyroïdie ou hyperthyroïdie ? Découvrez comment adapter votre alimentation pour soutenir le bon fonctionnement de votre thyroïde.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Comprendre la thyroïde</h2>
              <p>
                La thyroïde est une petite glande en forme de papillon située dans le cou. Elle produit des hormones essentielles qui régulent le métabolisme, la température corporelle, et de nombreuses autres fonctions vitales.
              </p>

              <h2>Hypothyroïdie : quand la thyroïde ralentit</h2>
              <p>
                L'hypothyroïdie se caractérise par une production insuffisante d'hormones thyroïdiennes. Symptômes courants :
              </p>
              <ul>
                <li>Fatigue chronique</li>
                <li>Prise de poids</li>
                <li>Frilosité</li>
                <li>Constipation</li>
                <li>Cheveux et ongles fragiles</li>
                <li>Dépression</li>
              </ul>

              <h3>Alimentation pour l'hypothyroïdie</h3>
              <p>
                Voici les nutriments essentiels pour soutenir votre thyroïde :
              </p>
              
              <h4>Iode (avec précaution)</h4>
              <ul>
                <li>Algues marines (modération)</li>
                <li>Poissons et fruits de mer</li>
                <li>Sel iodé (quantité raisonnable)</li>
                <li>Produits laitiers</li>
              </ul>

              <h4>Sélénium</h4>
              <ul>
                <li>Noix du Brésil (1-2 par jour)</li>
                <li>Poissons gras</li>
                <li>Œufs</li>
                <li>Graines de tournesol</li>
              </ul>

              <h4>Zinc</h4>
              <ul>
                <li>Huîtres et fruits de mer</li>
                <li>Viandes maigres</li>
                <li>Graines de citrouille</li>
                <li>Légumineuses</li>
              </ul>

              <h4>Tyrosine</h4>
              <ul>
                <li>Avocat</li>
                <li>Bananes</li>
                <li>Amandes</li>
                <li>Fromage</li>
              </ul>

              <h3>Aliments à limiter en cas d'hypothyroïdie</h3>
              <ul>
                <li>Crucifères crus en excès (chou, brocoli, radis)</li>
                <li>Soja et produits dérivés</li>
                <li>Millet</li>
                <li>Aliments ultra-transformés</li>
                <li>Excès de fibres qui peuvent gêner l'absorption des médicaments</li>
              </ul>

              <h2>Hyperthyroïdie : quand la thyroïde s'emballe</h2>
              <p>
                L'hyperthyroïdie résulte d'une surproduction d'hormones thyroïdiennes. Symptômes typiques :
              </p>
              <ul>
                <li>Perte de poids malgré un appétit normal</li>
                <li>Palpitations cardiaques</li>
                <li>Nervosité, irritabilité</li>
                <li>Transpiration excessive</li>
                <li>Insomnie</li>
                <li>Tremblements</li>
              </ul>

              <h3>Alimentation pour l'hyperthyroïdie</h3>
              <p>
                L'objectif est de calmer la thyroïde et de compenser les pertes nutritionnelles :
              </p>
              
              <h4>Aliments riches en calcium</h4>
              <ul>
                <li>Produits laitiers</li>
                <li>Légumes verts à feuilles</li>
                <li>Sardines avec arêtes</li>
                <li>Amandes</li>
              </ul>

              <h4>Aliments riches en magnésium</h4>
              <ul>
                <li>Légumes verts</li>
                <li>Noix et graines</li>
                <li>Chocolat noir</li>
                <li>Céréales complètes</li>
              </ul>

              <h4>Crucifères (peuvent être bénéfiques)</h4>
              <ul>
                <li>Chou, brocoli, chou-fleur</li>
                <li>Radis, navet</li>
                <li>Cresson, roquette</li>
              </ul>

              <h3>Aliments à éviter en cas d'hyperthyroïdie</h3>
              <ul>
                <li>Iode en excès (algues, compléments iodés)</li>
                <li>Caféine (café, thé, chocolat)</li>
                <li>Alcool</li>
                <li>Aliments épicés</li>
                <li>Sucres raffinés</li>
              </ul>

              <h2>Conseils généraux pour la santé thyroïdienne</h2>
              
              <h3>Timing des repas et médicaments</h3>
              <ul>
                <li>Prendre les médicaments à jeun</li>
                <li>Attendre 30-60 minutes avant de manger</li>
                <li>Éviter café et thé près de la prise de médicaments</li>
                <li>Espacer les compléments de calcium et fer</li>
              </ul>

              <h3>Gestion du stress</h3>
              <ul>
                <li>Techniques de relaxation</li>
                <li>Sommeil de qualité</li>
                <li>Activité physique adaptée</li>
                <li>Méditation ou yoga</li>
              </ul>

              <h3>Suivi médical</h3>
              <ul>
                <li>Bilans thyroïdiens réguliers</li>
                <li>Ajustement des traitements</li>
                <li>Surveillance des symptômes</li>
                <li>Communication avec l'équipe médicale</li>
              </ul>

              <h2>Menu type pour hypothyroïdie</h2>
              <ul>
                <li><strong>Petit-déjeuner :</strong> Œufs brouillés + avocat + pain complet</li>
                <li><strong>Déjeuner :</strong> Saumon + quinoa + légumes verts cuits</li>
                <li><strong>Collation :</strong> 1-2 noix du Brésil + fruit</li>
                <li><strong>Dîner :</strong> Blanc de poulet + patate douce + haricots verts</li>
              </ul>

              <h2>Menu type pour hyperthyroïdie</h2>
              <ul>
                <li><strong>Petit-déjeuner :</strong> Smoothie banane-épinards + yaourt riche en calcium</li>
                <li><strong>Déjeuner :</strong> Salade de légumes verts + sardines + crudités</li>
                <li><strong>Collation :</strong> Amandes + fruit</li>
                <li><strong>Dîner :</strong> Brocolis vapeur + riz complet + légumineuses</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                L'alimentation joue un rôle important dans la gestion des troubles thyroïdiens, mais elle ne remplace jamais un traitement médical approprié. Chaque cas est unique et nécessite un suivi personnalisé avec votre équipe médicale et un nutritionniste spécialisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThyroideAlimentation;
