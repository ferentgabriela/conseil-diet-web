
import React, { useState } from 'react';
import { ChatPopup } from '@/components/ChatPopup';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="accueil" className="pt-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Consultation diététique"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
              />
            </div>
            
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
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mes Services
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* CNS Section */}
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Consultation médicale remboursée"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
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
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Nutrition et bien-être"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
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
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Locations Section */}
      <section id="cabinets" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mes Cabinets
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cabinet Luxembourg-Ville"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Luxembourg-Ville</h4>
              <p className="text-gray-600 mb-4">Centre-ville accessible</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22943"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Réserver
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cabinet Ettelbruck"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Ettelbruck</h4>
              <p className="text-gray-600 mb-4">Nord du Luxembourg</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#24538"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Réserver
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cabinet Insenborn"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Insenborn</h4>
              <p className="text-gray-600 mb-4">Proche de Ettelbruck</p>
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Réserver
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Choisissez le cabinet le plus proche de chez vous
            </p>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Voir tous les créneaux disponibles
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection onOpenChat={handleOpenChat} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Contact</h4>
                <p className="text-gray-400 mb-2">
                  Email: gabriela@conseildietetique.lu
                </p>
                <p className="text-gray-400">
                  Consultations sur rendez-vous uniquement
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Cabinets</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>Luxembourg-Ville</li>
                  <li>Ettelbruck</li>
                  <li>Insenborn</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Services</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>Consultations CNS</li>
                  <li>Consultations privées</li>
                  <li>Nutrition thérapeutique</li>
                  <li>Accompagnement personnalisé</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center border-t border-gray-800 pt-8">
              <h4 className="text-xl font-semibold mb-4">Gabriela Ferent - Diététicienne</h4>
              <p className="text-gray-400 mb-4">
                Consultations nutritionnelles au Luxembourg
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Prendre RDV sur Doctena
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Popup */}
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
    </div>
  );
};

export default Index;
