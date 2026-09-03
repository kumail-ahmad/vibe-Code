import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on desktop devices
    if (window.innerWidth < 1024) return;
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setIsHovered(true);
        const text = el.getAttribute('data-cursor') || '';
        setHoverText(text);
      });
      el.addEventListener('mouseleave', () => {
        setIsHovered(false);
        setHoverText('');
      });
    });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#B96C7A] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
      />

      {/* Outer botanical ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center hidden lg:flex"
        animate={{
          x: position.x - (isHovered ? 32 : 18),
          y: position.y - (isHovered ? 32 : 18),
          width: isHovered ? 64 : 36,
          height: isHovered ? 64 : 36,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.4 }}
      >
        <div className={`w-full h-full rounded-full border border-[#B96C7A]/40 transition-colors duration-300 flex items-center justify-center ${isHovered ? 'bg-[#F6D8DC]/30 border-[#B96C7A] backdrop-blur-[1px]' : ''}`}>
          {hoverText && (
            <span className="text-[9px] font-mono tracking-widest text-[#2B2928] uppercase font-semibold">
              {hoverText}
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
};

