"use client";

/**
 * ✨ MAGIC SHOWCASE COMPONENT ✨
 * This demonstrates ALL the magic effects in one place
 * Use this as a reference for implementing magic across your website
 */

import React from 'react';
import { 
  MagicParticles, 
  AnimatedGradientText, 
  MagneticButton, 
  RevealOnScroll,
  GlowCard,
  TiltCard,
  SpotlightCard,
  ShimmerCard,
  FloatingElement,
  RippleButton
} from './MagicEffects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

export function MagicShowcase() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* ===== SECTION 1: MAGIC HERO ===== */}
      <section className="phi-section relative overflow-hidden">
        {/* ✨ EFFECT 1: Floating Particles Background */}
        <MagicParticles />
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-cyan-400/15 to-transparent rounded-full blur-3xl animate-rotate-scale" />

        <div className="container-phi-lg px-phi-lg relative z-10">
          {/* Badge with Bounce Glow */}
          <RevealOnScroll delay={0}>
            <div className="flex justify-center mb-phi-lg">
              <Badge className="glass-magic animate-bounce-glow px-phi-md py-phi-sm text-phi-sm">
                <Sparkles className="w-phi-md h-phi-md mr-phi-xs inline-block" />
                ✨ THE MAGIC IS HERE ✨
              </Badge>
            </div>
          </RevealOnScroll>

          {/* Main Title with Animated Gradient */}
          <RevealOnScroll delay={0.1}>
            <h1 className="text-phi-4xl lg:text-phi-5xl font-black text-center mb-phi-lg leading-[1.1]">
              {/* ✨ EFFECT 2: Animated Gradient Text */}
              <AnimatedGradientText>
                Soumeet's Signature Magic Effects
              </AnimatedGradientText>
            </h1>
          </RevealOnScroll>

          {/* Description */}
          <RevealOnScroll delay={0.2}>
            <p className="text-phi-lg text-white/70 text-center max-w-phi-md mx-auto mb-phi-xl leading-[1.618]">
              Watch every element come alive with premium animations, perfect proportions, and delightful interactions
            </p>
          </RevealOnScroll>

          {/* CTA Buttons */}
          <RevealOnScroll delay={0.3}>
            <div className="flex justify-center gap-phi-lg mb-phi-2xl">
              {/* ✨ EFFECT 3: Magnetic Button */}
              <MagneticButton className="px-phi-2xl py-phi-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-phi-md text-phi-lg font-semibold animate-pulse-glow-magic">
                Explore Magic <ArrowRight className="w-phi-md h-phi-md ml-phi-sm inline-block" />
              </MagneticButton>
              
              {/* ✨ EFFECT 4: Ripple Button */}
              <RippleButton className="glass-magic px-phi-2xl py-phi-lg text-white rounded-phi-md text-phi-lg font-semibold border border-white/20 magnetic-hover">
                See Examples
              </RippleButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 2: MAGIC CARDS GRID ===== */}
      <section className="phi-section relative">
        <div className="container-phi-lg px-phi-lg">
          <RevealOnScroll delay={0}>
            <h2 className="text-phi-3xl font-bold text-white text-center mb-phi-lg">
              <span className="holographic">Premium Card Effects</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-phi-lg">
            {/* Card 1: Glow + Tilt + Spotlight */}
            <RevealOnScroll delay={0.1}>
              <GlowCard color="purple">
                <TiltCard>
                  <SpotlightCard className="glass-magic p-phi-lg rounded-phi-lg h-full">
                    <FloatingElement delay={0}>
                      <div className="w-phi-2xl h-phi-2xl bg-gradient-to-br from-purple-600 to-blue-600 rounded-phi-md flex items-center justify-center mb-phi-md">
                        <Sparkles className="w-phi-lg h-phi-lg text-white" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-phi-xl font-bold text-white mb-phi-sm neon-glow">
                      Glow Effect
                    </h3>
                    <p className="text-phi-base text-white/70 leading-[1.618]">
                      Hover to see the purple glow, 3D tilt, and spotlight following your cursor
                    </p>
                  </SpotlightCard>
                </TiltCard>
              </GlowCard>
            </RevealOnScroll>

            {/* Card 2: Shimmer + Glass Magic */}
            <RevealOnScroll delay={0.2}>
              <ShimmerCard>
                <div className="glass-magic p-phi-lg rounded-phi-lg h-full magnetic-hover">
                  <div className="w-phi-2xl h-phi-2xl bg-gradient-to-br from-cyan-600 to-blue-600 rounded-phi-md flex items-center justify-center mb-phi-md animate-breathe">
                    <Star className="w-phi-lg h-phi-lg text-white animate-rotate-scale" />
                  </div>
                  <h3 className="text-phi-xl font-bold text-white mb-phi-sm">
                    Shimmer Effect
                  </h3>
                  <p className="text-phi-base text-white/70 leading-[1.618]">
                    Watch the light sweep across this card continuously
                  </p>
                </div>
              </ShimmerCard>
            </RevealOnScroll>

            {/* Card 3: Holographic Text + Breathe */}
            <RevealOnScroll delay={0.3}>
              <div className="glass-magic p-phi-lg rounded-phi-lg h-full animate-breathe">
                <div className="w-phi-2xl h-phi-2xl bg-gradient-to-br from-pink-600 to-purple-600 rounded-phi-md flex items-center justify-center mb-phi-md">
                  <Zap className="w-phi-lg h-phi-lg text-white" />
                </div>
                <h3 className="text-phi-xl font-bold mb-phi-sm holographic">
                  Holographic Text
                </h3>
                <p className="text-phi-base text-white/70 leading-[1.618]">
                  Rainbow shifting colors that flow continuously
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: GOLDEN RATIO DEMONSTRATION ===== */}
      <section className="phi-section bg-gradient-to-br from-purple-950/20 to-blue-950/20 relative">
        <div className="container-phi-lg px-phi-lg">
          <RevealOnScroll delay={0}>
            <div className="text-center mb-phi-2xl">
              <Badge className="glass-magic px-phi-md py-phi-sm mb-phi-lg">
                <span className="text-phi-sm">φ ≈ 1.618</span>
              </Badge>
              <h2 className="text-phi-3xl font-bold text-white mb-phi-md">
                Golden Ratio in <span className="neon-glow">Action</span>
              </h2>
              <p className="text-phi-lg text-white/60 max-w-phi-md mx-auto leading-[1.618]">
                Perfect proportions based on mathematical harmony
              </p>
            </div>
          </RevealOnScroll>

          {/* Golden Ratio Visual */}
          <RevealOnScroll delay={0.2}>
            <div className="grid lg:grid-cols-[38.2%_61.8%] gap-phi-lg items-center">
              {/* Smaller Section (38.2%) */}
              <div className="glass-magic p-phi-lg rounded-phi-lg magnetic-hover">
                <h3 className="text-phi-xl font-bold text-white mb-phi-sm">
                  38.2% Width
                </h3>
                <p className="text-phi-base text-white/70 leading-[1.618]">
                  This column is 38.2% (1/φ) of the total width
                </p>
              </div>

              {/* Larger Section (61.8%) */}
              <div className="glass-magic p-phi-xl rounded-phi-lg magnetic-hover">
                <h3 className="text-phi-2xl font-bold text-white mb-phi-md">
                  61.8% Width - Golden Ratio
                </h3>
                <p className="text-phi-lg text-white/70 mb-phi-lg leading-[1.618]">
                  This column is 61.8% (φ-1) of the total width. Together, they create the perfect golden ratio split: 38.2 : 61.8 ≈ 1 : 1.618
                </p>
                <div className="grid grid-cols-3 gap-phi-md">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-golden bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-phi-sm" />
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 4: TYPOGRAPHY SCALE ===== */}
      <section className="phi-section">
        <div className="container-phi-lg px-phi-lg">
          <RevealOnScroll delay={0}>
            <h2 className="text-phi-3xl font-bold text-white text-center mb-phi-2xl holographic">
              Golden Ratio Typography
            </h2>
          </RevealOnScroll>

          <div className="glass-magic p-phi-2xl rounded-phi-lg space-y-phi-md">
            <RevealOnScroll delay={0.1}>
              <div className="text-phi-5xl font-bold text-white neon-glow">Phi 5XL - 177px</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="text-phi-4xl font-bold text-white/90">Phi 4XL - 110px</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="text-phi-3xl font-bold text-white/80">Phi 3XL - 68px</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <div className="text-phi-2xl font-semibold text-white/70">Phi 2XL - 42px</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.5}>
              <div className="text-phi-xl text-white/60">Phi XL - 32px</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.6}>
              <div className="text-phi-lg text-white/50">Phi LG - 26px (φ)</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.7}>
              <div className="text-phi-base text-white/40">Phi Base - 16px</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.8}>
              <div className="text-phi-sm text-white/30">Phi SM - 12px</div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: MAGIC CTA ===== */}
      <section className="phi-section relative">
        <div className="container-phi-lg px-phi-lg">
          <RevealOnScroll delay={0}>
            <SpotlightCard className="glass-magic p-phi-3xl rounded-phi-lg text-center">
              <FloatingElement>
                <div className="w-phi-3xl h-phi-3xl bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-phi-xl flex items-center justify-center animate-pulse-glow-magic">
                  <Sparkles className="w-phi-2xl h-phi-2xl text-white" />
                </div>
              </FloatingElement>
              
              <h2 className="text-phi-3xl font-black text-white mb-phi-lg holographic">
                Ready to Add Magic?
              </h2>
              
              <p className="text-phi-lg text-white/70 max-w-phi-md mx-auto mb-phi-2xl leading-[1.618]">
                Every effect is ready to use. Just import and apply. The client will see the magic immediately.
              </p>

              <div className="flex flex-wrap justify-center gap-phi-lg">
                <MagneticButton className="px-phi-2xl py-phi-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-phi-md text-phi-lg font-semibold animate-pulse-glow-magic">
                  Get Started <ArrowRight className="w-phi-md h-phi-md ml-phi-sm inline-block" />
                </MagneticButton>
                
                <RippleButton className="glass-magic px-phi-2xl py-phi-lg text-white rounded-phi-md text-phi-lg font-semibold border border-white/30">
                  View Docs
                </RippleButton>
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 6: QUICK REFERENCE ===== */}
      <section className="phi-section bg-gradient-to-br from-blue-950/20 to-purple-950/20">
        <div className="container-phi-lg px-phi-lg">
          <RevealOnScroll delay={0}>
            <h2 className="text-phi-3xl font-bold text-white text-center mb-phi-2xl">
              <span className="holographic">Quick Reference</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-phi-lg">
            {/* Golden Ratio Classes */}
            <RevealOnScroll delay={0.1}>
              <div className="glass-magic p-phi-lg rounded-phi-lg">
                <h3 className="text-phi-xl font-bold text-white mb-phi-md neon-glow">
                  Golden Ratio Classes
                </h3>
                <div className="space-y-phi-sm text-phi-sm font-mono text-white/70">
                  <div>.text-phi-5xl → 177px</div>
                  <div>.text-phi-4xl → 110px</div>
                  <div>.text-phi-3xl → 68px</div>
                  <div>.text-phi-2xl → 42px</div>
                  <div>.py-phi-3xl → Section padding</div>
                  <div>.gap-phi-lg → Grid gaps</div>
                  <div>.container-phi-lg → Container</div>
                  <div>.aspect-golden → 1.618:1</div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Magic Effect Classes */}
            <RevealOnScroll delay={0.2}>
              <div className="glass-magic p-phi-lg rounded-phi-lg">
                <h3 className="text-phi-xl font-bold text-white mb-phi-md neon-glow">
                  Magic Effect Classes
                </h3>
                <div className="space-y-phi-sm text-phi-sm font-mono text-white/70">
                  <div>.holographic → Rainbow text</div>
                  <div>.neon-glow → Pulsing glow</div>
                  <div>.glass-magic → Premium glass</div>
                  <div>.magnetic-hover → Lift on hover</div>
                  <div>.animate-breathe → Pulsing</div>
                  <div>.animate-bounce-glow → Bounce</div>
                  <div>.animate-shimmer-magic → Sweep</div>
                  <div>.particle-trail → Glow trail</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: LIVE DEMO GRID ===== */}
      <section className="phi-section">
        <div className="container-phi-lg px-phi-lg">
          <RevealOnScroll delay={0}>
            <h2 className="text-phi-3xl font-bold text-white text-center mb-phi-2xl holographic">
              Interactive Demo Grid
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-phi-lg">
            {/* Demo 1 */}
            <RevealOnScroll delay={0.1}>
              <GlowCard color="blue">
                <div className="p-phi-lg text-center">
                  <div className="text-phi-3xl font-black holographic mb-phi-sm">500+</div>
                  <div className="text-phi-base text-white/70">Projects</div>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Demo 2 */}
            <RevealOnScroll delay={0.2}>
              <GlowCard color="purple">
                <div className="p-phi-lg text-center">
                  <div className="text-phi-3xl font-black neon-glow mb-phi-sm">99%</div>
                  <div className="text-phi-base text-white/70">Satisfaction</div>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Demo 3 */}
            <RevealOnScroll delay={0.3}>
              <GlowCard color="cyan">
                <div className="p-phi-lg text-center">
                  <div className="text-phi-3xl font-black holographic mb-phi-sm">24/7</div>
                  <div className="text-phi-base text-white/70">Support</div>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Demo 4 */}
            <RevealOnScroll delay={0.4}>
              <GlowCard color="pink">
                <div className="p-phi-lg text-center">
                  <div className="text-phi-3xl font-black neon-glow mb-phi-sm">5+</div>
                  <div className="text-phi-base text-white/70">Years</div>
                </div>
              </GlowCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== FINAL MESSAGE ===== */}
      <section className="phi-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />
        
        <div className="container-phi-lg px-phi-lg relative z-10">
          <RevealOnScroll delay={0}>
            <div className="glass-magic p-phi-3xl rounded-phi-lg text-center">
              <h2 className="text-phi-4xl font-black mb-phi-lg">
                <span className="holographic">The Magic Is Back!</span>
              </h2>
              <p className="text-phi-xl text-white/80 max-w-phi-md mx-auto mb-phi-xl leading-[1.618]">
                Every spacing, every size, every animation — perfectly harmonized with the golden ratio.
              </p>
              <div className="inline-block">
                <div className="text-phi-2xl font-mono font-bold neon-glow animate-breathe">
                  ✨ φ ≈ 1.618 ✨
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}

export default MagicShowcase;

