
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import StickyBookingBar from '@/components/StickyBookingBar';
import HeroSection from '@/components/HeroSection';
import AboutPracticeSection from '@/components/AboutPracticeSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import TransformationStoriesSection from '@/components/TransformationStoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DoctenaTestimonialsSection from '@/components/DoctenaTestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import CabinetsSection from '@/components/CabinetsSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import { ChatPopup } from '@/components/ChatPopup';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { usePatientTracking } from '@/hooks/usePatientTracking';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { trackInteraction, trackAppointmentAction, trackChatAction } = usePatientTracking();

  const handleOpenChat = () => {
    setIsChatOpen(true);
    trackChatAction('opened');
  };

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
    trackChatAction(isChatOpen ? 'closed' : 'opened');
  };

  return (
    <div className="min-h-screen bg-white pt-[34px]">
      <Navigation />
      
      <HeroSection />
      <AboutPracticeSection />
      <HowItWorksSection />
      <ServicesSection />
      <TransformationStoriesSection />
      <CabinetsSection />
      <TestimonialsSection />
      <DoctenaTestimonialsSection />
      <BlogSection />
      <FAQSection onOpenChat={handleOpenChat} />
      <LocationsSection />
      
      <Footer />
      
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
      <CookieConsentBanner onConsentGiven={(consent) => {
        console.log('Cookie consent updated:', consent);
      }} />
    </div>
  );
};

export default Index;
