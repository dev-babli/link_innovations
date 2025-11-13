"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function ServicePageHeader() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#2a2a2a] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="Link Innovations Homepage" className="flex items-center">
            <div className="px-4 py-2 bg-[#3a3a3a] rounded text-white text-sm font-medium">
              Logo
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/services"
              className="text-[#d3d3d3] hover:text-white text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="text-[#d3d3d3] hover:text-white text-sm font-medium transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/contact"
              className="text-[#d3d3d3] hover:text-white text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

