
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
      // Use a much larger offset to ensure the title is completely visible
      // Trust bar is 40px + Navigation height + section padding + title space
      const trustBarHeight = 40;
      const navigationElement = document.querySelector('nav');
      const navigationHeight = navigationElement ? navigationElement.offsetHeight : 88;
      const totalHeaderHeight = trustBarHeight + navigationHeight;
      
      // Increase padding significantly to ensure title visibility
      const extraPadding = 80; // Increased from 20px to 80px
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
      <TrustBar />

      {/* Main Navigation */}
      <nav className={`bg-white shadow-lg fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-white/95 shadow-xl' : ''
      }`} style={{ top: '40px' }}>
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
    </>
  );
};

export default Navigation;
