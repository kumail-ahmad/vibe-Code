import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { BotanicalElement } from '../components/ui/BotanicalElement';
import { PaperCard } from '../components/ui/PaperCard';
import { CategoryCard } from '../components/ui/CategoryCard';
import type { CategoryData } from '../components/ui/CategoryCard';
import { ReviewCard } from '../components/ui/ReviewCard';
import { LocationCard } from '../components/ui/LocationCard';

const categories: CategoryData[] = [
  {
    number: '01',
    title: 'Revamped Furniture',
    subtitle: 'Furniture given another life, with character worth keeping.',
    description: 'Freshly refurbished dressers, credenzas, side tables, and statement pieces carefully finished for modern homes.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000',
    tag: 'Hand-Finished',
  },
  {
    number: '02',
    title: 'Vintage & Antique',
    subtitle: 'Unique finds with history, charm and a story to tell.',
    description: 'A curated mix of glassware, brass accents, ornate mirrors, and timeless curiosities.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000',
    tag: 'Historical Charm',
  },
  {
    number: '03',
    title: 'Home Decor',
    subtitle: 'Eclectic pieces and details for spaces with personality.',
    description: 'Ceramics, dried floral accents, decorative vessels, and subtle styling elements.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
    tag: 'Eclectic Touches',
  },
  {
    number: '04',
    title: 'Mid-Century · Retro · Boho',
    subtitle: 'A constantly changing mix of distinctive styles.',
    description: 'From warm mid-century wooden lines to bohemian textures and retro atmosphere.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000',
    tag: 'Curated Mix',
  },
];

