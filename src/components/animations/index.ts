/**
 * Advanced Scroll Animation System
 * Barrel Exports
 * 
 * Import all animation components from this single file
 */

// Main unified component
export {
  ScrollAnimation,
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  SlideUp,
  SlideDown,
  SlideLeft,
  SlideRight,
  MaskRevealUp,
  MaskRevealDown,
  MaskRevealLeft,
  MaskRevealRight,
  MaskRevealCenter,
  ScaleIn,
  RotateIn,
  BlurIn,
  type ScrollAnimationProps,
} from './AdvancedScrollAnimations';

// Pixelate effects
export {
  PixelateReveal,
  SimplePixelate,
  type PixelateRevealProps,
} from './PixelateReveal';

// Image zoom & Canvas pixelate
export {
  ImageZoomFill,
  CanvasPixelateReveal,
  BlurPixelateReveal,
  type ImageZoomFillProps,
} from './ImageZoomFill';

// Advanced masks
export {
  MaskRevealAdvanced,
  CircularReveal,
  DiagonalWipe,
  IrisReveal,
  VenetianBlinds,
  type MaskRevealAdvancedProps,
} from './MaskRevealAdvanced';

// Stagger groups
export {
  StaggerGroup,
  GridStagger,
  SequentialReveal,
  RadialStagger,
  type StaggerGroupProps,
} from './StaggerGroup';

// GSAP components
export {
  PinnedSection,
  HorizontalScroll,
  SVGPathDraw,
  ScrubText,
  ParallaxLayer,
  Rotate3D,
  BatchAnimation,
  type PinnedSectionProps,
  type HorizontalScrollProps,
  type SVGPathDrawProps,
  type ParallaxLayerProps,
} from './GSAPScrollShowcase';

// Anime.js effects
export {
  MorphingShape,
  ElasticReveal,
  ColorShift,
  AnimatedCounter,
  SVGPathAnimate,
  AnimeStagger,
  WaveAnimation,
  TimelineSequence,
  RippleEffect,
  CustomEasing,
  type MorphingShapeProps,
  type ElasticRevealProps,
  type AnimatedCounterProps,
} from './AnimeJSEffects';

// Re-export config and utils for convenience
export * from '@/lib/animation-config';
export * from '@/lib/animation-utils';

