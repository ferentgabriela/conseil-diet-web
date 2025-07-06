import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const StickyBookingBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      const trustBarElement = document.querySelector('div[class*="bg-green-50"]');
      const navigationElement = document.querySelector('nav');
      const stickyBarElement = document.querySelector('[data-sticky-booking-bar]');
      
      const trustBarHeight = trustBarElement ? trustBarElement.getBoundingClientRect().height : 40;
      const navigationHeight = navigationElement ? navigationElement.getBoundingClientRect().height : 88;
      const stickyBarHeight = stickyBarElement ? stickyBarElement.getBoundingClientRect().height : 60;
      const extraPadding = 20;
      
      const totalOffset = trustBarHeight + navigationHeight + stickyBarHeight + extraPadding;
      
      const elementPosition = cabinetsSection.getBoundingClientRect().top + window.scrollY;
      const targetPosition = Math.max(0, elementPosition - totalOffset);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sticky Bar - Top (pushes content down) */}
      <div 
        className={`hidden md:block fixed top-[128px] left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        style={{ 
          backgroundColor: '#2E8B57',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
        data-sticky-booking-bar
      >
        <div className="container mx-auto px-5 py-2">
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm font-semibold text-white">
              📅 Réservez votre consultation nutritionnelle – Disponibilités cette semaine
            </span>
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200"
              style={{ color: '#2E8B57' }}
              aria-label="Choisir votre cabinet pour réserver votre consultation"
            >
              <Calendar className="h-4 w-4" />
              Choisir mon cabinet
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar - Bottom */}
      <div 
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}
        style={{ 
          backgroundColor: '#2E8B57',
          boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <div className="px-4 py-3">
          <div className="text-center mb-2">
            <span className="text-xs font-semibold text-white">
              📅 Réservez votre consultation nutritionnelle – Disponibilités cette semaine
            </span>
          </div>
          <button
            onClick={scrollToCabinets}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200 min-h-[48px]"
            style={{ color: '#2E8B57' }}
            aria-label="Choisir votre cabinet pour réserver votre consultation"
          >
            <Calendar className="h-5 w-5" />
            Choisir mon cabinet
          </button>
        </div>
      </div>

      {/* Desktop spacing to push content down when bar is visible */}
      <div 
        className={`hidden md:block transition-all duration-300 ease-in-out ${
          isVisible ? 'h-[60px]' : 'h-0'
        }`}
        aria-hidden="true" 
      />

      {/* Mobile bottom padding when bar is visible */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isVisible ? 'h-[100px]' : 'h-0'
        }`}
        aria-hidden="true" 
      />
    </>
  );
};

export default StickyBookingBar;