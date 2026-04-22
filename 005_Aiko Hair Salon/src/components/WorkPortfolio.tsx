import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioItem, CursorState } from '../types';

interface WorkPortfolioProps {
  setCursorState: (state: CursorState, text?: string) => void;
  onOpenBooking: () => void;
}

const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'THE ARCHITECTURAL BOB',
    category: 'CUT',
    subtitle: 'Classic Precision Cutting',
    image: '/images/cut.png',
    aspect: 'portrait',
  },
  {
    id: '2',
    title: 'SILK DIMENSIONAL BALAYAGE',
    category: 'COLOUR',
    subtitle: 'Multi-Tone Gloss & Tint',
    image: '/images/colour.png',
    aspect: 'tall',
  },
  {
    id: '3',
    title: 'AVANT-GARDE SESSION FORM',
    category: 'STYLE',
    subtitle: 'Editorial & Media Styling',
    image: '/images/style.png',
    aspect: 'landscape',
  },
  {
    id: '4',
    title: 'SEAMLESS SILK EXTENSIONS',
    category: 'EXTENSIONS',
    subtitle: 'Bespoke Volume & Length',
    image: '/images/hero.png',
    aspect: 'portrait',
  },
  {
    id: '5',
    title: 'YUKO PERMANENT STRAIGHTENING',
    category: 'STYLE',
    subtitle: 'Japanese Precision Smoothing',
    image: '/images/salon.png',
    aspect: 'landscape',
  },
];

export const WorkPortfolio: React.FC<WorkPortfolioProps> = ({ setCursorState, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'CUT', 'COLOUR', 'STYLE', 'EXTENSIONS'];

  const filteredItems = activeCategory === 'ALL'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="relative py-32 bg-[#0e0e0e] text-[#eae5dc] border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222] pb-8 mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase block mb-3">
              02 — THE WORK
            </span>
            <h2 className="font-editorial-serif text-5xl md:text-7xl font-light text-[#eae5dc]">
              PORTFOLIO EDITORIAL
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                onMouseEnter={() => setCursorState('VIEW', cat)}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className={`px-4 py-2 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-[#eae5dc] text-[#0e0e0e] border-[#eae5dc]'
                    : 'bg-transparent text-[#8c8275] border-[#222] hover:border-[#a89f91] hover:text-[#eae5dc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              // Asymmetric column span assignment
              const colSpan =
                index % 3 === 0
                  ? 'md:col-span-8'
                  : index % 3 === 1
                  ? 'md:col-span-4'
                  : 'md:col-span-6 md:col-start-4';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${colSpan} group relative cursor-pointer`}
                  onClick={onOpenBooking}
                  onMouseEnter={() => setCursorState('EXPLORE', item.category)}
                  onMouseLeave={() => setCursorState('DEFAULT')}
                >
                  <div className="relative overflow-hidden bg-[#161616] border border-[#222] aspect-[4/3] md:aspect-auto md:h-[480px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Masked reveal content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 bg-[#0e0e0e]/80 border border-[#222] text-[9px] font-mono tracking-widest text-[#a89f91] uppercase">
                          {item.category}
                        </span>
                        <span className="text-xs font-mono text-[#8c8275]">0{index + 1}</span>
                      </div>

                      <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                        <p className="text-xs font-mono tracking-widest text-[#a89f91] uppercase mb-1">
                          {item.subtitle}
                        </p>
                        <h3 className="font-editorial-serif text-2xl md:text-4xl text-[#eae5dc] font-light tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

