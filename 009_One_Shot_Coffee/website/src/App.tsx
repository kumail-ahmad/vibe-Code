import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  ArrowRight, 
  Sun, 
  BookOpen, 
  Laptop,
  Armchair,
  ShoppingBag,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

// Real Business Images from public/
const REAL_IMAGES = {
  coffeeCup: "/coffee.webp",
  storefrontOutside: "/outside.webp"
};

// Verified Business Data from Research Brief
const BUSINESS = {
  name: "ONE SHOT COFFEE",
  subtitle: "Independent Neighbourhood Café",
  address: "82 Parkway, Camden Town, London NW1 7AN",
  owners: "Liz & Fabrice",
  phone: "020 7267 5200",
  phoneRaw: "tel:02072675200",
  rating: "4.6",
  reviewCount: "472+",
  hoursWeekday: "06:30 – 18:00",
  hoursWeekend: "07:30 – 18:00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=One+Shot+Coffee+82+Parkway+Camden+Town+London+NW1+7AN",
  deliverooUrl: "https://www.deliveroo.co.uk/menu/london/camden/one-shot-coffee",
  instagramUrl: "https://www.instagram.com/oneshotcoffeelondon/",
  facebookUrl: "https://www.facebook.com/one-shot-coffee-london-805442452975211/"
};

// Menu Categories
const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'coffee', label: 'Coffee & Drinks' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Toasties & Lunch' },
  { id: 'bakery', label: 'Bakery & Sweets' }
];

// Verified Menu Data (Zero invented prices)
const MENU_ITEMS = [
  // Drinks
  { category: 'coffee', name: 'Single Origin Espresso', desc: 'Rich double shot extraction with smooth crema.' },
  { category: 'coffee', name: 'Flat White', desc: 'Velvety microfoam poured over double espresso.', tag: 'Local Favourite' },
  { category: 'coffee', name: 'Cappuccino', desc: 'Espresso topped with thick froth and dark cocoa dusting.' },
  { category: 'coffee', name: 'Latte', desc: 'Steamed organic milk with espresso.' },
  { category: 'coffee', name: 'Americano', desc: 'Double espresso poured over hot water.' },
  { category: 'coffee', name: 'Mocha', desc: 'Espresso with rich melted Belgian chocolate.' },
  { category: 'coffee', name: 'Filter Coffee', desc: 'Batch-brewed smooth specialty filter.' },
  { category: 'coffee', name: 'Iced Coffees', desc: 'Double espresso poured over ice with milk of choice.' },
  { category: 'coffee', name: 'Matcha Latte', desc: 'Whisked Japanese green tea matcha with steamed milk.' },
  { category: 'coffee', name: 'Chai Latte', desc: 'Spiced chai infusion with velvety milk.' },
  { category: 'coffee', name: 'Hot Chocolate', desc: 'Melted dark chocolate in hot milk.' },
  { category: 'coffee', name: 'Loose Leaf Organic Teas', desc: 'Curated herbal, black, and green leaf teas.' },
  { category: 'coffee', name: 'Freshly Squeezed Juices', desc: 'Made to order fresh orange & fruit juices.' },
  { category: 'coffee', name: 'Custom Fruit Smoothies', desc: 'Fresh fruit smoothies blended daily.' },

  // Breakfast
  { category: 'breakfast', name: 'Sourdough Avocado Toast', desc: 'Smashed avocado on toasted sourdough with poached eggs.', tag: 'Signature' },
  { category: 'breakfast', name: 'Granola & Greek Yogurt Bowl', desc: 'House granola, honey, and fresh berries.' },
  { category: 'breakfast', name: 'Chia Seed Pudding', desc: 'Soaked chia seeds with fruit compote.', tag: 'Vegan' },

  // Lunch & Toasties
  { category: 'lunch', name: 'Toasted Sourdough Paninis', desc: 'Pressed hot sourdough paninis with fresh fillings.', tag: 'Fresh Daily' },
  { category: 'lunch', name: 'Classic Grilled Cheese Toastie', desc: 'Melted cheddar & Swiss cheese on sourdough.' },
  { category: 'lunch', name: 'Smoked Ham & Cheese Toastie', desc: 'Honey ham with melted Gruyère.' },
  { category: 'lunch', name: 'Truffled Veggie Toastie', desc: 'Sautéed mushrooms, spinach & melted cheese.', tag: 'Vegetarian' },
  { category: 'lunch', name: 'Daily House-Made Soup', desc: 'Served hot with thick buttered sourdough slices.' },
  { category: 'lunch', name: 'Fresh Daily Salads', desc: 'Rotated seasonal salad bowls.' },

  // Bakery
  { category: 'bakery', name: 'Butter Croissant', desc: 'Flaky French butter pastry baked fresh daily.' },
  { category: 'bakery', name: 'Almond Croissant', desc: 'Twice-baked with sweet almond frangipane.', tag: 'Must Try' },
  { category: 'bakery', name: 'Homemade Brownies', desc: 'Rich dark chocolate fudge brownies.' },
  { category: 'bakery', name: 'Banana Bread', desc: 'Toasted banana loaf slice served warm.' },
  { category: 'bakery', name: 'Seasonal Cakes & Slices', desc: 'Daily selection including Vegan & Gluten-Free options.', tag: 'Vegan / GF' }
];

