import { Variants } from "framer-motion";

// Scroll-triggered animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 }
};

// Parallax effects
export const parallaxConfig = {
  slow: { speed: -20 },
  medium: { speed: -30 },
  fast: { speed: -50 }
};

// Magnetic effects for buttons
export const magneticEffect = (x: number, y: number, strength: number = 0.3) => ({
  x: x * strength,
  y: y * strength
});

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Hover animations
export const hoverScale: Variants = {
  hover: { 
    scale: 1.05
  }
};

export const hoverLift: Variants = {
  hover: { 
    y: -8
  }
};

export const hoverGlow: Variants = {
  hover: {
    boxShadow: "0 0 40px rgba(0, 209, 191, 0.3)"
  }
};

// Button animations
export const buttonHover: Variants = {
  hover: { 
    scale: 1.02,
    y: -2
  },
  tap: { 
    scale: 0.98
  }
};

export const rippleEffect = {
  initial: { scale: 0, opacity: 0.6 },
  animate: { scale: 1, opacity: 0 },
  transition: { duration: 0.6 }
};

// Card animations
export const cardHover: Variants = {
  hover: {
    y: -12,
    scale: 1.02,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)"
  }
};

// Icon animations
export const iconBounce: Variants = {
  hover: {
    scale: 1.1,
    rotate: 5
  }
};

export const iconRotate: Variants = {
  hover: {
    rotate: 360
  }
};

// Text animations
export const textGlow: Variants = {
  hover: {
    textShadow: "0 0 20px rgba(0, 209, 191, 0.5)"
  }
};

// Progress animations
export const progressFill = {
  initial: { width: "0%" },
  whileInView: { width: "100%" },
  transition: { duration: 1.5, ease: "easeOut" }
};

// Counter animations
export const counterAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

// Timeline animations
export const timelineItem: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0
  }
};

export const timelineLine: Variants = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1
  }
};

// Loading animations
export const skeletonPulse = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: { duration: 1.5, repeat: Infinity }
  }
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Glassmorphism animations
export const glassmorphismHover: Variants = {
  hover: {
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)"
  }
};

// Particle animations
export const particleFloat: Variants = {
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

// Gradient animations
export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 3, repeat: Infinity }
  }
};
