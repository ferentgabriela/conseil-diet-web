
import React from 'react';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';

const NarrativeHeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('apropos');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-25 to-green-25">
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Column - Headline + CTA */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge accrocheur */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                <span className="text-2xl">🔄</span>
                <span className="text-sm font-medium text-green-800">
                  Transformation garantie sans frustration
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Reprenez le contrôle de votre alimentation.
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ensemble, retrouvons un équilibre durable — sans régime, sans privation, sans culpabilité.
              </p>
            </div>

            {/* Primary CTA Block */}
            <div className="space-y-4">
              <button
                onClick={scrollToCabinets}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                <Calendar className="h-5 w-5" />
                Commencer ma transformation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <p className="text-sm text-gray-600">
                Prise en charge CNS possible • Sans engagement
              </p>

              {/* Crédentiels de Gabriela */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-2xl">👩‍⚕️</span>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Gabriela Ferent – Diététicienne certifiée au Luxembourg</p>
                  <p className="text-gray-600">1000+ patients satisfaits • 10+ années d'expérience</p>
                </div>
              </div>
            </div>

            {/* Secondary CTA */}
            <div>
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium transition-colors duration-300"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                En savoir plus sur mon approche
              </button>
            </div>
          </div>

          {/* Right Column - Photo + Testimonial */}
          <div className="space-y-6">
            {/* Gabriela's Photo Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl shadow-xl border-4 border-white overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
                  }}
                />
              </div>
              
              {/* Témoignage plus personnel */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-green-200 max-w-[300px]">
                <p className="text-sm text-gray-700 font-medium italic leading-relaxed">
                  "Grâce à Gabriela, j'ai enfin retrouvé mon énergie et perdu 12 kg sans me priver."
                </p>
                <p className="text-xs text-green-600 mt-2 font-medium">
                  — Marie, Luxembourg-Ville
                </p>
              </div>
            </div>

            {/* Bouton chat simplifié */}
            <div className="flex justify-end">
              <div className="group bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Une question ?</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved transition to next section */}
      <div className="relative">
        <svg 
          className="absolute bottom-0 left-0 w-full h-16 fill-white transform translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default NarrativeHeroSection;
