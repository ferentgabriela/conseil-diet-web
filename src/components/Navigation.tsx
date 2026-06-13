
import React from 'react';
import { Menu, X, MapPin, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavigationLogo from './navigation/NavigationLogo';
import NavigationMenu from './navigation/NavigationMenu';
import NavigationCTA from './navigation/NavigationCTA';
import MobileMenu from './navigation/MobileMenu';
import { scrollToElement, createThrottledScrollListener } from '../utils/scrollUtils';

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header effects with throttling
  useEffect(() => {
    const handleScroll = createThrottledScrollListener(setIsScrolled);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsMenuOpen(false);
  };

  const scrollToCabinets = () => {
    if (location.pathname === '/') {
      scrollToSection('cabinets');
    } else {
      navigate('/#cabinets');
    }
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
                <Award className="h-3 w-3 md:h-4 md:w-4" />
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
                      <div className="flex items-center gap-4 lg:gap-8">
                        <NavigationLogo />
                        <div className="flex">
                          <NavigationMenu scrollToSection={scrollToSection} />
                        </div>
                      </div>
            
                      {/* Desktop CTA Button */}
                      <div className="hidden lg:block">
                        <NavigationCTA scrollToCabinets={scrollToCabinets} />
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
