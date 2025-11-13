/**
 * Link Innovations - Standardized Button Component
 * For Grovia Page Implementation
 * 
 * This component provides consistent button styles across the grovia page
 */

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  showArrow = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'group relative inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-300 overflow-hidden border';
  
  const variants = {
    primary: 'bg-white text-text-primary border-border-subtle hover:scale-[1.02] hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.12)]',
    secondary: 'bg-background-primary text-text-primary border-border-subtle hover:scale-[1.02] hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.12)]',
    ghost: 'bg-transparent text-text-primary border-transparent hover:bg-background-secondary',
    outline: 'bg-transparent text-text-primary border-border-medium hover:bg-background-secondary hover:border-border-strong',
  };
  
  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };
  
  const buttonContent = (
    <>
      {/* Button Background Glow */}
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-background-primary/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] transition-opacity duration-300" />
        </>
      )}
      
      {variant === 'secondary' && (
        <>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] transition-opacity duration-300" />
        </>
      )}
      
      <span className="relative z-10">{children}</span>
      
      {showArrow && (
        <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-text-primary/10 group-hover:bg-text-primary/15 transition-colors duration-300">
          <ArrowRight className="w-4 h-4 text-text-primary transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
        </div>
      )}
    </>
  );
  
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
}

