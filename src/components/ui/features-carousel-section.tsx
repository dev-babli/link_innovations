"use client";

import { FeaturesCarousel } from "@/components/ui/features-carousel";

export function FeaturesCarouselSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive suite of technology solutions designed to transform your business
          </p>
        </div>
        <FeaturesCarousel />
      </div>
    </section>
  );
}

