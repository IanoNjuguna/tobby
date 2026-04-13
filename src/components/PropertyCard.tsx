import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Property } from '../data/properties';

export default function PropertyCard({ property }: { property: Property }) {
  const [bgIndex, setBgIndex] = useState(0);
  const images = property.images || [property.image];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 60000); // 1 minute
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group bg-[#0A0A0A] border border-white/5 hover:border-[#F97316]/50 overflow-hidden transition-all duration-500 hover:shadow-[8px_8px_0px_0px_#F97316] aspect-square relative flex flex-col"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[bgIndex]}
              alt={property.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-neutral-900/60 group-hover:bg-neutral-900/40 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="h-32 relative">
          <div className="absolute top-4 right-4 px-3 py-1 bg-black border border-white/10">
            <span className="text-white text-xs tracking-widest font-bold" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {property.featured ? 'FEATURED' : 'NEW LISTING'}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3
              className="text-xl text-white mb-1"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              {property.title}
            </h3>
            <p
              className="text-white/80 mb-4 text-xs"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
            >
              {property.location}
            </p>
            <div className="mb-4">
              <span
                className="text-2xl text-emerald-400"
                style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}
              >
                {property.price}
              </span>
            </div>
          </div>
          <div className="flex gap-4 text-white/70 mb-4 border-b border-white/10 pb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <div className="flex flex-col">
              <span className="text-white text-base" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>{property.beds}</span>
              <span className="text-[10px] text-white/50" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>BEDS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-base" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>{property.baths}</span>
              <span className="text-[10px] text-white/50" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>BATHS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-base" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>{property.sqft}</span>
              <span className="text-[10px] text-white/50" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>SQFT</span>
            </div>
          </div>
          <Link
            to={property.id === 4 ? `/property/atana-terraces` : '#'}
            className="w-full py-3 bg-[#C084FC] text-black hover:bg-[#F97316] transition-all tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:shadow-[4px_4px_0px_0px_#C084FC] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center text-xs"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
