
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'; // Add explicit React import
import HomePage from "./pages/HomePage";
import AstronomyCoursePage from "./pages/AstronomyCoursePage";
import AstronomyCourseStartPage from "./pages/AstronomyCourseStartPage";
import AICoursePage from "./pages/AICoursePage";
import AICourseStartPage from "./pages/AICourseStartPage";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Create a client outside of the component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: false,
    },
  },
});

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/astronomy-course" element={<AstronomyCoursePage />} />
            <Route path="/astronomy-course-start" element={<AstronomyCourseStartPage />} />
            <Route path="/ai-course" element={<AICoursePage />} />
            <Route path="/ai-course-start" element={<AICourseStartPage />} />
            <Route path="/assessment" element={<Index />} />
            {/* Backward compatibility routes */}
            <Route path="/course" element={<AstronomyCoursePage />} />
            <Route path="/course-start" element={<AstronomyCourseStartPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
