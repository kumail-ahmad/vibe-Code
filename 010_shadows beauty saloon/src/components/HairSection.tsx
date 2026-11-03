import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HairSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Multi-speed parallax translation
  const yFast = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [100, -80]);

  return (
    <section ref={containerRef} id="work" className="py-32 bg-black border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-[9px] tracking-[0.35em] font-sans text-neutral-400 uppercase block mb-3">
              02 / PORTFOLIO JOURNAL
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white font-extralight uppercase tracking-wider">
              THE <span className="italic font-normal">WORK.</span>
            </h2>
          </div>
          <div className="max-w-xs text-xs font-sans text-neutral-400 leading-relaxed uppercase tracking-widest">
            CUT • COLOUR • STYLING — Tailored precision by L’Oréal Professionnel partners.
          </div>
        </div>

        {/* Asymmetrical Fashion Journal Layout (No Cards, Floating Elements) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Image 01: Large Vertical Photograph */}
          <motion.div style={{ y: ySlow }} className="lg:col-span-5 relative group">
            <div data-cursor="VIEW" className="w-full aspect-[3/4] overflow-hidden border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
                alt="B&W Precision Cut"
                className="w-full h-full object-cover bw-image filter grayscale contrast-[1.2] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <span className="text-[9px] font-sans tracking-[0.3em] text-neutral-400 uppercase block">01 / CUT & STRUCTURE</span>
              <h3 className="font-serif text-2xl text-white mt-1">PRECISION SHAPE</h3>
            </div>
          </motion.div>

          {/* Center Negative Space with Floating Editorial Text */}
          <div className="lg:col-span-2 hidden lg:flex flex-col justify-center items-center h-full pt-32 text-center">
            <span className="font-serif italic text-4xl text-neutral-400 leading-snug">
              Quiet <br /> Elegance.
            </span>
            <div className="w-[1px] h-24 bg-neutral-800 my-6" />
          </div>

          {/* Right Column: Image 02 & Image 03 Stacked Offset */}
          <div className="lg:col-span-5 flex flex-col gap-20">
            {/* Image 02: Small Landscape Crop */}
            <motion.div style={{ y: yFast }} className="relative group">
              <div data-cursor="VIEW" className="w-full aspect-[16/10] overflow-hidden border border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=85"
                  alt="B&W Hair Texture Styling"
                  className="w-full h-full object-cover bw-image filter grayscale contrast-[1.2] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <span className="text-[9px] font-sans tracking-[0.3em] text-neutral-400 uppercase block">02 / STYLING & FINISH</span>
                <h3 className="font-serif text-2xl text-white mt-1">COUTURE MOVEMENT</h3>
              </div>
            </motion.div>

            {/* Image 03: Large Square Crop */}
            <motion.div style={{ y: yMedium }} className="relative group lg:w-4/5 lg:self-end">
              <div data-cursor="VIEW" className="w-full aspect-square overflow-hidden border border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85"
                  alt="B&W Editorial Makeup"
                  className="w-full h-full object-cover bw-image filter grayscale contrast-[1.2] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <span className="text-[9px] font-sans tracking-[0.3em] text-neutral-400 uppercase block">03 / BRIDAL RADIANCE</span>
                <h3 className="font-serif text-2xl text-white mt-1">TRANSFORMATION</h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
