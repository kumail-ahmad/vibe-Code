import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Compass, Menu, X } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Escape', href: '#escape' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'Food', href: '#food' },
    { name: 'Story', href: '#story' },
    { name: 'The Room', href: '#room' },
    { name: 'Visit', href: '#contact' },
  ];

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=104+High+Street+Hornsey+London+N8+7NT';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-islands-cream/90 backdrop-blur-md border-b border-islands-espresso/10 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-baseline gap-3 text-islands-espresso">
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-islands-terracotta transition-colors duration-300">
            ISLANDS
          </span>
          <span className="hidden sm:inline-block font-sans text-[10px] tracking-widest text-islands-muted uppercase border-l border-islands-espresso/20 pl-3">
            Hornsey, London N8
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 font-sans text-xs font-medium tracking-widest uppercase text-islands-espresso/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-islands-terracotta transition-colors duration-300 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-islands-terracotta group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Callout */}
        <div className="hidden sm:flex items-center gap-4">
          <MagneticButton href={mapsUrl} target="_blank" rel="noopener noreferrer" dataCursor="MAP">
            <Compass className="w-3.5 h-3.5 text-islands-terracotta" />
            <span>Get Directions</span>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-islands-espresso p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-islands-cream border-b border-islands-espresso/10 px-6 py-8"
        >
          <nav className="flex flex-col gap-5 text-sm font-sans tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-islands-espresso hover:text-islands-terracotta transition-colors py-2 border-b border-islands-espresso/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-islands-terracotta text-islands-cream rounded-full text-xs font-semibold tracking-widest uppercase"
              >
                <Compass className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
