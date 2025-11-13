'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingCart, 
  Heart, 
  Briefcase, 
  GraduationCap, 
  Plane,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
  Rocket,
  Globe,
  Box,
  Activity
} from 'lucide-react';

interface AnimatedIconProps {
  className?: string;
  size?: number;
}

// Floating Animation
const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

// Pulse Animation
const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

// Rotate Animation
const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear" as const
  }
};

// Bounce Animation
const bounceAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeOut" as const
  }
};

// Glow Animation
const glowAnimation = {
  filter: [
    "drop-shadow(0 0 0px currentColor)",
    "drop-shadow(0 0 8px currentColor)",
    "drop-shadow(0 0 0px currentColor)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export const AnimatedBuilding2 = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div animate={floatingAnimation}>
    <Building2 className={className} size={size} />
  </motion.div>
);

export const AnimatedShoppingCart = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      x: [0, 5, 0],
      y: [0, -3, 0]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <ShoppingCart className={className} size={size} />
  </motion.div>
);

export const AnimatedHeart = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <Heart className={className} size={size} />
  </motion.div>
);

export const AnimatedBriefcase = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <Briefcase className={className} size={size} />
  </motion.div>
);

export const AnimatedGraduationCap = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      y: [0, -8, 0],
      rotate: [-3, 3, -3]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <GraduationCap className={className} size={size} />
  </motion.div>
);

export const AnimatedPlane = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      x: [0, 10, 0],
      y: [0, -10, 0],
      rotate: [0, 5, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <Plane className={className} size={size} />
  </motion.div>
);

export const AnimatedTrendingUp = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      y: [0, -5, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <TrendingUp className={className} size={size} />
  </motion.div>
);

export const AnimatedUsers = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={pulseAnimation}
  >
    <Users className={className} size={size} />
  </motion.div>
);

export const AnimatedZap = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      scale: [1, 1.2, 1],
      rotate: [-5, 5, -5]
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <Zap className={className} size={size} />
  </motion.div>
);

export const AnimatedSparkles = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <Sparkles className={className} size={size} />
  </motion.div>
);

export const AnimatedRocket = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      y: [0, -15, 0],
      x: [0, 3, 0]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeOut" as const
    }}
  >
    <Rocket className={className} size={size} />
  </motion.div>
);

export const AnimatedGlobe = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={rotateAnimation}
  >
    <Globe className={className} size={size} />
  </motion.div>
);

export const AnimatedBox = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      rotateY: [0, 180, 360]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear" as const
    }}
    style={{ perspective: 1000 }}
  >
    <Box className={className} size={size} />
  </motion.div>
);

export const AnimatedActivity = ({ className, size = 24 }: AnimatedIconProps) => (
  <motion.div 
    animate={{
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut" as const
    }}
  >
    <Activity className={className} size={size} />
  </motion.div>
);

// Wrapper component for adding hover animations
export const HoverGlowIcon = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    className={className}
    whileHover={{
      scale: 1.1,
      filter: "drop-shadow(0 0 8px currentColor)"
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// Wrapper for entrance animations
export const EntranceIcon = ({ 
  children, 
  delay = 0,
  className 
}: { 
  children: React.ReactNode, 
  delay?: number,
  className?: string 
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ 
      duration: 0.6, 
      delay,
      type: "spring",
      stiffness: 200
    }}
  >
    {children}
  </motion.div>
);



