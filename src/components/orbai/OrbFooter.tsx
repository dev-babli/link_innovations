"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function OrbFooter() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Product",
      items: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Services", href: "#services" },
        { label: "Updates", href: "#updates" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/insights" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="relative bg-orb-darker border-t border-orb-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orb-dark/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Top Section */}
        <div className="text-center mb-16">
          {/* Logo */}
          <Link href="/link-ai-version" className="inline-flex items-center gap-3 mb-6">
            <Image
                src="/logos/link_logo.jpg"
              alt="Link Innovations"
              width={150}
              height={50}
                className="h-10 w-auto"
                quality={95}
              priority
            />
            <span className="text-2xl font-bold text-white">LINK AI</span>
          </Link>

          {/* Tagline */}
          <p className="text-orb-light text-lg mb-8 max-w-2xl mx-auto">
            Transform your business with cutting-edge IT solutions. Built for innovators, scaled for enterprise.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue text-white font-semibold hover:shadow-2xl hover:shadow-orb-purple/50 transition-all"
          >
            Get Started Today
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {links.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-orb-light hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-orb-light hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-orb-light hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-orb-light hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-orb-light hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orb-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-orb-light text-sm">
            <p>© {currentYear} Link Innovations. All rights reserved.</p>
            <p>
              Crafted with precision for the future of IT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}







