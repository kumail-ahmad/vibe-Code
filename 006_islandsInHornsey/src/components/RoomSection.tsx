import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const RoomSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Progressive spatial image expansion (Small -> Medium -> Full Viewport)
  const imageWidth = useTransform(scrollYProgress, [0.1, 0.7], ['45%', '100%']);
  const imageHeight = useTransform(scrollYProgress, [0.1, 0.7], ['50vh', '100vh']);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.7], ['32px', '0px']);
  const textScale = useTransform(scrollYProgress, [0.4, 0.8], [0.8, 1.2]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <section
      id="room"
      ref={containerRef}
      className="relative h-[250vh] bg-islands-cream"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Expanding Room Canvas Frame */}
        <motion.div
          style={{
            width: imageWidth,
            height: imageHeight,
            borderRadius: borderRadius,
          }}
          className="relative overflow-hidden shadow-2xl bg-islands-black transition-all duration-100 ease-out"
          data-cursor="THE ROOM"
        >
          <img
            src="/images/cafe_space.png"
            alt="Islands Hornsey Cafe Room Environment"
            className="w-full h-full object-cover filter contrast-[1.05]"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-islands-black/90 via-islands-black/40 to-transparent" />

          {/* Full Screen Overlay Headline: THE ROOM */}
          <motion.div
            style={{ scale: textScale, opacity: textOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-islands-cream z-10"
          >
            <span className="font-sans text-xs font-semibold tracking-widest text-islands-sand uppercase mb-4">
              SECTION 05 — ENVIRONMENT
            </span>

            <h2 className="font-serif text-7xl md:text-9xl font-bold tracking-tight text-islands-cream leading-none mb-6">
              THE ROOM
            </h2>

            <p className="font-serif text-xl md:text-2xl italic text-islands-cream/90 max-w-xl font-light">
              "Designed as an island of quiet in the city. Warm wood, natural light, and space to think."
            </p>

            <div className="mt-8 flex items-center gap-6 font-sans text-xs uppercase tracking-widest text-islands-sand">
              <span>Natural Oak</span>
              <span>·</span>
              <span>Soft Linen</span>
              <span>·</span>
              <span>High Street Views</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

