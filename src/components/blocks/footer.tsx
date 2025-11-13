import Link from "next/link";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-16 pt-32 lg:pt-40 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 w-full relative z-10">
        {/* Top: Brand & Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-x-12 gap-y-12 lg:gap-y-0 mb-20">
          <div>
            <h5 className="text-2xl font-bold text-foreground mb-3">
              Link Innovations
            </h5>
            <p className="text-base text-muted-foreground leading-relaxed">
              Custom Software Development Studio
            </p>
          </div>
          
          <div className="lg:justify-self-end">
            <h5 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Navigation
            </h5>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Home</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Services</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"></div>

        {/* Middle: Social & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr] items-center gap-y-10 md:gap-y-0 mb-20">
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/company/link-innovations" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/link-innovations" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:hello@linkinnovations.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <a href="mailto:hello@linkinnovations.com" className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-foreground leading-tight justify-self-start md:justify-self-end hover:text-primary transition-colors">
            hello@linkinnovations.com
          </a>
        </div>

        {/* Divider 2 */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16"></div>

        {/* Bottom: Credits */}
        <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between pb-8">
          <div className="flex flex-col items-start gap-y-2 sm:flex-row sm:items-center sm:gap-x-6">
            <span className="text-sm text-muted-foreground">© 2025 Link Innovations. All Rights Reserved.</span>
          </div>
        </div>
      </div>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20">
        <svg
          width="1570"
          height="293"
          viewBox="0 0 1570 293"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <linearGradient
              id="paint0_linear_59_191"
              x1="785"
              y1="0"
              x2="785"
              y2="218.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.41" />
            </linearGradient>
          </defs>
          <text
            x="820"
            y="220"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="200"
            fontWeight="700"
            fontFamily="'Playfair Display', 'Cormorant Garamond', 'EB Garamond', 'Libre Baskerville', 'Merriweather', Georgia, 'Times New Roman', serif"
            fill="url(#paint0_linear_59_191)"
            letterSpacing="4"
          >
            Link Innovations
          </text>
        </svg>
      </div>
    </footer>
  );
}
