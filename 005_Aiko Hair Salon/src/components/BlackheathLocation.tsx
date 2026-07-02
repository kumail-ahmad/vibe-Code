import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import type { CursorState } from '../types';

interface BlackheathLocationProps {
  setCursorState: (state: CursorState, text?: string) => void;
  onOpenBooking: () => void;
}

export const BlackheathLocation: React.FC<BlackheathLocationProps> = ({ setCursorState, onOpenBooking }) => {
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Aiko+Hair+Salon+50+Tranquil+Vale+Blackheath+London+SE3+0BD';

  return (
    <section id="blackheath" className="relative py-32 bg-[#0e0e0e] text-[#eae5dc] border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222] pb-6 mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase block mb-2">
              06 — THE LOCATION
            </span>
            <h2 className="font-editorial-serif text-5xl md:text-7xl font-light text-[#eae5dc]">
              BLACKHEATH VILLAGE
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8c8275] tracking-widest uppercase">
            LONDON SE3 / TRANQUIL VALE
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Location Card Details (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#161616] p-8 md:p-12 border border-[#222]">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#222] text-[#a89f91] text-[10px] font-mono tracking-widest uppercase">
                <MapPin className="w-3 h-3" />
                <span>STOREFRONT & SALON ADDRESS</span>
              </div>

              <h3 className="font-editorial-serif text-3xl text-[#eae5dc] font-light">
                50 Tranquil Vale<br />
                Blackheath, London<br />
                <span className="text-[#a89f91]">SE3 0BD, United Kingdom</span>
              </h3>

              <p className="text-xs font-sans text-[#8c8275] font-light leading-relaxed">
                Located on Tranquil Vale in the heart of Blackheath Village, easily accessible from Blackheath Station and Lewisham.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#222]">
              <a
                href="tel:02083189982"
                onMouseEnter={() => setCursorState('VIEW', 'PHONE')}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className="flex items-center space-x-4 p-3 bg-[#0e0e0e] border border-[#222] hover:border-[#a89f91] transition-all group"
              >
                <Phone className="w-4 h-4 text-[#a89f91]" />
                <div>
                  <p className="text-[9px] font-mono text-[#8c8275] uppercase">TELEPHONE</p>
                  <p className="text-sm font-mono text-[#eae5dc] group-hover:text-[#a89f91] transition-colors">020 8318 9982</p>
                </div>
              </a>

              <a
                href="mailto:info@aikohairsalon.com"
                onMouseEnter={() => setCursorState('VIEW', 'EMAIL')}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className="flex items-center space-x-4 p-3 bg-[#0e0e0e] border border-[#222] hover:border-[#a89f91] transition-all group"
              >
                <Mail className="w-4 h-4 text-[#a89f91]" />
                <div>
                  <p className="text-[9px] font-mono text-[#8c8275] uppercase">EMAIL INQUIRIES</p>
                  <p className="text-sm font-mono text-[#eae5dc] group-hover:text-[#a89f91] transition-colors">info@aikohairsalon.com</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorState('OPEN', 'MAP')}
                  onMouseLeave={() => setCursorState('DEFAULT')}
                  className="py-4 bg-[#eae5dc] text-[#0e0e0e] font-mono text-[11px] tracking-[0.15em] uppercase font-bold flex items-center justify-center space-x-2 hover:bg-[#a89f91] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GOOGLE MAPS</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  onMouseEnter={() => setCursorState('OPEN', 'BOOK')}
                  onMouseLeave={() => setCursorState('DEFAULT')}
                  className="py-4 bg-[#161616] border border-[#a89f91] text-[#eae5dc] font-mono text-[11px] tracking-[0.15em] uppercase font-bold hover:bg-[#eae5dc] hover:text-[#0e0e0e] transition-colors"
                >
                  BOOK VISIT
                </button>
              </div>
            </div>
          </div>

          {/* Real Storefront Photography (Right) */}
          <div className="lg:col-span-7 relative min-h-[400px] bg-[#161616] border border-[#222] overflow-hidden group">
            <img
              src="/outside.jpeg"
              alt="AIKO Hair Salon Exterior Storefront — 50 Tranquil Vale Blackheath"
              className="w-full h-full object-cover filter brightness-[0.82] group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/40 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-[#0e0e0e]/90 text-[10px] font-mono text-[#a89f91] tracking-widest uppercase border border-[#222]">
                  REAL SALON EXTERIOR
                </span>
                <span className="text-xs font-mono text-[#eae5dc]">50 TRANQUIL VALE</span>
              </div>

              <div className="bg-[#0e0e0e]/90 p-6 border border-[#222] backdrop-blur-sm max-w-md space-y-2">
                <div className="flex items-center space-x-2 text-[#a89f91]">
                  <MapPin className="w-4 h-4 animate-bounce" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase">AIKO HAIR SALON</span>
                </div>
                <p className="font-editorial-serif text-xl text-[#eae5dc]">50 Tranquil Vale, Blackheath SE3 0BD</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-mono text-[#a89f91] hover:text-[#eae5dc] underline pt-1"
                >
                  Get Directions via Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
