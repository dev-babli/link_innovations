"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  gradientClass: string;
  href: string;
}

const services: Service[] = [
  {
    name: "Web Development",
    description:
      "Custom web applications built with modern frameworks. Full-stack solutions with React, Next.js, and TypeScript for responsive and performant websites.",
    imageUrl: "/images/success-story/web-dev.png",
    category: "Development",
    gradientClass: "bg-gradient-to-t from-[#4da99b]/20 to-[#f2994a]/20",
    href: "/services/web-development",
  },
  {
    name: "Mobile Apps",
    description:
      "Native iOS and Android applications with cross-platform solutions. React Native and Flutter for seamless mobile experiences across all devices.",
    imageUrl: "/images/success-story/mobile-app.png",
    category: "Development",
    gradientClass: "bg-gradient-to-t from-[#f1ab70]/20 to-[#e8d99c]/20",
    href: "/services/mobile-apps",
  },
  {
    name: "Cloud Services",
    description:
      "Cloud infrastructure and migration solutions. AWS, Azure, and Google Cloud expertise for scalable cloud architecture and seamless deployments.",
    imageUrl: "/images/success-story/cloud.png",
    category: "Infrastructure",
    gradientClass: "bg-gradient-to-t from-[#e49ca2]/20 to-[#a6d1a9]/20",
    href: "/services/cloud-services",
  },
  {
    name: "AI Solutions",
    description:
      "Machine learning and AI automation services. Natural language processing, computer vision, and intelligent systems to transform your business operations.",
    imageUrl: "/images/success-story/ai-solution.png",
    category: "Innovation",
    gradientClass: "bg-gradient-to-t from-[#f1c40f]/10 to-[#50a1a1]/20",
    href: "/services/ai-automation",
  },
  {
    name: "Data Analytics",
    description:
      "Turn raw data into actionable insights. We build end-to-end analytics platforms with Power BI, Tableau, and AI-driven data visualization.",
    imageUrl: "/images/success-story/data.png",
    category: "Analytics",
    gradientClass: "bg-gradient-to-t from-[#4e9af1]/20 to-[#a1e3f9]/20",
    href: "/services/data-analytics",
  },
  {
    name: "Automation Testing",
    description:
      "Automate your testing lifecycle with Selenium, Cypress, and Playwright. Improve reliability and speed up delivery with continuous QA pipelines.",
    imageUrl: "/images/success-story/testing.png",
    category: "Quality Assurance",
    gradientClass: "bg-gradient-to-t from-[#f0a6ca]/20 to-[#c3b4f1]/20",
    href: "/services/automation-testing",
  },
  {
    name: "Microsoft Managed Services",
    description:
      "Comprehensive Microsoft 365, Azure, and Dynamics 365 management. We help you streamline operations, optimize costs, and improve productivity.",
    imageUrl: "/images/success-story/microsoft.png",
    category: "Management",
    gradientClass: "bg-gradient-to-t from-[#0078D4]/20 to-[#50C7F3]/20",
    href: "/services/microsoft-managed-services",
  },
  {
    name: "Cyber Security",
    description:
      "Protect your business with advanced cybersecurity solutions—threat monitoring, penetration testing, and data protection strategies.",
    imageUrl: "/images/success-story/cyber-sec.png",
    category: "Security",
    gradientClass: "bg-gradient-to-t from-[#FF4B2B]/20 to-[#FF9068]/20",
    href: "/services/cyber-security",
  },
];

interface SuccessStoriesProps {
  limit?: number;
  compact?: boolean;
}

const SuccessStories = ({ limit, compact = false }: SuccessStoriesProps) => {
  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;
  const cardWidthClass = compact ? "md:max-w-[560px] lg:max-w-[600px]" : "max-w-none";
  const imageHeightClass = compact ? "h-[310px] lg:h-[330px]" : "h-[340px]";

  return (
    <section className="relative bg-background-primary py-16 sm:py-20">
      <div className="absolute inset-0 mx-auto max-w-6xl rounded-[48px] bg-gradient-to-br from-white/4 via-white/2 to-transparent blur-2xl opacity-60 pointer-events-none" />
      <div className="container relative mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-[-0.015em] text-text-primary sm:text-[56px] sm:leading-[1.15]">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-14 grid max-w-none grid-cols-1 gap-y-5 gap-x-6 sm:mt-16 md:grid-cols-2 md:gap-y-6 md:gap-x-8 justify-items-center">
          {visibleServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className={`group block overflow-hidden rounded-[28px] bg-background-secondary/95 shadow-[0_18px_50px_rgba(10,15,20,0.12)] border border-border-subtle/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_24px_60px_rgba(10,15,20,0.16)] hover:-translate-y-2 w-full ${cardWidthClass}`}
            >
              {/* Full-Width Image Section */}
              <div className={`relative w-full overflow-hidden rounded-[28px] ${imageHeightClass}`}>
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-[30px] font-semibold leading-[1.3] text-text-primary tracking-[-0.01em]">
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-text-secondary">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-base font-semibold text-text-primary">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full border border-gray-300 bg-white px-6 py-3.5 text-base font-medium !text-black shadow-sm transition hover:bg-black hover:!text-white hover:border-black"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
