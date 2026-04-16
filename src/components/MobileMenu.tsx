import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  return (
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
              className="p-2 text-white hover:text-[#FAFAFA] transition-colors"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span className="block h-0.5 w-6 bg-white absolute top-2.5 transform transition-transform duration-300 ease-in-out rotate-45"></span>
                <span className="block h-0.5 w-6 bg-white absolute top-2.5 transform transition-transform duration-300 ease-in-out -rotate-45"></span>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold tracking-wider text-white hover:text-[#FAFAFA] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              HOME
            </Link>
            <Link
              to="/property"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold tracking-wider text-[#FAFAFA] hover:text-[#F97316] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              PUBLIC LISTINGS
            </Link>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold tracking-wider text-white hover:text-[#FAFAFA] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              ABOUT
            </a>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h4 className="text-[10px] tracking-[0.4em] text-neutral-500 font-bold mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>CONNECT</h4>
              <div className="flex flex-col gap-4">
                <a href="https://wa.me/254758264337" className="text-lg text-white/80 hover:text-white flex items-center gap-3 font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  <span className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.52l.303.18c1.397.832 3.012 1.272 4.654 1.277h.001c5.454 0 9.893-4.436 9.893-9.891 0-2.643-1.029-5.127-2.9-7c-1.87-1.872-4.355-2.903-7-2.903-5.454 0-9.893 4.436-9.893 9.893 0 1.748.455 3.454 1.316 4.96l.199.349-1.123 4.102 4.195-1.1zm9.648-6.19c-.274-.137-1.623-.801-1.872-.892-.25-.091-.433-.137-.614.137-.183.274-.707.892-.868 1.074-.16.183-.321.206-.595.069-.273-.137-1.157-.426-2.203-1.359-.812-.724-1.36-1.618-1.52-1.892-.16-.274-.017-.422.12-.558.123-.122.274-.32.411-.48.136-.16.182-.274.273-.457.092-.183.046-.343-.023-.48-.069-.137-.614-1.479-.841-2.028-.221-.532-.443-.458-.61-.466-.157-.008-.338-.01-.518-.01-.182 0-.479.068-.73.342-.25.274-.958.937-.958 2.284 0 1.348.98 2.65 1.117 2.833.137.183 1.93 2.947 4.673 4.129.653.28 1.163.447 1.56.574.657.208 1.254.179 1.727.108.527-.079 1.624-.663 1.851-1.303.228-.64.228-1.188.16-1.303-.07-.114-.252-.183-.526-.32z" />
                    </svg>
                  </span>
                  WHATSAPP
                </a>
                <a href="tel:+254758264337" className="text-lg text-white/80 hover:text-white flex items-center gap-3 font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  CALL
                </a>
                <a href="mailto:tobillionhomes@gmail.com" className="text-lg text-white/80 hover:text-white flex items-center gap-3 font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  EMAIL
                </a>
              </div>
            </div>

            <div className="mt-auto pt-10 border-t border-white/5">
              <div className="flex flex-col items-center gap-8">
                <div className="flex gap-8">
                  <Link to="/privacy-policy" onClick={() => setIsMenuOpen(false)} className="text-[10px] tracking-widest text-neutral-500 hover:text-white uppercase">Privacy</Link>
                  <Link to="/terms-of-service" onClick={() => setIsMenuOpen(false)} className="text-[10px] tracking-widest text-neutral-500 hover:text-white uppercase">Terms</Link>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <span className="text-[10px] tracking-[0.3em] text-neutral-600 font-bold uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>NAIROBI, KENYA</span>
                  
                  <ul className="flex space-x-8 text-neutral-500">
                    <li>
                      <a href="https://twitter.com/tobillionhomes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/tobillionhomes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://tiktok.com/@tobillionhomes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.64 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.12 2.19-.74 2.77-1.72.05-.09.09-.19.12-.3.26-1.65.24-3.34.24-5.02 0-2.92-.01-5.84.01-8.75z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/company/tobillionhomes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
