"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const logosUp = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a70127b855449b70c5ff14_Fake_20Logo_208-1.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a7012708a760adb36255e0_Fake_20Logo_202-2.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a701274df0addd226bdf2e_Fake_20Logo_205-3.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a70127c70239b918860830_Fake_20Logo_206-4.svg",
];

const logosDown = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a701274180c858df689f8b_Fake_20Logo_203-5.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a701274b9f599b7bca7507_Fake_20Logo_207-6.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a70127ff28015ac9fee3f8_Fake_20Logo_201-7.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a70127369f354d650b5176_Fake_20Logo_204-8.svg",
]

const steps = [
  { number: "01", text: "Explore 50+ supported integrations" },
  { number: "02", text: "Securely link your account" },
  { number: "03", text: "Sync and streamline your workflow" },
];

const Integrations = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    <>
      <style>
        {`
          @keyframes scroll-up {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            from { transform: translateY(-50%); }
            to { transform: translateY(0); }
          }
          .animate-scroll-up {
            animation: scroll-up 25s linear infinite;
          }
          .animate-scroll-down {
            animation: scroll-down 25s linear infinite;
          }
        `}
      </style>
      <section
        ref={sectionRef}
        id="integration"
        className="bg-[#F5F3EF] py-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Content */}
            <div className="max-w-xl">
              <h2 className={`text-4xl lg:text-5xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1a1a1a] transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Powerful integrations
              </h2>
              <p className={`mt-4 text-lg leading-relaxed text-[#4a4a4a] transition-all duration-1000 ease-in-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Seamlessly integrate with your favorite tools to streamline
                workflows and keep everything in sync.
              </p>
              <div className={`mt-6 transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Link
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-base font-medium shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                >
                  <span className="!text-white">Get started</span>
                  <ArrowRight className="h-4 w-4 !text-white transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className={`mt-10 space-y-5 transition-all duration-1000 ease-in-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="group flex items-start gap-3 transition-all duration-500 ease-in-out hover:translate-x-1"
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] font-medium text-white text-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                      {step.number}
                    </div>
                    <p className="text-lg leading-relaxed text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#1a1a1a]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Logo Columns */}
            <div className={`flex h-[400px] gap-4 transition-all duration-1000 ease-in-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative flex-1 overflow-hidden rounded-xl">
                <div className="pointer-events-none absolute top-0 z-10 h-16 w-full bg-gradient-to-b from-[#F5F3EF] to-transparent" />
                <div className="flex flex-col gap-3 animate-scroll-up">
                  {[...logosUp, ...logosUp].map((logo, i) => (
                    <div
                      key={i}
                      className="group aspect-square flex items-center justify-center rounded-2xl bg-white shadow-md transition-all duration-300 hover:scale-[1.05] hover:shadow-lg p-4"
                    >
                      <Image
                        src={logo}
                        alt={`Integration logo ${i % logosUp.length}`}
                        width={96}
                        height={96}
                        className="h-full w-auto max-h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute bottom-0 z-10 h-16 w-full bg-gradient-to-t from-[#F5F3EF] to-transparent" />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-xl">
                <div className="pointer-events-none absolute top-0 z-10 h-16 w-full bg-gradient-to-b from-[#F5F3EF] to-transparent" />
                <div className="flex flex-col gap-3 animate-scroll-down">
                  {[...logosDown, ...logosDown].map((logo, i) => (
                    <div
                      key={i}
                      className="group aspect-square flex items-center justify-center rounded-2xl bg-white shadow-md transition-all duration-300 hover:scale-[1.05] hover:shadow-lg p-4"
                    >
                      <Image
                        src={logo}
                        alt={`Integration logo ${i % logosDown.length}`}
                        width={96}
                        height={96}
                        className="h-full w-auto max-h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute bottom-0 z-10 h-16 w-full bg-gradient-to-t from-[#F5F3EF] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integrations;