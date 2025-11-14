"use client";

import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { FAQ } from "@/components/blocks/faq";
import { Footer } from "@/components/blocks/footer";
import Navigation from "@/new-src/components/sections/navigation";
import RuixenFeatureSection from "@/components/ui/ruixen-feature-section";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Mainline Premium Template
 *
 * By default this renders the premium layout with its static content.
 * Each block component now takes optional props so service pages can
 * override copy or assets without rebuilding the layout.
 */
export default function TemplateMainlinePremium({
  service,
  className,
}: ServiceTemplateProps) {
  const content = service?.content;
  const metrics = Array.isArray(content?.impactMetrics)
    ? content.impactMetrics
    : [];
  const challenges = Array.isArray(content?.challenges)
    ? content.challenges
    : [];
  const solutions = Array.isArray(content?.solutions)
    ? content.solutions
    : [];
  const capabilities = Array.isArray(content?.capabilities)
    ? content.capabilities
    : [];
  const industries = Array.isArray(content?.industries)
    ? content.industries
    : [];
  const technologies = Array.isArray(content?.technologies)
    ? content.technologies
    : [];
  const whyChooseUs = Array.isArray(content?.whyChooseUs)
    ? content.whyChooseUs
    : [];
  const testimonials = Array.isArray(content?.testimonials)
    ? content.testimonials
    : [];

  return (
    <main className={`min-h-screen bg-background ${className || ""}`}>
      <Navigation />
      <Background className="via-muted to-muted/80">
        <Hero content={content} />
        <Features content={content} />
        <ResourceAllocation content={content} />
      </Background>
      {metrics.length > 0 && (
        <section className="py-20">
          <div className="container max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/80">
                {content?.impactMetricsTitle ?? "Impact Metrics"}
              </p>
              <p className="text-muted-foreground/80 mt-3 text-base max-w-2xl mx-auto">
                {content?.impactMetricsDescription ??
                  "Quantifiable outcomes from recent engagements."}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-[28px] border border-white/10 bg-card/80 p-6 text-center shadow-[0_20px_60px_rgba(6,10,19,0.12)]"
                >
                  <p className="text-3xl font-semibold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {metric.metric}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/80 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {(challenges.length > 0 || solutions.length > 0) && (
        <section className="py-20 bg-muted/20">
          <div className="container max-w-6xl grid gap-12 lg:grid-cols-2">
            {challenges.length > 0 && (
              <div className="rounded-[28px] border border-white/10 bg-background/80 p-8 shadow-[0_16px_45px_rgba(6,10,19,0.08)]">
                <h2 className="text-2xl font-semibold text-foreground">
                  {content?.challengesTitle ?? "Key Challenges We Solve"}
                </h2>
                <ul className="mt-6 space-y-4">
                  {challenges.map((item, idx) => (
                    <li
                      key={idx}
                      className="rounded-2xl border border-border/40 bg-background/90 p-5"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {item.challenge}
                      </p>
                      {item.solution && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.solution}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {solutions.length > 0 && (
              <div className="rounded-[28px] border border-white/10 bg-background/80 p-8 shadow-[0_16px_45px_rgba(6,10,19,0.08)]">
                <h2 className="text-2xl font-semibold text-foreground">
                  {content?.solutionsTitle ?? "Signature Solutions"}
                </h2>
                <ul className="mt-6 space-y-4">
                  {solutions.map((item, idx) => (
                    <li
                      key={idx}
                      className="rounded-2xl border border-border/40 bg-background/90 p-5"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      {item.description && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
      {capabilities.length > 0 && (
        <section className="py-20">
          <div className="container max-w-6xl">
            <h2 className="text-center text-3xl font-semibold text-foreground">
              {content?.capabilitiesTitle ?? "Capabilities"}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[28px] border border-white/10 bg-card/80 p-7 shadow-[0_18px_55px_rgba(6,10,19,0.12)]"
                >
                  <p className="text-2xl">{item.icon}</p>
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {industries.length > 0 && (
        <section className="py-20 bg-muted/15">
          <div className="container max-w-6xl">
            <h2 className="text-center text-3xl font-semibold text-foreground">
              {content?.industriesTitle ?? "Industries We Support"}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] border border-white/10 bg-background/85 p-6"
                >
                  <p className="text-lg font-semibold text-foreground">
                    {item.industry}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className="py-20">
        <RuixenFeatureSection content={content} />
      </div>
      <div className="py-16">
        <FAQ content={content} />
      </div>
      <CTAWithShader content={content} />
      <Footer />
    </main>
  );
}

