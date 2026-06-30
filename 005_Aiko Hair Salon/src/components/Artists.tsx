import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Stylist, CursorState } from '../types';

interface ArtistsProps {
  setCursorState: (state: CursorState, text?: string) => void;
  onOpenBooking: () => void;
}

const stylistsData: Stylist[] = [
  {
    id: 'nathan-gooding',
    name: 'NATHAN GOODING',
    role: 'SENIOR STYLIST & DIRECTOR',
    specialty: 'Classic Cutting & Session Styling',
    image: '/images/hero.png',
  },
  {
    id: 'established-team-1',
    name: 'ESTABLISHED SALON TEAM',
    role: 'CREATIVE STYLISTS',
    specialty: 'Bespoke Colouring & Hair-Ups',
    image: '/images/style.png',
  },
  {
    id: 'established-team-2',
    name: 'COLOUR & YUKO SPECIALISTS',
    role: 'TECHNICAL DIRECTORS',
    specialty: 'Yuko Permanent Straightening & Extensions',
    image: '/images/cut.png',
  },
];

export const Artists: React.FC<ArtistsProps> = ({ setCursorState, onOpenBooking }) => {
  const [activeStylist, setActiveStylist] = useState<string>(stylistsData[0].id);

  const selectedStylist = stylistsData.find((s) => s.id === activeStylist) || stylistsData[0];

  return (
    <section id="artists" className="relative py-32 bg-[#0e0e0e] text-[#eae5dc] border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#222] pb-6 mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase block mb-2">
              04 — THE ARTISTS
            </span>
            <h2 className="font-editorial-serif text-5xl md:text-7xl font-light text-[#eae5dc]">
              THE TEAM BEHIND THE WORK
            </h2>
          </div>
          <p className="text-xs font-mono text-[#8c8275] max-w-xs">
            An established team of passionate stylists bringing London media and session experience to Blackheath Village.
          </p>
        </div>

        {/* Interactive Artists Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Stylist Name List (Left) */}
          <div className="lg:col-span-6 space-y-8">
            {stylistsData.map((stylist, idx) => {
              const isActive = activeStylist === stylist.id;

              return (
                <motion.div
                  key={stylist.id}
                  onClick={() => setActiveStylist(stylist.id)}
                  onMouseEnter={() => {
                    setActiveStylist(stylist.id);
                    setCursorState('VIEW', 'ARTIST');
                  }}
                  onMouseLeave={() => setCursorState('DEFAULT')}
                  className={`p-6 border-b border-[#222] cursor-pointer transition-all duration-500 ${
                    isActive ? 'bg-[#161616] border-[#a89f91]' : 'hover:bg-[#121212]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-[#8c8275]">0{idx + 1}</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#a89f91] uppercase">
                      {stylist.role}
                    </span>
                  </div>

                  <h3
                    className={`font-editorial-serif text-3xl sm:text-4xl transition-colors duration-300 font-light ${
                      isActive ? 'text-[#eae5dc]' : 'text-[#8c8275]'
                    }`}
                  >
                    {stylist.name}
                  </h3>

                  <p className="text-xs font-sans text-[#8c8275] mt-2 font-light">
                    {stylist.specialty}
                  </p>
                </motion.div>
              );
            })}

            <div className="pt-6">
              <button
                onClick={onOpenBooking}
                onMouseEnter={() => setCursorState('OPEN', 'BOOK')}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className="w-full py-4 bg-[#161616] border border-[#a89f91]/40 hover:border-[#eae5dc] text-[#eae5dc] font-mono text-xs tracking-[0.25em] uppercase transition-all"
              >
                REQUEST STYLIST APPOINTMENT
              </button>
            </div>
          </div>

          {/* Large Stylist Portrait Display (Right) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              key={selectedStylist.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative aspect-[3/4] w-full overflow-hidden bg-[#161616] border border-[#222]"
            >
              <img
                src={selectedStylist.image}
                alt={selectedStylist.name}
                className="w-full h-full object-cover filter brightness-90 contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#a89f91] uppercase mb-1">
                  AIKO LONDON ARTIST
                </span>
                <h4 className="font-editorial-serif text-3xl text-[#eae5dc] font-light">
                  {selectedStylist.name}
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
