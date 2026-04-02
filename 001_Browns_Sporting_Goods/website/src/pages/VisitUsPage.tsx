import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { LocationSection } from "../components/LocationSection";
import { CTASection } from "../components/CTASection";
import { Phone, Navigation, MapPin, Clock, Compass, Store } from "lucide-react";
import { businessInfo } from "../data/business";

export function VisitUsPage() {
  const [imgError, setImgError] = useState(false);

  return (
    <main id="main-content" className="pt-24 bg-[#0d1610]">
      <SEO
        title="Visit Us | Brown's Sporting Goods in Garberville, CA"
        description="Plan your visit to Brown's Sporting Goods at 797 Redwood Dr, Garberville, CA 95542. Mon–Fri 10:00 AM – 5:00 PM. Call (707) 923-2533."
      />

      {/* Split Editorial Hero Header */}
      <section className="py-16 lg:py-24 bg-[#121c15] border-b border-[#2d4f3a]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Editorial Info Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#17221b] border border-[#3f6c50]/50 text-[#c87a38] text-xs font-bold tracking-[0.2em] uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>GARBERVILLE, CALIFORNIA</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#f4eee1] tracking-tight leading-none">
                PLAN YOUR VISIT
              </h1>

              {/* Verified Address & Contact Card */}
              <div className="p-6 rounded-xl bg-[#17221b] border border-[#2d4f3a]/60 space-y-4 shadow-xl">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#f4eee1] mb-1">
                    {businessInfo.name}
                  </h2>
                  <p className="text-base text-[#d6c5a8] font-semibold">
                    {businessInfo.address.street}
                  </p>
                  <p className="text-sm text-[#c2b9a7]">
                    {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2d4f3a]/40 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-[#c87a38]" />
                    <a href={`tel:${businessInfo.phoneRaw}`} className="font-bold text-[#f4eee1] hover:text-[#c87a38] transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-[#a39886]">
                    <Clock className="w-4 h-4 text-[#c87a38]" />
                    <span>MON–FRI: 10:00 AM – 5:00 PM</span>
                  </div>
                  <p className="text-[11px] italic text-[#8c9c8e]">
                    Call ahead to confirm current hours.
                  </p>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={businessInfo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-md bg-[#c87a38] text-[#0d1610] text-xs font-bold uppercase tracking-wider hover:bg-[#d98a44] transition-all shadow-lg shadow-[#c87a38]/20"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-md bg-[#17221b] text-[#f4eee1] border border-[#3f6c50] text-xs font-bold uppercase tracking-wider hover:border-[#c87a38] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#c87a38]" />
                  <span>CALL THE STORE</span>
                </a>
              </div>
            </motion.div>

            {/* Right Actual Business Storefront Photograph */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#3f6c50]/70 shadow-2xl bg-[#17221b] min-h-[380px] sm:min-h-[460px]">
                
                {/* Storefront Image */}
                {!imgError ? (
                  <img
                    src={businessInfo.storefrontImage}
                    alt={businessInfo.storefrontImageAlt}
                    onError={() => setImgError(true)}
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-[380px] sm:h-[460px] flex flex-col items-center justify-center p-8 text-center bg-[#0d1610]">
                    <Compass className="w-12 h-12 text-[#c87a38] mb-3" />
                    <h3 className="font-serif text-2xl font-bold text-[#f4eee1]">STOREFRONT ON REDWOOD DR</h3>
                  </div>
                )}

                {/* Ambient Subtle Edge Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1610] via-transparent to-black/30 opacity-70 pointer-events-none" />
                
                {/* Verified Storefront Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-[#0d1610]/95 backdrop-blur-md border border-[#c87a38]/60 text-[#c87a38] text-xs font-bold uppercase tracking-wider shadow-md">
                  <Store className="w-4 h-4" />
                  <span>ACTUAL STOREFRONT PHOTO</span>
                </div>

                {/* Bottom Address Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0d1610]/95 backdrop-blur-md border border-[#3f6c50]/50 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f4eee1] block">
                      Brown's Sporting Goods
                    </span>
                    <span className="text-[11px] text-[#a39886]">
                      797 Redwood Dr • Garberville, California 95542
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#c87a38] uppercase tracking-wider hidden sm:block">
                    Look for this sign
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Location Section */}
      <LocationSection fullPageMode={true} />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
