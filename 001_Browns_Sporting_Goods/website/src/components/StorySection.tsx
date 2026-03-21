import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, ShieldCheck, HeartHandshake, Trees, Store } from "lucide-react";
import { businessInfo } from "../data/business";

export function StorySection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-20 bg-[#0d1610] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* INTRODUCTION BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c87a38]">
              OUR PURPOSE & ESSENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4eee1] leading-[1.15]">
              More Than a Sporting Goods Store.
            </h2>
            <p className="text-lg text-[#c2b9a7] leading-relaxed font-sans font-normal">
              Brown's Sporting Goods is a local destination for people who spend time outdoors in Garberville and Southern Humboldt County. Providing gear for fishing, camping, hunting, outdoor goods, and work wear with personal local service.
            </p>

            {/* Feature pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-md bg-[#17221b] border border-[#2d4f3a]/40">
                <div className="flex items-center space-x-3 mb-1">
                  <Trees className="w-5 h-5 text-[#c87a38]" />
                  <h4 className="font-serif font-bold text-[#f4eee1]">Outdoor Focus</h4>
                </div>
                <p className="text-xs text-[#a39886]">
                  Equipped for California's Redwood Coast & inland rivers.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#17221b] border border-[#2d4f3a]/40">
                <div className="flex items-center space-x-3 mb-1">
                  <HeartHandshake className="w-5 h-5 text-[#c87a38]" />
                  <h4 className="font-serif font-bold text-[#f4eee1]">Personal Service</h4>
                </div>
                <p className="text-xs text-[#a39886]">
                  Practical advice tailored to your trip, experience, and local waters.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/our-story"
                className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#c87a38] hover:text-[#d98a44] transition-colors"
              >
                <span>Read our full story</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Actual Storefront Photo Feature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#3f6c50]/70 shadow-2xl bg-[#17221b] min-h-[420px] sm:min-h-[480px]">
              {!imgError ? (
                <img
                  src={businessInfo.storefrontImage}
                  alt={businessInfo.storefrontImageAlt}
                  onError={() => setImgError(true)}
                  loading="lazy"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                />
              ) : (
                <div className="w-full h-[420px] sm:h-[480px] flex flex-col items-center justify-center p-8 text-center bg-[#0d1610] relative">
                  <Compass className="w-12 h-12 text-[#c87a38] mb-3" />
                  <h3 className="font-serif text-2xl font-bold text-[#f4eee1]">GARBERVILLE STOREFRONT</h3>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1610] via-transparent to-black/20 opacity-70 pointer-events-none" />

              {/* Verified Actual Photo Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-[#0d1610]/90 backdrop-blur-md border border-[#c87a38]/60 text-[#c87a38] text-xs font-bold uppercase tracking-wider shadow-md">
                <Store className="w-4 h-4" />
                <span>STOREFRONT ON REDWOOD DR</span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0d1610]/95 backdrop-blur-md border border-[#3f6c50]/50 shadow-lg">
                <p className="text-xs font-serif italic text-[#e8ddc8] mb-1">
                  "Brown's Sporting Goods storefront at 797 Redwood Drive in Garberville, California."
                </p>
                <span className="text-[10px] text-[#a39886] font-sans font-semibold uppercase tracking-wider block">
                  Garberville, California 95542
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HERITAGE STORY BLOCK */}
        <div className="relative rounded-xl bg-gradient-to-br from-[#17221b] via-[#121c15] to-[#17221b] border border-[#2d4f3a]/60 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle watermark tree background */}
          <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none text-white">
            <Compass className="w-96 h-96" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1e3526] text-[#c87a38] text-xs font-bold tracking-widest uppercase mb-4 border border-[#3f6c50]/40">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>GARBERVILLE COMMUNITY</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4eee1] mb-6 leading-tight">
              A GARBERVILLE TRADITION.
            </h3>

            <p className="text-lg sm:text-xl text-[#d6c5a8] leading-relaxed font-sans mb-8">
              Brown's Sporting Goods is a third-generation family business rooted in Garberville and Northern California's outdoor community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#2d4f3a]/40 text-sm">
              <div>
                <span className="font-bold text-[#f4eee1] block mb-1">Local Knowledge</span>
                <span className="text-[#a39886] text-xs">Practical insight from living and working in Southern Humboldt.</span>
              </div>
              <div>
                <span className="font-bold text-[#f4eee1] block mb-1">Family Owned</span>
                <span className="text-[#a39886] text-xs">Third-generation commitment to the Garberville community.</span>
              </div>
              <div>
                <span className="font-bold text-[#f4eee1] block mb-1">Community Outfitter</span>
                <span className="text-[#a39886] text-xs">Located prominently at {businessInfo.address.street}.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
