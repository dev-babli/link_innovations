"use client";

/**
 * Link Innovations - Complete Homepage with All Showcase Components
 * 46 Total Components - NO Animations
 */

// Link Innovations Components (39)
// Cortex-based Components (15)
import LinkAnnouncementBanner from "@/components/link-sections/announcement-banner";
// import LinkNavigation from "@/components/link-sections/navigation"; // Replaced with LinkMetomicNavigationHeader
import LinkHeroSection from "@/components/link-sections/hero-section";
import LinkTabbedFeatures from "@/components/link-sections/tabbed-features";
import LinkCustomerStatsCards from "@/components/link-sections/customer-stats-cards";
import LinkLogoMarquee from "@/components/link-sections/logo-marquee";
import LinkIdpconEventSection from "@/components/link-sections/idpcon-event-section";
import LinkTestimonialsCarousel from "@/components/link-sections/testimonials-carousel";
import LinkUseCasesAccordion from "@/components/link-sections/use-cases-accordion";
import LinkDevexVideoSection from "@/components/link-sections/devex-video-section";

// Metomic-based Components (13)
import LinkMetomicAnnouncementBanner from "@/components/link-sections/metomic-announcement-banner";
import LinkMetomicNavigationHeader from "@/components/link-sections/metomic-navigation-header";
import LinkMetomicHeroSection from "@/components/link-sections/metomic-hero-section";
import LinkMetomicTrustedBySection from "@/components/link-sections/metomic-trusted-by-section";

// Vareto-based Components (11)
import LinkVaretoHeroSection from "@/components/link-sections/vareto-hero-section";
import LinkVaretoFeaturesSection from "@/components/link-sections/vareto-features-section";
import LinkVaretoPlanningResolutionSection from "@/components/link-sections/vareto-planning-resolution-section";
import LinkVaretoReportingViewsSection from "@/components/link-sections/vareto-reporting-views-section";
import LinkVaretoMultiplayerEditingSection from "@/components/link-sections/vareto-multiplayer-editing-section";
import LinkVaretoCollaborationSection from "@/components/link-sections/vareto-collaboration-section";
import LinkPortfolioShowcase from "@/components/link-sections/portfolio-showcase";

// Hero Section
import SimpleHero from "@/components/ui/simple-hero";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { HeroSection } from "@/components/ui/hero-section-5";
import { HeroParallax, portfolioProducts } from "@/components/ui/hero-parallax";

// Current Components (7)
import { CtaSection } from "@/components/CtaSection";
import { FeatureSection } from "@/components/FeatureSection";
import { FeatureSectionThree } from "@/components/FeatureSectionThree";
import { FeatureSectionTwo } from "@/components/FeatureTwoSection";
import { Footer } from "@/components/Footer";
import { EnhancedServicesSection } from "@/components/EnhancedServicesSection";
import LinkInnovationsNavbar from "@/components/LinkInnovationsNavbar";
import { TimelineSection } from "@/components/TimelineSection";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { LogoSection } from "@/components/LogosSection";
import InfiniteMenuSection from "@/components/InfiniteMenuSection";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <PerformanceOptimizer />

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 1: ATTENTION (0-3 seconds)
          Goal: Capture attention immediately
          ═══════════════════════════════════════════════════════════════ */}

      <LinkInnovationsNavbar />
      <HeroGeometric
        badge="Link Innovations - Digital Excellence"
        title1="Transform Your Business"
        title2="With Cutting-Edge Technology"
      />
      <LinkMetomicTrustedBySection />
      <LinkLogoMarquee />

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 2: INTEREST (3-30 seconds)
          Goal: Show what we offer, create interest
          ═══════════════════════════════════════════════════════════════ */}

      <InfiniteMenuSection />
      <LinkTabbedFeatures />
      <HeroSection />
      <LinkVaretoFeaturesSection />
      <LogoSection />

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 3: UNDERSTANDING (30 seconds - 2 minutes)
          Goal: Demonstrate how it works
          ═══════════════════════════════════════════════════════════════ */}

      <TimelineSection />
      <LinkVaretoPlanningResolutionSection />
      <LinkVaretoReportingViewsSection />
      <FeatureSection />
      <FeatureSectionTwo />
      <FeatureSectionThree />

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 4: DIFFERENTIATION (2-4 minutes)
          Goal: Show what makes us unique
          ═══════════════════════════════════════════════════════════════ */}

      <LinkUseCasesAccordion />
      <LinkVaretoMultiplayerEditingSection />
      <LinkVaretoCollaborationSection />
      <LinkDevexVideoSection />

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 5: SOCIAL PROOF & PORTFOLIO (4-6 minutes)
          Goal: Build trust and showcase work
          ═══════════════════════════════════════════════════════════════ */}

      <LinkCustomerStatsCards />
      <LinkTestimonialsCarousel />
      <LinkPortfolioShowcase />

      {/* ═══════════════════════════════════════════════════════════════
          PHASE 6: CONVERSION (6+ minutes)
          Goal: Drive action with clear CTAs
          ═══════════════════════════════════════════════════════════════ */}

      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
