import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-between p-6 md:p-12 select-none"
    >
      {/* Full Viewport Black & White Hero Photograph */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
          alt="Shadows Beauty Salon Editorial B&W"
          className="w-full h-full object-cover bw-image filter grayscale contrast-[1.25] brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Top Editorial Corner Metadata */}
      <div className="relative z-10 flex justify-between items-start w-full pt-16 md:pt-12">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-white uppercase font-light"
        >
          SHADOWS
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-right text-[9px] md:text-[10px] tracking-[0.3em] font-sans text-neutral-300 uppercase space-y-1"
        >
          <div>BEAUTY SALON</div>
          <div>INFANTRY ROAD • BENGALURU</div>
        </motion.div>
      </div>

      {/* Hero Center Statement (Pure Minimalist Typography) */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 my-auto text-center max-w-4xl mx-auto px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-6xl sm:text-8xl md:text-9xl tracking-[0.1em] text-white uppercase font-extralight leading-none"
        >
          SHADOWS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif italic text-xl md:text-3xl text-neutral-300 mt-4 tracking-wider"
        >
          Beauty, in detail.
        </motion.p>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex justify-between items-end w-full pb-4"
      >
        <span className="text-[9px] tracking-[0.3em] font-sans text-neutral-400 uppercase">
          080 4112 7534
        </span>
        <span className="text-[9px] tracking-[0.35em] font-sans text-neutral-400 uppercase">
          SCROLL TO EXPLORE ↓
        </span>
        <span className="text-[9px] tracking-[0.3em] font-sans text-neutral-400 uppercase">
          INDIA
        </span>
      </motion.div>
    </section>
  );
};
