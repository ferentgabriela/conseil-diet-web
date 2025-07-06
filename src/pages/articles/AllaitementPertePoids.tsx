
import React from 'react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const AllaitementPertePoids = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
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
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Allaitement et Perte de Poids"
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
                  <span>12 juin 2024</span>
                </div>
              </div>
              
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Maternité
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Allaitement et Perte de Poids : Ce que Vous Devez Savoir
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Comment perdre du poids sainement pendant l'allaitement ? Tous mes conseils pour concilier perte de poids et production de lait maternel.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>L'allaitement et le métabolisme</h2>
              <p>
                L'allaitement demande beaucoup d'énergie à votre corps. En moyenne, une mère qui allaite brûle environ 500 calories supplémentaires par jour. Cependant, cela ne signifie pas qu'il faut drastiquement réduire son apport calorique.
              </p>

              <h2>Principes pour une perte de poids saine</h2>
              <p>
                Voici les règles d'or pour perdre du poids tout en maintenant une lactation optimale :
              </p>
              <ul>
                <li>Ne pas descendre sous 1800 calories par jour</li>
                <li>Viser une perte de 0,5 à 1 kg par semaine maximum</li>
                <li>Maintenir une hydratation optimale</li>
                <li>Privilégier les aliments nutritifs</li>
              </ul>

              <h2>Aliments à privilégier</h2>
              <p>
                Certains aliments sont particulièrement bénéfiques pendant l'allaitement :
              </p>
              <ul>
                <li><strong>Avoine :</strong> Riche en fibres et peut stimuler la production de lait</li>
                <li><strong>Saumon :</strong> Excellent source d'oméga-3 et de protéines</li>
                <li><strong>Épinards :</strong> Riches en fer et folates</li>
                <li><strong>Graines de lin :</strong> Source d'oméga-3 végétaux</li>
              </ul>

              <h2>Conseils pratiques</h2>
              <p>
                Pour faciliter votre quotidien, voici quelques astuces :
              </p>
              <ul>
                <li>Préparez des collations saines à l'avance</li>
                <li>Gardez une bouteille d'eau à portée de main</li>
                <li>Demandez de l'aide pour la préparation des repas</li>
                <li>Écoutez votre corps et reposez-vous</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                La période d'allaitement n'est pas le moment idéal pour des régimes restrictifs. Privilégiez une approche douce et bienveillante qui respecte vos besoins nutritionnels et ceux de votre bébé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllaitementPertePoids;
