import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { CursorState } from '../types';

interface ColourStoryProps {
  setCursorState: (state: CursorState, text?: string) => void;
}

export const ColourStory: React.FC<ColourStoryProps> = ({ setCursorState }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Horizontal motion transform for the gallery track
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const cards = [
    {
      id: 1,
      tag: 'COLOUR MOMENT 01',
      title: 'MULTI-TONAL GLOSS',
      desc: 'Deep multi-dimensional tones crafted with Japanese minimal precision.',
      image: '/images/colour.png',
      aspect: 'w-[85vw] md:w-[45vw]',
    },
    {
      id: 2,
      tag: 'COLOUR MOMENT 02',
      title: 'SILK BALAYAGE',
      desc: 'Hand-painted seamless gradients tailored to facial architecture.',
      image: '/images/hero.png',
      aspect: 'w-[85vw] md:w-[40vw]',
    },
    {
      id: 3,
      tag: 'COLOUR MOMENT 03',
      title: 'YUKO STRAIGHTENING',
      desc: 'Permanent Japanese hair straightening for mirror-like smooth finish.',
      image: '/images/cut.png',
      aspect: 'w-[85vw] md:w-[45vw]',
    },
    {
      id: 4,
      tag: 'COLOUR MOMENT 04',
      title: 'PRECISION TINT & SHINE',
      desc: 'Bespoke pigment alchemy with zero compromise on hair health.',
      image: '/images/style.png',
      aspect: 'w-[85vw] md:w-[40vw]',
    },
  ];

  return (
    <section
      ref={containerRef}
      id="colour"
      className="relative h-[260vh] bg-[#0e0e0e] text-[#eae5dc]"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 overflow-hidden border-t border-[#1c1c1c]">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-end z-20">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase block mb-2">
              03 — COLOUR MOMENT
            </span>
            <motion.h2
              style={{ scale: textScale }}
              className="font-editorial-serif text-4xl sm:text-6xl md:text-7xl font-light leading-none text-[#eae5dc]"
            >
              COLOUR WITHOUT COMPROMISE.
            </motion.h2>
          </div>
          <div className="hidden lg:block text-right">
            <span className="text-xs font-mono text-[#8c8275] tracking-widest uppercase block">
              PINNED EDITORIAL SPREAD
            </span>
            <span className="text-[10px] font-mono text-[#a89f91] tracking-widest uppercase">
              DRAG OR SCROLL HORIZONTALLY →
            </span>
          </div>
        </div>

        {/* Horizontal Moving Track */}
        <div className="w-full my-auto overflow-hidden z-10 pl-6 md:pl-12">
          <motion.div style={{ x }} className="flex space-x-8 items-center w-max">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                onMouseEnter={() => setCursorState('DRAG', 'COLOUR')}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className={`${card.aspect} h-[55vh] flex-shrink-0 relative group bg-[#161616] border border-[#222] overflow-hidden`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/20 to-transparent p-8 flex flex-col justify-between">
                  <span className="px-3 py-1 bg-[#0e0e0e]/80 border border-[#222] text-[9px] font-mono tracking-widest text-[#a89f91] uppercase w-max">
                    {card.tag}
                  </span>

                  <div className="space-y-2">
                    <h3 className="font-editorial-serif text-3xl md:text-4xl text-[#eae5dc] font-light">
                      {card.title}
                    </h3>
                    <p className="text-xs font-sans text-[#8c8275] max-w-md font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center z-20 border-t border-[#222] pt-4">
          <div className="flex items-center space-x-6 text-[10px] font-mono text-[#a89f91] tracking-widest uppercase">
            <span>BALAYAGE</span>
            <span>•</span>
            <span>HIGH SHINE GLOSS</span>
            <span>•</span>
            <span>YUKO STRAIGHTENING</span>
          </div>
          <span className="text-[10px] font-mono text-[#8c8275]">AIKO / BLACKHEATH</span>
        </div>
      </div>
    </section>
  );
};
