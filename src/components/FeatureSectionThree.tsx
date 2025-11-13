import { PocketKnife, Code, Database, Link } from "lucide-react";
import React from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    title: "Custom Software Solutions",
    description: "Tailored applications built for your business needs.",
    icon: Code,
    image: "/images/homepage/feature-section-three/custom-software-solutions.webp",
    fallback: "/images/homepage/feature-section-three/custom-software-solutions.webp",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for growth.",
    icon: Database,
    image: "/images/homepage/feature-section-three/cloud-infrastructure-platform.webp",
    fallback: "/images/homepage/feature-section-three/cloud-infrastructure-platform.webp",
  },
  {
    title: "Enterprise Integration",
    description: "Seamless connectivity across your tech ecosystem.",
    icon: Link,
    image: "/images/homepage/feature-section-three/enterprise-integration.webp",
    fallback: "/images/homepage/feature-section-three/enterprise-integration.webp",
  },
];
const FeatureSectionThree = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto">
      <div className="">
        <div className="container flex flex-col gap-6  py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="bg-card w-fit gap-1 px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <PocketKnife className="size-4" />
            <span>Solutions</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Link Innovations: IT Excellence
          </h2>
          <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
            Transform your business with cutting-edge technology solutions.
          </p>
        </div>
      </div>

      <div className="lg:px-0! container border-t border-x">
        <div className="items-center">
          <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative isolate pt-5 text-start lg:pt-20"
              >
                <h3 className="mt-2 px-4 text-lg font-semibold tracking-tight lg:px-8">
                  {item.title}
                </h3>
                <p className="text-muted-foreground pb-6 pt-2 lg:px-8">
                  {item.description}
                </p>
                <div className="border-t max-h-88 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.description}`}
                    width={400}
                    height={300}
                    className="bg-muted object-cover dark:invert"
                    loading="lazy"
                    unoptimized={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { FeatureSectionThree };