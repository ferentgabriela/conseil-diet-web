
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Utensils, Calendar, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold text-green-800">Gabriela Ferent</h1>
                <p className="text-sm text-gray-600">Diététicienne Diplômée</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#accueil" className="text-gray-700 hover:text-green-600 transition-colors">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
              <a href="#cabinets" className="text-gray-700 hover:text-green-600 transition-colors">Cabinets</a>
              <a href="#apropos" className="text-gray-700 hover:text-green-600 transition-colors">À Propos</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </nav>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874', '_blank')}
            >
              <Calendar className="h-4 w-4 mr-2" />
              RDV sur Doctena
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Votre Bien-être Nutritionnel au Cœur du Luxembourg
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Je suis Gabriela Ferent, diététicienne diplômée, et je vous accompagne dans votre parcours vers une alimentation saine et équilibrée. 
            Avec une approche personnalisée et bienveillante, découvrez comment améliorer votre relation avec la nutrition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874', '_blank')}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Prendre RDV sur Doctena
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              En Savoir Plus
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mes Services Spécialisés</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services nutritionnels adaptés à vos besoins individuels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="text-center">
                <Utensils className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Consultation Nutritionnelle</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Évaluation complète de vos habitudes alimentaires avec plan personnalisé
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Gestion du Poids</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Accompagnement bienveillant pour atteindre et maintenir votre poids santé
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Nutrition Familiale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Conseils adaptés pour toute la famille, de l'enfance au troisième âge
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cabinets Section */}
      <section id="cabinets" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mes Cabinets</h3>
            <p className="text-gray-600">
              Je vous reçois dans trois cabinets situés au Luxembourg pour votre confort et proximité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Luxembourg</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Cabinet principal au cœur de la capitale</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22943', '_blank')}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  RDV Luxembourg
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Ettelbruck</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Cabinet accessible dans le nord du pays</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#24538', '_blank')}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  RDV Ettelbruck
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Insenborn</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Cabinet de proximité pour votre confort</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874#22919', '_blank')}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  RDV Insenborn
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="text-xl font-semibold text-green-800 mb-2">Prise de Rendez-vous</h4>
              <p className="text-gray-600 mb-4">
                Réservez facilement votre consultation en ligne via Doctena
              </p>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874', '_blank')}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Prendre RDV sur Doctena
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Mon Approche</h3>
              <p className="text-gray-600 text-lg">
                Une philosophie centrée sur l'écoute, la compréhension et l'accompagnement personnalisé
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-semibold text-green-800 mb-4">
                  Professionnalisme et Empathie
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  En tant que diététicienne diplômée, je crois qu'une nutrition saine commence par une relation de confiance. 
                  Je combine expertise scientifique et approche humaine pour vous offrir un accompagnement sur mesure 
                  dans mes trois cabinets au Luxembourg.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Je prends le temps de vous écouter, de comprendre vos défis et vos objectifs, 
                  pour construire ensemble un plan nutritionnel qui vous ressemble et qui s'adapte à votre style de vie.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h5 className="text-xl font-semibold text-green-800 mb-4">Pourquoi Me Choisir ?</h5>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Approche personnalisée et bienveillante
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Diététicienne diplômée et expérimentée
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Trois cabinets pour votre proximité
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Suivi régulier et ajustements personnalisés
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Méthodes fondées sur la science
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Me Contacter</h3>
            <p className="text-gray-600">
              Prêt à commencer votre parcours vers une meilleure nutrition ? Je suis là pour vous accompagner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h4 className="text-2xl font-semibold text-green-800 mb-6">Informations de Contact</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Téléphone</h5>
                    <p className="text-gray-600">+352 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Email</h5>
                    <p className="text-gray-600">gabriela@conseildietetique.lu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Rendez-vous</h5>
                    <p className="text-gray-600">Réservation en ligne sur Doctena</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h5 className="font-semibold text-green-800 mb-3">Mes Cabinets</h5>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <div className="font-medium text-gray-900">Luxembourg</div>
                    <p className="text-sm">Centre-ville</p>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Ettelbruck</div>
                    <p className="text-sm">Nord du Luxembourg</p>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Insenborn</div>
                    <p className="text-sm">Proximité et confort</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Demande de Consultation</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et je vous contacterai rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="+352 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cabinet préféré</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                      <option value="">Choisir un cabinet</option>
                      <option value="luxembourg">Luxembourg</option>
                      <option value="ettelbruck">Ettelbruck</option>
                      <option value="insenborn">Insenborn</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 h-32"
                      placeholder="Décrivez brièvement vos objectifs ou questions..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Envoyer la Demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6" />
                <div>
                  <h4 className="text-xl font-bold">Gabriela Ferent</h4>
                  <p className="text-green-100 text-sm">Diététicienne Diplômée</p>
                </div>
              </div>
              <p className="text-green-100 leading-relaxed">
                Votre partenaire de confiance pour une nutrition saine et équilibrée au Luxembourg.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Mes Services</h5>
              <ul className="space-y-2 text-green-100">
                <li>Consultation nutritionnelle</li>
                <li>Gestion du poids</li>
                <li>Nutrition familiale</li>
                <li>Suivi personnalisé</li>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
