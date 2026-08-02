import { Phone, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Pure Typographic Location Metadata */}
          <div className="lg:col-span-7">
            <span className="text-[9px] tracking-[0.35em] font-sans text-neutral-400 uppercase block mb-3">
              08 / CONTACT & LOCATION
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl text-white font-extralight uppercase leading-tight tracking-wider mb-8">
              FIND <span className="italic font-normal">SHADOWS.</span>
            </h2>

            <div className="space-y-8 border-l border-neutral-800 pl-6 my-10">
              <div>
                <span className="text-[9px] font-sans tracking-[0.3em] text-neutral-400 uppercase block mb-1">
                  LOCATION ADDRESS
                </span>
                <p className="font-serif text-3xl text-white font-light">Prestige Copper Arch, Prestige Complex</p>
                <p className="text-sm font-sans text-neutral-400 leading-relaxed mt-2 uppercase tracking-wider">
                  Infantry Road (behind Safina Plaza, opp. ICICI & Canara Bank), <br />
                  Tasker Town / Shivaji Nagar, Bengaluru, Karnataka 560001
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div>
                  <span className="text-[9px] font-sans tracking-[0.3em] text-neutral-400 uppercase block mb-1">
                    DIRECT TELEPHONE
                  </span>
                  <a href="tel:08041127534" className="font-sans text-xl text-white hover:text-neutral-400 transition-colors">
                    080 4112 7534
                  </a>
                  <span className="text-[9px] font-sans text-neutral-400 uppercase block mt-1">Contact: Lui</span>
                </div>

                <div>
                  <span className="text-[9px] font-sans tracking-[0.3em] text-neutral-400 uppercase block mb-1">
                    EMAIL INQUIRY
                  </span>
                  <a
                    href="mailto:luiyila.ashirmray@yahoo.com"
                    className="font-sans text-sm text-white hover:text-neutral-400 transition-colors break-all"
                  >
                    luiyila.ashirmray@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="https://www.google.com/maps?q=12.9798302,77.6066875"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="MAPS"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-sans text-xs tracking-[0.25em] font-semibold uppercase hover:bg-neutral-200 transition-colors"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>GOOGLE MAPS DIRECTIONS</span>
              </a>

              <a
                href="tel:08041127534"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-sans text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>CALL SALON</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Contrast Dark Map Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full border border-neutral-800 bg-neutral-950 overflow-hidden">
              <iframe
                title="Shadows Beauty Salon Location Map"
                src="https://maps.google.com/maps?q=12.9798302,77.6066875&z=16&output=embed"
                className="w-full h-full filter grayscale invert contrast-[1.4] opacity-75"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 text-[9px] font-sans tracking-[0.3em] text-white/80 uppercase bg-black/80 p-3 border border-neutral-800">
                SHADOWS • INFANTRY ROAD, BENGALURU
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

