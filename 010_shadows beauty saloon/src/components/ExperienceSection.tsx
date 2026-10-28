import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll Transforms
  const imageScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.85, 1.05, 0.95]);
  const imageClip = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.8],
    ['inset(12% 15% 12% 15% round 24px)', 'inset(0% 0% 0% 0% round 0px)', 'inset(8% 10% 8% 10% round 32px)']
  );
  const textY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [80, 0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.85], [0, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative min-h-[140vh] w-full bg-[#0d0d0e] py-24 flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Editorial Header Tag */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 flex justify-between items-end">
        <div>
          <span className="text-[10px] tracking-[0.3em] font-sans text-[#9a7b56] uppercase block mb-2">
            01 / PHILOSOPHY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#f5f2eb] tracking-wide font-light">
            BEAUTY IS AN <br className="hidden sm:inline" />
            <span className="italic text-[#b5956b]">EXPERIENCE.</span>
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-xs tracking-widest font-sans text-[#a89f91] max-w-xs uppercase">
            Bespoke Hair, Skin & Bridal Artistry in Bengaluru
          </p>
        </div>
      </div>

      {/* Dynamic Scroll-Driven Image Canvas */}
      <div className="relative w-full h-[65vh] md:h-[80vh] my-8 overflow-hidden">
        <motion.div
          style={{
            scale: imageScale,
            clipPath: imageClip,
          }}
          className="w-full h-full relative shadow-2xl transition-all duration-300 ease-out"
        >
          {/* Authentic Beauty Studio Visual Asset Frame */}
          <div
            className="w-full h-full bg-cover bg-center filter brightness-[0.8] contrast-[1.05]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=85')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e] via-transparent to-[#0d0d0e]/60" />

          {/* Floating Editorial Overlay Text */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6"
          >
            <span className="text-xs font-sans tracking-[0.4em] text-[#9a7b56] uppercase mb-4 bg-[#0d0d0e]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#9a7b56]/30">
              SHADOWS STUDIO PHILOSOPHY
            </span>
            <p className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f2eb] max-w-4xl leading-tight font-light">
              "We focus on precision, individual hair texture, and timeless aesthetics — crafted specifically for you."
            </p>
            <span className="mt-6 text-xs font-sans tracking-widest text-[#a89f91] uppercase">
              PRESTIGE COPPER ARCH • INFANTRY ROAD
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Verified Salon Pillars */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-8 rounded-2xl bg-[#141416] border border-white/5 flex flex-col justify-between group hover:border-[#9a7b56]/40 transition-colors">
          <ShieldCheck className="w-8 h-8 text-[#9a7b56] mb-6 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-serif text-2xl text-[#f5f2eb] mb-2">Authentic Artistry</h3>
            <p className="text-xs text-[#a89f91] leading-relaxed font-sans">
              Personalized styling tailored to skin tone, hair health, and individual client preference.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-[#141416] border border-white/5 flex flex-col justify-between group hover:border-[#9a7b56]/40 transition-colors">
          <Award className="w-8 h-8 text-[#9a7b56] mb-6 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-serif text-2xl text-[#f5f2eb] mb-2">L'Oréal Professionnel Partner</h3>
            <p className="text-xs text-[#a89f91] leading-relaxed font-sans">
              Official salon listing featuring advanced color blending, French Balayage, and repair treatments.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-[#141416] border border-white/5 flex flex-col justify-between group hover:border-[#9a7b56]/40 transition-colors">
          <HeartHandshake className="w-8 h-8 text-[#9a7b56] mb-6 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-serif text-2xl text-[#f5f2eb] mb-2">Bridal & Skin Care</h3>
            <p className="text-xs text-[#a89f91] leading-relaxed font-sans">
              Experienced bridal makeup, saree draping, and rejuvenating skin care treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
