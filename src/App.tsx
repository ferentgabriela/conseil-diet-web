
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConsultationChoice from "./pages/ConsultationChoice";
import LocationLuxembourg from "./pages/LocationLuxembourg";
import LocationEttelbruck from "./pages/LocationEttelbruck";
import LocationInsenborn from "./pages/LocationInsenborn";
import NutritionMenopause from "./pages/articles/NutritionMenopause";
import AllaitementPertePoids from "./pages/articles/AllaitementPertePoids";
import DiabeteAliments from "./pages/articles/DiabeteAliments";
import CholesterolAlimentation from "./pages/articles/CholesterolAlimentation";
import TroublesDigestifs from "./pages/articles/TroublesDigestifs";
import PertePoidsApres40 from "./pages/articles/PertePoidsApres40";
import HypertensionRegimeDash from "./pages/articles/HypertensionRegimeDash";
import ThyroideAlimentation from "./pages/articles/ThyroideAlimentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultation-choice" element={<ConsultationChoice />} />
          <Route path="/luxembourg" element={<LocationLuxembourg />} />
          <Route path="/ettelbruck" element={<LocationEttelbruck />} />
          <Route path="/insenborn" element={<LocationInsenborn />} />
          <Route path="/articles/nutrition-menopause-guide" element={<NutritionMenopause />} />
          <Route path="/articles/allaitement-perte-poids" element={<AllaitementPertePoids />} />
          <Route path="/articles/diabete-aliments-recommandes" element={<DiabeteAliments />} />
          <Route path="/articles/cholesterol-alimentation" element={<CholesterolAlimentation />} />
          <Route path="/articles/troubles-digestifs-solutions" element={<TroublesDigestifs />} />
          <Route path="/articles/perte-poids-apres-40" element={<PertePoidsApres40 />} />
          <Route path="/articles/hypertension-regime-dash" element={<HypertensionRegimeDash />} />
          <Route path="/articles/thyroide-alimentation" element={<ThyroideAlimentation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
