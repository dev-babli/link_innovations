import Navigation from "../../new-src/components/sections/navigation";
import ProcessSection from "../../new-src/components/sections/process";
import FeaturesSection from "../../new-src/components/sections/features";
import SuccessStories from "../../new-src/components/sections/success-stories";
import Footer from "../../new-src/components/sections/footer";
// Main homepage components
import HeroSectionNew from '@/components/HeroSectionNew';
import { Process } from '@/components/ui/cards-stack-demo';
import ShaderShowcase from '@/components/ui/hero';
import RuixenFeatureSection from '@/components/ui/ruixen-feature-section';
import { FlowAnimationSection } from '@/components/flow-animation-section';
import { PhilosophyPromiseSection } from '@/components/ui/philosophy-promise-section';
import TestimonialsColumns from '@/components/ui/testimonials-columns-1';
import { TrustedBySparkles } from '@/components/ui/trusted-by-sparkles';
import { CTAWithShader } from '@/components/ui/cta-with-shader';
import OurAIServices from '@/components/MStackCard';
import OverlappingCardsCarousel from '@/components/ui/overlapping-cards-carousel';
import JourneyMap from '@/components/promise-section';

export default function GroviaHomePage() {
    return (
        <main className="min-h-screen bg-background-primary">
            <Navigation />
            
            {/* ============================================
                IDEAL STRUCTURE (8-10 sections max)
            ============================================ */}
            
            {/* 1️⃣ Hero */}
            <HeroSectionNew />
            
            {/* 2️⃣ Why Choose Us */}
            <FeaturesSection />
            
            {/* 4️⃣ Services Cards */}
            <SuccessStories />
            
            {/* 5️⃣ Our Process (6-Step Journey) */}
            <Process />
            
            {/* 5️⃣5️⃣ Build Your Journey */}
            <JourneyMap />
            
            {/* 6️⃣ CTA (Transformed from Hero) - MIDDLE */}
            <ShaderShowcase />
            
            {/* 7️⃣ The Link Innovations Way */}
            <ProcessSection />
            
            {/* 8️⃣ Technologies Showcase */}
            <RuixenFeatureSection />
            
            {/* 9️⃣ Flow Animation Component */}
            <FlowAnimationSection />
            
            {/* 🔟 Our Promise & What We Believe - MStack Cards */}
            <OurAIServices />
            
            {/* 1️⃣1️⃣ Philosophy & Promise & Beliefs (Merged) */}
            <PhilosophyPromiseSection />
            
            {/* 1️⃣2️⃣ Social Proof */}
            <div className="bg-background-primary">
                <TestimonialsColumns />
                <TrustedBySparkles />
            </div>
            
            {/* 1️⃣3️⃣ Final CTA */}
            <CTAWithShader />
            
            {/* 1️⃣4️⃣ Footer */}
            <Footer />
        </main>
    );
}
