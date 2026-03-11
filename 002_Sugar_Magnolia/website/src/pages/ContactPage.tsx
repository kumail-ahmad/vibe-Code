import React from 'react';
import { MapPin, Phone, Navigation, Share2 } from 'lucide-react';
import { BotanicalElement } from '../components/ui/BotanicalElement';
import { PaperCard } from '../components/ui/PaperCard';

export const ContactPage: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Sugar+Magnolia+552+SE+Main+St+Roseburg+OR+97470";

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-paper-grain pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#5C473B]/15 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C5A3E] font-semibold block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#211D1A] font-semibold leading-tight">
            CONTACT US
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#5C473B] max-w-2xl mx-auto">
            We look forward to welcoming you to Sugar Magnolia in downtown Roseburg.
          </p>
          <BotanicalElement variant="divider" className="my-4" />
        </div>
      </section>

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone & Direct Contact */}
          <PaperCard variant="editorial" className="p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#8C5A3E]/10 text-[#8C5A3E] flex items-center justify-center border border-[#8C5A3E]/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold block mb-1">
                  Direct Phone
                </span>
                <h2 className="font-serif text-3xl text-[#211D1A]">
                  (541) 740-4337
                </h2>
              </div>
              <p className="text-sm text-[#5C473B] leading-relaxed">
                Give us a call directly during shop hours for questions regarding current arrivals or store directions.
              </p>
            </div>

            <div className="pt-4 border-t border-[#5C473B]/15">
              <a
                href="tel:5417404337"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8C5A3E] text-[#FAF7F2] py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#6C422C] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call (541) 740-4337
              </a>
            </div>
          </PaperCard>

          {/* Address & Directions */}
          <PaperCard variant="editorial" className="p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#677359]/10 text-[#4E5843] flex items-center justify-center border border-[#677359]/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold block mb-1">
                  Storefront Address
                </span>
                <h2 className="font-serif text-2xl text-[#211D1A]">
                  552 SE Main St
                </h2>
                <p className="font-serif italic text-lg text-[#5C473B]">
                  Roseburg, OR 97470
                </p>
              </div>
              <p className="text-sm text-[#5C473B] leading-relaxed">
                Located in historic downtown Roseburg. Stop by to see our constantly changing collection in person.
              </p>
            </div>

            <div className="pt-4 border-t border-[#5C473B]/15">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-[#8C5A3E] text-[#8C5A3E] py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#8C5A3E] hover:text-[#FAF7F2] transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions (Google Maps)
              </a>
            </div>
          </PaperCard>
        </div>

        {/* Social Media & Updates Note */}
        <PaperCard variant="double-border" className="p-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#8C5A3E]">
            <Share2 className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-semibold">Follow Along</span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-[#211D1A]">
            New Arrivals & Updates
          </h3>

          <p className="text-sm text-[#5C473B] max-w-xl mx-auto leading-relaxed">
            Follow along for new arrivals, revived pieces, and vintage finds.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://www.facebook.com/p/Sugar-Magnolia-On-Main-St-100071414899787/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sugar Magnolia on Facebook"
              className="w-12 h-12 rounded-full bg-[#8C5A3E]/10 text-[#8C5A3E] border border-[#8C5A3E]/25 flex items-center justify-center hover:bg-[#8C5A3E] hover:text-[#FAF7F2] hover:scale-110 transition-all shadow-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sugarmagnoliaonmainst/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sugar Magnolia on Instagram"
              className="w-12 h-12 rounded-full bg-[#8C5A3E]/10 text-[#8C5A3E] border border-[#8C5A3E]/25 flex items-center justify-center hover:bg-[#8C5A3E] hover:text-[#FAF7F2] hover:scale-110 transition-all shadow-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </PaperCard>
      </div>
    </div>
  );
};

