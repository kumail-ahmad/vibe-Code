import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './ui/InstagramIcon';

export const InstagramSection: React.FC = () => {
  const instagramUrl = 'https://www.instagram.com/islandsinhornsey';

  const galleryImages = [
    { src: '/images/artisan_coffee.png', label: 'Fresh Pour' },
    { src: '/images/cakes_pastries.png', label: 'Morning Bakery' },
    { src: '/images/gourmet_sandwich.png', label: 'Sourdough Lunch' },
    { src: '/images/cafe_exterior.png', label: '104 High Street' },
  ];

  return (
    <section className="relative w-full bg-islands-cream py-32 overflow-hidden border-t border-islands-espresso/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Editorial Subheader */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-islands-terracotta" />
            <span className="font-sans text-xs font-semibold tracking-widest text-islands-terracotta uppercase">
              SECTION 06 — COMMUNITY
            </span>
          </div>

          <span className="font-sans text-xs uppercase tracking-widest text-islands-espresso/60">
            @islandsinhornsey
          </span>
        </div>

        {/* Editorial Social Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-islands-espresso font-medium leading-[0.95] tracking-tight">
              FOLLOW THE <br />
              <span className="italic text-islands-terracotta font-serif font-light">ISLAND.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-islands-espresso text-islands-cream hover:bg-islands-terracotta transition-colors duration-500 shadow-xl"
              data-cursor="INSTAGRAM"
            >
              <InstagramIcon className="w-5 h-5 text-islands-sand group-hover:text-islands-cream transition-colors" />
              <span className="font-sans text-xs font-bold tracking-widest uppercase">
                @islandsinhornsey
              </span>
              <ArrowUpRight className="w-4 h-4 text-islands-sand group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
            <p className="font-sans text-xs text-islands-espresso/60 mt-3">
              Daily updates, specials, and Hornsey life.
            </p>
          </div>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <motion.a
              key={img.label}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-square border border-islands-espresso/10 bg-islands-cream-dark"
              data-cursor="VIEW"
            >
              <img
                src={img.src}
                alt={`Islands Hornsey ${img.label}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-islands-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="font-sans text-xs font-semibold tracking-widest text-islands-cream uppercase flex items-center gap-1">
                  {img.label} <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

