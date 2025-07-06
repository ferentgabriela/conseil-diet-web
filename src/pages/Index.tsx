
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutPracticeSection from '@/components/AboutPracticeSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DoctenaTestimonialsSection from '@/components/DoctenaTestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import LocationsSection from '@/components/LocationsSection';
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
      <TestimonialsSection />
      <DoctenaTestimonialsSection />
      <BlogSection />
      <FAQSection onOpenChat={handleOpenChat} />
      <LocationsSection />
      
      <Footer />
      
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
    </div>
  );
};

export default Index;
