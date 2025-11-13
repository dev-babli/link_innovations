import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-32">
      <div className="flex max-w-7xl mx-auto h-[420px] rounded-3xl items-center justify-center bg-[linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://cdn.cosmos.so/b0e73684-fe1e-4c26-ba5e-4c66c4b116f4?format=jpeg')] bg-cover bg-center">
        <div className="container">
          <div className="text-primary-foreground flex flex-col gap-8 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-medium text-white">
              <Zap className="h-full w-7" /> Innovative
            </div>
            <h2 className="text-white">Transform your business with cutting-edge technology.</h2>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 hover:bg-background/30 hover:text-primary-foreground border-0 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CtaSection };