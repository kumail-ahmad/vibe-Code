import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ALL_IMAGES } from '../data/assetsData';

export const BloomingGarmentScene: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Petals convergence transforms
  const petalScale = useTransform(scrollYProgress, [0.1, 0.5], [1.8, 1]);
  const petalOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8], [0.2, 1, 0.5]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.6], [0.9, 1.05]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen w-full py-28 px-6 bg-[#FFF9F7] text-[#2B2928] overflow-hidden flex items-center justify-center"
    >
      {/* Background Soft Pink Center Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F6D8DC]/40 blur-[140px] pointer-events-none" />

      {/* Floating Petals Field SVG Framing Garment */}
      <motion.svg
        style={{ scale: petalScale, opacity: petalOpacity }}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1000 1000"
      >
        {/* Petal Cluster Top Left */}
        <path d="M 250,250 C 270,220 300,240 280,270 C 260,300 230,280 250,250 Z" fill="#E9AEB8" fillOpacity="0.6" />
        <path d="M 200,320 C 220,290 250,310 230,340 C 210,370 180,350 200,320 Z" fill="#F6D8DC" fillOpacity="0.8" />

        {/* Petal Cluster Top Right */}
        <path d="M 750,250 C 770,220 800,240 780,270 C 760,300 730,280 750,250 Z" fill="#B96C7A" fillOpacity="0.5" />
        <path d="M 800,320 C 820,290 850,310 830,340 C 810,370 780,350 800,320 Z" fill="#E9AEB8" fillOpacity="0.7" />

        {/* Petal Cluster Bottom Left */}
        <path d="M 220,700 C 240,670 270,690 250,720 C 230,750 200,730 220,700 Z" fill="#F6D8DC" fillOpacity="0.9" />

        {/* Petal Cluster Bottom Right */}
        <path d="M 780,700 C 800,670 830,690 810,720 C 790,750 760,730 780,700 Z" fill="#E9AEB8" fillOpacity="0.6" />
      </motion.svg>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto w-full z-20 flex flex-col items-center text-center space-y-10">
        {/* Editorial Subtitle */}
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-[#B96C7A]"></span>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#B96C7A] font-semibold">
            SCENE V · BLOOMING GARMENT
          </span>
          <span className="h-px w-8 bg-[#B96C7A]"></span>
        </div>

        {/* Center Authentic She Temple Garment Portrait */}
        <motion.div
          style={{ scale: imageScale }}
          className="relative w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden border-2 border-[#E9AEB8] p-3 bg-[#E9AEB8]/20 shadow-2xl group"
        >
          <div className="w-full h-full rounded-t-full overflow-hidden relative bg-[#2B2928]/10">
            <img
              src={ALL_IMAGES.bloomingGarmentCenter}
              alt="Central She Temple Bespoke Garment"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2928]/50 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Editorial Headlines */}
        <div className="space-y-4 max-w-xl">
          <h2 className="text-4xl sm:text-6xl font-serif-editorial font-light text-[#2B2928] leading-[0.95]">
            MADE FOR <br />
            <span className="italic text-[#B96C7A]">YOUR MOMENT.</span>
          </h2>
          <p className="text-xs font-mono tracking-[0.4em] uppercase text-[#526052] font-semibold">
            CUSTOM · FIT · DETAIL
          </p>
          <p className="text-sm font-sans-editorial text-[#2B2928]/70 font-light leading-relaxed pt-2">
            Every motif is calibrated to your posture, height, and occasion. Handcrafted once, preserved forever.
          </p>
        </div>
      </div>
    </section>
  );
};

