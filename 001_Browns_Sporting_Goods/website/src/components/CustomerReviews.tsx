import { motion } from "framer-motion";
import { Star, ArrowUpRight, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { verifiedReviews, reviewSummary } from "../data/business";
import { SectionHeading } from "./SectionHeading";

export function CustomerReviews() {
  return (
    <section className="py-20 bg-[#0d1610] relative overflow-hidden border-t border-[#2d4f3a]/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c87a38]/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="VERIFIED CUSTOMER FEEDBACK"
          title="WHAT OUR CUSTOMERS SAY"
          subtitle="Local service. Practical knowledge. A reputation built over generations."
        />

        {/* Reviews Container: Desktop Two-Column / Mobile Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
          
          {/* LEFT COLUMN: Large Rating Summary Block */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-[#17221b] rounded-2xl border border-[#3f6c50]/50 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle background watermark */}
            <div className="absolute -right-6 -bottom-6 opacity-5 text-white pointer-events-none">
              <MessageSquareQuote className="w-48 h-48" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1e3526] text-[#c87a38] text-[11px] font-bold tracking-widest uppercase border border-[#3f6c50]/50">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>LOCAL REPUTATION</span>
              </div>

              <div>
                <div className="flex items-baseline space-x-3">
                  <span className="font-serif text-6xl sm:text-7xl font-bold text-[#f4eee1] tracking-tight">
                    {reviewSummary.rating}
                  </span>
                  <span className="text-xl font-bold text-[#a39886]">
                    / 5.0
                  </span>
                </div>

                {/* 5-Star Rating Icons */}
                <div className="flex items-center space-x-1.5 text-[#c87a38] my-3">
                  {[...Array(reviewSummary.stars)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#c87a38] text-[#c87a38]" />
                  ))}
                </div>

                <p className="text-sm font-bold uppercase tracking-wider text-[#d6c5a8]">
                  {reviewSummary.label}
                </p>
              </div>

              <div className="pt-6 border-t border-[#2d4f3a]/40 text-xs text-[#a39886] space-y-2 leading-relaxed">
                <p>
                  Brown's Sporting Goods maintains a strong public review rating across Garberville business listings.
                </p>
                <p className="italic text-[#8c9c8e]">
                  Reflecting direct customer experience in Southern Humboldt County.
                </p>
              </div>
            </div>

            {/* Micro Badge */}
            <div className="pt-8 relative z-10 border-t border-[#2d4f3a]/30 mt-6 flex items-center justify-between text-[11px] text-[#c2b9a7]">
              <span>Garberville, California</span>
              <span className="font-bold text-[#c87a38]">4.8 ★ Rating</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Excerpts Review Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedReviews.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#17221b] rounded-xl border border-[#2d4f3a]/60 hover:border-[#c87a38]/60 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 text-[#c87a38]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c87a38] text-[#c87a38]" />
                    ))}
                  </div>

                  {/* Excerpt Quote */}
                  <blockquote className="text-sm text-[#f4eee1] leading-relaxed font-sans font-normal italic group-hover:text-white transition-colors">
                    "{rev.text}"
                  </blockquote>
                </div>

                {/* Attribution */}
                <div className="pt-4 border-t border-[#2d4f3a]/40 mt-6 flex items-center justify-between text-xs text-[#a39886]">
                  <span className="font-semibold text-[#c2b9a7]">
                    — {rev.author}
                  </span>
                  <span className="text-[10px] text-[#8c9c8e] uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* BOTTOM REVIEW CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-[#2d4f3a]/40 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#17221b]/60 rounded-xl p-6 border border-[#2d4f3a]/50"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c87a38] block mb-1">
              SEE WHAT LOCALS ARE SAYING
            </span>
            <p className="text-sm text-[#c2b9a7]">
              Read verified public business reviews and feedback from North Coast customers.
            </p>
          </div>

          <a
            href={reviewSummary.externalReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-[#c87a38] hover:bg-[#d98a44] text-[#0d1610] text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            <span>READ MORE REVIEWS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
