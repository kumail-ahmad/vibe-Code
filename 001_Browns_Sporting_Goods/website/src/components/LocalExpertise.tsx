import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Compass, Shield, MapPin } from "lucide-react";
import { businessInfo } from "../data/business";

export function LocalExpertise() {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  return (
    <section className="py-20 bg-[#121c15] border-y border-[#2d4f3a]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Authentic Visual Mosaic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-[#2d4f3a]/50 h-56 shadow-lg bg-[#0d1610] relative flex items-center justify-center">
                {!img1Error ? (
                  <img
                    src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=800&q=80"
                    alt="Angler fishing on a serene river bank in Northern California"
                    onError={() => setImg1Error(true)}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-4 text-center">
                    <Compass className="w-8 h-8 text-[#c87a38] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#f4eee1]">River Fishing</span>
                  </div>
                )}
              </div>

              <div className="rounded-lg overflow-hidden border border-[#2d4f3a]/50 h-44 shadow-lg bg-[#17221b] p-5 flex flex-col justify-center">
                <Compass className="w-8 h-8 text-[#c87a38] mb-2" />
                <span className="font-serif text-lg font-bold text-[#f4eee1]">Local Waters & Trails</span>
                <span className="text-xs text-[#a39886] mt-1">Eel River Valley & Redwood Country</span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-lg overflow-hidden border border-[#2d4f3a]/50 h-44 shadow-lg bg-[#17221b] p-5 flex flex-col justify-center">
                <Shield className="w-8 h-8 text-[#c87a38] mb-2" />
                <span className="font-serif text-lg font-bold text-[#f4eee1]">Community Outfitter</span>
                <span className="text-xs text-[#a39886] mt-1">Third-generation family business</span>
              </div>

              <div className="rounded-lg overflow-hidden border border-[#2d4f3a]/50 h-56 shadow-lg bg-[#0d1610] relative flex items-center justify-center">
                {!img2Error ? (
                  <img
                    src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"
                    alt="Campfire and shelter beneath tall redwood trees"
                    onError={() => setImg2Error(true)}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-4 text-center">
                    <Shield className="w-8 h-8 text-[#c87a38] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#f4eee1]">Redwood Camping</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Copy and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#c87a38] uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>NORTH COAST EXPERTISE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4eee1] leading-tight">
              LOCAL KNOWLEDGE MATTERS.
            </h2>

            <p className="text-lg text-[#c2b9a7] leading-relaxed font-sans font-normal">
              Good gear is only part of getting outdoors. Local knowledge can make the difference.
            </p>

            {/* ASK BROWN'S Callout Box */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#17221b] border-2 border-[#c87a38]/40 shadow-xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-[#1e3526] text-[#c87a38]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#f4eee1]">ASK BROWN'S</h3>
                  <p className="text-xs text-[#a39886]">In-store assistance & direct phone line</p>
                </div>
              </div>

              <p className="text-sm text-[#d6c5a8] leading-normal font-medium">
                Not sure what you need? Call or stop by Brown's.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-md bg-[#c87a38] hover:bg-[#d98a44] text-[#0d1610] text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>ASK BROWN'S ({businessInfo.phone})</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
