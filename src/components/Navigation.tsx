
import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-gray-900">
              Gabriela Ferent
            </div>
            <div className="text-base text-green-600 font-medium">
              Diététicienne Nutritionniste Certifiée
            </div>
          </div>

          {/* Desktop Menu - Story Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-base"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-base"
            >
              Pourquoi
            </button>
            <button
              onClick={() => scrollToSection('processus')}
              className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-base"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection('transformations')}
              className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-base"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-800 hover:text-green-600 transition-colors font-semibold text-base"
            >
              Services
            </button>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              RDV disponible
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
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
                Pourquoi
              </button>
              <button
                onClick={() => scrollToSection('processus')}
                className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
              >
                Processus
              </button>
              <button
                onClick={() => scrollToSection('transformations')}
                className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
              >
                Témoignages
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-800 hover:text-green-600 transition-colors text-left font-semibold"
              >
                Services
              </button>
              
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-center font-semibold"
              >
                RDV disponible
              </a>
            </div>
          </div>
        )}
      </div>
      
      {/* Contact Information at Bottom */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
            <div className="flex items-center hover:text-green-600 transition-colors cursor-pointer">
              <Phone className="h-4 w-4 mr-1" />
              <a href="tel:+352691379172">+352 691 379 172</a>
            </div>
            <div className="flex items-center hover:text-green-600 transition-colors">
              <Mail className="h-4 w-4 mr-1" />
              <a href="mailto:gabriela.ferent@conseildietetique.lu">gabriela.ferent@conseildietetique.lu</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
