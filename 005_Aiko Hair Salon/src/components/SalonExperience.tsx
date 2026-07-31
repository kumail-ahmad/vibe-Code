import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { CursorState } from '../types';

interface SalonExperienceProps {
  setCursorState: (state: CursorState, text?: string) => void;
}

export const SalonExperience: React.FC<SalonExperienceProps> = ({ setCursorState }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Expand image from small crop to full viewport backdrop
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.65, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], ['32px', '0px']);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.75], [40, 0]);

  return (
    <section
      ref={containerRef}
      id="salon"
      className="relative h-[220vh] bg-[#0e0e0e] text-[#eae5dc]"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden border-t border-[#1c1c1c]">
        {/* Expanding Real Salon Interior Photograph */}
        <motion.div
          style={{ scale, borderRadius }}
          onMouseEnter={() => setCursorState('VIEW', 'REAL SPACE')}
          onMouseLeave={() => setCursorState('DEFAULT')}
          className="relative w-full h-full overflow-hidden shadow-2xl bg-[#141414]"
        >
          {/* Main Real Salon Interior */}
          <img
            src="/inside.jpeg"
            alt="AIKO Hair Salon Authentic Interior — 50 Tranquil Vale Blackheath"
            className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05]"
          />

          {/* Dark Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/45 to-[#0e0e0e]/60" />

          {/* Floating Inset Picture of Second Angle */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="hidden lg:block absolute top-24 right-16 w-72 aspect-[4/3] border border-[#eae5dc]/30 shadow-2xl overflow-hidden rounded-sm"
          >
            <img
              src="/another_inside.jpeg"
              alt="AIKO Hair Salon Styling Station Detail"
              className="w-full h-full object-cover filter brightness-[0.88]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-[#0e0e0e]/80 p-2 text-[9px] font-mono text-[#a89f91] tracking-widest uppercase text-center">
              STYLING STATION DETAIL
            </div>
          </motion.div>

          {/* Text Overlay appearing as viewport expands */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between py-16 z-10 pointer-events-none"
          >
            <div className="flex justify-between items-start border-b border-[#eae5dc]/20 pb-4">
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase">
                05 — THE PHYSICAL SPACE
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8c8275] uppercase">
                BLACKHEATH VILLAGE
              </span>
            </div>

            <div className="my-auto max-w-4xl space-y-6">
              <div className="inline-block px-3 py-1 bg-[#a89f91]/20 border border-[#a89f91]/40 text-[#a89f91] text-[9px] font-mono tracking-widest uppercase">
                AUTHENTIC SALON INTERIOR
              </div>

              <h2 className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#eae5dc] tracking-tight leading-none">
                MINIMAL.<br />
                RELAXED.<br />
                <span className="italic text-[#a89f91]">PERSONAL.</span>
              </h2>

              <p className="font-sans text-base md:text-lg font-light text-[#eae5dc]/90 max-w-2xl leading-relaxed">
                A serene, sanctuary-like salon environment designed with Japanese restraint and quiet warmth. Step into our Blackheath space at 50 Tranquil Vale for a calm, attentive client experience.
              </p>
            </div>

            <div className="flex justify-between items-end border-t border-[#eae5dc]/20 pt-4">
              <span className="text-xs font-mono text-[#a89f91]">50 TRANQUIL VALE, BLACKHEATH</span>
              <span className="text-xs font-mono text-[#8c8275]">020 8318 9982</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
