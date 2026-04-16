import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import PropertyDetails from '../pages/PropertyDetails';
import PropertyBlog from '../pages/PropertyBlog';
import { properties } from '../data/properties';

// Components
import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import About from '../components/About';

export default function App() {
  const heroImage = "/villa.jpg";

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={
          <PageLayout>
            <PrivacyPolicy />
          </PageLayout>
        } />
        <Route path="/terms-of-service" element={
          <PageLayout>
            <TermsOfService />
          </PageLayout>
        } />
        <Route path="/property" element={
          <PageLayout>
            <PropertyBlog />
          </PageLayout>
        } />
        <Route path="/property/atana-terraces" element={
          <PageLayout>
            <PropertyDetails />
          </PageLayout>
        } />
        <Route path="*" element={
          <PageLayout isHome={true}>
            <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-black to-emerald-950">
              <Hero heroImage={heroImage} />
              <FeaturedProperties properties={properties} />
              <About />
            </div>
          </PageLayout>
        } />
      </Routes>
    </Router>
  );
}
