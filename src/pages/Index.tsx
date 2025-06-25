
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
import BlogSection from '@/components/BlogSection';
import AISummaryBlock from '@/components/AISummaryBlock';
import Footer from '@/components/Footer';

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
      
      {/* Enhanced Story Arc Structure */}
      <NarrativeHeroSection />              {/* Problem → Emotional connection with lifestyle image */}
      <CombinedAboutAuthorSection />        {/* Why choose Gabriela */}
      <HowItWorksSection />                 {/* How the process works */}
      <TransformationStoriesSection />      {/* Real results & proof */}
      <NarrativeServicesSection />          {/* Services after trust is built */}
      <CabinetsSection />                   {/* Booking information */}
      <DoctenaTestimonialsSection />        {/* Additional social proof */}
      <BlogSection />                       {/* SEO-rich content & expertise */}
      <FAQSection onOpenChat={handleOpenChat} />  {/* Address final concerns */}
      <AISummaryBlock />                    {/* Final summary */}
      
      <Footer />                            {/* Contact information at bottom */}
      
      <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
    </div>
  );
};

export default Index;
