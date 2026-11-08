import React from 'react';
import { motion } from 'framer-motion';
import { SHE_TEMPLE_INFO, ALL_IMAGES } from '../data/assetsData';

interface HeroGardenSceneProps {
  onExplore: () => void;
}

export const HeroGardenScene: React.FC<HeroGardenSceneProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-grain">
      {/* Background soft pink radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F6D8DC]/30 blur-[120px] pointer-events-none" />

      {/* Animated SVG Botanical Frame Drawing */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Left Botanical Branch */}
        <motion.path
          d="M -50,500 C 150,450 120,200 300,150 C 380,120 420,220 350,300 C 280,380 180,320 220,480 C 250,600 120,700 -50,750"
          fill="none"
          stroke="#526052"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Left Leaves */}
        <motion.path
          d="M 120,200 Q 150,180 140,160 Q 120,180 120,200 Z M 300,150 Q 330,130 320,110 Q 300,130 300,150 Z"
          fill="#526052"
          fillOpacity="0.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />

        {/* Right Botanical Branch */}
        <motion.path
          d="M 1050,400 C 850,350 880,700 700,750 C 600,780 580,650 680,600 C 780,550 820,680 900,520 C 950,400 1050,300 1050,400"
          fill="none"
          stroke="#526052"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />

        {/* Flowers blooming along right branch */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
          transform="translate(700, 750)"
        >
          <circle cx="0" cy="0" r="8" fill="#E9AEB8" fillOpacity="0.4" />
          <circle cx="0" cy="0" r="4" fill="#B96C7A" />
          <path d="M 0,-14 Q 5,-7 0,0 Q -5,-7 0,-14 Z M 14,0 Q 7,5 0,0 Q 7,-5 14,0 Z M 0,14 Q -5,7 0,0 Q 5,7 0,14 Z M -14,0 Q -7,-5 0,0 Q -7,5 -14,0 Z" fill="#F6D8DC" fillOpacity="0.8" />
        </motion.g>
      </svg>

      {/* Main Content Layout */}
      <div className="relative z-20 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left space-y-6">
          {/* Top Editorial Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#B96C7A]"></span>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#B96C7A] font-semibold">
              EST. {SHE_TEMPLE_INFO.established} · JAYANAGAR
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-1"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif-editorial font-extralight tracking-tight text-[#2B2928] leading-[0.95]">
              SHE TEMPLE
            </h1>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial italic text-[#B96C7A] leading-tight">
              Crafted to Bloom.
            </p>
          </motion.div>

          {/* Descriptive Editorial Note */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="max-w-md text-sm md:text-base font-sans-editorial text-[#2B2928]/80 leading-relaxed font-light"
          >
            A quiet sanctuary in Bengaluru where bespoke embroidery, raw silk, and hand-cut couture unfold like petals in a Japanese garden.
          </motion.p>

          {/* Location Callout & Explorer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="pt-4 flex flex-wrap items-center gap-6"
          >
            <button
              onClick={onExplore}
              data-cursor="ENTER"
              className="group flex items-center gap-4 px-7 py-3.5 rounded-full bg-[#2B2928] text-[#FFF9F7] hover:bg-[#B96C7A] transition-colors duration-500 shadow-md"
            >
              <span className="text-xs font-mono tracking-widest uppercase">
                Enter The Garden
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:scale-150 transition-transform"></span>
            </button>

            <span className="text-xs font-mono tracking-widest text-[#526052] uppercase">
              {SHE_TEMPLE_INFO.locationShort}
            </span>
          </motion.div>
        </div>

        {/* Right Integrated Couture Portrait */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-t-full overflow-hidden border border-[#E9AEB8]/40 p-2 bg-[#FFF9F7] shadow-xl"
          >
            <div className="w-full h-full rounded-t-full overflow-hidden relative group">
              <img
                src={ALL_IMAGES.heroGarment}
                alt="She Temple Couture Bridal Piece"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2928]/40 via-transparent to-transparent opacity-60"></div>
              
              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-[#FFF9F7]">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase block text-[#F6D8DC]">
                    Bespoke Couture
                  </span>
                  <span className="font-serif-editorial text-lg tracking-wide">
                    Hand-Embroidered Lehenga
                  </span>
                </div>
                <span className="text-xs font-mono tracking-widest text-[#C5A059]">
                  01 / 05
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
