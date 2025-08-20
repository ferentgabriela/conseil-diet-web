import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white pt-[34px]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            📄 Mentions Légales, Conditions Générales d'Utilisation & Politique de Confidentialité
          </h1>
          
          <p className="text-sm text-gray-600 mb-12 text-center italic">
            Dernière mise à jour : 28/07/2025
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                1. Informations légales
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Responsable du site :</strong> Gabriela Ferent, Diététicienne agréée par le Ministère de la Santé (Luxembourg)</p>
                <p><strong>Code prestataire CNS :</strong> 361043-09</p>
                <p><strong>Email :</strong> dieteticienne@conseildietetique.lu</p>
                <p><strong>Tél. :</strong> +352 691 379 172</p>
                
                <div className="mt-4">
                  <p><strong>Adresse professionnelle :</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>74, Avenue De La Faïencerie, 1510 Luxembourg</li>
                    <li>25, Grand-Rue, 9050 Ettelbruck</li>
                    <li>15, Burwiss, 9660 Insenborn</li>
                  </ul>
                  
                  <p className="mt-4"><strong>Hébergeur du site :</strong> Vercel</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                2. Objet du site
              </h2>
              <p className="text-gray-700">
                Ce site a pour but de fournir des informations sur les services de diététique proposés, de permettre la prise de rendez-vous, et d'informer les visiteurs à travers des articles scientifiques, éducatifs et pratiques. Il ne remplace en aucun cas un avis médical.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                3. Conditions générales d'utilisation (CGU)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">a. Acceptation</h3>
                  <p className="text-gray-700">En accédant à ce site, vous acceptez sans réserve les présentes CGU.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">b. Propriété intellectuelle</h3>
                  <p className="text-gray-700">Tous les contenus présents sur ce site (textes, images, vidéos, logos, documents) sont protégés par le droit d'auteur. Toute reproduction, modification ou diffusion sans autorisation est interdite.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">c. Responsabilité</h3>
                  <p className="text-gray-700">Les conseils proposés sur ce site sont généraux. Ils ne se substituent pas à une consultation diététique individuelle ni à un suivi médical. Le site décline toute responsabilité en cas de mauvaise interprétation ou mauvaise application des informations.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">d. Publicité et affiliation</h3>
                  <p className="text-gray-700">Aucun complément alimentaire ou dispositif médical n'est vendu via ce site. Les recommandations sont génériques, sans promotion de marque. Toute collaboration commerciale ferait l'objet d'une transparence totale.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                4. Politique de confidentialité (RGPD)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">a. Données collectées</h3>
                  <p className="text-gray-700 mb-3">Nous collectons uniquement les données strictement nécessaires :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Nom, prénom, téléphone, adresse email (formulaires de contact ou de réservation)</li>
                    <li>Données nutritionnelles ou de santé si transmises volontairement lors d'un rendez-vous</li>
                    <li>Données de navigation (cookies, IP, durée de visite)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">b. Finalité du traitement</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Gestion des rendez-vous et des consultations</li>
                    <li>Élaboration de plans nutritionnels personnalisés</li>
                    <li>Suivi nutritionnel</li>
                    <li>Amélioration de l'expérience utilisateur et statistiques du site</li>
                    <li>Envoi de contenus pédagogiques si accord explicite</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">c. Base légale</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Consentement de l'utilisateur</li>
                    <li>Obligation légale de dossier patient (conservation 10 ans)</li>
                    <li>Intérêt légitime dans l'amélioration du service</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">d. Destinataires des données</h3>
                  <p className="text-gray-700 mb-3">Vos données ne sont jamais vendues. Elles peuvent être transmises à :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Prestataires techniques (hébergeur, outils de réservation) soumis à obligation de confidentialité</li>
                    <li>Autres professionnels de santé uniquement avec votre accord écrit</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">e. Durée de conservation</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Données patients : 10 ans</li>
                    <li>Données non médicales (cookies, formulaires sans RDV) : 12 mois maximum</li>
                    <li>Emails marketing : 3 ans après le dernier contact, avec option de désinscription à tout moment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">f. Vos droits</h3>
                  <p className="text-gray-700 mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Droit d'accès, de rectification, d'effacement</li>
                    <li>Droit d'opposition au traitement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit de retrait de consentement</li>
                  </ul>
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">👉 Pour toute demande : contactez-nous à dieteticienne@conseildietetique.lu</p>
                    <p className="text-green-800">👉 Vous pouvez également contacter la CNPD (www.cnpd.lu)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                5. Utilisation des cookies
              </h2>
              <div className="text-gray-700">
                <p className="mb-3">Le site utilise des cookies uniquement pour :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Mesure d'audience anonyme</li>
                  <li>Fonctionnement technique du site</li>
                </ul>
                <p className="mt-3">Vous pouvez désactiver ou modifier vos préférences depuis votre navigateur.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                6. Déontologie & Conformité réglementaire
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">a. Statut professionnel</h3>
                  <p className="text-gray-700">Gabriela Ferent est une professionnelle de santé autorisée au Grand-Duché de Luxembourg conformément à la réglementation en vigueur. Toute activité est strictement encadrée par la loi luxembourgeoise.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">b. Interdiction de vente de compléments</h3>
                  <p className="text-gray-700">Conformément aux règlements en vigueur, la diététicienne ne vend ni ne promeut de compléments nutritionnels. Les recommandations éventuelles sont neutres, génériques et basées sur des besoins évalués scientifiquement.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">c. Dispositifs et outils</h3>
                  <p className="text-gray-700">Les dispositifs non invasifs utilisés (ex. bio-impédancemètre, outils métaboliques) le sont dans le strict respect du cadre de la profession, à des fins d'évaluation et de suivi nutritionnel. Toute utilisation de dispositifs médicaux type CGM se fait uniquement sur la base de données fournies par le patient, sans prescription, ni distribution par la diététicienne.</p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                7. Modification des conditions
              </h2>
              <p className="text-gray-700">
                Le site se réserve le droit de modifier à tout moment les présentes mentions légales, CGU ou la politique de confidentialité. Toute modification sera affichée clairement sur cette page.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                8. Contact
              </h2>
              <div className="text-gray-700">
                <p className="mb-4">Pour toute question relative aux présentes conditions ou à l'utilisation de vos données personnelles :</p>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p>📧 dieteticienne@conseildietetique.lu</p>
                  <p>📞 +352 691 379 172</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MentionsLegales;