"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Code,
  Smartphone,
  Cloud,
  Cpu,
  BarChart,
  Server,
  Settings,
  CheckCircle,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "/about",
      label: "About",
      dropdown: [
        {
          label: "About Us",
          description:
            "We are committed to innovation, excellence, and creating value for our clients.",
          image: "/images/navigation/about-us.avif",
          href: "/about",
          icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
        },
      ],
    },
    {
      href: "/services",
      label: "Services",
      dropdown: [
        {
          label: "Web Development",
          href: "/services/web-development",
          icon: <Code className="h-6 w-6 text-indigo-600" />,
          description: "Build modern and responsive websites.",
          image: "/images/navigation/web-dev.avif",
        },
        {
          label: "Mobile Apps",
          href: "/services/mobile-apps",
          icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
          description: "Native and cross-platform mobile apps.",
          image: "/images/navigation/mobile.avif",
        },
        {
          label: "Cloud Services",
          href: "/services/cloud-services",
          icon: <Cloud className="h-6 w-6 text-indigo-600" />,
          description: "Secure and scalable cloud solutions.",
          image: "/images/navigation/cloud.avif",
        },
        {
          label: "AI Solutions",
          href: "/services/ai-solutions",
          icon: <Cpu className="h-6 w-6 text-indigo-600" />,
          description: "Intelligent AI systems to optimize operations.",
          image: "/images/navigation/ai.avif",
        },
        {
          label: "Cyber Security",
          href: "/services/cybersecurity",
          icon: <Shield className="h-6 w-6 text-indigo-600" />,
          description: "Protect your digital assets and networks.",
          image: "/images/navigation/cybersecurity.avif",
        },
        {
          label: "Automation Testing",
          href: "/services/automation",
          icon: <Settings className="h-6 w-6 text-indigo-600" />,
          description: "Streamline workflows and improve efficiency.",
          image: "/images/navigation/automation.avif",
        },
        {
          label: "Microsoft Managed Services",
          href: "/services/microsoft-managed",
          icon: <Server className="h-6 w-6 text-indigo-600" />,
          description: "Manage your Microsoft cloud infrastructure.",
          image: "/images/navigation/microsoft.avif",
        },
        {
          label: "Data Analytics",
          href: "/services/data-analytics",
          icon: <BarChart className="h-6 w-6 text-indigo-600" />,
          description: "Unlock insights and drive data-driven decisions.",
          image: "/images/navigation/data-analytics.jpg",
        },
      ],
    },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const NavLinkComponent = ({
    href,
    label,
    dropdown,
  }: {
    href: string;
    label: string;
    dropdown?: {
      label: string;
      href: string;
      icon: React.ReactNode;
      description: string;
      image: string;
    }[];
  }) => {
    if (dropdown) {
      const isOpen = hoveredDropdown === label;
      const isAbout = label === "About";

      return (
        <div
          className="relative"
          onMouseEnter={() => setHoveredDropdown(label)}
          onMouseLeave={() => {
            setHoveredDropdown(null);
            setHoveredItem(null);
          }}
        >
          {/* Main button */}
          <button className="flex items-center text-black text-base font-medium px-4 py-2 hover:text-indigo-600 transition-colors whitespace-nowrap">
            {label}
            <ChevronDown
              className={cn(
                "ml-1 h-4 w-4 text-black transition-transform duration-300",
                isOpen ? "rotate-180" : "rotate-0"
              )}
            />
          </button>

          {/* Dropdown menu */}
          <div
            className={cn(
              "absolute top-full left-1/2 mt-8 transform -translate-x-1/2 z-50 transition-all duration-500 origin-top scale-95",
              isOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-4 pointer-events-none"
            )}
          >
            <div
              className={cn(
                "relative flex w-full bg-white backdrop-blur-md shadow-2xl rounded-2xl border-t-5 border-gray-800 overflow-hidden",
                isAbout ? "flex-col items-center p-8 w-[60rem]" : "flex-row"
              )}
            >
              {isAbout ? (
                // About Us dropdown (single column)
                dropdown.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-4"
                  >
                    <span className="text-gray-900 text-xl font-semibold">
                      {item.label}
                    </span>
                    <p className="text-gray-500 text-base text-center max-w-3xl">
                      {item.description}
                    </p>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md mt-4">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>
                    <Link
                      href={item.href}
                      className="mt-5 text-white px-6 py-3 w-[400px] text-center whitespace-nowrap rounded-xl font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-400/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Explore {item.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))
              ) : (
                // Services dropdown (two columns)
                <>
                  {/* Left side: first 4 items */}
                  <div className="flex flex-1 p-4 space-x-2">
                    <div className="flex flex-col flex-1 space-y-1 border-r border-gray-100 pr-2">
                      {dropdown.slice(0, 4).map((item) => (
                        <div
                          key={item.label}
                          onMouseEnter={() => setHoveredItem(item.label)}
                          className="flex flex-col gap-1 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 transform group-hover:scale-110 group-hover:text-indigo-600 transition-transform duration-300">
                              {item.icon}
                            </div>
                            <div className="flex flex-col relative">
                              <span className="text-gray-900 font-semibold whitespace-nowrap group-hover:text-indigo-700 transition-colors">
                                {item.label}
                              </span>
                              <span className="text-gray-500 text-sm leading-snug relative">
                                {item.description}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right side: remaining items */}
                    <div className="flex flex-col flex-1 space-y-1 pl-2">
                      {dropdown.slice(4).map((item) => (
                        <div
                          key={item.label}
                          onMouseEnter={() => setHoveredItem(item.label)}
                          className="flex flex-col gap-1 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 transform group-hover:scale-110 group-hover:text-indigo-600 transition-transform duration-300">
                              {item.icon}
                            </div>
                            <div className="flex flex-col relative">
                              <span className="text-gray-900 font-semibold whitespace-nowrap group-hover:text-indigo-700 transition-colors">
                                {item.label}
                              </span>
                              <span className="text-gray-500 text-sm leading-snug relative">
                                {item.description}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right side: image + button */}
                  <div className="hidden md:flex flex-col items-center w-96 px-4 py-4 flex-shrink-0">
                    {(hoveredItem || dropdown[0].label) &&
                      dropdown
                        .filter(
                          (item) =>
                            item.label === (hoveredItem || dropdown[0].label)
                        )
                        .map((item) => (
                          <div
                            key={item.label}
                            className="flex flex-col items-center w-full"
                          >
                            <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-md">
                              <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            </div>

                            <Link
                              href={item.href}
                              className="mt-5 text-white px-6 py-3 w-[340px] text-center whitespace-nowrap rounded-xl font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-400/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                              Explore {item.label}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        href={href}
        className="text-black text-base font-medium px-4 py-2 hover:text-indigo-600 transition-colors whitespace-nowrap"
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-[100] flex justify-center">
      <div
        className={cn(
          "relative flex items-center h-[80px] mt-6 bg-white/90 backdrop-blur-md rounded-[40px] p-4 pl-5 transition-shadow duration-300",
          isScrolled
            ? "shadow-[0_1px_20px_0_rgba(224,215,198,0.5)]"
            : "shadow-none"
        )}
      >
        <Link href="/" className="flex-shrink-0 mr-4">
          <div className="relative h-20 w-auto overflow-hidden rounded-[20px]">
            <Image
              src="/logos/Logo_link__1_-removebg-preview.png"
              alt="Link Innovations"
              width={300}
              height={90}
              className="h-20 w-auto object-cover rounded-[20px]"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-center flex-grow">
          <nav className="flex items-center bg-black/[.04] rounded-full p-1">
            {navLinks.map((link) => (
              <NavLinkComponent
                key={link.label}
                href={link.href}
                label={link.label}
                dropdown={link.dropdown}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
