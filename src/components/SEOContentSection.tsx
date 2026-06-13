import React from 'react';
import { Stethoscope, Calendar, MapPin, Scale, Heart, Zap, Droplets, Brain, Apple, Baby, ShieldCheck, ExternalLink, Star } from 'lucide-react';
import { scrollToElement } from '../utils/scrollUtils';
import gabrielaPortrait from '@/assets/gabriela-ferent-portrait.webp';

const SEOContentSection = () => {
  const scrollToCabinets = () => {
    scrollToElement('cabinets');
  };

  const specializations = [
    {
      icon: Scale,
      title: "Perte de poids",
      desc: "Accompagnement personnalisé pour une perte de poids durable et équilibrée"
    },
    {
      icon: Droplets,
      title: "Diabète",
      desc: "Gestion nutritionnelle du diabète type 1, type 2 et gestationnel"
    },
    {
      icon: Heart,
      title: "Hypertension",
      desc: "Régime DASH et approches nutritionnelles pour la tension artérielle"
    },
    {
      icon: Zap,
      title: "Cholestérol",
      desc: "Réduction du cholestérol par l'alimentation"
    },
    {
      icon: Brain,
      title: "Ménopause & Thyroïde",
      desc: "Nutrition adaptée aux changements hormonaux et à la thyroïde"
    },
    {
      icon: Apple,
      title: "Troubles digestifs",
      desc: "Solutions nutritionnelles pour le confort intestinal"
    },
    {
          icon: Baby,
          title: "Grossesse & Allaitement",
          desc: "Suivi nutritionnel périnatal personnalisé"
        },
        {
          icon: ShieldCheck,
          title: "Allergies & Intolérances",
          desc: "Prise en charge des intolérances alimentaires avérées (lactose, fructose, gluten)"
        }
      ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Consultations sur prescription médicale - Two column layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
            {/* Left: Key info bullets */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <Stethoscope className="h-7 w-7 text-green-600" />
                Consultations sur prescription médicale
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700"><strong>Prises en charge par la CNS</strong> pour toutes les pathologies éligibles (sur ordonnance).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700"><strong>3 cabinets de proximité</strong> répartis à travers le pays pour faciliter votre accès aux soins.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700"><strong>Approche personnalisée</strong> basée sur l'écoute, l'éducation nutritionnelle et des habitudes durables.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Professional photo card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 flex flex-col items-center text-center min-h-[300px] overflow-hidden">
              <div className="w-32 h-32 rounded-full border-4 border-green-200 shadow-md overflow-hidden mb-4">
                <img 
                  src={gabrielaPortrait} 
                  alt="Gabriela Ferent, diététicienne nutritionniste au Luxembourg" 
                  className="w-full h-full object-cover object-[50%_20%] scale-105"
                  loading="lazy"
                  width="128"
                  height="128"
                />
              </div>
              <p className="text-xl font-bold text-gray-900 mb-1">
                Gabriela Ferent
              </p>
              <p className="text-base text-green-700 mb-3">
                Diététicienne nutritionniste agréée CNS
              </p>
              <div className="flex items-center gap-1.5 text-sm text-green-600 mb-3">
                <Star className="h-4 w-4 fill-green-600" />
                <Star className="h-4 w-4 fill-green-600" />
                <Star className="h-4 w-4 fill-green-600" />
                <Star className="h-4 w-4 fill-green-600" />
                <Star className="h-4 w-4 fill-green-600" />
                <span className="ml-1 font-semibold">4.8/5</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <MapPin className="h-4 w-4" />
                <span>Luxembourg • Ettelbruck • Insenborn</span>
              </div>
            </div>
          </div>

          {/* Spécialisations - Card grid */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Spécialisations : Perte de poids, diabète, obésité
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {specializations.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all duration-200">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{spec.title}</h3>
                    <p className="text-sm text-gray-600">{spec.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prendre rendez-vous - CTA box */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Calendar className="h-7 w-7 text-green-600" />
              Réservez votre consultation
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Sélectionnez votre cabinet et choisissez le créneau de votre choix directement sur Doctena. Prise en charge rapide, avec ou sans ordonnance initiale.
            </p>
            
            {/* Badge tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full">
                <ShieldCheck className="h-4 w-4" />
                CNS remboursée sur prescription
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full">
                <Calendar className="h-4 w-4" />
                Privée sans ordonnance
              </span>
            </div>

            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Réserver sur Doctena
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
