import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import LanguagesSection from '@/components/home/LanguagesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <LanguagesSection />
      <IndustriesSection />
      <TestimonialsSection />
    </>
  );
}
