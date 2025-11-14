"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Cloud,
  Code,
  Cpu,
  Menu,
  MessageCircle,
  Settings,
  Shield,
  Smartphone,
  Tags,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu, {
  type MegaMenuItem,
} from "@/components/ui/mega-menu";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) {
        scrollRef.current = true;
      }
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whoWeAre = [
    {
      label: "Inside Link",
      description: "Who we are and how we collaborate with partners.",
      href: "/about#about-overview",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Our Journey",
      description: "From a boutique studio to a global innovation team.",
      href: "/about#our-story",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Our Values",
      description: "Principles that guide every engagement we take on.",
      href: "/about#our-values",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Why Work With Us",
      description: "What sets our teams and delivery approach apart.",
      href: "/about#why-work-with-us",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const whatWeDo = [
    {
      label: "Web Development",
      description: "Composable marketing and content platforms.",
      href: "/services/web-development",
      icon: Code,
    },
    {
      label: "Web App Development",
      description: "Enterprise-grade apps and customer portals.",
      href: "/services/web-app-development",
      icon: Code,
    },
    {
      label: "Mobile App Development",
      description: "Native & cross-platform experiences.",
      href: "/services/mobile-app-development",
      icon: Smartphone,
    },
    {
      label: "Mobile Apps",
      description: "Shared-code apps for faster delivery.",
      href: "/services/mobile-apps",
      icon: Smartphone,
    },
    {
      label: "Cloud Services",
      description: "Secure migration & managed platforms.",
      href: "/services/cloud-services",
      icon: Cloud,
    },
    {
      label: "Cloud DevOps",
      description: "CI/CD pipelines and observability.",
      href: "/services/cloud-devops",
      icon: Cloud,
    },
    {
      label: "AI & Automation",
      description: "Applied AI solutions and copilots.",
      href: "/services/ai-automation",
      icon: Cpu,
    },
    {
      label: "Automation Testing",
      description: "QA automation to ship faster.",
      href: "/services/automation-testing",
      icon: Settings,
    },
    {
      label: "Cybersecurity",
      description: "Threat detection & hardening.",
      href: "/services/cybersecurity",
      icon: Shield,
    },
    {
      label: "Data Analytics",
      description: "Dashboards, BI, and ML insights.",
      href: "/services/data-analytics",
      icon: BarChart,
    },
  ];

  const ourWork = [
    {
      label: "Case Studies",
      description: "A look at outcomes we delivered recently.",
      href: "/use-cases",
      icon: BookOpen,
    },
    {
      label: "Insights & Blog",
      description: "Research, methods, and POVs from the studio.",
      href: "/blog",
      icon: BookOpen,
    },
    {
      label: "Pricing & Engagements",
      description: "Pods, retainers, and fixed-bid launch models.",
      href: "/pricing",
      icon: Tags,
    },
    {
      label: "Talk to Us",
      description: "Get a curated roadmap plan in 24 hours.",
      href: "/contact",
      icon: MessageCircle,
    },
  ];

  const megaMenuItems: MegaMenuItem[] = useMemo(
    () => [
      {
        id: 1,
        label: "Services",
        subMenus: [
          {
            title: "Build",
            items: whatWeDo.slice(0, 4).map((svc) => ({
              label: svc.label,
              description: svc.description,
              icon: svc.icon,
              href: svc.href,
            })),
          },
          {
            title: "Scale",
            items: whatWeDo.slice(4, 8).map((svc) => ({
              label: svc.label,
              description: svc.description,
              icon: svc.icon,
              href: svc.href,
            })),
          },
          {
            title: "Protect",
            items: whatWeDo.slice(8).map((svc) => ({
              label: svc.label,
              description: svc.description,
              icon: svc.icon,
              href: svc.href,
            })),
          },
        ],
      },
      {
        id: 2,
        label: "About us",
        subMenus: [
          {
            title: "The Studio",
            items: whoWeAre.map((item) => ({
              label: item.label,
              description: item.description,
              icon: CheckCircle,
              href: item.href,
            })),
          },
        ],
      },
      {
        id: 3,
        label: "Resources",
        subMenus: [
          {
            title: "Showcase",
            items: ourWork.map((item) => ({
              label: item.label,
              description: item.description,
              icon: item.icon,
              href: item.href,
            })),
          },
        ],
      },
      {
        id: 4,
        label: "Contact",
        link: "/contact",
      },
    ],
    [whoWeAre, whatWeDo, ourWork],
  );

  return (
    <header className="relative z-[100] flex justify-center px-2 sm:px-4">
      <div
        className={cn(
          "relative flex w-full max-w-5xl items-center justify-between gap-0 rounded-[28px] border border-slate-100 bg-white/90 px-3 sm:px-4 py-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-lg transition-all",
          isScrolled ? "mt-1 shadow-[0_10px_24px_rgba(15,23,42,0.12)]" : "mt-3",
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-16 w-auto overflow-hidden rounded-2xl">
            <Image
              src="/logos/Logo_link__1_-removebg-preview.png"
              alt="Link Innovations"
              width={220}
              height={64}
              className="h-16 w-auto object-cover"
              priority
            />
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-center md:justify-center">
          <MegaMenu items={megaMenuItems} />
        </div>

        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-yellow px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_15px_30px_rgba(250,204,21,0.35)] transition hover:bg-accent-yellow/90"
          >
            Book a Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 text-black md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[120] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute inset-x-0 top-0 rounded-b-3xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900">Menu</p>
              <button
                className="rounded-2xl border border-slate-200 p-2 text-slate-600"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 space-y-6">
              <MobileSection title="About us">
                {whoWeAre.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl border border-slate-100 px-4 py-3 text-sm text-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </MobileSection>
              <MobileSection title="Services">
                {whatWeDo.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl border border-slate-100 px-4 py-3 text-sm text-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </MobileSection>
              <MobileSection title="Resources">
                {ourWork.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl border border-slate-100 px-4 py-3 text-sm text-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </MobileSection>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-accent-yellow px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_15px_30px_rgba(250,204,21,0.35)]"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-100 bg-white/80 p-4">
      <button
        className="flex w-full items-center justify-between text-sm font-semibold text-slate-900"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            open ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}

