import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { businessInfo } from "../data/business";

export function CTASection() {
  return (
    <section className="relative py-24 bg-[#0d1610] overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0d1610] via-[#0d1610]/90 to-[#0d1610]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#c87a38] mb-4"
        >
          GARBERVILLE, CA • REDWOOD HIGHWAY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl font-bold text-[#f4eee1] tracking-tight leading-tight mb-6"
        >
          GET OUT THERE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#c2b9a7] leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Whether you're planning a day on the water, a weekend outdoors, or simply need the right gear, stop by Brown's Sporting Goods in Garberville.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/visit-us"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-md bg-[#c87a38] hover:bg-[#d98a44] text-[#0d1610] text-xs font-bold tracking-wider uppercase transition-all shadow-xl shadow-[#c87a38]/20"
          >
            <MapPin className="w-4 h-4" />
            <span>VISIT BROWN'S</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-md bg-[#17221b] hover:bg-[#1e3526] text-[#f4eee1] border border-[#3f6c50] text-xs font-bold tracking-wider uppercase transition-all"
          >
            <Phone className="w-4 h-4 text-[#c87a38]" />
            <span>CALL THE STORE</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
