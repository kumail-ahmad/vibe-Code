import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export const LocationSection: React.FC = () => {
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=104+High+Street+Hornsey+London+N8+7NT';

  return (
    <section className="relative w-full bg-islands-espresso text-islands-cream py-32 overflow-hidden border-t border-islands-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-12 h-[1px] bg-islands-sand" />
          <span className="font-sans text-xs font-semibold tracking-widest text-islands-sand uppercase">
            SECTION 07 — LOCATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Hornsey Location Information */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-8">
              104 HIGH STREET <br />
              <span className="italic text-islands-sand font-serif font-light">HORNSEY,</span> <br />
              LONDON N8.
            </h2>

            <div className="space-y-4 mb-8 font-sans text-sm text-islands-cream/80 border-l-2 border-islands-sand/40 pl-6 py-2">
              <p className="font-semibold text-islands-cream text-base">
                104 High Street, Hornsey, London, N8 7NT
              </p>
              <p>
                Situated right in the heart of Hornsey High Street, north London. Easily accessible via Hornsey Rail station and local bus routes.
              </p>
            </div>

            <div className="pt-4">
              <MagneticButton href={mapsUrl} target="_blank" rel="noopener noreferrer" dataCursor="DIRECTIONS">
                <Navigation className="w-4 h-4 text-islands-sand" />
                <span>Get Directions</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right: Authentic Exterior Image Frame */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-islands-cream/20 aspect-[4/3] bg-islands-charcoal"
              data-cursor="EXTERIOR"
            >
              <img
                src="/images/cafe_exterior.png"
                alt="Islands Hornsey Cafe Storefront on 104 High Street"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-islands-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-islands-cream">
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-islands-sand flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-islands-terracotta" /> Hornsey High Street
                  </span>
                  <span className="font-serif text-lg italic">
                    Our Storefront in North London
                  </span>
                </div>
                <span className="font-sans text-xs tracking-widest uppercase text-islands-cream/60">
                  N8 7NT
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

