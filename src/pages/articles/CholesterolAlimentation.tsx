
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CholesterolAlimentation = () => {
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
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Cholestérol et Alimentation"
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
                  <span>7 min de lecture</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>8 juin 2024</span>
                </div>
              </div>
              
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Prévention
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Cholestérol : Les Aliments à Éviter et Ceux à Privilégier
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Réduisez votre cholestérol naturellement avec ces conseils nutritionnels éprouvés. Plan d'action et recettes incluses.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Comprendre le cholestérol</h2>
              <p>
                Le cholestérol n'est pas toujours l'ennemi. Votre corps en a besoin pour fonctionner, mais c'est l'équilibre entre "bon" (HDL) et "mauvais" (LDL) cholestérol qui compte.
              </p>

              <h2>Aliments à limiter</h2>
              <p>
                Ces aliments peuvent augmenter votre taux de cholestérol LDL :
              </p>
              <ul>
                <li>Viandes grasses et charcuteries</li>
                <li>Produits laitiers entiers</li>
                <li>Fritures et aliments transformés</li>
                <li>Pâtisseries et viennoiseries</li>
                <li>Huiles de palme et de coco</li>
              </ul>

              <h2>Aliments à privilégier</h2>
              <p>
                Ces aliments aident à réduire le cholestérol naturellement :
              </p>

              <h3>Fibres solubles</h3>
              <ul>
                <li>Avoine et orge</li>
                <li>Légumineuses (haricots, lentilles)</li>
                <li>Pommes et agrumes</li>
                <li>Légumes verts</li>
              </ul>

              <h3>Acides gras oméga-3</h3>
              <ul>
                <li>Poissons gras (saumon, sardines)</li>
                <li>Graines de lin et de chia</li>
                <li>Noix</li>
              </ul>

              <h3>Stérols végétaux</h3>
              <ul>
                <li>Huiles végétales (olive, colza)</li>
                <li>Noix et graines</li>
                <li>Légumes et fruits</li>
              </ul>

              <h2>Plan d'action sur 7 jours</h2>
              <p>
                Voici un exemple de menu hebdomadaire anti-cholestérol :
              </p>
              
              <h3>Jour 1</h3>
              <ul>
                <li><strong>Matin :</strong> Porridge d'avoine aux fruits rouges</li>
                <li><strong>Midi :</strong> Salade de lentilles au saumon</li>
                <li><strong>Soir :</strong> Légumes vapeur et blanc de poulet</li>
              </ul>

              <h3>Jour 2</h3>
              <ul>
                <li><strong>Matin :</strong> Smoothie avocat-épinards-pomme</li>
                <li><strong>Midi :</strong> Soupe de haricots blancs</li>
                <li><strong>Soir :</strong> Poisson blanc aux légumes</li>
              </ul>

              <h2>Conseils supplémentaires</h2>
              <ul>
                <li>Pratiquez une activité physique régulière</li>
                <li>Maintenez un poids santé</li>
                <li>Limitez le stress</li>
                <li>Évitez le tabac</li>
                <li>Surveillez votre tension artérielle</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Réduire son cholestérol par l'alimentation demande de la patience et de la constance. Ces changements, adoptés progressivement, vous permettront d'améliorer durablement votre santé cardiovasculaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CholesterolAlimentation;
