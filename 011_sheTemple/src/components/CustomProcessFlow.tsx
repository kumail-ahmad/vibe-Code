import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/assetsData';

export const CustomProcessFlow: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full py-32 px-6 bg-[#FFF9F7] text-[#2B2928] overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto w-full mb-24 text-center">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#526052] font-semibold block mb-3">
          SCENE VI · BESPOKE ARCHITECTURE
        </span>
        <h2 className="text-4xl md:text-7xl font-serif-editorial font-light text-[#2B2928]">
          YOUR IDEA <span className="italic text-[#B96C7A]">→</span> OUR CRAFT
        </h2>
        <p className="max-w-md mx-auto text-xs md:text-sm font-sans-editorial text-[#2B2928]/70 font-light mt-4">
          A seamless 5-stage transformation from raw idea to heirloom piece inside our Jayanagar boutique studio.
        </p>
      </div>

      {/* Vertical Sequence Layout connected by Thin Thread */}
      <div className="max-w-6xl mx-auto w-full relative">
        {/* Central Connecting Thread Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#B96C7A]/20 via-[#B96C7A] to-[#C5A059]/20 hidden lg:block"></div>

        <div className="space-y-24">
          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Number & Text Column */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 justify-start lg:justify-end">
                    <span className="text-4xl font-serif-editorial italic text-[#C5A059]">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-[#B96C7A] uppercase">
                      STAGE {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-serif-editorial font-light text-[#2B2928]">
                    {step.title}
                  </h3>

                  <h4 className="text-xs font-mono tracking-widest text-[#526052] uppercase">
                    {step.subtitle}
                  </h4>

                  <p className="text-sm font-sans-editorial text-[#2B2928]/75 leading-relaxed font-light max-w-md ml-0 lg:ml-auto">
                    {step.detail}
                  </p>
                </div>

                {/* Editorial Photo Column */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? 'lg:pl-12' : 'lg:pr-12 lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E9AEB8]/30 shadow-xl group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B2928]/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
