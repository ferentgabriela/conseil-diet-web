import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Utensils, Calendar, Phone, Mail, MapPin, Clock, CheckCircle, FileText, Stethoscope, Activity, ExternalLink } from "lucide-react";
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

      {/* Hero Section with Background Image */}
      <section id="accueil" className="relative py-20 px-4 bg-gradient-to-r from-green-600/10 to-blue-600/10" role="main">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Consultations Diététiques au Luxembourg
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed bg-white/90 p-6 rounded-lg shadow-lg">
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
              className="text-lg px-8 py-4 bg-white/90 hover:bg-white"
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
            <h3 id="cns-title" className="text-3xl font-bold text-gray-900 mb-4">Suivi Diététique sur Prescription Médicale</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              La CNS (Caisse Nationale de Santé) rembourse les consultations diététiques sur prescription médicale 
              pour des pathologies spécifiques reconnues. Bénéficiez d'un accompagnement nutritionnel professionnel 
              pris en charge à 100%.
            </p>
            
            {/* Official CNS Resources */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="outline" 
                className="text-sm"
                onClick={() => window.open('https://cns.public.lu/fr/assure/remboursements/prestations-remboursees/prestations-paramedicales/dieteticiens.html', '_blank')}
                aria-label="Consulter la documentation officielle CNS"
              >
                <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                Documentation Officielle CNS
              </Button>
              <Button 
                variant="outline" 
                className="text-sm"
                onClick={() => window.open('https://youtu.be/MM7UIP9_XZ4?si=OSIpYuuHjba5yP3F', '_blank')}
                aria-label="Voir la vidéo explicative CNS"
              >
                <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                Vidéo Explicative CNS
              </Button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Consultation médicale - diététicienne avec patient"
                className="w-full h-80 object-cover rounded-lg shadow-lg relative z-10"
              />
              
              {/* CNS Coverage Requirements */}
              <Card className="border-green-200 bg-green-50 mt-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-green-600" aria-hidden="true" />
                    <div>
                      <CardTitle className="text-green-800">Conditions de Remboursement CNS</CardTitle>
                      <CardDescription>Prescription médicale obligatoire</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-gray-900 mb-2">Étapes pour bénéficier du remboursement :</h5>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                        <li>Consultation chez votre médecin traitant</li>
                        <li>Prescription médicale mentionnant la pathologie</li>
                        <li>Prise de rendez-vous chez le diététicien</li>
                        <li>Remboursement automatique par la CNS</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <strong>Important :</strong> Seules certaines pathologies donnent droit au remboursement. 
                        Consultez votre médecin pour vérifier si votre condition est couverte.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Pathologies covered by CNS */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <Stethoscope className="h-6 w-6 mr-2" aria-hidden="true" />
                    Pathologies Couvertes par la CNS
                  </CardTitle>
                  <CardDescription>Selon la documentation officielle CNS</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Pathologies Métaboliques :</h5>
                      <ul className="space-y-2 text-sm text-gray-700" role="list">
                        <li className="flex items-start" role="listitem">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          Diabète de type 1 et 2
                        </li>
                        <li className="flex items-start" role="listitem">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          Diabète gestationnel
                        </li>
                        <li className="flex items-start" role="listitem">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          Dyslipidémies
                        </li>
                        <li className="flex items-start" role="listitem">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          Obésité (IMC ≥ 30)
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Autres Pathologies :</h5>
                      <ul className="space-y-2 text-sm text-gray-700" role="list">
                        <li className="flex items-start" role="listitem">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          Maladies cardiovasculaires
                        </li>
                        <li className="flex items-start" role="listitem">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          Insuffisance rénale chronique
                        </li>
                        <li className="flex items-start" role="listitem">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          Troubles digestifs chroniques
                        </li>
                        <li className="flex items-start" role="listitem">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          Troubles du comportement alimentaire
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* CNS Benefits */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg">
                <h4 className="text-2xl font-bold mb-4">Avantages du Remboursement CNS</h4>
                <div className="space-y-4" role="list">
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Prise en charge à 100% des consultations</span>
                  </div>
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Suivi personnalisé et régulier</span>
                  </div>
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Plans alimentaires thérapeutiques adaptés</span>
                  </div>
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Coordination avec votre équipe médicale</span>
                  </div>
                  <div className="flex items-center space-x-3" role="listitem">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    <span>Pas d'avance de frais</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Vous avez une prescription médicale pour une pathologie couverte ?
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
                <p className="text-xs text-gray-500 mt-2">
                  Consultations remboursées à 100% par la CNS sur prescription médicale
                </p>
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
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Aliments sains et équilibrés"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Utensils className="h-12 w-12 text-white" aria-hidden="true" />
                    </div>
                  </div>
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
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Bien-être et activité physique"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Activity className="h-12 w-12 text-white" aria-hidden="true" />
                    </div>
                  </div>
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
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Famille autour d'une table"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" aria-hidden="true" />
                    </div>
                  </div>
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
              <Card className="h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Cabinet Luxembourg - salle de consultation moderne"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Principal
                  </div>
                </div>
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
              <Card className="h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Cabinet Ettelbruck - espace de consultation confortable"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
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
              <Card className="h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Cabinet Insenborn - environnement chaleureux et accueillant"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
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
                <p className="text-gray-600">+352691379172</p>
              </div>
              <Mail className="h-6 w-6 text-green-600 ml-8" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">gabriela.ferent@conseildietetique.lu</p>
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
