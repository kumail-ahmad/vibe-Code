import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { LocationSection } from "../components/LocationSection";
import { CTASection } from "../components/CTASection";
import { productCategories, businessInfo } from "../data/business";
import { Phone, MapPin, Info, Compass } from "lucide-react";

export function WhatWeCarryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [failedImgs, setFailedImgs] = useState<{ [key: string]: boolean }>({});

  const filteredCategories = activeCategory === "all"
    ? productCategories
    : productCategories.filter(cat => cat.id === activeCategory);

  const handleImgError = (id: string) => {
    setFailedImgs(prev => ({ ...prev, [id]: true }));
  };

  return (
    <main id="main-content" className="pt-24 bg-[#0d1610]">
      <SEO
        title="What We Carry | Fishing, Camping, Hunting & Outdoor Gear Garberville"
        description="Explore store categories at Brown's Sporting Goods in Garberville, California—fishing, camping, hunting, outdoor goods, and work wear."
      />

      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-[#121c15] border-b border-[#2d4f3a]/40 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c87a38] block mb-3">
            STORE CATEGORIES & SELECTION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#f4eee1] tracking-tight mb-4">
            WHAT WE CARRY
          </h1>
          <p className="text-lg text-[#c2b9a7] max-w-2xl mx-auto font-sans leading-relaxed">
            Essential categories for fishing, camping, hunting, outdoor goods, and work wear in Southern Humboldt County.
          </p>

          {/* Factual Disclaimer Pill */}
          <div className="mt-8 inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#17221b] border border-[#c87a38]/40 text-xs text-[#d6c5a8] max-w-xl shadow-md">
            <Info className="w-4 h-4 text-[#c87a38] shrink-0" />
            <span>
              Selection and availability may vary. Call or visit Brown's for current inventory.
            </span>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-[#0d1610] sticky top-16 z-30 bg-[#0d1610]/95 backdrop-blur-md border-b border-[#2d4f3a]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === "all"
                  ? "bg-[#c87a38] text-[#0d1610] shadow-md"
                  : "bg-[#17221b] text-[#c2b9a7] hover:text-white border border-[#2d4f3a]/60"
              }`}
            >
              ALL CATEGORIES
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#c87a38] text-[#0d1610] shadow-md"
                    : "bg-[#17221b] text-[#c2b9a7] hover:text-white border border-[#2d4f3a]/60"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category List Details */}
      <section className="py-16 bg-[#0d1610]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#17221b] rounded-xl border border-[#2d4f3a]/60 p-6 sm:p-8 lg:p-10 shadow-xl"
            >
              {/* Category Image */}
              <div className="lg:col-span-6 rounded-lg overflow-hidden border border-[#2d4f3a]/50 h-72 sm:h-80 relative group bg-[#0d1610] flex items-center justify-center">
                {!failedImgs[cat.id] ? (
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    onError={() => handleImgError(cat.id)}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="p-6 text-center">
                    <Compass className="w-12 h-12 text-[#c87a38] mx-auto mb-2" />
                    <span className="font-serif text-xl font-bold text-[#f4eee1]">{cat.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17221b]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-3 py-1 rounded bg-[#0d1610]/90 text-[#c87a38] text-xs font-bold uppercase tracking-widest border border-[#3f6c50]/50">
                    CATEGORY 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Category Description */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-[#f4eee1] mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-[#c87a38] font-semibold tracking-wider uppercase mb-3">
                    "{cat.description}"
                  </p>
                  <p className="text-base text-[#c2b9a7] leading-relaxed font-sans font-normal">
                    {cat.longDescription}
                  </p>
                </div>

                {/* Inventory Disclaimer Note */}
                <div className="p-4 rounded-lg bg-[#0d1610] border border-[#2d4f3a]/50 flex items-start space-x-3 text-xs text-[#a39886]">
                  <Info className="w-4 h-4 text-[#c87a38] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Selection and availability may vary. Call or visit Brown's for current inventory.
                  </p>
                </div>

                {/* Call & Visit buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-md bg-[#c87a38] hover:bg-[#d98a44] text-[#0d1610] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire ({businessInfo.phone})</span>
                  </a>

                  <a
                    href={businessInfo.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-md bg-[#0d1610] hover:bg-[#1e3526] text-[#f4eee1] border border-[#3f6c50] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#c87a38]" />
                    <span>Visit Store</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location */}
      <LocationSection />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
