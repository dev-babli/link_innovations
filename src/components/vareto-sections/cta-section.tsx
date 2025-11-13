"use client";

import React from "react";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="relative bg-white overflow-hidden py-24 md:py-32">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63dd12c17bccf309bd148305_illustration-cta-top-37.svg?"
        alt=""
        width={320}
        height={220}
        className="absolute top-0 left-0 pointer-events-none -translate-y-1/4"
        aria-hidden="true"
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63dd131190e59f22788531ff_illustration-cta-bottom-38.svg?"
        alt=""
        width={400}
        height={220}
        className="absolute bottom-0 right-0 pointer-events-none translate-y-1/4"
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[56px] font-normal text-text-primary leading-[1.15] tracking-[-0.015em] mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-[22px] text-text-secondary leading-[1.6] mb-8">
            Ready to transform your business? Contact us today.
          </p>
          <div className="max-w-sm mx-auto">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col items-center gap-4"
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-14 px-5 text-base bg-input-background border border-input rounded-sm placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                aria-label="Your Email Address"
              />
              <button
                type="submit"
                className="w-full h-14 px-8 text-base font-medium text-primary-foreground bg-primary rounded-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;