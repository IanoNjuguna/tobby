import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import PropertyDetails from '../pages/PropertyDetails';
import PropertyCard from '../components/PropertyCard';
import PropertyBlog from '../pages/PropertyBlog';
import { properties } from '../data/properties';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const heroImage = "/villa.jpg";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const propertiesSection = document.getElementById('properties');

      if (propertiesSection) {
        const propertiesSectionTop = propertiesSection.offsetTop;
        setIsScrolled(scrollPosition >= propertiesSectionTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/property" element={<PropertyBlog />} />
        <Route path="/property/atana-terraces" element={<PropertyDetails />} />
        <Route path="*" element={
          <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-black to-emerald-950">
            {/* Hero Section */}
            <section className="relative min-h-screen pt-20 overflow-hidden">
              <nav className={`inset-x-0 top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'absolute' : 'fixed'
                }`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8 py-5">
                  <Link to="/" className="text-xl sm:text-2xl tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    TOBILLION HOMES
                  </Link>
                  <div className="flex gap-4 sm:gap-12 items-center">
                    <Link to="/property" className="hidden md:block text-white/80 hover:text-white transition-colors text-sm tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>
                      PUBLIC LISTINGS
                    </Link>
                    <a href="#about" className="hidden md:block text-white/80 hover:text-white transition-colors text-sm tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>
                      ABOUT
                    </a>

                    {/* Animated Hamburger Button */}
                    <button
                      onClick={() => setIsMenuOpen(true)}
                      className="md:hidden p-2 text-white"
                    >
                      <div className="w-6 h-5 flex flex-col justify-between">
                        <span className="block h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out"></span>
                        <span className="block h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out"></span>
                        <span className="block h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out"></span>
                      </div>
                    </button>
                  </div>
                </div>
              </nav>

              {/* Mobile Menu Overlay */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-[100] bg-black p-8 flex flex-col justify-center"
                  >
                    <div className="absolute top-8 left-0 right-0 px-8 flex justify-between items-center">
                      <div className="p-2">
                        <h1 className="text-2xl font-bold text-white tracking-tight leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          TOBILLION HOMES
                        </h1>
                      </div>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 text-white hover:text-[#C084FC] transition-colors"
                      >
                        <div className="w-6 h-5 flex flex-col justify-between relative">
                          <span className="block h-0.5 w-6 bg-white absolute top-2.5 transform transition-transform duration-300 ease-in-out rotate-45"></span>
                          <span className="block h-0.5 w-6 bg-white absolute top-2.5 transform transition-transform duration-300 ease-in-out -rotate-45"></span>
                        </div>
                      </button>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Link
                        to="/property"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-bold tracking-wider text-[#C084FC] hover:text-[#F97316] transition-colors"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        PUBLIC LISTINGS
                      </Link>
                      <a
                        href="#about"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-bold tracking-wider text-white hover:text-[#C084FC] transition-colors"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        ABOUT
                      </a>
                      <div className="flex flex-col items-center justify-end flex-1 pb-20">
                        <h4
                          className="text-lg mb-12 tracking-widest text-neutral-300"
                          style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}
                        >
                          SOCIALS
                        </h4>
                        <ul className="flex space-x-10 text-neutral-300">
                          <li>
                            <a href="https://twitter.com/tobillionhomes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 duration-200">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://instagram.com/tobillionhomes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 duration-200">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://tiktok.com/@tobillionhomes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 duration-200">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.64 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.12 2.19-.74 2.77-1.72.05-.09.09-.19.12-.3.26-1.65.24-3.34.24-5.02 0-2.92-.01-5.84.01-8.75z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://linkedin.com/company/tobillionhomes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 duration-200">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
              <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-[calc(100vh-80px)] flex items-center py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                  {/* Left Column: Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                  >
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                      It all starts with the perfect residence.
                    </h2>
                    <p className="max-w-xl text-lg text-white/80 mb-12 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                      We specialize in the exclusive and iconic homes of Westlands, Riverside, Karen, Runda, Kitisuru, Loresho, Kilimani, Kileleshwa, Parklands, Kiambu Road and Syokimau.
                    </p>
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <Link to="/property" className="inline-flex items-center justify-center bg-white px-10 py-5 text-black text-sm tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:bg-[#F97316] hover:shadow-[4px_4px_0px_0px_white] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        PUBLIC LISTINGS
                      </Link>
                      <a 
                        href="https://chat.whatsapp.com/JjkU6Gi28efDSNNJ2jl2N7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#C084FC] px-10 py-5 text-black text-sm tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:bg-[#F97316] hover:shadow-[4px_4px_0px_0px_#C084FC] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none" 
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        OFF-MARKET LISTINGS
                      </a>
                    </div>
                  </motion.div>

                  {/* Right Column: Hero Image */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="group relative overflow-hidden border border-white/10 shadow-[8px_8px_0px_0px_transparent] hover:shadow-[8px_8px_0px_0px_#F97316] bg-black/10 transition-shadow duration-300"
                  >
                    <img
                      src={heroImage}
                      alt="Featured luxury property"
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/70" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                        Modern Residency
                      </p>
                      <h3 className="mt-3 text-3xl text-white font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                        Family Estates
                      </h3>
                      <p className="mt-2 text-sm text-white/70 max-w-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        Built for shared mornings, quiet evenings, communal gatherings and privacy.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>


            {/* Featured Properties Section */}
            <section id="properties" className="relative pt-8 pb-20 sm:pb-32 overflow-hidden">
              <div className="relative z-10 max-w-7xl mx-auto px-8">
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
                            ? 'bg-[#C084FC] w-8'
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
                    className="px-12 py-4 bg-[#C084FC] text-black hover:bg-[#F97316] transition-all tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:shadow-[4px_4px_0px_0px_#C084FC] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    EXPLORE CATALOGUE
                  </Link>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
              <div className="relative z-10 max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="hidden lg:block group relative overflow-hidden border border-white/5 shadow-[8px_8px_0px_0px_transparent] hover:shadow-[8px_8px_0px_0px_#F97316] transition-shadow duration-300">
                    <img
                      src="/family.jpg"
                      alt="Family viewing luxury home"
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/70" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                        Our story
                      </p>
                      <h3 className="mt-3 text-3xl text-white font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                        Family-first luxury living
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2
                      className="text-5xl text-white mb-8 leading-tight"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}
                    >
                      What sets us apart
                    </h2>
                    <ul className="space-y-4 text-lg text-neutral-300 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                      <li className="flex items-start">
                        <span className="text-[#C084FC] mr-3">·</span>
                        <span>Exclusive access to off-market and pre-market opportunities in Nairobi's prime neighborhoods</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C084FC] mr-3">·</span>
                        <span>Tailored advisory</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C084FC] mr-3">·</span>
                        <span>End-to-end service, i.e: valuation, negotiation, due diligence, and closing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C084FC] mr-3">·</span>
                        <span>A network of trusted architects, designers, and legal advisors</span>
                      </li>
                    </ul>
                    <a
                      href="https://wa.me/254758264337"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-10 py-4 bg-[#C084FC] text-black hover:bg-[#F97316] transition-all tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:shadow-[4px_4px_0px_0px_#C084FC] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      BOOK A HOUSE TOUR
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="relative text-white py-20 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/footer.png')] bg-cover bg-center opacity-15" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/15 to-black/50" />
              <div className="relative z-10 max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                  <div>
                    <h3
                      className="text-2xl mb-5 tracking-tight"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      TOBILLION HOMES
                    </h3>
                    <p
                      className="text-neutral-400 leading-relaxed"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
                    >
                      We specialize in the exclusive and iconic homes of Westlands, Riverside, Karen, Runda, Kitisuru, Loresho, Kilimani, Kileleshwa, Parklands, Kiambu Road and Syokimau.
                    </p>
                  </div>
                  <div>
                    <h4
                      className="text-sm mb-6 tracking-widest text-neutral-500"
                      style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}
                    >
                      QUICK LINKS
                    </h4>
                    <ul className="space-y-3" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}>
                      <li><Link to="/property" className="text-neutral-400 hover:text-white transition-colors">Properties</Link></li>
                      <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
                      <li><Link to="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                      <li><Link to="/terms-of-service" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4
                      className="text-sm mb-6 tracking-widest text-neutral-500"
                      style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}
                    >
                      CONTACT
                    </h4>
                    <ul className="space-y-3 text-neutral-400" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}>
                      <li className="flex items-center gap-3">
                        <span className="text-[#C084FC]">📍</span> Nairobi, Kenya
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#C084FC]">📞</span> +254 758 264 337
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#C084FC]">📧</span> tobillionhomes@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-neutral-800 pt-10 flex justify-center">
                  <p
                    className="text-neutral-500 text-sm"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
                  >
                    © {new Date().getFullYear()} Tobillion Homes. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}
