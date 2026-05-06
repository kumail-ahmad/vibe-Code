import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { CollectionPage } from './pages/CollectionPage';
import { VisitPage } from './pages/VisitPage';
import { ContactPage } from './pages/ContactPage';

// ScrollToTop component to reset scroll position on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#211D1A] selection:bg-[#C88A8A]/30 selection:text-[#211D1A]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/visit" element={<VisitPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
