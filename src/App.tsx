
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ErrorBoundary from '@/components/ErrorBoundary';
import { Suspense, lazy } from "react";

// Lazy load all page components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/404"));
const Admin404s = lazy(() => import("./pages/Admin404s"));
const Custom404 = lazy(() => import("./pages/Custom404"));
const NutritionMenopause = lazy(() => import("./pages/articles/NutritionMenopause"));
const AllaitementPertePoids = lazy(() => import("./pages/articles/AllaitementPertePoids"));
const DiabeteAliments = lazy(() => import("./pages/articles/DiabeteAliments"));
const CholesterolAlimentation = lazy(() => import("./pages/articles/CholesterolAlimentation"));
const TroublesDigestifs = lazy(() => import("./pages/articles/TroublesDigestifs"));
const PertePoidsApres40 = lazy(() => import("./pages/articles/PertePoidsApres40"));
const HypertensionRegimeDash = lazy(() => import("./pages/articles/HypertensionRegimeDash"));
const ThyroideAlimentation = lazy(() => import("./pages/articles/ThyroideAlimentation"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const TarifsPriseEnCharge = lazy(() => import("./pages/TarifsPriseEnCharge"));
const Prestations = lazy(() => import("./pages/Prestations"));
const Transparence = lazy(() => import("./pages/Transparence"));
const Contact = lazy(() => import("./pages/Contact"));

const SafeAnalytics = () => {
  try {
    return <Analytics />;
  } catch (error) {
    // Silent error handling for analytics to prevent console errors
    return null;
  }
};

const SafeSpeedInsights = () => {
  try {
    return <SpeedInsights />;
  } catch (error) {
    // Silent error handling for speed insights to prevent console errors
    return null;
  }
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <SafeAnalytics />
          <SafeSpeedInsights />
          <BrowserRouter>
            <ScrollRestoration />
          <Routes>
          <Route path="/" element={<Suspense fallback={<div>Chargement...</div>}><Index /></Suspense>} />
          <Route path="/articles/nutrition-menopause-guide" element={<Suspense fallback={<div>Chargement...</div>}><NutritionMenopause /></Suspense>} />
          <Route path="/articles/allaitement-perte-poids" element={<Suspense fallback={<div>Chargement...</div>}><AllaitementPertePoids /></Suspense>} />
          <Route path="/articles/diabete-aliments-recommandes" element={<Suspense fallback={<div>Chargement...</div>}><DiabeteAliments /></Suspense>} />
          <Route path="/articles/cholesterol-alimentation" element={<Suspense fallback={<div>Chargement...</div>}><CholesterolAlimentation /></Suspense>} />
          <Route path="/articles/troubles-digestifs-solutions" element={<Suspense fallback={<div>Chargement...</div>}><TroublesDigestifs /></Suspense>} />
          <Route path="/articles/perte-poids-apres-40" element={<Suspense fallback={<div>Chargement...</div>}><PertePoidsApres40 /></Suspense>} />
          <Route path="/articles/hypertension-regime-dash" element={<Suspense fallback={<div>Chargement...</div>}><HypertensionRegimeDash /></Suspense>} />
          <Route path="/articles/thyroide-alimentation" element={<Suspense fallback={<div>Chargement...</div>}><ThyroideAlimentation /></Suspense>} />
          <Route path="/admin/404s" element={<Suspense fallback={<div>Chargement...</div>}><Admin404s /></Suspense>} />
          <Route path="/mentions-legales" element={<Suspense fallback={<div>Chargement...</div>}><MentionsLegales /></Suspense>} />
          <Route path="/tarifs-prise-en-charge" element={<Suspense fallback={<div>Chargement...</div>}><TarifsPriseEnCharge /></Suspense>} />
          <Route path="/prestations" element={<Suspense fallback={<div>Chargement...</div>}><Prestations /></Suspense>} />
          <Route path="/transparence" element={<Suspense fallback={<div>Chargement...</div>}><Transparence /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div>Chargement...</div>}><Contact /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Suspense fallback={<div>Chargement...</div>}><NotFound /></Suspense>} />
        </Routes>
      </BrowserRouter>
      </ErrorBoundary>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
