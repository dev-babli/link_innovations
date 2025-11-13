import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    industry: "FinTech",
    example: "Secure payment gateways, dashboards",
  },
  {
    industry: "Healthcare",
    example: "HIPAA-compliant patient portals",
  },
  {
    industry: "Retail",
    example: "eCommerce platforms with real-time inventory",
  },
  {
    industry: "Manufacturing",
    example: "IoT monitoring and predictive maintenance",
  },
  {
    industry: "Education",
    example: "LMS portals and student engagement tools",
  },
  {
    industry: "Travel",
    example: "Booking systems and AI-driven recommendations",
  },
];

const technologies = [
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express",
  ".NET",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Azure",
];

export const IndustriesStack = () => {
  return (
    <section id="industries-stack" className="pb-28 lg:pb-32">
      <div className="container">
        <div className="space-y-12">
          {/* Industries Section */}
          <div className="space-y-6">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl text-center">
              Powering Digital Transformation Across Industries
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((item, i) => (
                <Card key={i} className="rounded-3xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2">
                      {item.industry}
                    </h3>
                    <p className="text-muted-foreground">{item.example}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <DashedLine className="mx-auto max-w-[80%]" />

          {/* Tech Stack Section */}
          <div className="space-y-6">
            <h3 className="text-xl tracking-tight md:text-2xl lg:text-3xl text-center">
              Our Technology Stack
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-lg border bg-muted/50 text-sm font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


