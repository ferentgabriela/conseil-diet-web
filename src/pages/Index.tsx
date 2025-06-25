
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import FAQSection from '@/components/FAQSection';
import { ChatPopup } from '@/components/ChatPopup';
import NarrativeHeroSection from '@/components/NarrativeHeroSection';
import CombinedAboutAuthorSection from '@/components/CombinedAboutAuthorSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TransformationStoriesSection from '@/components/TransformationStoriesSection';
import NarrativeServicesSection from '@/components/NarrativeServicesSection';
import CabinetsSection from '@/components/CabinetsSection';
import DoctenaTestimonialsSection from '@/components/DoctenaTestimonialsSection';
import FloatingCTA from '@/components/FloatingCTA';
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
      
      {/* Story Arc Structure */}
      <NarrativeHeroSection />              {/* Problem → Agitate → Solve */}
      <CombinedAboutAuthorSection />        {/* Why choose Gabriela */}
      <HowItWorksSection />                 {/* How the process works */}
      <TransformationStoriesSection />      {/* Real results & proof */}
      <NarrativeServicesSection />          {/* Services after trust is built */}
      <CabinetsSection />                   {/* Booking information */}
      <DoctenaTestimonialsSection />        {/* Additional social proof */}
      <FAQSection onOpenChat={handleOpenChat} />  {/* Address final concerns */}
      <AISummaryBlock />                    {/* Final summary */}
      
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
      <FloatingCTA />
    </div>
  );
};

export default Index;
