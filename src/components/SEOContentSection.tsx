import React from 'react';
import { Stethoscope, Calendar, MapPin } from 'lucide-react';

const SEOContentSection = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Remove duplicate H1 - already in hero */}
          <header className="text-center mb-8">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gabriela Ferent, diététicienne nutritionniste diplômée et agréée au Luxembourg, vous accompagne dans votre parcours de santé avec des consultations personnalisées et bienveillantes.
            </p>
          </header>

          {/* Consultations sur prescription médicale */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
              <Stethoscope className="h-7 w-7 text-green-600" />
              Consultations sur prescription médicale
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              En tant que diététicienne nutritionniste diplômée et agréée au Luxembourg, je vous accompagne dans votre parcours de santé grâce à une approche personnalisée et bienveillante. Mes consultations sur prescription médicale sont prises en charge par la CNS pour diverses pathologies nécessitant un suivi nutritionnel professionnel.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Mon approche thérapeutique se base sur l'écoute, l'éducation nutritionnelle et l'accompagnement progressif vers de nouvelles habitudes alimentaires durables. Je reçois dans 3 cabinets stratégiquement situés au Luxembourg pour faciliter l'accès aux soins : Luxembourg-Ville, Ettelbruck et Insenborn. 
              <a href="/prestations" className="text-green-600 hover:text-green-700 underline font-medium" title="Découvrir toutes nos prestations diététiques en détail">
                Découvrez le détail de toutes nos prestations
              </a>.
            </p>
          </section>

          {/* Spécialisations */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Spécialisations: Perte de poids, diabète, obésité
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Perte de poids</strong> - Accompagnement personnalisé pour une perte de poids durable et équilibrée</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Diabète</strong> - Gestion nutritionnelle du diabète type 1, type 2 et gestationnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Cholestérol / Dyslipidémies</strong> - Réduction du cholestérol par l'alimentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Hypertension</strong> - Régime DASH et approches nutritionnelles pour la tension artérielle</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Ménopause</strong> - Nutrition adaptée aux changements hormonaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Thyroïde</strong> - Alimentation pour optimiser le fonctionnement thyroïdien</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Troubles digestifs</strong> - Solutions nutritionnelles pour le confort intestinal</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><strong>Grossesse & Allaitement</strong> - Suivi nutritionnel périnatal</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Prendre rendez-vous */}
          <section className="bg-green-50 rounded-xl p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Calendar className="h-7 w-7 text-green-600" />
              Prendre rendez-vous
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Réservez votre consultation en ligne via Doctena dans l'un de mes 3 cabinets au Luxembourg. Les rendez-vous sont disponibles rapidement, avec ou sans prescription médicale selon vos besoins.
            </p>
            <p className="text-gray-600 mb-6">
              Consultations CNS remboursées sur prescription • Consultations privées disponibles immédiatement
            </p>
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Choisir mon cabinet et réserver
            </button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;