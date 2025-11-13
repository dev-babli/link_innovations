"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MegaMenuProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MegaMenuDropdown = ({ title, isOpen, onClose, children }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
            style={{ top: "80px" }}
          />
          
          {/* Mega Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 shadow-xl z-50"
            style={{ backgroundColor: '#01002a', borderTop: '1px solid rgba(255,255,255,0.1)', top: "100%" }}
          >
            <div className="max-w-[1200px] mx-auto px-8 py-12">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export function McKinseyNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: "Web Development", href: "/services/web-development", description: "Custom web applications" },
    { name: "Mobile Apps", href: "/services/mobile-apps", description: "iOS and Android solutions" },
    { name: "AI Solutions", href: "/services/ai-automation", description: "Intelligent automation" },
    { name: "Cloud Services", href: "/services/cloud-services", description: "Cloud infrastructure" },
    { name: "Cybersecurity", href: "/services/cybersecurity", description: "Security solutions" },
    { name: "Data Analytics", href: "/services/data-analytics", description: "Data-driven insights" },
  ];

  const industries = [];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 border-b border-gray-800 z-50" style={{ backgroundColor: '#01002a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/link_logo.jpg"
                alt="Link Innovations"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
                quality={95}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors text-sm font-medium"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <MegaMenuDropdown
                  title="Services"
                  isOpen={activeDropdown === "services"}
                  onClose={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="group block p-4 rounded hover:bg-blue-900/30 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <h3 className="font-merriweather font-bold text-white group-hover:text-gray-200 mb-1 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-white">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </MegaMenuDropdown>
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors text-sm font-medium"
                >
                  Industries
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <MegaMenuDropdown
                  title="Industries"
                  isOpen={activeDropdown === "industries"}
                  onClose={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="group block p-4 rounded hover:bg-blue-900/30 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <h3 className="font-merriweather font-bold text-white group-hover:text-gray-200 mb-1 transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-white">{industry.description}</p>
                      </Link>
                    ))}
                  </div>
                </MegaMenuDropdown>
              </div>

              <Link
                href="/insights"
                  className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
              >
                Insights
              </Link>

              <Link
                href="/about"
                  className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
              >
                About
              </Link>

              <Link
                href="/contact"
                  className="px-6 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all text-sm font-medium"
              >
                Contact Us
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
            className="fixed inset-0 z-50 lg:hidden overflow-y-auto"
            style={{ backgroundColor: '#01002a', top: "80px" }}
          >
            <div className="px-8 py-6 space-y-6">
              {/* Services Section */}
              <div>
                <h3 className="font-merriweather font-bold text-white mb-4 text-lg">Services</h3>
                <div className="space-y-3 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-white hover:text-gray-200 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries Section */}
              <div>
                <h3 className="font-merriweather font-bold text-white mb-4 text-lg">Industries</h3>
                <div className="space-y-3 pl-4">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block text-white hover:text-gray-200 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <Link
                  href="/insights"
                  className="block font-medium text-white hover:text-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insights
                </Link>
                <Link
                  href="/about"
                  className="block font-medium text-white hover:text-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-6 py-3 bg-blue-600 text-white rounded text-center hover:bg-blue-700 transition-all font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}







