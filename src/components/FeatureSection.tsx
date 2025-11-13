"use client";

import { Code, Database, Globe, Smartphone } from "lucide-react";
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
    title: "Custom Software Development",
    description:
      "Build scalable, secure solutions tailored to your business needs.",
    icon: Code,
    image: "/images/homepage/feature-section/custom-software-development.webp",
    fallback: "/images/homepage/feature-section/custom-software-development.webp",
  },
  {
    id: "feature-2",
    title: "Cloud Infrastructure",
    description:
      "Deploy reliable, scalable cloud solutions for modern businesses.",
    icon: Database,
    image: "/images/homepage/feature-section/cloud-infrastructure.webp",
    fallback: "/images/homepage/feature-section/cloud-infrastructure.webp",
  },
  {
    id: "feature-3",
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that users love.",
    icon: Smartphone,
    image: "/images/homepage/feature-section/mobile-app-development.webp",
    fallback: "/images/homepage/feature-section/mobile-app-development.webp",
  },
];

const FeatureSection = () => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const handleSelection = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-12">
          <Badge variant="outline" className="mb-3">
            Our Services
          </Badge>
          <h2 className="">Link Innovations</h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm md:mt-4 md:text-base">
            Transform your business with cutting-edge technology solutions.
          </p>
        </div>
        <div>
          <div className="mx-auto flex max-w-6xl flex-col-reverse gap-6 md:flex-row md:gap-8 lg:gap-16">
            <div className="md:w-1/2 lg:w-2/5">
              <ul className="grid grid-cols-1 gap-3 md:flex md:flex-col md:gap-2">
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
                                <p className="text-muted-foreground mt-1 line-clamp-2 text-xs">
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

              {/* Carousel indicators */}
              <div className="mt-5 flex justify-center gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };