import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ColourSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0.2, 0.8], [40, -40]);
  const textY = useTransform(scrollYProgress, [0.2, 0.8], [-20, 20]);
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.98, 1.04]);

  return (
    <section
      ref={sectionRef}
      id="colour"
      className="py-36 bg-black border-t border-neutral-900 relative overflow-hidden flex flex-col justify-center items-center min-h-[90vh]"
    >
      <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10">
        <motion.span
          style={{ y: textY }}
          className="text-[9px] tracking-[0.4em] font-sans text-neutral-400 uppercase block mb-8"
        >
          04 / COLOUR JOURNAL • L’ORÉAL PROFESSIONNEL
        </motion.span>

        {/* Single B&W Hair Photograph Focus */}
        <motion.div
          style={{ y: imageY, scale }}
          data-cursor="COLOUR"
          className="w-full max-w-2xl aspect-[4/5] mx-auto overflow-hidden border border-neutral-800 shadow-2xl relative"
        >
          <img
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85"
            alt="Single B&W Hair Colour Focus"
            className="w-full h-full object-cover bw-image filter grayscale contrast-[1.25] brightness-90"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Quiet Typography Statement */}
        <motion.div style={{ y: textY }} className="mt-8 space-y-2">
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-extralight uppercase tracking-widest">
            FRENCH <span className="italic font-normal">BALAYAGE</span> & TONING.
          </h2>
          <p className="text-xs font-sans text-neutral-400 uppercase tracking-widest max-w-md mx-auto pt-2">
            Multidimensional hair depth crafted with ammonia-free precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
