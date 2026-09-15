import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const PatternFitCanvas: React.FC = () => {
  const [activeLabel, setActiveLabel] = useState<string>('CUT');

  const LABELS = [
    {
      id: 'CUT',
      name: 'CUT',
      kanji: "裁断",
      desc: 'Precision body-mapping following individual armhole depth and shoulder slant for zero-tug ease.',
      coordinates: 'X: 120.4 Y: 84.2'
    },
    {
      id: 'FORM',
      name: 'FORM',
      kanji: "造形",
      desc: 'Structured darting and internal interlining that holds volume under heavy zari weight.',
      coordinates: 'X: 240.8 Y: 190.5'
    },
    {
      id: 'FIT',
      name: 'FIT',
      kanji: "適合",
      desc: 'Multi-trial adjustments ensuring zero restriction across bust, ribcage, and waistline.',
      coordinates: 'X: 180.0 Y: 320.1'
    },
    {
      id: 'FINISH',
      name: 'FINISH',
      kanji: "完成",
      desc: 'Hand-sewn satin piping, concealed zippers, and skin-soft cotton lining.',
      coordinates: 'X: 310.2 Y: 410.6'
    }
  ];

  return (
    <section id="fit" className="relative min-h-screen w-full py-28 px-6 bg-[#FFF9F7] text-[#2B2928] overflow-hidden flex flex-col justify-center border-t border-[#B96C7A]/10">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto w-full mb-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#526052] font-semibold block mb-2">
            SCENE VII · THE TAILORING PATTERN
          </span>
          <h2 className="text-4xl md:text-6xl font-serif-editorial font-light text-[#2B2928]">
            The Precision Fit
          </h2>
        </div>
        <p className="max-w-md text-xs md:text-sm font-sans-editorial text-[#2B2928]/70 font-light">
          Japanese pattern drafting principles integrated with bespoke Indian bridal tailoring sketches.
        </p>
      </div>

      {/* Main Pattern Sketch Canvas */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Architectural Interactive Pattern SVG */}
        <div className="lg:col-span-8 relative aspect-[4/3] rounded-3xl border border-[#2B2928]/20 bg-[#FFF9F7] p-8 shadow-inner overflow-hidden flex items-center justify-center">
          {/* Subtle Sewing Pattern Grid */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2B2928_1px,transparent_1px)] bg-[size:16px_16px]"></div>

          <svg
            className="w-full h-full max-h-[420px]"
            viewBox="0 0 500 400"
            fill="none"
          >
            {/* Blouse / Lehenga Pattern Drafting Lines */}
            <motion.path
              d="M 120,60 L 380,60 L 420,180 L 350,340 L 150,340 L 80,180 Z"
              stroke="#2B2928"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            
            {/* Armhole Curve */}
            <motion.path
              d="M 120,60 C 180,90 200,160 150,220"
              stroke="#B96C7A"
              strokeWidth="1.5"
            />

            {/* Neckline Cut Curve */}
            <motion.path
              d="M 200,60 Q 250,140 300,60"
              stroke="#526052"
              strokeWidth="1.5"
            />

            {/* Animated Measurement Line 1 */}
            <motion.line
              x1="80"
              y1="180"
              x2="420"
              y2="180"
              stroke="#C5A059"
              strokeWidth="1"
              strokeDasharray="2 2"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            {/* Animated Measurement Line 2 */}
            <motion.line
              x1="250"
              y1="60"
              x2="250"
              y2="340"
              stroke="#526052"
              strokeWidth="1"
              strokeDasharray="2 2"
            />

            {/* Interactive Nodes for CUT, FORM, FIT, FINISH */}
            {LABELS.map((item) => {
              const isActive = activeLabel === item.id;
              let cx = 120;
              let cy = 60;
              if (item.id === 'FORM') { cx = 250; cy = 140; }
              if (item.id === 'FIT') { cx = 250; cy = 180; }
              if (item.id === 'FINISH') { cx = 350; cy = 340; }

              return (
                <g key={item.id} className="cursor-pointer" onClick={() => setActiveLabel(item.id)}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? "10" : "6"}
                    fill={isActive ? "#B96C7A" : "#FFF9F7"}
                    stroke="#2B2928"
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />
                  <text
                    x={cx + 14}
                    y={cy + 4}
                    fill="#2B2928"
                    fontSize="11"
                    fontFamily="monospace"
                    letterSpacing="1"
                  >
                    {item.name} [{item.kanji}]
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="absolute top-4 left-4 font-mono text-[9px] text-[#526052] uppercase tracking-widest">
            SKETCH ID: ST-2026-FIT / BENGALURU
          </div>
        </div>

        {/* Right Label Detail Box */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-2 border-b border-[#2B2928]/20 pb-4">
            {LABELS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveLabel(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-widest transition-all ${
                  activeLabel === item.id
                    ? 'bg-[#2B2928] text-[#FFF9F7]'
                    : 'bg-[#FFF9F7] text-[#2B2928]/60 hover:text-[#2B2928]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {LABELS.filter((l) => l.id === activeLabel).map((active) => (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-serif-editorial text-[#B96C7A]">
                  {active.name}
                </span>
                <span className="text-xs font-mono text-[#526052]">
                  [{active.kanji}]
                </span>
              </div>
              <p className="text-sm font-sans-editorial text-[#2B2928]/80 leading-relaxed font-light">
                {active.desc}
              </p>
              <div className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase">
                TAILOR COORDINATES: {active.coordinates}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

