import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { CursorState } from '../types';

interface CustomCursorProps {
  cursorState: CursorState;
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState, cursorText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast, tight spring physics for responsive feel without lag
  const springConfig = { damping: 28, stiffness: 400, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check touch screen or reduced motion
    const touchMedia = window.matchMedia('(pointer: coarse)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchMedia.matches || reducedMotion.matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  const isExpanded = cursorState !== 'DEFAULT';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Outer Spring Ring */}
      <motion.div
        animate={{
          width: isExpanded ? 72 : 12,
          height: isExpanded ? 72 : 12,
          backgroundColor: isExpanded ? 'rgba(244, 240, 234, 0.95)' : '#eae5dc',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="rounded-full flex items-center justify-center text-center shadow-lg"
      >
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[#0e0e0e] text-[9px] font-mono tracking-widest uppercase font-semibold select-none px-1"
          >
            {cursorText || cursorState}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

