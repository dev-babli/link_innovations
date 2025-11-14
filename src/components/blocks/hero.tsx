import Link from "next/link";

import {
  Accessibility,
  ArrowRight,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroFeature = {
  title?: string;
  description?: string;
  icon?: string;
};

type HeroContent = {
  heroBadge?: string;
  heroTitle?: string;
  heroTitlePrimary?: string;
  heroTitleSecondary?: string;
  heroTagline?: string;
  heroDescription?: string;
  heroSupportingText?: string;
  heroFeatures?: HeroFeature[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
};

const defaultFeatures = [
  {
    title: "Composable architecture",
    description: "API-first foundations for scalable, resilient products.",
    icon: Layers,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Inclusive experience",
    description: "Accessible UI patterns that convert and delight users.",
    icon: Accessibility,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Cloud-native delivery",
    description: "Shipping with CI/CD, observability, and automated QA.",
    icon: Rocket,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Security-first mindset",
    description: "Enterprise-grade auth, encryption, and governance baked in.",
    icon: ShieldCheck,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
] as const;

const iconLookup: Record<string, typeof Layers> = {
  accessibility: Accessibility,
  security: ShieldCheck,
  rocket: Rocket,
  layers: Layers,
};

interface HeroProps {
  content?: Record<string, unknown>;
}

export const Hero = ({ content }: HeroProps) => {
  const hero = (content?.hero ?? content ?? {}) as HeroContent;

  const badge = hero.heroBadge ?? "Enterprise Web Solutions";
  const headingPrimary =
    hero.heroTitlePrimary ??
    hero.heroTitle?.split(" ").slice(0, 2).join(" ") ??
    "Web App";
  const headingSecondary =
    hero.heroTitleSecondary ??
    hero.heroTitle?.split(" ").slice(2).join(" ") ??
    "Development";
  const subHeading =
    hero.heroTagline ?? hero.heroSupportingText ?? "Scalable, Fast & Accessible";
  const description =
    hero.heroDescription ??
    "Modern web applications with robust APIs, inclusive UX, and cloud-native deployment.";

  const primaryCTA = hero.primaryCTA ?? {
    text: "Get an MVP Quote",
    href: "/contact",
  };

  const secondaryCTA = hero.secondaryCTA;

  const features = Array.isArray(hero.heroFeatures)
    ? hero.heroFeatures.map((feature, index) => {
        const fallback = defaultFeatures[index] ?? defaultFeatures[0];
        const iconKey = feature.icon?.toLowerCase() ?? "";
        const IconComponent = iconLookup[iconKey] ?? fallback.icon;
        return {
          title: feature.title ?? fallback.title,
          description: feature.description ?? fallback.description,
          icon: IconComponent,
          gradient: fallback.gradient,
        };
      })
    : defaultFeatures;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Elegant background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Sophisticated ambient lighting */}
      <div className="absolute top-0 left-[20%] w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.06) 50%, transparent 100%)' }} />
      <div className="absolute top-0 right-[15%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(168,85,247,0.06) 50%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-[50%] w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(20,184,166,0.04) 50%, transparent 100%)' }} />
      
      {/* Refined grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Elegant vertical accents */}
      <div className="absolute top-0 left-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-500/8 to-transparent" />
      <div className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-violet-500/8 to-transparent" />
      
      {/* Subtle code elements - more refined */}
      <div className="absolute top-40 left-12 text-emerald-500/4 font-mono text-7xl font-light select-none pointer-events-none tracking-tighter">
        {'< />'}
      </div>
      <div className="absolute bottom-40 right-16 text-violet-500/4 font-mono text-6xl font-light select-none pointer-events-none rotate-12 tracking-tighter">
        {'{ }'}
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto lg:max-w-6xl">
          {/* Refined badge */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/8 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-xl shadow-[0_4px_24px_rgba(16,185,129,0.1)] relative overflow-hidden group transition-all duration-700 hover:scale-105 hover:shadow-[0_8px_32px_rgba(16,185,129,0.15)]">
              {/* Elegant shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 relative z-10" />
              <span className="text-[11px] font-semibold text-foreground/90 relative z-10 uppercase tracking-[0.15em] letter-spacing-wider">
                {badge}
              </span>
            </div>
          </div>

          {/* Main heading - Elegant typography */}
          <div className="text-center lg:text-left mb-16 relative">
            {/* Refined text glows - layered and sophisticated */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-48 bg-gradient-to-r from-emerald-500/12 via-teal-500/10 to-cyan-500/12 blur-3xl rounded-full" />
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[600px] h-40 bg-gradient-to-r from-blue-500/10 via-indigo-500/8 to-violet-500/10 blur-3xl rounded-full" />
              <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[650px] h-44 bg-gradient-to-r from-purple-500/10 via-pink-500/8 to-rose-500/10 blur-3xl rounded-full" />
            </div>
            
            <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-foreground mb-10 leading-[1.05] z-10">
              <span className="relative inline-block mb-2">
                <span className="relative z-10">{headingPrimary}</span>
                <span className="absolute -inset-4 bg-emerald-500/15 blur-3xl -z-10 rounded-2xl" />
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-foreground via-foreground/95 to-foreground bg-clip-text text-transparent">
                  {headingSecondary}
                </span>
                <span className="absolute -inset-4 bg-gradient-to-r from-teal-500/12 via-cyan-500/12 to-blue-500/12 blur-3xl -z-10 rounded-2xl" />
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block mt-2 md:mt-0">
                <span className="relative z-10 bg-gradient-to-r from-foreground via-emerald-600/90 to-foreground bg-clip-text text-transparent font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  {subHeading}
                </span>
                <span className="absolute -inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/12 to-cyan-500/15 blur-3xl -z-10 rounded-2xl" />
              </span>
            </h1>

            {/* Elegant divider */}
            <div className="flex items-center justify-center gap-4 mb-8 relative z-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
            </div>

            <p className="relative text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto lg:mx-0 leading-[1.65] mb-4 z-10 font-light">
              {description}
            </p>
            <p className="relative text-base md:text-lg text-muted-foreground/70 z-10 font-light tracking-wide">
              Engineered for scale, crafted for excellence.
            </p>
          </div>

          {/* Elegant CTA Button */}
          <div className="flex items-center justify-center lg:justify-start mb-16 relative">
            {/* Sophisticated glow effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-24 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-cyan-500/20 blur-3xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            </div>
            
            <Button 
              size="lg" 
              className="relative px-12 py-8 text-base font-semibold tracking-wide uppercase letter-spacing-wider shadow-[0_8px_32px_rgba(16,185,129,0.25)] hover:shadow-[0_12px_48px_rgba(16,185,129,0.35)] hover:scale-[1.02] transition-all duration-500 border border-emerald-500/30 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500" 
              asChild
              style={{
                backgroundColor: 'hsl(142, 71%, 45%)',
                color: 'white',
              }}
            >
              <Link 
                href={primaryCTA.href ?? "/contact"} 
                className="!text-white flex items-center gap-3 relative z-10 group/btn"
                style={{
                  color: 'white !important',
                }}
              >
                <span>{primaryCTA.text ?? "Get an MVP Quote"}</span>
                <ArrowRight className="w-5 h-5 transition-all duration-500 group-hover/btn:translate-x-1" style={{ color: 'white' }} />
              </Link>
            </Button>
          </div>

          {/* Elegant Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative">
            {/* Refined background glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/4 via-teal-500/3 to-cyan-500/4 blur-3xl rounded-3xl opacity-60" />
            
            {features.map((feature, index) => {
              const Icon = feature.icon ?? defaultFeatures[0].icon;
              const gradientColors = [
                "from-emerald-500/12 via-teal-500/10 to-cyan-500/12",
                "from-violet-500/12 via-purple-500/10 to-pink-500/12",
                "from-orange-500/12 via-amber-500/10 to-yellow-500/12",
                "from-green-500/12 via-emerald-500/10 to-teal-500/12",
              ];
              
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "group relative p-8 rounded-3xl overflow-hidden",
                    "hover:-translate-y-2 transition-all duration-700 ease-out"
                  )}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Elegant shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Sophisticated colored glow on hover */}
                  <div className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl",
                    "bg-gradient-to-br", gradientColors[index]
                  )} />
                  
                  {/* Refined border glow */}
                  <div className={cn(
                    "absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md -z-10",
                    "bg-gradient-to-br", gradientColors[index]
                  )} />
                  
                  {/* Inner depth shadows */}
                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.08)] pointer-events-none" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div 
                      className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.18) 100%)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.35)',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)',
                      }}
                    >
                      <Icon className="w-8 h-8 text-foreground/90 group-hover:text-emerald-600 transition-all duration-700" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3.5 group-hover:text-foreground transition-colors duration-500 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed group-hover:text-foreground/70 transition-colors duration-500 font-light">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Elegant bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
