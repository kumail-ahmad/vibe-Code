import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HorizontalStorySection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Vertical scroll drives horizontal X translation
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);

  const storySlides = [
    {
      title: 'COFFEE',
      subtitle: 'Morning Ritual',
      description: 'Single-origin espresso and silky lattes crafted every morning from 07:00.',
      image: '/images/artisan_coffee.png',
      aspect: 'aspect-[3/4]',
      size: 'w-[70vw] md:w-[35vw]',
    },
    {
      title: 'CAKE',
      subtitle: 'Artisanal Bakery',
      description: 'Handcrafted sponges, cinnamon buns, and gluten-free treats.',
      image: '/images/cakes_pastries.png',
      aspect: 'aspect-square',
      size: 'w-[75vw] md:w-[40vw]',
    },
    {
      title: 'FOOD',
      subtitle: 'Honest Kitchen',
      description: 'Warm sourdough toasties, prosciutto, pesto, and avocado salads.',
      image: '/images/gourmet_sandwich.png',
      aspect: 'aspect-[4/3]',
      size: 'w-[85vw] md:w-[48vw]',
    },
    {
      title: 'PEOPLE',
      subtitle: 'Hornsey Locals',
      description: 'A welcoming space for neighbors, remote creators, and friends.',
      image: '/images/cafe_space.png',
      aspect: 'aspect-[3/4]',
      size: 'w-[70vw] md:w-[36vw]',
    },
    {
      title: 'SPACE',
      subtitle: 'Your Hornsey Escape',
      description: 'Tactile wooden benches, warm lighting, and calm background tunes.',
      image: '/images/hero_interior.png',
      aspect: 'aspect-[16/10]',
      size: 'w-[85vw] md:w-[50vw]',
    },
  ];

  return (
    <section
      id="story"
      ref={targetRef}
      className="relative h-[300vh] bg-islands-charcoal text-islands-cream"
    >
      {/* Sticky Pinned Canvas */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-16">
        
        {/* Top Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-islands-sand" />
            <span className="font-sans text-xs font-semibold tracking-widest text-islands-sand uppercase">
              SECTION 04 — HORIZONTAL STORY
            </span>
          </div>

          <div className="font-sans text-xs tracking-widest text-islands-cream/60 uppercase">
            Scroll vertically to traverse →
          </div>
        </div>

        {/* Horizontal Motion Track */}
        <div className="relative flex items-center my-auto overflow-hidden">
          <motion.div style={{ x }} className="flex items-center gap-12 md:gap-20 px-6 md:px-12">
            
            {/* Introductory Slide Title Card */}
            <div className="w-[80vw] md:w-[40vw] flex-shrink-0">
              <span className="font-sans text-xs uppercase tracking-widest text-islands-sand block mb-4">
                THE ISLANDS JOURNEY
              </span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-6">
                FROM MORNING <br />
                <span className="italic text-islands-sand font-serif">BEANS TO</span> <br />
                AFTERNOON BITES.
              </h2>
              <p className="font-sans text-sm md:text-base text-islands-cream/70 max-w-sm leading-relaxed">
                Every element of our café is curated to offer an effortless pause from the Hornsey street outside.
              </p>
            </div>

            {/* Horizontal Story Image & Typography Cards */}
            {storySlides.map((slide, index) => (
              <div
                key={slide.title}
                className={`${slide.size} flex-shrink-0 relative group`}
                data-cursor={slide.title}
              >
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl border border-islands-cream/15 ${slide.aspect} bg-islands-espresso`}>
                  <img
                    src={slide.image}
                    alt={`Islands Hornsey ${slide.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-islands-black/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-islands-sand block mb-1">
                      0{index + 1} / 05 · {slide.subtitle}
                    </span>
                    <h3 className="font-serif text-4xl md:text-6xl font-medium text-islands-cream leading-tight">
                      {slide.title}
                    </h3>
                    <p className="font-sans text-xs text-islands-cream/80 max-w-xs mt-2 line-clamp-2">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </motion.div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between z-10 pt-4 border-t border-islands-cream/10">
          <div className="font-sans text-xs tracking-widest text-islands-sand uppercase">
            104 High Street · Hornsey
          </div>

          <div className="w-48 h-[2px] bg-islands-cream/20 relative rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 bg-islands-sand origin-left"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
