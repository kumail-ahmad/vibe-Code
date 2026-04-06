import { MapPin, Phone, Mail, Clock, Navigation, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../context/CursorContext';

export const VisitSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="visit" className="py-24 md:py-36 px-6 md:px-12 bg-[#F3EBDD] text-[#211B17] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#A65E42]" />
                <p className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold text-[#A65E42]">
                  LOCATION & CONTACT
                </p>
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#211B17] leading-[0.92] mb-8">
                COME <br />
                <span className="text-[#59604A] italic font-normal">HUNT</span> <br />
                WITH US.
              </h2>

              <p className="text-base sm:text-lg font-sans text-[#211B17]/80 leading-relaxed mb-10 max-w-lg">
                Whether you're looking for a specific piece of antique furniture, building your collection, or spending a weekend discovering Oregon gems, our doors in Myrtle Creek are open.
              </p>

              {/* Verified Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 p-6 bg-[#F9F5EE] border border-[#211B17]/15">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#59604A] mb-2">
                    <MapPin className="w-4 h-4 text-[#A65E42]" />
                    <span>ADDRESS</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-[#211B17]">
                    875 S Main St
                  </p>
                  <p className="text-xs text-[#211B17]/70 font-sans">
                    Myrtle Creek, OR 97457
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#59604A] mb-2">
                    <Phone className="w-4 h-4 text-[#A65E42]" />
                    <span>PHONE</span>
                  </div>
                  <a
                    href="tel:5416708557"
                    className="font-serif text-lg font-bold text-[#211B17] hover:text-[#59604A] transition-colors"
                  >
                    541-670-8557
                  </a>
                  <p className="text-xs text-[#211B17]/70 font-sans">
                    Direct Store Line
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#59604A] mb-2">
                    <Mail className="w-4 h-4 text-[#A65E42]" />
                    <span>EMAIL</span>
                  </div>
                  <a
                    href="mailto:brittany@stuffnthings.biz"
                    className="font-sans text-sm font-semibold text-[#211B17] hover:text-[#59604A] transition-colors break-all"
                  >
                    brittany@stuffnthings.biz
                  </a>
                  <p className="text-xs text-[#211B17]/70 font-sans">
                    Owner: Brittany Johnson
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#59604A] mb-2">
                    <InstagramIcon className="w-4 h-4 text-[#A65E42]" />
                    <span>INSTAGRAM</span>
                  </div>
                  <a
                    href="https://www.instagram.com/stuffnthings_mc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-semibold text-[#211B17] hover:text-[#59604A] transition-colors"
                  >
                    @stuffnthings_mc
                  </a>
                  <p className="text-xs text-[#211B17]/70 font-sans">
                    Follow store updates
                  </p>
                </div>
              </div>

              {/* Required Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  href="https://www.google.com/maps/search/?api=1&query=875+S+Main+St,+Myrtle+Creek,+OR+97457"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  cursorText="MAPS"
                >
                  <span>GET DIRECTIONS</span>
                  <Navigation className="w-4 h-4" />
                </MagneticButton>

                <MagneticButton href="tel:5416708557" variant="brass" cursorText="CALL">
                  <span>CALL THE SHOP</span>
                  <Phone className="w-4 h-4" />
                </MagneticButton>

                <MagneticButton
                  href="mailto:brittany@stuffnthings.biz"
                  variant="secondary"
                  cursorText="EMAIL"
                >
                  <span>EMAIL US</span>
                  <Mail className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Location Card & Map Preview */}
          <div className="lg:col-span-6">
            <div className="bg-[#211B17] text-[#F3EBDD] border border-[#211B17] p-8 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-[#F3EBDD]/15 pb-6 mb-6">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#A4875A] font-bold block mb-1">
                    VISITOR INFORMATION
                  </span>
                  <h3 className="font-serif text-3xl font-bold tracking-tight uppercase">
                    STUFF N' THINGS
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#A4875A] flex items-center justify-center text-[#A4875A]">
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-6 mb-8 font-sans">
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#A4875A] font-bold mb-1">
                    STORE HOURS
                  </p>
                  <p className="text-base text-[#F3EBDD] font-medium font-serif tracking-wide">
                    VISIT US IN MYRTLE CREEK
                  </p>
                  <p className="text-xs text-[#F3EBDD]/70 mt-1">
                    Call 541-670-8557 for current holiday or seasonal hours.
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-widest uppercase text-[#A4875A] font-bold mb-1">
                    LOCATION HIGHLIGHT
                  </p>
                  <p className="text-sm text-[#F3EBDD]/80 leading-relaxed">
                    Located on South Main Street in historical Myrtle Creek, Oregon.
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-widest uppercase text-[#A4875A] font-bold mb-1">
                    VENDOR INQUIRIES
                  </p>
                  <p className="text-sm text-[#F3EBDD]/80 leading-relaxed">
                    Featuring 75+ spaces. For vendor booth availability or consignment questions, email Brittany Johnson directly at brittany@stuffnthings.biz.
                  </p>
                </div>
              </div>

              {/* Embedded Google Maps Frame preview */}
              <div
                onMouseEnter={() => setCursor('open', 'MAPS')}
                onMouseLeave={resetCursor}
                className="relative w-full h-64 border border-[#F3EBDD]/20 overflow-hidden group"
              >
                <iframe
                  title="Stuff N' Things Myrtle Creek Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.988220023419!2d-123.29290072386221!3d43.01955379308914!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c4246edfb88a75%3A0xb36b3b55c0c97800!2s875%20S%20Main%20St%2C%20Myrtle%20Creek%2C%20OR%2097457!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(0.9)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=875+S+Main+St,+Myrtle+Creek,+OR+97457"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-[#211B17] text-[#F3EBDD] text-[10px] tracking-widest uppercase font-bold px-3 py-2 border border-[#F3EBDD]/20 flex items-center gap-2 hover:bg-[#59604A] transition-colors"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

