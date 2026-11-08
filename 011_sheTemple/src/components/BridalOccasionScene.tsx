import React from 'react';
import { motion } from 'framer-motion';
import { ALL_IMAGES } from '../data/assetsData';

export const BridalOccasionScene: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full py-32 px-6 bg-[#F6D8DC]/40 text-[#2B2928] overflow-hidden flex items-center justify-center">
      {/* Falling Petals Background Simulation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-60">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-[#B96C7A]/30 blur-[1px]"
            initial={{
              x: `${(i * 12) + 5}%`,
              y: '-10%',
              rotate: 0,
            }}
            animate={{
              y: '110%',
              rotate: 360,
              x: `${(i * 12) + Math.sin(i) * 15}%`,
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.2,
            }}
          />
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Headline & Subtext */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#B96C7A]"></span>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#B96C7A] font-semibold">
              SCENE VIII · OCCASION HERITAGE
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl font-serif-editorial font-light text-[#2B2928] leading-[0.95]">
            FOR THE DAYS <br />
            <span className="italic text-[#B96C7A]">YOU REMEMBER.</span>
          </h2>

          <div className="text-xs font-mono tracking-[0.4em] uppercase text-[#526052] font-semibold pt-2">
            BRIDAL · CELEBRATION · OCCASION
          </div>

          <p className="max-w-md text-sm font-sans-editorial text-[#2B2928]/80 font-light leading-relaxed">
            From intimacy of trial fittings to grand bridal entrances, She Temple pieces are designed to evoke timeless sentiment across generations.
          </p>
        </div>

        {/* Right Bridal Imagery */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-[#E9AEB8] p-2 bg-[#FFF9F7] shadow-2xl group">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#2B2928]/10">
              <img
                src={ALL_IMAGES.bridalOccasionFull}
                alt="She Temple Bridal Couture"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2928]/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
