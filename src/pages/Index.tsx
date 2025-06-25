
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Utensils, Calendar, Phone, Mail, MapPin, Clock, CheckCircle, FileText, Stethoscope, Activity } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  const openDoctena = (url?: string) => {
    const defaultUrl = 'https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874';
    window.open(url || defaultUrl, '_blank');
  };

  // SEO: Add structured data and page load optimization
  useEffect(() => {
    // Preload critical Doctena links
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-600" aria-hidden="true" />
              <div>
                <h1 className="text-2xl font-bold text-green-800">Gabriela Ferent</h1>
                <p className="text-sm text-gray-600">Diététicienne Diplômée Luxembourg</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Navigation principale">
              <a href="#accueil" className="text-gray-700 hover:text-green-600 transition-colors" aria-label="Aller à l'accueil">Accueil</a>
              <a href="#cns" className="text-gray-700 hover:text-green-600 transition-colors" aria-label="Aller aux consultations CNS">CNS</a>
              <a href="#prive" className="text-gray-700 hover:text-green-600 transition-colors" aria-label="Aller aux consultations privées">Privé</a>
              <a href="#cabinets" className="text-gray-700 hover:text-green-600 transition-colors" aria-label="Voir les cabinets">Cabinets</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors" aria-label="Aller au contact">Contact</a>
            </nav>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => openDoctena()}
              aria-label="Prendre rendez-vous sur Doctena"
            >
              <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
              RDV sur Doctena
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 px-4" role="main">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Consultations Diététiques au Luxembourg
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Je suis Gabriela Ferent, diététicienne diplômée. Je propose des suivis nutritionnels 
            <strong> remboursés par la CNS</strong> (sur prescription médicale) et des consultations privées 
            pour tous vos besoins en nutrition et bien-être.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              onClick={() => openDoctena()}
              aria-label="Prendre rendez-vous sur Doctena - consultation diététique Luxembourg"
            >
              <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
              Prendre RDV sur Doctena
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('cns')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Découvrir les services de nutrition"
            >
              Découvrir mes Services
            </Button>
          </div>
        </div>
      </section>

      {/* CNS Coverage Section */}
      <section id="cns" className="py-16 px-4 bg-white" aria-labelledby="cns-title">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
              <span className="text-green-800 font-semibold">Remboursé par la CNS</span>
            </div>
            <h3 id="cns-title" className="text-3xl font-bold text-gray-900 mb-4">Suivi Diététique sur Prescription</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Bénéficiez d'un accompagnement nutritionnel remboursé par la CNS avec une prescription 
              de votre médecin traitant pour diverses pathologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-green-600" aria-hidden="true" />
                    <div>
                      <CardTitle className="text-green-800">Prescription Requise</CardTitle>
                      <CardDescription>Demandez à votre médecin</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Conditions couvertes :</h4>
                  <ul className="space-y-2 text-gray-700" role="list">
                    <li className="flex items-start" role="listitem">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                      Diabète (Type 1, Type 2, gestationnel)
                    </li>
                    <li className="flex items-start" role="listitem">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                      Maladies cardiovasculaires
                    </li>
                    <li className="flex items-start" role="listitem">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                      Troubles digestifs chroniques
                    </li>
                    <li className="flex items-start" role="listitem">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                      Insuffisance rénale
                    </li>
                    <li className="flex items-start" role="listitem">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                      Troubles alimentaires
                    </li>
                    <li className="flex items-start" role="listitem">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                      Obésité avec complications
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg">
                <h4 className="text-2xl font-bold mb-4">Avantages CNS</h4>
                <div className="space-y-4" role="list">
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Consultations remboursées à 100%</span>
                  </div>
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Suivi personnalisé et régulier</span>
                  </div>
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Plans alimentaires adaptés</span>
                  </div>
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Coordination avec votre médecin</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Vous avez une prescription médicale ?
                </p>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 w-full"
                  onClick={() => openDoctena()}
                  aria-label="Réserver consultation CNS avec prescription médicale"
                >
                  <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                  Réserver ma Consultation CNS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Consultations Section */}
      <section id="prive" className="py-16 px-4 bg-gray-50" aria-labelledby="prive-title">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Activity className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <span className="text-blue-800 font-semibold">Consultation Privée</span>
            </div>
            <h3 id="prive-title" className="text-3xl font-bold text-gray-900 mb-4">Suivi Nutritionnel Personnalisé</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Consultations directes sans prescription pour optimiser votre santé, 
              perdre du poids, améliorer vos performances ou adopter une alimentation équilibrée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="hover:shadow-lg transition-shadow border-blue-100">
              <Card>
                <CardHeader className="text-center">
                  <Utensils className="h-12 w-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle className="text-blue-800">Rééquilibrage Alimentaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center mb-4">
                    Apprenez à mieux manger au quotidien avec des conseils pratiques et durables
                  </CardDescription>
                  <ul className="text-sm text-gray-600 space-y-1" role="list">
                    <li role="listitem">• Analyse de vos habitudes</li>
                    <li role="listitem">• Plans de repas personnalisés</li>
                    <li role="listitem">• Recettes et astuces pratiques</li>
                  </ul>
                </CardContent>
              </Card>
            </article>

            <article className="hover:shadow-lg transition-shadow border-blue-100">
              <Card>
                <CardHeader className="text-center">
                  <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle className="text-blue-800">Gestion du Poids</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center mb-4">
                    Atteignez vos objectifs de poids de manière saine et durable
                  </CardDescription>
                  <ul className="text-sm text-gray-600 space-y-1" role="list">
                    <li role="listitem">• Approche progressive</li>
                    <li role="listitem">• Suivi régulier personnalisé</li>
                    <li role="listitem">• Maintien des résultats</li>
                  </ul>
                </CardContent>
              </Card>
            </article>

            <article className="hover:shadow-lg transition-shadow border-blue-100">
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle className="text-blue-800">Nutrition Familiale</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center mb-4">
                    Conseils adaptés pour toute la famille, enfants et adultes
                  </CardDescription>
                  <ul className="text-sm text-gray-600 space-y-1" role="list">
                    <li role="listitem">• Nutrition infantile</li>
                    <li role="listitem">• Repas familiaux équilibrés</li>
                    <li role="listitem">• Éducation alimentaire</li>
                  </ul>
                </CardContent>
              </Card>
            </article>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Consultation Privée</h4>
            <p className="text-gray-600 mb-6">
              Accès direct sans prescription médicale. Première consultation complète avec plan personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => openDoctena()}
                aria-label="Réserver consultation privée diététique Luxembourg"
              >
                <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                Réserver ma Consultation Privée
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('cns')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="En savoir plus sur les consultations"
              >
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinets Section */}
      <section id="cabinets" className="py-16 px-4 bg-white" aria-labelledby="cabinets-title">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 id="cabinets-title" className="text-3xl font-bold text-gray-900 mb-4">Mes Cabinets</h3>
            <p className="text-gray-600">
              Je vous reçois dans trois cabinets situés au Luxembourg pour votre confort et proximité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="hover:shadow-lg transition-shadow">
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle className="text-green-800">Luxembourg Ville</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">Cabinet principal au cœur de la capitale</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22943', '_blank')}
                    aria-label="Prendre rendez-vous cabinet Luxembourg ville"
                  >
                    <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                    RDV Luxembourg
                  </Button>
                </CardContent>
              </Card>
            </article>

            <article className="hover:shadow-lg transition-shadow">
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle className="text-green-800">Ettelbruck</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">Cabinet accessible dans le nord du pays</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#24538', '_blank')}
                    aria-label="Prendre rendez-vous cabinet Ettelbruck"
                  >
                    <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                    RDV Ettelbruck
                  </Button>
                </CardContent>
              </Card>
            </article>

            <article className="hover:shadow-lg transition-shadow">
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                  <CardTitle className="text-green-800">Insenborn</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">Cabinet de proximité pour votre confort</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22919', '_blank')}
                    aria-label="Prendre rendez-vous cabinet Insenborn"
                  >
                    <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                    RDV Insenborn
                  </Button>
                </CardContent>
              </Card>
            </article>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" aria-hidden="true" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">Prise de Rendez-vous</h4>
              <p className="text-gray-600 mb-4">
                Réservez facilement votre consultation en ligne via Doctena
              </p>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874', '_blank')}
                aria-label="Prendre rendez-vous sur Doctena - tous cabinets"
              >
                <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                Prendre RDV sur Doctena
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Now focused on Doctena CTA */}
      <section id="contact" className="py-16 px-4 bg-green-50" aria-labelledby="contact-title">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 id="contact-title" className="text-3xl font-bold text-gray-900 mb-6">Prêt à Commencer ?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Réservez votre consultation en quelques clics sur Doctena. 
            Choisissez le cabinet le plus proche de chez vous.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <article className="hover:shadow-lg transition-shadow cursor-pointer" 
                  onClick={() => openDoctena('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22943')}>
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle className="text-green-800">Luxembourg</CardTitle>
                  <CardDescription>Centre-ville</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-green-600 hover:bg-green-700" aria-label="RDV Luxembourg centre-ville">
                    <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                    RDV Luxembourg
                  </Button>
                </CardContent>
              </Card>
            </article>

            <article className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => openDoctena('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#24538')}>
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle className="text-green-800">Ettelbruck</CardTitle>
                  <CardDescription>Nord du Luxembourg</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-green-600 hover:bg-green-700" aria-label="RDV Ettelbruck nord Luxembourg">
                    <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                    RDV Ettelbruck
                  </Button>
                </CardContent>
              </Card>
            </article>

            <article className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => openDoctena('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22919')}>
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle className="text-green-800">Insenborn</CardTitle>
                  <CardDescription>Proximité et confort</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-green-600 hover:bg-green-700" aria-label="RDV Insenborn proximité">
                    <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                    RDV Insenborn
                  </Button>
                </CardContent>
              </Card>
            </article>
          </div>

          <address className="bg-white p-8 rounded-lg shadow-md not-italic">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Phone className="h-6 w-6 text-green-600" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-gray-900">Questions ?</h4>
                <p className="text-gray-600">+352 XX XX XX XX</p>
              </div>
              <Mail className="h-6 w-6 text-green-600 ml-8" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">gabriela@conseildietetique.lu</p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-12 py-4"
              onClick={() => openDoctena()}
              aria-label="Prendre rendez-vous maintenant sur Doctena"
            >
              <Calendar className="h-6 w-6 mr-3" aria-hidden="true" />
              Prendre RDV Maintenant
            </Button>
          </address>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4" role="contentinfo">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6" aria-hidden="true" />
                <div>
                  <h4 className="text-xl font-bold">Gabriela Ferent</h4>
                  <p className="text-green-100 text-sm">Diététicienne Diplômée Luxembourg</p>
                </div>
              </div>
              <p className="text-green-100 leading-relaxed">
                Votre partenaire de confiance pour une nutrition saine et équilibrée au Luxembourg.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Mes Services</h5>
              <ul className="space-y-2 text-green-100" role="list">
                <li role="listitem">Consultation nutritionnelle CNS</li>
                <li role="listitem">Gestion du poids</li>
                <li role="listitem">Nutrition familiale</li>
                <li role="listitem">Suivi personnalisé</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Mes Cabinets</h5>
              <div className="space-y-2 text-green-100">
                <p>Luxembourg - Centre-ville</p>
                <p>Ettelbruck - Nord</p>
                <p>Insenborn - Proximité</p>
                <p className="mt-4">RDV sur Doctena</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 Gabriela Ferent - Diététicienne Luxembourg. Tous droits réservés.</p>
            <p className="text-sm mt-2">
              Consultations diététiques remboursées CNS | Nutrition Luxembourg | 
              <a href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874" 
                 className="hover:text-white underline ml-1"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Lien vers Doctena pour prendre rendez-vous">
                RDV sur Doctena
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
