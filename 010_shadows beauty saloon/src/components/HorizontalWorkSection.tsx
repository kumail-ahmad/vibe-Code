import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HorizontalWorkSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

  const sequence = [
    {
      id: '01',
      tag: 'CUT',
      title: 'ARCHITECTURAL FORM',
      img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
      aspect: 'w-[80vw] sm:w-[460px] aspect-[3/4]',
    },
    {
      id: '02',
      tag: 'COLOUR',
      title: 'FRENCH BALAYAGE & GLOSS',
      img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85',
      aspect: 'w-[85vw] sm:w-[580px] aspect-[16/10]',
    },
    {
      id: '03',
      tag: 'STYLE',
      title: 'SILK TEXTURE FINISH',
      img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=85',
      aspect: 'w-[75vw] sm:w-[400px] aspect-[4/5]',
    },
    {
      id: '04',
      tag: 'DETAIL',
      title: 'PRECISION LIGHT REFLECTION',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
      aspect: 'w-[85vw] sm:w-[520px] aspect-square',
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[280vh] bg-black border-t border-neutral-900">
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-16">
        {/* Header Metadata */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-end z-10">
          <div>
            <span className="text-[9px] tracking-[0.35em] font-sans text-neutral-400 uppercase block mb-1">
              03 / HORIZONTAL GALLERY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-extralight uppercase tracking-wider">
              SEQUENCE <span className="italic font-normal">01–04.</span>
            </h2>
          </div>
          <span className="hidden sm:block text-[9px] tracking-[0.3em] font-sans text-neutral-400 uppercase">
            SCROLL TO TRAVEL GALLERY
          </span>
        </div>

        {/* Viewport Horizontal Track */}
        <motion.div style={{ x }} className="flex items-center gap-12 sm:gap-16 pl-6 md:pl-12 pr-24 my-auto">
          {sequence.map((item) => (
            <div key={item.id} data-cursor="DRAG" className="shrink-0 relative group">
              <div className={`overflow-hidden border border-neutral-800 ${item.aspect}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover bw-image filter grayscale contrast-[1.2] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <span className="text-[9px] font-sans tracking-[0.3em] text-neutral-400 uppercase block">
                    {item.id} • {item.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1 uppercase tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Minimal Line */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
          <div className="w-full h-[1px] bg-neutral-900 relative overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute top-0 left-0 bottom-0 right-0 bg-white origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
