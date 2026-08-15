import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CoffeeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Horizontal travel across viewport
  const imageX = useTransform(scrollYProgress, [0.1, 0.9], ['-20%', '20%']);
  const textX = useTransform(scrollYProgress, [0.1, 0.9], ['15%', '-15%']);
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.85, 1.05, 0.9]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.9], [-4, 4]);

  return (
    <section
      id="coffee"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-islands-espresso text-islands-cream py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Subtle Typography Watermark */}
      <motion.div
        style={{ x: textX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-10 pointer-events-none select-none"
      >
        <span className="font-serif text-[20vw] leading-none font-bold text-islands-cream">
          HORNSEY COFFEE
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-12 h-[1px] bg-islands-terracotta" />
          <span className="font-sans text-xs font-semibold tracking-widest text-islands-sand uppercase">
            SECTION 02 — COFFEE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography */}
          <motion.div style={{ x: textX }} className="lg:col-span-6 z-20">
            <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight mb-8">
              COFFEE <br />
              <span className="italic text-islands-sand font-serif font-light">FIRST.</span>
            </h2>

            <p className="font-sans text-base md:text-lg text-islands-cream/80 max-w-lg leading-relaxed mb-8">
              We take coffee seriously, without the pretension. Sourced with care, roasted for balance, and prepared by baristas who know your daily ritual.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-islands-cream/15 font-sans">
              <div>
                <span className="block font-serif text-2xl text-islands-sand mb-1">House Espresso</span>
                <span className="text-xs uppercase tracking-wider opacity-70">Balanced & Smooth</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-islands-sand mb-1">Specialty Pour</span>
                <span className="text-xs uppercase tracking-wider opacity-70">Single Origin Focus</span>
              </div>
            </div>
          </motion.div>

          {/* Traveling Coffee Image Frame across viewport */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            <motion.div
              style={{ x: imageX, scale, rotate }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-islands-cream/20 bg-islands-charcoal"
              data-cursor="COFFEE"
            >
              <img
                src="/images/artisan_coffee.png"
                alt="Islands Hornsey Artisan Coffee"
                className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-islands-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-islands-sand block mb-1">
                    Signature Pour
                  </span>
                  <span className="font-serif text-xl italic text-islands-cream">
                    Freshly Crafted Everyday
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-islands-cream/30 flex items-center justify-center font-serif text-xs italic">
                  N8
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
