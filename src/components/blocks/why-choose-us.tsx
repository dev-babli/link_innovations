import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "🚀",
    title: "Performance-Driven Development",
    description: "Optimized architecture for speed and reliability.",
  },
  {
    icon: "🎨",
    title: "Design-Led Engineering",
    description: "Blending UX design and development for better user engagement.",
  },
  {
    icon: "🔒",
    title: "Security-First Approach",
    description: "Enterprise-grade data protection and encryption.",
  },
  {
    icon: "🔁",
    title: "Agile & Collaborative",
    description: "Transparent, iterative delivery with measurable outcomes.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="pb-28 lg:pb-32">
      <div className="container">
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            WHY LINK INNOVATION
          </span>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl text-center">
            Why Choose Link Innovation for Web App Development
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <Card key={i} className="rounded-3xl">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-semibold text-xl mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


