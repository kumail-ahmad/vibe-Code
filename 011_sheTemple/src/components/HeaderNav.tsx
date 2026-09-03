import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderNavProps {
  onOpenConsultation: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[#FFF9F7]/85 backdrop-blur-md border-b border-[#B96C7A]/10' : 'py-7 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Mark */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border border-[#B96C7A]/40 flex items-center justify-center group-hover:border-[#B96C7A] transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#B96C7A]"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-editorial text-xl md:text-2xl font-light tracking-wider text-[#2B2928]">
              SHE TEMPLE
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#526052] font-medium -mt-1">
              Boutique · Jayanagar
            </span>
          </div>
        </a>

        {/* Center Editorial Monogram */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-[#2B2928]/70 uppercase">
          <a href="#garden" className="hover:text-[#B96C7A] transition-colors" data-cursor="EXPLORE">
            01 · The Garden
          </a>
          <span className="text-[#B96C7A]/30">•</span>
          <a href="#textile" className="hover:text-[#B96C7A] transition-colors" data-cursor="FEEL">
            02 · Textile
          </a>
          <span className="text-[#B96C7A]/30">•</span>
          <a href="#artisan" className="hover:text-[#B96C7A] transition-colors" data-cursor="CRAFT">
            03 · Craft
          </a>
          <span className="text-[#B96C7A]/30">•</span>
          <a href="#fit" className="hover:text-[#B96C7A] transition-colors" data-cursor="FIT">
            04 · Pattern
          </a>
        </div>

        {/* CTA */}
        <button
          onClick={onOpenConsultation}
          data-cursor="BOOK"
          className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-[#2B2928]/20 hover:border-[#B96C7A] transition-all duration-300 bg-[#FFF9F7]/50 text-xs tracking-widest uppercase text-[#2B2928]"
        >
          <span className="relative z-10 font-sans-editorial group-hover:text-[#FFF9F7] transition-colors duration-300">
            Book Consultation
          </span>
          <div className="absolute inset-0 bg-[#B96C7A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </button>
      </div>
    </motion.header>
  );
};

