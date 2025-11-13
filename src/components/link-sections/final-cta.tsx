"use client";

import React from 'react';
import Image from 'next/image';

const LinkFinalCta = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 lg:py-32">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.2)_0%,_transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(124,58,237,0.2)_0%,_transparent_50%)]"></div>
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                            Join hundreds of companies that trust Link Innovations to deliver cutting-edge technology solutions.
                            Let's build something extraordinary together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-lg hover:shadow-white/25"
                            >
                                Start Your Project Today
                            </a>
                            <a
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
                            >
                                Explore Our Services
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">200+</div>
                                <div className="text-white/80">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
                                <div className="text-white/80">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
                                <div className="text-white/80">Enterprise Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkFinalCta;