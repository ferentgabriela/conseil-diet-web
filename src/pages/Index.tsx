
import React, { useState } from 'react';
import { ChatPopup } from '@/components/ChatPopup';
import { ExternalLink, Calendar, CheckCircle, Phone, FileText, Youtube } from 'lucide-react';

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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gabriela Ferent - Diététicienne
            </h1>
            <p className="text-lg text-gray-600">
              Consultations nutritionnelles au Luxembourg
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Prenez rendez-vous pour votre consultation diététique
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Consultations remboursées CNS ou consultations privées disponibles dans 3 cabinets au Luxembourg
            </p>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              <Calendar className="h-5 w-5" />
              Réserver sur Doctena
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Treatment Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* CNS Consultations */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Consultations CNS
                </h3>
                <p className="text-green-700 font-medium">
                  Remboursées à 80% par la CNS
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Prescription médicale requise pour :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Diabète (type 1 et 2)</li>
                    <li>• Obésité (IMC ≥ 30)</li>
                    <li>• Troubles du comportement alimentaire</li>
                    <li>• Hypertension artérielle</li>
                    <li>• Dyslipidémies</li>
                    <li>• Syndrome métabolique</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Réserver consultation CNS
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Private Consultations */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                  Consultations Privées
                </h3>
                <p className="text-blue-700 font-medium">
                  Accès direct sans prescription
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Disponible pour :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Perte de poids</li>
                    <li>• Rééquilibrage alimentaire</li>
                    <li>• Nutrition sportive</li>
                    <li>• Allergies et intolérances</li>
                    <li>• Accompagnement grossesse</li>
                    <li>• Bien-être nutritionnel</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Réserver consultation privée
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Resources Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Informations Officielles
            </h3>
            <p className="text-gray-600">
              Consultez les ressources officielles pour plus d'informations sur les remboursements CNS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Documentation CNS</h4>
                  <p className="text-sm text-gray-600">Informations officielles sur les remboursements</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Consultez la documentation officielle de la CNS concernant les prestations diététiques remboursées et les conditions d'éligibilité.
              </p>
              <a
                href="https://cns.public.lu/fr/assure/remboursements/prestations-remboursees/prestations-paramedicales/dieteticiens.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                Voir la documentation officielle
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Youtube className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Vidéo Explicative</h4>
                  <p className="text-sm text-gray-600">Guide pratique sur les consultations diététiques</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Regardez cette vidéo pour mieux comprendre le processus de consultation diététique et les démarches à suivre.
              </p>
              <a
                href="https://youtu.be/MM7UIP9_XZ4?si=s_1pNpJgK5JnzyMS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
              >
                Regarder la vidéo
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Locations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3 Cabinets au Luxembourg
            </h3>
            <p className="text-gray-600">
              Choisissez le cabinet le plus proche de chez vous
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Luxembourg-Ville</h4>
              <p className="text-gray-600 mb-4">Centre-ville</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22943"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
              >
                Réserver <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ettelbruck</h4>
              <p className="text-gray-600 mb-4">Nord du Luxembourg</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#24538"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
              >
                Réserver <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Insenborn</h4>
              <p className="text-gray-600 mb-4">Proche d'Ettelbruck</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
              >
                Réserver <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Des questions ?
            </h3>
            <p className="text-gray-600 mb-6">
              N'hésitez pas à me contacter pour plus d'informations sur les consultations ou le processus de remboursement CNS.
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
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Email direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Popup */}
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
    </div>
  );
};

export default Index;
