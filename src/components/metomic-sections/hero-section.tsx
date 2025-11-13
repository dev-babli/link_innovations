import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1F1F2E] to-[#2D2B4A] py-[120px]">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 127, 232, 0.25) 0%, transparent 60%)',
            filter: 'blur(128px)'
          }}
        />
        <div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 122, 89, 0.2) 0%, transparent 60%)',
            filter: 'blur(128px)'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <div className="flex flex-col items-center">
          <h1 className="max-w-4xl text-5xl/[1.1] font-black tracking-[-0.02em] text-text-primary sm:text-6xl/[1.1] lg:text-[72px]/[1.1]">
            Building innovative digital solutions for modern businesses
          </h1>
          <div className="mt-6 space-y-1">
            <p className="text-xl text-[#B3B3B3]">
              Custom web and mobile applications.
            </p>
            <p className="text-xl text-[#B3B3B3]">
              AI-powered automation and analytics.
            </p>
            <p className="text-xl text-[#B3B3B3]">
              Enterprise-grade cloud and security solutions.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-[8px] bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_4px_16px_rgba(255,122,89,0.3)] transition duration-300 ease-in-out hover:bg-accent-orange hover:-translate-y-0.5"
            >
              <span>Get Started Today</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;