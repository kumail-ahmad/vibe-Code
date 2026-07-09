import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';
import type { CursorState } from '../types';

interface BookingFooterProps {
  onOpenBooking: () => void;
  setCursorState: (state: CursorState, text?: string) => void;
}

export const BookingFooter: React.FC<BookingFooterProps> = ({ onOpenBooking, setCursorState }) => {
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Aiko+Hair+Salon+50+Tranquil+Vale+Blackheath+London+SE3+0BD';

  return (
    <footer id="book" className="relative bg-[#0e0e0e] text-[#eae5dc] border-t border-[#1c1c1c] pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Index */}
        <div className="flex justify-between items-center border-b border-[#222] pb-6 mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase">
            08 — RESERVATION & FOOTER
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#8c8275] uppercase">
            BLACKHEATH / LONDON
          </span>
        </div>

        {/* Hero Conversion CTA */}
        <div className="text-center max-w-4xl mx-auto py-12 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-editorial-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#eae5dc] leading-none tracking-tight"
          >
            YOUR NEXT LOOK<br />
            <span className="italic text-[#a89f91]">STARTS HERE.</span>
          </motion.h2>

          <p className="text-sm font-sans font-light text-[#8c8275] max-w-xl mx-auto">
            Book an appointment at 50 Tranquil Vale, Blackheath Village. Our established team looks forward to tailoring your cut, colour, or session style.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={onOpenBooking}
              onMouseEnter={() => setCursorState('OPEN', 'RESERVE')}
              onMouseLeave={() => setCursorState('DEFAULT')}
              className="w-full sm:w-auto px-10 py-5 bg-[#eae5dc] text-[#0e0e0e] font-mono text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#a89f91] transition-all shadow-xl"
            >
              BOOK AN APPOINTMENT
            </button>

            <a
              href="tel:02083189982"
              onMouseEnter={() => setCursorState('VIEW', 'CALL')}
              onMouseLeave={() => setCursorState('DEFAULT')}
              className="w-full sm:w-auto px-8 py-5 bg-[#161616] border border-[#222] hover:border-[#a89f91] text-[#eae5dc] font-mono text-xs tracking-[0.25em] uppercase flex items-center justify-center space-x-3 transition-all"
            >
              <Phone className="w-4 h-4 text-[#a89f91]" />
              <span>020 8318 9982</span>
            </a>
          </div>
        </div>

        {/* Footer Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#222] pt-16 mt-20">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-editorial-serif text-3xl tracking-widest text-[#eae5dc]">AIKO</h3>
            <p className="text-xs font-mono text-[#8c8275] uppercase tracking-wider">
              London Hair / Blackheath Studio
            </p>
            <p className="text-xs font-sans text-[#8c8275] font-light max-w-xs">
              Classic cutting, precision colouring, Yuko straightening, session hair styling & Bumble and Bumble hair products.
            </p>
          </div>

          {/* Address & Hours */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono text-[#a89f91] tracking-widest uppercase">LOCATION</p>
            <p className="text-sm font-sans text-[#eae5dc] font-light">
              50 Tranquil Vale, Blackheath<br />
              London SE3 0BD, United Kingdom
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-mono text-[#a89f91] hover:text-[#eae5dc] underline gap-1 pt-1"
            >
              <span>View Map Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Socials & Contact Links */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-mono text-[#a89f91] tracking-widest uppercase">CONNECT & SOCIAL</p>
            <div className="space-y-2 text-xs font-mono text-[#8c8275]">
              <p>Email: <a href="mailto:info@aikohairsalon.com" className="text-[#eae5dc] underline hover:text-[#a89f91]">info@aikohairsalon.com</a></p>
              <p>Phone: <a href="tel:02083189982" className="text-[#eae5dc] underline hover:text-[#a89f91]">020 8318 9982</a></p>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorState('OPEN', 'FB')}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className="px-4 py-2 bg-[#161616] border border-[#222] text-[10px] font-mono tracking-widest text-[#a89f91] hover:text-[#eae5dc] hover:border-[#a89f91] uppercase transition-all"
              >
                FACEBOOK
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorState('OPEN', 'IG')}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className="px-4 py-2 bg-[#161616] border border-[#222] text-[10px] font-mono tracking-widest text-[#a89f91] hover:text-[#eae5dc] hover:border-[#a89f91] uppercase transition-all"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="border-t border-[#222] mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#8c8275]">
          <p>© {new Date().getFullYear()} AIKO HAIR SALON. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 sm:mt-0 uppercase tracking-widest">50 TRANQUIL VALE • BLACKHEATH VILLAGE • LONDON</p>
        </div>
      </div>
    </footer>
  );
};
