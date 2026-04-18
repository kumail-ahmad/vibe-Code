import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CategoryData {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

interface CategoryCardProps {
  category: CategoryData;
  index?: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group relative overflow-hidden bg-[#FAF7F2] border border-[#5C473B]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#211D1A]/15 flex flex-col h-full">
      {/* Editorial Number & Tag Badge */}
      <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-[#5C473B]/10 bg-[#F4EFE6]/60">
        <span className="font-serif italic text-lg tracking-wider text-[#8C5A3E]">
          {category.number}
        </span>
        <span className="text-xs uppercase tracking-widest px-2.5 py-1 bg-[#677359]/10 text-[#4E5843] border border-[#677359]/20 font-medium">
          {category.tag}
        </span>
      </div>

      {/* Image Container with Editorial Zoom & Depth Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE8DC]">
        <img
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        {/* Floating Category Title over Image */}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="font-serif text-2xl md:text-3xl text-[#FAF7F2] font-medium tracking-tight drop-shadow-md">
            {category.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-paper-card">
        <p className="font-serif italic text-lg text-[#5C473B] mb-4 leading-snug">
          "{category.subtitle}"
        </p>

        <div className="pt-4 border-t border-[#5C473B]/10 flex items-center justify-between mt-auto">
          <span className="text-xs uppercase tracking-widest text-[#211D1A]/70 font-semibold group-hover:text-[#8C5A3E] transition-colors">
            Explore Category
          </span>
          <div className="w-8 h-8 rounded-full border border-[#8C5A3E]/30 flex items-center justify-center text-[#8C5A3E] group-hover:bg-[#8C5A3E] group-hover:text-[#FAF7F2] transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
