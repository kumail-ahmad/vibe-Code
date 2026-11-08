import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StatementSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Typography splits apart
  const leftTextX = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '-35%']);
  const rightTextX = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '35%']);
  const centerTextOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.2]);

  // Page-turn image slide entry from edge
  const imageX = useTransform(scrollYProgress, [0.2, 0.8], ['100%', '0%']);
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="statement"
      className="relative h-[220vh] bg-black border-t border-neutral-900"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        {/* Pure Typographic Editorial Statement */}
        <motion.div style={{ opacity: centerTextOpacity }} className="z-10 text-center select-none">
          <motion.h2
            style={{ x: leftTextX }}
            className="font-serif text-6xl sm:text-8xl md:text-9xl tracking-[0.15em] text-white uppercase font-extralight leading-none"
          >
            BEAUTY
          </motion.h2>
          <div className="my-2">
            <span className="text-[10px] tracking-[0.4em] font-sans text-neutral-400 uppercase">
              STATEMENT — 01
            </span>
          </div>
          <motion.h2
            style={{ x: rightTextX }}
            className="font-serif text-6xl sm:text-8xl md:text-9xl tracking-[0.15em] text-white uppercase font-extralight leading-none"
          >
            IN DETAIL.
          </motion.h2>
        </motion.div>

        {/* Page-Turn Slide-in Photograph */}
        <motion.div
          style={{ x: imageX, opacity: imageOpacity }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[85vw] md:w-[50vw] h-[70vh] z-20 overflow-hidden shadow-2xl border-l border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
            alt="Editorial B&W Hair Sculpture"
            className="w-full h-full object-cover bw-image filter grayscale contrast-[1.2] brightness-90"
          />
          <div className="absolute bottom-6 left-6 text-[9px] tracking-[0.3em] font-sans text-white/80 uppercase">
            SHADOWS • HAIR ARCHITECTURE
          </div>
        </motion.div>
      </div>
    </section>
  );
};