// Verified Customer Feedback Themes
const PROOF_THEMES = [
  {
    title: "Smooth Microfoam & Rich Espresso",
    detail: "Praised by coffee lovers for balanced extraction and smooth milk texture.",
    tag: "COFFEE CRAFT"
  },
  {
    title: "Sunlit Rear Lounge Sanctuary",
    detail: "A quiet back room with a leather Chesterfield sofa & daylight skylight away from street noise.",
    tag: "THE SPACE"
  },
  {
    title: "Liz & Fabrice's Hospitality",
    detail: "Renowned for warm, attentive neighborhood service where staff remember your daily order.",
    tag: "THE SERVICE"
  },
  {
    title: "Fresh Sourdough & Almond Croissants",
    detail: "Acclaimed for delicious sourdough avocado toast, paninis, and flaky almond croissants.",
    tag: "THE KITCHEN"
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Custom Mouse Cursor State (Ultra Fast & Snappy)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Faster Parallax scroll hooks
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.98]);
  const loungeScale = useTransform(scrollYProgress, [0.08, 0.25], [0.96, 1]);
  const loungeOpacity = useTransform(scrollYProgress, [0.08, 0.2], [0.5, 1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCursorEnter = (text: string) => {
    setCursorText(text);
    setIsHovered(true);
  };

  const handleCursorLeave = () => {
    setCursorText('');
    setIsHovered(false);
  };

  const filteredMenu = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#12100E] text-[#E8E2D8] font-sans-body relative bg-noise selection:bg-[#C86D51] selection:text-white">
      
      {/* FAST SNAPPY CUSTOM DESKTOP CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-[#D4A359] bg-[#C86D51]/30 backdrop-blur-xs pointer-events-none z-100 hidden md:flex items-center justify-center text-[9px] font-bold tracking-widest text-[#FFFDF9] uppercase shadow-lg"
        animate={{
          x: mousePos.x - 14,
          y: mousePos.y - 14,
          scale: isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(200, 109, 81, 0.9)' : 'rgba(200, 109, 81, 0.3)',
          borderColor: isHovered ? '#FFFDF9' : '#D4A359'
        }}
        transition={{ type: "spring", damping: 18, stiffness: 700, mass: 0.05 }}
      >
        {cursorText}
      </motion.div>

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0D0C0A] text-[#B5AD9F] text-xs py-2 px-4 border-b border-[#24201B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C86D51] animate-pulse" />
            <span className="font-medium text-[#E8E2D8]">82 Parkway, Camden Town</span>
            <span className="hidden sm:inline text-[#4A433A]">•</span>
            <span className="hidden sm:inline">Mon–Fri: {BUSINESS.hoursWeekday}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={BUSINESS.phoneRaw} 
              className="hover:text-[#C86D51] transition-colors flex items-center gap-1 font-semibold text-[#E8E2D8]"
              onMouseEnter={() => handleCursorEnter('CALL')}
              onMouseLeave={handleCursorLeave}
            >
              <Phone className="w-3 h-3 text-[#C86D51]" /> {BUSINESS.phone}
            </a>
            <a 
              href={BUSINESS.deliverooUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C86D51] transition-colors flex items-center gap-1 font-semibold text-[#E8E2D8]"
              onMouseEnter={() => handleCursorEnter('ORDER')}
              onMouseLeave={handleCursorLeave}
            >
              <ShoppingBag className="w-3 h-3 text-[#C86D51]" /> Order Deliveroo ↗
            </a>
          </div>
        </div>
      </div>

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#12100E]/90 backdrop-blur-md border-b border-[#24201B] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex items-center gap-3.5 group"
            onMouseEnter={() => handleCursorEnter('HOME')}
            onMouseLeave={handleCursorLeave}
          >
            <div className="w-10 h-10 rounded-xl bg-[#C86D51] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-[#FFFDF9]" />
            </div>
            <div>
              <span className="font-editorial text-2xl font-bold tracking-tight block text-[#FFFDF9] leading-none group-hover:text-[#C86D51] transition-colors">
                ONE SHOT
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#968E83] font-semibold block mt-1">
                COFFEE • CAMDEN TOWN
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-9 text-xs font-semibold uppercase tracking-wider text-[#A8A095]">
            <a href="#hero" className="hover:text-[#FFFDF9] transition-colors relative py-1 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C86D51] group-hover:w-full transition-all duration-200" />
            </a>
            <a href="#lounge" className="hover:text-[#FFFDF9] transition-colors relative py-1 group">
              The Lounge
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C86D51] group-hover:w-full transition-all duration-200" />
            </a>
            <a href="#menu" className="hover:text-[#FFFDF9] transition-colors relative py-1 group">
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C86D51] group-hover:w-full transition-all duration-200" />
            </a>
            <a href="#story" className="hover:text-[#FFFDF9] transition-colors relative py-1 group">
              Our Story
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C86D51] group-hover:w-full transition-all duration-200" />
            </a>
            <a href="#visit" className="hover:text-[#FFFDF9] transition-colors relative py-1 group">
              Visit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C86D51] group-hover:w-full transition-all duration-200" />
            </a>
          </nav>

          {/* Right Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-[#968E83] font-medium flex items-center gap-1.5 mr-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A359]" /> Camden, London
            </span>
            <a 
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFDF9] text-[#12100E] font-semibold text-xs hover:bg-[#C86D51] hover:text-white transition-all shadow-md"
              onMouseEnter={() => handleCursorEnter('MAPS')}
              onMouseLeave={handleCursorLeave}
            >
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#1A1815] border border-[#2B2722] text-[#FFFDF9]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1A1815] border-b border-[#2B2722] px-6 py-6 flex flex-col gap-4 font-semibold text-sm"
            >
              <a 
                href="#hero" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#282420] text-[#FFFDF9]"
              >
                Home
              </a>
              <a 
                href="#lounge" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#282420] text-[#FFFDF9]"
              >
                The Rear Lounge Sanctuary
              </a>
              <a 
                href="#menu" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#282420] text-[#FFFDF9]"
              >
                Drinks & Food Menu
              </a>
              <a 
                href="#story" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#282420] text-[#FFFDF9]"
              >
                Our Story (Liz & Fabrice)
              </a>
              <a 
                href="#visit" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#FFFDF9]"
              >
                Location & Hours
              </a>

              <div className="flex flex-col gap-2.5 pt-4">
                <a 
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#FFFDF9] text-[#12100E] font-bold text-xs"
                >
                  <MapPin className="w-4 h-4 text-[#C86D51]" />
                  <span>Get Directions (82 Parkway)</span>
                </a>
                <a 
                  href={BUSINESS.deliverooUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#C86D51] text-white font-bold text-xs"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order on Deliveroo</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION WITH REAL STORE PHOTOGRAPHY & PARALLAX */}
      <section id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-[#24201B]">
        <motion.div style={{ y: heroY, scale: heroScale }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Vertical Indicator */}
            <div className="hidden xl:flex flex-col items-center justify-center absolute left-[-40px] top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest text-[#6B6358] font-bold gap-6 pointer-events-none">
              <span className="writing-mode-vertical">COFFEE</span>
              <span className="w-1 h-1 rounded-full bg-[#C86D51]" />
              <span className="writing-mode-vertical">FOOD</span>
              <span className="w-1 h-1 rounded-full bg-[#C86D51]" />
              <span className="writing-mode-vertical">PEOPLE</span>
              <span className="w-1 h-1 rounded-full bg-[#C86D51]" />
              <span className="writing-mode-vertical">CAMDEN</span>
            </div>

            {/* Main Editorial Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#D4A359] font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C86D51]" />
                <span>82 PARKWAY, CAMDEN TOWN • SPECIALTY COFFEE</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal text-[#FFFDF9] leading-[0.98] tracking-tight mb-6">
                Camden <br />
                Energy. <br />
                Better Coffee. <br />
                <span className="font-serif-italic italic font-normal text-[#D4A359] hover:text-[#C86D51] transition-colors">Stay a while.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#B5AD9F] max-w-xl font-light leading-relaxed mb-8">
                An independent neighbourhood café at 82 Parkway, where specialty coffee, toasted paninis, fresh bakery and a peaceful rear lounge come together.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <a 
                  href="#menu"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FFFDF9] text-[#12100E] font-bold text-xs uppercase tracking-wider hover:bg-[#C86D51] hover:text-white transition-all shadow-lg"
                  onMouseEnter={() => handleCursorEnter('MENU')}
                  onMouseLeave={handleCursorLeave}
                >
                  <span>VIEW MENU</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a 
                  href={BUSINESS.deliverooUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-transparent border border-[#423C34] text-[#FFFDF9] font-bold text-xs uppercase tracking-wider hover:border-[#C86D51] hover:bg-[#C86D51]/10 transition-all"
                  onMouseEnter={() => handleCursorEnter('DELIVEROO')}
                  onMouseLeave={handleCursorLeave}
                >
                  <ShoppingBag className="w-4 h-4 text-[#C86D51]" />
                  <span>ORDER ON DELIVEROO</span>
                </a>
              </div>

              {/* Contact Metadata Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-[#24201B] text-xs text-[#8E867B] w-full">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C86D51]" />
                  <a href={BUSINESS.phoneRaw} className="hover:text-[#FFFDF9] font-medium transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C86D51]" />
                  <span>82 Parkway, Camden Town, London NW1 7AN</span>
                </div>
              </div>

            </motion.div>

            {/* Right Hero Visual with REAL ONE SHOT COFFEE PHOTOGRAPHY */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-[#1A1815] border border-[#2B2722] shadow-2xl p-4">
                
                {/* Primary Hero Real Image: Actual Flat White / Microfoam Cup at One Shot Coffee */}
                <div className="relative rounded-2xl overflow-hidden h-[420px] sm:h-[480px]">
                  <img 
                    src={REAL_IMAGES.coffeeCup} 
                    alt="Authentic One Shot Coffee Flat White Cup" 
                    className="w-full h-full object-cover filter brightness-[0.94] contrast-[1.05] hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Real Business Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#12100E]/80 backdrop-blur-md border border-[#3A332A] text-[10px] uppercase font-bold tracking-widest text-[#D4A359] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C86D51]" /> AUTHENTIC ONE SHOT BEVERAGE
                  </div>

                  {/* Script Annotation Overlay */}
                  <div className="absolute bottom-6 right-6 font-script text-3xl sm:text-4xl text-[#FFFDF9] transform -rotate-6 drop-shadow-lg pointer-events-none">
                    More than just a coffee...
                  </div>
                </div>

                {/* Real Storefront Floating Circular Thumbnail */}
                <div className="absolute -left-6 bottom-12 z-20 hidden sm:block">
                  <motion.div 
                    whileHover={{ scale: 1.12, x: 6 }}
                    className="w-24 h-24 rounded-full border-2 border-[#D4A359] overflow-hidden shadow-2xl bg-[#12100E]"
                    onMouseEnter={() => handleCursorEnter('STOREFRONT')}
                    onMouseLeave={handleCursorLeave}
                  >
                    <img 
                      src={REAL_IMAGES.storefrontOutside} 
                      alt="Actual 82 Parkway Storefront" 
                      className="w-full h-full object-cover filter brightness-95"
                    />
                  </motion.div>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#FFFDF9] bg-[#12100E]/90 px-2 py-0.5 rounded-full border border-[#332E27] block text-center mt-1 shadow-md">
                    82 Parkway
                  </span>
                </div>

              </div>
            </motion.div>

          </div>

        </motion.div>
      </section>

      {/* "TWO WORLDS" CINEMATIC TRANSITION BAR WITH REAL STOREFRONT PHOTO */}
      <section className="py-10 bg-[#0E0D0B] border-b border-[#24201B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#161412] p-6 sm:p-8 rounded-3xl border border-[#29241F]">
            
            {/* Left Parkway Node using REAL STOREFRONT PHOTO */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#C86D51] overflow-hidden shrink-0 shadow-lg">
                <img 
                  src={REAL_IMAGES.storefrontOutside} 
                  alt="Actual 82 Parkway Camden Storefront" 
                  className="w-full h-full object-cover filter brightness-95"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C86D51] font-bold block">
                  PARKWAY OUTSIDE
                </span>
                <h4 className="font-editorial text-lg text-[#FFFDF9]">82 Parkway Storefront.</h4>
              </div>
            </div>

            {/* Center Script Accent */}
            <div className="text-center">
              <span className="font-script text-4xl sm:text-5xl text-[#D4A359]">Two Worlds</span>
            </div>

            {/* Right Lounge Node using REAL COFFEE PHOTO */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <span className="text-[10px] uppercase tracking-widest text-[#D4A359] font-bold block">
                  CALM INSIDE
                </span>
                <h4 className="font-editorial text-lg text-[#FFFDF9]">A quieter place to stay.</h4>
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-[#D4A359] overflow-hidden shrink-0 shadow-lg">
                <img 
                  src={REAL_IMAGES.coffeeCup} 
                  alt="Actual One Shot Coffee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <a 
                href="#lounge" 
                className="w-10 h-10 rounded-full bg-[#FFFDF9] text-[#12100E] flex items-center justify-center hover:bg-[#C86D51] hover:text-white transition-all ml-2 shadow-md"
                onMouseEnter={() => handleCursorEnter('EXPLORE')}
                onMouseLeave={handleCursorLeave}
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* REAR LOUNGE IMMERSIVE SECTION ("SAME STREET. A SLOWER PACE.") */}
      <section id="lounge" className="py-28 bg-[#12100E] text-[#FFFDF9] relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C86D51]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <motion.div style={{ opacity: loungeOpacity, scale: loungeScale }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Copy & Pillar Grid */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#C86D51] font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>A HIDDEN RETREAT IN CAMDEN</span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] text-[#FFFDF9] mb-6">
                Same Street. <br />
                <span className="font-serif-italic italic text-[#D4A359]">A Slower Pace.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#C5BCB0] font-light leading-relaxed mb-12">
                Step past the bustle of Parkway and discover our peaceful rear lounge — a light-filled space with a classic Chesterfield sofa, warm wooden tables and a calm atmosphere.
              </p>

              {/* 4 Feature Pillars Grid */}
              <div className="grid grid-cols-2 gap-8 border-t border-[#29241F] pt-8">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1D1A17] border border-[#332E27] flex items-center justify-center text-[#D4A359]">
                    <Sun className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#FFFDF9] mt-2">Natural Daylight</h4>
                  <p className="text-xs text-[#8E867B] font-light">Sunlit glass roof skylight illuminating the back room.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1D1A17] border border-[#332E27] flex items-center justify-center text-[#D4A359]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#FFFDF9] mt-2">Great for Reading</h4>
                  <p className="text-xs text-[#8E867B] font-light">Comfy Chesterfield seating to sit back with a book.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1D1A17] border border-[#332E27] flex items-center justify-center text-[#D4A359]">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#FFFDF9] mt-2">Perfect for Light Work</h4>
                  <p className="text-xs text-[#8E867B] font-light">Warm timber tables and a peaceful, focused environment.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1D1A17] border border-[#332E27] flex items-center justify-center text-[#D4A359]">
                    <Armchair className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#FFFDF9] mt-2">A Place to Unwind</h4>
                  <p className="text-xs text-[#8E867B] font-light">No high-pressure rush. Take your time to relax.</p>
                </div>
              </div>

            </div>

            {/* Right Immersive Visual Composition */}
            <div className="lg:col-span-6 relative">
              
              {/* Main Rear Lounge Full-Bleed Photograph */}
              <div className="relative rounded-3xl overflow-hidden border border-[#363029] shadow-2xl h-[480px] sm:h-[540px]">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80" 
                  alt="One Shot Coffee Tranquil Rear Lounge" 
                  className="w-full h-full object-cover filter brightness-[0.92]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/80 via-transparent to-transparent" />
              </div>

              {/* Tilted Layered Polaroid Frame featuring REAL COFFEE PHOTO */}
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.03 }}
                className="absolute -bottom-8 -right-6 sm:right-4 w-56 sm:w-64 bg-[#FFFDF9] p-3 pt-3 pb-6 rounded-2xl shadow-2xl transform rotate-6 border border-[#E0D7C8] z-20 text-[#12100E]"
              >
                <img 
                  src={REAL_IMAGES.coffeeCup} 
                  alt="Authentic One Shot Coffee Microfoam Art" 
                  className="w-full h-40 object-cover rounded-lg mb-3 filter contrast-[1.05]"
                />
                <span className="font-script text-2xl text-[#12100E] block text-center">
                  Good Coffee Brighter Days
                </span>
              </motion.div>

              {/* Vintage Rotating Stamp Seal Badge */}
              <div className="absolute -top-8 -left-6 z-20 w-28 h-28 pointer-events-none">
                <svg className="w-full h-full animate-spin-slow text-[#D4A359]" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] uppercase tracking-widest font-bold fill-[#D4A359]">
                    <textPath href="#circlePath">
                      • ONE SHOT COFFEE • CAMDEN TOWN
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[#D4A359]">
                  <Coffee className="w-6 h-6" />
                </div>
              </div>

            </div>

          </div>

        </motion.div>
      </section>

      {/* COFFEE SHOWCASE SECTION */}
      <section className="py-24 border-b border-[#24201B] bg-[#161412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#D4A359] font-bold block mb-2">
                EXPERTLY BREWED
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl text-[#FFFDF9]">
                Specialty Espresso & Drinks
              </h2>
            </div>
            <p className="text-[#A8A095] text-sm font-light max-w-md">
              From precision double espresso extractions to silky flat whites, matcha lattes, and organic leaf teas.
            </p>
          </div>

          {/* Asymmetric Coffee Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Single Origin Espresso", desc: "Expertly pulled double shot with thick crema.", tag: "ESSENTIAL" },
              { name: "Flat White", desc: "Silky microfoam over double ristretto.", tag: "FAVOURITE" },
              { name: "Cappuccino", desc: "Espresso with velvety froth & cocoa dust." },
              { name: "Latte", desc: "Steamed organic milk with espresso." },
              { name: "Americano", desc: "Double espresso over clean hot water." },
              { name: "Mocha", desc: "Espresso infused with dark Belgian cocoa." },
              { name: "Matcha Latte", desc: "Whisked Japanese matcha with milk." },
              { name: "Organic Loose Leaf Teas", desc: "Curated black, green & herbal teas." }
            ].map((drink, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="bg-[#1D1A17] p-6 rounded-2xl border border-[#2B2722] hover:border-[#C86D51]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-editorial text-xl font-bold text-[#FFFDF9]">{drink.name}</h3>
                    {drink.tag && (
                      <span className="px-2 py-0.5 rounded-full bg-[#C86D51]/15 text-[#C86D51] font-bold text-[9px] uppercase tracking-wider">
                        {drink.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#968E83] leading-relaxed font-light">{drink.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FULL INTERACTIVE MENU SECTION */}
      <section id="menu" className="py-28 border-b border-[#24201B] bg-[#12100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#C86D51] font-bold block mb-2">
                OUR FULL OFFERINGS
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl text-[#FFFDF9]">
                Café Menu
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 bg-[#1A1815] p-1.5 rounded-full border border-[#282420]">
              {MENU_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-xs transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-[#FFFDF9] text-[#12100E] shadow-sm' 
                      : 'text-[#A8A095] hover:text-[#FFFDF9] hover:bg-[#26221D]'
                  }`}
                  onMouseEnter={() => handleCursorEnter(cat.label.toUpperCase())}
                  onMouseLeave={handleCursorLeave}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="bg-[#1A1815] p-6 rounded-2xl border border-[#2B2722] hover:border-[#D4A359]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-editorial text-xl font-bold text-[#FFFDF9]">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="px-2.5 py-1 rounded-full bg-[#D4A359]/15 text-[#D4A359] font-bold text-[10px] uppercase tracking-wider whitespace-nowrap">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#9E968B] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-[#80776B]">
            * Plant-based oat milk, almond milk, and daily seasonal bake specials available at the counter.
          </div>

        </div>
      </section>

      {/* WHY PEOPLE RETURN (EDITORIAL PROOF THEMES) */}
      <section className="py-24 border-b border-[#24201B] bg-[#161412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-widest text-[#D4A359] font-bold block mb-2">
              VERIFIED REPUTATION
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#FFFDF9]">
              Why People Return
            </h2>
            <p className="text-[#A8A095] text-sm font-light mt-3">
              Rated 4.6 stars across Google, TripAdvisor, and local Camden directories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROOF_THEMES.map((theme, i) => (
              <div key={i} className="bg-[#1D1A17] p-8 rounded-2xl border border-[#2B2722] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C86D51] font-bold block mb-3">
                    {theme.tag}
                  </span>
                  <h3 className="font-editorial text-xl text-[#FFFDF9] mb-3">{theme.title}</h3>
                  <p className="text-xs text-[#9E968B] leading-relaxed font-light">
                    {theme.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR STORY: LIZ & FABRICE WITH REAL STOREFRONT PHOTO */}
      <section id="story" className="py-28 border-b border-[#24201B] bg-[#12100E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-[11px] uppercase tracking-widest text-[#C86D51] font-bold block mb-2">
                INDEPENDENT OWNERSHIP
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl text-[#FFFDF9] mb-6">
                Created by Liz & Fabrice
              </h2>
              <p className="text-[#B5AD9F] leading-relaxed font-light mb-6 text-base sm:text-lg">
                One Shot Coffee was built as an independent, welcoming haven on Parkway. Rather than following a high-pressure corporate template, Liz & Fabrice created a space where great espresso and genuine London hospitality go hand-in-hand.
              </p>
              <p className="text-[#B5AD9F] leading-relaxed font-light mb-8 text-base sm:text-lg">
                Positioned between the hustle of Camden Town tube station and the greenery of Regent's Park, One Shot Coffee serves local residents, regular commuters, and park-goers every single day.
              </p>

              <div className="p-6 rounded-2xl bg-[#1A1815] border border-[#282420] inline-block">
                <span className="text-xs font-bold text-[#FFFDF9] tracking-wider block mb-1">
                  Single Location • Independent Haven
                </span>
                <p className="text-xs text-[#8E867B]">
                  82 Parkway, Camden Town, London NW1 7AN
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-[#1A1815] p-3 border border-[#2B2722] shadow-2xl">
                <img 
                  src={REAL_IMAGES.storefrontOutside} 
                  alt="Authentic One Shot Coffee Storefront at 82 Parkway" 
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl filter brightness-95"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOCATION & VISIT SECTION WITH REAL STOREFRONT IMAGE */}
      <section id="visit" className="py-28 bg-[#0E0D0B] text-[#FFFDF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-[11px] uppercase tracking-widest text-[#D4A359] font-bold block mb-2">
                VISIT US AT 82 PARKWAY
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl text-[#FFFDF9] mb-6">
                82 Parkway, Camden Town
              </h2>
              <p className="text-[#B5AD9F] font-light text-base leading-relaxed mb-8">
                Look for our wooden A-board and bright blue door on Parkway! Walk-in counter service for takeaway coffee & pastries, or sit down in our quiet rear lounge.
              </p>

              <div className="space-y-6 mb-8">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1815] border border-[#29241F] flex items-center justify-center text-[#C86D51] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFFDF9] text-sm">Exact Address</h4>
                    <p className="text-xs text-[#9E968B] mt-0.5">{BUSINESS.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1815] border border-[#29241F] flex items-center justify-center text-[#C86D51] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFFDF9] text-sm">Opening Hours</h4>
                    <p className="text-xs text-[#9E968B] mt-0.5">Monday – Friday: {BUSINESS.hoursWeekday}</p>
                    <p className="text-xs text-[#9E968B]">Saturday – Sunday: {BUSINESS.hoursWeekend}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1815] border border-[#29241F] flex items-center justify-center text-[#C86D51] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFFDF9] text-sm">Telephone</h4>
                    <p className="text-xs text-[#9E968B] mt-0.5">{BUSINESS.phone}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#1A1815] p-8 sm:p-10 rounded-3xl border border-[#2B2722] text-center shadow-2xl">
                
                <div className="w-20 h-20 rounded-full border-2 border-[#D4A359] overflow-hidden mx-auto mb-6 shadow-md">
                  <img 
                    src={REAL_IMAGES.storefrontOutside} 
                    alt="One Shot Coffee Storefront" 
                    className="w-full h-full object-cover filter brightness-95"
                  />
                </div>

                <h3 className="font-editorial text-3xl text-[#FFFDF9] mb-3">
                  Ready to Visit?
                </h3>
                <p className="text-xs text-[#9E968B] max-w-md mx-auto mb-8 leading-relaxed font-light">
                  No table booking required — we operate walk-in service with seating in front and our quiet rear lounge.
                </p>

                <div className="flex flex-col gap-3">
                  <a 
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-[#FFFDF9] text-[#12100E] font-bold text-xs uppercase tracking-wider hover:bg-[#C86D51] hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
                    onMouseEnter={() => handleCursorEnter('MAPS')}
                    onMouseLeave={handleCursorLeave}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <a 
                    href={BUSINESS.deliverooUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-[#C86D51] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#FFFDF9] hover:text-[#12100E] transition-all flex items-center justify-center gap-2"
                    onMouseEnter={() => handleCursorEnter('DELIVEROO')}
                    onMouseLeave={handleCursorLeave}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order on Deliveroo</span>
                  </a>

                  <a 
                    href={BUSINESS.phoneRaw}
                    className="w-full py-3.5 rounded-full bg-[#12100E] border border-[#2B2722] text-[#B5AD9F] hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
                    onMouseEnter={() => handleCursorEnter('CALL')}
                    onMouseLeave={handleCursorLeave}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C86D51]" />
                    <span>Call Cafe: {BUSINESS.phone}</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#090807] text-xs text-[#736B60] border-t border-[#1C1A17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1C1A17]">
            
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#C86D51] flex items-center justify-center text-white font-bold">
                <Coffee className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-editorial text-2xl text-[#FFFDF9] font-bold block leading-none">
                  ONE SHOT COFFEE
                </span>
                <span className="text-[10px] text-[#80776B] uppercase tracking-wider">
                  82 Parkway, Camden Town, London NW1 7AN
                </span>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-6">
              <a 
                href={BUSINESS.instagramUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#C86D51] transition-colors flex items-center gap-1.5 font-semibold text-xs text-[#B5AD9F]"
                onMouseEnter={() => handleCursorEnter('INSTAGRAM')}
                onMouseLeave={handleCursorLeave}
              >
                <InstagramIcon className="w-4 h-4 text-[#C86D51]" /> @oneshotcoffeelondon
              </a>
              <a 
                href={BUSINESS.facebookUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#C86D51] transition-colors flex items-center gap-1.5 font-semibold text-xs text-[#B5AD9F]"
                onMouseEnter={() => handleCursorEnter('FACEBOOK')}
                onMouseLeave={handleCursorLeave}
              >
                <FacebookIcon className="w-4 h-4 text-[#C86D51]" /> Facebook Profile
              </a>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#635B50]">
            <p>© {new Date().getFullYear()} One Shot Coffee London. All rights reserved.</p>
            <p>Independent café owned by Liz & Fabrice • 82 Parkway, Camden Town</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

