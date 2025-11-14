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
  icon?: string;
};

interface FeaturesContent {
  featuresTitle?: string;
  featuresDescription?: string;
  features?: FeatureCard[];
  capabilitiesTitle?: string;
  capabilitiesDescription?: string;
  capabilities?: FeatureCard[];
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
    featuresContent.featuresTitle ??
    featuresContent.capabilitiesTitle ??
    "Built for modern web product squads";
  const description =
    featuresContent.featuresDescription ??
    featuresContent.capabilitiesDescription ??
    "Link Innovation ships full-stack web platforms that balance rapid delivery with maintainable, accessible, and testable codebases.";

  const items =
    (Array.isArray(featuresContent.features) &&
      featuresContent.features.length > 0
      ? featuresContent.features
      : Array.isArray(featuresContent.capabilities) &&
          featuresContent.capabilities.length > 0
        ? featuresContent.capabilities
        : defaultItems
    ).map((card, index) => ({
      ...defaultItems[index % defaultItems.length],
      ...card,
    }));

  return (
    <section
      id="feature-modern-teams"
      className="relative overflow-hidden py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/15" />
      <div className="container relative">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            DESIGN. BUILD. SCALE.
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-start gap-6 md:gap-10 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-10 rounded-[32px] border border-white/10 bg-card/80 shadow-[0_30px_80px_rgba(6,10,19,0.12)] md:mt-14 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col divide-y md:divide-y-0 md:divide-x divide-border/40">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 flex-col">
                <div className="flex-1 p-6 lg:p-8">
                  <div className="relative aspect-[1.28/1] overflow-hidden rounded-2xl bg-muted/40">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`${item.title} interface`}
                        fill
                        className="object-cover object-left-top"
                      />
                    ) : item.icon ? (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-4xl">
                        {item.icon}
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
                        Visual coming soon
                      </div>
                    )}
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4 md:items-center">
                    <div>
                      <h3 className="font-display text-lg md:text-xl leading-tight font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <Link
                      href={item.href ?? "/contact"}
                      className="inline-flex items-center rounded-full border border-border/60 p-3 text-muted-foreground transition hover:border-foreground/50 hover:text-foreground"
                      aria-label={`Explore ${item.title}`}
                    >
                      <ChevronRight className="size-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
