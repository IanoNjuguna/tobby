import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';

import { Property } from '../data/properties';

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); 

    return () => clearInterval(interval);
  }, [currentSlide]); 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="properties" className="section-padding bg-transparent relative overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="mb-20">
          <h2
            className="text-4xl sm:text-6xl text-white mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Featured Listings
          </h2>
        </div>


        {/* Mobile Slideshow - Teaser */}
        <div className="md:hidden bg-[#0A0A0A] relative">
          <div
            className="relative overflow-hidden bg-[#0A0A0A]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#0A0A0A]"
              >
                {properties[currentSlide] && <PropertyCard property={properties[currentSlide]} />}
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {properties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                    ? 'bg-[#FAFAFA] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid - Top Picks Teaser */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <AnimatePresence mode="popLayout">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/property"
            className="px-12 py-4 bg-[#FAFAFA] text-black hover:bg-[#F97316] transition-all tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:shadow-[4px_4px_0px_0px_#FAFAFA] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            EXPLORE CATALOGUE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
