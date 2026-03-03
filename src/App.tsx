import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedCursor from "./components/AnimatedCursor";
import LoadingScreen from "./components/LoadingScreen";
import WhatsAppButton from "./components/WhatsAppButton";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        <Route
          path="/"
          element={<PageTransition><Index /></PageTransition>}
        />

        <Route
          path="/about"
          element={<PageTransition><About /></PageTransition>}
        />

        <Route
          path="/properties"
          element={<PageTransition><Properties /></PageTransition>}
        />

        <Route
          path="/contact"
          element={<PageTransition><Contact /></PageTransition>}
        />

        {/* ✅ NEW LEGAL PAGES */}
        <Route
          path="/privacy-policy"
          element={<PageTransition><PrivacyPolicy /></PageTransition>}
        />

        <Route
          path="/terms-and-conditions"
          element={<PageTransition><TermsAndConditions /></PageTransition>}
        />

        <Route
          path="*"
          element={<PageTransition><NotFound /></PageTransition>}
        />

      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedCursor />
          <LoadingScreen isLoading={loading} />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;