import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export const FamilyStory: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const timelineMilestones = [
    {
      icon: Clock,
      badge: '25+ YEARS OF FAMILY HERITAGE',
      title: 'Wilbur Auction',
      description:
        'The family built decades of trust in Southern Oregon by operating Wilbur Auction for over 25 years—connecting buyers, collectors, and estates with authentic treasures.',
    },
    {
      icon: ShieldCheck,
      badge: '19 YEARS OF COMMUNITY TRADITION',
      title: 'Winston Now N Then Antique Mall',
      description:
        'For 19 years, the family operated Winston Now N Then Antique Mall, establishing deep roots with local vendors and antique enthusiasts throughout the region.',
    },
    {
      icon: HeartHandshake,
      badge: 'CONTINUING THE LEGACY IN MYRTLE CREEK',
      title: "Stuff N' Things",
      description:
        "Founded by owner Brittany Johnson, Stuff N' Things carries forward this rich multi-generational legacy, uniting 75+ independent vendors in a premier Myrtle Creek destination.",
    },
  ];

  return (
    <section id="story" className="py-24 md:py-36 px-6 md:px-12 bg-[#F9F5EE] border-b border-[#211B17]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Magazine Editorial Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#A4875A]" />
              <p className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold text-[#A4875A]">
                OUR HERITAGE & DEEP OREGON ROOTS
              </p>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#211B17] leading-[0.92]">
              A FAMILY OF <br />
              <span className="text-[#59604A] italic font-normal">FINDERS.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 border-l border-[#211B17]/15 pl-6">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-[#A65E42] mb-2">
              EDITORIAL FEATURE
            </p>
            <p className="font-serif text-xl italic text-[#211B17]/80 leading-relaxed">
              "Antiques aren't just objects—they are stories passed down from one generation of finders to the next."
            </p>
          </div>
        </div>

        {/* Magazine Article Layout with Image & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Story Article Text */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-lg md:text-xl font-sans text-[#211B17] leading-relaxed mb-6">
                <span className="float-left text-6xl md:text-7xl font-serif leading-none pr-3 pt-1 text-[#59604A] font-bold">
                  B
                </span>
                rittany Johnson grew up surrounded by the stories, craftsmanship, and community of the Pacific Northwest antique world. For decades, her family has been an integral cornerstone of Oregon's vintage marketplace.
              </p>
              <p className="text-base font-sans text-[#211B17]/80 leading-relaxed mb-6">
                Before opening <strong>Stuff N' Things</strong> in Myrtle Creek, her family operated the beloved <strong>Winston Now N Then Antique Mall</strong> for 19 years and led <strong>Wilbur Auction</strong> for over 25 years. That deep knowledge of estate treasures and passionate curation flows through every aisleway of Stuff N' Things.
              </p>
              <p className="text-base font-sans text-[#211B17]/80 leading-relaxed mb-8">
                Today, Stuff N' Things brings together over 75 independent vendors under one roof on South Main Street. It stands as a vibrant, welcoming space where history, memory, and extraordinary finds meet.
              </p>
            </div>

            {/* Quote Box */}
            <div className="p-8 bg-[#211B17] text-[#F3EBDD] border border-[#211B17] relative">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#A4875A] font-bold block mb-2">
                OWNER & CURATOR
              </span>
              <p className="font-serif text-2xl font-bold tracking-tight mb-2">
                Brittany Johnson
              </p>
              <p className="text-xs text-[#F3EBDD]/70 tracking-wider uppercase font-sans">
                Continuing a multi-generational commitment to antique collectors & casual browsers alike.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline & Heritage Photo */}
          <div className="lg:col-span-6 relative">
            <div
              onMouseEnter={() => setCursor('view', 'HERITAGE')}
              onMouseLeave={resetCursor}
              className="relative w-full aspect-[16/10] mb-12 border border-[#211B17]/20 shadow-xl overflow-hidden bg-[#211B17]"
            >
              <img
                src="/images/heritage.png"
                alt="Heritage antique store aisle with vintage collectibles and warm lighting"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211B17]/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.25em] uppercase text-[#F3EBDD] font-semibold bg-[#211B17]/60 backdrop-blur-sm px-3 py-1">
                AUTHENTIC FAMILY TRADITION
              </span>
            </div>

            {/* Timeline Drawn Line & Milestones */}
            <div className="relative pl-8 space-y-10 border-l-2 border-[#A4875A]/40">
              {timelineMilestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-[#F3EBDD] border-2 border-[#A4875A] flex items-center justify-center text-[#59604A] group-hover:bg-[#59604A] group-hover:text-[#F3EBDD] transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>

                  <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#A65E42] block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#211B17] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-[#211B17]/75 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
