
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutPracticeSection from '@/components/AboutPracticeSection';
import ServicesSection from '@/components/ServicesSection';
import DoctenaTestimonialsSection from '@/components/DoctenaTestimonialsSection';
import FAQSection from '@/components/FAQSection';
import LocationsSection from '@/components/LocationsSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import { ChatPopup } from '@/components/ChatPopup';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroSection />
      <AboutPracticeSection />
      <ServicesSection />
      <DoctenaTestimonialsSection />
      <FAQSection onOpenChat={handleOpenChat} />
      <LocationsSection />
      <FinalCTASection />
      
      <Footer />
      
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
    </div>
  );
};

export default Index;
