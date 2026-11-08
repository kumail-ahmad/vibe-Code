import React from 'react';
import { SHE_TEMPLE_INFO } from '../data/assetsData';

interface MinimalContactAtelierProps {
  onOpenConsultation: () => void;
}

export const MinimalContactAtelier: React.FC<MinimalContactAtelierProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-screen w-full py-32 px-6 bg-[#FFF9F7] text-[#2B2928] overflow-hidden flex flex-col justify-between border-t border-[#B96C7A]/15">
      {/* Massive Floral Branch SVG Crossing Composition */}
      <svg
        className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-25 z-0"
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMaxYMin slice"
      >
        <path
          d="M 1050,-50 C 800,100 650,250 400,300 C 250,330 150,250 50,450 C -50,600 -100,750 -100,750"
          fill="none"
          stroke="#526052"
          strokeWidth="1.5"
        />
        <circle cx="400" cy="300" r="24" fill="#F6D8DC" />
        <circle cx="400" cy="300" r="10" fill="#B96C7A" />
        <circle cx="650" cy="250" r="30" fill="#E9AEB8" />
        <circle cx="650" cy="250" r="12" fill="#C5A059" />
      </svg>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Column Headline */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#B96C7A] font-semibold block">
            SCENE XI · APPOINTMENT & CONTACT
          </span>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif-editorial font-light leading-[0.92] text-[#2B2928]">
            LET'S MAKE <br />
            <span className="italic text-[#B96C7A]">SOMETHING</span> <br />
            YOURS.
          </h2>

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              data-cursor="BOOK"
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#2B2928] text-[#FFF9F7] hover:bg-[#B96C7A] transition-colors duration-500 shadow-xl text-xs font-mono tracking-widest uppercase"
            >
              <span>BOOK A CONSULTATION →</span>
            </button>
          </div>
        </div>

        {/* Right Verified Contact Info */}
        <div className="lg:col-span-5 space-y-8 bg-[#FFF9F7]/90 backdrop-blur-sm p-8 rounded-3xl border border-[#B96C7A]/20 shadow-xl">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#526052] uppercase block mb-1">
              STUDIO LOCATION
            </span>
            <h3 className="font-serif-editorial text-2xl text-[#2B2928]">
              {SHE_TEMPLE_INFO.name}
            </h3>
            <p className="text-sm font-sans-editorial text-[#2B2928]/80 font-light mt-1 leading-relaxed">
              {SHE_TEMPLE_INFO.address}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#B96C7A]/15">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#526052] uppercase block mb-1">
                PHONE
              </span>
              <a
                href={`tel:${SHE_TEMPLE_INFO.phone.replace(/\s+/g, '')}`}
                className="font-mono text-sm text-[#2B2928] hover:text-[#B96C7A] transition-colors"
              >
                +91 {SHE_TEMPLE_INFO.phone}
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#526052] uppercase block mb-1">
                EMAIL
              </span>
              <a
                href={`mailto:${SHE_TEMPLE_INFO.email}`}
                className="font-mono text-xs text-[#2B2928] hover:text-[#B96C7A] transition-colors break-all"
              >
                {SHE_TEMPLE_INFO.email}
              </a>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase block mb-1">
              STUDIO HOURS
            </span>
            <p className="text-xs font-sans-editorial text-[#2B2928]/70 font-light">
              {SHE_TEMPLE_INFO.timings}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="max-w-7xl mx-auto w-full pt-16 border-t border-[#B96C7A]/10 z-10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono tracking-widest text-[#2B2928]/50 uppercase gap-4">
        <span>© {new Date().getFullYear()} SHE TEMPLE BOUTIQUE · EST. {SHE_TEMPLE_INFO.established}</span>
        <span>JAYANAGAR 4TH BLOCK · BENGALURU</span>
      </div>
    </section>
  );
};
