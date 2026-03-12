import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Shield, ArrowRight, Store } from "lucide-react";
import { businessInfo } from "../data/business";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0d1610]">
      {/* Subtle authentic Northern California Redwood forest background texture */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none filter brightness-75 contrast-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511497584788-876761c1298b?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Restrained Dark Forest Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0d1610] via-[#0d1610]/80 to-[#0d1610]" />
      <div className="absolute inset-0 z-0 bg-radial from-transparent via-[#0d1610]/60 to-[#0d1610]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Location Indicator Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#17221b]/95 border border-[#3f6c50]/60 text-[#c87a38] backdrop-blur-md shadow-lg">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">
                {businessInfo.locationBadge}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4eee1] leading-[1.08] drop-shadow-md">
              GEAR FOR THE WILD.
              <span className="block italic font-normal text-[#d6c5a8] mt-1 sm:mt-2">
                ADVICE FROM PEOPLE WHO KNOW IT.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#c2b9a7] max-w-2xl leading-relaxed font-sans font-normal">
              {businessInfo.heroSubtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/visit-us"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-md bg-[#c87a38] hover:bg-[#d98a44] text-[#0d1610] text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#c87a38]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>VISIT THE STORE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-md bg-[#17221b] hover:bg-[#1e3526] text-[#f4eee1] border border-[#3f6c50]/70 hover:border-[#c87a38] text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#c87a38]" />
                <span>CALL BROWN'S</span>
              </a>
            </div>

            {/* Factual Micro-Pill Footer */}
            <div className="pt-6 border-t border-[#2d4f3a]/40 flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#9a907d]">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#c87a38]" />
                <span>Third-Generation Family Business</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c87a38]" />
                <span>797 Redwood Dr, Garberville</span>
              </div>
            </div>
          </motion.div>

          {/* Right Featured Actual Storefront Photograph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#3f6c50]/80 shadow-2xl bg-[#17221b] group">
              {/* Actual Business Photo - Crisp, Natural Colors, Zero Obscuring Filters */}
              <img
                src={businessInfo.storefrontImage}
                alt={businessInfo.storefrontImageAlt}
                className="w-full h-[360px] sm:h-[440px] object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
              />
              
              {/* Subtle top & bottom editorial gradient edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1610] via-transparent to-black/30 opacity-70 pointer-events-none" />

              {/* Verified Actual Storefront Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#0d1610]/90 backdrop-blur-md border border-[#c87a38]/60 text-[#c87a38] text-[11px] font-bold tracking-wider uppercase shadow-md">
                  <Store className="w-3.5 h-3.5" />
                  <span>STOREFRONT IN GARBERVILLE</span>
                </div>
                <span className="text-[10px] font-mono text-[#f4eee1] bg-[#0d1610]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#3f6c50]/50 hidden sm:block">
                  ACTUAL PHOTOGRAPH
                </span>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0d1610]/95 backdrop-blur-md border border-[#3f6c50]/60 space-y-1 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f4eee1]">
                    {businessInfo.name}
                  </span>
                  <span className="text-[10px] font-semibold text-[#c87a38] uppercase">
                    797 Redwood Dr
                  </span>
                </div>
                <p className="text-[11px] text-[#a39886] leading-tight">
                  Located in Garberville, California—serving Southern Humboldt outdoor enthusiasts.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
