
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const scrollToCabinets = () => {
    window.location.href = '/#cabinets';
  };

  const locations = [
    {
      city: "Luxembourg-Ville",
      address: "74, Avenue De La Faïencerie, 1510 Luxembourg",
      color: "green",
      mapUrl: "https://www.google.com/maps/place/Cabinet+Di%C3%A9t%C3%A9ticienne+Gabriela+Ferent+-+Luxembourg/@49.6188034,6.1132753,17z/data=!3m1!4b1!4m6!3m5!1s0x47954f903aeab367:0x7409fab28a8304ed!8m2!3d49.6188!4d6.1181462!16s%2Fg%2F11xnmvzkc5?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      city: "Ettelbruck",
      address: "25, Grand-Rue, 9050 Ettelbruck, Luxembourg",
      color: "blue",
      mapUrl: "https://www.google.com/maps/place/Cabinet+Di%C3%A9t%C3%A9ticienne+Gabriela+Ferent+-+Ettelbruck/@49.8463508,6.0958766,17z/data=!3m1!4b1!4m6!3m5!1s0x4795551cdb34d89b:0xc1452c1c5705ff8b!8m2!3d49.8463474!4d6.0984515!16s%2Fg%2F11xnm_lzpw?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      city: "Insenborn",
      address: "15, Burwiss, 9660 Insenborn, Luxembourg",
      color: "purple",
      mapUrl: "https://maps.google.com/?q=15+Burwiss+9660+Insenborn+Luxembourg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Diététicienne Luxembourg | Gabriela Ferent</title>
        <meta 
          name="description" 
          content="Contactez Gabriela Ferent, diététicienne nutritionniste au Luxembourg. 3 cabinets : Luxembourg-Ville, Ettelbruck, Insenborn. Rendez-vous disponibles rapidement." 
        />
        <meta name="keywords" content="contact diététicienne Luxembourg, rendez-vous nutritionniste, consultation diététique Luxembourg, Gabriela Ferent contact" />
        <link rel="canonical" href="https://www.conseildietetique.lu/contact" />
        <meta property="og:title" content="Contact Diététicienne Luxembourg | Gabriela Ferent" />
        <meta property="og:description" content="Contactez votre diététicienne au Luxembourg. 3 cabinets disponibles pour vos consultations nutritionnelles. Prise de rendez-vous rapide." />
        <meta property="og:url" content="https://www.conseildietetique.lu/contact" />
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
              <button 
                onClick={scrollToCabinets}
                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto"
              >
                <Calendar className="h-5 w-5" />
                Réserver un rendez-vous
              </button>
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

              <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Téléphone</h3>
                  <p className="text-gray-600 mb-4">Appelez-nous directement pour prendre rendez-vous</p>
                  <a 
                    href="tel:+352691379172" 
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    +352 691 379 172
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
                {locations.map((location, index) => {
                  const colorClasses = {
                    green: { bg: 'bg-green-600', from: 'from-green-50' },
                    blue: { bg: 'bg-blue-600', from: 'from-blue-50' },
                    purple: { bg: 'bg-purple-600', from: 'from-purple-50' }
                  }[location.color]!;
                  
                  return (
                    <div key={index} className={`bg-gradient-to-br ${colorClasses.from} to-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300`}>
                      <div className={`w-16 h-16 ${colorClasses.bg} text-white rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <MapPin className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{location.city}</h3>
                      <p className="text-gray-600 text-center mb-6">{location.address}</p>
                      <button
                        onClick={() => window.open(location.mapUrl, '_blank')}
                        className={`w-full px-6 py-3 ${colorClasses.bg} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                      >
                        Voir sur la carte
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
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Luxembourg-Ville</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="font-medium">Lundi, Mercredi, Vendredi</p>
                      <p>13h00 - 18h00</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Ettelbruck</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="font-medium">Mardi</p>
                      <p>8h00 - 20h00</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Insenborn</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="font-medium">Samedi</p>
                      <p>9h00 - 14h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Contact;
