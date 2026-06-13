
import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import StickyBookingBar from '@/components/StickyBookingBar';
import HeroSection from '@/components/HeroSection';
import SEOContentSection from '@/components/SEOContentSection';
import AboutPracticeSection from '@/components/AboutPracticeSection';
import IndependenceSection from '@/components/IndependenceSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import TransformationStoriesSection from '@/components/TransformationStoriesSection';
import Footer from '@/components/Footer';

// Lazy-load below-fold components that use Radix UI (causes forced reflows on mount)
const DoctenaTestimonialsSection = lazy(() => import('@/components/DoctenaTestimonialsSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const BlogSection = lazy(() => import('@/components/BlogSection'));
const CabinetsSection = lazy(() => import('@/components/CabinetsSection'));
const TrustBadgesSection = lazy(() => import('@/components/TrustBadgesSection'));
const CookieConsentBanner = lazy(() => import('@/components/CookieConsentBanner').then(m => ({ default: m.CookieConsentBanner })));

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-[34px]">
      <Helmet>
        <title>Diététicienne Luxembourg | Gabriela Ferent</title>
        <meta name="description" content="Gabriela Ferent, diététicienne nutritionniste au Luxembourg. Consultations sur prescription médicale. Perte de poids, diabète, obésité. 3 cabinets." />
        <link rel="canonical" href="https://conseildietetique.lu/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Conseil Diététique Luxembourg" />
        <meta property="og:title" content="Diététicienne Luxembourg | Gabriela Ferent – Consultations sur prescription" />
        <meta property="og:description" content="Diététicienne nutritionniste au Luxembourg. Consultations sur prescription médicale. Perte de poids, diabète, obésité. RDV à Luxembourg-Ville, Ettelbruck, Insenborn." />
        <meta property="og:url" content="https://conseildietetique.lu/" />
        <meta property="og:image" content="https://conseildietetique.lu/og-image-dietician-luxembourg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diététicienne Luxembourg | Gabriela Ferent – Consultations sur prescription" />
        <meta name="twitter:description" content="Diététicienne nutritionniste au Luxembourg. Consultations sur prescription médicale. Perte de poids, diabète, obésité. RDV à Luxembourg-Ville, Ettelbruck, Insenborn." />
        <meta name="twitter:image" content="https://conseildietetique.lu/og-image-dietician-luxembourg.jpg" />
        <link rel="alternate" hreflang="fr-LU" href="https://conseildietetique.lu/" />
        <link rel="alternate" hreflang="x-default" href="https://conseildietetique.lu/" />
      </Helmet>
      {/* Noscript fallback for users without JavaScript */}
            <noscript>
              <div className="container mx-auto px-4 py-8 bg-white text-gray-900">
                <p className="text-center text-lg">
                  Ce site nécessite JavaScript pour fonctionner. Merci de l'activer dans les paramètres de votre navigateur.
                </p>
              </div>
            </noscript>
      
      <Navigation />
      
      <main>
      <HeroSection />
      <SEOContentSection />
      <AboutPracticeSection />
      <IndependenceSection />
      <HowItWorksSection />
      <ServicesSection />
      <TransformationStoriesSection />
      <Suspense fallback={null}>
        <CabinetsSection />
      </Suspense>
      
      <Suspense fallback={null}>
        <DoctenaTestimonialsSection />
        <BlogSection />
      </Suspense>
      
      <Suspense fallback={null}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={null}>
        <TrustBadgesSection />
      </Suspense>
      </main>
      <Footer />
      
      <StickyBookingBar />
      <Suspense fallback={null}>
        <CookieConsentBanner onConsentGiven={(consent) => {
          console.log('Cookie consent updated:', consent);
        }} />
      </Suspense>
    </div>
  );
};

export default Index;
