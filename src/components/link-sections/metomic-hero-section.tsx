import React from 'react';
import Image from 'next/image';

const LinkMetomicHeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 lg:py-32">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(124,58,237,0.1)_0%,_transparent_50%)]"></div>
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column - Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                                Building innovative digital solutions for modern businesses
                            </h1>
                            <div className="space-y-3">
                                <p className="text-xl text-gray-300">
                                    Custom web and mobile applications.
                                </p>
                                <p className="text-xl text-gray-300">
                                    AI-powered automation and analytics.
                                </p>
                                <p className="text-xl text-gray-300">
                                    Enterprise-grade cloud and security solutions.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Service Image with Sticky Positioning */}
                    <div className="relative">
                        <div className="sticky top-20">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <div className="relative h-96 lg:h-[500px]">
                                    <Image
                                        src="/images/services/li-service-mobile-app-development-hero-v1.webp"
                                        alt="Mobile App Development Services"
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/images/services/li-service-mobile-app-development-hero-v1.jpg";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <h3 className="text-2xl font-bold mb-2">Mobile App Development</h3>
                                        <p className="text-sm opacity-90">
                                            Native and cross-platform mobile applications for iOS and Android
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkMetomicHeroSection;
