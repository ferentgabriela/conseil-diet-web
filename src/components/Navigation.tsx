
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import TrustBar from './navigation/TrustBar';
import NavigationLogo from './navigation/NavigationLogo';
import NavigationMenu from './navigation/NavigationMenu';
import NavigationCTA from './navigation/NavigationCTA';
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
      element.scrollIntoView({ behavior: 'smooth' });
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
    <div className="fixed top-0 left-0 right-0 z-50">
      <TrustBar />

      {/* Main Navigation */}
      <nav className={`bg-white shadow-lg transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-white/95 shadow-xl' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <NavigationLogo />
            <NavigationMenu scrollToSection={scrollToSection} />
            <NavigationCTA scrollToCabinets={scrollToCabinets} />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <MobileMenu 
            isMenuOpen={isMenuOpen}
            scrollToSection={scrollToSection}
            scrollToCabinets={scrollToCabinets}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
