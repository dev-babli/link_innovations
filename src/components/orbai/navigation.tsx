'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Services', href: '#services' },
  { name: 'Updates', href: '/changelog' },
  { name: 'Contact', href: '/contact' },
] as const;

export default function Navigation() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className="bg-white/70 backdrop-blur-xl border-b border-white/30 pt-3 pb-4 px-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center justify-between w-full max-w-[1350px] mx-auto">
          <Link href="/#hero" aria-label="Homepage">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/svgs/XKwmcGuSwjRsqQwiRhSr6MyK7A-1.svg"
              alt="Link AI Logo"
              width={133}
              height={36}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-x-1">
            {navLinks.map((link) => {
              const isInternalPage = link.href.startsWith('/') && !link.href.startsWith('/#');
              const Component = isInternalPage ? Link : 'a';

              return (
                <Component
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-white/60 backdrop-blur-sm transition-all duration-200 rounded-[10px]"
                >
                  {link.name}
                </Component>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="https://framebase.lemonsqueezy.com/buy/ed1b4c3d-925c-4434-8a7f-de7f9cd40560"
              className="inline-block bg-primary text-primary-foreground text-sm font-medium py-[14px] px-7 rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:scale-105 transform-gpu transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <div className="lg:hidden">
            <div className="w-8 h-8" />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

