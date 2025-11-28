import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Transparence = () => {
  return (
    <>
      <Helmet>
        <title>Transparence — Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Déclaration de transparence et informations légales de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
        <link rel="canonical" href="https://www.conseildietetique.lu/transparence" />
        <meta property="og:title" content="Transparence — Gabriela Ferent Diététicienne" />
        <meta property="og:description" content="Déclaration de transparence et informations légales de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
        <meta property="og:url" content="https://www.conseildietetique.lu/transparence" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Transparence
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Déclaration d'indépendance
                </h2>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Je certifie ne percevoir aucun avantage financier ou en nature de l'industrie agro-alimentaire, 
                    des fabricants de compléments ou de dispositifs de santé.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Politique de recommandations
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Toutes les recommandations nutritionnelles sont basées uniquement sur :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les données scientifiques actuelles</li>
                    <li>L'évaluation individualisée de chaque patient</li>
                    <li>Les besoins nutritionnels spécifiques identifiés</li>
                  </ul>
                  <p>
                    Aucune marque ou produit spécifique n'est promu dans un intérêt commercial.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Engagement professionnel
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    En tant que diététicienne agréée, je m'engage à :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintenir une pratique éthique et transparente</li>
                    <li>Fournir des conseils basés sur la science nutritionnelle</li>
                    <li>Respecter la confidentialité et les besoins de chaque patient</li>
                    <li>Éviter tout conflit d'intérêts commercial</li>
                  </ul>
                </div>
              </section>

              <section className="text-center pt-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Signature professionnelle
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg inline-block">
                  <p className="text-gray-700 font-medium">
                    Gabriela Ferent<br />
                    Diététicienne autorisée<br />
                    Code prestataire : 361043-09
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Transparence;