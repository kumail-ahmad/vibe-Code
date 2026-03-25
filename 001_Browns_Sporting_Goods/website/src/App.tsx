import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { OurStoryPage } from "./pages/OurStoryPage";
import { WhatWeCarryPage } from "./pages/WhatWeCarryPage";
import { VisitUsPage } from "./pages/VisitUsPage";
import { ContactPage } from "./pages/ContactPage";
import { useScrollToTop } from "./hooks/useScrollToTop";

function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <div className="min-h-screen flex flex-col bg-[#101612] text-[#ece8df]">
        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#c87a38] text-[#0d1610] font-bold rounded-md shadow-xl"
        >
          Skip to main content
        </a>

        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/what-we-carry" element={<WhatWeCarryPage />} />
            <Route path="/visit-us" element={<VisitUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
