
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from '@/components/ErrorBoundary';
import { Suspense, lazy } from "react";
import LoadingFallback from "./components/LoadingFallback";

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

const Transparence = lazy(() => import("./pages/Transparence"));
const Contact = lazy(() => import("./pages/Contact"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollRestoration />
          <Routes>
          <Route path="/" element={<Suspense fallback={<LoadingFallback />}><Index /></Suspense>} />
          <Route path="/articles/nutrition-menopause-guide" element={<Suspense fallback={<LoadingFallback />}><NutritionMenopause /></Suspense>} />
          <Route path="/articles/allaitement-perte-poids" element={<Suspense fallback={<LoadingFallback />}><AllaitementPertePoids /></Suspense>} />
          <Route path="/articles/diabete-aliments-recommandes" element={<Suspense fallback={<LoadingFallback />}><DiabeteAliments /></Suspense>} />
          <Route path="/articles/cholesterol-alimentation" element={<Suspense fallback={<LoadingFallback />}><CholesterolAlimentation /></Suspense>} />
          <Route path="/articles/troubles-digestifs-solutions" element={<Suspense fallback={<LoadingFallback />}><TroublesDigestifs /></Suspense>} />
          <Route path="/articles/perte-poids-apres-40" element={<Suspense fallback={<LoadingFallback />}><PertePoidsApres40 /></Suspense>} />
          <Route path="/articles/hypertension-regime-dash" element={<Suspense fallback={<LoadingFallback />}><HypertensionRegimeDash /></Suspense>} />
          <Route path="/articles/thyroide-alimentation" element={<Suspense fallback={<LoadingFallback />}><ThyroideAlimentation /></Suspense>} />
          <Route path="/admin/404s" element={<Suspense fallback={<LoadingFallback />}><Admin404s /></Suspense>} />
          <Route path="/mentions-legales" element={<Suspense fallback={<LoadingFallback />}><MentionsLegales /></Suspense>} />
          <Route path="/tarifs-prise-en-charge" element={<Suspense fallback={<LoadingFallback />}><TarifsPriseEnCharge /></Suspense>} />
          
          <Route path="/transparence" element={<Suspense fallback={<LoadingFallback />}><Transparence /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Suspense fallback={<LoadingFallback />}><NotFound /></Suspense>} />
        </Routes>
      </BrowserRouter>
      </ErrorBoundary>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
