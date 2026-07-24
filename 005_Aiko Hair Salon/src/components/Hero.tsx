import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import type { CursorState } from '../types';

interface HeroProps {
  setCursorState: (state: CursorState, text?: string) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setCursorState, onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax state
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  // Scroll animations driven by Lenis & Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothScroll = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  const heroImageScale = useTransform(smoothScroll, [0, 1], [1, 0.72]);
  const heroImageY = useTransform(smoothScroll, [0, 1], [0, 220]);
  const heroImageX = useTransform(smoothScroll, [0, 1], [0, -40]);
  const heroImageRadius = useTransform(smoothScroll, [0, 1], ['0px', '24px']);

  const titleY = useTransform(smoothScroll, [0, 1], [0, -120]);
  const titleOpacity = useTransform(smoothScroll, [0, 0.6], [1, 0]);
  const titleScale = useTransform(smoothScroll, [0, 1], [1, 0.9]);
  
  const subtitleY = useTransform(smoothScroll, [0, 1], [0, -60]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[140vh] w-full bg-[#0e0e0e] text-[#eae5dc] overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e] z-10 pointer-events-none" />

        <motion.div
          style={{
            scale: heroImageScale,
            y: heroImageY,
            x: heroImageX,
            borderRadius: heroImageRadius,
          }}
          onMouseEnter={() => setCursorState('VIEW', 'EDITORIAL')}
          onMouseLeave={() => setCursorState('DEFAULT')}
          className="absolute w-[88vw] max-w-5xl h-[75vh] top-[14vh] z-0 overflow-hidden shadow-2xl transition-shadow duration-500"
        >
          <motion.img
            src="/images/hero.png"
            alt="AIKO Hair Salon London Editorial Hair Styling"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
            style={{
              x: mousePos.x * -0.5,
              y: mousePos.y * -0.5,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 via-transparent to-[#0e0e0e]/40" />
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between h-[80vh] pt-12 pointer-events-none">
          <motion.div
            style={{ y: subtitleY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between border-b border-[#eae5dc]/15 pb-4"
          >
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#a89f91] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.35em] text-[#a89f91] uppercase">
                BLACKHEATH VILLAGE / LONDON SE3
              </span>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-[0.3em] text-[#8c8275] uppercase">
              ESTABLISHED TEAM & SESSION STYLING
            </span>
          </motion.div>

          <motion.div
            style={{
              y: titleY,
              opacity: titleOpacity,
              scale: titleScale,
              x: mousePos.x * 0.3,
            }}
            className="my-auto pointer-events-auto select-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1 md:space-y-3"
            >
              <h1 className="font-editorial-serif text-[18vw] sm:text-[14vw] md:text-[11vw] leading-[0.82] tracking-tighter text-[#eae5dc] font-light uppercase">
                AIKO
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <p className="font-editorial-serif text-3xl sm:text-5xl md:text-7xl italic font-light text-[#a89f91] tracking-tight">
                  HAIR, REFINED.
                </p>
                <p className="text-xs md:text-sm font-mono tracking-[0.3em] text-[#eae5dc]/70 uppercase">
                  50 TRANQUIL VALE — LONDON
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-between border-t border-[#eae5dc]/15 pt-6 pointer-events-auto"
          >
            <div className="hidden md:flex items-center space-x-8 text-xs font-mono text-[#8c8275] tracking-widest">
              <span>CUT</span>
              <span>•</span>
              <span>COLOUR</span>
              <span>•</span>
              <span>STYLING</span>
              <span>•</span>
              <span>YUKO</span>
            </div>

            <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
              <button
                onClick={onOpenBooking}
                onMouseEnter={() => setCursorState('OPEN', 'RESERVE')}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className="group relative px-6 py-3 bg-transparent border border-[#eae5dc]/40 text-[#eae5dc] font-mono text-xs tracking-[0.25em] uppercase overflow-hidden hover:border-[#eae5dc] transition-colors"
              >
                <span className="relative z-10 group-hover:text-[#0e0e0e] transition-colors duration-300">
                  BOOK APPOINTMENT
                </span>
                <span className="absolute inset-0 bg-[#eae5dc] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>

              <div className="text-right text-[10px] font-mono text-[#8c8275] tracking-widest uppercase animate-bounce">
                SCROLL TO EXPLORE ↓
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
