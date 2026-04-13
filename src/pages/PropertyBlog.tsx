import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

export default function PropertyBlog() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filterOptions = ["Villas", "Townhouses", "Apartments", "Penthouses"];
  
  const filteredProperties = selectedTypes.length === 0
    ? properties
    : properties.filter(p => selectedTypes.some(type => p.type.toLowerCase().includes(type.toLowerCase().slice(0, -1))));

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            TOBILLION HOMES
          </Link>
          <div className="flex gap-8 items-center">
            <Link to="/" className="text-sm tracking-widest text-white/60 hover:text-white transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              HOME
            </Link>
            <a href="mailto:tobillionhomes@gmail.com" className="px-6 py-2 bg-white text-black text-[10px] tracking-[0.2em] font-bold hover:bg-[#C084FC] transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.4em] text-[#C084FC] font-bold mb-4 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              PROPERTY CATALOGUE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Curated Residences
            </h1>
            <p className="max-w-2xl text-lg text-white/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore our exclusive selection of iconic homes across Nairobi's most prestigious neighborhoods. From sculptural townhouses to sweeping estate villas.
            </p>
          </motion.div>

          {/* Filter System */}
          <div className="flex items-center gap-6 mt-16 relative">
            <button
              onClick={() => {
                setSelectedTypes([]);
                setIsFilterDropdownOpen(false);
              }}
              className={`px-10 py-4 text-xs tracking-[0.2em] font-bold transition-all border ${selectedTypes.length === 0
                ? 'bg-[#C084FC] text-black border-[#C084FC] shadow-[4px_4px_0px_0px_#F97316]'
                : 'text-white/40 border-white/10 hover:border-white/40'
                }`}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              ALL PROPERTIES
            </button>

            <div className="relative">
              <button
                onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                className={`px-10 py-4 text-xs tracking-[0.2em] font-bold transition-all border flex items-center gap-4 ${selectedTypes.length > 0 || isFilterDropdownOpen
                  ? 'bg-white text-black border-white shadow-[4px_4px_0px_0px_#F97316]'
                  : 'text-white/40 border-white/10 hover:border-white/40'
                  }`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                FILTERS {selectedTypes.length > 0 && `(${selectedTypes.length})`}
                <svg 
                  width="12" height="8" viewBox="0 0 12 8" fill="none" 
                  className={`transition-transform duration-300 ${isFilterDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              <AnimatePresence>
                {isFilterDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-4 w-64 bg-[#0A0A0A] border border-white/10 p-6 z-[60] shadow-2xl"
                  >
                    <div className="flex flex-col gap-4">
                      {filterOptions.map((type) => (
                        <label 
                          key={type} 
                          className="flex items-center justify-between group cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleType(type);
                          }}
                        >
                          <span className={`text-sm tracking-widest transition-colors ${selectedTypes.includes(type) ? 'text-[#C084FC]' : 'text-neutral-500 group-hover:text-white'}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                            {type.toUpperCase()}
                          </span>
                          <div className={`w-5 h-5 border flex items-center justify-center transition-all ${selectedTypes.includes(type) ? 'bg-[#C084FC] border-[#C084FC]' : 'border-neutral-700'}`}>
                            {selectedTypes.includes(type) && (
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4">
                                <path d="M20 6L9 17L4 12" />
                              </svg>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                    <button 
                      onClick={() => setIsFilterDropdownOpen(false)}
                      className="w-full mt-6 pt-4 border-t border-white/5 text-[10px] tracking-widest text-[#F97316] font-bold hover:text-white transition-colors"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      CLOSE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="col-span-full py-32 border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                <span className="text-4xl mb-4">🏠</span>
                <p className="text-white/40 tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  NO PROPERTIES MATCHING YOUR FILTERS
                </p>
                <button 
                  onClick={() => setSelectedTypes([])}
                  className="mt-6 text-[#C084FC] hover:underline tracking-widest text-xs"
                >
                  RESET FILTERS
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-white/40 text-sm tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            © {new Date().getFullYear()} TOBILLION HOMES. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-10">
            <Link to="/privacy-policy" className="text-white/40 hover:text-white text-xs tracking-widest transition-colors">PRIVACY</Link>
            <Link to="/terms-of-service" className="text-white/40 hover:text-white text-xs tracking-widest transition-colors">TERMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
