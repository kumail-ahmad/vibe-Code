import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { CursorState } from '../types';

interface StatementProps {
  setCursorState: (state: CursorState, text?: string) => void;
}

export const Statement: React.FC<StatementProps> = ({ setCursorState }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll animations for typography transformation
  const textX1 = useTransform(scrollYProgress, [0.1, 0.6], [-60, 0]);
  const textX2 = useTransform(scrollYProgress, [0.1, 0.6], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const imgScale = useTransform(scrollYProgress, [0.2, 0.7], [0.85, 1]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen py-32 bg-[#0e0e0e] text-[#eae5dc] flex items-center justify-center overflow-hidden border-t border-[#1c1c1c]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Index */}
        <div className="flex items-center justify-between border-b border-[#222] pb-6 mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase">
            01 — THE STATEMENT
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#8c8275] uppercase">
            LONDON EDITORIAL × JAPANESE MINIMALISM
          </span>
        </div>

        {/* Large Editorial Kinetic Typography */}
        <motion.div style={{ opacity }} className="space-y-4 mb-20 text-center">
          <motion.h2
            style={{ x: textX1 }}
            className="font-editorial-serif text-5xl sm:text-7xl md:text-9xl tracking-tight text-[#eae5dc] font-light leading-[0.9]"
          >
            CLASSIC TECHNIQUE.
          </motion.h2>
          <motion.h2
            style={{ x: textX2 }}
            className="font-editorial-serif text-5xl sm:text-7xl md:text-9xl tracking-tight text-[#a89f91] font-light italic leading-[0.9]"
          >
            MODERN INSTINCT.
          </motion.h2>
        </motion.div>

        {/* Editorial Grid: Text + Image continuous composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-editorial-serif text-3xl md:text-4xl text-[#eae5dc] font-light leading-snug">
              Situated in the heart of Blackheath Village, AIKO is an independent London hair studio dedicated to quiet precision and modern form.
            </h3>

            <p className="text-sm md:text-base font-sans font-light text-[#8c8275] leading-relaxed">
              We combine rigorous classical cutting technique with fashion-aware instinct. Our craft spans forward-thinking cuts, bespoke hair colouring, session styling for media & music, elegant hair-ups, seamless hair extensions, and Yuko permanent hair straightening.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#222]">
              <div>
                <p className="text-xs font-mono text-[#a89f91] tracking-widest uppercase mb-1">LOCATION</p>
                <p className="text-sm text-[#eae5dc] font-light">50 Tranquil Vale, Blackheath</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[#a89f91] tracking-widest uppercase mb-1">PHILOSOPHY</p>
                <p className="text-sm text-[#eae5dc] font-light">Minimal, Relaxed, Uncompromising</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ scale: imgScale }}
              onMouseEnter={() => setCursorState('VIEW', 'TEXTURE')}
              onMouseLeave={() => setCursorState('DEFAULT')}
              className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl border border-[#222]"
            >
              <img
                src="/images/cut.png"
                alt="AIKO Hair Salon Precision Cutting"
                className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle caption mask */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-transparent flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-[#a89f91] uppercase">CUT & FORM</p>
                  <p className="font-editorial-serif text-lg text-[#eae5dc]">Precision Haircut Architecture</p>
                </div>
                <span className="text-xs font-mono text-[#8c8275]">01 / 04</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

