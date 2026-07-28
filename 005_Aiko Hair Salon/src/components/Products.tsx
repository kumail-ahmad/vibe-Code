import React from 'react';
import { motion } from 'framer-motion';
import type { CursorState } from '../types';

interface ProductsProps {
  setCursorState: (state: CursorState, text?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ setCursorState }) => {
  return (
    <section id="products" className="relative py-32 bg-[#0e0e0e] text-[#eae5dc] border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222] pb-6 mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase block mb-2">
              07 — PRODUCT CURATION
            </span>
            <h2 className="font-editorial-serif text-5xl md:text-7xl font-light text-[#eae5dc]">
              THE PRODUCTS BEHIND THE WORK
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8c8275] tracking-widest uppercase">
            BUMBLE AND BUMBLE STOCKED
          </span>
        </div>

        {/* Editorial Feature Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-editorial-serif text-3xl md:text-4xl text-[#eae5dc] font-light leading-snug">
              Uncompromising hair care engineered for structural form and effortless texture.
            </h3>

            <p className="text-sm font-sans font-light text-[#8c8275] leading-relaxed">
              We exclusively stock and prescribe Bumble and Bumble hair formulations. Developed for runway, studio session styling, and daily ritual refinement, each product supports healthy hair integrity with minimal weight.
            </p>

            <div className="p-6 bg-[#161616] border border-[#222] space-y-3">
              <p className="text-xs font-mono text-[#a89f91] tracking-widest uppercase">SALON RITUAL STOCKS</p>
              <ul className="text-xs font-mono text-[#eae5dc]/80 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a89f91]" />
                  <span>Bumble and Bumble Hairdresser’s Invisible Oil System</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a89f91]" />
                  <span>Bb. Surf & Texture Finishing Sprays</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a89f91]" />
                  <span>Bb. Bond-Building Repair & Colour Protect Formulas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Editorial Photography */}
          <div className="lg:col-span-7 relative">
            <motion.div
              onMouseEnter={() => setCursorState('VIEW', 'PRODUCTS')}
              onMouseLeave={() => setCursorState('DEFAULT')}
              className="relative aspect-[16/10] w-full overflow-hidden bg-[#161616] border border-[#222] group"
            >
              <img
                src="/images/style.png"
                alt="Bumble and Bumble Products AIKO Salon"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#a89f91] uppercase">
                  EDITORIAL CARE
                </span>
                <p className="font-editorial-serif text-2xl text-[#eae5dc]">
                  Bumble and Bumble / Official Stockist Blackheath
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
