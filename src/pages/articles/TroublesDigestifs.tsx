
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import StickyBookingBar from '@/components/StickyBookingBar';

const TroublesDigestifs = () => {
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
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Troubles Digestifs"
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
                  <span>9 min de lecture</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>5 juin 2024</span>
                </div>
              </div>
              
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Digestion
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Troubles Digestifs : Solutions Naturelles et Alimentation
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Ballonnements, reflux, constipation... Découvrez comment soulager vos troubles digestifs grâce à une alimentation adaptée et des remèdes naturels.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Les troubles digestifs les plus fréquents</h2>
              <p>
                Les troubles digestifs touchent une grande partie de la population. Voici les plus courants :
              </p>
              <ul>
                <li>Ballonnements et gaz</li>
                <li>Reflux gastro-œsophagien</li>
                <li>Constipation</li>
                <li>Diarrhées</li>
                <li>Syndrome de l'intestin irritable</li>
              </ul>

              <h2>Ballonnements : causes et solutions</h2>
              <p>
                Les ballonnements peuvent avoir plusieurs origines :
              </p>
              
              <h3>Aliments à éviter</h3>
              <ul>
                <li>Légumineuses non trempées</li>
                <li>Crucifères (chou, brocoli) si sensibilité</li>
                <li>Édulcorants artificiels</li>
                <li>Boissons gazeuses</li>
              </ul>

              <h3>Solutions naturelles</h3>
              <ul>
                <li>Infusions de fenouil ou menthe</li>
                <li>Graines de carvi</li>
                <li>Massage abdominal</li>
                <li>Marche après les repas</li>
              </ul>

              <h2>Reflux gastro-œsophagien</h2>
              <p>
                Pour soulager les reflux :
              </p>
              
              <h3>Conseils alimentaires</h3>
              <ul>
                <li>Éviter les repas copieux</li>
                <li>Limiter les aliments acides (tomates, agrumes)</li>
                <li>Réduire le café et l'alcool</li>
                <li>Manger lentement</li>
              </ul>

              <h3>Remèdes naturels</h3>
              <ul>
                <li>Jus d'aloe vera</li>
                <li>Camomille</li>
                <li>Bicarbonate de soude (occasionnellement)</li>
                <li>Surélever la tête du lit</li>
              </ul>

              <h2>Constipation : solutions douces</h2>
              <p>
                La constipation peut être soulagée naturellement :
              </p>
              
              <h3>Aliments riches en fibres</h3>
              <ul>
                <li>Pruneaux et figues</li>
                <li>Légumes verts à feuilles</li>
                <li>Graines de lin moulues</li>
                <li>Céréales complètes</li>
              </ul>

              <h3>Hydratation et mouvement</h3>
              <ul>
                <li>Boire 1,5 à 2L d'eau par jour</li>
                <li>Eau tiède citronnée le matin</li>
                <li>Activité physique régulière</li>
                <li>Massage abdominal circulaire</li>
              </ul>

              <h2>Programme de rééquilibrage digestif</h2>
              <p>
                Voici un programme sur 14 jours pour améliorer votre digestion :
              </p>
              
              <h3>Semaine 1 : Détox douce</h3>
              <ul>
                <li>Éliminer les aliments transformés</li>
                <li>Privilégier les légumes cuits</li>
                <li>Boire des tisanes digestives</li>
                <li>Manger dans le calme</li>
              </ul>

              <h3>Semaine 2 : Réintroduction progressive</h3>
              <ul>
                <li>Réintroduire les crudités</li>
                <li>Tester les légumineuses</li>
                <li>Surveiller les réactions</li>
                <li>Tenir un journal alimentaire</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Chaque système digestif est unique. Il est important d'identifier vos propres déclencheurs et d'adapter votre alimentation en conséquence. N'hésitez pas à consulter un professionnel si les troubles persistent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroublesDigestifs;
