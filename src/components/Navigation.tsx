
import React from 'react';
import { Menu, X, MapPin, Users, Euro } from 'lucide-react';
import { useState, useEffect } from 'react';
import NavigationLogo from './navigation/NavigationLogo';
import NavigationMenu from './navigation/NavigationMenu';
import MobileMenu from './navigation/MobileMenu';

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
      // Calculate the exact offset for the fixed header
      const trustBarElement = document.querySelector('div[class*="bg-green-50"]');
      const navigationElement = document.querySelector('nav');
      
      const trustBarHeight = trustBarElement ? trustBarElement.getBoundingClientRect().height : 40;
      const navigationHeight = navigationElement ? navigationElement.getBoundingClientRect().height : 88;
      const totalOffset = trustBarHeight + navigationHeight + 20; // Added 20px padding
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = Math.max(0, elementPosition - totalOffset);
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      // Calculate the actual heights of fixed elements
      const trustBarElement = document.querySelector('div[class*="bg-green-50"]');
      const navigationElement = document.querySelector('nav');
      
      // Get actual heights
      const trustBarHeight = trustBarElement ? trustBarElement.getBoundingClientRect().height : 40;
      const navigationHeight = navigationElement ? navigationElement.getBoundingClientRect().height : 88;
      
      // Add significant padding to ensure the title is fully visible
      const extraPadding = 120; // Increased padding for better visibility
      const totalOffset = trustBarHeight + navigationHeight + extraPadding;

      console.log('Trust bar actual height:', trustBarHeight);
      console.log('Navigation actual height:', navigationHeight);
      console.log('Extra padding:', extraPadding);
      console.log('Total offset:', totalOffset);

      // Get the section's position and scroll with the calculated offset
      const elementPosition = cabinetsSection.getBoundingClientRect().top + window.scrollY;
      const targetPosition = Math.max(0, elementPosition - totalOffset);

      console.log('Element position:', elementPosition);
      console.log('Target scroll position:', targetPosition);
      console.log('Current scroll position:', window.scrollY);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Trust Bar with patient/location info */}
      <div className="w-full h-10 md:h-12" style={{ backgroundColor: 'hsl(var(--nav-trust-bar))' }}>
        <div className="container mx-auto px-2 md:px-4 h-full flex items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center gap-2 md:gap-4 lg:gap-8 text-xs md:text-sm font-semibold" style={{ color: 'hsl(var(--nav-trust-text))' }}>
              <div className="flex items-center gap-1 md:gap-2">
                <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">3 cabinets</span>
                <span className="sm:hidden">3 lieux</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Users className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">1000+ patients satisfaits</span>
                <span className="sm:hidden">1000+ clients</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Euro className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Remboursé jusqu'à 80%</span>
                <span className="sm:hidden">Remboursé</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`nav-shadow transition-all duration-300 ${
        isScrolled ? 'scrolled backdrop-blur-md bg-white/95' : ''
      }`} style={{ backgroundColor: 'hsl(var(--nav-background))' }}>
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex justify-between items-center py-2 md:py-4">
            <NavigationLogo />
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <NavigationMenu scrollToSection={scrollToSection} />
            </div>

            {/* Spacer for desktop to balance layout */}
            <div className="hidden lg:block w-16"></div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
            </button>
          </div>

          <MobileMenu 
            isMenuOpen={isMenuOpen}
            scrollToSection={scrollToSection}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
