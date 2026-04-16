import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import PropertyDetails from '../pages/PropertyDetails';
import PropertyBlog from '../pages/PropertyBlog';
import { properties } from '../data/properties';

// Components
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import About from '../components/About';
import Footer from '../components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/property" element={<PropertyBlog />} />
        <Route path="/property/atana-terraces" element={<PropertyDetails />} />
        <Route path="*" element={
          <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-black to-emerald-950">
            <Navbar isScrolled={isScrolled} setIsMenuOpen={setIsMenuOpen} />
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            <main>
              <Hero heroImage={heroImage} />
              <FeaturedProperties properties={properties} />
              <About />
            </main>

            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}
