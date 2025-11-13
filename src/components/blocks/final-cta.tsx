import Link from "next/link";

import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-28 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Ready to Build the Future of Web Applications?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Turn your digital vision into a high-performance, scalable web experience with Link Innovation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


