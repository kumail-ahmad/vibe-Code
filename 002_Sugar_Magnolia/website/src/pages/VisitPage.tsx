import React from 'react';
import { Phone } from 'lucide-react';
import { BotanicalElement } from '../components/ui/BotanicalElement';
import { LocationCard } from '../components/ui/LocationCard';
import { PaperCard } from '../components/ui/PaperCard';

export const VisitPage: React.FC = () => {

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-paper-grain pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#5C473B]/15 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C5A3E] font-semibold block">
            Store Location & Info
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#211D1A] font-semibold leading-tight">
            VISIT THE SHOP
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#5C473B] max-w-2xl mx-auto">
            Experience our collection of revamped furniture, vintage finds and home décor in downtown Roseburg.
          </p>
          <BotanicalElement variant="divider" className="my-4" />
        </div>
      </section>

      {/* Main Visit Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Location & Directions Primary Card */}
        <LocationCard />

        {/* Store Imagery & Ambience Gallery */}
        <div className="space-y-6">
          <div className="border-b border-[#5C473B]/15 pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold block">
                Boutique Atmosphere
              </span>
              <h2 className="font-serif text-3xl text-[#211D1A]">
                Inside Sugar Magnolia
              </h2>
            </div>
            <BotanicalElement variant="branch" className="w-20 h-10 text-[#677359]" animate={false} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PaperCard variant="editorial" className="p-3">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
                  alt="Sugar Magnolia shop ambient lounge & vintage furniture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-serif italic text-xs text-[#5C473B] text-center mt-3">
                Restored furniture lounge settings.
              </p>
            </PaperCard>

            <PaperCard variant="editorial" className="p-3">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
                  alt="Vintage glassware and antique curio displays"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-serif italic text-xs text-[#5C473B] text-center mt-3">
                Curated vintage treasures & antiques.
              </p>
            </PaperCard>

            <PaperCard variant="editorial" className="p-3">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
                  alt="Eclectic home decor and ceramic arrangements"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-serif italic text-xs text-[#5C473B] text-center mt-3">
                Eclectic home décor & styling pieces.
              </p>
            </PaperCard>
          </div>
        </div>

        {/* Quick Contact & Verified Info */}
        <PaperCard variant="double-border" className="p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl md:text-3xl text-[#211D1A]">
            Have a Question Before Visiting?
          </h3>
          <p className="text-sm text-[#5C473B] max-w-lg mx-auto leading-relaxed">
            Feel free to give us a call to ask about current store hours or general store directions.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href="tel:5417404337"
              className="inline-flex items-center gap-2 bg-[#8C5A3E] text-[#FAF7F2] px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#6C422C] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call (541) 740-4337
            </a>
          </div>
        </PaperCard>
      </div>
    </div>
  );
};
