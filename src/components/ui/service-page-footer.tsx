"use client";

import React from "react";
import Link from "next/link";

export function ServicePageFooter() {
  return (
    <footer className="bg-[#2a2a2a] border-t border-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="px-4 py-2 bg-[#3a3a3a] rounded text-white text-sm font-medium">
            Logo
          </div>

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

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-[#3a3a3a] border border-gray-400"></div>
            <div className="w-6 h-6 rounded-full bg-[#3a3a3a] border border-gray-400"></div>
            <div className="w-6 h-6 rounded-full bg-[#3a3a3a] border border-gray-400"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

