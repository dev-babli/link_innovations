import React from 'react';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
{ href: '#', icon: Twitter, 'aria-label': 'Twitter' },
{ href: '#', icon: Instagram, 'aria-label': 'Instagram' },
{ href: '#', icon: Linkedin, 'aria-label': 'LinkedIn' }];


const navLinks = [
{ href: '#', label: 'Features' },
{ href: '#', label: 'Contact' },
{ href: '#', label: 'Projects' },
{ href: '#', label: 'Updates' },
{ href: '#', label: 'Privacy' }];


const Footer = () => {
  return (
    <>
      <footer className="bg-white pt-[120px] pb-[50px] text-center relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-10">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) =>
              <a key={index} href={link.href} className="text-black/50 hover:text-black transition-colors" aria-label={link['aria-label']}>
                  <link.icon className="h-6 w-6" strokeWidth={1.5} />
                </a>
              )}
            </div>

            {/* Logo and Title */}
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_1px_2px_0_rgba(0,0,0,0.1),0_5px_10px_0_rgba(0,0,0,0.1)]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/svgs/6ZRrNs4Gy2rcMzXTLB8Tl2NZ51I-2.svg"
                  alt="Link AI Logo Icon"
                  width={40}
                  height={40} />

              </div>
              <h2 className="text-7xl font-semibold tracking-[-1.44px] text-[#1a1a1a]">
                LINK AI
              </h2>
            </div>
            
            {/* Tagline */}
            <p className="max-w-lg text-xl text-black/70">
              Next-gen AI systems, built for tomorrow's innovators
            </p>
            
            {/* CTA Button */}
            <a
              href="#"
              className="inline-block rounded-xl bg-black px-8 py-4 text-base font-semibold text-white shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform hover:scale-105">

              Get Started
            </a>
            
            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-4">
              {navLinks.map((link) =>
              <a key={link.label} href={link.href} className="group relative text-[15px] text-black/50 transition-colors hover:text-black/80">
                  <span>{link.label}</span>
                  <div className="absolute bottom-[-5px] left-0 h-px w-full origin-center scale-x-0 transform bg-black/10 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              )}
            </nav>
            
            {/* Copyright */}
            <p className="pt-4 text-sm text-black/40">
              LINK AI &copy; 2025. Designed by FrameBase
            </p>
            
          </div>
        </div>
      </footer>
      
      {/* Floating Badge */}
      <a
        href="https://www.framer.com/showcase/link-ai-agency-template/?via=framebase"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-8 right-8 z-50"
        aria-label="Create a free website with Framer, the website builder loved by startups, designers and agencies."
      >
        <div className="transform rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] transition-transform duration-200 group-hover:scale-105">
          Get Link AI
        </div>
      </a>
    </>
  );
};

export default Footer;

