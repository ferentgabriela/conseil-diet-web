
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import StickyBookingBar from '@/components/StickyBookingBar';
import HeroSection from '@/components/HeroSection';
import SEOContentSection from '@/components/SEOContentSection';
import AboutPracticeSection from '@/components/AboutPracticeSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import TransformationStoriesSection from '@/components/TransformationStoriesSection';

import DoctenaTestimonialsSection from '@/components/DoctenaTestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import ArticlesPopulairesSection from '@/components/ArticlesPopulairesSection';
import CabinetsSection from '@/components/CabinetsSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import { ChatPopup } from '@/components/ChatPopup';
import { ChatCTAPopup } from '@/components/ChatCTAPopup';
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
      {/* Noscript content for SEO */}
      <noscript>
        <div className="container mx-auto px-4 py-8">
          <h1>Diététicienne à Luxembourg — Gabriela Ferent</h1>
          <p>Gabriela Ferent, diététicienne nutritionniste diplômée, vous accompagne dans votre parcours de santé au Luxembourg. Consultations sur prescription médicale prises en charge par la CNS pour diabète, obésité, troubles alimentaires, hypertension et dyslipidémies. 3 cabinets : Luxembourg-Ville, Ettelbruck, Insenborn. Rendez-vous via Doctena. Spécialisations : perte de poids, diabète, cholestérol, ménopause, thyroïde, troubles digestifs.</p>
        </div>
      </noscript>
      
      <Navigation />
      
      <HeroSection />
      <SEOContentSection />
      <AboutPracticeSection />
      <HowItWorksSection />
      <ServicesSection />
      <TransformationStoriesSection />
      <CabinetsSection />
      
      <DoctenaTestimonialsSection />
      <BlogSection />
      <ArticlesPopulairesSection />
      <FAQSection onOpenChat={handleOpenChat} />
      <LocationsSection />
      
      <Footer />
      
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
      <ChatCTAPopup onOpenChat={handleOpenChat} />
      <CookieConsentBanner onConsentGiven={(consent) => {
        console.log('Cookie consent updated:', consent);
      }} />
    </div>
  );
};

export default Index;
