import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VendorsSection } from './components/VendorsSection';
import { TheHuntSection } from './components/TheHuntSection';
import { CategoryGrid } from './components/CategoryGrid';
import { FamilyStory } from './components/FamilyStory';
import { ImmersiveSection } from './components/ImmersiveSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <CursorProvider>
      <div className="paper-noise-bg custom-cursor-active min-h-screen flex flex-col font-sans bg-[#F3EBDD] text-[#211B17] selection:bg-[#A4875A] selection:text-[#F3EBDD] overflow-x-hidden w-full relative">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <VendorsSection />
          <TheHuntSection />
          <CategoryGrid />
          <FamilyStory />
          <ImmersiveSection />
          <VisitSection />
        </main>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
