import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const ImmersiveSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setCursor, resetCursor } = useCursor();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setCursor('view', 'HUNTERS')}
      onMouseLeave={resetCursor}
      className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-[#211B17] flex items-center justify-center border-b border-[#211B17]/10"
    >
      {/* Background Scaling Parallax Image */}
      <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero.png"
          alt="Full width antique hall display at Stuff N' Things Myrtle Creek"
          className="w-full h-full object-cover opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211B17] via-[#211B17]/50 to-[#211B17]" />
      </motion.div>

      {/* Parallax Overlay Typography */}
      <motion.div
        style={{ y: textY, opacity: opacityOverlay }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-[#F3EBDD] flex flex-col items-center justify-center"
      >
        <span className="text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-[#A4875A] mb-6">
          MYRTLE CREEK ANTIQUE MARKET
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.95] max-w-4xl">
          THE NEXT GREAT FIND <br />
          <span className="text-[#A4875A] font-normal italic">MIGHT BE</span> <br />
          AROUND THE CORNER.
        </h2>
        <div className="w-16 h-[2px] bg-[#A65E42] mt-8 mb-4" />
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#F3EBDD]/70 font-sans">
          875 S MAIN ST • MYRTLE CREEK, OR 97457
        </p>
      </motion.div>
    </section>
  );
};

