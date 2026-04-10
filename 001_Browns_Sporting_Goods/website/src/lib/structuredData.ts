import { businessInfo } from "../data/business";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportingGoodsStore",
    "name": businessInfo.name,
    "image": "https://images.unsplash.com/photo-1511497584788-876761c1298b?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://brownssportinggoods-garberville.com/#store",
    "url": "https://brownssportinggoods-garberville.com/",
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.street,
      "addressLocality": businessInfo.address.city,
      "addressRegion": businessInfo.address.state,
      "postalCode": businessInfo.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.1004,
      "longitude": -123.7931
    },
    "hasMap": businessInfo.googleMapsDirectionsUrl,
    "description": "Local Garberville destination for fishing, camping, hunting, sports and outdoor gear. Third-generation family business serving Northern California.",
    "priceRange": "$$",
    "areaServed": [
      "Garberville",
      "Redwood Coast",
      "Humboldt County",
      "Northern California"
    ]
  };
}
