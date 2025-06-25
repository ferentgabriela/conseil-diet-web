
import React from 'react';
import { ChatPopup } from '@/components/ChatPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Gabriela Ferent
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-700 mb-8">
            Diététicienne Luxembourg
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Consultations nutritionnelles remboursées CNS sur prescription médicale et consultations privées. 
            Accompagnement personnalisé pour votre santé et bien-être.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Prendre Rendez-vous sur Doctena
            </a>
            <button className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mes Services
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* CNS Section */}
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <h4 className="text-2xl font-bold text-green-800 mb-4">
                Consultations CNS
              </h4>
              <p className="text-gray-700 mb-6">
                Consultations remboursées par la CNS sur prescription médicale pour le traitement de pathologies spécifiques.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Diabète (type 1 et 2)</li>
                <li>• Obésité (IMC ≥ 30)</li>
                <li>• Troubles du comportement alimentaire</li>
                <li>• Maladies cardiovasculaires</li>
                <li>• Syndrome métabolique</li>
              </ul>
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-green-800 font-medium">
                  💳 Remboursement CNS : 80% du tarif conventionné
                </p>
              </div>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Réserver - Consultation CNS
              </a>
            </div>

            {/* Private Section */}
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">
                Consultations Privées
              </h4>
              <p className="text-gray-700 mb-6">
                Accès direct sans prescription pour vos objectifs de santé et bien-être nutritionnel.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Perte de poids</li>
                <li>• Rééquilibrage alimentaire</li>
                <li>• Nutrition sportive</li>
                <li>• Allergies alimentaires</li>
                <li>• Accompagnement grossesse</li>
              </ul>
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-blue-800 font-medium">
                  ⚡ Disponibilité immédiate - Sans prescription
                </p>
              </div>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Réserver - Consultation Privée
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mes Cabinets
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Luxembourg-Ville</h4>
              <p className="text-gray-600">Centre-ville accessible</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Ettelbruck</h4>
              <p className="text-gray-600">Nord du Luxembourg</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Insenborn</h4>
              <p className="text-gray-600">Proche de Ettelbruck</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-xl font-semibold mb-4">Gabriela Ferent - Diététicienne</h4>
          <p className="text-gray-400 mb-4">
            Consultations nutritionnelles au Luxembourg
          </p>
          <p className="text-gray-400 text-sm">
            Email: gabriela@conseildietetique.lu
          </p>
        </div>
      </footer>

      {/* Chat Popup */}
      <ChatPopup />
    </div>
  );
};

export default Index;
