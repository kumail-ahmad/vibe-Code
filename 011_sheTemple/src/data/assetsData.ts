export interface CraftCategory {
  id: string;
  name: string;
  kanjiHint: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
  image: string;
}

export const SHE_TEMPLE_INFO = {
  name: "She Temple Boutique",
  locationShort: "Jayanagar · Bengaluru",
  address: "290/7, 8th 'D' Main, Opposite Telephone Exchange, 4th Block, Jayanagar, Bengaluru - 560011",
  phone: "98450 00433",
  email: "sajeevtandan@gmail.com",
  established: 1990,
  tagline: "Crafted to Bloom.",
  concept: "The Garden of Craft",
  timings: "Mon - Sat: 10:30 AM - 7:30 PM",
  specialties: [
    "Bespoke Bridal Lehengas",
    "Hand-Embroidered Blouses",
    "Heavily Embroidered Anarkalis",
    "Custom Silk Sarees",
    "Mirror-Work & Zardozi Dupattas",
    "Sherwanis & Bandhgalas",
    "Zari Juttis & Matching Clutches",
    "Personalized Fitting & Trial Sessions"
  ]
};

/**
 * ==============================================================================
 * CENTRAL IMAGE ASSET REGISTRY
 * ==============================================================================
 * You can easily replace any URL below with your own local image paths from src/assets/
 * Example:
 *   import myHeroImg from '../assets/my_lehenga.jpg';
 *   heroGarment: myHeroImg,
 */
export const ALL_IMAGES = {
  // Hero Arch Image
  heroGarment: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200",

  // Scene II Craft Categories
  blouse: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200",
  lehenga: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200",
  saree: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200",
  anarkali: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200",
  accessories: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200",

  // Scene III Textile Transition
  silkEmbroideredSaree: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200",

  // Scene V Blooming Garment Centerpiece
  bloomingGarmentCenter: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200",

  // Scene VIII Bridal Occasion
  bridalOccasionFull: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200",
};

export const CRAFT_CATEGORIES: CraftCategory[] = [
  {
    id: "blouse",
    name: "BLOUSE",
    kanjiHint: "縫製",
    subtitle: "Architectural Cut & Intricate Back Motif",
    description: "Hand-sculpted fits designed to complement sarees and lehengas. Features intricate zardozi, French knots, and personalized sleeve embroidery.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200",
    details: ["Bespoke Necklines", "Zardozi & Aari Stitch", "Padded Fit Assurance", "Custom Latkan Accents"]
  },
  {
    id: "lehenga",
    name: "LEHENGA",
    kanjiHint: "華麗",
    subtitle: "Full-Volume Panels & Floral Embroidery",
    description: "Couture skirts flowing with raw silk texture and dense floral zari work, handcrafted over hundreds of artisan hours.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200",
    details: ["Custom Kalis & Flare", "Can-Can Structured Silhouette", "Double Dupatta Styling", "Bridal Heritage Embroidery"]
  },
  {
    id: "saree",
    name: "SAREE",
    kanjiHint: "伝統",
    subtitle: "Woven Silk & Hand-Embroidered Borders",
    description: "Curated Kanjeevarams, organzas, and georgettes featuring custom embroidered borders, scalloped pallus, and mirror embellishments.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200",
    details: ["Scalloped Threadwork Borders", "Real Mirror Accents", "Organza & Pure Silk", "Contrast Pallu Detail"]
  },
  {
    id: "anarkali",
    name: "ANARKALI",
    kanjiHint: "優雅",
    subtitle: "Floor-Length Regal Flared Silhouettes",
    description: "Graceful flared silhouettes adorned with dense chest and hem zardozi, designed for intimate festivities and grandeur.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=1200",
    details: ["Floor-Sweeping Flare", "Gota Patti & Sequins", "Lightweight Georgette & Velvet", "Handcrafted Dupattas"]
  },
  {
    id: "accessories",
    name: "ACCESSORIES",
    kanjiHint: "細工",
    subtitle: "Zari Juttis & Handcrafted Clutches",
    description: "Completing your ensemble with tailor-matched footwear and clutches featuring identical threadwork and motif harmony.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200",
    details: ["Custom Zari Juttis", "Embroidered Potli Bags", "Matching Fabric Clutches", "Bridal Latkan Keepsakes"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "YOU BRING THE IDEA",
    subtitle: "Initial Vision & Fabric Consultation",
    detail: "Share your moodboards, color preferences, and event timeline in our Jayanagar boutique studio.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    number: "02",
    title: "WE SHAPE THE DESIGN",
    subtitle: "Pattern Sketch & Motif Placement",
    detail: "Our design team translates your concept into proportional body-mapped sketches and motif placements.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000"
  },
  {
    number: "03",
    title: "THE ARTISAN BUILDS THE DETAIL",
    subtitle: "Hand Embroidery on Frame (Adda)",
    detail: "Master craftsmen spend tens to hundreds of hours painstakingly hand-stitching silk threads, zari, and mirrors.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    number: "04",
    title: "THE FIT IS REFINED",
    subtitle: "Master Tailoring & In-Studio Trial",
    detail: "In-house fitting sessions refine every seam, sleeve armhole, and neckline for effortless comfort.",
    image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    number: "05",
    title: "YOU WEAR IT",
    subtitle: "Crafted to Bloom for Your Special Moment",
    detail: "Your completed bespoke piece is steam-pressed and packaged, ready to create unforgettable memories.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1000"
  }
];

export const MACRO_EMBROIDERY_STEPS = [
  {
    stage: "FABRIC",
    title: "Pure Raw Silk & Chiffon Base",
    desc: "Every creation begins with hand-loomed natural silks and soft georgettes chosen for texture and drape.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    stage: "THREAD",
    title: "Gold Zari & Dyed Resham Threads",
    desc: "Restrained metallic gold threads meet muted rose silk cords, creating depth through light reflection.",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=1200"
  },
  {
    stage: "EMBROIDERY",
    title: "Traditional Zardozi & Aari Craftsmanship",
    desc: "Layered needlework creates 3D botanical motifs—vines, leaves, and lotus blossoms blooming on fabric.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200"
  },
  {
    stage: "DETAIL",
    title: "Precision Finishing & Hand Seams",
    desc: "Scalloped borders, real mirror highlights, and hand-bound edges complete the heirloom garment.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200"
  }
];

export const STUDIO_COLLAGE_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000",
    caption: "Bridal Lehenga Fitting",
    aspect: "aspect-[3/4]"
  },
  {
    url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
    caption: "Hand-Embroidered Velvet Neckline",
    aspect: "aspect-square"
  },
  {
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000",
    caption: "Artisan at the Loom (Adda)",
    aspect: "aspect-[4/5]"
  },
  {
    url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000",
    caption: "Silk Saree Scallop Detail",
    aspect: "aspect-[3/4]"
  },
  {
    url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000",
    caption: "Custom Zari Jutti & Clutch",
    aspect: "aspect-square"
  }
];
