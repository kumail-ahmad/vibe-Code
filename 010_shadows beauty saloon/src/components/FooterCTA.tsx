import React from 'react';
import { ArrowUp } from 'lucide-react';

export const FooterCTA: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-neutral-900 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Typographic Statement */}
        <div className="max-w-4xl mb-24">
          <span className="text-[9px] tracking-[0.4em] font-sans text-neutral-400 uppercase block mb-4">
            SHADOWS BEAUTY SALON
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.95] text-white font-extralight mb-12">
            YOUR NEXT <br />
            <span className="italic font-normal text-neutral-300">TRANSFORMATION</span> <br />
            STARTS HERE.
          </h2>

          {/* Minimal Links */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-neutral-900">
            <a
              href="tel:08041127534"
              data-cursor="CALL"
              className="text-xs font-sans tracking-[0.25em] text-white hover:text-neutral-400 uppercase transition-colors"
            >
              TEL: 080 4112 7534
            </a>
            <span className="text-neutral-800">•</span>
            <a
              href="mailto:luiyila.ashirmray@yahoo.com"
              data-cursor="EMAIL"
              className="text-xs font-sans tracking-[0.25em] text-white hover:text-neutral-400 uppercase transition-colors"
            >
              EMAIL: LUIYILA.ASHIRMRAY@YAHOO.COM
            </a>
            <span className="text-neutral-800">•</span>
            <a
              href="https://www.instagram.com/the_shadows_salon/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="text-xs font-sans tracking-[0.25em] text-white hover:text-neutral-400 uppercase transition-colors"
            >
              INSTAGRAM: @THE_SHADOWS_SALON
            </a>
          </div>
        </div>

        {/* Footer Bottom Metadata & Back to Top */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-sans text-neutral-500 uppercase tracking-widest">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-left">
            <span className="text-neutral-300">SHADOWS BEAUTY SALON</span>
            <span className="hidden sm:inline">•</span>
            <span>PRESTIGE COPPER ARCH, INFANTRY ROAD, BENGALURU</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://hair-salon-en.lorealprofessionnel.com/170226-shadows-beauty-salon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              L’ORÉAL PROFESSIONNEL PARTNER
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors uppercase"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

