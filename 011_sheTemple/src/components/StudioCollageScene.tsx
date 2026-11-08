import React from 'react';
import { motion } from 'framer-motion';
import { STUDIO_COLLAGE_IMAGES } from '../data/assetsData';

export const StudioCollageScene: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full py-32 px-6 bg-[#FFF9F7] text-[#2B2928] overflow-hidden flex flex-col justify-center">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto w-full mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#B96C7A] font-semibold block mb-2">
            SCENE X · INSIDE THE ATELIER
          </span>
          <h2 className="text-4xl md:text-6xl font-serif-editorial font-light text-[#2B2928]">
            From The Studio
          </h2>
        </div>
        <p className="max-w-md text-xs md:text-sm font-sans-editorial text-[#2B2928]/70 font-light">
          Snapshots of raw embroidery frames, bespoke trial fittings, and client celebrations inside our Jayanagar boutique.
        </p>
      </div>

      {/* Asymmetrical Overlapping Editorial Collage */}
      <div className="max-w-7xl mx-auto w-full relative min-h-[580px] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {STUDIO_COLLAGE_IMAGES.map((img, idx) => {
          let colSpan = "md:col-span-4";
          let rotate = "rotate-1";
          let translate = "translate-y-0";

          if (idx === 0) { colSpan = "md:col-span-5"; rotate = "-rotate-2"; translate = "-translate-y-4"; }
          if (idx === 1) { colSpan = "md:col-span-4"; rotate = "rotate-3"; translate = "translate-y-6"; }
          if (idx === 2) { colSpan = "md:col-span-3"; rotate = "-rotate-1"; translate = "-translate-y-2"; }
          if (idx === 3) { colSpan = "md:col-span-4"; rotate = "rotate-2"; translate = "translate-y-4"; }
          if (idx === 4) { colSpan = "md:col-span-4"; rotate = "-rotate-3"; translate = "-translate-y-6"; }

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`${colSpan} ${rotate} ${translate} relative group rounded-3xl overflow-hidden border border-[#B96C7A]/20 shadow-2xl bg-[#FFF9F7]`}
            >
              <div className={`w-full ${img.aspect} overflow-hidden relative`}>
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2928]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-4 left-4 right-4 text-[#FFF9F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] block">
                    SHE TEMPLE ARCHIVE
                  </span>
                  <span className="font-serif-editorial text-lg">
                    {img.caption}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="max-w-7xl mx-auto w-full mt-20 text-center">
        <a
          href="https://www.justdial.com/bangalore/She-Temple-Boutique-Jayanagar-4th-Block-East/080P2903136_BZDET"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="INSTAGRAM"
          className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-[#2B2928] text-[#2B2928] hover:bg-[#2B2928] hover:text-[#FFF9F7] transition-all duration-500 shadow-lg text-xs font-mono tracking-widest uppercase"
        >
          <span>FOLLOW THE THREAD →</span>
        </a>
      </div>
    </section>
  );
};
