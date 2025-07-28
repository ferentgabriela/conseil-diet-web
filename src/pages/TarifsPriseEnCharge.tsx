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
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Tarifs & prise en charge CNS
            </h1>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Acte</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Code nomenclature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Coefficient</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Base (lettre-clé 0,464450)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Honoraires TTC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">1ʳᵉ consultation 60 min</td>
                    <td className="border border-gray-300 px-4 py-3">ZD11</td>
                    <td className="border border-gray-300 px-4 py-3">220</td>
                    <td className="border border-gray-300 px-4 py-3">0,464450</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">102,18 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Suivi 45 min</td>
                    <td className="border border-gray-300 px-4 py-3">ZD12</td>
                    <td className="border border-gray-300 px-4 py-3">275</td>
                    <td className="border border-gray-300 px-4 py-3">0,464450</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">127,73 €</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Suivi court 20 min</td>
                    <td className="border border-gray-300 px-4 py-3">ZD13</td>
                    <td className="border border-gray-300 px-4 py-3">138</td>
                    <td className="border border-gray-300 px-4 py-3">0,464450</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">63,86 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Bilan final 20 min</td>
                    <td className="border border-gray-300 px-4 py-3">ZD21</td>
                    <td className="border border-gray-300 px-4 py-3">138</td>
                    <td className="border border-gray-300 px-4 py-3">0,464450</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">63,86 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Conditions de remboursement (CNS)</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Prescription médicale <em>datée de moins de 3 mois</em> mentionnant la pathologie listée à l'annexe E des statuts CNS.</li>
                <li>• La CNS prend en charge 80 % du tarif conventionnel ; le solde reste à la charge du patient.</li>
                <li>• Sans ordonnance conforme : règlement du tarif privé ci-dessus, non remboursable.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600 italic">
                Les valeurs sont indexées ; elles seront mises à jour automatiquement à chaque réévaluation de la lettre-clé.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TarifsPriseEnCharge;