import React from 'react';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const socialLinks = [
{ href: '#', icon: Twitter, 'aria-label': 'Twitter' },
{ href: '#', icon: Instagram, 'aria-label': 'Instagram' },
{ href: '#', icon: Linkedin, 'aria-label': 'LinkedIn' }];

const footerSections = [
  {
    title: 'Features',
    links: [
      { href: '#', label: 'Features' },
      { href: '#', label: 'Pricing' },
      { href: '#', label: 'Services' },
      { href: '#', label: 'Updates' },
      { href: '#', label: 'Contact' }
    ]
  },
  {
    title: 'Company',
    links: [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Press' },
      { href: '#', label: 'Partners' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Case Studies' },
      { href: '#', label: 'Support' },
      { href: '#', label: 'FAQ' }
    ]
  }
];

const bottomLinks = [
  { href: '#', label: 'Features' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Updates' },
  { href: '#', label: 'Privacy' }
];


const Footer = () => {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#f5f5f5] pt-[160px] pb-[50px] rounded-t-[48px] sm:rounded-t-[64px]">
      {/* Hero Video Background */}
      <video
        src="https://framerusercontent.com/assets/aMPvRVYHFQxBoB0v2qyJln83jI.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,_transparent_0%,#f5f5f5_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        {/* Main Footer Content - Exact Layout from Image */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
          
          {/* Left Section - Brand Identity */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              {/* Logo - Simple dark circle with white symbol */}
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#1a1a1a] rounded-sm"></div>
                </div>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: '#000000' }}>LINK INNOVATIONS</h2>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#000000' }}>
              Next-gen AI systems, built for tomorrow's innovators
            </p>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex flex-col md:flex-row gap-12">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-sm font-semibold mb-4" style={{ color: '#000000' }}>{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-sm transition-colors hover:text-gray-600"
                        style={{ color: '#000000' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Section - Social Media and CTA */}
          <div className="flex flex-col items-start lg:items-end space-y-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#333333] transition-colors" 
                  aria-label={link['aria-label']}
                >
                  <link.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            
            {/* CTA Button - Exact match to image */}
            <a
              href="#"
              className="footer-cta-button inline-flex items-center gap-2 bg-[#1a1a1a] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#333333] transition-colors"
              style={{ color: '#ffffff' }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" style={{ color: '#ffffff' }} />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#000000' }}>
              © 2024 Link Innovations. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {bottomLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-sm transition-colors hover:text-gray-600"
                  style={{ color: '#000000' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;