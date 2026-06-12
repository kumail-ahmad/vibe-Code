import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export const TheHuntSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursor, resetCursor } = useCursor();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle rotation and translation for interactive image
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const floatX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const floatY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    resetCursor();
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[#F3EBDD] overflow-hidden border-b border-[#211B17]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Statement */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#A65E42]" />
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold text-[#A65E42]">
              THE THRILL OF DISCOVERY
            </p>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#211B17] leading-[0.95] mb-8">
            YOU CAME LOOKING <br />
            <span className="text-[#59604A] italic font-normal">FOR ONE THING.</span>
            <br />
            <span className="mt-4 block">
              YOU'LL PROBABLY <br />
              LEAVE WITH <br />
              <span className="text-[#A65E42] italic font-normal">SOMETHING ELSE.</span>
            </span>
          </h2>

          <p className="font-sans text-base md:text-lg text-[#211B17]/80 leading-relaxed max-w-lg mb-8">
            That's the magic of Stuff N' Things. Step inside our aisleways and let serendipity take over as you wander through decades of craftsman furniture, rare vintage lamps, primitives, and estate collectibles.
          </p>

          <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#A4875A] font-semibold">
            <Sparkles className="w-4 h-4 text-[#A65E42]" />
            <span>NEVER THE SAME STORE TWICE</span>
          </div>
        </div>

        {/* Right Interactive Responsive Image */}
        <div className="lg:col-span-6 perspective-1000">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setCursor('view', 'DISCOVER')}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-none cursor-pointer group"
          >
            {/* Main Interactive Motion Image Card */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="w-full h-full border border-[#211B17]/20 shadow-2xl relative overflow-hidden bg-[#211B17]"
            >
              <img
                src="/images/storefront.png"
                alt="Stuff N' Things store interior with vintage treasures and warm lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211B17]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Interactive Badge */}
            <motion.div
              style={{ x: floatX, y: floatY }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-[#59604A] text-[#F3EBDD] p-6 border border-[#F3EBDD]/20 shadow-xl pointer-events-none"
            >
              <div className="flex flex-col items-center justify-center gap-1 text-center">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#A4875A]">
                  ESTATE FIND
                </span>
                <span className="font-serif text-2xl font-bold tracking-widest uppercase">
                  DISCOVER
                </span>
                <span className="text-[9px] tracking-widest uppercase opacity-80">
                  MYRTLE CREEK, OR
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
