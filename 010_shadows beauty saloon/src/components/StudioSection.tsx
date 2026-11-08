import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StudioSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.8], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      id="studio"
      className="relative h-[180vh] bg-black border-t border-neutral-900"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-8 md:p-12 select-none">
        {/* Full Viewport Scaled Interior Image */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
            alt="Shadows Studio Interior B&W"
            className="w-full h-full object-cover bw-image filter grayscale contrast-[1.25] brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Minimal Corner Metadata */}
        <div className="relative z-10 flex justify-between items-start pt-12">
          <div>
            <span className="text-[9px] tracking-[0.35em] font-sans text-neutral-400 uppercase block mb-1">
              06 / SPACE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-white font-extralight uppercase tracking-wider">
              THE <span className="italic font-normal">STUDIO.</span>
            </h2>
          </div>
          <div className="text-right text-[9px] font-sans tracking-[0.3em] text-neutral-400 uppercase">
            <div>PRESTIGE COPPER ARCH</div>
            <div>INFANTRY ROAD • BENGALURU</div>
          </div>
        </div>

        {/* Studio Address Overlay (Bottom Left) */}
        <div className="relative z-10 max-w-lg pb-4 space-y-2">
          <p className="font-serif text-2xl md:text-3xl text-white font-light">
            Infantry Road, Tasker Town / Shivaji Nagar
          </p>
          <p className="text-xs font-sans text-neutral-400 uppercase tracking-widest">
            Behind Safina Plaza • Opposite ICICI & Canara Bank
          </p>
        </div>
      </div>
    </section>
  );
};
