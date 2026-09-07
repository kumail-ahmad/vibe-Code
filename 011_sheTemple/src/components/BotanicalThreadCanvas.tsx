import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const BotanicalThreadCanvas: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Transform scroll progress to floral bloom opacity
  const flower1Opacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const flower2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const flower3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const flower4Opacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 1000"
      >
        <defs>
          {/* Subtle gold-rose thread stroke style */}
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#B96C7A" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#E9AEB8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Outer subtle guide thread line */}
        <path
          d="M 50,0 Q 85,150 15,300 T 80,600 T 20,800 T 50,1000"
          fill="none"
          stroke="#F6D8DC"
          strokeWidth="0.3"
          strokeDasharray="2 3"
        />

        {/* Animated Embroidered Thread */}
        <motion.path
          d="M 50,0 Q 85,150 15,300 T 80,600 T 20,800 T 50,1000"
          fill="none"
          stroke="url(#threadGradient)"
          strokeWidth="0.6"
          style={{ pathLength }}
        />

        {/* Node 1: Design (Hero -> Garden) */}
        <motion.g style={{ opacity: flower1Opacity }} transform="translate(45, 120)">
          <circle cx="0" cy="0" r="1.5" fill="#B96C7A" />
          <path d="M -3,-3 Q 0,-6 3,-3 Q 6,0 3,3 Q 0,6 -3,3 Q -6,0 -3,-3 Z" fill="none" stroke="#526052" strokeWidth="0.3" />
        </motion.g>

        {/* Node 2: Embroidery (Garden -> Textile) */}
        <motion.g style={{ opacity: flower2Opacity }} transform="translate(25, 320)">
          <circle cx="0" cy="0" r="1.8" fill="#C5A059" />
          <circle cx="0" cy="0" r="3.5" fill="none" stroke="#B96C7A" strokeWidth="0.3" strokeDasharray="0.5 0.5" />
        </motion.g>

        {/* Node 3: Fitting (Process -> Pattern) */}
        <motion.g style={{ opacity: flower3Opacity }} transform="translate(75, 620)">
          <circle cx="0" cy="0" r="1.5" fill="#B96C7A" />
          <path d="M 0,-4 L 3,0 L 0,4 L -3,0 Z" fill="none" stroke="#526052" strokeWidth="0.3" />
        </motion.g>

        {/* Node 4: Finishing (Tree -> Contact) */}
        <motion.g style={{ opacity: flower4Opacity }} transform="translate(30, 830)">
          <circle cx="0" cy="0" r="2" fill="#E9AEB8" />
          <circle cx="0" cy="0" r="4" fill="none" stroke="#C5A059" strokeWidth="0.4" />
        </motion.g>
      </svg>
    </div>
  );
};

