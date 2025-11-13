import { DashedLine } from "@/components/dashed-line";

const companies = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Oracle", logo: "/logos/oracle.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
];

const metrics = [
  {
    metric: "Time-to-market",
    value: "3× faster",
    description: "Rapid delivery through agile development",
  },
  {
    metric: "Performance",
    value: "99.9% uptime",
    description: "Seamless, high-speed experiences",
  },
  {
    metric: "Security",
    value: "Enterprise-grade",
    description: "Encrypted, compliant, and resilient",
  },
  {
    metric: "Engagement",
    value: "+45%",
    description: "Improved user experience and conversions",
  },
];

export const TrustedImpact = () => {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container">
        <div className="space-y-12">
          {/* Trusted By Section */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
              Trusted by Global Brands
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                >
                  <span className="text-muted-foreground text-lg font-medium">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <DashedLine className="mx-auto max-w-[80%]" />

          {/* Impact Metrics Section */}
          <div className="space-y-6">
            <h3 className="text-center text-xl tracking-tight md:text-2xl lg:text-3xl">
              Web Development by the Numbers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {metrics.map((item) => (
                <div
                  key={item.metric}
                  className="text-center space-y-2 p-6 rounded-lg border"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-lg font-semibold">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

