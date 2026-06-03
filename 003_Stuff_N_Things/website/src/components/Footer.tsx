import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { useCursor } from '../context/CursorContext';

export const Footer: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <footer className="bg-[#211B17] text-[#F3EBDD] py-16 px-6 md:px-12 border-t border-[#F3EBDD]/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Top Footer Main Branding Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F3EBDD]/10 items-start">
          <div className="lg:col-span-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A4875A] font-semibold block mb-2">
              INDEPENDENT ANTIQUE & VINTAGE STORE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F3EBDD] mb-4">
              STUFF N' THINGS
            </h2>
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A4875A] font-semibold">
              ANTIQUES • VINTAGE • FURNITURE
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="space-y-2 font-sans text-xs text-[#F3EBDD]/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A4875A]" />
                <span>875 S Main St, Myrtle Creek, OR 97457</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A4875A]" />
                <a href="tel:5416708557" className="hover:text-[#F3EBDD] transition-colors">
                  541-670-8557
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A4875A]" />
                <a href="mailto:brittany@stuffnthings.biz" className="hover:text-[#F3EBDD] transition-colors">
                  brittany@stuffnthings.biz
                </a>
              </div>
            </div>

            {/* Social & Contact Icon Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/stuffnthings_mc"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('open', 'INSTAGRAM')}
                onMouseLeave={resetCursor}
                aria-label="Instagram @stuffnthings_mc"
                className="w-12 h-12 rounded-full border border-[#F3EBDD]/20 flex items-center justify-center text-[#F3EBDD] hover:bg-[#59604A] hover:border-[#59604A] transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:brittany@stuffnthings.biz"
                onMouseEnter={() => setCursor('open', 'EMAIL')}
                onMouseLeave={resetCursor}
                aria-label="Email brittany@stuffnthings.biz"
                className="w-12 h-12 rounded-full border border-[#F3EBDD]/20 flex items-center justify-center text-[#F3EBDD] hover:bg-[#59604A] hover:border-[#59604A] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="tel:5416708557"
                onMouseEnter={() => setCursor('open', 'CALL')}
                onMouseLeave={resetCursor}
                aria-label="Call 541-670-8557"
                className="w-12 h-12 rounded-full border border-[#F3EBDD]/20 flex items-center justify-center text-[#F3EBDD] hover:bg-[#59604A] hover:border-[#59604A] transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Location Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#F3EBDD]/50 font-sans gap-4">
          <p>© {new Date().getFullYear()} Stuff N' Things. All rights reserved. Myrtle Creek, Oregon.</p>
          <div className="flex items-center gap-6">
            <a href="#story" className="hover:text-[#F3EBDD] transition-colors">
              Story
            </a>
            <a href="#finds" className="hover:text-[#F3EBDD] transition-colors">
              The Finds
            </a>
            <a href="#visit" className="hover:text-[#F3EBDD] transition-colors">
              Visit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
