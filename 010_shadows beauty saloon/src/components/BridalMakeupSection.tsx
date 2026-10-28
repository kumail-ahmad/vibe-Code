import React from 'react';
import { Sparkles, Phone, Mail } from 'lucide-react';

export const BridalMakeupSection: React.FC = () => {
  return (
    <section id="bridal" className="py-28 bg-[#141416] relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Typography Banner */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.3em] font-sans text-[#9a7b56] uppercase block mb-4">
              03 / SPECIALTY STUDIO
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl text-[#f5f2eb] font-light leading-[1.05] tracking-wide mb-6">
              BRIDAL <br />
              <span className="italic text-[#b5956b]">MAKEUP</span> & <br />
              TRANSFORMATION.
            </h2>
            <p className="text-sm font-sans text-[#a89f91] leading-relaxed max-w-md mb-8">
              Recognized across Bengaluru for bridal make-up artistry, skin preparation, and saree draping. Every bridal consultation is personalized to align with client elegance and heritage.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href="tel:08041127534"
                data-cursor="ENQUIRE"
                className="flex items-center gap-2 px-6 py-3 bg-[#9a7b56] text-[#0d0d0e] font-sans text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#b5956b] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>CALL FOR BRIDAL ENQUIRY</span>
              </a>
              <a
                href="mailto:luiyila.ashirmray@yahoo.com"
                className="flex items-center gap-2 px-6 py-3 border border-white/15 text-[#f5f2eb] font-sans text-xs tracking-widest uppercase rounded-full hover:border-[#9a7b56] hover:text-[#9a7b56] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#9a7b56]" />
                <span>EMAIL STUDIO</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              {/* Editorial Bridal Visual Asset Frame */}
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85"
                alt="Bridal Makeup & Styling"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/20 to-transparent" />

              {/* Verified Services Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#0d0d0e]/85 backdrop-blur-md border border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#9a7b56]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase font-semibold">
                    VERIFIED BRIDAL SERVICES
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-sans text-[#efece6] pt-1">
                  <div>• Bridal Hair & Makeup</div>
                  <div>• Saree Draping</div>
                  <div>• Skin Prep & Radiance</div>
                  <div>• Party Styling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
