import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  isHome?: boolean;
}

const PageLayout = ({ children, isHome = false }: PageLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

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
  }, [isHome]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar isScrolled={isScrolled} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
