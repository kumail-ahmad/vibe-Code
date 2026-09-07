import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MACRO_EMBROIDERY_STEPS } from '../data/assetsData';

export const ArtisanMacroScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform vertical scroll to horizontal translate
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section
      id="artisan"
      ref={containerRef}
      className="relative h-[300vh] w-full bg-[#FFF9F7] text-[#2B2928]"
    >
      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-16">
        {/* Header Typography */}
        <div className="max-w-7xl mx-auto px-6 w-full z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#B96C7A] font-semibold block mb-2">
              SCENE IV · ARTISAN DEDICATION
            </span>
            <h2 className="text-4xl md:text-6xl font-serif-editorial font-light leading-[1.05] tracking-tight">
              EVERY DETAIL <br />
              <span className="italic text-[#B96C7A]">HAS A HAND</span> <br />
              BEHIND IT.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#526052] uppercase tracking-widest">
              SCROLL HORIZONTALLY
            </span>
            <div className="w-8 h-[1px] bg-[#B96C7A] animate-pulse"></div>
          </div>
        </div>

        {/* Horizontal Motion Track */}
        <div className="relative w-full overflow-hidden my-auto py-8">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-16 w-max">
            {MACRO_EMBROIDERY_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="w-[85vw] md:w-[600px] flex-none grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FFF9F7] p-6 rounded-3xl border border-[#B96C7A]/20 shadow-xl"
              >
                {/* Step Image */}
                <div className="md:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#2B2928]/80 text-[#FFF9F7] px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase">
                    STAGE 0{idx + 1} · {step.stage}
                  </div>
                </div>

                {/* Step Description */}
                <div className="md:col-span-5 flex flex-col justify-center space-y-4">
                  <span className="text-3xl font-serif-editorial italic text-[#C5A059]">
                    0{idx + 1} / 04
                  </span>
                  <h3 className="text-2xl font-serif-editorial text-[#2B2928] leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm font-sans-editorial text-[#2B2928]/75 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar Footer */}
        <div className="max-w-7xl mx-auto px-6 w-full z-20 flex justify-between items-center">
          <span className="text-[10px] font-mono tracking-widest text-[#526052] uppercase">
            JAYANAGAR HAND EMBROIDERY LOOMS
          </span>
          <div className="w-48 h-1 bg-[#F6D8DC] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="w-full h-full bg-[#B96C7A] origin-left"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

