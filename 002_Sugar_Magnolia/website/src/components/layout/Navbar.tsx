import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { BotanicalElement } from '../ui/BotanicalElement';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'The Collection', path: '/collection' },
    { name: 'Visit Us', path: '/visit' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Strip */}
      <div className="bg-[#5C473B] text-[#FAF7F2] text-xs py-2 px-4 text-center tracking-widest uppercase font-medium flex items-center justify-center gap-2 border-b border-[#8C5A3E]/30">
        <BotanicalElement variant="leaf" className="w-3.5 h-3.5 text-[#EFE8DC]/80" animate={false} />
        <span>Constantly changing collection of revamped furniture & vintage finds · 552 SE Main St, Roseburg, OR</span>
        <BotanicalElement variant="leaf" className="w-3.5 h-3.5 text-[#EFE8DC]/80 hidden md:block" animate={false} />
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-xs border-b border-[#5C473B]/15 shadow-sm py-3'
            : 'bg-[#FAF7F2] border-b border-[#5C473B]/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link to="/" className="group flex items-center gap-3">
            <BotanicalElement variant="flower" className="w-8 h-8 text-[#C88A8A] transition-transform duration-500 group-hover:rotate-12" animate={false} />
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#211D1A] group-hover:text-[#8C5A3E] transition-colors leading-none">
                Sugar Magnolia
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C473B]/80 font-medium mt-0.5">
                Revamped Furniture & Vintage
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-widest font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-[#8C5A3E] font-semibold'
                      : 'text-[#211D1A]/80 hover:text-[#8C5A3E]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8C5A3E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Direct Call Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5417404337"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C5A3E] border border-[#8C5A3E]/40 px-4 py-2 hover:bg-[#8C5A3E] hover:text-[#FAF7F2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (541) 740-4337
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#211D1A] hover:text-[#8C5A3E] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[108px] z-50 bg-[#FAF7F2] bg-paper-grain border-t border-[#5C473B]/20 flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#5C473B]/10">
              <span className="font-serif italic text-lg text-[#8C5A3E]">Menu</span>
              <BotanicalElement variant="branch" className="w-16 h-8 text-[#677359]" animate={false} />
            </div>

            <nav className="flex flex-col gap-5 py-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-serif text-2xl tracking-wide py-2 border-b border-[#5C473B]/10 flex items-center justify-between ${
                      isActive ? 'text-[#8C5A3E] font-semibold pl-2 border-[#8C5A3E]' : 'text-[#211D1A]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-sans uppercase tracking-widest text-[#5C473B]/60">Explore</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-[#5C473B]/20 space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sugar+Magnolia+552+SE+Main+St+Roseburg+OR+97470"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#8C5A3E] text-[#FAF7F2] py-3 text-xs uppercase tracking-widest font-semibold"
              >
                <MapPin className="w-4 h-4" />
                Get Directions (552 SE Main St)
              </a>

              <a
                href="tel:5417404337"
                className="w-full flex items-center justify-center gap-2 border border-[#8C5A3E] text-[#8C5A3E] py-3 text-xs uppercase tracking-widest font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Store (541) 740-4337
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
