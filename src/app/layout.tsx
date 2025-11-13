import type { Metadata } from "next";
import { Inter, Merriweather, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../new-src/app/globals.css";
import "../styles/color-system.css";
import "../styles/typography.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import ErrorBoundary from "@/components/ErrorBoundary";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// McKinsey-Inspired Professional Fonts
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Legacy fonts kept for compatibility with existing components
// These can be gradually removed as components are updated

export const metadata: Metadata = {
  title: "Link Innovations - Transform Ideas Into Digital Reality",
  description: "Leading digital innovation agency specializing in web development, mobile apps, AI solutions, and cloud services. We turn complex challenges into intelligent solutions that drive business growth.",
  keywords: ["web development", "mobile apps", "AI solutions", "cloud services", "digital transformation", "technology consulting"],
  authors: [{ name: "Link Innovations" }],
  creator: "Link Innovations",
  publisher: "Link Innovations",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linkinnovations.ai",
    title: "Link Innovations - Transform Ideas Into Digital Reality",
    description: "Leading digital innovation agency specializing in web development, mobile apps, AI solutions, and cloud services.",
    siteName: "Link Innovations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Innovations - Transform Ideas Into Digital Reality",
    description: "Leading digital innovation agency specializing in web development, mobile apps, AI solutions, and cloud services.",
    creator: "@linkinnovations",
  },
  icons: {
    icon: '/logos/link_logo.jpg',
    apple: '/logos/link_logo.jpg',
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${merriweather.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-background-primary`}
      >
        <ErrorReporter />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <VisualEditsMessenger />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

