import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { LocationSection } from "../components/LocationSection";
import { CTASection } from "../components/CTASection";
import { ShieldCheck, HeartHandshake, Phone, Compass, Store } from "lucide-react";
import { businessInfo } from "../data/business";

export function OurStoryPage() {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  return (
    <main id="main-content" className="pt-24 bg-[#0d1610]">
      <SEO
        title="Our Story & Heritage | Brown's Sporting Goods Garberville"
        description="Brown's Sporting Goods is a third-generation family business rooted in Garberville and Northern California's outdoor community."
      />

      {/* Story Page Hero */}
      <section className="relative py-20 lg:py-28 bg-[#121c15] overflow-hidden border-b border-[#2d4f3a]/40">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121c15] via-[#121c15]/80 to-transparent z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#c87a38] mb-4"
          >
            HERITAGE & COMMUNITY
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold text-[#f4eee1] tracking-tight leading-tight mb-6"
          >
            A GARBERVILLE TRADITION.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#c2b9a7] leading-relaxed max-w-2xl mx-auto font-sans font-normal"
          >
            Brown's Sporting Goods is a third-generation family business rooted in Garberville and Northern California's outdoor community.
          </motion.p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-20 bg-[#0d1610]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Third Generation Pillar with Actual Storefront Photo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c87a38]">
                FAMILY HERITAGE
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#f4eee1]">
                Third-Generation Family Business
              </h2>
              <p className="text-base text-[#c2b9a7] leading-relaxed font-sans font-normal">
                Brown's Sporting Goods is rooted in Garberville and Southern Humboldt County. For generations, the store has served local residents, outdoor enthusiasts, and visitors traveling through the Redwood Coast.
              </p>
            </div>
            <div className="md:col-span-6 rounded-xl overflow-hidden border-2 border-[#3f6c50]/70 shadow-xl bg-[#17221b] h-80 relative flex items-center justify-center group">
              {!img1Error ? (
                <img
                  src={businessInfo.storefrontImage}
                  alt={businessInfo.storefrontImageAlt}
                  onError={() => setImg1Error(true)}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="p-6 text-center">
                  <Compass className="w-10 h-10 text-[#c87a38] mx-auto mb-2" />
                  <span className="font-serif text-lg font-bold text-[#f4eee1]">Garberville Storefront</span>
                </div>
              )}
              <div className="absolute top-3 left-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-[#0d1610]/90 text-[#c87a38] text-[10px] font-bold uppercase tracking-wider border border-[#c87a38]/50">
                <Store className="w-3.5 h-3.5" />
                <span>Actual Storefront Photo</span>
              </div>
            </div>
          </div>

          {/* Local Knowledge Pillar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 order-2 md:order-1 rounded-xl overflow-hidden border border-[#2d4f3a]/60 shadow-xl bg-[#17221b] h-72 relative flex items-center justify-center">
              {!img2Error ? (
                <img
                  src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=800&q=80"
                  alt="Angler fishing along a serene Northern California river bank"
                  onError={() => setImg2Error(true)}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-6 text-center">
                  <Compass className="w-10 h-10 text-[#c87a38] mx-auto mb-2" />
                  <span className="font-serif text-lg font-bold text-[#f4eee1]">River Fishing Knowledge</span>
                </div>
              )}
            </div>
            <div className="md:col-span-6 order-1 md:order-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c87a38]">
                EXPERIENCE THAT COUNTS
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#f4eee1]">
                Local Knowledge & Outdoor Life
              </h2>
              <p className="text-base text-[#c2b9a7] leading-relaxed font-sans font-normal">
                Getting outdoors in Northern California requires practical gear and real local experience. Brown's provides friendly guidance rooted in decades of community presence.
              </p>
            </div>
          </div>

          {/* Personal Service Block */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#17221b] border border-[#2d4f3a]/60 shadow-xl space-y-6">
            <SectionHeading
              badge="STORE PHILOSOPHY"
              title="Personal Service & Community Focus"
              subtitle="Straightforward advice, honest guidance, and practical outdoor gear for everyone who walks through our doors."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="p-4 rounded-md bg-[#0d1610] border border-[#2d4f3a]/40 flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#c87a38] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#f4eee1] mb-1">Authentic Outfitter</h4>
                  <p className="text-xs text-[#a39886]">No high-pressure sales—just practical equipment that works when you need it.</p>
                </div>
              </div>

              <div className="p-4 rounded-md bg-[#0d1610] border border-[#2d4f3a]/40 flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-[#c87a38] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#f4eee1] mb-1">Garberville Hub</h4>
                  <p className="text-xs text-[#a39886]">A local gathering point for anglers, campers, hunters, and visitors on Redwood Drive.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 text-center">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-md bg-[#c87a38] text-[#0d1610] text-xs font-bold uppercase tracking-wider hover:bg-[#d98a44] transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Brown's ({businessInfo.phone})</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Location */}
      <LocationSection />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
