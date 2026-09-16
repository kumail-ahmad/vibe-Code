import React from 'react';
import { motion } from 'framer-motion';

interface TextMaskRevealProps {
  text: string;
  className?: string;
  serif?: boolean;
  delay?: number;
}

export const TextMaskReveal: React.FC<TextMaskRevealProps> = ({
  text,
  className = '',
  serif = true,
  delay = 0,
}) => {
  const lines = text.split('\n');

  return (
    <div className={`overflow-hidden ${className}`}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden py-1">
          <motion.div
            initial={{ y: '100%', rotateX: -15 }}
            whileInView={{ y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              duration: 0.9,
              ease: [0.215, 0.61, 0.355, 1],
              delay: delay + index * 0.1,
            }}
            className={`${serif ? 'font-serif' : 'font-sans'}`}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
