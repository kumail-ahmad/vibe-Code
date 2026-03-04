import React from 'react';
import { MapPin, Phone, ExternalLink, Navigation, Clock } from 'lucide-react';

export const LocationCard: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Sugar Magnolia 552 SE Main St Roseburg OR 97470")}`;

  return (
    <div className={`bg-[#FAF7F2] bg-paper-grain border-vintage-double ${compact ? 'p-6' : 'p-8 md:p-10'} relative shadow-md`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#5C473B]/15">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#8C5A3E] font-semibold block mb-1">
            Downtown Storefront
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-[#211D1A]">
            Sugar Magnolia
          </h3>
          <p className="font-serif italic text-lg text-[#5C473B] mt-1">
            Revamped Furniture · Vintage Finds · Home Decor
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8C5A3E] text-[#FAF7F2] px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#6C422C] transition-colors shadow-sm"
            aria-label="Get Directions on Google Maps"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
          <a
            href="tel:5417404337"
            className="inline-flex items-center gap-2 border border-[#8C5A3E] text-[#8C5A3E] px-5 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#8C5A3E] hover:text-[#FAF7F2] transition-colors"
            aria-label="Call Sugar Magnolia at (541) 740-4337"
          >
            <Phone className="w-4 h-4" />
            Call Store
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {/* Address Detail */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#677359]/10 text-[#4E5843] flex items-center justify-center shrink-0 border border-[#677359]/20">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-semibold text-lg text-[#211D1A] mb-1">
              Store Location
            </h4>
            <p className="text-sm text-[#5C473B] leading-relaxed">
              552 SE Main St<br />
              Roseburg, OR 97470
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#8C5A3E] font-semibold hover:underline mt-2"
            >
              Open in Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Contact & Inventory Note */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#C88A8A]/10 text-[#A66B6B] flex items-center justify-center shrink-0 border border-[#C88A8A]/20">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-semibold text-lg text-[#211D1A] mb-1">
              Visiting Information
            </h4>
            <p className="text-sm text-[#5C473B] leading-relaxed">
              Selection changes frequently. Visit the shop in downtown Roseburg to see what's new today!
            </p>
            <a
              href="tel:5417404337"
              className="inline-flex items-center gap-1 text-xs text-[#8C5A3E] font-semibold hover:underline mt-2"
            >
              (541) 740-4337
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

