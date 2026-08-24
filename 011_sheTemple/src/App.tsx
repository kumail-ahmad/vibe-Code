import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { HeaderNav } from './components/HeaderNav';
import { BotanicalThreadCanvas } from './components/BotanicalThreadCanvas';
import { HeroGardenScene } from './components/HeroGardenScene';
import { InteractiveBotanicalLandscape } from './components/InteractiveBotanicalLandscape';
import { TextileDisplacementScene } from './components/TextileDisplacementScene';
import { ArtisanMacroScroll } from './components/ArtisanMacroScroll';
import { BloomingGarmentScene } from './components/BloomingGarmentScene';
import { CustomProcessFlow } from './components/CustomProcessFlow';
import { PatternFitCanvas } from './components/PatternFitCanvas';
import { BridalOccasionScene } from './components/BridalOccasionScene';
import { TreeOfCraftScene } from './components/TreeOfCraftScene';
import { StudioCollageScene } from './components/StudioCollageScene';
import { MinimalContactAtelier } from './components/MinimalContactAtelier';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToGarden = () => {
    const gardenElem = document.getElementById('garden');
    if (gardenElem) {
      gardenElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FFF9F7] text-[#2B2928] font-sans-editorial selection:bg-[#F6D8DC]">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <HeaderNav onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Continuous Botanical Thread Path Engine Background */}
      <BotanicalThreadCanvas />

      {/* 11 Seamless Continuous Art-Directed Scenes */}
      <main className="relative z-10 w-full">
        {/* Scene I: The Botanical Garden Gateway */}
        <HeroGardenScene onExplore={scrollToGarden} />

        {/* Scene II: The Garden of Craft */}
        <InteractiveBotanicalLandscape />

        {/* Scene III: The Floating Textile */}
        <TextileDisplacementScene />

        {/* Scene IV: The Hand Behind The Flower (Horizontal Pinned Scroll) */}
        <ArtisanMacroScroll />

        {/* Scene V: The Blooming Garment */}
        <BloomingGarmentScene />

        {/* Scene VI: Custom Design Process Flow */}
        <CustomProcessFlow />

        {/* Scene VII: Pattern Fit Canvas */}
        <PatternFitCanvas />

        {/* Scene VIII: Special Occasion Bridal Editorial */}
        <BridalOccasionScene />

        {/* Scene IX: Tree of Craft */}
        <TreeOfCraftScene />

        {/* Scene X: Studio Asymmetrical Collage */}
        <StudioCollageScene />

        {/* Scene XI: Minimal Contact & Atelier Info */}
        <MinimalContactAtelier onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

export default App;

