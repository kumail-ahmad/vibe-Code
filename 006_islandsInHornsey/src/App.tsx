import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EscapeSection } from './components/EscapeSection';
import { CoffeeSection } from './components/CoffeeSection';
import { FoodSection } from './components/FoodSection';
import { HorizontalStorySection } from './components/HorizontalStorySection';
import { RoomSection } from './components/RoomSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';

export function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-islands-cream text-islands-espresso overflow-x-hidden">
        {/* Subtle Film Grain Noise Texture Overlay */}
        <div className="grain-overlay" />

        {/* Custom Physics Cursor (Desktop Only) */}
        <CustomCursor />

        {/* Navigation Header */}
        <Navbar />

        {/* Continuous Motion Canvas Sections */}
        <main id="main-content">
          <HeroSection />
          <EscapeSection />
          <CoffeeSection />
          <FoodSection />
          <HorizontalStorySection />
          <RoomSection />
          <InstagramSection />
          <LocationSection />
        </main>

        {/* Contact & Visit Footer */}
        <ContactSection />
      </div>
    </SmoothScroll>
  );
}

export default App;
