"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a46d745969fc10692d9fae_Fakebrand_205-4.png", alt: "sample logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a46d74e1b7d5538d9a030a_Fakebrand_206-5.png", alt: "sample logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a46d74beeb7f92e488d779_Fakebrand_202-6.png", alt: "sample logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a46d744ccac3dc2d99b007_Fakebrand_204-7.png", alt: "sample logo" },
];

// Enhanced Background with #F5F3EF Color Tones and Vertical Stripe Pattern
const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* Base Gradient Background - Tones of #F5F3EF */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#F7F5F1] via-[#F5F3EF] to-[#F2F0EC]" />

    {/* Subtle Vertical Stripe Pattern */}
    <div className="absolute inset-0 flex">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className={`w-[4.166666%] h-full ${i % 2 === 0 ? '' : 'bg-black/[0.02]'}`}
        />
      ))}
    </div>

    {/* Subtle Texture Overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}
    />

    {/* Soft Gradient Overlays */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F2F0EC]/50 to-transparent" />
    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F7F5F1]/30 to-transparent" />
    <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F2F0EC]/30 to-transparent" />
  </div>
);

const LogoTicker = () => (
  <div className="mt-16 sm:mt-24 lg:mt-32">
    <div className="relative w-full overflow-hidden group">
      <style jsx global>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                @keyframes shimmer {
                  0% { transform: translateX(-100%) skewX(-15deg); }
                  100% { transform: translateX(200%) skewX(-15deg); }
                }
            `}</style>

      <div className="flex animate-[marquee_25s_linear_infinite]">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center mx-6">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={40}
              className="object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7F5F1] to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F2F0EC] to-transparent pointer-events-none"></div>
    </div>
  </div>
);


export default function ShaderShowcase() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24" style={{ background: 'linear-gradient(to bottom, #F7F5F1, #F5F3EF, #F2F0EC)' }}>
      <style jsx global>{`
                .hero-image-text-white h3,
                .hero-image-text-white p {
                    color: #ffffff !important;
                }
                .hero-image-text-black h3,
                .hero-image-text-black p {
                    color: #000000 !important;
                }
            `}</style>
      <HeroBackground />
      <div className="container relative z-10">
        {/* Transparent Glassmorphic Container Box - Wraps All Content */}
        <div className={`relative rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-12 xl:p-16 backdrop-blur-xl bg-transparent border border-transparent shadow-none transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {/* Glassmorphic Effect Layers - Fully Transparent */}
          <div className="absolute inset-0 rounded-3xl lg:rounded-[2.5rem] bg-transparent backdrop-blur-md" />
          <div className="absolute inset-0 rounded-3xl lg:rounded-[2.5rem] bg-transparent backdrop-blur-sm" />

          {/* Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 lg:gap-x-16 items-center">
            {/* Left Column - Text Content */}
            <div className="hero-text text-center lg:text-left relative">
              <h1 className={`text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Ready to Transform Your Business?
              </h1>
              <p className={`text-lg lg:text-xl text-[#4a4a4a] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Partner with Link Innovations to build software that scales with your business. From web applications to mobile apps and custom solutions, we deliver clarity, craftsmanship, and care.
              </p>

              {/* Buttons Container */}
              <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 transition-all duration-1000 ease-in-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Primary CTA Button */}
                <a
                  href="/contact"
                  className="group relative rounded-full px-8 py-4 bg-white text-[#1a1a1a] font-medium text-base flex items-center gap-3 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.15)] overflow-hidden"
                >
                  {/* Button Background Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Hover illumination effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] transition-opacity duration-300" />

                  <span className="relative z-10">Get Started</span>
                  <div className="relative z-10 bg-[#1a1a1a]/10 rounded-full p-1.5 flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight className="w-5 h-5 text-[#1a1a1a] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                  </div>
                </a>

                {/* Secondary CTA Button - Glassmorphic */}
                <a
                  href="/contact"
                  className="group relative rounded-full px-8 py-4 bg-white/30 backdrop-blur-md border border-white/60 text-[#1a1a1a] font-medium text-base transition-all duration-300 hover:bg-white/40 hover:border-white/80 hover:scale-[1.05] hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]"
                >
                  <span className="relative z-10">Schedule a Call</span>
                </a>
              </div>
            </div>

            {/* Right Column - Dashboard Mockup */}
            <div className="relative mt-16 lg:mt-0 h-[450px] lg:h-[550px]">
              {/* Main Dashboard Card */}
              <div className={`absolute w-[85%] sm:w-[70%] lg:w-[420px] left-0 top-1/2 lg:top-auto lg:bottom-0 -translate-y-1/2 lg:translate-y-0 transition-all duration-1000 ease-in-out transform-gpu delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                <div className="group relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-700 ease-in-out hover:scale-[1.02] hover:shadow-[0_30px_80px_-12px_rgba(0,0,0,0.6)]">
                  {/* Illumination effect from behind */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 ease-in-out -z-10" />
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-pink-300/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 ease-in-out -z-10" />

                  <Image
                    src="/freepik__create-a-image-like-the-prompt-below-but-for-conta__40693.jpeg"
                    alt="Web and mobile development interface"
                    width={420}
                    height={280}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    priority
                  />

                  {/* Text reveal on hover - White text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-end justify-center pb-6">
                    <div className="hero-image-text-white text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                      <h3 className="text-xl font-bold mb-2">Web & Mobile Development</h3>
                      <p className="text-sm">Build scalable applications that grow with your business</p>
                    </div>
                  </div>

                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className={`absolute w-[75%] sm:w-[60%] lg:w-[360px] right-0 top-1/2 lg:top-0 -translate-y-[15%] lg:translate-y-0 transition-all duration-1000 ease-in-out delay-300 transform-gpu ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
                <div className="group relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-700 ease-in-out hover:scale-[1.02] hover:shadow-[0_30px_80px_-12px_rgba(0,0,0,0.6)]">
                  {/* Illumination effect from behind */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 ease-in-out -z-10" />
                  <div className="absolute -inset-2 bg-gradient-to-br from-cyan-300/30 via-blue-300/30 to-indigo-300/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 ease-in-out -z-10" />

                  <Image
                    src="/freepik__create-a-image-like-the-prompt-below-but-for-conta__40695.jpeg"
                    alt="Custom solutions interface"
                    width={360}
                    height={360}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    priority
                  />

                  {/* Text reveal on hover - White text (same style as first card) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-end justify-center pb-6">
                    <div className="hero-image-text-white text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                      <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                      <p className="text-sm">Tailored software solutions designed for your unique needs</p>
                    </div>
                  </div>

                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Logo Carousel */}
        <div className={`transition-opacity duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <LogoTicker />
        </div>
      </div>
    </section>
  );
}
