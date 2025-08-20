
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import NotFound from "./pages/404";
import Admin404s from "./pages/Admin404s";
import Custom404 from "./pages/Custom404";
import NutritionMenopause from "./pages/articles/NutritionMenopause";
import AllaitementPertePoids from "./pages/articles/AllaitementPertePoids";
import DiabeteAliments from "./pages/articles/DiabeteAliments";
import CholesterolAlimentation from "./pages/articles/CholesterolAlimentation";
import TroublesDigestifs from "./pages/articles/TroublesDigestifs";
import PertePoidsApres40 from "./pages/articles/PertePoidsApres40";
import HypertensionRegimeDash from "./pages/articles/HypertensionRegimeDash";
import ThyroideAlimentation from "./pages/articles/ThyroideAlimentation";
import MentionsLegales from "./pages/MentionsLegales";
import TarifsPriseEnCharge from "./pages/TarifsPriseEnCharge";

import Transparence from "./pages/Transparence";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <SpeedInsights />
        <BrowserRouter>
          <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles/nutrition-menopause-guide" element={<NutritionMenopause />} />
          <Route path="/articles/allaitement-perte-poids" element={<AllaitementPertePoids />} />
          <Route path="/articles/diabete-aliments-recommandes" element={<DiabeteAliments />} />
          <Route path="/articles/cholesterol-alimentation" element={<CholesterolAlimentation />} />
          <Route path="/articles/troubles-digestifs-solutions" element={<TroublesDigestifs />} />
          <Route path="/articles/perte-poids-apres-40" element={<PertePoidsApres40 />} />
          <Route path="/articles/hypertension-regime-dash" element={<HypertensionRegimeDash />} />
          <Route path="/articles/thyroide-alimentation" element={<ThyroideAlimentation />} />
          <Route path="/admin/404s" element={<Admin404s />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/tarifs-prise-en-charge" element={<TarifsPriseEnCharge />} />
          
          <Route path="/transparence" element={<Transparence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
