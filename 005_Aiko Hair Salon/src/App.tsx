import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { WorkPortfolio } from './components/WorkPortfolio';
import { ColourStory } from './components/ColourStory';
import { Artists } from './components/Artists';
import { SalonExperience } from './components/SalonExperience';
import { BlackheathLocation } from './components/BlackheathLocation';
import { Products } from './components/Products';
import { BookingFooter } from './components/BookingFooter';
import { BookingModal } from './components/BookingModal';
import type { CursorState } from './types';

export function App() {
  const [cursorState, setCursorState] = useState<CursorState>('DEFAULT');
  const [cursorText, setCursorText] = useState<string | undefined>(undefined);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleSetCursorState = (state: CursorState, text?: string) => {
    setCursorState(state);
    setCursorText(text);
  };

  return (
    <div className="relative min-h-screen bg-[#0e0e0e] text-[#eae5dc] font-sans antialiased selection:bg-[#a89f91] selection:text-[#0e0e0e]">
      {/* Tactile Paper/Film Grain Overlay */}
      <div className="bg-grain" />

      {/* Desktop Custom Cursor */}
      <CustomCursor cursorState={cursorState} cursorText={cursorText} />

      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        setCursorState={handleSetCursorState}
      />

      {/* Main Editorial Canvas */}
      <main className="relative z-10">
        <Hero
          setCursorState={handleSetCursorState}
          onOpenBooking={() => setBookingOpen(true)}
        />
        <Statement setCursorState={handleSetCursorState} />
        <WorkPortfolio
          setCursorState={handleSetCursorState}
          onOpenBooking={() => setBookingOpen(true)}
        />
        <ColourStory setCursorState={handleSetCursorState} />
        <Artists
          setCursorState={handleSetCursorState}
          onOpenBooking={() => setBookingOpen(true)}
        />
        <SalonExperience setCursorState={handleSetCursorState} />
        <BlackheathLocation
          setCursorState={handleSetCursorState}
          onOpenBooking={() => setBookingOpen(true)}
        />
        <Products setCursorState={handleSetCursorState} />
        <BookingFooter
          onOpenBooking={() => setBookingOpen(true)}
          setCursorState={handleSetCursorState}
        />
      </main>

      {/* Appointment Drawer Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        setCursorState={handleSetCursorState}
      />
    </div>
  );
}

export default App;
