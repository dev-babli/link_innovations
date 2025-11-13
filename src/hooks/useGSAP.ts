import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPOptions {
  scope?: React.RefObject<HTMLElement>;
  dependencies?: any[];
  revertOnUpdate?: boolean;
}

export function useGSAPCustom(
  callback: () => void | (() => void),
  options: UseGSAPOptions = {}
) {
  const { scope, dependencies = [], revertOnUpdate = true } = options;
  const ctx = useRef<gsap.Context>();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    // Create GSAP context
    ctx.current = gsap.context(callback, scope?.current || undefined);

    return () => {
      ctx.current?.revert();
    };
  }, dependencies);

  useIsomorphicLayoutEffect(() => {
    if (revertOnUpdate && ctx.current) {
      ctx.current.revert();
      ctx.current = gsap.context(callback, scope?.current || undefined);
    }
  }, dependencies);

  return ctx.current;
}
