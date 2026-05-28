import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Check } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { MagneticButton } from './MagneticButton';

interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  img: string;
  gridSpan: string;
  aspectRatio: string;
}

export const CategoryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const { setCursor, resetCursor } = useCursor();

  const categories: CategoryItem[] = [
    {
      id: 'furniture',
      name: 'FURNITURE',
      subtitle: 'Solid Wood, Mid-Century & Heirloom Pieces',
      description:
        'From hand-carved oak cabinets and vintage armchairs to mid-century modern credenzas and rustic tables, our vendors curate sturdy, character-rich furniture built to last generations.',
      details: [
        'Antique dressers, sideboards & oak cabinets',
        'Mid-century modern tables & accent chairs',
        'Refinished rustic farmhouse dining tables',
        'Vintage wicker, rattan & wrought iron accents',
      ],
      img: '/images/furniture.png',
      gridSpan: 'md:col-span-8',
      aspectRatio: 'aspect-[16/10]',
    },
    {
      id: 'vintage',
      name: 'VINTAGE',
      subtitle: 'Nostalgic Era Goods & Retro Classics',
      description:
        'A celebration of 20th-century craftsmanship. Explore vintage glassware, kitchenware, retro signs, nostalgia items, and timeless everyday objects from decades past.',
      details: [
        'Vintage kitchenware & Pyrex collectibles',
        'Retro advertising tins & enamelware',
        'Mid-century lighting & pottery',
        'Nostalgic Americana & folk art',
      ],
      img: '/images/decor.png',
      gridSpan: 'md:col-span-4',
      aspectRatio: 'aspect-[4/5]',
    },
    {
      id: 'home-decor',
      name: 'HOME DECOR',
      subtitle: 'Textiles, Mirrors, Lighting & Accents',
      description:
        'Elevate your living space with warm, tactile textures. Discover ornate gilt mirrors, vintage ceramic vases, hand-woven linens, brass candlesticks, and framed artwork.',
      details: [
        'Ornate antique mirrors & picture frames',
        'Brass, bronze & crystal table lamps',
        'Stoneware jugs & hand-thrown pottery',
        'Vintage rugs, textiles & wall hangings',
      ],
      img: '/images/antiques.png',
      gridSpan: 'md:col-span-4',
      aspectRatio: 'aspect-[4/5]',
    },
    {
      id: 'collectibles',
      name: 'COLLECTIBLES',
      subtitle: 'Coins, Toys, Ephemera & Curiosities',
      description:
        'For avid collectors and curious minds. Discover vintage pocket watches, historical coins, paper ephemera, classic toys, and rare display pieces.',
      details: [
        'Vintage ephemera, postcards & maps',
        'Historic coins & pocket watch timepieces',
        'Classic tin toys & collectible figurines',
        'Vintage cameras, barware & glass bottles',
      ],
      img: '/images/collectibles.png',
      gridSpan: 'md:col-span-4',
      aspectRatio: 'aspect-[4/5]',
    },
    {
      id: 'antiques',
      name: 'ANTIQUES',
      subtitle: '19th Century Artifacts & Estate Keepsakes',
      description:
        'Authentic 19th and early 20th-century antiques sourced with care. Fine clocks, carved chests, primitives, and estate treasures rich in history.',
      details: [
        'Victorian & Edwardian decorative antiques',
        'Hand-carved wooden chests & trunks',
        'Antique mantel clocks & barometers',
        'Early American primitives & ironwork',
      ],
      img: '/images/heritage.png',
      gridSpan: 'md:col-span-4',
      aspectRatio: 'aspect-[4/5]',
    },
    {
      id: 'one-of-a-kind',
      name: 'ONE-OF-A-KIND FINDS',
      subtitle: 'Architectural Salvage & Rare Oddities',
      description:
        'The truly unexpected. Reclaimed barnwood elements, industrial salvage, antique keys, hand-forged hardware, and rare items you won’t see anywhere else.',
      details: [
        'Reclaimed architectural wood & hardware',
        'Hand-forged ironwork & antique keys',
        'Unique store display props & signage',
        'Curious estate oddities & art salvage',
      ],
      img: '/images/one-of-a-kind.png',
      gridSpan: 'md:col-span-12',
      aspectRatio: 'aspect-[21/9]',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="finds" className="py-24 md:py-36 px-6 md:px-12 bg-[#F3EBDD] border-b border-[#211B17]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#211B17]/15 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#59604A]" />
              <p className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold text-[#59604A]">
                BROWSE BY CATEGORY
              </p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#211B17]">
              THE <span className="italic text-[#59604A] font-normal">FINDS.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm tracking-widest uppercase text-[#A4875A] font-semibold max-w-xs">
            SELECT A CATEGORY TO EXPLORE WHAT WE COMMONLY FEATURE IN THE STORE.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`${cat.gridSpan} group cursor-pointer`}
              onClick={() => setSelectedCategory(cat)}
              onMouseEnter={() => setCursor('open', 'VIEW')}
              onMouseLeave={resetCursor}
            >
              <div className="relative overflow-hidden border border-[#211B17]/15 bg-[#211B17] shadow-xl group-hover:border-[#59604A] transition-colors duration-500">
                {/* Masked reveal container */}
                <div className={`w-full ${cat.aspectRatio} overflow-hidden relative`}>
                  <img
                    src={cat.img}
                    alt={`${cat.name} category - Stuff N' Things Myrtle Creek`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211B17] via-[#211B17]/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                </div>

                {/* Caption Bar */}
                <div className="p-6 md:p-8 flex flex-col justify-between bg-[#211B17] text-[#F3EBDD]">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#A4875A] font-semibold block mb-1">
                        CATEGORY • {cat.id.toUpperCase()}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#F3EBDD] group-hover:text-[#A4875A] transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#F3EBDD]/20 flex items-center justify-center group-hover:bg-[#59604A] group-hover:border-[#59604A] transition-all">
                      <ArrowUpRight className="w-5 h-5 text-[#F3EBDD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[#F3EBDD]/70 font-sans line-clamp-2">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Editorial Category Detail Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#211B17]/80 backdrop-blur-md"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F3EBDD] text-[#211B17] max-w-3xl w-full border border-[#211B17]/20 shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#211B17] text-[#F3EBDD] rounded-full flex items-center justify-center hover:bg-[#59604A] transition-colors"
                aria-label="Close detail modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 h-48 md:h-auto relative bg-[#211B17]">
                  <img
                    src={selectedCategory.img}
                    alt={selectedCategory.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211B17]/80 via-transparent to-transparent md:hidden" />
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#A4875A] font-bold block mb-2">
                      CATEGORY OVERVIEW
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#211B17] mb-2">
                      {selectedCategory.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-wider text-[#59604A] uppercase mb-6">
                      {selectedCategory.subtitle}
                    </p>
                    <p className="text-sm font-sans text-[#211B17]/80 leading-relaxed mb-6">
                      {selectedCategory.description}
                    </p>

                    <p className="text-xs font-bold tracking-widest uppercase text-[#211B17] mb-3">
                      WHAT YOU'LL DISCOVER IN THIS CATEGORY:
                    </p>
                    <ul className="space-y-2 mb-8">
                      {selectedCategory.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-[#211B17]/80 font-sans">
                          <Check className="w-4 h-4 text-[#59604A] flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#211B17]/15 flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase text-[#211B17]/60 font-semibold">
                      MYRTLE CREEK STOREFRONT
                    </span>
                    <MagneticButton href="#visit" variant="primary" onClick={() => setSelectedCategory(null)}>
                      <span>VISIT THE SHOP</span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
