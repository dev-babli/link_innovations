"use client";

import dynamic from "next/dynamic";
import { ComponentProps } from "react";

// Client-only wrapper for MeshGradient
export const ClientOnlyMeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-pulse" />
    ),
  }
);

// Client-only wrapper for PulsingBorder
export const ClientOnlyPulsingBorder = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.PulsingBorder),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full rounded-full border-2 border-gray-600 animate-pulse" />
    ),
  }
);

// Type exports for TypeScript
export type MeshGradientProps = ComponentProps<typeof ClientOnlyMeshGradient>;
export type PulsingBorderProps = ComponentProps<typeof ClientOnlyPulsingBorder>;

