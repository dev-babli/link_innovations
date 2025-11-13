import Navigation from "../../new-src/components/sections/navigation";
import Hero from "../../new-src/components/sections/hero";
import ProcessSection from "../../new-src/components/sections/process";
import FeaturesSection from "../../new-src/components/sections/features";
import Integrations from "../../new-src/components/sections/integrations";
import SuccessStories from "../../new-src/components/sections/success-stories";
import FaqSection from "../../new-src/components/sections/faq";
import Footer from "../../new-src/components/sections/footer";
// Main homepage components
import { Header } from '@/components/header-3';
import HeroSectionNew from '@/components/HeroSectionNew';
import ProcessCards from '@/homepage-versions/shared/components/ProcessCards';
import OurAIServices from '@/components/MStackCard';
import CenterModeProductivitySlider from '@/components/ui/center-mode-productivity-slider';
import AITransformationCirrusInteractive from '@/components/MVerticalCard';
import { Process } from '@/components/ui/cards-stack-demo';
import RuixenFeatureSection from '@/components/ui/ruixen-feature-section';
import StackFeatureSection from '@/components/ui/stack-feature-section';
import { WhyChooseUsBento } from '@/components/ui/why-choose-us-bento';
import GalleryHoverCarousel from '@/components/ui/gallery-hover-carousel';
import ProjectsSection from '@/orbai_clone/components/sections/projects';
import { CardHoverRevealSection } from '@/components/ui/card-hover-reveal-section';
import TestimonialsColumns from '@/components/ui/testimonials-columns-1';
import { TrustedBySparkles } from '@/components/ui/trusted-by-sparkles';
import { CTAWithShader } from '@/components/ui/cta-with-shader';

export default function HomePage1() {
    return (
        <main className="min-h-screen bg-background-primary">
            <Navigation />
            <HeroSectionNew />
            <Hero />
            <ProcessSection />
            <SuccessStories />
            <Integrations />
            <FeaturesSection />
            {/* Main homepage components */}
            <div className="bg-[#F5F3EF]">
                <ProcessCards />
                <OurAIServices />
                <CenterModeProductivitySlider />
                <AITransformationCirrusInteractive />
                <Process />
                <RuixenFeatureSection />
                <StackFeatureSection />
                <WhyChooseUsBento />
                <GalleryHoverCarousel heading="Simple & Scalable" />
                <ProjectsSection />
                <CardHoverRevealSection />
            </div>
            <FaqSection />
            <TestimonialsColumns />
            <TrustedBySparkles />
            <CTAWithShader />
            <Footer />
        </main>
    );
}

