import React from 'react';
import { Quote } from 'lucide-react';

interface ReviewCardProps {
  quote: string;
  theme: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ quote, theme }) => {
  return (
    <div className="bg-[#FAF7F2] bg-paper-grain p-6 md:p-8 border border-[#5C473B]/15 relative flex flex-col justify-between hover:border-[#8C5A3E]/30 transition-all duration-300 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <Quote className="w-8 h-8 text-[#C88A8A]/40" />
        <span className="text-xs uppercase tracking-widest px-2.5 py-0.5 bg-[#677359]/10 text-[#4E5843] border border-[#677359]/20 font-medium">
          {theme}
        </span>
      </div>

      <p className="font-serif italic text-lg md:text-xl text-[#211D1A] leading-relaxed mb-6">
        "{quote}"
      </p>

      <div className="pt-4 border-t border-[#5C473B]/10 flex items-center justify-between text-xs tracking-wider text-[#5C473B]/80 uppercase">
        <span className="font-semibold">— Customer review</span>
        <span className="text-[#8C5A3E] font-medium">Roseburg Local</span>
      </div>
    </div>
  );
};
