import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const DetailSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0.2, 0.8], [0.95, 1.05]);
  const textXLeft = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const textXRight = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} className="py-32 bg-black border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <span className="text-[9px] tracking-[0.4em] font-sans text-neutral-400 uppercase">
            05 / MACRO FOCUS
          </span>
        </div>

        {/* Central Macro Close-Up Image Frame */}
        <div className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden border border-neutral-800">
          <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85"
              alt="Hair and Texture Macro B&W Detail"
              className="w-full h-full object-cover bw-image filter grayscale contrast-[1.3] brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Traveling Typography Across Frame */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12 pointer-events-none select-none">
            <motion.div style={{ x: textXLeft }} className="whitespace-nowrap">
              <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl text-white uppercase tracking-[0.15em] font-extralight leading-none">
                EVERY <span className="italic font-normal">DETAIL</span>
              </h2>
            </motion.div>

            <motion.div style={{ x: textXRight }} className="whitespace-nowrap text-right">
              <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl text-white uppercase tracking-[0.15em] font-extralight leading-none">
                MATTERS.
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
