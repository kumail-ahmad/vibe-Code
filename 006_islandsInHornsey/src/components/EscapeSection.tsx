import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextMaskReveal } from './ui/TextMaskReveal';

export const EscapeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic continuous canvas transformation
  const imageWidth = useTransform(scrollYProgress, [0.1, 0.6], ['60%', '100%']);
  const imageScale = useTransform(scrollYProgress, [0.1, 0.6], [0.9, 1.05]);
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ['-10%', '5%']);
  const secondaryImageX = useTransform(scrollYProgress, [0.3, 0.8], ['100%', '0%']);
  const imageRotate = useTransform(scrollYProgress, [0.2, 0.7], [3, -1]);

  return (
    <section
      id="escape"
      ref={containerRef}
      className="relative min-h-[140vh] w-full bg-islands-cream py-24 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Editorial Subheader */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-12 h-[1px] bg-islands-terracotta" />
          <span className="font-sans text-xs font-semibold tracking-widest text-islands-terracotta uppercase">
            SECTION 01 — THE ESCAPE
          </span>
        </div>

        {/* Large Editorial Headline */}
        <motion.div style={{ x: textX }} className="mb-16">
          <TextMaskReveal
            text={"A LITTLE\nESCAPE\nIN HORNSEY."}
            serif={true}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-islands-espresso font-medium leading-[0.9]"
          />
        </motion.div>

        {/* Dynamic Expanding Canvas Frame */}
        <div className="relative w-full flex justify-center items-center my-12">
          
          <motion.div
            style={{ width: imageWidth, scale: imageScale, rotate: imageRotate }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-islands-espresso/10 aspect-[16/9] md:aspect-[21/9] bg-islands-cream-dark"
            data-cursor="VIEW"
          >
            <img
              src="/images/cafe_space.png"
              alt="Quiet Escape Interior at Islands Hornsey"
              className="w-full h-full object-cover filter contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-islands-espresso/40 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 max-w-sm text-islands-cream">
              <span className="font-sans text-[10px] tracking-widest uppercase text-islands-sand block mb-1">
                Spatial Atmosphere
              </span>
              <p className="font-serif text-xl italic leading-tight">
                "Stepping off Hornsey High Street into a quieter pace of day."
              </p>
            </div>
          </motion.div>

          {/* Secondary Image Entering from the Right */}
          <motion.div
            style={{ x: secondaryImageX }}
            className="absolute -right-6 md:right-8 -bottom-12 z-20 w-64 md:w-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-islands-cream bg-islands-cream"
            data-cursor="EXPLORE"
          >
            <img
              src="/images/cafe_exterior.png"
              alt="Islands Hornsey Exterior"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4 bg-islands-espresso text-islands-cream">
              <p className="font-serif text-sm italic">104 High Street, Hornsey</p>
              <p className="font-sans text-[9px] uppercase tracking-widest text-islands-sand mt-0.5">
                Our Front Door
              </p>
            </div>
          </motion.div>

        </div>

        {/* Narrative Paragraph */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20">
          <div className="md:col-start-7 md:col-span-6 font-sans text-base md:text-lg text-islands-espresso/80 leading-relaxed">
            <p className="mb-4">
              Islands was established as a sanctuary for Hornsey locals and visitors alike. Nestled on the high street, we offer a warm, uncomplicated environment centered around great coffee, wholesome food, and genuine neighborhood warmth.
            </p>
            <p className="font-serif italic text-islands-terracotta text-xl">
              Whether you are catching up over coffee, taking a break with a freshly baked cake, or picking up a sourdough lunch, Islands is your everyday pause.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

