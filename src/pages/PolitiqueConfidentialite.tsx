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
                  Gabriela Ferent, diététicienne autorisée, est responsable du traitement des données personnelles collectées sur ce site et dans le cadre des consultations diététiques.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">Contact :</p>
                  <p className="text-gray-700">📧 gabriela.ferent@conseildietetique.lu</p>
                  <p className="text-gray-700">📞 +352 691 379 172</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Finalités du traitement</h2>
                <p className="text-gray-700 mb-4">
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>La prise de rendez-vous et la gestion des consultations</li>
                  <li>Le suivi nutritionnel et diététique personnalisé</li>
                  <li>La communication avec votre médecin prescripteur (rapports CNS)</li>
                  <li>La facturation et la gestion administrative</li>
                  <li>Le respect des obligations légales et réglementaires applicables aux professions de santé</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Base légale du traitement</h2>
                <p className="text-gray-700 mb-4">
                  Le traitement de vos données repose sur les fondements juridiques suivants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>L'exécution d'un contrat de soins entre le patient et la diététicienne (article 6(1)(b) RGPD)</li>
                  <li>Le respect d'obligations légales imposées aux professionnels de santé (article 6(1)(c))</li>
                  <li>L'intérêt public dans le domaine de la santé (article 9(2)(h))</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Destinataires des données</h2>
                <p className="text-gray-700 mb-4">
                  Les données peuvent être transmises uniquement si nécessaire à :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Votre médecin prescripteur</li>
                  <li>La Caisse Nationale de Santé (CNS) dans le cadre de la facturation</li>
                  <li>Le logiciel de gestion des rendez-vous ou de téléconsultation utilisé (ex. : Doctena)</li>
                  <li>Le prestataire d'hébergement sécurisé (Vercel – Union Européenne)</li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  Aucun transfert n'a lieu en dehors de l'Union Européenne.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conservation des données</h2>
                <p className="text-gray-700">
                  Les dossiers médicaux et données associées sont conservés pendant une durée de 10 ans, conformément à la réglementation luxembourgeoise sur les professions de santé.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sécurité et confidentialité</h2>
                <p className="text-gray-700 mb-4">
                  Vos données sont protégées par des mesures de sécurité techniques et organisationnelles appropriées, incluant :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Le chiffrement des transmissions</li>
                  <li>Un stockage sécurisé sur des serveurs hébergés dans l'Union Européenne</li>
                  <li>L'accès restreint aux seules personnes autorisées, soumises au secret professionnel</li>
                </ul>
                <p className="text-gray-700">
                  Les consultations sont couvertes par le secret médical, conformément à la déontologie des diététiciens et à la convention CNS–ANDL.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits RGPD</h2>
                <p className="text-gray-700 mb-4">
                  Vous disposez des droits suivants sur vos données personnelles :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Droit d'accès</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement (dans les limites légales)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit d'opposition</li>
                  <li>Droit à la portabilité</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse e-mail indiquée ci-dessus.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Traitements automatisés</h2>
                <p className="text-gray-700">
                  Vos données ne font l'objet d'aucun profilage ou décision automatisée.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Réclamations</h2>
                <p className="text-gray-700 mb-4">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la :
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Commission nationale pour la protection des données (CNPD)</p>
                  <p className="text-gray-700">📍 www.cnpd.lu</p>
                </div>
              </section>

              <section>
                <div className="text-center text-sm text-gray-500 border-t pt-6">
                  <p>Dernière mise à jour : juillet 2025</p>
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

export default PolitiqueConfidentialite;