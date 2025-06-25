
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

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      // Use a more reliable method to calculate the exact header height
      // Trust bar is 40px + Navigation height (which includes py-4 padding)
      const trustBarHeight = 40;
      const navigationElement = document.querySelector('nav');
      const navigationHeight = navigationElement ? navigationElement.offsetHeight : 88;
      const totalHeaderHeight = trustBarHeight + navigationHeight;
      
      // Add some extra padding to ensure the title is clearly visible
      const extraPadding = 20;
      const finalOffset = totalHeaderHeight + extraPadding;

      console.log('Trust bar height:', trustBarHeight);
      console.log('Navigation height:', navigationHeight);
      console.log('Total header height:', totalHeaderHeight);
      console.log('Final offset:', finalOffset);

      // Get element position and scroll to it
      const elementPosition = cabinetsSection.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementPosition - finalOffset;

      console.log('Element position:', elementPosition);
      console.log('Target scroll position:', targetPosition);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-green-50 border-b border-green-100 py-2 fixed w-full top-0 z-50">
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
      <nav className={`bg-white shadow-lg fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-white/95 shadow-xl' : ''
      }`} style={{ top: '40px' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/78e4cbae-9ecc-4ed6-808f-a5c42d697691.png" 
                alt="Gabriela Ferent - Diététicienne Luxembourg" 
                className="h-12 md:h-14"
              />
            </div>

            {/* Desktop Menu - Journey Navigation - Centered and Larger */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-8 ml-8">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('apropos')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
              >
                Pourquoi Gabriela ?
              </button>
              <button
                onClick={() => scrollToSection('processus')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
              >
                Comment ça marche
              </button>
              <button
                onClick={() => scrollToSection('transformations')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
              >
                Résultats de patients
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-lg hover-scale"
              >
                Consultations
              </button>
            </div>

            {/* Desktop CTA - Enhanced */}
            <div className="hidden md:block">
              <button
                onClick={scrollToCabinets}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover-scale"
              >
                <Calendar className="h-5 w-5" />
                Réserver ma consultation
              </button>
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
                  Consultations
                </button>
                
                <button
                  onClick={scrollToCabinets}
                  className="inline-flex items-center gap-2 justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg"
                >
                  <Calendar className="h-5 w-5" />
                  Réserver ma consultation
                </button>
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
