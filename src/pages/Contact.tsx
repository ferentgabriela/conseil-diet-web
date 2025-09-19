import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ChatPopup } from '@/components/ChatPopup';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToCabinets = () => {
    window.location.href = '/#cabinets';
  };

  return (
    <>
      <Helmet>
        <title>Contact Diététicienne Luxembourg | Gabriela Ferent</title>
        <meta 
          name="description" 
          content="Contactez Gabriela Ferent, diététicienne nutritionniste au Luxembourg. 3 cabinets : Luxembourg-Ville, Esch-sur-Alzette, Differdange. Rendez-vous disponibles rapidement." 
        />
        <meta name="keywords" content="contact diététicienne Luxembourg, rendez-vous nutritionniste, consultation diététique Luxembourg, Gabriela Ferent contact" />
        <link rel="canonical" href="https://conseildietetique.lu/contact" />
        <meta property="og:title" content="Contact Diététicienne Luxembourg | Gabriela Ferent" />
        <meta property="og:description" content="Contactez votre diététicienne au Luxembourg. 3 cabinets disponibles pour vos consultations nutritionnelles. Prise de rendez-vous rapide." />
        <meta property="og:url" content="https://conseildietetique.lu/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contactez Votre Diététicienne
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Prêt à transformer votre santé ? Contactez Gabriela Ferent pour un accompagnement nutritionnel personnalisé. 
                Consultations disponibles dans nos 3 cabinets au Luxembourg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToCabinets}
                  className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Réserver un rendez-vous
                </button>
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Poser une question
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Plusieurs Façons de Nous Contacter
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choisissez le moyen de contact qui vous convient le mieux. Nous sommes là pour répondre à toutes vos questions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Téléphone</h3>
                  <p className="text-gray-600 mb-4">Appelez-nous directement pour prendre rendez-vous</p>
                  <a 
                    href="tel:+35220882531" 
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    +352 20 88 25 31
                  </a>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
                  <p className="text-gray-600 mb-4">Envoyez-nous un email pour toute question</p>
                  <button
                    onClick={() => {
                      const email = 'dieteticienne' + '@' + 'conseildietetique.lu';
                      window.location.href = 'mailto:' + email;
                    }}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    dieteticienne@conseildietetique.lu
                  </button>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Chat en ligne</h3>
                  <p className="text-gray-600 mb-4">Posez vos questions via notre chat</p>
                  <button
                    onClick={() => setIsChatOpen(true)}
                    className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Ouvrir le chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nos 3 Cabinets au Luxembourg
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choisissez le cabinet le plus proche de chez vous pour votre consultation diététique.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    city: "Luxembourg-Ville",
                    address: "Centre médical, Luxembourg",
                    icon: MapPin,
                    color: "green"
                  },
                  {
                    city: "Esch-sur-Alzette", 
                    address: "Cabinet médical, Esch-sur-Alzette",
                    icon: MapPin,
                    color: "blue"
                  },
                  {
                    city: "Differdange",
                    address: "Centre de santé, Differdange", 
                    icon: MapPin,
                    color: "purple"
                  }
                ].map((location, index) => {
                  const IconComponent = location.icon;
                  const colorClasses = {
                    green: 'bg-green-600 text-white from-green-50',
                    blue: 'bg-blue-600 text-white from-blue-50', 
                    purple: 'bg-purple-600 text-white from-purple-50'
                  }[location.color];
                  
                  return (
                    <div key={index} className={`bg-gradient-to-br ${colorClasses.split(' ')[2]} to-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300`}>
                      <div className={`w-16 h-16 ${colorClasses.split(' ').slice(0, 2).join(' ')} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{location.city}</h3>
                      <p className="text-gray-600 text-center mb-6">{location.address}</p>
                      <button
                        onClick={scrollToCabinets}
                        className={`w-full px-6 py-3 ${colorClasses.split(' ').slice(0, 2).join(' ')} font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                      >
                        Réserver ici
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Horaires */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Horaires d'Ouverture
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nous offrons des horaires flexibles pour s'adapter à votre emploi du temps
              </p>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-md">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Luxembourg-Ville</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi:</span>
                        <span>8h00 - 18h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi:</span>
                        <span>9h00 - 14h00</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Esch & Differdange</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi:</span>
                        <span>9h00 - 17h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi:</span>
                        <span>Sur rendez-vous</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection onOpenChat={() => setIsChatOpen(true)} />
      </main>

      <Footer />
      
      {isChatOpen && (
        <ChatPopup 
          isOpen={isChatOpen} 
          onToggle={() => setIsChatOpen(false)} 
        />
      )}
    </>
  );
};

export default Contact;