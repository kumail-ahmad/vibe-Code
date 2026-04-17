import React from 'react';

interface BotanicalElementProps {
  variant?: 'flower' | 'branch' | 'leaf' | 'corner' | 'divider' | 'wreath';
  className?: string;
  animate?: boolean;
}

export const BotanicalElement: React.FC<BotanicalElementProps> = ({
  variant = 'flower',
  className = '',
  animate = true,
}) => {
  const animationClass = animate ? 'animate-float-slow' : '';

  switch (variant) {
    case 'flower':
      return (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-12 h-12 text-[#677359]/40 ${animationClass} ${className}`}
          aria-hidden="true"
        >
          {/* Stem & Leaves */}
          <path
            d="M50 90C50 65 48 45 46 25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M48 60C38 56 30 58 24 64C30 52 42 50 48 55"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M49 45C58 40 66 42 72 48C66 36 54 35 48 41"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Flower Petals (Pressed Botanical Style) */}
          <g transform="translate(46, 25)">
            <ellipse cx="0" cy="-12" rx="4.5" ry="11" fill="#C88A8A" fillOpacity="0.35" stroke="#A66B6B" strokeWidth="0.8" />
            <ellipse cx="10" cy="-6" rx="4.5" ry="11" transform="rotate(45 10 -6)" fill="#C88A8A" fillOpacity="0.3" stroke="#A66B6B" strokeWidth="0.8" />
            <ellipse cx="12" cy="5" rx="4.5" ry="11" transform="rotate(90 12 5)" fill="#C88A8A" fillOpacity="0.3" stroke="#A66B6B" strokeWidth="0.8" />
            <ellipse cx="5" cy="12" rx="4.5" ry="11" transform="rotate(135 5 12)" fill="#C88A8A" fillOpacity="0.3" stroke="#A66B6B" strokeWidth="0.8" />
            <ellipse cx="-6" cy="10" rx="4.5" ry="11" transform="rotate(180 -6 10)" fill="#C88A8A" fillOpacity="0.3" stroke="#A66B6B" strokeWidth="0.8" />
            <ellipse cx="-11" cy="-2" rx="4.5" ry="11" transform="rotate(225 -11 -2)" fill="#C88A8A" fillOpacity="0.3" stroke="#A66B6B" strokeWidth="0.8" />
            <ellipse cx="-5" cy="-11" rx="4.5" ry="11" transform="rotate(270 -5 -11)" fill="#C88A8A" fillOpacity="0.3" stroke="#A66B6B" strokeWidth="0.8" />
            {/* Center pistil */}
            <circle cx="0" cy="0" r="4" fill="#8C5A3E" stroke="#5C473B" strokeWidth="0.8" />
          </g>
        </svg>
      );

    case 'branch':
      return (
        <svg
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-24 h-12 text-[#677359] ${animationClass} ${className}`}
          aria-hidden="true"
        >
          <path
            d="M10 50C35 45 60 30 110 10"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Leaves along branch */}
          <path d="M25 46C20 38 15 36 10 38C16 35 24 37 26 44" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
          <path d="M45 39C42 29 38 25 32 26C37 23 44 26 46 36" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
          <path d="M68 30C70 20 68 14 62 12C67 12 72 17 70 28" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
          <path d="M90 20C96 12 96 6 92 3C95 5 97 11 92 18" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      );

    case 'corner':
      return (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-16 h-16 text-[#8C5A3E]/30 ${className}`}
          aria-hidden="true"
        >
          <path d="M5 75V20C5 11.7157 11.7157 5 20 5H75" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="20" cy="20" r="3" fill="#C88A8A" fillOpacity="0.4" />
          <path d="M20 20C25 10 30 12 35 15C28 17 24 23 20 20Z" fill="#677359" fillOpacity="0.3" stroke="#4E5843" strokeWidth="0.5" />
          <path d="M20 20C10 25 12 30 15 35C17 28 23 24 20 20Z" fill="#677359" fillOpacity="0.3" stroke="#4E5843" strokeWidth="0.5" />
        </svg>
      );

    case 'divider':
      return (
        <div className={`flex items-center justify-center gap-3 my-6 opacity-80 ${className}`}>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#8C5A3E]/40" />
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#8C5A3E]" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="3" fill="#C88A8A" fillOpacity="0.4" />
            <path d="M12 2C12 6 10 8 6 12C10 16 12 18 12 22C12 18 14 16 18 12C14 8 12 6 12 2Z" fill="#677359" fillOpacity="0.3" />
          </svg>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#8C5A3E]/40" />
        </div>
      );

    case 'wreath':
      return (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-20 h-20 text-[#677359] ${animationClass} ${className}`}
          aria-hidden="true"
        >
          <path d="M50 10C72 10 90 28 90 50C90 72 72 90 50 90C28 90 10 72 10 50" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="50" cy="10" r="2.5" fill="#C88A8A" />
          <circle cx="90" cy="50" r="2.5" fill="#8C5A3E" />
          <circle cx="50" cy="90" r="2.5" fill="#C88A8A" />
          <circle cx="10" cy="50" r="2.5" fill="#677359" />
        </svg>
      );

    case 'leaf':
    default:
      return (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8 text-[#677359]/50 ${animationClass} ${className}`}
          aria-hidden="true"
        >
          <path
            d="M5 35C15 25 25 15 35 5C22 10 12 20 5 35Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M5 35C15 25 25 15 35 5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M15 25C18 22 22 23 24 21" stroke="currentColor" strokeWidth="0.6" />
          <path d="M22 18C25 15 29 16 31 14" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      );
  }
};
