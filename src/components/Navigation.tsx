
import React from 'react';
import { Menu, X, MapPin, Users, Euro } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NavigationLogo from './navigation/NavigationLogo';
import NavigationMenu from './navigation/NavigationMenu';
import MobileMenu from './navigation/MobileMenu';

const Navigation = () => {
  const { t } = useTranslation();
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
      // Get accurate measurements of fixed header elements
      const trustBarElement = document.querySelector('div[class*="bg-green-50"]') || 
                              document.querySelector('[style*="nav-trust-bar"]');
      const navigationElement = document.querySelector('nav');
      
      const trustBarHeight = trustBarElement ? trustBarElement.getBoundingClientRect().height : 40;
      const navigationHeight = navigationElement ? navigationElement.getBoundingClientRect().height : 88;
      
      // Section-specific padding adjustments for optimal positioning
      const sectionPadding = {
        'accueil': 0,           // Hero section - no extra padding
        'apropos': 0,           // About section - no extra padding
        'processus': 0,         // Process section - no extra padding
        'services': 0,          // Services section - no extra padding
        'transformations': 0,   // Testimonials section - no extra padding
        'cabinets': 0,          // Cabinets section - no extra padding
        'faq': 0,               // FAQ section - no extra padding
        'blog': 0,              // Blog section - no extra padding
        'locations': 0,         // Locations section - no extra padding
      } as const;
      
      const extraPadding = sectionPadding[sectionId as keyof typeof sectionPadding] || 40;
      const totalOffset = trustBarHeight + navigationHeight + extraPadding;
      
      // Calculate precise scroll position
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = Math.max(0, elementPosition - totalOffset);
      
      // Ensure we don't scroll past the bottom of the page
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScrollPosition = documentHeight - windowHeight;
      const finalPosition = Math.min(targetPosition, maxScrollPosition);
      
      window.scrollTo({
        top: finalPosition,
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
                <span className="hidden sm:inline">{t('trustBar.cabinets')}</span>
                <span className="sm:hidden">{t('trustBar.cabinetsMobile')}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Users className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">{t('trustBar.patients')}</span>
                <span className="sm:hidden">{t('trustBar.patientsMobile')}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Euro className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">{t('trustBar.reimbursed')}</span>
                <span className="sm:hidden">{t('trustBar.reimbursedMobile')}</span>
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


            {/* Mobile Section - Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
              </button>
            </div>
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
