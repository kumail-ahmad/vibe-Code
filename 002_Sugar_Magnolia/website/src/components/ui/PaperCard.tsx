import React from 'react';

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'linen' | 'double-border' | 'editorial';
  hoverEffect?: boolean;
}

export const PaperCard: React.FC<PaperCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = true,
}) => {
  const hoverStyles = hoverEffect
    ? 'transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#211D1A]/10'
    : '';

  let variantBg = 'bg-paper-card border border-[#5C473B]/15 shadow-sm';
  if (variant === 'linen') {
    variantBg = 'bg-[#FAF7F2] bg-linen-pattern border border-[#5C473B]/20 shadow-md';
  } else if (variant === 'double-border') {
    variantBg = 'bg-[#FAF7F2] border-vintage-double shadow-sm';
  } else if (variant === 'editorial') {
    variantBg = 'bg-[#F4EFE6] bg-paper-grain border border-[#8C5A3E]/20 shadow-md';
  }

  return (
    <div
      className={`relative rounded-none p-6 md:p-8 ${variantBg} ${hoverStyles} ${className}`}
    >
      {/* Corner vintage marks */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#8C5A3E]/40" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#8C5A3E]/40" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#8C5A3E]/40" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#8C5A3E]/40" />

      {children}
    </div>
  );
};

