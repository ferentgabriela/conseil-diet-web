
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import { ChatPopup } from '@/components/ChatPopup';
import { ExternalLink, Calendar, CheckCircle, Phone, FileText, Youtube, MapPin } from 'lucide-react';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gabriela Ferent - Diététicienne
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Consultations nutritionnelles au Luxembourg - Remboursées CNS ou consultations privées
            </p>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              <Calendar className="h-5 w-5" />
              Prendre Rendez-vous
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types de Consultations
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le type de consultation adapté à vos besoins
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CNS Consultations */}
            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Consultations CNS</h3>
                  <p className="text-green-600 font-medium">Remboursées à 80%</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 mb-4">Sur prescription médicale pour :</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Diabète (type 1 et 2)</li>
                  <li>• Obésité (IMC ≥ 30)</li>
                  <li>• Troubles du comportement alimentaire</li>
                  <li>• Hypertension artérielle</li>
                  <li>• Dyslipidémies</li>
                  <li>• Syndrome métabolique</li>
                </ul>
              </div>

              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                Réserver <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Private Consultations */}
            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Consultations Privées</h3>
                  <p className="text-blue-600 font-medium">Accès direct</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 mb-4">Disponible pour :</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Perte de poids</li>
                  <li>• Rééquilibrage alimentaire</li>
                  <li>• Nutrition sportive</li>
                  <li>• Allergies et intolérances</li>
                  <li>• Accompagnement grossesse</li>
                  <li>• Bien-être nutritionnel</li>
                </ul>
              </div>

              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Réserver <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Locations */}
      <section id="cabinets" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Cabinets
            </h2>
            <p className="text-gray-600">
              3 locations au Luxembourg pour votre convenance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Luxembourg-Ville</h4>
              <p className="text-gray-600 mb-4 text-sm">Centre-ville</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22943"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Réserver <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ettelbruck</h4>
              <p className="text-gray-600 mb-4 text-sm">Nord du Luxembourg</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#24538"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Réserver <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Insenborn</h4>
              <p className="text-gray-600 mb-4 text-sm">Proche d'Ettelbruck</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Réserver <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Resources Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Informations Utiles
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-gray-900">Documentation CNS</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Informations officielles sur les remboursements diététiques
              </p>
              <a
                href="https://cns.public.lu/fr/assure/remboursements/prestations-remboursees/prestations-paramedicales/dieteticiens.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Consulter <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Youtube className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-gray-900">Guide Vidéo</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Comprendre les consultations diététiques au Luxembourg
              </p>
              <a
                href="https://youtu.be/MM7UIP9_XZ4?si=s_1pNpJgK5JnzyMS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Regarder <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Doctena Testimonials Widget */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de Patients
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les expériences de patients qui ont fait confiance à mon accompagnement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <section 
              data-toggle="doc-reviews" 
              data-doctor-eid="492d6313-2026-4e38-ba00-ffd3a88d67de" 
              data-language="fr"
            ></section>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Prêt(e) à commencer votre parcours nutritionnel ?
            </p>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              Prendre Rendez-vous
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection onOpenChat={handleOpenChat} />

      {/* Contact Section */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions ?
            </h3>
            <p className="text-gray-600 mb-6">
              N'hésitez pas à nous contacter pour plus d'informations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleOpenChat}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Poser une question
              </button>
              <a
                href="mailto:gabriela@conseildietetique.lu"
                className="inline-flex items-center gap-2 px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Email direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Popup */}
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />

      {/* Doctena Testimonials Script */}
      <script src="https://api.doctena.lu/js/widgetRatings/calendar/build.php"></script>
    </div>
  );
};

export default Index;
