import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Navbar: React.FC = () => {
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
    { name: 'JOURNAL', href: '#statement' },
    { name: 'WORK', href: '#work' },
    { name: 'COLOUR', href: '#colour' },
    { name: 'STUDIO', href: '#studio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Mark */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-white font-light uppercase">
              SHADOWS
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.3em] font-sans text-neutral-400 uppercase">
              BEAUTY SALON • BENGALURU
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] tracking-[0.25em] font-sans text-neutral-400 hover:text-white transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Direct Link */}
          <div className="hidden sm:flex items-center gap-6 text-[10px] tracking-[0.25em] font-sans text-neutral-300">
            <a href="tel:08041127534" className="hover:text-white transition-colors">
              080 4112 7534
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="https://www.instagram.com/the_shadows_salon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-30 bg-black flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-4xl tracking-wider text-white hover:text-neutral-400 transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="border-t border-neutral-800 pt-6 space-y-3 text-xs font-sans text-neutral-400">
              <div>PRESTIGE COPPER ARCH, INFANTRY ROAD</div>
              <div>BENGALURU, KARNATAKA 560001</div>
              <a href="tel:08041127534" className="block text-white font-semibold text-sm pt-2">
                080 4112 7534
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
