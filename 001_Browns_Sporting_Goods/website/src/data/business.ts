export interface BusinessHours {
  days: string;
  time: string;
  disclaimer: string;
  schedule: Array<{ day: string; hours: string }>;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  heroSubtitle: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  email: string;
  locationBadge: string;
  hours: BusinessHours;
  googleMapsDirectionsUrl: string;
  storefrontImage: string;
  storefrontImageAlt: string;
}

export const businessInfo: BusinessInfo = {
  name: "Brown's Sporting Goods",
  tagline: "GEAR FOR THE WILD. ADVICE FROM PEOPLE WHO KNOW IT.",
  heroSubtitle: "Serving Garberville and the surrounding North Coast with outdoor gear, local knowledge, and personal service.",
  address: {
    street: "797 Redwood Dr",
    city: "Garberville",
    state: "CA",
    zip: "95542",
    full: "797 Redwood Dr, Garberville, CA 95542",
  },
  phone: "(707) 923-2533",
  phoneRaw: "7079232533",
  email: "browns3140@att.net",
  locationBadge: "GARBERVILLE, CALIFORNIA",
  hours: {
    days: "MON–FRI",
    time: "10:00 AM – 5:00 PM",
    disclaimer: "Call ahead to confirm current hours.",
    schedule: [
      { day: "Monday – Friday", hours: "10:00 AM – 5:00 PM" },
      { day: "Saturday – Sunday", hours: "Closed" },
    ],
  },
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Brown%27s+Sporting+Goods+797+Redwood+Dr+Garberville+CA+95542",
  storefrontImage: "/Browns+Sporting+Goods+Garberville.webp",
  storefrontImageAlt: "Photograph of Brown's Sporting Goods storefront and sign in Garberville, California",
};

export interface ProductCategoryCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  disclaimer: string;
}

export const productCategories: ProductCategoryCategory[] = [
  {
    id: "fishing",
    title: "FISHING",
    description: "Supplies for local rivers, streams, and coastal waters.",
    longDescription: "Equipment and supplies for fishing Northern California rivers, lakes, and coastal waters. Selection and availability may vary. Call or visit Brown's for current inventory.",
    image: "/fishing.jpeg",
    alt: "Fishing gear and river tackle supplies at Brown's Sporting Goods",
    disclaimer: "Selection and availability may vary. Call or visit Brown's for current inventory."
  },
  {
    id: "camping",
    title: "CAMPING",
    description: "Outdoor gear for camping under the redwoods.",
    longDescription: "Camping supplies and outdoor essentials for nights spent in Northern California's redwood groves and coastal state parks. Selection and availability may vary. Call or visit Brown's for current inventory.",
    image: "/camping.jpeg",
    alt: "Camping equipment and outdoor supplies",
    disclaimer: "Selection and availability may vary. Call or visit Brown's for current inventory."
  },
  {
    id: "hunting",
    title: "HUNTING",
    description: "Field supplies for North Coast outdoorsmen.",
    longDescription: "Hunting supplies, field gear, and practical accessories tailored for navigating North Coast terrain. Selection and availability may vary. Call or visit Brown's for current inventory.",
    image: "/hunting.jpeg",
    alt: "Hunting gear and field supplies",
    disclaimer: "Selection and availability may vary. Call or visit Brown's for current inventory."
  },
  {
    id: "outdoor-goods",
    title: "OUTDOOR GOODS",
    description: "Practical equipment for regional outdoor recreation.",
    longDescription: "Outdoor goods, practical tools, and gear for trail exploration, hiking, and everyday outdoor utility in Southern Humboldt County. Selection and availability may vary. Call or visit Brown's for current inventory.",
    image: "/camping.jpeg",
    alt: "Outdoor goods and regional outdoor equipment",
    disclaimer: "Selection and availability may vary. Call or visit Brown's for current inventory."
  },
  {
    id: "work-wear",
    title: "WORK WEAR / CLOTHING",
    description: "Durable clothing for work and the outdoors.",
    longDescription: "Durable clothing for work and the outdoors, built for North Coast weather conditions. Selection and availability may vary. Call or visit Brown's for current inventory.",
    image: "/Browns+Sporting+Goods+Garberville.webp",
    alt: "Durable work wear and clothing section at Brown's Sporting Goods in Garberville",
    disclaimer: "Selection and availability may vary. Call or visit Brown's for current inventory."
  }
];

export interface CustomerReview {
  id: string;
  rating: number;
  text: string;
  author: string;
}

export const verifiedReviews: CustomerReview[] = [
  {
    id: "rev-1",
    rating: 5,
    text: "I came in as a novice fisherman, and left with tackle, bait, and a plan. Thanks!",
    author: "Customer review"
  },
  {
    id: "rev-2",
    rating: 5,
    text: "Really enjoyed visiting Brown’s. Owner has kept it stocked well and I was able to find everything I needed for our camping trip quickly, with great prices! Worth stopping in!",
    author: "Customer review"
  },
  {
    id: "rev-3",
    rating: 5,
    text: "This man has owned this business for years! Always has the information and supplies you need!! He is very knowledgeable and helpful! Will always go to him for my fishing, hunting, safety needs!!",
    author: "Customer review"
  }
];

export const reviewSummary = {
  rating: "4.8",
  stars: 5,
  label: "Customer rated",
  externalReviewUrl: "https://www.loc8nearme.com/california/garberville/browns-sporting-goods/3319185/"
};

export interface ReviewTheme {
  title: string;
  description: string;
  iconName: string;
}

export const reviewThemes: ReviewTheme[] = [
  {
    title: "Knowledgeable & Helpful",
    description: "Customers consistently highlight helpful guidance rooted in real local outdoor experience.",
    iconName: "Compass"
  },
  {
    title: "Relevant Selection",
    description: "Stocked with core essentials for fishing, hunting, camping, work wear, and regional outdoor needs.",
    iconName: "ShoppingBag"
  },
  {
    title: "Fair Local Pricing",
    description: "Practical pricing that supports local Humboldt residents and travelers passing through Garberville.",
    iconName: "Tag"
  },
  {
    title: "Local Outdoor Heritage",
    description: "Deep roots in Southern Humboldt County mean genuine insight into regional spots and gear.",
    iconName: "Trees"
  },
  {
    title: "Personal Service",
    description: "Welcoming third-generation family business service that keeps community members coming back.",
    iconName: "Heart"
  }
];
