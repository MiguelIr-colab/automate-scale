import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/es" replace />} />
            <Route path="/:lang" element={<HomePage />} />
            <Route path="/:lang/services" element={<ServicesPage />} />
            <Route path="/:lang/solutions" element={<SolutionsPage />} />
            <Route path="/:lang/process" element={<ProcessPage />} />
            <Route path="/:lang/contact" element={<ContactPage />} />
            <Route path="/:lang/privacy" element={<LegalPage type="privacy" />} />
            <Route path="/:lang/terms" element={<LegalPage type="terms" />} />
            <Route path="/:lang/cookies" element={<LegalPage type="cookies" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
