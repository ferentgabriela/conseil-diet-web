import React from 'react';
import { Calendar } from 'lucide-react';

const StickyBookingBar = () => {
  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      // Calculate offset for desktop (navigation + trust bar)
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

  return (
    <>
      {/* Desktop Sticky Bar - Top */}
      <div 
        className="hidden md:block fixed top-[128px] left-0 right-0 z-40 shadow-lg"
        style={{ backgroundColor: '#2E8B57' }}
        data-sticky-booking-bar
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">
              📅 Réservez votre consultation nutritionnelle – Disponibilités cette semaine
            </span>
            <button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
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
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 shadow-lg"
        style={{ backgroundColor: '#2E8B57' }}
      >
        <div className="px-4 py-4">
          <div className="text-center mb-3">
            <span className="text-sm font-semibold text-white">
              📅 Réservez votre consultation nutritionnelle – Disponibilités cette semaine
            </span>
          </div>
          <button
            onClick={scrollToCabinets}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 min-h-[52px]"
            style={{ color: '#2E8B57' }}
            aria-label="Choisir votre cabinet pour réserver votre consultation"
          >
            <Calendar className="h-5 w-5" />
            Choisir mon cabinet
          </button>
        </div>
      </div>

      {/* Mobile bottom padding to prevent content from being hidden behind the sticky bar */}
      <div className="md:hidden h-[120px]" aria-hidden="true" />

      {/* Desktop top padding to prevent content from being hidden behind the sticky bar */}
      <div className="hidden md:block h-[60px]" aria-hidden="true" />
    </>
  );
};

export default StickyBookingBar;