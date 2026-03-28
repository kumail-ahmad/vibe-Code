import { SEO } from "../components/SEO";
import { ContactForm } from "../components/ContactForm";
import { LocationSection } from "../components/LocationSection";
import { CTASection } from "../components/CTASection";

export function ContactPage() {
  return (
    <main id="main-content" className="pt-24 bg-[#0d1610]">
      <SEO
        title="Contact Us | Brown's Sporting Goods Garberville, CA"
        description="Get in touch with Brown's Sporting Goods in Garberville, CA. Call (707) 923-2533 or send us a message."
      />

      {/* Header */}
      <section className="py-16 lg:py-24 bg-[#121c15] border-b border-[#2d4f3a]/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c87a38] block mb-3">
            GET IN TOUCH WITH US
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#f4eee1] tracking-tight mb-4">
            CONTACT BROWN'S
          </h1>
          <p className="text-lg text-[#c2b9a7] max-w-2xl mx-auto font-sans leading-relaxed">
            Have questions regarding gear, river conditions, or store inventory? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#0d1610]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Location Section */}
      <LocationSection />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
