import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TarifsPriseEnCharge = () => {
  return (
    <>
      <Helmet>
        <title>Tarifs & prise en charge CNS - Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Consultez les tarifs officiels et conditions de remboursement CNS pour les consultations diététiques au Luxembourg." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              💶 Tarifs & Conditions
            </h1>
            
            {/* Consultations Réglementées Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-800 mb-6">
                Consultations Diététiques Réglementées (avec ordonnance médicale)
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Certaines consultations peuvent être prises en charge par la CNS sur présentation d'une ordonnance médicale valide, selon la nomenclature officielle.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">💡 À savoir :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Une prescription médicale est obligatoire pour bénéficier du tarif remboursé.</li>
                  <li>• Ces consultations sont exclusivement réservées aux patients présentant des pathologies reconnues (ex : diabète, obésité, maladies intestinales…).</li>
                </ul>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-800">Consultation</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-800">Code</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-800">Durée</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-800">Tarif intégral</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-800">Tarif CNS réduit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3">Anamnèse & diagnostic nutritionnel</td>
                      <td className="border border-gray-300 px-4 py-3">ZD11</td>
                      <td className="border border-gray-300 px-4 py-3">60 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">106,14 €</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">12,74 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Conseil & remise du plan nutritionnel</td>
                      <td className="border border-gray-300 px-4 py-3">ZD12</td>
                      <td className="border border-gray-300 px-4 py-3">45 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">132,29 €</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">15,92 €</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3">Suivi 1ère séance</td>
                      <td className="border border-gray-300 px-4 py-3">ZD13</td>
                      <td className="border border-gray-300 px-4 py-3">30 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">64,72 €</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">7,77 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Suivi 2ème séance</td>
                      <td className="border border-gray-300 px-4 py-3">ZD13</td>
                      <td className="border border-gray-300 px-4 py-3">30 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">64,72 €</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">7,77 €</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3">Suivi 3ème séance</td>
                      <td className="border border-gray-300 px-4 py-3">ZD13</td>
                      <td className="border border-gray-300 px-4 py-3">30 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">64,72 €</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">7,77 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Suivi 4ème séance</td>
                      <td className="border border-gray-300 px-4 py-3">ZD13</td>
                      <td className="border border-gray-300 px-4 py-3">30 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">64,72 €</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">7,77 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  📌 Consultations remboursées selon la Convention CNS–ANDL, uniquement sur ordonnance médicale valide.
                </p>
              </div>
            </div>

            {/* Consultations Privées Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Consultations Diététiques Privées (hors CNS)
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ces consultations sont accessibles sans prescription médicale et adaptées à vos objectifs personnels : perte de poids, bien-être digestif, vitalité, alimentation pendant la grossesse, etc.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Consultation</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Code</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Durée</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Tarif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3">Anamnèse & diagnostic nutritionnel</td>
                      <td className="border border-gray-300 px-4 py-3">ZD11</td>
                      <td className="border border-gray-300 px-4 py-3">60 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">106 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Conseil & remise du plan nutritionnel</td>
                      <td className="border border-gray-300 px-4 py-3">ZD12</td>
                      <td className="border border-gray-300 px-4 py-3">45 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">132 €</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3">Suivi (présentiel)</td>
                      <td className="border border-gray-300 px-4 py-3">ZD13</td>
                      <td className="border border-gray-300 px-4 py-3">30 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">79,86 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Suivi (en ligne)</td>
                      <td className="border border-gray-300 px-4 py-3">ZD13</td>
                      <td className="border border-gray-300 px-4 py-3">30 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">98 €</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3">Bilan nutritionnel + génétique (3 séances)</td>
                      <td className="border border-gray-300 px-4 py-3">GEN</td>
                      <td className="border border-gray-300 px-4 py-3">45 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">480 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Update test génétique</td>
                      <td className="border border-gray-300 px-4 py-3">GEN</td>
                      <td className="border border-gray-300 px-4 py-3">45 min</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">90 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Conditions Générales Section */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-red-800 mb-4">⚠️ Conditions Générales</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">🕒 Rendez-vous non respecté :</h3>
                  <p className="text-red-700">
                    Toute absence non justifiée à un rendez-vous réservé pourra faire l'objet d'une indemnisation non remboursable (mention légale : RV non observé – Article 50 de la convention CNS).
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">💳 Paiement sur place :</h3>
                  <ul className="text-red-700 space-y-1">
                    <li>• Les honoraires sont à régler immédiatement après la consultation.</li>
                    <li>• Paiement par carte bancaire uniquement.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TarifsPriseEnCharge;