import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { BotanicalElement } from '../components/ui/BotanicalElement';
import { PaperCard } from '../components/ui/PaperCard';

export const StoryPage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-paper-grain pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#5C473B]/15 relative overflow-hidden">
        <div className="absolute top-6 left-10 pointer-events-none opacity-40">
          <BotanicalElement variant="wreath" className="w-24 h-24 text-[#8C5A3E]" />
        </div>
        <div className="absolute bottom-6 right-10 pointer-events-none opacity-40">
          <BotanicalElement variant="branch" className="w-32 h-16 text-[#677359]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C5A3E] font-semibold block">
            Our Story & Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#211D1A] font-semibold leading-tight">
            IT STARTED WITH<br />
            <span className="italic font-normal text-[#5C473B]">TOO MUCH FURNITURE.</span>
          </h1>
          <BotanicalElement variant="divider" className="my-4" />
          <p className="font-serif italic text-lg sm:text-xl text-[#5C473B] max-w-2xl mx-auto">
            From a passion for restoring forgotten pieces to a beloved downtown Roseburg storefront.
          </p>
        </div>
      </section>

      {/* Main Editorial Story Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Story Part 1: The Side Hustle */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#211D1A]">
              A Furniture-Refurbishing Side Hustle
            </h2>
            <p className="text-base text-[#5C473B] leading-relaxed">
              Sugar Magnolia began as a personal passion project and side hustle centered around furniture refurbishing. What started in a home workspace—giving second lives to discarded tables, dressers, and chairs—quickly grew into a thriving collection of renewed furniture pieces.
            </p>
            <p className="text-base text-[#5C473B] leading-relaxed">
              Each piece was individually chosen for its character, sturdy craftsmanship, and potential to bring warmth and personality into modern homes.
            </p>
          </div>

          <div className="md:col-span-6">
            <PaperCard variant="editorial" className="p-3">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1000"
                  alt="Furniture refinishing craft workshop detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-serif italic text-xs text-[#5C473B] text-center mt-3">
                Crafting second lives for quality wooden furniture.
              </p>
            </PaperCard>
          </div>
        </div>

        {/* Story Part 2: From Booth to Downtown Storefront */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 md:order-2 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold">
              The Growth
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#211D1A]">
              From Local Booth to Downtown Main St
            </h2>
            <p className="text-base text-[#5C473B] leading-relaxed">
              As demand for unique revamped furniture grew, the inventory expanded into a dedicated local booth. The overwhelming enthusiasm from vintage lovers and local homeowners made it clear that Roseburg needed a full boutique experience.
            </p>
            <p className="text-base text-[#5C473B] leading-relaxed">
              That journey eventually culminated in opening the doors to a dedicated storefront at 552 SE Main St in the historic heart of downtown Roseburg.
            </p>
          </div>

          <div className="md:col-span-6 md:order-1">
            <PaperCard variant="editorial" className="p-3">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&q=80&w=1000"
                  alt="Downtown Roseburg boutique shop interior display"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-serif italic text-xs text-[#5C473B] text-center mt-3">
                Downtown Roseburg storefront at 552 SE Main St.
              </p>
            </PaperCard>
          </div>
        </div>

        {/* Story Quote Callout */}
        <PaperCard variant="double-border" className="py-10 px-8 text-center space-y-3">
          <BotanicalElement variant="flower" className="w-10 h-10 text-[#C88A8A] mx-auto" />
          <h3 className="font-serif text-2xl md:text-3xl text-[#211D1A]">
            "EVERY PIECE HAS A STORY."
          </h3>
          <p className="font-serif italic text-base md:text-lg text-[#5C473B] max-w-2xl mx-auto">
            From a freshly revived piece of furniture to a vintage treasure you didn't know you needed, Sugar Magnolia is a place to discover something that feels uniquely yours.
          </p>
        </PaperCard>

        {/* CTA to Visit */}
        <div className="text-center space-y-4 pt-4">
          <p className="text-sm uppercase tracking-widest text-[#8C5A3E] font-semibold">
            Experience Sugar Magnolia in Person
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 bg-[#8C5A3E] text-[#FAF7F2] px-7 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#6C422C] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Visit Us at 552 SE Main St</span>
            </Link>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 border border-[#8C5A3E] text-[#8C5A3E] px-6 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#8C5A3E] hover:text-[#FAF7F2] transition-colors"
            >
              <span>Browse Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
