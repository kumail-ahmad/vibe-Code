import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const TreeOfCraftScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const branchPath = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const flowerOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

  const CRAFT_NODES = [
    { label: 'ZARI', pos: 'translate(140, 120)', kanji: '金糸' },
    { label: 'MIRROR', pos: 'translate(360, 120)', kanji: '鏡細工' },
    { label: 'EMBROIDERY', pos: 'translate(100, 260)', kanji: '刺繍' },
    { label: 'STITCHING', pos: 'translate(400, 260)', kanji: '縫製' },
    { label: 'FIT', pos: 'translate(180, 380)', kanji: '適合' },
    { label: 'DETAIL', pos: 'translate(320, 380)', kanji: '細工' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full py-32 px-6 bg-[#FFF9F7] text-[#2B2928] overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 z-20">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#526052] font-semibold block mb-2">
          SCENE IX · THE TREE OF CRAFT
        </span>
        <h2 className="text-4xl md:text-6xl font-serif-editorial font-light">
          Rooted in Botanical Discipline
        </h2>
      </div>

      {/* Large SVG Botanical Tree Composition */}
      <div className="relative w-full max-w-2xl aspect-[4/3] z-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 500 450"
          fill="none"
        >
          {/* Main Trunk */}
          <motion.path
            d="M 250,440 C 250,350 240,280 250,200 C 260,120 250,40 250,40"
            stroke="#526052"
            strokeWidth="3"
            style={{ pathLength: branchPath }}
          />

          {/* Branch Left 1 (Zari) */}
          <motion.path
            d="M 250,300 C 210,260 170,200 140,120"
            stroke="#B96C7A"
            strokeWidth="1.8"
            style={{ pathLength: branchPath }}
          />

          {/* Branch Right 1 (Mirror) */}
          <motion.path
            d="M 250,300 C 290,260 330,200 360,120"
            stroke="#C5A059"
            strokeWidth="1.8"
            style={{ pathLength: branchPath }}
          />

          {/* Branch Left 2 (Embroidery) */}
          <motion.path
            d="M 250,350 C 190,320 140,290 100,260"
            stroke="#526052"
            strokeWidth="1.5"
            style={{ pathLength: branchPath }}
          />

          {/* Branch Right 2 (Stitching) */}
          <motion.path
            d="M 250,350 C 310,320 360,290 400,260"
            stroke="#526052"
            strokeWidth="1.5"
            style={{ pathLength: branchPath }}
          />

          {/* Blooming Flowers at Node Ends */}
          {CRAFT_NODES.map((node, idx) => (
            <motion.g key={idx} transform={node.pos} style={{ opacity: flowerOpacity }}>
              <circle cx="0" cy="0" r="8" fill="#F6D8DC" stroke="#B96C7A" strokeWidth="1" />
              <circle cx="0" cy="0" r="3" fill="#B96C7A" />
              <text
                x="14"
                y="4"
                fill="#2B2928"
                fontSize="11"
                fontFamily="monospace"
                letterSpacing="1"
              >
                {node.label} [{node.kanji}]
              </text>
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Final Statement */}
      <div className="mt-16 text-center space-y-2 z-20">
        <h3 className="text-3xl md:text-5xl font-serif-editorial font-light tracking-tight text-[#2B2928]">
          ROOTED IN CRAFT. <span className="italic text-[#B96C7A]">MADE FOR YOU.</span>
        </h3>
      </div>
    </section>
  );
};
