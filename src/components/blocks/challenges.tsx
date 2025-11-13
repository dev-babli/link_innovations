import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  {
    challenge: "Slow performance and scalability issues",
    solution: "Optimize architecture with microservices and cloud integration.",
  },
  {
    challenge: "Poor user experience",
    solution: "Design responsive, accessible, and intuitive UI.",
  },
  {
    challenge: "Security vulnerabilities",
    solution: "Implement advanced authentication and encryption.",
  },
  {
    challenge: "Integration complexity",
    solution: "Enable seamless API and backend integrations.",
  },
  {
    challenge: "Long development cycles",
    solution: "Use agile and DevOps for faster delivery.",
  },
  {
    challenge: "Maintenance overhead",
    solution: "Automate deployment, monitoring, and updates.",
  },
];

export const Challenges = () => {
  return (
    <section id="challenges" className="pb-28 lg:pb-32">
      <div className="container">
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            SOLVING REAL PROBLEMS
          </span>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl text-center">
            Solving the Challenges of Modern Web Development
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, i) => (
              <Card key={i} className="rounded-3xl">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {item.challenge}
                  </h3>
                  <p className="text-muted-foreground">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


