import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'brass';
  className?: string;
  cursorText?: string;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'primary',
  className = '',
  cursorText = 'OPEN',
  ariaLabel,
}) => {
  const { setCursor, resetCursor } = useCursor();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    resetCursor();
  };

  const handleMouseEnter = () => {
    setCursor('open', cursorText);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#211B17] text-[#F3EBDD] border border-[#211B17] hover:bg-[#59604A] hover:border-[#59604A]';
      case 'secondary':
        return 'bg-[#F3EBDD] text-[#211B17] border border-[#211B17]/20 hover:bg-[#211B17] hover:text-[#F3EBDD]';
      case 'brass':
        return 'bg-[#A4875A] text-[#211B17] border border-[#A4875A] hover:bg-[#59604A] hover:text-[#F3EBDD] hover:border-[#59604A]';
      case 'outline':
        return 'bg-transparent text-[#211B17] border border-[#211B17]/30 hover:border-[#211B17] hover:bg-[#211B17]/5';
      default:
        return 'bg-[#211B17] text-[#F3EBDD] border border-[#211B17]';
    }
  };

  const baseClasses = `relative inline-flex items-center justify-center font-sans font-medium text-xs md:text-sm tracking-[0.18em] uppercase py-4 px-8 transition-colors duration-300 group rounded-none ${getVariantStyles()} ${className}`;

  const content = (
    <motion.div
      style={{ x: springX, y: springY }}
      className="flex items-center justify-center gap-3 w-full h-full"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <a
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button
        type="button"
        onClick={onClick}
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    </div>
  );
};

