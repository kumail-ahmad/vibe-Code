import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Compass, Shield } from "lucide-react";
import { businessInfo } from "../data/business";
import { SectionHeading } from "./SectionHeading";

interface LocationSectionProps {
  fullPageMode?: boolean;
}

export function LocationSection({ fullPageMode = false }: LocationSectionProps) {
  return (
    <section className={`py-20 ${fullPageMode ? "bg-[#0d1610]" : "bg-[#121c15]"} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="STORE LOCATION & HOURS"
          title="VISIT BROWN'S IN GARBERVILLE"
          subtitle="Located on Redwood Drive in Garberville, California—serving Southern Humboldt County outdoor life."
        />

        {/* Premium Expedition Location Panel Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-[#2d4f3a]/60 bg-[#17221b] shadow-2xl"
        >
          {/* Main Grid: Two-Column Desktop / Stacked Mobile (Info first, Decorative Visual second) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-stretch">
            
            {/* LEFT COLUMN: Business Information & CTAs (Mobile 1st - 5th) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                
                {/* 1. Business Name */}
                <div className="flex items-center space-x-3.5 pb-4 border-b border-[#2d4f3a]/50">
                  <div className="p-3 rounded-lg bg-[#0d1610] text-[#c87a38] border border-[#3f6c50]/50 shadow-md shrink-0">
                    <Compass className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c87a38]">
                      GARBERVILLE, CALIFORNIA
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4eee1]">
                      {businessInfo.name}
                    </h3>
                  </div>
                </div>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* 2. Address */}
                  <a
                    href={businessInfo.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-xl bg-[#0d1610]/90 border border-[#2d4f3a]/60 hover:border-[#c87a38]/80 transition-all space-y-1.5 shadow-inner block group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[#c87a38] mb-1">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#a39886]">
                          Store Address
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-base text-[#f4eee1] font-bold leading-tight group-hover:text-[#c87a38] transition-colors">
                      797 Redwood Dr
                    </p>
                    <p className="text-xs text-[#c2b9a7]">
                      Garberville, CA 95542
                    </p>
                    <p className="text-[11px] font-semibold text-[#8c9c8e] uppercase tracking-wider">
                      USA • Open Directions ↗
                    </p>
                  </a>

                  {/* 3. Phone & Email */}
                  <div className="p-5 rounded-xl bg-[#0d1610]/90 border border-[#2d4f3a]/60 space-y-2.5 shadow-inner">
                    <div>
                      <div className="flex items-center space-x-2 text-[#c87a38] mb-1">
                        <Phone className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#a39886]">
                          Phone
                        </span>
                      </div>
                      <a
                        href={`tel:${businessInfo.phoneRaw}`}
                        className="text-base text-[#f4eee1] font-bold hover:text-[#c87a38] transition-colors block"
                      >
                        (707) 923-2533
                      </a>
                    </div>

                    <div className="pt-2 border-t border-[#2d4f3a]/40">
                      <div className="flex items-center space-x-2 text-[#c87a38] mb-0.5">
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#a39886]">
                          Email
                        </span>
                      </div>
                      <a
                        href={`mailto:${businessInfo.email}`}
                        className="text-xs text-[#f4eee1] hover:text-[#c87a38] transition-colors block font-medium truncate"
                      >
                        browns3140@att.net
                      </a>
                    </div>
                  </div>

                </div>

                {/* 4. Hours Block */}
                <div className="p-5 rounded-xl bg-[#0d1610]/90 border border-[#2d4f3a]/60 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[#c87a38]">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#a39886]">
                        Hours
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#c87a38] bg-[#1e3526] px-3 py-1 rounded border border-[#3f6c50]/50 tracking-wider">
                      MON–FRI: 10:00 AM – 5:00 PM
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#c2b9a7] pt-1">
                    <div className="flex justify-between py-1 border-b border-[#2d4f3a]/30">
                      <span className="font-semibold text-[#f4eee1]">Monday – Friday</span>
                      <span className="font-bold text-[#f4eee1]">10:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#8c9c8e]">Saturday – Sunday</span>
                      <span className="text-[#8c9c8e]">Closed</span>
                    </div>
                  </div>

                  <p className="text-xs italic text-[#d6c5a8] pt-1">
                    "Call ahead to confirm current hours."
                  </p>
                </div>

              </div>

              {/* 5. Functional Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={businessInfo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-lg bg-[#c87a38] hover:bg-[#d98a44] text-[#0d1610] text-xs font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:shadow-[#c87a38]/25 cursor-pointer"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="w-full min-h-[48px] inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-[#0d1610] hover:bg-[#1e3526] text-[#f4eee1] border border-[#3f6c50] text-xs font-bold tracking-wider uppercase transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#c87a38]" />
                    <span>CALL THE STORE</span>
                  </a>

                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="w-full min-h-[48px] inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-[#0d1610] hover:bg-[#1e3526] text-[#f4eee1] border border-[#3f6c50] text-xs font-bold tracking-wider uppercase transition-all"
                  >
                    <Mail className="w-4 h-4 text-[#c87a38]" />
                    <span>EMAIL THE STORE</span>
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Interactive Clickable Location Card Redirecting to Google Maps */}
            <a
              href={businessInfo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Brown's Sporting Goods location directions in Google Maps"
              className="lg:col-span-6 relative rounded-xl overflow-hidden border-2 border-[#3f6c50]/60 hover:border-[#c87a38] bg-[#0d1610] p-6 sm:p-8 flex flex-col justify-between min-h-[380px] lg:min-h-[480px] shadow-inner group transition-all duration-300 block hover:shadow-2xl cursor-pointer"
            >
              
              {/* Subtle Topographic Contour Lines SVG Pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id="topoGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3f6c50" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#topoGrid)" />
                  
                  {/* Topographic Contour Lines */}
                  <path d="M -50 100 Q 150 50 350 180 T 700 220" fill="none" stroke="#2d4f3a" strokeWidth="1.5" strokeDasharray="4,4" />
                  <path d="M -20 200 Q 200 120 400 280 T 800 300" fill="none" stroke="#3f6c50" strokeWidth="1.2" />
                  <path d="M 0 320 Q 250 220 500 380 T 900 420" fill="none" stroke="#2d4f3a" strokeWidth="1.5" />
                  <path d="M 100 0 Q 300 180 450 100 T 800 150" fill="none" stroke="#3f6c50" strokeWidth="1" strokeDasharray="6,6" />
                </svg>
              </div>

              {/* Stylized Expedition Trail Line & Compass Marks */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg className="w-full h-full max-w-lg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 50 350 C 120 300, 150 220, 200 200"
                    stroke="#c87a38"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <circle cx="50" cy="350" r="4" fill="#c87a38" opacity="0.6" />
                  <circle cx="120" cy="300" r="3" fill="#c87a38" opacity="0.4" />
                  <circle cx="150" cy="220" r="3" fill="#c87a38" opacity="0.4" />
                </svg>
              </div>

              {/* Top Header Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#17221b]/90 border border-[#3f6c50]/60 backdrop-blur-sm group-hover:border-[#c87a38]/60 transition-colors">
                  <Compass className="w-3.5 h-3.5 text-[#c87a38]" />
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#d6c5a8] uppercase">
                    INTERACTIVE LOCATION CARD
                  </span>
                </div>
                <div className="text-[10px] font-bold text-[#c87a38] tracking-widest uppercase bg-[#1e3526] px-2.5 py-1 rounded border border-[#3f6c50]/60 flex items-center space-x-1 group-hover:bg-[#c87a38] group-hover:text-[#0d1610] transition-all">
                  <span>OPEN MAPS</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Center Location Marker Visual Element */}
              <div className="relative z-10 my-auto text-center py-8">
                
                {/* Glowing Location Marker with Radar Rings */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <span className="absolute w-24 h-24 rounded-full bg-[#c87a38]/10 animate-ping" />
                  <span className="absolute w-16 h-16 rounded-full bg-[#c87a38]/20 border border-[#c87a38]/40 group-hover:scale-110 transition-transform" />
                  <div className="w-14 h-14 rounded-full bg-[#1e3526] border-2 border-[#c87a38] text-[#c87a38] flex items-center justify-center shadow-xl relative z-10 group-hover:bg-[#c87a38] group-hover:text-[#0d1610] transition-colors">
                    <MapPin className="w-7 h-7 transform -translate-y-0.5" />
                  </div>
                </div>

                {/* Location Names */}
                <h4 className="font-serif text-3xl sm:text-4xl font-bold text-[#f4eee1] tracking-tight mb-2 drop-shadow-md group-hover:text-white transition-colors">
                  GARBERVILLE, CALIFORNIA
                </h4>
                
                <div className="inline-block px-4 py-1.5 rounded-md bg-[#17221b]/95 border border-[#3f6c50]/80 shadow-md group-hover:border-[#c87a38] transition-colors">
                  <span className="font-sans text-sm font-bold text-[#c87a38] tracking-widest uppercase">
                    797 REDWOOD DR
                  </span>
                </div>

                <p className="text-xs text-[#a39886] max-w-xs mx-auto mt-4 leading-relaxed font-sans group-hover:text-[#c2b9a7] transition-colors">
                  Click anywhere on this card to get live driving directions in Google Maps.
                </p>
              </div>

              {/* Bottom Footer Info Bar */}
              <div className="relative z-10 pt-4 border-t border-[#2d4f3a]/60 flex items-center justify-between text-[11px] text-[#8c9c8e]">
                <div className="flex items-center space-x-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#c87a38]" />
                  <span>Third-Generation Family Outfitter</span>
                </div>
                <span className="font-bold text-[#c87a38] uppercase tracking-wider group-hover:underline">
                  Get Directions ↗
                </span>
              </div>

            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
