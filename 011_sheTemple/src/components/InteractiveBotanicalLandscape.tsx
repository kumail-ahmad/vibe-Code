import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CRAFT_CATEGORIES, type CraftCategory } from '../data/assetsData';

export const InteractiveBotanicalLandscape: React.FC = () => {
  const [activeCraft, setActiveCraft] = useState<CraftCategory | null>(CRAFT_CATEGORIES[0]);

  return (
    <section id="garden" className="relative min-h-screen w-full py-24 px-6 bg-[#FFF9F7] overflow-hidden flex flex-col justify-center">
      {/* Background Japanese Garden Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#526052_1px,transparent_1px),linear-gradient(to_bottom,#526052_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto w-full mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#526052] font-semibold block mb-2">
            SCENE II · THE BOTANICAL LANDSCAPE
          </span>
          <h2 className="text-4xl md:text-6xl font-serif-editorial font-light text-[#2B2928]">
            The Garden of Craft
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#2B2928]/70 font-sans-editorial font-light">
          Hover each branch in our botanical sanctuary to reveal the handcrafted garment discipline blooming within its leaves.
        </p>
      </div>

      {/* Main Botanical Landscape Composition */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Interactive Tree & Branch Nodes (Landscape layout, NOT cards) */}
        <div className="lg:col-span-7 relative min-h-[420px] flex flex-col justify-center space-y-4">
          {/* Main Trunk SVG */}
          <svg
            className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-20"
            viewBox="0 0 500 500"
            fill="none"
          >
            <path
              d="M 50,480 C 100,400 80,300 150,220 C 220,140 320,180 420,80"
              stroke="#526052"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 150,220 C 200,240 280,280 380,320"
              stroke="#526052"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
          </svg>

          {/* Interactive Branch List */}
          {CRAFT_CATEGORIES.map((craft, index) => {
            const isActive = activeCraft?.id === craft.id;
            return (
              <motion.div
                key={craft.id}
                onMouseEnter={() => setActiveCraft(craft)}
                data-cursor="EXAMINE"
                className={`relative group cursor-pointer py-4 px-6 rounded-2xl transition-all duration-500 border ${
                  isActive
                    ? 'border-[#B96C7A]/30 bg-[#F6D8DC]/20 backdrop-blur-sm pl-10'
                    : 'border-transparent hover:border-[#526052]/20 hover:bg-[#FFF9F7]/80 hover:pl-8'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {/* Branch Floral Icon Node */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${isActive ? 'scale-125 bg-[#B96C7A] text-[#FFF9F7]' : 'bg-[#526052]/10 text-[#526052]'}`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                      </svg>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-serif-editorial text-2xl md:text-3xl text-[#2B2928] group-hover:text-[#B96C7A] transition-colors">
                          {craft.name}
                        </span>
                        <span className="text-xs font-mono tracking-widest text-[#526052]/60">
                          [{craft.kanjiHint}]
                        </span>
                      </div>
                      <span className="text-xs font-sans-editorial text-[#2B2928]/60 font-light block mt-0.5">
                        {craft.subtitle}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono tracking-widest text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW CRAFT →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Garment Reveal Display */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            {activeCraft && (
              <motion.div
                key={activeCraft.id}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md bg-[#FFF9F7] rounded-3xl p-6 border border-[#B96C7A]/20 shadow-2xl relative overflow-hidden"
              >
                {/* Background Subtle Floral Motif */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F6D8DC]/40 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 group">
                  <img
                    src={activeCraft.image}
                    alt={activeCraft.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2928]/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-[#FFF9F7]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] block mb-1">
                      SHE TEMPLE ATELIER
                    </span>
                    <h3 className="font-serif-editorial text-2xl">
                      {activeCraft.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-sans-editorial text-[#2B2928]/80 leading-relaxed font-light mb-6">
                  {activeCraft.description}
                </p>

                {/* Craft Detail Tags */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#B96C7A]/15">
                  {activeCraft.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B96C7A]"></span>
                      <span className="text-xs font-mono text-[#526052]">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
