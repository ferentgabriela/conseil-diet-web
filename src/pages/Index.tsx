
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import FAQSection from '@/components/FAQSection';
import { ChatPopup } from '@/components/ChatPopup';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CabinetsSection from '@/components/CabinetsSection';
import ResourcesSection from '@/components/ResourcesSection';
import DoctenaTestimonialsSection from '@/components/DoctenaTestimonialsSection';
import FloatingCTA from '@/components/FloatingCTA';
import FAQBlogSection from '@/components/FAQBlogSection';
import AISummaryBlock from '@/components/AISummaryBlock';
import CombinedAboutAuthorSection from '@/components/CombinedAboutAuthorSection';

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
      <CombinedAboutAuthorSection />
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
