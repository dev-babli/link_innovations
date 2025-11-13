'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navStyles = `
  .nav-dark-bg a,
  .nav-dark-bg a span,
  .nav-dark-bg button,
  .nav-dark-bg button *,
  .nav-dark-bg * {
    color: #ffffff !important;
  }
  .nav-dark-bg a:hover,
  .nav-dark-bg a:hover span {
    color: #e5e7eb !important;
  }
`;

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
] as const;

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="sticky top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <>
        <style dangerouslySetInnerHTML={{ __html: navStyles }} />
        <nav 
          className="nav-dark-bg transition-all duration-500 border-b border-gray-800 shadow-2xl py-4 px-6"
          style={{
            backgroundColor: '#01002a',
            color: '#ffffff',
          }}
        >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Link Innovations Homepage" className="flex items-center gap-3">
            <Image
              src="/logos/link_logo.jpg"
              alt="Link Innovations"
              width={150}
              height={45}
              className="h-10 w-auto"
              priority
              quality={95}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium hover:bg-blue-900/30 backdrop-blur-sm transition-all duration-200 rounded-xl"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => {
                  const span = e.currentTarget.querySelector('span');
                  if (span) span.style.color = '#e5e7eb';
                }}
                onMouseLeave={(e) => {
                  const span = e.currentTarget.querySelector('span');
                  if (span) span.style.color = '#ffffff';
                }}
              >
                <span style={{ color: '#ffffff' }}>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors"
              style={{ color: '#ffffff' }}
              onMouseEnter={(e) => {
                const span = e.currentTarget.querySelector('span');
                if (span) span.style.color = '#e5e7eb';
              }}
              onMouseLeave={(e) => {
                const span = e.currentTarget.querySelector('span');
                if (span) span.style.color = '#ffffff';
              }}
            >
              <span style={{ color: '#ffffff' }}>Get Quote</span>
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 text-sm font-medium hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700 rounded-lg"
              style={{ color: '#ffffff' }}
            >
              <span style={{ color: '#ffffff' }}>Start Project</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 bg-blue-900/30 rounded-lg hover:bg-blue-900/50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#ffffff' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#ffffff' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`nav-dark-bg lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          style={{ backgroundColor: '#01002a' }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium hover:bg-blue-900/30 backdrop-blur-sm transition-all duration-200 rounded-xl"
                  style={{ color: '#ffffff' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span style={{ color: '#ffffff' }}>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="#contact"
                  className="block px-4 py-3 text-sm font-medium transition-colors"
                  style={{ color: '#ffffff' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span style={{ color: '#ffffff' }}>Get Quote</span>
                </Link>
                <Link
                  href="#contact"
                  className="block px-4 py-3 text-sm font-medium text-center bg-blue-600 hover:bg-blue-700 rounded-lg"
                  style={{ color: '#ffffff' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span style={{ color: '#ffffff' }}>Start Project</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
      </>
    </motion.header>
  );
}