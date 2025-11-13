"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export default function GalleryHoverCarousel({
  heading = "Simple & Scalable",
  demoUrl = "#",
  items = [
    {
      id: "item-1",
      title: "Workflow Assessment",
      summary:
        "We begin by examining your existing workflows to identify where IT solutions can deliver the greatest impact for your business.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-02.png",
    },
    {
      id: "item-2",
      title: "Deploy with Confidence",
      summary:
        "Our team develops custom IT systems built around your goals, ensuring safe and reliable deployment with minimal disruption.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-gradient.png",
    },
    {
      id: "item-3",
      title: "Ongoing Support & Optimization",
      summary:
        "After deployment, we provide continuous support and refine your systems to keep them performing at their best and adapting to your needs.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-01.png",
    },
  ],
}: {
  heading?: string;
  demoUrl?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  return (
    <section className="w-full bg-background-primary py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <h3 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
              {heading}
            </h3>
            <p className="text-large-paragraph text-text-secondary">
              A transparent process of collaboration and feedback designed to deliver exceptional results for your business.
            </p>
          </div>
        </div>

        <div className="w-full max-w-full">
          <Carousel
            opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
            className="relative w-full max-w-full"
          >
            <CarouselContent className="hide-scrollbar w-full max-w-full md:ml-4 md:-mr-4">
              {items.map((item) => (
                <CarouselItem key={item.id} className="ml-6 md:max-w-[350px]">
                  <Link href={item.url} className="group block relative w-full h-[300px] md:h-[350px]">
                    <Card className="overflow-hidden rounded-2xl h-full w-full border border-border-subtle bg-background-secondary shadow-[0px_2px_8px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)]">
                      {/* Image */}
                      <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                        <Image
                          width={400}
                          height={300}
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Fade overlay at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      {/* Text Section */}
                      <div className="absolute bottom-0 left-0 w-full px-6 py-6 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-background-secondary/95 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                        <h3 className="text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-text-primary mb-2">{item.title}</h3>
                        <p className="text-base leading-[1.6] text-text-secondary line-clamp-2">
                          {item.summary}
                        </p>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute bottom-4 right-4 border border-border-subtle hover:-rotate-45 transition-all duration-500 rounded-full mt-2 px-0 flex items-center gap-1 text-text-primary hover:text-text-secondary bg-background-secondary"
                        >
                          <ArrowRight className="size-4" />
                        </Button>
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
