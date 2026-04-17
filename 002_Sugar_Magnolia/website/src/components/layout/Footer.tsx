import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUp } from 'lucide-react';
import { BotanicalElement } from '../ui/BotanicalElement';

export const Footer: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Sugar+Magnolia+552+SE+Main+St+Roseburg+OR+97470";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#211D1A] text-[#FAF7F2] relative border-t border-[#8C5A3E]/30 overflow-hidden">
      {/* Decorative Botanical Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#677359] via-[#C88A8A] to-[#8C5A3E]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#FAF7F2]/10">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BotanicalElement variant="flower" className="w-8 h-8 text-[#C88A8A]" animate={false} />
              <h2 className="font-serif text-3xl text-[#FAF7F2] font-medium tracking-tight">
                Sugar Magnolia
              </h2>
            </div>
            <p className="font-serif italic text-lg text-[#E3D7C5]/90 max-w-md">
              Revamped Furniture · Vintage Finds · Home Decor
            </p>
            <p className="text-xs text-[#FAF7F2]/70 leading-relaxed max-w-sm">
              An ever-changing collection of revamped furniture, vintage treasures and home décor in the heart of downtown Roseburg, Oregon.
            </p>

            <div className="pt-2">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8C5A3E] text-[#FAF7F2] px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#6C422C] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-xl text-[#FAF7F2] font-semibold border-b border-[#FAF7F2]/15 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#E3D7C5]/80">
              <li>
                <Link to="/" className="hover:text-[#C88A8A] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[#C88A8A] transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-[#C88A8A] transition-colors">The Collection</Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-[#C88A8A] transition-colors">Visit Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C88A8A] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Store Contact & Address */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-xl text-[#FAF7F2] font-semibold border-b border-[#FAF7F2]/15 pb-2">
              Visit The Shop
            </h3>
            <address className="not-italic text-sm text-[#E3D7C5]/80 space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C88A8A] shrink-0 mt-0.5" />
                <span>552 SE Main St<br />Roseburg, OR 97470</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C88A8A] shrink-0" />
                <a href="tel:5417404337" className="hover:text-[#C88A8A] transition-colors font-medium">
                  (541) 740-4337
                </a>
              </p>
            </address>

            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Sugar-Magnolia-On-Main-St-100071414899787/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sugar Magnolia on Facebook"
                className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 text-[#E3D7C5] border border-[#FAF7F2]/15 flex items-center justify-center hover:bg-[#8C5A3E] hover:text-[#FAF7F2] hover:scale-110 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sugarmagnoliaonmainst/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sugar Magnolia on Instagram"
                className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 text-[#E3D7C5] border border-[#FAF7F2]/15 flex items-center justify-center hover:bg-[#8C5A3E] hover:text-[#FAF7F2] hover:scale-110 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/50">
          <p>
            © {new Date().getFullYear()} Sugar Magnolia Boutique. All rights reserved. Roseburg, Oregon.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#E3D7C5]/80 hover:text-[#C88A8A] transition-colors group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
