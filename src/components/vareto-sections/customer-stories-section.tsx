"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const stories = [
  {
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6504849f6cff84629d48be5d_Customer%20Story-Feature_Ada-18.jpg?",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6504848823a852301951660a_Ada-19.png?",
    title: "Ada enhances efficiency with Vareto",
    href: "/customers/ada",
    altImage: "Woman looking at her phone at a desk",
    altLogo: "Ada company logo",
  },
  {
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6453c0f8728f6816c5b5c255_Customer%20Story-Feature_COPD-20.jpg?",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/64889c489f63bc712386d156_Logo_COPD-21.png?",
    title:
      "How Vareto empowers COPD Foundation teams to find faster alignment",
    href: "/customers/copd",
    altImage: "Doctor showing a patient an x-ray on a tablet",
    altLogo: "COPD Foundation logo",
  },
  {
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6425f0f976a87737cd799a79_Customer%20Story-Feature_Honeycomb-22.jpg?",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/64889c5abf8968f83a110b5d_Logo_Honeycomb-23.png?",
    title:
      "From maintenance to strategy: How Vareto empowered Honeycomb's FP&A team to drive growth",
    href: "/customers/honeycomb",
    altImage: "Team collaborating in a modern office",
    altLogo: "Honeycomb company logo",
  },
  {
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/icons/642ee7dacd275c119065e726_Customer%20Story-Feature_Urban%20Footprint-5.jpg?",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/icons/64889c53333ff5b4ff21a111_Logo_Urban%20Footprint-6.png?",
    title: "Accelerating efficiency and collaboration at UrbanFootprint",
    href: "/customers/urbanfootprint",
    altImage: "Close-up of a laptop with code on screen",
    altLogo: "UrbanFootprint company logo",
  },
];

const CustomCarouselPrevious = ({ className }: { className?: string }) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      className={cn(
        "absolute top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-black bg-white hover:bg-neutral-100 disabled:opacity-50 disabled:pointer-events-none hidden lg:flex items-center justify-center z-10",
        className
      )}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label="Previous story"
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63e0e9b5eee0b0d6638e0055_arrow-left-35.svg?"
        width={16}
        height={16}
        alt=""
      />
    </button>
  );
};

const CustomCarouselNext = ({ className }: { className?: string }) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      className={cn(
        "absolute top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-black bg-white hover:bg-neutral-100 disabled:opacity-50 disabled:pointer-events-none hidden lg:flex items-center justify-center z-10",
        className
      )}
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label="Next story"
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63e0e9b53984882f5243c8ae_arrow-right-36.svg?"
        width={16}
        height={16}
        alt=""
      />
    </button>
  );
};

export default function CustomerStoriesSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-text-primary text-[40px] md:text-[56px] font-normal leading-tight md:leading-[1.15] -tracking-[0.015em]">
            Customer Stories
          </h2>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed mt-4">
            Vareto usually pays for itself within the first few months. See how.
          </p>
        </div>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-2 -ml-8">
              {stories.map((story, index) => (
                <CarouselItem
                  key={index}
                  className="pl-8 md:basis-1/2 lg:basis-1/3"
                >
                  <Link href={story.href} className="group block h-full">
                    <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-white shadow-shadow-card transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:shadow-elevated">
                      <div className="relative w-full h-60">
                        <Image
                          src={story.image}
                          alt={story.altImage}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <Image
                          src={story.logo}
                          alt={story.altLogo}
                          width={130}
                          height={24}
                          className="h-6 w-auto object-contain self-start mb-6"
                        />
                        <p className="text-text-primary text-xl font-semibold leading-snug">
                          {story.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CustomCarouselPrevious className="-left-16" />
            <CustomCarouselNext className="-right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}