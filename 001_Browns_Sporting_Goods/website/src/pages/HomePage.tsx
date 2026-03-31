import { SEO } from "../components/SEO";
import { Hero } from "../components/Hero";
import { StorySection } from "../components/StorySection";
import { SectionHeading } from "../components/SectionHeading";
import { CategoryCard } from "../components/CategoryCard";
import { LocalExpertise } from "../components/LocalExpertise";
import { ReviewThemes } from "../components/ReviewThemes";
import { CustomerReviews } from "../components/CustomerReviews";
import { LocationSection } from "../components/LocationSection";
import { CTASection } from "../components/CTASection";
import { productCategories } from "../data/business";

export function HomePage() {
  return (
    <main id="main-content">
      <SEO
        title="Brown's Sporting Goods | Outdoor Gear in Garberville, California"
        description="Brown's Sporting Goods is a local Garberville destination for fishing, camping, hunting, sports and outdoor gear."
      />

      {/* Hero Section with Actual Storefront Photograph */}
      <Hero />

      {/* Story & Heritage Section */}
      <StorySection />

      {/* Categories Section */}
      <section className="py-20 bg-[#121c15] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STORE DEPARTMENTS"
            title="READY FOR WHEREVER THE ROAD LEADS."
            subtitle="Essential gear for fishing, camping, hunting, and outdoor exploration in Northern California."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <LocalExpertise />

      {/* Verified Customer Excerpts & Rating Section */}
      <CustomerReviews />

      {/* Customer Trust Review Themes Section */}
      <ReviewThemes />

      {/* Visit The Store Location Section */}
      <LocationSection />

      {/* Final CTA Section */}
      <CTASection />
    </main>
  );
}
