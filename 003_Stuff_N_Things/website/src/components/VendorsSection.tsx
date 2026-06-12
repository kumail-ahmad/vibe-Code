import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const VendorsSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { setCursor, resetCursor } = useCursor();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

  const vendorVignettes = [
    {
      id: 1,
      title: 'Architectural Salvage & Woodwork',
      img: '/images/furniture.png',
      aspect: 'aspect-[4/5] w-72 md:w-96',
      offsetY: 'translate-y-0',
    },
    {
      id: 2,
      title: 'Estate Glassware & Fine Brass',
      img: '/images/decor.png',
      aspect: 'aspect-[3/4] w-64 md:w-80',
      offsetY: 'translate-y-6 md:translate-y-12',
    },
    {
      id: 3,
      title: 'Mid-Century & Antique Furniture',
      img: '/images/antiques.png',
      aspect: 'aspect-[16/10] w-80 md:w-[28rem]',
      offsetY: '-translate-y-4 md:-translate-y-8',
    },
    {
      id: 4,
      title: 'Curated Collectibles & Timepieces',
      img: '/images/collectibles.png',
      aspect: 'aspect-[4/5] w-64 md:w-80',
      offsetY: 'translate-y-4 md:translate-y-8',
    },
    {
      id: 5,
      title: 'Rare One-of-a-Kind Finds',
      img: '/images/one-of-a-kind.png',
      aspect: 'aspect-[3/4] w-72 md:w-96',
      offsetY: 'translate-y-0',
    },
    {
      id: 6,
      title: 'Heritage Oregon Keepsakes',
      img: '/images/heritage.png',
      aspect: 'aspect-[16/9] w-80 md:w-[30rem]',
      offsetY: '-translate-y-6 md:-translate-y-10',
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[175vh] md:h-[180vh] bg-[#211B17] text-[#F3EBDD]">
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-12 md:py-16">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10 mb-6">
          <div className="md:col-span-8">
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A4875A] font-semibold mb-3">
              CURATED VENDOR MARKETPLACE
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight">
              75+ <span className="text-[#A4875A] font-normal italic">VENDORS.</span>
              <br />
              COUNTLESS POSSIBILITIES.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm md:text-base text-[#F3EBDD]/70 font-sans leading-relaxed border-l border-[#A4875A]/40 pl-4">
              One store, filled with thousands of unique pieces and stories waiting to be discovered under one roof.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery Track */}
        <div className="w-full overflow-hidden flex items-center my-auto py-8">
          <motion.div style={{ x }} className="flex gap-8 md:gap-12 px-6 md:px-12 items-center">
            {vendorVignettes.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setCursor('view', 'EXPLORE')}
                onMouseLeave={resetCursor}
                className={`relative flex-shrink-0 group ${item.aspect} ${item.offsetY} transition-transform duration-500`}
              >
                <div className="w-full h-full overflow-hidden border border-[#F3EBDD]/15 bg-[#171310] relative shadow-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211B17] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#A4875A] font-semibold mb-1">
                      VENDOR DISPLAY • NO. 0{item.id}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-medium text-[#F3EBDD]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Hint */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between z-10 text-[10px] tracking-[0.25em] uppercase text-[#F3EBDD]/50 border-t border-[#F3EBDD]/10 pt-4">
          <span>SCROLL DOWN TO EXPLORE GALLERY</span>
          <span>MYRTLE CREEK, OREGON</span>
        </div>
      </div>
    </section>
  );
};
