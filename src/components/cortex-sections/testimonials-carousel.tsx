"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-285291-64f0b289db8f59708c9bcee5_javier-de-vega-ruiz.webp?",
    name: "Sarah Johnson",
    title: "CTO, HealthTech Solutions",
    quote: "\"Link Innovations transformed our patient management system from concept to deployment in just 3 months. Their expertise in healthcare compliance and modern web technologies exceeded our expectations. Our patient engagement has increased by 85%.\"",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/frame-1723498396-27.svg?",
    companyLogoAlt: "HealthTech Solutions",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-077535-franz-relias-bg.png?",
    name: "Michael Chen",
    title: "Director of Engineering, FinanceHub",
    quote: "\"Working with Link Innovations on our mobile banking platform was a game-changer. They delivered a secure, scalable solution that our customers love. The team's attention to security and user experience is unmatched.\"",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/relias-28.svg?",
    companyLogoAlt: "FinanceHub",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-700114-662bb585c4a3de5c98953d3b_shaun-mccormick-photo-1.webp?",
    name: "David Martinez",
    title: "VP of Technology, RetailPro",
    quote: "\"The e-commerce platform Link Innovations built for us has revolutionized our online sales. The AI-powered recommendation engine alone increased our conversion rate by 45%. Outstanding work from start to finish.\"",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/press-center-_-bigcommerce-6-1-29.svg?",
    companyLogoAlt: "RetailPro",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-329039-amanda-jackson.png?",
    name: "Jennifer Williams",
    title: "Operations Manager, ManufactureMax",
    quote: "\"Link Innovations developed a comprehensive IoT monitoring system for our factory. Real-time analytics have reduced our downtime by 60% and increased productivity significantly. Their Industry 4.0 expertise is exceptional.\"",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/rapid7-30.svg?",
    companyLogoAlt: "ManufactureMax",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-355667-sven-diebold.png?",
    name: "Robert Thompson",
    title: "Dean of Technology, EduLearn University",
    quote: "\"The learning management platform delivered by Link Innovations has transformed how we deliver education. Student engagement is up 70%, and faculty love the intuitive interface. A truly modern solution for modern education.\"",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/workleap-dark-31.svg?",
    companyLogoAlt: "EduLearn University",
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-background-secondary py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center text-text-primary max-w-4xl mx-auto mb-12 lg:mb-16">
          Trusted by Leading Organizations Worldwide
        </h2>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full md:basis-5/6 lg:basis-4/5 xl:basis-3/4">
                <div className="p-1">
                  <div className="flex flex-col items-center text-center bg-background-tertiary p-8 rounded-xl border border-border-subtle shadow-md min-h-[450px] sm:min-h-[400px] md:min-h-[380px] lg:min-h-[420px] justify-between">
                    <div className="flex flex-col items-center">
                      <Image
                        src={testimonial.imageSrc}
                        alt={`Photo of ${testimonial.name}`}
                        width={88}
                        height={88}
                        className="rounded-full object-cover mb-6"
                      />
                      <blockquote className="mb-6">
                        <h4 className="text-xl md:text-2xl font-medium leading-normal text-text-primary">
                          {testimonial.quote}
                        </h4>
                      </blockquote>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto pt-6">
                      <div className="text-center sm:text-left">
                        <p className="font-semibold text-text-primary">{testimonial.name}</p>
                        <p className="text-sm text-text-tertiary">{testimonial.title}</p>
                      </div>
                      <Image
                        src={testimonial.companyLogoSrc}
                        alt={testimonial.companyLogoAlt}
                        width={120}
                        height={28}
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center justify-center gap-2.5 pt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${current === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="px-6 py-3 h-auto">
            <Link href="/contact">
              Start Your Project
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}