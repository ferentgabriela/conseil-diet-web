
import React from 'react';
import { Menu, X, Calendar, MapPin, Star, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-green-50 border-b border-green-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-green-700">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span className="font-medium">Remboursement CNS jusqu'à 80%</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span className="font-medium">1000+ patients accompagnés</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span className="font-medium">3 cabinets au Luxembourg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-white/95 shadow-xl' : ''
      }`} style={{ top: '0', marginTop: '40px' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section with Uploaded Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/b0d29e69-60af-4752-bce9-cc5a5a110812.png" 
                alt="Gabriela Ferent - Diététicienne Luxembourg"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu - Journey Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-6 ml-8">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-sm hover-scale"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('apropos')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-sm hover-scale"
              >
                Pourquoi Gabriela ?
              </button>
              <button
                onClick={() => scrollToSection('processus')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-sm hover-scale"
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollToSection('transformations')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-sm hover-scale"
              >
                Résultats de patients
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-sm hover-scale"
              >
                Consultations & Tarifs
              </button>
            </div>

            {/* Desktop CTA - Enhanced */}
            <div className="hidden md:block">
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover-scale"
              >
                <Calendar className="h-5 w-5" />
                Réserver ma consultation
              </a>
              <div className="text-xs text-green-700 font-medium mt-1 text-center">
                🔥 Places disponibles cette semaine
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('accueil')}
                  className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection('apropos')}
                  className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
                >
                  Pourquoi Gabriela ?
                </button>
                <button
                  onClick={() => scrollToSection('processus')}
                  className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
                >
                  Comment ça marche
                </button>
                <button
                  onClick={() => scrollToSection('transformations')}
                  className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
                >
                  Résultats de patients
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
                >
                  Consultations & Tarifs
                </button>
                
                <a
                  href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg"
                >
                  <Calendar className="h-5 w-5" />
                  Réserver ma consultation
                </a>
                <div className="text-xs text-green-700 font-medium text-center">
                  🔥 Places disponibles cette semaine
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
