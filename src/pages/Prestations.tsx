import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Scale, Heart, Stethoscope, Baby, Salad, Zap, Shield, Calendar, CheckCircle, ArrowRight, Clock, Award, Users, MapPin } from 'lucide-react';

const Prestations = () => {
  const scrollToCabinets = () => {
    window.location.href = '/#cabinets';
  };

  const prestationsData = [
    {
      category: "Consultations CNS (Remboursées)",
      icon: Shield,
      color: "green",
      description: "Consultations diététiques prises en charge par la CNS sur prescription médicale",
      conditions: [
        "Diabète type 1 et type 2",
        "Diabète gestationnel", 
        "Pré-diabète",
        "Obésité adulte (IMC ≥30)",
        "Obésité pédiatrique",
        "Hypertension artérielle",
        "Dyslipidémie (cholestérol élevé)",
        "Syndrome métabolique",
        "Maladies inflammatoires chroniques intestinales",
        "Maladie cœliaque",
        "Intolérances alimentaires",
        "Troubles du comportement alimentaire"
      ],
      process: "Demandez une prescription à votre médecin traitant mentionnant votre pathologie et la nécessité d'un suivi diététique.",
      duration: "45-60 minutes",
      price: "Remboursé CNS selon nomenclature"
    },
    {
      category: "Consultations Privées",
      icon: Heart,
      color: "blue", 
      description: "Accompagnement nutritionnel personnalisé pour optimiser votre santé et votre bien-être",
      conditions: [
        "Perte de poids durable et saine",
        "Rééquilibrage alimentaire",
        "Nutrition anti-inflammatoire",
        "Gestion du stress par l'alimentation",
        "Amélioration de l'énergie et vitalité",
        "Bien-être digestif",
        "Préparation à la grossesse",
        "Nutrition pendant la grossesse",
        "Soutien nutritionnel allaitement",
        "Diversification alimentaire",
        "Nutrition de l'enfant et adolescent",
        "Nutrition et ménopause",
        "Allergies et intolérances alimentaires",
        "Nutrition sportive",
        "Éducation nutritionnelle"
      ],
      process: "Prenez rendez-vous directement, sans prescription médicale nécessaire.",
      duration: "60 minutes",
      price: "À partir de 60€"
    }
  ];

  const approachSteps = [
    {
      step: 1,
      title: "Bilan nutritionnel complet",
      description: "Analyse approfondie de vos habitudes alimentaires, votre mode de vie et vos objectifs de santé."
    },
    {
      step: 2, 
      title: "Plan alimentaire personnalisé",
      description: "Élaboration d'un programme nutritionnel adapté à vos besoins, contraintes et préférences."
    },
    {
      step: 3,
      title: "Accompagnement continu",
      description: "Suivi régulier, ajustements du plan et soutien pour maintenir votre motivation."
    },
    {
      step: 4,
      title: "Éducation nutritionnelle",
      description: "Acquisition de connaissances pour maintenir de bonnes habitudes alimentaires à long terme."
    }
  ];

  const avantages = [
    {
      icon: Award,
      title: "Expertise reconnue",
      description: "15+ années d'expérience en nutrition clinique et diététique thérapeutique"
    },
    {
      icon: Users,
      title: "Approche personnalisée", 
      description: "Plans nutritionnels adaptés à votre profil, vos goûts et votre mode de vie"
    },
    {
      icon: Clock,
      title: "Disponibilité flexible",
      description: "Horaires étendus et rendez-vous rapides dans nos 3 cabinets"
    },
    {
      icon: MapPin,
      title: "3 localisations",
      description: "Cabinets à Luxembourg-Ville, Esch-sur-Alzette et Differdange"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Prestations Diététiques Luxembourg | Consultations CNS & Privées</title>
        <meta 
          name="description" 
          content="Découvrez nos prestations diététiques au Luxembourg : consultations CNS remboursées et privées. Perte de poids, diabète, nutrition santé. 3 cabinets disponibles." 
        />
        <meta name="keywords" content="prestations diététiques Luxembourg, consultation nutritionniste, CNS remboursé, diététicien Luxembourg, perte de poids, diabète nutrition" />
        <link rel="canonical" href="https://conseildietetique.lu/prestations" />
        <meta property="og:title" content="Prestations Diététiques Luxembourg | Consultations CNS & Privées" />
        <meta property="og:description" content="Prestations complètes en nutrition et diététique : consultations CNS remboursées pour pathologies, consultations privées pour bien-être. 3 cabinets au Luxembourg." />
        <meta property="og:url" content="https://conseildietetique.lu/prestations" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Prestations Diététiques au Luxembourg
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Accompagnement nutritionnel personnalisé avec consultations CNS remboursées et privées. 
                Une expertise de plus de 15 ans au service de votre santé et de votre bien-être.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToCabinets}
                  className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Prendre rendez-vous
                </button>
                <a 
                  href="/tarifs-prise-en-charge" 
                  className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-all duration-300"
                >
                  Voir les tarifs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Types de Prestations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nos Types de Consultations
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Nous proposons deux types de prestations adaptées à vos besoins : des consultations CNS remboursées 
                  pour les pathologies médicales et des consultations privées pour tous vos objectifs de bien-être.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {prestationsData.map((prestation, index) => {
                  const IconComponent = prestation.icon;
                  const colorClasses = prestation.color === 'green' 
                    ? 'bg-green-600 text-white border-green-200 from-green-50 to-green-100' 
                    : 'bg-blue-600 text-white border-blue-200 from-blue-50 to-blue-100';
                  
                  return (
                    <div key={index} className={`bg-gradient-to-br ${colorClasses.split(' ').slice(3).join(' ')} rounded-2xl p-8 border-2 ${colorClasses.split(' ')[2]} shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 ${colorClasses.split(' ').slice(0, 2).join(' ')} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{prestation.category}</h3>
                        <p className="text-gray-600 mb-4">{prestation.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-white/70 rounded-lg p-3">
                            <div className="font-semibold text-gray-700">Durée</div>
                            <div className="text-gray-600">{prestation.duration}</div>
                          </div>
                          <div className="bg-white/70 rounded-lg p-3">
                            <div className="font-semibold text-gray-700">Tarif</div>
                            <div className="text-gray-600">{prestation.price}</div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Indications :</h4>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                          {prestation.conditions.map((condition, condIndex) => (
                            <div key={condIndex} className="flex items-start gap-3 bg-white/70 rounded-lg p-2">
                              <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${prestation.color === 'green' ? 'text-green-600' : 'text-blue-600'}`} />
                              <span className="text-sm text-gray-700">{condition}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/80 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-gray-800 mb-2">Comment procéder :</h4>
                        <p className="text-sm text-gray-600">{prestation.process}</p>
                      </div>

                      <button
                        onClick={scrollToCabinets}
                        className={`w-full px-6 py-3 ${colorClasses.split(' ').slice(0, 2).join(' ')} font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2`}
                      >
                        Réserver une consultation
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Notre Approche */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Notre Méthode d'Accompagnement
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Une approche structurée et personnalisée pour vous garantir des résultats durables 
                  et un bien-être optimal à long terme.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {approachSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Pourquoi Choisir Nos Prestations ?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Une expertise reconnue, une approche humaine et des résultats concrets pour transformer 
                  votre relation à l'alimentation et améliorer votre qualité de vie.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {avantages.map((avantage, index) => {
                  const IconComponent = avantage.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{avantage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{avantage.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Spécialités */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nos Domaines d'Expertise
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Une expertise approfondie dans tous les domaines de la nutrition thérapeutique et du bien-être alimentaire.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Scale, title: "Gestion du Poids", desc: "Perte de poids durable, rééquilibrage alimentaire personnalisé" },
                  { icon: Stethoscope, title: "Nutrition Médicale", desc: "Diabète, hypertension, cholestérol, maladies chroniques" },
                  { icon: Baby, title: "Nutrition Familiale", desc: "Grossesse, allaitement, diversification, nutrition pédiatrique" },
                  { icon: Heart, title: "Bien-être Digestif", desc: "Troubles digestifs, allergies, intolérances alimentaires" },
                  { icon: Zap, title: "Nutrition Énergétique", desc: "Fatigue chronique, stress, optimisation des performances" },
                  { icon: Salad, title: "Éducation Nutritionnelle", desc: "Apprentissage des bonnes pratiques alimentaires" }
                ].map((specialite, index) => {
                  const IconComponent = specialite.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{specialite.title}</h3>
                      <p className="text-gray-600">{specialite.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Transformer Votre Santé ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Réservez votre consultation aujourd'hui et commencez votre parcours vers une meilleure santé. 
                Disponibilités dans nos 3 cabinets au Luxembourg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToCabinets}
                  className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Réserver maintenant
                </button>
                <a 
                  href="/#articles" 
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Lire nos articles
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Prestations;