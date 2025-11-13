"use client";

import { Code, Database, Globe, Smartphone, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    id: "feature-1",
    title: "Web Development",
    description:
      "Modern, responsive websites built with React, Next.js, and cutting-edge technologies.",
    icon: Globe,
    image: "/images/homepage/feature-section-two/web-development.webp",
    fallback: "/images/homepage/feature-section-two/web-development.webp",
  },
  {
    id: "feature-2",
    title: "Mobile Apps",
    description:
      "Native iOS & Android apps with seamless user experiences.",
    icon: Smartphone,
    image: "/images/homepage/feature-section-two/mobile-applications.webp",
    fallback: "/images/homepage/feature-section-two/mobile-applications.webp",
  },
  {
    id: "feature-3",
    title: "AI Solutions",
    description:
      "Intelligent automation and predictive analytics that transform operations.",
    icon: Zap,
    image: "/images/homepage/feature-section-two/ai-automation.webp",
    fallback: "/images/homepage/feature-section-two/ai-automation.webp",
  },
];

const FeatureSectionTwo = () => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setSelection(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const handleSelection = (index: number) => {
    setSelection(index);
    carouselApi?.scrollTo(index);
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Code className="size-4" />
            <span>Development Services</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Build the Future with Link Innovations
          </h2>
          <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
            From concept to deployment, we create digital solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="lg:px-0! container border-t border-x">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
            <div className="flex flex-col gap-4 p-6 lg:w-1/2 lg:gap-6 lg:p-8">
              <ul className="flex flex-col gap-2">
                {features.map((feature, i) => {
                  const isSelected = selection === i;
                  return (
                    <li
                      key={feature.id}
                      className={`group relative flex cursor-pointer rounded-xl border px-4 py-3 transition-all duration-300 md:px-5 md:py-4 ${isSelected
                        ? "border-border bg-accent shadow-sm"
                        : "hover:border-border hover:bg-accent/30 border-transparent"
                        }`}
                      data-open={isSelected ? "true" : undefined}
                      onClick={() => handleSelection(i)}
                    >
                      <div className="flex w-full items-start gap-3 md:gap-4">
                        <div
                          className={`flex aspect-square w-9 shrink-0 items-center justify-center rounded-lg transition-colors md:w-10 ${isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                            }`}
                        >
                          <feature.icon className="size-4 md:size-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h2
                            className={`mb-1 text-sm font-medium transition-colors md:text-base lg:text-lg ${isSelected
                              ? "text-foreground"
                              : "text-muted-foreground"
                              }`}
                          >
                            {feature.title}
                          </h2>
                          <p className="text-muted-foreground md:group-data-open:opacity-100 line-clamp-2 text-xs transition-all md:text-sm lg:text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative md:w-1/2 lg:w-3/5">
              <div className="border-border overflow-hidden rounded-xl border shadow-sm">
                <Carousel
                  setApi={setCarouselApi}
                  className="aspect-4/5 md:aspect-3/4 lg:aspect-4/5 max-h-[500px] w-full [&>div]:h-full"
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent className="mx-0 h-full w-full">
                    {features.map((feature) => (
                      <CarouselItem key={feature.id} className="px-0">
                        <div className="relative h-full w-full overflow-hidden">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="h-full w-full object-cover object-center transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (target.src !== feature.fallback) {
                                target.src = feature.fallback;
                              }
                            }}
                          />
                          <div className="bg-linear-to-t from-background/80 via-background/40 absolute bottom-0 left-0 right-0 to-transparent p-6">
                            <div className="flex items-start gap-3">
                              <div className="bg-primary text-primary-foreground flex aspect-square w-10 shrink-0 items-center justify-center rounded-lg">
                                <feature.icon className="size-5" />
                              </div>
                              <div>
                                <h2 className="text-foreground text-xl ">
                                  {feature.title}
                                </h2>
                                <p className="text-muted-foreground text-sm">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 pt-8">
          {features.map((_, i) => (
            <button
              key={i}
              className={`size-2 rounded-full transition-all ${selection === i
                ? "bg-primary w-6"
                : "bg-muted hover:bg-muted-foreground/50"
                }`}
              onClick={() => handleSelection(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureSectionTwo };