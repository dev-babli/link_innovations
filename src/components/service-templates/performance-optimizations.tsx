/**
 * Performance Optimizations for Service Templates
 * 
 * This file contains utilities and components for optimizing
 * template performance including lazy loading, image optimization, etc.
 */

"use client";

import React, { Suspense, lazy } from "react";
import dynamic from "next/dynamic";

/**
 * Lazy load heavy components to improve initial page load
 */
export const LazyFlowAnimationSection = lazy(() => 
  import("@/components/flow-animation-section").then(mod => ({
    default: mod.FlowAnimationSection
  }))
);

export const LazyShaderShowcase = lazy(() => 
  import("@/components/ui/hero").then(mod => ({
    default: mod.default
  }))
);

export const LazyGalleryHoverCarousel = lazy(() => 
  import("@/components/ui/gallery-hover-carousel").then(mod => ({
    default: mod.default
  }))
);

/**
 * Loading fallback component
 */
export function TemplateLoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse space-y-4 w-full max-w-md">
        <div className="h-8 bg-background-secondary rounded-lg w-3/4"></div>
        <div className="h-4 bg-background-secondary rounded-lg"></div>
        <div className="h-4 bg-background-secondary rounded-lg w-5/6"></div>
      </div>
    </div>
  );
}

/**
 * Optimized image component wrapper
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const Image = dynamic(() => import("next/image"), {
    loading: priority ? undefined : "lazy",
  });

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
}

/**
 * Intersection Observer hook for scroll reveals
 * Optimized with requestAnimationFrame
 */
export function useOptimizedIntersectionObserver(
  threshold: number = 0.1,
  rootMargin: string = "0px"
) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use requestAnimationFrame for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

/**
 * Debounce utility for scroll/resize events
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Memoized section component wrapper
 * Prevents unnecessary re-renders
 */
export const MemoizedSection = React.memo(
  ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return <section className={className}>{children}</section>;
  }
);

MemoizedSection.displayName = "MemoizedSection";


