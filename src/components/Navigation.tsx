
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
        'accueil': 3,           // Hero section - minimal padding (5/2 = 2.5, rounded to 3)
        'apropos': 10,          // About section - halved (20/2 = 10)
        'processus': 13,        // Process section - halved (25/2 = 12.5, rounded to 13)
        'services': 10,         // Services section - halved (20/2 = 10)
        'transformations': 15,  // Testimonials section - halved (30/2 = 15)
        'cabinets': 18,         // Cabinets section - halved (35/2 = 17.5, rounded to 18)
        'faq': 13,              // FAQ section - halved (25/2 = 12.5, rounded to 13)
        'blog': 10,             // Blog section - halved (20/2 = 10)
        'locations': 15,        // Locations section - halved (30/2 = 15)
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
