import { Link } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isScrolled, setIsMenuOpen }: NavbarProps) => {
  return (
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
  );
};

export default Navbar;
