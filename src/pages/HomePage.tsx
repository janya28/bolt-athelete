import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import EventsSection from '../components/home/EventsSection';
import AccommodationsSection from '../components/home/AccommodationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

interface HomePageProps {
  isLoggedIn: boolean;
  onLogout?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={onLogout}>
      <HeroSection />
      <FeatureSection />
      <EventsSection />
      <AccommodationsSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;