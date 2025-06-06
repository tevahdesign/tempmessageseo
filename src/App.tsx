
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Alternatives from "./pages/Alternatives";
import NotFound from "./pages/NotFound";

// Language paths
import EnglishHome from "./pages/languages/en/Index";
import SpanishHome from "./pages/languages/es/Index";
import SpanishFAQ from "./pages/languages/es/FAQ";
import SpanishAbout from "./pages/languages/es/About";
import FrenchHome from "./pages/languages/fr/Index";
import GermanHome from "./pages/languages/de/Index";
import ChineseHome from "./pages/languages/zh/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default English routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/alternatives" element={<Alternatives />} />
          
          {/* English routes (explicit) */}
          <Route path="/en" element={<EnglishHome />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/faq" element={<FAQPage />} />
          <Route path="/en/privacy" element={<PrivacyPolicy />} />
          <Route path="/en/terms" element={<Terms />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/blog" element={<Blog />} />
          <Route path="/en/features" element={<Features />} />
          <Route path="/en/how-it-works" element={<HowItWorks />} />
          <Route path="/en/alternatives" element={<Alternatives />} />
          
          {/* Spanish routes */}
          <Route path="/es" element={<SpanishHome />} />
          <Route path="/es/about" element={<SpanishAbout />} />
          <Route path="/es/faq" element={<SpanishFAQ />} />
          <Route path="/es/privacy" element={<PrivacyPolicy />} />
          <Route path="/es/terms" element={<Terms />} />
          <Route path="/es/contact" element={<Contact />} />
          <Route path="/es/blog" element={<Blog />} />
          <Route path="/es/features" element={<Features />} />
          <Route path="/es/how-it-works" element={<HowItWorks />} />
          <Route path="/es/alternatives" element={<Alternatives />} />
          
          {/* French routes */}
          <Route path="/fr" element={<FrenchHome />} />
          <Route path="/fr/about" element={<About />} />
          <Route path="/fr/faq" element={<FAQPage />} />
          <Route path="/fr/privacy" element={<PrivacyPolicy />} />
          <Route path="/fr/terms" element={<Terms />} />
          <Route path="/fr/contact" element={<Contact />} />
          <Route path="/fr/blog" element={<Blog />} />
          <Route path="/fr/features" element={<Features />} />
          <Route path="/fr/how-it-works" element={<HowItWorks />} />
          <Route path="/fr/alternatives" element={<Alternatives />} />
          
          {/* German routes */}
          <Route path="/de" element={<GermanHome />} />
          <Route path="/de/about" element={<About />} />
          <Route path="/de/faq" element={<FAQPage />} />
          <Route path="/de/privacy" element={<PrivacyPolicy />} />
          <Route path="/de/terms" element={<Terms />} />
          <Route path="/de/contact" element={<Contact />} />
          <Route path="/de/blog" element={<Blog />} />
          <Route path="/de/features" element={<Features />} />
          <Route path="/de/how-it-works" element={<HowItWorks />} />
          <Route path="/de/alternatives" element={<Alternatives />} />
          
          {/* Chinese routes */}
          <Route path="/zh" element={<ChineseHome />} />
          <Route path="/zh/about" element={<About />} />
          <Route path="/zh/faq" element={<FAQPage />} />
          <Route path="/zh/privacy" element={<PrivacyPolicy />} />
          <Route path="/zh/terms" element={<Terms />} />
          <Route path="/zh/contact" element={<Contact />} />
          <Route path="/zh/blog" element={<Blog />} />
          <Route path="/zh/features" element={<Features />} />
          <Route path="/zh/how-it-works" element={<HowItWorks />} />
          <Route path="/zh/alternatives" element={<Alternatives />} />
          
          {/* Not found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
