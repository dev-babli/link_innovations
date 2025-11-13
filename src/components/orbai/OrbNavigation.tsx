"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function OrbNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Services", href: "#services" },
    { name: "Updates", href: "#updates" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-orb-dark/80 backdrop-blur-xl border-b border-orb-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/link-ai-version" className="flex items-center gap-2">
              <Image
                src="/logos/link_logo.jpg"
                alt="Link Innovations"
                width={120}
                height={40}
                className="h-8 w-auto"
                quality={95}
                priority
              />
              <span className="text-xl font-bold text-white">LINK AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-orb-light hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue text-white font-semibold hover:shadow-lg hover:shadow-orb-purple/50 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-orb-darker lg:hidden"
            style={{ top: "80px" }}
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-xl text-orb-light hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link
                href="/contact"
                className="block w-full px-6 py-4 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue text-white text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}