const customerReviews = [
  {
    quote: "Such a beautiful and unique shop in downtown Roseburg! Found the most wonderful mid-century vintage piece with so much character.",
    theme: "Unique & Beautiful",
  },
  {
    quote: "An eclectic collection of revamped furniture and treasures. There is always something new to browse every time you stop in.",
    theme: "Eclectic Variety",
  },
  {
    quote: "Whimsical, charming atmosphere. You can tell every piece is chosen and restored with real care.",
    theme: "Whimsical & Restored",
  },
];

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-12 px-4 sm:px-6 lg:px-8 bg-paper-grain overflow-hidden border-b border-[#5C473B]/15">
        {/* Decorative Floating Botanical Motifs */}
        <div className="absolute top-10 left-6 md:left-16 pointer-events-none opacity-70">
          <BotanicalElement variant="flower" className="w-16 h-16 text-[#C88A8A]" />
        </div>
        <div className="absolute bottom-12 right-6 md:right-16 pointer-events-none opacity-60">
          <BotanicalElement variant="branch" className="w-32 h-16 text-[#677359]" />
        </div>
        <div className="absolute top-1/3 right-10 pointer-events-none opacity-40 hidden lg:block">
          <BotanicalElement variant="leaf" className="w-12 h-12 text-[#8C5A3E]" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Hero Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#677359]/10 border border-[#677359]/25 text-[#4E5843] text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5A3E]" />
              <span>Downtown Roseburg, Oregon</span>
            </div>

            <div className="space-y-2">
              <span className="font-serif italic text-lg md:text-xl text-[#8C5A3E] block">
                Sugar Magnolia Boutique
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#211D1A] font-semibold leading-[1.08] tracking-tight">
                FIND SOMETHING<br />
                <span className="italic font-normal text-[#5C473B]">YOU DIDN'T KNOW</span><br />
                YOU WERE LOOKING FOR.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#5C473B] leading-relaxed max-w-xl font-normal">
              An ever-changing collection of revamped furniture, vintage treasures and home décor in the heart of Roseburg.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/collection"
                className="inline-flex items-center gap-3 bg-[#8C5A3E] text-[#FAF7F2] px-7 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#6C422C] transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/visit"
                className="inline-flex items-center gap-2 border border-[#8C5A3E] text-[#8C5A3E] px-6 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#8C5A3E] hover:text-[#FAF7F2] transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit The Shop</span>
              </Link>
            </div>

            {/* Quick Info Badges */}
            <div className="pt-6 border-t border-[#5C473B]/15 flex flex-wrap items-center gap-6 text-xs text-[#5C473B] font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#677359]" />
                <span>552 SE Main St, Roseburg</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C88A8A]" />
                <span>Frequently Updated Inventory</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Editorial Image Layer */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 border-vintage p-2 bg-[#FAF7F2] shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200"
                  alt="Sugar Magnolia Boutique Living Room & Revamped Furniture Atmosphere"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/50 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-xs p-3 border border-[#8C5A3E]/20 text-center">
                  <p className="font-serif italic text-sm text-[#211D1A]">
                    "Revamped furniture, vintage finds & eclectic decor"
                  </p>
                </div>
              </div>
            </div>

            {/* Layered Decorative Backdrop Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#8C5A3E]/30 bg-[#F4EFE6] -z-0 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT & PHILOSOPHY BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <PaperCard variant="double-border" className="py-12 px-6 md:px-12 space-y-4">
          <BotanicalElement variant="divider" className="my-2" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C5A3E] font-semibold block">
            Handcrafted · Curated · Nostalgic
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#211D1A] font-medium leading-tight max-w-3xl mx-auto tracking-wide">
            CURATED. REVIVED. ONE OF A KIND.
          </h2>
          <p className="font-serif italic text-base md:text-xl text-[#5C473B] max-w-2xl mx-auto leading-relaxed pt-2">
            Discover revamped furniture, vintage finds and home décor with character and a story to tell.
          </p>
          <BotanicalElement variant="divider" className="my-2" />
        </PaperCard>
      </section>

      {/* COLLECTION HIGHLIGHT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5C473B]/15 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold">
              Curated Offerings
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#211D1A]">
              The Collection Categories
            </h2>
          </div>
          <p className="font-serif italic text-base text-[#5C473B] max-w-md">
            Selection changes frequently. Visit the shop in Roseburg to explore what’s newly arrived.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link key={cat.number} to="/collection" className="block h-full">
              <CategoryCard category={cat} index={idx} />
            </Link>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 border-b-2 border-[#8C5A3E] pb-1 font-serif text-lg text-[#8C5A3E] hover:text-[#6C422C] hover:border-[#6C422C] transition-colors"
          >
            <span>View Complete Collection Showcase</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* "EVERY PIECE HAS A STORY" FEATURE SECTION */}
      <section className="bg-[#F4EFE6] bg-paper-grain py-16 md:py-24 border-y border-[#5C473B]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="border-vintage p-3 bg-[#FAF7F2] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1000"
                  alt="Refreshed furniture and vintage decor display inside boutique"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 pointer-events-none opacity-80">
                <BotanicalElement variant="wreath" className="w-24 h-24 text-[#8C5A3E]" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold block">
                Boutique Philosophy
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl text-[#211D1A] font-semibold leading-tight">
                EVERY PIECE<br />
                <span className="italic font-normal text-[#5C473B]">HAS A STORY.</span>
              </h2>

              <p className="text-base text-[#5C473B] leading-relaxed font-normal">
                From a freshly revived piece of furniture to a vintage treasure you didn't know you needed, Sugar Magnolia is a place to discover something that feels uniquely yours.
              </p>

              <div className="p-4 bg-[#FAF7F2] border-l-2 border-[#8C5A3E] text-xs text-[#5C473B] italic">
                "Our inventory is constantly evolving as new vintage finds and revived furniture pieces enter the storefront."
              </div>

              <div className="pt-2">
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 bg-[#5C473B] text-[#FAF7F2] px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#211D1A] transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER LOVE / REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold">
            Roseburg Community Love
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#211D1A]">
            What Visitors Say
          </h2>
          <p className="text-sm text-[#5C473B]">
            Themes from real local review sentiment about Sugar Magnolia's unique charm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviews.map((rev, idx) => (
            <ReviewCard key={idx} quote={rev.quote} theme={rev.theme} />
          ))}
        </div>
      </section>

      {/* LOCATION & VISIT US BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationCard />
      </section>
    </div>
  );
};
