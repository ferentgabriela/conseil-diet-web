
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import StickyBookingBar from '@/components/StickyBookingBar';

const HypertensionRegimeDash = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <StickyBookingBar />
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
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Hypertension et Régime DASH"
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
                  <span>10 min de lecture</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>1 juin 2024</span>
                </div>
              </div>
              
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Cardiovasculaire
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Hypertension : Le Régime DASH Expliqué Simplement
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Réduisez votre tension artérielle naturellement avec le régime DASH. Guide complet avec menus types et conseils pratiques pour débuter.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Qu'est-ce que le régime DASH ?</h2>
              <p>
                DASH signifie "Dietary Approaches to Stop Hypertension" (Approches Diététiques pour Stopper l'Hypertension). C'est un plan alimentaire scientifiquement prouvé pour réduire la tension artérielle.
              </p>

              <h2>Principes fondamentaux du régime DASH</h2>
              <p>
                Le régime DASH se base sur plusieurs principes clés :
              </p>
              <ul>
                <li>Réduction du sodium (moins de 2300mg/jour)</li>
                <li>Augmentation du potassium, magnésium et calcium</li>
                <li>Privilégier les aliments entiers et non transformés</li>
                <li>Limiter les graisses saturées</li>
                <li>Contrôler les portions</li>
              </ul>

              <h2>Aliments à privilégier</h2>
              <p>
                Voici les aliments stars du régime DASH :
              </p>
              
              <h3>Légumes et fruits (8-10 portions/jour)</h3>
              <ul>
                <li>Légumes verts à feuilles</li>
                <li>Tomates, poivrons, brocolis</li>
                <li>Bananes, oranges, baies</li>
                <li>Melons, raisins, pommes</li>
              </ul>

              <h3>Céréales complètes (6-8 portions/jour)</h3>
              <ul>
                <li>Avoine, quinoa, riz brun</li>
                <li>Pain complet</li>
                <li>Pâtes complètes</li>
                <li>Orge, sarrasin</li>
              </ul>

              <h3>Protéines maigres (2-3 portions/jour)</h3>
              <ul>
                <li>Poissons et fruits de mer</li>
                <li>Volaille sans peau</li>
                <li>Légumineuses</li>
                <li>Œufs (avec modération)</li>
              </ul>

              <h3>Produits laitiers allégés (2-3 portions/jour)</h3>
              <ul>
                <li>Lait écrémé ou demi-écrémé</li>
                <li>Yaourt nature</li>
                <li>Fromage allégé</li>
              </ul>

              <h3>Noix et graines (4-5 portions/semaine)</h3>
              <ul>
                <li>Amandes, noix, pistaches</li>
                <li>Graines de tournesol</li>
                <li>Graines de lin</li>
                <li>Beurres de noix naturels</li>
              </ul>

              <h2>Aliments à limiter</h2>
              <ul>
                <li>Sel de table et aliments salés</li>
                <li>Viandes rouges grasses</li>
                <li>Charcuteries</li>
                <li>Produits laitiers entiers</li>
                <li>Aliments transformés</li>
                <li>Boissons sucrées</li>
                <li>Alcool (maximum 2 verres/jour pour les hommes, 1 pour les femmes)</li>
              </ul>

              <h2>Menu type sur 3 jours</h2>
              
              <h3>Jour 1</h3>
              <ul>
                <li><strong>Petit-déjeuner :</strong> Porridge d'avoine aux baies + lait écrémé</li>
                <li><strong>Déjeuner :</strong> Salade de quinoa aux légumes + saumon grillé</li>
                <li><strong>Collation :</strong> Yaourt nature + amandes</li>
                <li><strong>Dîner :</strong> Blanc de poulet + brocolis vapeur + riz brun</li>
              </ul>

              <h3>Jour 2</h3>
              <ul>
                <li><strong>Petit-déjeuner :</strong> Smoothie banane-épinards + pain complet</li>
                <li><strong>Déjeuner :</strong> Soupe de lentilles + salade verte</li>
                <li><strong>Collation :</strong> Pomme + noix</li>
                <li><strong>Dîner :</strong> Poisson blanc + légumes rôtis + patate douce</li>
              </ul>

              <h3>Jour 3</h3>
              <ul>
                <li><strong>Petit-déjeuner :</strong> Œufs brouillés + légumes + toast complet</li>
                <li><strong>Déjeuner :</strong> Salade méditerranéenne + pois chiches</li>
                <li><strong>Collation :</strong> Yaourt aux fruits</li>
                <li><strong>Dîner :</strong> Dinde aux légumes + quinoa</li>
              </ul>

              <h2>Conseils pour réussir</h2>
              <ul>
                <li>Commencez graduellement</li>
                <li>Lisez les étiquettes nutritionnelles</li>
                <li>Cuisinez à la maison</li>
                <li>Utilisez des épices et herbes pour assaisonner</li>
                <li>Buvez beaucoup d'eau</li>
                <li>Restez actif physiquement</li>
              </ul>

              <h2>Résultats attendus</h2>
              <p>
                Avec le régime DASH, vous pouvez espérer :
              </p>
              <ul>
                <li>Réduction de 8-14 mmHg de la tension systolique</li>
                <li>Amélioration en 2-4 semaines</li>
                <li>Benefits cardiovasculaires durables</li>
                <li>Perte de poids si nécessaire</li>
                <li>Amélioration de l'énergie générale</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Le régime DASH n'est pas seulement efficace contre l'hypertension, c'est un mode de vie alimentaire sain pour toute la famille. Sa flexibilité et ses bases scientifiques solides en font un choix excellent pour une santé cardiovasculaire optimale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HypertensionRegimeDash;
