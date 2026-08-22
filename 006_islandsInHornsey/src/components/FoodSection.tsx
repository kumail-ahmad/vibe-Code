import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FoodSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0px', '-60px']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['-20px', '50px']);

  const categories = [
    { title: 'CAKES', tag: 'Freshly Baked Daily' },
    { title: 'SANDWICHES', tag: 'Artisanal Sourdough' },
    { title: 'SALADS', tag: 'Seasonal Grains & Greens' },
    { title: 'VEGAN', tag: 'Plant-Based Favorites' },
    { title: 'GLUTEN FREE', tag: 'Thoughtfully Prepared' },
  ];

  return (
    <section
      id="food"
      ref={containerRef}
      className="relative min-h-screen w-full bg-islands-cream py-32 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-islands-terracotta" />
            <span className="font-sans text-xs font-semibold tracking-widest text-islands-terracotta uppercase">
              SECTION 03 — FOOD & BAKERY
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-islands-espresso/60">
            <span>Fresh Ingredients</span>
            <span>·</span>
            <span>Honest Craft</span>
          </div>
        </div>

        {/* Large Headline */}
        <div className="mb-16">
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-islands-espresso font-medium leading-[0.9] tracking-tight">
            HONEST FOOD, <br />
            <span className="italic font-serif text-islands-olive font-light">MADE DAILY.</span>
          </h2>
        </div>

        {/* Verified Categories Bar */}
        <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-16 pb-6 border-b border-islands-espresso/15">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group px-5 py-2.5 rounded-full border border-islands-espresso/20 bg-islands-cream-light hover:border-islands-terracotta hover:bg-islands-terracotta hover:text-islands-cream transition-all duration-300 cursor-pointer"
              data-cursor="FOOD"
            >
              <span className="font-sans text-xs font-bold tracking-widest uppercase block">
                {cat.title}
              </span>
              <span className="font-sans text-[9px] tracking-wider uppercase opacity-60 group-hover:text-islands-cream">
                {cat.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Overlapping Editorial Photography Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          
          {/* Card 1: Cakes */}
          <motion.div style={{ y: y1 }} className="md:col-span-4 relative group" data-cursor="CAKES">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-islands-espresso/10 aspect-[3/4] bg-islands-cream-dark">
              <img
                src="/images/cakes_pastries.png"
                alt="Artisanal Cakes and Pastries at Islands Hornsey"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <span className="font-sans text-[10px] tracking-widest uppercase text-islands-terracotta block font-bold">
                BAKERY
              </span>
              <h3 className="font-serif text-2xl font-semibold text-islands-espresso">
                Cakes & Pastries
              </h3>
              <p className="font-sans text-xs text-islands-espresso/70 mt-1">
                Baked in-house and by local London artisanal bakers.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Sourdough Sandwiches (Featured Center) */}
          <motion.div style={{ y: y2 }} className="md:col-span-5 relative group mt-8 md:mt-0" data-cursor="SANDWICHES">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-islands-terracotta/30 aspect-[4/5] bg-islands-cream-dark">
              <img
                src="/images/gourmet_sandwich.png"
                alt="Freshly Toast Sourdough Sandwich"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <span className="font-sans text-[10px] tracking-widest uppercase text-islands-terracotta block font-bold">
                LUNCH
              </span>
              <h3 className="font-serif text-3xl font-semibold text-islands-espresso">
                Fresh Sandwiches
              </h3>
              <p className="font-sans text-xs text-islands-espresso/70 mt-1">
                Artisanal sourdough toasties and seasonal cold rolls.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Seasonal Salads */}
          <motion.div style={{ y: y3 }} className="md:col-span-3 relative group mt-8 md:mt-0" data-cursor="SALADS">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-islands-espresso/10 aspect-[3/4] bg-islands-cream-dark">
              <img
                src="/images/seasonal_salad.png"
                alt="Vibrant Seasonal Salad Bowl"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <span className="font-sans text-[10px] tracking-widest uppercase text-islands-olive block font-bold">
                VEGAN & HEALTH
              </span>
              <h3 className="font-serif text-2xl font-semibold text-islands-espresso">
                Salads & Bowls
              </h3>
              <p className="font-sans text-xs text-islands-espresso/70 mt-1">
                Nutritious grain bowls, avocado, and leafy seasonal greens.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
