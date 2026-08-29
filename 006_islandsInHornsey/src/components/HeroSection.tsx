import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt & parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
    mouseX.set(x);
    mouseY.set(y);
  };

  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  // 3D Mouse Parallax Shifts
  const bgTranslateX = useTransform(smoothMouseX, [-1, 1], [-25, 25]);
  const bgTranslateY = useTransform(smoothMouseY, [-1, 1], [-25, 25]);
  const fgTranslateX = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const fgTranslateY = useTransform(smoothMouseY, [-1, 1], [40, -40]);
  const textTranslateX = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
  const textTranslateY = useTransform(smoothMouseY, [-1, 1], [-15, 15]);

  // Scroll Driven Canvas Transformation into section 1
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-islands-cream overflow-hidden pt-28 pb-16 flex flex-col justify-between"
    >
      {/* Background Subtle Multi-Layer Parallax Photo */}
      <motion.div
        style={{
          y: heroImageY,
          scale: heroImageScale,
          x: bgTranslateX,
          translateY: bgTranslateY,
        }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <img
          src="/images/hero_interior.png"
          alt="Islands Hornsey Cafe Interior"
          className="w-full h-full object-cover filter contrast-[1.05]"
        />
      </motion.div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Column: Bold Editorial Typography */}
        <motion.div
          style={{ x: textTranslateX, y: textTranslateY, opacity: heroOpacity }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-islands-terracotta" />
            <p className="font-sans text-xs font-semibold tracking-widest text-islands-terracotta uppercase">
              104 HIGH STREET · HORNSEY · LONDON N8
            </p>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-islands-espresso leading-none mb-6">
            <span className="block text-islands-terracotta font-serif font-bold text-6xl md:text-8xl lg:text-9xl mb-2 tracking-tight">
              ISLANDS
            </span>
            <span className="block">COFFEE.</span>
            <span className="block">FOOD.</span>
            <span className="block italic text-islands-olive font-serif">A LITTLE</span>
            <span className="block">ESCAPE.</span>
          </h1>

          <div className="flex items-center gap-6 mt-4">
            <div className="font-sans text-xs tracking-widest uppercase text-islands-espresso/70 border-l-2 border-islands-olive/40 pl-4 py-1">
              Independent London Café <br />
              Hornsey / High Street
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual Frame with Layered Parallax Foreground Detail */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          
          {/* Main Visual Frame */}
          <motion.div
            style={{ y: heroImageY }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-islands-espresso/10 aspect-[4/5] bg-islands-cream-dark"
            data-cursor="EXPLORE"
          >
            <motion.img
              src="/images/hero_interior.png"
              alt="Warm Islands Hornsey Cafe Environment"
              style={{ scale: heroImageScale }}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-islands-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-islands-cream">
              <span className="font-serif text-2xl italic block">The Hornsey Haven</span>
              <span className="font-sans text-[10px] tracking-widest uppercase opacity-80">
                Atmosphere & Space · London N8
              </span>
            </div>
          </motion.div>

          {/* Layer 2: Floating Foreground Coffee Detail Card */}
          <motion.div
            style={{
              x: fgTranslateX,
              y: fgTranslateY,
            }}
            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 z-20 w-48 md:w-56 rounded-xl overflow-hidden border-2 border-islands-cream shadow-2xl bg-islands-cream p-2 hidden sm:block"
            data-cursor="COFFEE"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/artisan_coffee.png"
                alt="Artisan Specialty Coffee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <p className="font-serif text-sm font-semibold text-islands-espresso">Specialty Pour</p>
              <p className="font-sans text-[9px] uppercase tracking-wider text-islands-terracotta">
                Freshly Roasted
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex items-end justify-between pt-8 border-t border-islands-espresso/10">
        <div className="flex items-center gap-4 text-islands-espresso/60 text-xs font-sans tracking-widest uppercase">
          <span>Est. Hornsey</span>
          <span>·</span>
          <span>Quality Beans & Bakers</span>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-islands-espresso/70 text-xs font-sans tracking-widest uppercase"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-islands-terracotta" />
        </motion.div>
      </div>
    </section>
  );
};
