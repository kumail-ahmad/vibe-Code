import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  dataCursor?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  dataCursor = 'OPEN',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
      data-cursor={dataCursor}
    >
      <div
        className={`relative group overflow-hidden px-7 py-3.5 rounded-full border border-islands-espresso/30 text-islands-espresso font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-500 ease-out hover:border-islands-terracotta hover:text-islands-cream ${className}`}
      >
        <span className="absolute inset-0 bg-islands-terracotta scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-full -z-10" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block text-left">
      {content}
    </button>
  );
};
