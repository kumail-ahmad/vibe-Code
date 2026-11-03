import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-32 bg-black border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column: Editorial CTA Text */}
        <div className="max-w-xl">
          <span className="text-[9px] tracking-[0.35em] font-sans text-neutral-400 uppercase block mb-3">
            07 / SOCIAL JOURNAL
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl text-white font-extralight uppercase leading-tight tracking-wider mb-6">
            THE WORK <br />
            <span className="italic font-normal">CONTINUES.</span>
          </h2>
          <p className="text-xs font-sans text-neutral-400 uppercase tracking-widest leading-relaxed mb-8">
            Ongoing client hair architecture, balayage transformations, and bridal styling updated on our social feed.
          </p>

          <a
            href="https://www.instagram.com/the_shadows_salon/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 text-white font-sans text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all group"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@THE_SHADOWS_SALON</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Right Column: Single Clean B&W Photography Frame */}
        <div className="w-full lg:w-1/2 aspect-[4/5] max-w-md overflow-hidden border border-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=85"
            alt="Shadows Social Work B&W"
            className="w-full h-full object-cover bw-image filter grayscale contrast-[1.25]"
          />
        </div>

      </div>
    </section>
  );
};
