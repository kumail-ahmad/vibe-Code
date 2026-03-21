import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightBackground?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  lightBackground = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#c87a38] mb-3"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] ${
          lightBackground ? "text-[#142419]" : "text-[#f4eee1]"
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            lightBackground ? "text-[#3f5244]" : "text-[#c2b9a7]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
