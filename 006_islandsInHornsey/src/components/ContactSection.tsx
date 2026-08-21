import { Phone, Mail, Compass, MapPin } from 'lucide-react';
import { InstagramIcon } from './ui/InstagramIcon';
import { MagneticButton } from './ui/MagneticButton';

export const ContactSection: React.FC = () => {
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=104+High+Street+Hornsey+London+N8+7NT';
  const instagramUrl = 'https://www.instagram.com/islandsinhornsey';

  return (
    <footer id="contact" className="relative w-full bg-islands-cream text-islands-espresso pt-28 pb-16 overflow-hidden border-t border-islands-espresso/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-12 h-[1px] bg-islands-terracotta" />
          <span className="font-sans text-xs font-semibold tracking-widest text-islands-terracotta uppercase">
            SECTION 08 — VISIT & CONTACT
          </span>
        </div>

        {/* Hero Final Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight text-islands-espresso">
              SEE YOU <br />
              <span className="italic text-islands-terracotta font-serif font-light">AT ISLANDS.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-4">
            <MagneticButton href={mapsUrl} target="_blank" rel="noopener noreferrer" dataCursor="DIRECTIONS">
              <Compass className="w-4 h-4 text-islands-terracotta" />
              <span>Get Directions</span>
            </MagneticButton>

            <MagneticButton href={instagramUrl} target="_blank" rel="noopener noreferrer" dataCursor="INSTAGRAM">
              <InstagramIcon className="w-4 h-4 text-islands-terracotta" />
              <span>Follow @islandsinhornsey</span>
            </MagneticButton>
          </div>
        </div>

        {/* Verified Business Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-y border-islands-espresso/15 font-sans">
          
          {/* Address */}
          <div>
            <div className="flex items-center gap-2 text-islands-terracotta font-semibold text-xs uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4" />
              Address
            </div>
            <p className="font-serif text-2xl font-semibold text-islands-espresso leading-snug">
              104 High Street
            </p>
            <p className="text-sm text-islands-espresso/80 mt-1">
              Hornsey, London N8 7NT <br />
              United Kingdom
            </p>
          </div>

          {/* Telephone */}
          <div>
            <div className="flex items-center gap-2 text-islands-terracotta font-semibold text-xs uppercase tracking-widest mb-3">
              <Phone className="w-4 h-4" />
              Telephone
            </div>
            <a
              href="tel:07931038003"
              className="font-serif text-2xl font-semibold text-islands-espresso hover:text-islands-terracotta transition-colors duration-300 block"
            >
              07931 038003
            </a>
            <p className="text-sm text-islands-espresso/80 mt-1">
              Call us directly during café hours.
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-islands-terracotta font-semibold text-xs uppercase tracking-widest mb-3">
              <Mail className="w-4 h-4" />
              Email
            </div>
            <a
              href="mailto:islandsinhornsey@gmail.com"
              className="font-serif text-xl font-semibold text-islands-espresso hover:text-islands-terracotta transition-colors duration-300 block break-all"
            >
              islandsinhornsey@gmail.com
            </a>
            <p className="text-sm text-islands-espresso/80 mt-1">
              For general inquiries and press.
            </p>
          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 text-xs font-sans text-islands-espresso/60 tracking-widest uppercase">
          <div>
            © {new Date().getFullYear()} ISLANDS CAFÉ · HORNSEY, LONDON N8
          </div>

          <div className="flex items-center gap-6">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-islands-terracotta transition-colors">
              Instagram
            </a>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-islands-terracotta transition-colors">
              Google Maps
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
