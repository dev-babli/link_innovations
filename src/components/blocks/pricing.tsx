import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "MVP Sprint",
    price: "From $18k",
    cadence: "Fixed scope • 4–8 weeks",
    description: "Design, build, and launch a production-ready MVP.",
    features: [
      "Discovery workshops & UX prototypes",
      "Component-driven frontend in React/Next.js",
      "API layer with testing and documentation",
      "CI/CD pipeline and launch support",
    ],
    cta: "Book a scoping call",
    highlight: true,
  },
  {
    name: "Product Partnership",
    price: "From $12k / month",
    cadence: "Iterative delivery • 3–6 month engagements",
    description: "Scale product velocity with a blended Link Innovation squad.",
    features: [
      "Dedicated PM, design, and engineering pod",
      "Prioritized roadmap & fortnightly releases",
      "Observability, analytics, and experimentation setup",
      "Security reviews and performance tuning",
    ],
    cta: "Schedule a roadmap review",
  },
  {
    name: "Support & Evolution",
    price: "From $5k / month",
    cadence: "Retainer • 12 month programs",
    description: "Protect uptime and keep shipping improvements post-launch.",
    features: [
      "SLA-backed maintenance & monitoring",
      "Bug fixes, enhancements, and feature requests",
      "Accessibility & compliance audits",
      "Quarterly strategy and optimization reports",
    ],
    cta: "Discuss support options",
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Engagement Models
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Choose the partnership that fits your stage. Every engagement ships
            with measurable outcomes, transparent comms, and Link Innovation’s
            senior delivery team.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                plan.highlight && "outline-primary origin-top outline-4",
              )}
            >
              <CardContent className="flex h-full flex-col gap-6 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-foreground text-2xl font-semibold">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                      {plan.cadence}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="mt-auto w-fit"
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <a href="/contact">{plan.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
