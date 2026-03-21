import { motion } from "framer-motion";
import { Compass, ShoppingBag, Tag, Trees, Heart, Info, Star } from "lucide-react";
import { reviewThemes } from "../data/business";
import { SectionHeading } from "./SectionHeading";

export function ReviewThemes() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-6 h-6 text-[#c87a38]" />;
      case "ShoppingBag": return <ShoppingBag className="w-6 h-6 text-[#c87a38]" />;
      case "Tag": return <Tag className="w-6 h-6 text-[#c87a38]" />;
      case "Trees": return <Trees className="w-6 h-6 text-[#c87a38]" />;
      case "Heart": return <Heart className="w-6 h-6 text-[#c87a38]" />;
      default: return <Star className="w-6 h-6 text-[#c87a38]" />;
    }
  };

  return (
    <section className="py-20 bg-[#0d1610] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="COMMUNITY REPUTATION"
          title="WHAT CUSTOMERS VALUE"
          subtitle="Consistently recognized by Southern Humboldt locals and Redwood Highway travelers."
        />

        {/* 5 Distinctive Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviewThemes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-[#17221b] border border-[#2d4f3a]/50 hover:border-[#c87a38]/50 transition-all duration-300 shadow-md group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-md bg-[#0d1610] border border-[#2d4f3a]/60 group-hover:border-[#c87a38]/40 transition-colors">
                  {getIcon(theme.iconName)}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#f4eee1] group-hover:text-[#c87a38] transition-colors">
                  {theme.title}
                </h3>
              </div>

              <p className="text-sm text-[#c2b9a7] leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Factual Disclaimer Banner */}
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#17221b] border border-[#2d4f3a]/40 text-[#a39886] text-xs font-semibold">
            <Info className="w-3.5 h-3.5 text-[#c87a38]" />
            <span>Based on publicly available customer reviews & local community feedback.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
