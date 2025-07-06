
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import StickyBookingBar from '@/components/StickyBookingBar';

const PertePoidsApres40 = () => {
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
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Perte de Poids Après 40 ans"
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
                  <span>11 min de lecture</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>3 juin 2024</span>
                </div>
              </div>
              
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Minceur
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Perte de Poids Après 40 ans : Stratégies Efficaces
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Votre métabolisme ralentit avec l'âge ? Adaptez votre approche nutritionnelle avec ces stratégies spécialement conçues pour les plus de 40 ans.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Pourquoi perdre du poids après 40 ans est différent ?</h2>
              <p>
                Après 40 ans, plusieurs facteurs rendent la perte de poids plus complexe :
              </p>
              <ul>
                <li>Ralentissement du métabolisme de base</li>
                <li>Diminution de la masse musculaire</li>
                <li>Changements hormonaux</li>
                <li>Stress chronique et manque de sommeil</li>
                <li>Habitudes alimentaires bien ancrées</li>
              </ul>

              <h2>Stratégie 1 : Préserver la masse musculaire</h2>
              <p>
                La masse musculaire diminue naturellement avec l'âge, mais vous pouvez la préserver :
              </p>
              
              <h3>Apport protéique optimal</h3>
              <ul>
                <li>Viser 1,2 à 1,6g de protéines par kg de poids</li>
                <li>Répartir les protéines sur tous les repas</li>
                <li>Privilégier les protéines complètes</li>
                <li>Inclure des collations protéinées</li>
              </ul>

              <h3>Exercices de résistance</h3>
              <ul>
                <li>Musculation 2-3 fois par semaine</li>
                <li>Exercices au poids du corps</li>
                <li>Yoga ou Pilates</li>
                <li>Marche active quotidienne</li>
              </ul>

              <h2>Stratégie 2 : Optimiser le métabolisme</h2>
              <p>
                Plusieurs techniques peuvent aider à relancer votre métabolisme :
              </p>
              
              <h3>Jeûne intermittent adapté</h3>
              <ul>
                <li>Commencer progressivement</li>
                <li>Méthode 16:8 ou 14:10</li>
                <li>Maintenir l'hydratation</li>
                <li>Écouter son corps</li>
              </ul>

              <h3>Aliments thermogéniques</h3>
              <ul>
                <li>Thé vert et café</li>
                <li>Épices (gingembre, cannelle)</li>
                <li>Protéines maigres</li>
                <li>Légumes verts</li>
              </ul>

              <h2>Stratégie 3 : Gérer les hormones</h2>
              <p>
                L'équilibre hormonal est crucial après 40 ans :
              </p>
              
              <h3>Régulation de l'insuline</h3>
              <ul>
                <li>Limiter les sucres rapides</li>
                <li>Privilégier les glucides complexes</li>
                <li>Associer fibres et protéines</li>
                <li>Manger à heures régulières</li>
              </ul>

              <h3>Gestion du stress</h3>
              <ul>
                <li>Techniques de relaxation</li>
                <li>Sommeil de qualité (7-8h)</li>
                <li>Activité physique régulière</li>
                <li>Temps pour soi</li>
              </ul>

              <h2>Plan nutritionnel type</h2>
              <p>
                Voici un exemple de journée alimentaire adaptée aux plus de 40 ans :
              </p>
              
              <h3>Petit-déjeuner (7h30)</h3>
              <ul>
                <li>Œufs brouillés aux épinards</li>
                <li>Avocat sur pain complet</li>
                <li>Thé vert</li>
              </ul>

              <h3>Déjeuner (12h30)</h3>
              <ul>
                <li>Salade composée avec protéines</li>
                <li>Quinoa ou riz brun</li>
                <li>Légumes de saison</li>
                <li>Huile d'olive</li>
              </ul>

              <h3>Collation (16h)</h3>
              <ul>
                <li>Yaourt grec nature</li>
                <li>Poignée de noix</li>
                <li>Fruit de saison</li>
              </ul>

              <h3>Dîner (19h30)</h3>
              <ul>
                <li>Poisson ou légumineuses</li>
                <li>Légumes vapeur</li>
                <li>Salade verte</li>
              </ul>

              <h2>Erreurs à éviter</h2>
              <ul>
                <li>Régimes trop restrictifs</li>
                <li>Négliger le sommeil</li>
                <li>Trop de cardio, pas assez de musculation</li>
                <li>Comparer ses résultats à ceux d'avant</li>
                <li>Abandonner trop vite</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Perdre du poids après 40 ans demande une approche différente, plus patiente et plus globale. L'important est de créer un mode de vie durable qui respecte les besoins de votre corps à cette étape de la vie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PertePoidsApres40;
