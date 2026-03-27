import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, MapPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../context/CursorContext';

export const Hero: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.4, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 md:pt-36 pb-12 px-6 md:px-12 overflow-hidden border-b border-[#211B17]/10">
      {/* Background Ambient Decor & Background Image container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 w-full h-full"
          onMouseEnter={() => setCursor('view', 'ENTER')}
          onMouseLeave={resetCursor}
        >
          <img
            src="/images/hero.png"
            alt="Stuff N' Things antique store interior filled with curated vintage furniture and collectibles in Myrtle Creek, OR"
            className="w-full h-full object-cover object-center opacity-30 md:opacity-35 mix-blend-multiply"
          />
          {/* Subtle vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F3EBDD] via-transparent to-[#F3EBDD]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3EBDD] via-transparent to-[#F3EBDD]/80" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Small Label */}
          <motion.div variants={lineVariants} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#A4875A]" />
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold text-[#A4875A]">
              ANTIQUES • VINTAGE • FURNITURE
            </p>
          </motion.div>

          {/* Main Headline (Line-by-line reveal) */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#211B17] leading-[0.92] uppercase mb-8">
            <motion.span variants={lineVariants} className="block">
              THERE'S ALWAYS
            </motion.span>
            <motion.span variants={lineVariants} className="block text-[#59604A] italic font-normal">
              SOMETHING
            </motion.span>
            <motion.span variants={lineVariants} className="block">
              WORTH FINDING.
            </motion.span>
          </h1>

          {/* Supporting Copy */}
          <motion.p
            variants={lineVariants}
            className="text-base sm:text-lg md:text-xl font-normal text-[#211B17]/80 max-w-2xl leading-relaxed mb-10"
          >
            A curated collection of antiques, vintage pieces, furniture and unexpected treasures in Myrtle Creek, Oregon.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={lineVariants} className="flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton href="#finds" variant="primary" cursorText="EXPLORE">
              <span>EXPLORE THE FINDS</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </MagneticButton>

            <MagneticButton href="#visit" variant="secondary" cursorText="VISIT">
              <span>VISIT THE SHOP</span>
              <MapPin className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Bar Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-[#211B17]/15 gap-4 text-xs tracking-widest uppercase font-semibold text-[#211B17]/70"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#59604A] animate-pulse" />
          <span>875 S MAIN ST, MYRTLE CREEK, OR</span>
        </div>
        <div className="flex items-center gap-6">
          <span>75+ VENDORS</span>
          <span className="hidden sm:inline">•</span>
          <span>ESTATE FINDS & UNIQUE DECOR</span>
        </div>
      </motion.div>
    </section>
  );
};

