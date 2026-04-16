import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section id="properties" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      <div className="container-standard relative z-10 min-h-[calc(100vh-80px)] flex items-center py-20">
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
              We curate iconic homes in Westlands, Riverside, Karen, Runda, Kitisuru, Loresho, Kilimani, Kileleshwa, Parklands, Kiambu Road and Syokimau.
            </p>
            <div className="flex flex-col gap-5 sm:flex-row">
              <Link to="/property" className="inline-flex items-center justify-center bg-white px-10 py-5 text-black text-sm tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:bg-[#F97316] hover:shadow-[4px_4px_0px_0px_white] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                PUBLIC LISTINGS
              </Link>
              <a 
                href="https://wa.me/254758264337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FAFAFA] px-10 py-5 text-black text-sm tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:bg-[#F97316] hover:shadow-[4px_4px_0px_0px_white] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none" 
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                BOOK A HOUSE TOUR
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
  );
};

export default Hero;
