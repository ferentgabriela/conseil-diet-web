
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import { ChatPopup } from '@/components/ChatPopup';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CabinetsSection from '@/components/CabinetsSection';
import ResourcesSection from '@/components/ResourcesSection';
import DoctenaTestimonialsSection from '@/components/DoctenaTestimonialsSection';
import FloatingCTA from '@/components/FloatingCTA';
import AuthorSection from '@/components/AuthorSection';
import FAQBlogSection from '@/components/FAQBlogSection';
import AISummaryBlock from '@/components/AISummaryBlock';

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
      <ServicesSection />
      <CabinetsSection />
      <AuthorSection />
      <AboutSection />
      <FAQBlogSection />
      <ResourcesSection />
      <DoctenaTestimonialsSection />
      <FAQSection onOpenChat={handleOpenChat} />
      <AISummaryBlock />
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
      <FloatingCTA />
    </div>
  );
};

export default Index;
