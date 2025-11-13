"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const planningTabs = [
    {
        title: "Financial Planning",
        image: "/images/services/li-service-web-development-dashboard-v1.webp",
        fallback: "/images/services/li-service-web-development-dashboard-v1.jpg",
    },
    {
        title: "Resource Planning",
        image: "/images/services/li-service-mobile-app-development-dashboard-v1.webp",
        fallback: "/images/services/li-service-mobile-app-development-dashboard-v1.jpg",
    },
    {
        title: "Growth Planning",
        image: "/images/services/li-service-ai-automation-dashboard-v1.webp",
        fallback: "/images/services/li-service-ai-automation-dashboard-v1.jpg",
    }
];

export default function LinkVaretoPlanningResolutionSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? planningTabs.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === planningTabs.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="bg-background-secondary text-text-primary">
            <div className="mx-auto max-w-[1200px] px-10 py-24 lg:py-32">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
                    <div className="lg:sticky lg:top-24">
                        <div className="mb-10">
                            <h2 className="text-[56px] font-normal leading-tight tracking-[-0.015em]">
                                Experience planning in high resolution.
                            </h2>
                        </div>
                        <div className="mb-12 max-w-lg">
                            <p className="text-xl leading-relaxed text-text-secondary">
                                Link Innovations pulls in record-level details for employees, vendors, opportunities, and more. From there, you can plan top-down or bottom-up. Zoom in, or zoom out.
                            </p>
                        </div>

                        <div className="border-t border-border-divider">
                            {planningTabs.map((tab, index) => (
                                <button
                                    key={tab.title}
                                    onClick={() => handleTabClick(index)}
                                    className={`w-full border-b border-border-divider py-7 text-left text-3xl font-medium transition-colors duration-300 ${activeIndex === index
                                        ? 'text-text-primary'
                                        : 'text-text-tertiary hover:text-text-primary'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl border border-border-divider shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
                            <Image
                                src={planningTabs[activeIndex].image}
                                alt={`Screenshot for ${planningTabs[activeIndex].title}`}
                                width={1060}
                                height={700}
                                className="h-auto w-full"
                                priority={activeIndex === 0}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    if (target.src !== planningTabs[activeIndex].fallback) {
                                        target.src = planningTabs[activeIndex].fallback;
                                    }
                                }}
                            />
                        </div>
                        <div className="mt-8 flex items-center gap-x-6">
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous slide"
                                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-border-divider bg-white transition-colors hover:bg-secondary"
                                >
                                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next slide"
                                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-border-divider bg-white transition-colors hover:bg-secondary"
                                >
                                    <ChevronRight className="h-5 w-5 text-gray-700" />
                                </button>
                            </div>
                            <div className="flex flex-1 items-center gap-2">
                                {planningTabs.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTabClick(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                        className="h-1 flex-1 rounded-full bg-gray-200"
                                    >
                                        <div
                                            className={`h-full rounded-full ${activeIndex === index ? 'bg-black' : ''
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

