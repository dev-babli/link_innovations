"use client";

import React from 'react';
// import { FullScreenScrollFX } from '@/components/full-screen-scroll-fx';
import InfiniteMenuSection from '@/components/InfiniteMenuSection';
import LinkTabbedFeatures from '@/components/link-sections/tabbed-features';
import LinkVaretoFeaturesSection from '@/components/link-sections/vareto-features-section';
import { LogoSection } from '@/components/LogosSection';

const Phase2ScrollEffects = () => {
    console.log('Phase2ScrollEffects component is rendering');
    // Define sections for the scroll effects with custom background rendering
    const sections = [
        {
            id: 'infinite-menu',
            background: '/images/services/li-service-web-development-dashboard-v1.webp',
            leftLabel: 'Navigation',
            title: 'Infinite Menu Experience',
            rightLabel: 'Seamless Navigation',
            renderBackground: (active: boolean, previous: boolean) => (
                <div className="relative w-full h-full">
                    <img
                        src="/images/services/li-service-web-development-dashboard-v1.webp"
                        alt="Web Development Dashboard"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f16]/80 via-[#1e3f20]/60 to-[#345830]/80" />
                    {active && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-4xl lg:text-6xl font-light text-white mb-4">
                                    Infinite Menu
                                </h3>
                                <p className="text-lg text-white/80 max-w-md">
                                    Seamless navigation experience with smooth transitions
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'tabbed-features',
            background: '/images/services/li-service-mobile-app-development-dashboard-v1.webp',
            leftLabel: 'Features',
            title: 'Tabbed Features Showcase',
            rightLabel: 'Interactive Tabs',
            renderBackground: (active: boolean, previous: boolean) => (
                <div className="relative w-full h-full">
                    <img
                        src="/images/services/li-service-mobile-app-development-dashboard-v1.webp"
                        alt="Mobile App Development Dashboard"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f16]/80 via-[#1e3f20]/60 to-[#345830]/80" />
                    {active && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-4xl lg:text-6xl font-light text-white mb-4">
                                    Interactive Features
                                </h3>
                                <p className="text-lg text-white/80 max-w-md">
                                    Explore our comprehensive feature set with interactive tabs
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'vareto-features',
            background: '/images/services/li-service-ai-automation-dashboard-v1.webp',
            leftLabel: 'Excellence',
            title: 'Enterprise Excellence',
            rightLabel: 'Proven Results',
            renderBackground: (active: boolean, previous: boolean) => (
                <div className="relative w-full h-full">
                    <img
                        src="/images/services/li-service-ai-automation-dashboard-v1.webp"
                        alt="AI Automation Dashboard"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f16]/80 via-[#1e3f20]/60 to-[#345830]/80" />
                    {active && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-4xl lg:text-6xl font-light text-white mb-4">
                                    Enterprise Excellence
                                </h3>
                                <p className="text-lg text-white/80 max-w-md">
                                    Proven results with enterprise-grade solutions
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'logo-section',
            background: '/images/services/li-service-cloud-devops-dashboard-v1.webp',
            leftLabel: 'Partners',
            title: 'Trusted Partners',
            rightLabel: 'Industry Leaders',
            renderBackground: (active: boolean, previous: boolean) => (
                <div className="relative w-full h-full">
                    <img
                        src="/images/services/li-service-cloud-devops-dashboard-v1.webp"
                        alt="Cloud DevOps Dashboard"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f16]/80 via-[#1e3f20]/60 to-[#345830]/80" />
                    {active && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-4xl lg:text-6xl font-light text-white mb-4">
                                    Trusted Partners
                                </h3>
                                <p className="text-lg text-white/80 max-w-md">
                                    Industry leaders who trust our solutions
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className="relative">
            {/* Test Component - Simple Fallback */}
            <div className="bg-black py-20 text-center">
                <h2 className="text-4xl text-white mb-4">Phase 2 Scroll Effects</h2>
                <p className="text-white/80">Full-screen scroll component should appear below</p>
            </div>

            {/* Full Screen Scroll Effects */}
            {/* <FullScreenScrollFX
                sections={sections}
                className="phase-2-scroll-effects"
                colors={{
                    text: "rgba(255,255,255,0.95)",
                    overlay: "rgba(26,31,22,0.7)",
                    pageBg: "#1a1f16",
                    stageBg: "#1e3f20",
                }}
                fontFamily='"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif'
                showProgress={true}
                durations={{
                    change: 0.8,
                    snap: 1000,
                }}
                bgTransition="fade"
                parallaxAmount={3}
                header={
                    <div className="text-center">
                        <h1 className="text-6xl lg:text-8xl font-light text-white mb-4">
                            Why Choose
                            <span className="block text-[#4a7856]">Link Innovations</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Discover our comprehensive solutions and proven expertise
                        </p>
                    </div>
                }
                footer={
                    <div className="text-center">
                        <h2 className="text-4xl lg:text-6xl font-light text-white">
                            Ready to Transform
                            <span className="block text-[#4a7856]">Your Business?</span>
                        </h2>
                    </div>
                }
            /> */}

            {/* Original Components (Hidden but still rendered for functionality) */}
            <div className="hidden">
                <InfiniteMenuSection />
                <LinkTabbedFeatures />
                <LinkVaretoFeaturesSection />
                <LogoSection />
            </div>
        </div>
    );
};

export default Phase2ScrollEffects;
