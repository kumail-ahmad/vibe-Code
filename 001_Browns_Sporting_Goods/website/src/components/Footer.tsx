import { Link } from "react-router-dom";
import { Compass, Phone, Mail, MapPin, Navigation, Clock } from "lucide-react";
import { businessInfo } from "../data/business";

export function Footer() {
  return (
    <footer className="bg-[#080d09] border-t border-[#1e3526] text-[#c2b9a7] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1e3526]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-md bg-[#17221b] border border-[#2d4f3a] flex items-center justify-center text-[#c87a38]">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-[#f4eee1] tracking-tight">
                  BROWN'S
                </span>
                <span className="text-[9px] tracking-[0.2em] font-semibold text-[#c87a38] uppercase">
                  Sporting Goods
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#a39886] leading-relaxed max-w-sm font-sans font-normal">
              A third-generation family business rooted in Garberville and Northern California's outdoor community.
            </p>

            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c87a38] block">
                Independent Garberville Outfitter
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#f4eee1] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#c87a38] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-[#c87a38] transition-colors">Our Story & Heritage</Link>
              </li>
              <li>
                <Link to="/what-we-carry" className="hover:text-[#c87a38] transition-colors">What We Carry</Link>
              </li>
              <li>
                <Link to="/visit-us" className="hover:text-[#c87a38] transition-colors">Visit Our Store</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#c87a38] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#f4eee1] uppercase tracking-wider">
              Store Information
            </h4>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#c87a38] mt-0.5 shrink-0" />
                <span>{businessInfo.address.full}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#c87a38] shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-[#c87a38] font-semibold">
                  {businessInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#c87a38] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-[#c87a38] text-xs">
                  {businessInfo.email}
                </a>
              </div>

              <div className="flex items-center space-x-2.5 text-xs text-[#a39886] pt-1">
                <Clock className="w-4 h-4 text-[#c87a38] shrink-0" />
                <span>MON–FRI: 10:00 AM – 5:00 PM</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={businessInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-[#17221b] border border-[#2d4f3a] text-xs font-bold text-[#c87a38] hover:text-[#d98a44] transition-colors uppercase tracking-wider"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Google Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#827869]">
          <p>
            © {new Date().getFullYear()} Brown's Sporting Goods. Garberville, California.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/visit-us" className="hover:underline">797 Redwood Dr, Garberville, CA 95542</Link>
            <span>•</span>
            <a href={`tel:${businessInfo.phoneRaw}`} className="hover:underline">{businessInfo.phone}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
