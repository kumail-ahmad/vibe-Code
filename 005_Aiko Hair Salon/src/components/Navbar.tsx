import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import type { CursorState } from '../types';

interface NavbarProps {
  onOpenBooking: () => void;
  setCursorState: (state: CursorState, text?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, setCursorState }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'COLOUR', href: '#colour' },
    { label: 'ARTISTS', href: '#artists' },
    { label: 'SALON', href: '#salon' },
    { label: 'BLACKHEATH', href: '#blackheath' },
    { label: 'PRODUCTS', href: '#products' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0e0e0e]/85 backdrop-blur-md border-b border-[#222222]/80 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#0e0e0e]/90 via-[#0e0e0e]/40 to-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onMouseEnter={() => setCursorState('VIEW', 'HOME')}
            onMouseLeave={() => setCursorState('DEFAULT')}
            className="group flex flex-col tracking-wider"
          >
            <span className="font-editorial-serif text-2xl md:text-3xl tracking-[0.25em] text-[#eae5dc] group-hover:text-[#a89f91] transition-colors duration-300 font-light">
              AIKO
            </span>
            <span className="text-[9px] font-mono tracking-[0.35em] text-[#8c8275] uppercase -mt-1">
              Blackheath / London
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                onMouseEnter={() => setCursorState('VIEW', link.label)}
                onMouseLeave={() => setCursorState('DEFAULT')}
                className="text-xs font-mono tracking-[0.25em] uppercase text-[#eae5dc]/80 hover:text-[#a89f91] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#a89f91] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:02083189982"
              onMouseEnter={() => setCursorState('VIEW', 'CALL')}
              onMouseLeave={() => setCursorState('DEFAULT')}
              className="text-xs font-mono tracking-widest text-[#a89f91] hover:text-[#eae5dc] flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>020 8318 9982</span>
            </a>

            <button
              onClick={onOpenBooking}
              onMouseEnter={() => setCursorState('OPEN', 'BOOK')}
              onMouseLeave={() => setCursorState('DEFAULT')}
              className="px-5 py-2.5 bg-[#eae5dc] text-[#0e0e0e] text-xs font-mono tracking-[0.2em] uppercase font-semibold hover:bg-[#a89f91] hover:text-[#0e0e0e] transition-all duration-300 rounded-none shadow-md border border-[#eae5dc]"
            >
              BOOK
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 bg-[#eae5dc] text-[#0e0e0e] text-[10px] font-mono tracking-widest uppercase font-bold"
            >
              BOOK
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#eae5dc] hover:text-[#a89f91] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0e0e0e] text-[#eae5dc] flex flex-col justify-between p-8 pt-28 lg:hidden overflow-y-auto"
          >
            <div className="space-y-8">
              <p className="text-[10px] font-mono tracking-[0.4em] text-[#8c8275] uppercase">
                Navigation / Aiko Salon
              </p>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-editorial-serif text-4xl text-[#eae5dc] hover:text-[#a89f91] transition-colors flex items-center justify-between border-b border-[#222] pb-4"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#8c8275]" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#222] space-y-4">
              <div className="text-sm font-mono text-[#a89f91] space-y-1">
                <p className="text-xs text-[#eae5dc]">AIKO HAIR SALON</p>
                <p>50 Tranquil Vale, Blackheath, London SE3 0BD</p>
                <p className="pt-2 text-xs">Phone: <a href="tel:02083189982" className="underline text-[#eae5dc]">020 8318 9982</a></p>
                <p className="text-xs">Email: <a href="mailto:info@aikohairsalon.com" className="underline text-[#eae5dc]">info@aikohairsalon.com</a></p>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 bg-[#eae5dc] text-[#0e0e0e] font-mono tracking-[0.25em] text-xs uppercase font-bold text-center"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
