import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité - Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles conformément au RGPD." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Politique de confidentialité
            </h1>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsable du traitement</h2>
                <p className="text-gray-700 mb-4">
                  Gabriela Ferent, diététicienne autorisée, est responsable du traitement des données personnelles collectées sur ce site et dans le cadre des consultations.
                </p>
                <p className="text-gray-700">
                  Contact : gabriela.ferent@conseildietetique.lu | +352 691 379 172
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Finalités du traitement</h2>
                <p className="text-gray-700 mb-4">
                  Vos données personnelles sont traitées pour :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>La prise de rendez-vous et la gestion des consultations</li>
                  <li>Le suivi nutritionnel et diététique personnalisé</li>
                  <li>La communication avec votre médecin prescripteur (rapports CNS)</li>
                  <li>La facturation et la gestion administrative</li>
                  <li>Le respect des obligations légales et réglementaires</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conservation des données</h2>
                <p className="text-gray-700">
                  Les dossiers médicaux sont conservés pendant 10 ans conformément à la réglementation luxembourgeoise sur les professions de santé.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits RGPD</h2>
                <p className="text-gray-700 mb-4">
                  Vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit à l'effacement (sous conditions légales)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Pour exercer ces droits, contactez-nous à l'adresse email ci-dessus.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sécurité et hébergement</h2>
                <p className="text-gray-700 mb-4">
                  Vos données sont protégées par des mesures de sécurité techniques et organisationnelles appropriées, incluant le chiffrement des transmissions.
                </p>
                <p className="text-gray-700 mb-4">
                  Le site est hébergé par Vercel (Union Européenne). Aucun transfert de données n'a lieu en dehors de l'UE.
                </p>
                <p className="text-gray-700">
                  Les consultations sont soumises au secret médical conformément à la déontologie des diététiciens.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700">
                  Pour toute question relative à cette politique de confidentialité, contactez-nous à :
                  <br />
                  <strong>gabriela.ferent@conseildietetique.lu</strong>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;