import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

import { Card, CardContent } from "@/components/ui/card";

type FeatureCard = {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
};

interface FeaturesContent {
  featuresTitle?: string;
  featuresDescription?: string;
  features?: FeatureCard[];
}

interface FeaturesProps {
  content?: Record<string, unknown>;
}

const defaultItems: FeatureCard[] = [
  {
    title: "Custom web application development",
    description:
      "React, Next.js, and TypeScript builds tailored to your roadmap.",
    image: "/mainline_service_template/features/triage-card.svg",
  },
  {
    title: "Enterprise portals & dashboards",
    description: "Data-rich UI with role-based access and realtime insights.",
    image: "/mainline_service_template/features/cycle-card.svg",
  },
  {
    title: "API development & integrations",
    description:
      "Resilient REST/GraphQL services connecting your critical systems.",
    image: "/mainline_service_template/features/overview-card.svg",
  },
];

export const Features = ({ content }: FeaturesProps) => {
  const featuresContent = (content?.featuresSection ?? content ??
    {}) as FeaturesContent;

  const title =
    featuresContent.featuresTitle ?? "Built for modern web product squads";
  const description =
    featuresContent.featuresDescription ??
    "Link Innovation ships full-stack web platforms that balance rapid delivery with maintainable, accessible, and testable codebases.";

  const items =
    Array.isArray(featuresContent.features) &&
    featuresContent.features.length > 0
      ? featuresContent.features.map((card, index) => ({
          ...defaultItems[index % defaultItems.length],
          ...card,
        }))
      : defaultItems;

  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            DESIGN. BUILD. SCALE.
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-xl tracking-tight md:text-2xl lg:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-snug">
            {description}
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0! md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`${item.title} interface`}
                        fill
                        className="object-cover object-left-top ps-4 pt-2"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
                        Visual coming soon
                      </div>
                    )}
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <Link
                    href={item.href ?? "/contact"}
                    className={
                      "group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                    }
                  >
                    <h3 className="font-display max-w-60 text-lg md:text-xl leading-tight font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <div className="rounded-full border p-2">
                      <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                    </div>
                  </Link>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Custom web application development",
    description: "React, Next.js, and TypeScript builds tailored to your roadmap.",
    image: "/mainline_service_template/features/triage-card.svg",
  },
  {
    title: "Enterprise portals & dashboards",
    description: "Data-rich UI with role-based access and realtime insights.",
    image: "/mainline_service_template/features/cycle-card.svg",
  },
  {
    title: "API development & integrations",
    description: "Resilient REST/GraphQL services connecting your critical systems.",
    image: "/mainline_service_template/features/overview-card.svg",
  },
];

export const Features = () => {
  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            DESIGN. BUILD. SCALE.
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-xl tracking-tight md:text-2xl lg:text-3xl">
            Built for modern web product squads
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-snug">
            Link Innovation ships full-stack web platforms that balance rapid
            delivery with maintainable, accessible, and testable codebases.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0! md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} interface`}
                      fill
                      className="object-cover object-left-top ps-4 pt-2"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <Link
                    href="/contact"
                    className={
                      "group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                    }
                  >
                    <h3 className="font-display max-w-60 text-lg md:text-xl leading-tight font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <div className="rounded-full border p-2">
                      <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                    </div>
                  </Link>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
