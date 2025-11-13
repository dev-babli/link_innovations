import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import FounderNote from '@/components/sections/founder-note';
import BenefitsSection from '@/components/sections/benefits';
import ServicesSection from '@/components/sections/services';
import Process from '@/components/sections/process';
import ProjectsSection from '@/components/sections/projects';
import Testimonials from '@/components/sections/testimonials';
import Pricing from '@/components/sections/pricing';
import FaqSection from '@/components/sections/faq';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FounderNote />
      <BenefitsSection />
      <ServicesSection />
      <Process />
      <ProjectsSection />
      <Testimonials />
      <Pricing />
      <FaqSection />
      <Footer />
    </main>
  );
}