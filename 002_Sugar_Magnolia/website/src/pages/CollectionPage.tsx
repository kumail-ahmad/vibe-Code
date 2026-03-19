import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Info, ExternalLink } from 'lucide-react';
import { BotanicalElement } from '../components/ui/BotanicalElement';
import { CategoryCard } from '../components/ui/CategoryCard';
import type { CategoryData } from '../components/ui/CategoryCard';
import { PaperCard } from '../components/ui/PaperCard';

const collectionCategories: CategoryData[] = [
  {
    number: '01',
    title: 'Revamped Furniture',
    subtitle: 'Furniture given another life, with character worth keeping.',
    description: 'Each revamped piece is hand-finished with care, preserving solid wood craftsmanship while introducing modern matte tones, updated hardware, and rich protective finishes.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000',
    tag: 'Revamped Furniture',
  },
  {
    number: '02',
    title: 'Vintage & Antique',
    subtitle: 'Unique finds with history, charm and a story to tell.',
    description: 'A hand-selected assemblage of vintage curiosities, antique glassware, brass accents, ornate framing, and decorative heirlooms with authentic patina.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000',
    tag: 'Vintage Finds',
  },
  {
    number: '03',
    title: 'Home Decor',
    subtitle: 'Eclectic pieces and details for spaces with personality.',
    description: 'Distinctive accents for tables, shelves, and walls. Includes stoneware, ceramic vases, botanical vessel arrangements, and eclectic home accessories.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
    tag: 'Eclectic Decor',
  },
  {
    number: '04',
    title: 'Mid-Century · Retro · Boho',
    subtitle: 'A constantly changing mix of distinctive styles.',
    description: 'An ever-evolving blend of mid-century wooden lines, retro warmth, and bohemian textures tailored for artistic and expressive interior aesthetics.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000',
    tag: 'Style Mix',
  },
];

export const CollectionPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Revamped Furniture', 'Vintage Finds', 'Eclectic Decor', 'Style Mix'];

  const filteredCategories = selectedTag === 'All'
    ? collectionCategories
    : collectionCategories.filter(c => c.tag === selectedTag);

  return (
    <div className="space-y-16 pb-16">
      {/* Editorial Header */}
      <section className="bg-paper-grain pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#5C473B]/15 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C5A3E] font-semibold block">
            Ever-Changing Selection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#211D1A] font-semibold leading-tight">
            THE COLLECTION
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#5C473B] max-w-2xl mx-auto">
            Discover a constantly changing collection of revamped furniture, vintage finds and home décor.
          </p>
          <BotanicalElement variant="divider" className="my-4" />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Important Inventory Notice Banner */}
        <PaperCard variant="double-border" className="p-6 bg-[#FAF7F2]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-[#5C473B]">
            <div className="w-10 h-10 rounded-full bg-[#8C5A3E]/10 text-[#8C5A3E] flex items-center justify-center shrink-0 border border-[#8C5A3E]/20">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-semibold text-lg text-[#211D1A]">
                In-Store Discovery Notice
              </h3>
              <p className="leading-relaxed">
                Because every item is unique and inventory changes constantly, specific pieces move quickly. <strong>Selection changes frequently — visit our Roseburg shop to see what's new today!</strong>
              </p>
            </div>
            <div className="sm:ml-auto shrink-0">
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 bg-[#8C5A3E] text-[#FAF7F2] px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#6C422C] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                Visit Shop
              </Link>
            </div>
          </div>
        </PaperCard>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-[#8C5A3E] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F4EFE6] text-[#5C473B] border border-[#5C473B]/15 hover:border-[#8C5A3E]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Categories Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, idx) => (
            <div key={cat.number} className="flex flex-col space-y-4">
              <CategoryCard category={cat} index={idx} />
              <div className="p-4 bg-[#FAF7F2] border border-[#5C473B]/10 text-xs text-[#5C473B] leading-relaxed">
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Store Encouragement Card */}
        <PaperCard variant="editorial" className="p-8 md:p-12 text-center space-y-6">
          <BotanicalElement variant="wreath" className="w-16 h-16 text-[#8C5A3E] mx-auto" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#211D1A]">
            Searching for something unique?
          </h2>
          <p className="font-serif italic text-lg text-[#5C473B] max-w-xl mx-auto">
            "Visit Sugar Magnolia at 552 SE Main St in Roseburg to discover one-of-a-kind treasures."
          </p>
          <div className="pt-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sugar+Magnolia+552+SE+Main+St+Roseburg+OR+97470"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8C5A3E] text-[#FAF7F2] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#6C422C] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions to 552 SE Main St</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </PaperCard>
      </div>
    </div>
  );
};

