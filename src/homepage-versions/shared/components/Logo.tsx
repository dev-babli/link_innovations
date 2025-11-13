"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  href?: string;
  priority?: boolean;
}

export default function Logo({
  className = "",
  width = 150,
  height = 45,
  href = "/",
  priority = false,
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const logoContent = (
    <div className={`relative ${className}`}>
      {!imageError ? (
        <Image
          src="/logos/Logo_link (1).jpg"
          alt="Link Innovations"
          width={width}
          height={height}
          className="h-auto w-auto object-contain transition-opacity duration-300 hover:opacity-90"
          priority={priority}
          quality={95}
          onError={() => setImageError(true)}
        />
      ) : (
        <Image
          src="/logos/link_logo.jpg"
          alt="Link Innovations"
          width={width}
          height={height}
          className="h-auto w-auto object-contain transition-opacity duration-300 hover:opacity-90"
          priority={priority}
          quality={95}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Link Innovations Homepage" className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

