import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import LanguagesSection from '@/components/home/LanguagesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
        <LanguagesSection />
        <IndustriesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}