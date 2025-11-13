"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Circle } from 'lucide-react';

const IdpconEventSection = () => {
  return (
    <section className="bg-background-primary py-12 lg:py-20">
      <div className="container flex flex-col items-center gap-8">
        <h3 className="text-center text-4xl font-semibold leading-[1.3] tracking-[-0.01em] text-text-primary md:text-5xl">
          Partner with Link Innovations
        </h3>
        <div className="relative mt-4 w-full max-w-7xl">
          <div className="lg:grid lg:grid-cols-2">
            <div
              className="relative flex flex-col justify-center gap-8 rounded-t-2xl border border-b-0 border-border-subtle bg-background-secondary p-6 text-center lg:items-start lg:gap-6 lg:rounded-l-2xl lg:rounded-tr-none lg:border-b lg:border-r-0 lg:p-8 lg:text-left"
              style={{
                backgroundImage: 'radial-gradient(ellipse at center, #1A1A1F, #0A0A0B)',
              }}
            >
              <div className="absolute left-6 top-6 rounded-full bg-background-tertiary px-3 py-1.5">
                <p className="font-monospace text-xs font-medium uppercase tracking-[0.05em] text-text-secondary">
                  Your Technology Partner
                </p>
              </div>

              <div className="flex w-full flex-col items-center gap-8 pt-12 lg:items-start lg:gap-6 lg:pt-0">
                <h2 className="text-4xl font-bold text-white lg:text-5xl">
                  Link Innovations
                </h2>

                <p className="text-lg text-text-secondary max-w-md">
                  Building innovative digital solutions for modern businesses across all industries.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
                  <span className="text-base text-text-secondary">200+ Projects</span>
                  <Circle className="h-1 w-1 fill-current text-text-secondary/50" />
                  <span className="text-base text-text-secondary">50+ Enterprise Clients</span>
                  <Circle className="h-1 w-1 fill-current text-text-secondary/50" />
                  <span className="text-base text-text-secondary">7 Core Services</span>
                  <Circle className="h-1 w-1 fill-current text-text-secondary/50" />
                  <span className="text-base text-text-secondary">9 Industries Served</span>
                </div>
              </div>

              <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="/about"
                  className="inline-flex h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border-subtle bg-secondary px-5 py-3 text-base font-semibold text-text-primary transition-colors hover:bg-accent"
                >
                  Learn more about us
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-text-primary px-5 py-3 text-base font-semibold text-background-primary transition-colors hover:bg-gray-200"
                >
                  Start your project
                </a>
              </div>
            </div>

            <a
              href="/portfolio"
              aria-label="View Our Work"
              className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-b-2xl border border-t-0 border-border-subtle lg:aspect-auto lg:rounded-bl-none lg:rounded-r-2xl lg:border-t lg:border-l-0"
            >
              <video
                src="https://a-us.storyblok.com/f/1021527/x/0a2f34c7e1/idpcon-highlights.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background-primary/50 transition-opacity duration-300 group-hover:bg-background-primary/70" />
              <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-4">
                <p className="text-xl font-semibold text-text-primary">Our Portfolio</p>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-text-primary">
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdpconEventSection;