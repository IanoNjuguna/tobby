import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ATANA_IMAGES = [
  "/0-atana.jpeg",
  "/1-atana.jpeg",
  "/2-atana.jpeg",
  "/3-atana.jpeg",
  "/4-atana.jpeg",
  "/05-atana.jpeg",
  "/6-atana.jpeg"
];

export default function PropertyDetails() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Background slideshow every 1 minute
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % ATANA_IMAGES.length);
    }, 60000); // 60 seconds
    
    return () => clearInterval(interval);
  }, []);

  const visibleImages = showAllPhotos ? ATANA_IMAGES : ATANA_IMAGES.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C084FC] selection:text-black relative">
      {/* Dynamic Background Slideshow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={ATANA_IMAGES[bgIndex]} 
              className="w-full h-full object-cover blur-2xl scale-110 opacity-30 brightness-[0.3]"
              alt="background"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight hover:text-[#C084FC] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
            TOBILLION HOMES
          </Link>
          <Link to="/" className="text-sm font-bold tracking-[0.2em] hover:text-[#C084FC] transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            BACK TO LISTINGS
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-[#C084FC] text-black text-[10px] font-bold tracking-widest uppercase">Featured Listing</span>
            <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Gikambura, Nairobi</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Atana Terraces
          </h1>
          <div className="flex flex-wrap gap-12 items-end justify-between">
            <div className="flex gap-12 text-sm tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <div>
                <p className="text-white/40 mb-2">BEDS</p>
                <p className="text-2xl font-bold">03</p>
              </div>
              <div>
                <p className="text-white/40 mb-2">BATHS</p>
                <p className="text-2xl font-bold">03</p>
              </div>
              <div>
                <p className="text-white/40 mb-2">SQ.M</p>
                <p className="text-2xl font-bold">223</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-sm tracking-widest mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>SALES PRICE</p>
              <p className="text-3xl md:text-4xl font-bold text-emerald-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>From KES 22.5 Million</p>
            </div>
          </div>
        </div>

        {/* Instagram Grid Gallery */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
            <AnimatePresence mode="popLayout">
              {visibleImages.map((src, index) => (
                <motion.div
                  key={src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square group overflow-hidden bg-neutral-900 relative"
                >
                  <img
                    src={src}
                    alt={`Atana Terraces ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {!showAllPhotos && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="group relative px-12 py-5 bg-white text-black font-bold tracking-widest hover:bg-[#F97316] transition-all flex items-center gap-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                VIEW MORE PHOTOS
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-y-1 transition-transform">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
              </button>
            </div>
          )}
        </section>

        {/* Description & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20">
          {/* Main Description */}
          <div className="prose prose-invert prose-emerald max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Overview</h2>
            <div className="text-white/80 leading-relaxed space-y-6 text-lg font-serif">
              <p>
                Atana Terraces, Gikambura is an exclusive boutique townhouse development designed for discerning homeowners who value privacy, space, and refined living within a serene natural setting. Comprising only nine semi-detached three-bedroom townhouses, this intimate community offers a rare balance of architectural elegance, functionality, and breathtaking scenery, set against sweeping views of the Ngong Hills and the Nairobi skyline.
              </p>
              <p>
                Thoughtfully planned for modern family living, each home is filled with light, thanks to large French windows that frame panoramic views and seamlessly connect indoor spaces to the outdoors. The interiors are airy, generously proportioned, and meticulously finished to deliver both comfort and sophistication.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Location & Lifestyle</h3>
              <p className="text-white/70 leading-relaxed text-lg font-serif">
                Situated in Gikambura, one of Nairobi’s most sought-after residential enclaves, Atana Terraces offers a tranquil retreat from the city while remaining easily accessible. The area is renowned for its lush greenery, open skies, and peaceful ambiance—making it ideal for families, professionals, and homeowners seeking long-term value in a premium location.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-neutral-900 border border-white/10 p-10 shadow-[8px_8px_0px_0px_#F97316]">
              <h3 className="text-xl font-bold mb-8 tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Each Townhouse Features:</h3>
              <ul className="space-y-4">
                {[
                  "Three spacious bedrooms, all ensuite, designed for comfort and privacy",
                  "Master bedroom occupying its own level, complete with a private terrace and walk-in closet",
                  "A bright and expansive living and dining area, ideal for family living and entertaining",
                  "A separate dining area",
                  "Fully fitted wardrobes with quality joinery",
                  "A modern kitchen with a dedicated cleaning yard, including provisions for a washing machine and dryer",
                  "Servant’s Quarter (DSQ) for added convenience",
                  "A rooftop terrace featuring a kitchen and barbecue area",
                  "Solar water heating",
                  "A private yard and garden, perfect for relaxation, children’s play, or outdoor hosting"
                ].map((feature) => (
                  <li key={feature} className="flex gap-4 items-start text-sm text-white/80">
                    <span className="text-[#C084FC] text-xl leading-none">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-10 shadow-[8px_8px_0px_0px_#C084FC]">
              <h3 className="text-xl font-bold mb-8 tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Estate Features & Amenities:</h3>
              <ul className="space-y-4">
                {[
                  "Cabro-paved internal roads with elegant street lighting",
                  "Reliable year-round water supply from a permanent on-site borehole",
                  "Well-managed common areas ensuring an orderly environment",
                  "Ample parking for two cars per unit",
                  "Secure, quiet surroundings within a leafy and prestigious neighborhood"
                ].map((feature) => (
                  <li key={feature} className="flex gap-4 items-start text-sm text-white/80">
                    <span className="text-[#F97316] text-xl leading-none">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border-2 border-[#C084FC] bg-black">
              <h4 className="text-sm font-bold tracking-widest mb-4 opacity-50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>SALES PRICE:</h4>
              <p className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                3 Bedroom Townhouse (223 sqm) : From KES 22.5 Million
              </p>
            </div>

            <a 
              href="https://wa.me/254758264337"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center w-full py-6 bg-emerald-500 text-black font-bold tracking-[0.2em] hover:bg-emerald-400 transition-all shadow-[6px_6px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_#F97316] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              INQUIRE NOW
            </a>
          </div>
        </div>
      </main>

      {/* Sticky Book a Tour (Mobile Only) */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:hidden">
        <a 
          href="https://wa.me/254758264337"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full py-5 bg-[#C084FC] text-black font-bold tracking-[0.2em] shadow-[4px_4px_0px_0px_#F97316] hover:shadow-[4px_4px_0px_0px_white] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          BOOK A HOUSE TOUR
        </a>
      </div>
    </div>
    </div>
  );
}
