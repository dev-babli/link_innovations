"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Modern, responsive web applications built with cutting-edge technologies",
        image: "/images/service-cards/web-development-service-card.webp",
        fallback: "/images/service-cards/web-development-service-card.webp"
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android",
        image: "/images/service-cards/mobile-app-development-service-card.webp",
        fallback: "/images/service-cards/mobile-app-development-service-card.webp"
    },
    {
        id: 3,
        title: "AI Automation",
        description: "Intelligent automation solutions powered by artificial intelligence",
        image: "/images/service-cards/ai-automation-service-card.webp",
        fallback: "/images/service-cards/ai-automation-service-card.webp"
    },
    {
        id: 4,
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and migration solutions",
        image: "/images/service-cards/cloud-devops-service-card.webp",
        fallback: "/images/service-cards/cloud-devops-service-card.webp"
    },
    {
        id: 5,
        title: "Data Analytics",
        description: "Advanced analytics and business intelligence solutions",
        image: "/images/service-cards/data-analytics-service-card.webp",
        fallback: "/images/service-cards/data-analytics-service-card.webp"
    },
    {
        id: 6,
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets",
        image: "/images/service-cards/cybersecurity-service-card.webp",
        fallback: "/images/service-cards/cybersecurity-service-card.webp"
    },
    {
        id: 7,
        title: "Cloud DevOps",
        description: "Streamlined development and deployment with DevOps practices",
        image: "/images/service-cards/cloud-devops-service-card.webp",
        fallback: "/images/service-cards/cloud-devops-service-card.webp"
    },
    {
        id: 8,
        title: "Automation Testing",
        description: "Comprehensive testing solutions to ensure software quality",
        image: "/images/service-cards/ai-automation-service-card.webp",
        fallback: "/images/service-cards/ai-automation-service-card.webp"
    }
];

const LinkPortfolioShowcase = () => {
    const [isHovered, setIsHovered] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll functionality
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const scrollSpeed = 1; // pixels per frame - increased for smoother movement
        let maxScroll = 0;
        let animationId: number;

        const updateMaxScroll = () => {
            maxScroll = container.scrollWidth / 2; // Half because we duplicate the array
        };

        const autoScroll = () => {
            if (!isHovered && container) {
                scrollAmount += scrollSpeed;
                if (scrollAmount >= maxScroll) {
                    scrollAmount = 0; // Reset to beginning for infinite scroll
                }
                container.scrollLeft = scrollAmount;
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        updateMaxScroll();
        animationId = requestAnimationFrame(autoScroll);

        // Update max scroll on resize
        const handleResize = () => {
            updateMaxScroll();
            scrollAmount = 0; // Reset scroll position on resize
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [isHovered]);

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                ></div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                {/* Portfolio Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                        Our Portfolio of Innovation
                    </h2>
                    <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
                        Delivering excellence across industries with cutting-edge technology solutions.
                        We are a team of passionate developers and designers that love to build amazing
                        products that drive real business results.
                    </p>
                </div>

                {/* Auto-scrolling Services Carousel */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <style jsx>{`
            .carousel-container::-webkit-scrollbar {
              display: none;
            }
            .carousel-container {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
                    <div
                        ref={scrollContainerRef}
                        className="carousel-container flex gap-4 overflow-x-hidden"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {/* Duplicate the services array for infinite scroll effect */}
                        {[...services, ...services].map((service, index) => (
                            <div
                                key={`${service.id}-${index}`}
                                className="flex-shrink-0 w-80 lg:w-96 relative group"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2">
                                    {/* Gradient border effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                    <div className="absolute inset-[2px] bg-slate-900 rounded-2xl"></div>

                                    <div className="relative h-64 lg:h-80">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover rounded-2xl"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = service.fallback;
                                            }}
                                        />
                                        {/* Multi-layer gradient overlay for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Animated gradient border on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                                        </div>

                                        {/* Overlay Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm opacity-90 leading-relaxed text-white">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fade edges for smooth infinite scroll effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent pointer-events-none z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default LinkPortfolioShowcase;