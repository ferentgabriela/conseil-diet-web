
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
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-700">
              Gabriela Ferent
            </div>
            <div className="ml-2 text-sm text-gray-600 hidden sm:block">
              Diététicienne Luxembourg
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('cabinets')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Cabinets
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              FAQ
            </button>
            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Réserver maintenant
            </a>
          </div>

          {/* Enhanced Contact Info with phone number */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center hover:text-green-600 transition-colors cursor-pointer">
              <Phone className="h-4 w-4 mr-1" />
              <a href="tel:+352123456789">+352 12 34 56 789</a>
            </div>
            <div className="flex items-center hover:text-green-600 transition-colors">
              <Mail className="h-4 w-4 mr-1" />
              <a href="mailto:gabriela@conseildietetique.lu">gabriela@conseildietetique.lu</a>
            </div>
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
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('cabinets')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Cabinets
              </button>
              <button
                onClick={() => scrollToSection('apropos')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                FAQ
              </button>
              
              {/* Mobile contact info */}
              <div className="border-t pt-4 space-y-2">
                <a href="tel:+352123456789" className="flex items-center text-gray-600 hover:text-green-600">
                  <Phone className="h-4 w-4 mr-2" />
                  +352 12 34 56 789
                </a>
                <a href="mailto:gabriela@conseildietetique.lu" className="flex items-center text-gray-600 hover:text-green-600">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </div>
              
              <a
                href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-center font-semibold"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
