import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    icon: "💡",
    title: "Custom Web App Development",
    description: "Tailored web applications built for performance and flexibility.",
  },
  {
    icon: "⚙️",
    title: "Frontend Development",
    description: "React, Angular, and Vue-powered user interfaces.",
  },
  {
    icon: "🧩",
    title: "Backend Development",
    description: "Scalable APIs using Node.js, .NET, and Python.",
  },
  {
    icon: "☁️",
    title: "Cloud Integration",
    description: "AWS, Azure, and GCP-based deployments.",
  },
  {
    icon: "🧠",
    title: "AI-Integrated Web Apps",
    description: "Intelligent apps with data-driven automation.",
  },
  {
    icon: "🔒",
    title: "Web Security",
    description: "Secure architecture, role-based access, and compliance layers.",
  },
];

export const Capabilities = () => {
  return (
    <section id="capabilities" className="pb-28 lg:pb-32">
      <div className="container">
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            WHAT WE OFFER
          </span>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl text-center">
            Comprehensive Web Development Capabilities
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, i) => (
              <Card key={i} className="rounded-3xl">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="font-semibold text-xl mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {capability.description}
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


