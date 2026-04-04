import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { useCursor } from '../context/CursorContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'THE FINDS', href: '#finds' },
    { name: 'STORY', href: '#story' },
    { name: 'VISIT', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F3EBDD]/90 backdrop-blur-md border-b border-[#211B17]/10 py-4 shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <a
            href="#"
            onMouseEnter={() => setCursor('open', 'HOME')}
            onMouseLeave={resetCursor}
            className="group flex flex-col"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.12em] text-[#211B17] uppercase group-hover:text-[#59604A] transition-colors">
              Stuff N' Things
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-[#A4875A] font-semibold">
              Myrtle Creek, Oregon
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setCursor('open', link.name)}
                onMouseLeave={resetCursor}
                className="font-sans text-xs tracking-[0.2em] font-semibold text-[#211B17]/80 hover:text-[#211B17] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#A4875A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/stuffnthings_mc"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursor('open', 'INSTAGRAM')}
              onMouseLeave={resetCursor}
              aria-label="Follow Stuff N' Things on Instagram"
              className="p-2 text-[#211B17] hover:text-[#59604A] transition-colors hidden md:flex items-center gap-2 text-xs tracking-widest font-semibold"
            >
              <InstagramIcon className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.2em] uppercase">@stuffnthings_mc</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 text-[#211B17] hover:text-[#59604A] transition-colors z-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#F3EBDD] flex flex-col justify-between p-8 pt-28 md:hidden border-b border-[#211B17]/10"
          >
            <div className="flex flex-col gap-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#A4875A] font-semibold border-b border-[#211B17]/10 pb-4">
                Navigation Menu
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl font-bold tracking-[0.1em] text-[#211B17] hover:text-[#59604A] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-[#211B17]/10">
              <a
                href="https://www.instagram.com/stuffnthings_mc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs tracking-widest text-[#211B17] font-semibold"
              >
                <InstagramIcon className="w-4 h-4 text-[#A4875A]" />
                @stuffnthings_mc
              </a>
              <a
                href="tel:5416708557"
                className="flex items-center gap-3 text-xs tracking-widest text-[#211B17] font-semibold"
              >
                <Phone className="w-4 h-4 text-[#A4875A]" />
                541-670-8557
              </a>
              <div className="flex items-center gap-3 text-xs tracking-wider text-[#211B17]/70">
                <MapPin className="w-4 h-4 text-[#A4875A]" />
                875 S Main St, Myrtle Creek, OR 97457
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

