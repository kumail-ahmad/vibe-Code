import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Compass, Menu, X, MapPin } from "lucide-react";
import { businessInfo } from "../data/business";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "What We Carry", path: "/what-we-carry" },
    { name: "Visit Us", path: "/visit-us" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1610]/90 backdrop-blur-md border-b border-[#2d4f3a]/40 shadow-xl py-3"
          : "bg-gradient-to-b from-[#0d1610]/95 via-[#0d1610]/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c87a38] rounded-sm"
            aria-label="Brown's Sporting Goods - Home"
          >
            <div className="w-10 h-10 rounded-md bg-[#1e3526] border border-[#3f6c50]/50 flex items-center justify-center text-[#c87a38] group-hover:bg-[#2d4f3a] group-hover:border-[#c87a38]/50 transition-all shadow-md">
              <Compass className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#f4eee1] leading-none group-hover:text-white transition-colors">
                BROWN'S
              </span>
              <span className="text-[10px] tracking-[0.25em] font-semibold text-[#c87a38] uppercase mt-0.5">
                Sporting Goods
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-sm font-medium transition-all relative ${
                  isActive(link.path)
                    ? "text-[#f4eee1] font-semibold"
                    : "text-[#c2b9a7] hover:text-[#f4eee1]"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#c87a38] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Call & Store CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-md text-xs font-semibold uppercase tracking-wider text-[#d6c5a8] hover:text-white bg-[#17221b] border border-[#2d4f3a]/80 hover:border-[#c87a38]/60 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#c87a38]" />
              <span>{businessInfo.phone}</span>
            </a>

            <Link
              to="/visit-us"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider text-[#0d1610] bg-[#c87a38] hover:bg-[#d98a44] transition-all shadow-md shadow-[#c87a38]/20"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>VISIT THE STORE</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="p-2 rounded-md bg-[#1e3526] text-[#c87a38] border border-[#3f6c50]/40 focus:outline-none"
              aria-label="Call Brown's Sporting Goods"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md bg-[#17221b] text-[#e8ddc8] hover:text-white border border-[#2d4f3a]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c87a38]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#c87a38]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d1610]/98 border-b border-[#2d4f3a] px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl transition-all">
          <div className="text-[11px] font-bold tracking-widest text-[#c87a38] uppercase px-3 pb-1 border-b border-[#1e3526]">
            Garberville, California • Outdoor Outfitter
          </div>
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-[#1e3526] text-[#f4eee1] border-l-4 border-[#c87a38]"
                    : "text-[#c2b9a7] hover:bg-[#17221b] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#1e3526] space-y-2">
            <Link
              to="/visit-us"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-md text-sm font-bold uppercase tracking-wider text-[#0d1610] bg-[#c87a38] active:bg-[#d98a44]"
            >
              <MapPin className="w-4 h-4" />
              <span>VISIT THE STORE</span>
            </Link>

            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-md text-sm font-bold uppercase tracking-wider text-[#f4eee1] bg-[#17221b] border border-[#2d4f3a]"
            >
              <Phone className="w-4 h-4 text-[#c87a38]" />
              <span>CALL {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
