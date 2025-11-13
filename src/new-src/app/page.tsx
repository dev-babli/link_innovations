import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import ProcessSection from "@/components/sections/process";
import FeaturesSection from "@/components/sections/features";
import Integrations from "@/components/sections/integrations";
import PricingSection from "@/components/sections/pricing";
import SuccessStories from "@/components/sections/success-stories";
import TestimonialsSection from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navigation />
      <Hero />
      <ProcessSection />
      <FeaturesSection />
      <Integrations />
      <PricingSection />
      <SuccessStories />
      <TestimonialsSection />
      <FaqSection />
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}