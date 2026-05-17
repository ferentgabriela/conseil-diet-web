
import React, { lazy, Suspense } from 'react';
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
import MobileStickyBooking from '@/components/MobileStickyBooking';

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
      {/* Noscript content for accessibility and Google Ads compliance */}
      <noscript>
        <div className="container mx-auto px-4 py-8 bg-white text-gray-900">
          <header>
            <h1 className="text-3xl font-bold mb-4">Diététicienne à Luxembourg — Gabriela Ferent</h1>
            <nav className="mb-6">
              <ul className="flex flex-wrap gap-4">
                <li><a href="#apropos" className="text-green-600 underline" title="En savoir plus sur notre approche">À propos</a></li>
                <li><a href="#services" className="text-green-600 underline" title="Découvrir nos services nutritionnels">Services</a></li>
                <li><a href="/#services" className="text-green-600 underline" title="Voir toutes nos prestations diététiques">Prestations</a></li>
                <li><a href="#contact" className="text-green-600 underline" title="Nous contacter pour plus d'informations">Contact</a></li>
              </ul>
            </nav>
          </header>
          
          <main>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Consultations sur prescription médicale</h2>
              <p className="mb-4">Gabriela Ferent, diététicienne nutritionniste diplômée, vous accompagne dans votre parcours de santé au Luxembourg. Consultations sur prescription médicale prises en charge par la CNS pour diabète, obésité, troubles alimentaires, hypertension et dyslipidémies.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Spécialisations: Perte de poids, diabète, obésité</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Perte de poids personnalisée après 40 ans</li>
                <li>Gestion du diabète par l'alimentation</li>
                <li>Réduction naturelle du cholestérol</li>
                <li>Nutrition pendant la ménopause</li>
                <li>Accompagnement des troubles thyroïdiens</li>
                <li>Amélioration des troubles digestifs</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3 Cabinets au Luxembourg</h2>
              <div className="grid gap-4">
                <div>
                  <h3 className="font-semibold">Luxembourg-Ville</h3>
                  <p>24, Boulevard de la Pétrusse, L-2320 Luxembourg</p>
                  <p>Téléphone: <a href="tel:+352521226" className="text-green-600" title="Appeler le cabinet de Luxembourg-Ville">52 12 26</a></p>
                </div>
                <div>
                  <h3 className="font-semibold">Ettelbruck</h3>
                  <p>19, Rue du Marché, L-9280 Diekirch</p>
                  <p>Téléphone: <a href="tel:+352621479503" className="text-green-600" title="Appeler le cabinet d'Ettelbruck">621 479 503</a></p>
                </div>
                <div>
                  <h3 className="font-semibold">Insenborn</h3>  
                  <p>11, Duerfstrooss, L-8413 Insenborn</p>
                  <p>Téléphone: <a href="tel:+352621479503" className="text-green-600" title="Appeler le cabinet d'Insenborn">621 479 503</a></p>
                </div>
              </div>
              <p className="mt-4"><strong>Rendez-vous via <a href="https://www.doctena.lu" className="text-green-600 underline" target="_blank" rel="noopener" title="Réserver en ligne sur Doctena">Doctena</a></strong></p>
            </section>
          </main>
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
      
      <MobileStickyBooking />
      <Suspense fallback={null}>
        <CookieConsentBanner onConsentGiven={(consent) => {
          console.log('Cookie consent updated:', consent);
        }} />
      </Suspense>
    </div>
  );
};

export default Index;
