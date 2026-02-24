import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Info, Compass } from "lucide-react";
import type { ProductCategoryCategory } from "../data/business";

interface CategoryCardProps {
  category: ProductCategoryCategory;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-[#17221b] rounded-lg overflow-hidden border border-[#2d4f3a]/50 hover:border-[#c87a38]/60 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#c87a38]/10"
    >
      <div>
        {/* Category Image with Zoom Effect & Fallback */}
        <div className="relative h-64 overflow-hidden bg-[#0d1610]">
          {!imgError ? (
            <img
              src={category.image}
              alt={category.alt}
              onError={() => setImgError(true)}
              loading="lazy"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0d1610] text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <path d="M -50 40 Q 100 10 250 80 T 500 100" fill="none" stroke="#3f6c50" strokeWidth="1" />
                  <path d="M -20 120 Q 150 70 300 160 T 600 180" fill="none" stroke="#c87a38" strokeWidth="1" strokeDasharray="4,4" />
                </svg>
              </div>
              <Compass className="w-10 h-10 text-[#c87a38] mb-2 relative z-10" />
              <span className="font-serif text-lg font-bold text-[#f4eee1] relative z-10">{category.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17221b] via-[#17221b]/20 to-transparent" />
          
          <div className="absolute top-4 right-4">
            <span className="w-8 h-8 rounded-full bg-[#0d1610]/80 backdrop-blur-sm border border-[#3f6c50]/40 flex items-center justify-center text-[#c87a38] group-hover:bg-[#c87a38] group-hover:text-[#0d1610] transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#c87a38] uppercase block mb-1">
            DEPARTMENT 0{index + 1}
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#f4eee1] mb-2 group-hover:text-white transition-colors">
            {category.title}
          </h3>
          <p className="text-sm text-[#c2b9a7] leading-relaxed mb-4">
            {category.description}
          </p>

          {/* Verified Availability Note */}
          <div className="pt-3 border-t border-[#2d4f3a]/30 flex items-start space-x-2 text-xs text-[#9a907d]">
            <Info className="w-3.5 h-3.5 text-[#c87a38] shrink-0 mt-0.5" />
            <p className="leading-tight">
              Selection and availability may vary. Call or visit Brown's for current inventory.
            </p>
          </div>
        </div>
      </div>

      {/* Footer link to What We Carry page */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to="/what-we-carry"
          className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#c87a38] hover:text-[#d98a44] transition-colors"
        >
          <span>Explore {category.title}</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
}

