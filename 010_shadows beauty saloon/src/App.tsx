import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatementSection } from './components/StatementSection';
import { HairSection } from './components/HairSection';
import { HorizontalWorkSection } from './components/HorizontalWorkSection';
import { ColourSection } from './components/ColourSection';
import { DetailSection } from './components/DetailSection';
import { StudioSection } from './components/StudioSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { FooterCTA } from './components/FooterCTA';

export function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white relative font-sans selection:bg-white selection:text-black">
        {/* Custom Physics Cursor */}
        <CustomCursor />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main B&W Fashion Journal Canvas */}
        <main>
          {/* Section 00: B&W Viewport Hero */}
          <HeroSection />

          {/* Section 01: Typographic Statement Page-Turn Transition */}
          <StatementSection />

          {/* Section 02: Asymmetric Work Portfolio */}
          <HairSection />

          {/* Section 03: Pinned Full-Viewport Photographic Sequence */}
          <HorizontalWorkSection />

          {/* Section 04: Quiet Dark Colour Focus */}
          <ColourSection />

          {/* Section 05: Extreme Macro Detail Photography */}
          <DetailSection />

          {/* Section 06: Scaled Viewport Studio Interior */}
          <StudioSection />

          {/* Section 07: Minimalist Instagram Editorial CTA */}
          <InstagramSection />

          {/* Section 08: Pure Typographic Location & Contact Hub */}
          <LocationSection />
        </main>

        {/* Section 09: Final Editorial CTA & Footer */}
        <FooterCTA />
      </div>
    </SmoothScroll>
  );
}

export default App;
