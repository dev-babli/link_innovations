import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import styles from './HeroAnimation.module.css';

// Types
interface Slide {
    title: string;
    media: string;
    description: string;
}

interface HeroAnimationProps {
    slides?: Slide[];
    onSlideChange?: (index: number) => void;
    className?: string;
}

// Default slides data
const defaultSlides: Slide[] = [
    {
        title: "AI",
        media: "/images/sliders/ai.jpg",
        description: "Transform your business with intelligent automation and machine learning solutions. Our AI services help you unlock insights from data and streamline operations."
    },
    {
        title: "WEB DEVELOPMENT",
        media: "/images/sliders/web_development.jpg",
        description: "Build stunning, responsive websites that drive engagement and conversions. We create modern web applications with cutting-edge technologies and best practices."
    },
    {
        title: "APP DEVELOPMENT",
        media: "/images/sliders/app_development.jpg",
        description: "Develop powerful mobile applications for iOS and Android platforms. Our apps deliver exceptional user experiences and robust functionality."
    },
    {
        title: "DATA ANALYTICS",
        media: "/images/sliders/data-analytics.jpg",
        description: "Turn raw data into actionable insights with advanced analytics solutions. Make data-driven decisions that propel your business forward."
    },
    {
        title: "CLOUD COMPUTING",
        media: "/images/sliders/cloud-technology-online-global-business-concept.jpg",
        description: "Scale effortlessly with secure, reliable cloud infrastructure solutions. Optimize costs and performance with our cloud expertise."
    },
    {
        title: "Cybersecurity",
        media: "/images/sliders/programming-background-collage.jpg",
        description: "Protect your digital assets with comprehensive security solutions. We safeguard your business against evolving cyber threats."
    }
];

// Shader configuration
const SLIDER_CONFIG = {
    settings: {
        transitionDuration: 2.5,
        autoSlideSpeed: 8000, // Increased from 5000ms to 8000ms for slower slides
        currentEffect: "glass",
        currentEffectPreset: "Default",
        globalIntensity: 1.0,
        speedMultiplier: 1.0,
        distortionStrength: 1.0,
        colorEnhancement: 1.0,
        glassRefractionStrength: 1.0,
        glassChromaticAberration: 1.0,
        glassBubbleClarity: 1.0,
        glassEdgeGlow: 1.0,
        glassLiquidFlow: 1.0,
        frostIntensity: 1.5,
        frostCrystalSize: 1.0,
        frostIceCoverage: 1.0,
        frostTemperature: 1.0,
        frostTexture: 1.0,
        rippleFrequency: 25.0,
        rippleAmplitude: 0.08,
        rippleWaveSpeed: 1.0,
        rippleRippleCount: 1.0,
        rippleDecay: 1.0,
        plasmaIntensity: 1.2,
        plasmaSpeed: 0.8,
        plasmaEnergyIntensity: 0.4,
        plasmaContrastBoost: 0.3,
        plasmaTurbulence: 1.0,
        timeshiftDistortion: 1.6,
        timeshiftBlur: 1.5,
        timeshiftFlow: 1.4,
        timeshiftChromatic: 1.5,
        timeshiftTurbulence: 1.4
    },
    effectPresets: {
        glass: {
            Subtle: {
                glassRefractionStrength: 0.6,
                glassChromaticAberration: 0.5,
                glassBubbleClarity: 1.3,
                glassEdgeGlow: 0.7,
                glassLiquidFlow: 0.8
            },
            Default: {
                glassRefractionStrength: 1.0,
                glassChromaticAberration: 1.0,
                glassBubbleClarity: 1.0,
                glassEdgeGlow: 1.0,
                glassLiquidFlow: 1.0
            },
            Crystal: {
                glassRefractionStrength: 1.5,
                glassChromaticAberration: 1.8,
                glassBubbleClarity: 0.7,
                glassEdgeGlow: 1.4,
                glassLiquidFlow: 0.5
            },
            Liquid: {
                glassRefractionStrength: 0.8,
                glassChromaticAberration: 0.4,
                glassBubbleClarity: 1.2,
                glassEdgeGlow: 0.8,
                glassLiquidFlow: 1.8
            }
        },
        frost: {
            Light: {
                frostIntensity: 0.8,
                frostCrystalSize: 1.3,
                frostIceCoverage: 0.6,
                frostTemperature: 0.7,
                frostTexture: 0.8
            },
            Default: {
                frostIntensity: 1.5,
                frostCrystalSize: 1.0,
                frostIceCoverage: 1.0,
                frostTemperature: 1.0,
                frostTexture: 1.0
            },
            Heavy: {
                frostIntensity: 2.2,
                frostCrystalSize: 0.7,
                frostIceCoverage: 1.4,
                frostTemperature: 1.5,
                frostTexture: 1.3
            },
            Arctic: {
                frostIntensity: 2.8,
                frostCrystalSize: 0.5,
                frostIceCoverage: 1.8,
                frostTemperature: 2.0,
                frostTexture: 1.6
            }
        },
        ripple: {
            Gentle: {
                rippleFrequency: 15.0,
                rippleAmplitude: 0.05,
                rippleWaveSpeed: 0.7,
                rippleRippleCount: 0.8,
                rippleDecay: 1.2
            },
            Default: {
                rippleFrequency: 25.0,
                rippleAmplitude: 0.08,
                rippleWaveSpeed: 1.0,
                rippleRippleCount: 1.0,
                rippleDecay: 1.0
            },
            Strong: {
                rippleFrequency: 35.0,
                rippleAmplitude: 0.12,
                rippleWaveSpeed: 1.4,
                rippleRippleCount: 1.3,
                rippleDecay: 0.8
            },
            Tsunami: {
                rippleFrequency: 45.0,
                rippleAmplitude: 0.18,
                rippleWaveSpeed: 1.8,
                rippleRippleCount: 1.6,
                rippleDecay: 0.6
            }
        },
        plasma: {
            Calm: {
                plasmaIntensity: 0.8,
                plasmaSpeed: 0.5,
                plasmaEnergyIntensity: 0.2,
                plasmaContrastBoost: 0.1,
                plasmaTurbulence: 0.6
            },
            Default: {
                plasmaIntensity: 1.2,
                plasmaSpeed: 0.8,
                plasmaEnergyIntensity: 0.4,
                plasmaContrastBoost: 0.3,
                plasmaTurbulence: 1.0
            },
            Storm: {
                plasmaIntensity: 1.8,
                plasmaSpeed: 1.3,
                plasmaEnergyIntensity: 0.7,
                plasmaContrastBoost: 0.5,
                plasmaTurbulence: 1.5
            },
            Nuclear: {
                plasmaIntensity: 2.5,
                plasmaSpeed: 1.8,
                plasmaEnergyIntensity: 1.0,
                plasmaContrastBoost: 0.8,
                plasmaTurbulence: 2.0
            }
        },
        timeshift: {
            Subtle: {
                timeshiftDistortion: 0.5,
                timeshiftBlur: 0.6,
                timeshiftFlow: 0.5,
                timeshiftChromatic: 0.4,
                timeshiftTurbulence: 0.6
            },
            Default: {
                timeshiftDistortion: 1.6,
                timeshiftBlur: 1.5,
                timeshiftFlow: 1.4,
                timeshiftChromatic: 1.5,
                timeshiftTurbulence: 1.4
            },
            Intense: {
                timeshiftDistortion: 2.2,
                timeshiftBlur: 2.0,
                timeshiftFlow: 2.0,
                timeshiftChromatic: 2.2,
                timeshiftTurbulence: 2.0
            },
            Dreamlike: {
                timeshiftDistortion: 2.8,
                timeshiftBlur: 2.5,
                timeshiftFlow: 2.5,
                timeshiftChromatic: 2.6,
                timeshiftTurbulence: 2.5
            }
        }
    }
};

// Shader code
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform vec2 uResolution;
  uniform vec2 uTexture1Size;
  uniform vec2 uTexture2Size;
  uniform int uEffectType;
  
  // Global settings uniforms
  uniform float uGlobalIntensity;
  uniform float uSpeedMultiplier;
  uniform float uDistortionStrength;
  uniform float uColorEnhancement;
  
  // Glass uniforms
  uniform float uGlassRefractionStrength;
  uniform float uGlassChromaticAberration;
  uniform float uGlassBubbleClarity;
  uniform float uGlassEdgeGlow;
  uniform float uGlassLiquidFlow;
  
  // Frost uniforms
  uniform float uFrostIntensity;
  uniform float uFrostCrystalSize;
  uniform float uFrostIceCoverage;
  uniform float uFrostTemperature;
  uniform float uFrostTexture;
  
  // Ripple uniforms
  uniform float uRippleFrequency;
  uniform float uRippleAmplitude;
  uniform float uRippleWaveSpeed;
  uniform float uRippleRippleCount;
  uniform float uRippleDecay;
  
  // Plasma uniforms
  uniform float uPlasmaIntensity;
  uniform float uPlasmaSpeed;
  uniform float uPlasmaEnergyIntensity;
  uniform float uPlasmaContrastBoost;
  uniform float uPlasmaTurbulence;
  
  // Timeshift uniforms
  uniform float uTimeshiftDistortion;
  uniform float uTimeshiftBlur;
  uniform float uTimeshiftFlow;
  uniform float uTimeshiftChromatic;
  uniform float uTimeshiftTurbulence;
  
  varying vec2 vUv;

  vec2 getCoverUV(vec2 uv, vec2 textureSize) {
    vec2 s = uResolution / textureSize;
    float scale = max(s.x, s.y);
    vec2 scaledSize = textureSize * scale;
    vec2 offset = (uResolution - scaledSize) * 0.5;
    return (uv * uResolution - offset) / scaledSize;
  }

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    return mix(
      mix(noise(i), noise(i + vec2(1.0, 0.0)), f.x),
      mix(noise(i + vec2(0.0, 1.0)), noise(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float rand(vec2 uv) {
    float a = dot(uv, vec2(92., 80.));
    float b = dot(uv, vec2(41., 62.));
    float x = sin(a) + cos(b) * 51.;
    return fract(x);
  }

  vec4 glassEffect(vec2 uv, float progress) {
    float glassStrength = 0.08 * uGlassRefractionStrength * uDistortionStrength * uGlobalIntensity;
    float chromaticAberration = 0.02 * uGlassChromaticAberration * uGlobalIntensity;
    float waveDistortion = 0.025 * uDistortionStrength;
    float clearCenterSize = 0.3 * uGlassBubbleClarity;
    float surfaceRipples = 0.004 * uDistortionStrength;
    float liquidFlow = 0.015 * uGlassLiquidFlow * uSpeedMultiplier;
    float rimLightWidth = 0.05;
    float glassEdgeWidth = 0.025;
    
    float brightnessPhase = smoothstep(0.8, 1.0, progress);
    float rimLightIntensity = 0.08 * (1.0 - brightnessPhase) * uGlassEdgeGlow * uGlobalIntensity;
    float glassEdgeOpacity = 0.06 * (1.0 - brightnessPhase) * uGlassEdgeGlow;

    vec2 center = vec2(0.5, 0.5);
    vec2 p = uv * uResolution;
    
    vec2 uv1 = getCoverUV(uv, uTexture1Size);
    vec2 uv2_base = getCoverUV(uv, uTexture2Size);
    
    float maxRadius = length(uResolution) * 0.85;
    float bubbleRadius = progress * maxRadius;
    vec2 sphereCenter = center * uResolution;
    
    float dist = length(p - sphereCenter);
    float normalizedDist = dist / max(bubbleRadius, 0.001);
    vec2 direction = (dist > 0.0) ? (p - sphereCenter) / dist : vec2(0.0);
    float inside = smoothstep(bubbleRadius + 3.0, bubbleRadius - 3.0, dist);
    
    float distanceFactor = smoothstep(clearCenterSize, 1.0, normalizedDist);
    float time = progress * 5.0 * uSpeedMultiplier;
    
    vec2 liquidSurface = vec2(
      smoothNoise(uv * 100.0 + time * 0.3),
      smoothNoise(uv * 100.0 + time * 0.2 + 50.0)
    ) - 0.5;
    liquidSurface *= surfaceRipples * distanceFactor;

    vec2 distortedUV = uv2_base;
    if (inside > 0.0) {
      float refractionOffset = glassStrength * pow(distanceFactor, 1.5);
      vec2 flowDirection = normalize(direction + vec2(sin(time), cos(time * 0.7)) * 0.3);
      distortedUV -= flowDirection * refractionOffset;

      float wave1 = sin(normalizedDist * 22.0 - time * 3.5);
      float wave2 = sin(normalizedDist * 35.0 + time * 2.8) * 0.7;
      float wave3 = sin(normalizedDist * 50.0 - time * 4.2) * 0.5;
      float combinedWave = (wave1 + wave2 + wave3) / 3.0;
      
      float waveOffset = combinedWave * waveDistortion * distanceFactor;
      distortedUV -= direction * waveOffset + liquidSurface;

      vec2 flowOffset = vec2(
        sin(time + normalizedDist * 10.0),
        cos(time * 0.8 + normalizedDist * 8.0)
      ) * liquidFlow * distanceFactor * inside;
      distortedUV += flowOffset;
    }

    vec4 newImg;
    if (inside > 0.0) {
      float aberrationOffset = chromaticAberration * pow(distanceFactor, 1.2);
      
      vec2 uv_r = distortedUV + direction * aberrationOffset * 1.2;
      vec2 uv_g = distortedUV + direction * aberrationOffset * 0.2;
      vec2 uv_b = distortedUV - direction * aberrationOffset * 0.8;

      float r = texture2D(uTexture2, uv_r).r;
      float g = texture2D(uTexture2, uv_g).g;
      float b = texture2D(uTexture2, uv_b).b;
      newImg = vec4(r, g, b, 1.0);
    } else {
      newImg = texture2D(uTexture2, uv2_base);
    }

    if (inside > 0.0 && rimLightIntensity > 0.0) {
      float rim = smoothstep(1.0 - rimLightWidth, 1.0, normalizedDist) *
                  (1.0 - smoothstep(1.0, 1.01, normalizedDist));
      newImg.rgb += rim * rimLightIntensity;

      float edge = smoothstep(1.0 - glassEdgeWidth, 1.0, normalizedDist) *
                   (1.0 - smoothstep(1.0, 1.01, normalizedDist));
      newImg.rgb = mix(newImg.rgb, vec3(1.0), edge * glassEdgeOpacity);
    }
    
    newImg.rgb = mix(newImg.rgb, newImg.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
    
    vec4 currentImg = texture2D(uTexture1, uv1);
    
    if (progress > 0.95) {
      vec4 pureNewImg = texture2D(uTexture2, uv2_base);
      float endTransition = (progress - 0.95) / 0.05;
      newImg = mix(newImg, pureNewImg, endTransition);
    }
    
    return mix(currentImg, newImg, inside);
  }

  vec4 frostEffect(vec2 uv, float progress) {
    vec4 currentImg = texture2D(uTexture1, getCoverUV(uv, uTexture1Size));
    vec4 newImg = texture2D(uTexture2, getCoverUV(uv, uTexture2Size));
    
    float effectiveIntensity = uFrostIntensity * uGlobalIntensity;
    float crystalScale = 80.0 / uFrostCrystalSize;
    float iceScale = 40.0 / uFrostCrystalSize;
    float temperatureEffect = uFrostTemperature;
    
    float frost1 = smoothNoise(uv * crystalScale * uFrostTexture);
    float frost2 = smoothNoise(uv * iceScale + 50.0) * 0.7;
    float frost3 = smoothNoise(uv * (crystalScale * 2.0) + 100.0) * 0.3;
    float frost = (frost1 + frost2 + frost3) / 2.0;
    
    float icespread = smoothNoise(uv * 25.0 / uFrostCrystalSize + 200.0);
    
    vec2 rnd = vec2(
      rand(uv + frost * 0.1), 
      rand(uv + frost * 0.1 + 0.5)
    );
    
    float clampedIceCoverage = clamp(uFrostIceCoverage, 0.1, 2.5);
    float size = mix(progress, sqrt(progress), 0.5) * 1.12 * clampedIceCoverage + 0.0000001;
    
    float lensY = clamp(pow(size, clamp(4.0, 1.5, 6.0)) / 2.0, size * 0.1, size * 8.0);
    vec2 lens = vec2(size, lensY);
    
    float dist = distance(uv, vec2(0.5, 0.5));
    float vignette = pow(1.0 - smoothstep(lens.x, lens.y, dist), 2.0);
    
    float frostyness = 0.8 * effectiveIntensity * uDistortionStrength;
    rnd *= frost * vignette * frostyness * (1.0 - floor(vignette));
    
    vec4 regular = newImg;
    vec4 frozen = texture2D(uTexture2, getCoverUV(uv + rnd * 0.06, uTexture2Size));
    
    float tempShift = clamp(temperatureEffect * 0.15, 0.0, 0.3);
    frozen *= vec4(
      clamp(0.85 + tempShift, 0.7, 1.2),
      clamp(0.9, 0.8, 1.0),
      clamp(1.2 - tempShift, 0.8, 1.3),
      1.0
    );
    float tempMixStrength = clamp(0.1 * temperatureEffect, 0.0, 0.25);
    frozen = mix(frozen, vec4(0.9, 0.95, 1.1, 1.0), tempMixStrength);
    
    float frostMask = smoothstep(icespread * 0.8, 1.0, pow(vignette, 1.5));
    vec4 frostResult = mix(frozen, regular, frostMask);
    
    float transitionStart = mix(0.85, 0.7, clamp(effectiveIntensity - 1.0, 0.0, 1.0));
    float colorTransition = smoothstep(transitionStart, 1.0, progress);
    vec4 finalFrost = mix(frostResult, regular, colorTransition);
    
    finalFrost.rgb = mix(finalFrost.rgb, finalFrost.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
    
    float overallBlend = smoothstep(0.0, 1.0, progress);
    
    if (progress > 0.95) {
      float endTransition = (progress - 0.95) / 0.05;
      finalFrost = mix(finalFrost, newImg, endTransition * 0.5);
    }
    
    return mix(currentImg, finalFrost, overallBlend);
  }

  vec4 rippleEffect(vec2 uv, float progress) {
    vec4 currentImg = texture2D(uTexture1, getCoverUV(uv, uTexture1Size));
    vec4 newImg = texture2D(uTexture2, getCoverUV(uv, uTexture2Size));
    
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(uv, center);
    float maxDist = 0.8;
    
    float effectiveSpeed = uRippleWaveSpeed * uSpeedMultiplier;
    float effectiveAmplitude = uRippleAmplitude * uDistortionStrength * uGlobalIntensity;
    float effectiveDecay = uRippleDecay;
    
    float waveRadius = progress * maxDist * 1.5 * effectiveSpeed;
    
    float ripple1 = sin((dist - waveRadius) * uRippleFrequency) * exp(-abs(dist - waveRadius) * 8.0 * effectiveDecay);
    float ripple2 = sin((dist - waveRadius * 0.7) * uRippleFrequency * 1.3) * 
                   exp(-abs(dist - waveRadius * 0.7) * 6.0 * effectiveDecay) * 0.6 * uRippleRippleCount;
    float ripple3 = sin((dist - waveRadius * 0.4) * uRippleFrequency * 1.8) * 
                   exp(-abs(dist - waveRadius * 0.4) * 4.0 * effectiveDecay) * 0.3 * uRippleRippleCount;
    
    float combinedRipple = (ripple1 + ripple2 + ripple3) * effectiveAmplitude;
    
    vec2 normal = normalize(uv - center);
    vec2 distortedUV = getCoverUV(uv + normal * combinedRipple, uTexture2Size);
    
    vec4 distortedImg = texture2D(uTexture2, distortedUV);
    
    float fadeEdge = smoothstep(maxDist, maxDist * 0.9, dist);
    vec4 rippleResult = mix(newImg, distortedImg, fadeEdge);
    
    float mask = smoothstep(0.0, 0.3, progress) * (1.0 - smoothstep(0.7, 1.0, progress));
    rippleResult = mix(newImg, rippleResult, mask);
    
    rippleResult.rgb = mix(rippleResult.rgb, rippleResult.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
    
    float transition = smoothstep(0.0, 1.0, progress);
    return mix(currentImg, rippleResult, transition);
  }

  vec4 plasmaEffect(vec2 uv, float progress) {
    vec4 currentImg = texture2D(uTexture1, getCoverUV(uv, uTexture1Size));
    vec4 newImg = texture2D(uTexture2, getCoverUV(uv, uTexture2Size));
    
    float effectiveSpeed = uPlasmaSpeed * uSpeedMultiplier;
    float effectiveIntensity = uPlasmaIntensity * uGlobalIntensity;
    float time = progress * 8.0 * effectiveSpeed;
    
    float plasma1 = sin(uv.x * 10.0 + time) * cos(uv.y * 8.0 + time * 0.7);
    float plasma2 = sin((uv.x + uv.y) * 12.0 + time * 1.3) * cos((uv.x - uv.y) * 15.0 + time * 0.9);
    float plasma3 = sin(length(uv - vec2(0.5)) * 20.0 + time * 1.8);
    
    float turbulence1 = smoothNoise(uv * 15.0 * uPlasmaTurbulence + vec2(time * 0.5, time * 0.3));
    float turbulence2 = smoothNoise(uv * 25.0 * uPlasmaTurbulence + vec2(time * 0.8, -time * 0.4)) * 0.7;
    float turbulence3 = smoothNoise(uv * 40.0 * uPlasmaTurbulence + vec2(-time * 0.6, time * 0.9)) * 0.4;
    
    float combinedTurbulence = (turbulence1 + turbulence2 + turbulence3) / 2.1;
    
    float plasma = (plasma1 + plasma2 + plasma3) * 0.333 + combinedTurbulence * 0.5;
    plasma = sin(plasma * 3.14159);
    
    float plasmaPhase = smoothstep(0.0, 0.3, progress) * (1.0 - smoothstep(0.7, 1.0, progress));
    
    vec2 electricField = vec2(
      sin(plasma * 6.28 + time) * 0.02,
      cos(plasma * 4.71 + time * 1.1) * 0.02
    ) * effectiveIntensity * plasmaPhase * uDistortionStrength;
    
    vec2 flowField1 = vec2(
      smoothNoise(uv * 8.0 + time * 0.4),
      smoothNoise(uv * 8.0 + time * 0.4 + 100.0)
    ) - 0.5;
    
    vec2 flowField2 = vec2(
      smoothNoise(uv * 16.0 + time * 0.6 + 200.0),
      smoothNoise(uv * 16.0 + time * 0.6 + 300.0)
    ) - 0.5;
    
    flowField1 *= 0.015 * effectiveIntensity * plasmaPhase * uDistortionStrength;
    flowField2 *= 0.008 * effectiveIntensity * plasmaPhase * uDistortionStrength;
    
    vec2 totalDistortion = electricField + flowField1 + flowField2;
    
    vec2 distortedUV1 = getCoverUV(uv + totalDistortion, uTexture1Size);
    vec2 distortedUV2 = getCoverUV(uv + totalDistortion, uTexture2Size);
    
    vec4 distortedCurrentImg = texture2D(uTexture1, distortedUV1);
    vec4 distortedNewImg = texture2D(uTexture2, distortedUV2);
    
    float energyMask = abs(plasma) * plasmaPhase * effectiveIntensity;
    
    vec4 blendedDistorted = mix(distortedCurrentImg, distortedNewImg, progress);
    
    vec3 energyColor = vec3(0.9, 0.95, 1.0);
    
    float energyPulse = sin(time * 4.0) * 0.5 + 0.5;
    float finalEnergyIntensity = energyMask * uPlasmaEnergyIntensity * (0.7 + energyPulse * 0.3);
    
    float contrast = 1.0 + energyMask * uPlasmaContrastBoost;
    vec3 contrastedColor = (blendedDistorted.rgb - 0.5) * contrast + 0.5;
    
    float saturationBoost = 1.0 + energyMask * 0.4;
    float luminance = dot(contrastedColor, vec3(0.299, 0.587, 0.114));
    vec3 saturatedColor = mix(vec3(luminance), contrastedColor, saturationBoost);
    
    vec3 glowColor = saturatedColor + energyColor * finalEnergyIntensity;
    
    float crackle = smoothNoise(uv * 50.0 + time * 2.0);
    crackle = smoothstep(0.85, 1.0, crackle) * energyMask;
    glowColor += vec3(1.0) * crackle * uPlasmaEnergyIntensity * 0.5;
    
    float brightnessPulse = sin(time * 6.0 + plasma * 10.0) * 0.5 + 0.5;
    glowColor += energyMask * brightnessPulse * uPlasmaEnergyIntensity * 0.2;
    
    glowColor = mix(glowColor, glowColor * 1.2, (uColorEnhancement - 1.0) * 0.5);
    
    vec4 plasmaResult = vec4(glowColor, 1.0);
    
    if (progress > 0.85) {
      float endFade = (progress - 0.85) / 0.15;
      plasmaResult = mix(plasmaResult, newImg, endFade);
    }
    
    float overallTransition = smoothstep(0.0, 1.0, progress);
    return mix(currentImg, plasmaResult, overallTransition);
  }

  vec4 timeshiftEffect(vec2 uv, float progress) {
    vec2 uv1 = getCoverUV(uv, uTexture1Size);
    vec2 uv2_base = getCoverUV(uv, uTexture2Size);
    vec4 currentImg = texture2D(uTexture1, uv1);
    vec4 newImg = texture2D(uTexture2, uv2_base);
    
    float effectiveDistortion = uTimeshiftDistortion * uDistortionStrength * uGlobalIntensity;
    float effectiveBlur = uTimeshiftBlur * uGlobalIntensity;
    float effectiveFlow = uTimeshiftFlow * uSpeedMultiplier;
    float effectiveChromatic = uTimeshiftChromatic * uGlobalIntensity;
    float effectiveTurbulence = uTimeshiftTurbulence;
    
    vec2 center = vec2(0.5, 0.5);
    vec2 p = uv * uResolution;
    vec2 sphereCenter = center * uResolution;
    
    float maxRadius = length(uResolution) * 0.85;
    float circleRadius = progress * maxRadius;
    
    float dist = length(p - sphereCenter);
    float normalizedDist = dist / max(circleRadius, 0.001);
    
    float boundaryWidth = 0.2 * effectiveBlur;
    float inside = smoothstep(circleRadius + circleRadius * boundaryWidth, 
                             circleRadius - circleRadius * boundaryWidth, dist);
    
    vec4 finalColor = newImg;
    
    if (inside > 0.01 && inside < 0.99) {
      vec2 fromCenter = uv - center;
      float radius = length(fromCenter);
      vec2 direction = radius > 0.0 ? fromCenter / radius : vec2(0.0);
      
      float boundaryStrength = smoothstep(0.0, 0.3, inside) * smoothstep(1.0, 0.7, inside);
      
      float time = progress * 6.28 * effectiveFlow;
      
      float turb1 = smoothNoise(uv * 12.0 * effectiveTurbulence + time * 0.4);
      float turb2 = smoothNoise(uv * 20.0 * effectiveTurbulence - time * 0.5);
      float turb3 = smoothNoise(uv * 35.0 * effectiveTurbulence + time * 0.7);
      float turb4 = smoothNoise(uv * 55.0 * effectiveTurbulence - time * 0.4);
      
      vec2 turbulence = vec2(
        (turb1 - 0.5) * 1.2 + (turb2 - 0.5) * 0.8 + (turb3 - 0.5) * 0.4,
        (turb2 - 0.5) * 1.2 + (turb3 - 0.5) * 0.8 + (turb4 - 0.5) * 0.4
      );
      
      float displacementStrength = 0.18 * effectiveDistortion * boundaryStrength;
      vec2 displacement = turbulence * displacementStrength;
      
      float radialPull = sin(normalizedDist * 12.0 - time * 2.5) * 0.05 * effectiveDistortion;
      displacement += direction * radialPull * boundaryStrength;
      
      vec2 perpendicular = vec2(-direction.y, direction.x);
      float swirl = sin(time * 2.5 + normalizedDist * 10.0) * 0.06 * effectiveFlow;
      displacement += perpendicular * swirl * boundaryStrength;
      
      vec2 distortedUV1 = getCoverUV(uv + displacement, uTexture1Size);
      vec2 distortedUV2 = getCoverUV(uv + displacement, uTexture2Size);
      
      vec4 distortedOld = texture2D(uTexture1, distortedUV1);
      vec4 distortedNew = texture2D(uTexture2, distortedUV2);
      
      if (effectiveChromatic > 0.01) {
        float chromaticStr = boundaryStrength * 0.03 * effectiveChromatic;
        
        vec2 uv1_r = getCoverUV(uv + displacement + direction * chromaticStr * 2.0, uTexture1Size);
        vec2 uv1_b = getCoverUV(uv + displacement - direction * chromaticStr * 1.2, uTexture1Size);
        distortedOld = vec4(
          texture2D(uTexture1, uv1_r).r,
          distortedOld.g,
          texture2D(uTexture1, uv1_b).b,
          1.0
        );
        
        vec2 uv2_r = getCoverUV(uv + displacement + direction * chromaticStr * 2.0, uTexture2Size);
        vec2 uv2_b = getCoverUV(uv + displacement - direction * chromaticStr * 1.2, uTexture2Size);
        distortedNew = vec4(
          texture2D(uTexture2, uv2_r).r,
          distortedNew.g,
          texture2D(uTexture2, uv2_b).b,
          1.0
        );
      }
      
      finalColor = mix(distortedOld, distortedNew, inside);
      
      if (effectiveBlur > 0.5) {
        vec4 blurSample1 = texture2D(uTexture2, getCoverUV(uv + displacement + turbulence * 0.015, uTexture2Size));
        vec4 blurSample2 = texture2D(uTexture2, getCoverUV(uv + displacement - turbulence * 0.015, uTexture2Size));
        vec4 blurSample3 = texture2D(uTexture1, getCoverUV(uv + displacement + vec2(turbulence.y, -turbulence.x) * 0.015, uTexture1Size));
        
        float blurAmount = boundaryStrength * effectiveBlur * 0.6;
        finalColor = mix(finalColor, (finalColor + blurSample1 + blurSample2 + blurSample3) * 0.25, blurAmount);
      }
      
    } else if (inside >= 0.99) {
      finalColor = newImg;
    } else {
      finalColor = currentImg;
    }
    
    finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
    
    if (progress > 0.95) {
      float endTransition = (progress - 0.95) / 0.05;
      finalColor = mix(finalColor, newImg, endTransition);
    }
    
    return mix(currentImg, finalColor, smoothstep(0.0, 1.0, progress));
  }

  void main() {
    if (uEffectType == 0) {
      gl_FragColor = glassEffect(vUv, uProgress);
    } else if (uEffectType == 1) {
      gl_FragColor = frostEffect(vUv, uProgress);
    } else if (uEffectType == 2) {
      gl_FragColor = rippleEffect(vUv, uProgress);
    } else if (uEffectType == 3) {
      gl_FragColor = plasmaEffect(vUv, uProgress);
    } else {
      gl_FragColor = timeshiftEffect(vUv, uProgress);
    }
  }
`;

const HeroAnimation: React.FC<HeroAnimationProps> = ({
    slides = defaultSlides,
    onSlideChange,
    className = ''
}) => {
    // State
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [texturesLoaded, setTexturesLoaded] = useState(false);
    const [sliderEnabled, setSliderEnabled] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // Refs
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
    const shaderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
    const slideTexturesRef = useRef<THREE.Texture[]>([]);
    const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
    const progressAnimationRef = useRef<NodeJS.Timeout | null>(null);
    const touchStartXRef = useRef(0);
    const touchEndXRef = useRef(0);
    const animationFrameRef = useRef<number | null>(null);

    // Effect index mapping
    const getEffectIndex = (effectName: string): number => {
        const effectMap: { [key: string]: number } = {
            glass: 0,
            frost: 1,
            ripple: 2,
            plasma: 3,
            timeshift: 4
        };
        return effectMap[effectName] || 0;
    };

    // Load image texture
    const loadImageTexture = useCallback((src: string): Promise<THREE.Texture> => {
        return new Promise((resolve, reject) => {
            const loader = new THREE.TextureLoader();
            const timeout = setTimeout(() => reject(new Error("Timeout")), 10000);
            loader.load(
                src,
                (texture) => {
                    clearTimeout(timeout);
                    // Set proper texture parameters to avoid WebGL errors
                    texture.minFilter = THREE.LinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    texture.wrapS = THREE.ClampToEdgeWrapping;
                    texture.wrapT = THREE.ClampToEdgeWrapping;
                    texture.flipY = true; // Enable flip to fix inverted images
                    texture.generateMipmaps = false; // Disable mipmaps for better performance
                    texture.userData = {
                        size: new THREE.Vector2(texture.image.width, texture.image.height)
                    };
                    resolve(texture);
                },
                undefined,
                (error) => {
                    clearTimeout(timeout);
                    reject(error);
                }
            );
        });
    }, []);

    // Update shader uniforms
    const updateShaderUniforms = useCallback(() => {
        if (!shaderMaterialRef.current) return;
        const uniforms = shaderMaterialRef.current.uniforms;
        const settings = SLIDER_CONFIG.settings;

        // Global uniforms
        if (uniforms.uGlobalIntensity) uniforms.uGlobalIntensity.value = settings.globalIntensity;
        if (uniforms.uSpeedMultiplier) uniforms.uSpeedMultiplier.value = settings.speedMultiplier;
        if (uniforms.uDistortionStrength) uniforms.uDistortionStrength.value = settings.distortionStrength;
        if (uniforms.uColorEnhancement) uniforms.uColorEnhancement.value = settings.colorEnhancement;

        // Glass uniforms
        if (uniforms.uGlassRefractionStrength) uniforms.uGlassRefractionStrength.value = settings.glassRefractionStrength;
        if (uniforms.uGlassChromaticAberration) uniforms.uGlassChromaticAberration.value = settings.glassChromaticAberration;
        if (uniforms.uGlassBubbleClarity) uniforms.uGlassBubbleClarity.value = settings.glassBubbleClarity;
        if (uniforms.uGlassEdgeGlow) uniforms.uGlassEdgeGlow.value = settings.glassEdgeGlow;
        if (uniforms.uGlassLiquidFlow) uniforms.uGlassLiquidFlow.value = settings.glassLiquidFlow;

        // Frost uniforms
        if (uniforms.uFrostIntensity) uniforms.uFrostIntensity.value = settings.frostIntensity;
        if (uniforms.uFrostCrystalSize) uniforms.uFrostCrystalSize.value = settings.frostCrystalSize;
        if (uniforms.uFrostIceCoverage) uniforms.uFrostIceCoverage.value = settings.frostIceCoverage;
        if (uniforms.uFrostTemperature) uniforms.uFrostTemperature.value = settings.frostTemperature;
        if (uniforms.uFrostTexture) uniforms.uFrostTexture.value = settings.frostTexture;

        // Ripple uniforms
        if (uniforms.uRippleFrequency) uniforms.uRippleFrequency.value = settings.rippleFrequency;
        if (uniforms.uRippleAmplitude) uniforms.uRippleAmplitude.value = settings.rippleAmplitude;
        if (uniforms.uRippleWaveSpeed) uniforms.uRippleWaveSpeed.value = settings.rippleWaveSpeed;
        if (uniforms.uRippleRippleCount) uniforms.uRippleRippleCount.value = settings.rippleRippleCount;
        if (uniforms.uRippleDecay) uniforms.uRippleDecay.value = settings.rippleDecay;

        // Plasma uniforms
        if (uniforms.uPlasmaIntensity) uniforms.uPlasmaIntensity.value = settings.plasmaIntensity;
        if (uniforms.uPlasmaSpeed) uniforms.uPlasmaSpeed.value = settings.plasmaSpeed;
        if (uniforms.uPlasmaEnergyIntensity) uniforms.uPlasmaEnergyIntensity.value = settings.plasmaEnergyIntensity;
        if (uniforms.uPlasmaContrastBoost) uniforms.uPlasmaContrastBoost.value = settings.plasmaContrastBoost;
        if (uniforms.uPlasmaTurbulence) uniforms.uPlasmaTurbulence.value = settings.plasmaTurbulence;

        // Timeshift uniforms
        if (uniforms.uTimeshiftDistortion) uniforms.uTimeshiftDistortion.value = settings.timeshiftDistortion;
        if (uniforms.uTimeshiftBlur) uniforms.uTimeshiftBlur.value = settings.timeshiftBlur;
        if (uniforms.uTimeshiftFlow) uniforms.uTimeshiftFlow.value = settings.timeshiftFlow;
        if (uniforms.uTimeshiftChromatic) uniforms.uTimeshiftChromatic.value = settings.timeshiftChromatic;
        if (uniforms.uTimeshiftTurbulence) uniforms.uTimeshiftTurbulence.value = settings.timeshiftTurbulence;
    }, []);

    // Initialize Three.js renderer
    const initializeRenderer = useCallback(async () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Create scene
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
            alpha: false,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reduced from 2 to 1.5 for better performance

        // Create shader material
        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTexture1: { value: null },
                uTexture2: { value: null },
                uProgress: { value: 0.0 },
                uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                uTexture1Size: { value: new THREE.Vector2(1, 1) },
                uTexture2Size: { value: new THREE.Vector2(1, 1) },
                uEffectType: { value: getEffectIndex(SLIDER_CONFIG.settings.currentEffect) },
                // Global settings uniforms
                uGlobalIntensity: { value: SLIDER_CONFIG.settings.globalIntensity },
                uSpeedMultiplier: { value: SLIDER_CONFIG.settings.speedMultiplier },
                uDistortionStrength: { value: SLIDER_CONFIG.settings.distortionStrength },
                uColorEnhancement: { value: SLIDER_CONFIG.settings.colorEnhancement },
                // Glass uniforms
                uGlassRefractionStrength: { value: SLIDER_CONFIG.settings.glassRefractionStrength },
                uGlassChromaticAberration: { value: SLIDER_CONFIG.settings.glassChromaticAberration },
                uGlassBubbleClarity: { value: SLIDER_CONFIG.settings.glassBubbleClarity },
                uGlassEdgeGlow: { value: SLIDER_CONFIG.settings.glassEdgeGlow },
                uGlassLiquidFlow: { value: SLIDER_CONFIG.settings.glassLiquidFlow },
                // Frost uniforms
                uFrostIntensity: { value: SLIDER_CONFIG.settings.frostIntensity },
                uFrostCrystalSize: { value: SLIDER_CONFIG.settings.frostCrystalSize },
                uFrostIceCoverage: { value: SLIDER_CONFIG.settings.frostIceCoverage },
                uFrostTemperature: { value: SLIDER_CONFIG.settings.frostTemperature },
                uFrostTexture: { value: SLIDER_CONFIG.settings.frostTexture },
                // Ripple uniforms
                uRippleFrequency: { value: SLIDER_CONFIG.settings.rippleFrequency },
                uRippleAmplitude: { value: SLIDER_CONFIG.settings.rippleAmplitude },
                uRippleWaveSpeed: { value: SLIDER_CONFIG.settings.rippleWaveSpeed },
                uRippleRippleCount: { value: SLIDER_CONFIG.settings.rippleRippleCount },
                uRippleDecay: { value: SLIDER_CONFIG.settings.rippleDecay },
                // Plasma uniforms
                uPlasmaIntensity: { value: SLIDER_CONFIG.settings.plasmaIntensity },
                uPlasmaSpeed: { value: SLIDER_CONFIG.settings.plasmaSpeed },
                uPlasmaEnergyIntensity: { value: SLIDER_CONFIG.settings.plasmaEnergyIntensity },
                uPlasmaContrastBoost: { value: SLIDER_CONFIG.settings.plasmaContrastBoost },
                uPlasmaTurbulence: { value: SLIDER_CONFIG.settings.plasmaTurbulence },
                // Timeshift uniforms
                uTimeshiftDistortion: { value: SLIDER_CONFIG.settings.timeshiftDistortion },
                uTimeshiftBlur: { value: SLIDER_CONFIG.settings.timeshiftBlur },
                uTimeshiftFlow: { value: SLIDER_CONFIG.settings.timeshiftFlow },
                uTimeshiftChromatic: { value: SLIDER_CONFIG.settings.timeshiftChromatic },
                uTimeshiftTurbulence: { value: SLIDER_CONFIG.settings.timeshiftTurbulence }
            },
            vertexShader,
            fragmentShader
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        scene.add(mesh);

        // Store references
        rendererRef.current = renderer;
        sceneRef.current = scene;
        cameraRef.current = camera;
        shaderMaterialRef.current = shaderMaterial;

        // Load all textures
        const textures: THREE.Texture[] = [];
        for (let i = 0; i < slides.length; i++) {
            try {
                const texture = await loadImageTexture(slides[i].media);
                textures.push(texture);
            } catch (error) {
                console.warn(`Failed to load image ${i}`);
                // Add a placeholder texture if loading fails
                const placeholderTexture = new THREE.Texture();
                textures.push(placeholderTexture);
            }
        }

        slideTexturesRef.current = textures;

        if (textures.length >= 2) {
            shaderMaterial.uniforms.uTexture1.value = textures[0];
            shaderMaterial.uniforms.uTexture2.value = textures[1];
            shaderMaterial.uniforms.uTexture1Size.value = textures[0].userData.size;
            shaderMaterial.uniforms.uTexture2Size.value = textures[1].userData.size;
            setTexturesLoaded(true);
            setSliderEnabled(true);
        }

        // Render loop
        const render = () => {
            animationFrameRef.current = requestAnimationFrame(render);
            renderer.render(scene, camera);
        };
        render();
    }, [slides, loadImageTexture]);

    // Preloader component
    const Preloader: React.FC = () => {
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const animationIdRef = useRef<number | null>(null);

        useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = 300;
            canvas.height = 300;

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            let time = 0;
            let lastTime = 0;

            const dotRings = [
                { radius: 20, count: 8 },
                { radius: 35, count: 12 },
                { radius: 50, count: 16 },
                { radius: 65, count: 20 },
                { radius: 80, count: 24 }
            ];

            const colors = {
                primary: "#ffffff",
                accent: "#dddddd"
            };

            const easeInOutSine = (t: number) => {
                return -(Math.cos(Math.PI * t) - 1) / 2;
            };

            const easeInOutCubic = (t: number) => {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };

            const smoothstep = (edge0: number, edge1: number, x: number) => {
                const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
                return t * t * (3 - 2 * t);
            };

            const hexToRgb = (hex: string) => {
                if (hex.startsWith("#")) {
                    return [
                        parseInt(hex.slice(1, 3), 16),
                        parseInt(hex.slice(3, 5), 16),
                        parseInt(hex.slice(5, 7), 16)
                    ];
                }
                const match = hex.match(/\d+/g);
                return match
                    ? [parseInt(match[0]), parseInt(match[1]), parseInt(match[2])]
                    : [255, 255, 255];
            };

            const interpolateColor = (color1: string, color2: string, t: number, opacity = 1) => {
                const rgb1 = hexToRgb(color1);
                const rgb2 = hexToRgb(color2);
                const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * t);
                const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * t);
                const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * t);
                return `rgba(${r}, ${g}, ${b}, ${opacity})`;
            };

            const animate = (timestamp: number) => {
                if (!lastTime) lastTime = timestamp;
                const deltaTime = timestamp - lastTime;
                lastTime = timestamp;
                time += deltaTime * 0.001;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                ctx.beginPath();
                ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
                const rgb = hexToRgb(colors.primary);
                ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.9)`;
                ctx.fill();

                dotRings.forEach((ring, ringIndex) => {
                    for (let i = 0; i < ring.count; i++) {
                        const angle = (i / ring.count) * Math.PI * 2;
                        const pulseTime = time * 2 - ringIndex * 0.4;
                        const radiusPulse =
                            easeInOutSine((Math.sin(pulseTime) + 1) / 2) * 6 - 3;
                        const x = centerX + Math.cos(angle) * (ring.radius + radiusPulse);
                        const y = centerY + Math.sin(angle) * (ring.radius + radiusPulse);

                        const opacityPhase = (Math.sin(pulseTime + i * 0.2) + 1) / 2;
                        const opacityBase = 0.3 + easeInOutSine(opacityPhase) * 0.7;
                        const highlightPhase = (Math.sin(pulseTime) + 1) / 2;
                        const highlightIntensity = easeInOutCubic(highlightPhase);

                        ctx.beginPath();
                        ctx.arc(x, y, 2, 0, Math.PI * 2);
                        const colorBlend = smoothstep(0.2, 0.8, highlightIntensity);
                        ctx.fillStyle = interpolateColor(
                            colors.primary,
                            colors.accent,
                            colorBlend,
                            opacityBase
                        );
                        ctx.fill();
                    }
                });

                if (timestamp >= 1500) { // Reduced from 3000ms to 1500ms for faster loading
                    setIsLoaded(true);
                    return;
                }

                animationIdRef.current = requestAnimationFrame(animate);
            };

            animationIdRef.current = requestAnimationFrame(animate);

            return () => {
                if (animationIdRef.current) {
                    cancelAnimationFrame(animationIdRef.current);
                }
            };
        }, []);

        if (isLoaded) return null;

        return (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#000000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10000
            }}>
                <canvas ref={canvasRef} />
            </div>
        );
    };

    // Reset progress bar for current slide
    const resetProgressBar = useCallback((slideIndex: number) => {
        const navItems = document.querySelectorAll(`.${styles.slideNavItem}`);
        if (navItems[slideIndex]) {
            const progressFill = navItems[slideIndex].querySelector(`.${styles.slideProgressFill}`);
            if (progressFill) {
                (progressFill as HTMLElement).style.transition = "width 0.2s ease-out";
                (progressFill as HTMLElement).style.width = "0%";
                (progressFill as HTMLElement).style.opacity = "0";
                setTimeout(() => {
                    (progressFill as HTMLElement).style.transition = "width 0.1s ease, opacity 0.3s ease";
                }, 200);
            }
        }
    }, [styles.slideNavItem, styles.slideProgressFill]);

    const handleSlideChange = useCallback(() => {
        if (isTransitioning || !texturesLoaded || !sliderEnabled) return;
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        // Call navigateToSlide directly to avoid circular dependency
        if (isTransitioning || nextIndex === currentSlideIndex || !texturesLoaded || !sliderEnabled) return;

        // Reset current slide progress when manually navigating
        resetProgressBar(currentSlideIndex);

        const currentTexture = slideTexturesRef.current[currentSlideIndex];
        const targetTexture = slideTexturesRef.current[nextIndex];
        if (!currentTexture || !targetTexture || !shaderMaterialRef.current) return;

        setIsTransitioning(true);
        shaderMaterialRef.current.uniforms.uTexture1.value = currentTexture;
        shaderMaterialRef.current.uniforms.uTexture2.value = targetTexture;
        shaderMaterialRef.current.uniforms.uTexture1Size.value = currentTexture.userData.size;
        shaderMaterialRef.current.uniforms.uTexture2Size.value = targetTexture.userData.size;

        setCurrentSlideIndex(nextIndex);
        onSlideChange?.(nextIndex);

        // Animate transition using proper easing (replicating GSAP power2.inOut)
        const startTime = Date.now();
        const duration = SLIDER_CONFIG.settings.transitionDuration * 1000;

        // Power2.inOut easing function (GSAP equivalent)
        const easePower2InOut = (t: number): number => {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        };

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const rawProgress = Math.min(elapsed / duration, 1);
            const easedProgress = easePower2InOut(rawProgress);

            if (shaderMaterialRef.current) {
                shaderMaterialRef.current.uniforms.uProgress.value = easedProgress;
            }

            if (rawProgress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Complete transition
                if (shaderMaterialRef.current) {
                    shaderMaterialRef.current.uniforms.uProgress.value = 0;
                    shaderMaterialRef.current.uniforms.uTexture1.value = targetTexture;
                    shaderMaterialRef.current.uniforms.uTexture1Size.value = targetTexture.userData.size;
                }
                setIsTransitioning(false);
                // Start timer for new slide
                setTimeout(() => {
                    if (sliderEnabled && !isTransitioning) {
                        startAutoSlideTimer();
                    }
                }, 100);
            }
        };

        requestAnimationFrame(animate);
    }, [currentSlideIndex, isTransitioning, texturesLoaded, sliderEnabled, slides.length, resetProgressBar, onSlideChange]);

    // Auto-slide timer functions
    const startAutoSlideTimer = useCallback(() => {
        if (!texturesLoaded || !sliderEnabled || slideTexturesRef.current.length < 2) return;

        // Clear any existing timers
        if (autoSlideTimerRef.current) {
            clearTimeout(autoSlideTimerRef.current);
        }
        if (progressAnimationRef.current) {
            clearInterval(progressAnimationRef.current);
        }

        let progress = 0;
        const totalDuration = SLIDER_CONFIG.settings.autoSlideSpeed; // 8000ms
        const updateInterval = 100; // Update every 100ms for better performance
        const increment = (100 / totalDuration) * updateInterval; // Calculate proper increment

        progressAnimationRef.current = setInterval(() => {
            if (!sliderEnabled || isTransitioning) {
                if (progressAnimationRef.current) {
                    clearInterval(progressAnimationRef.current);
                    progressAnimationRef.current = null;
                }
                return;
            }

            progress += increment;

            // Update progress bar
            const navItems = document.querySelectorAll(`.${styles.slideNavItem}`);
            if (navItems[currentSlideIndex]) {
                const progressFill = navItems[currentSlideIndex].querySelector(`.${styles.slideProgressFill}`);
                if (progressFill) {
                    (progressFill as HTMLElement).style.width = `${Math.min(progress, 100)}%`;
                    (progressFill as HTMLElement).style.opacity = "1";
                }
            }

            if (progress >= 100) {
                if (progressAnimationRef.current) {
                    clearInterval(progressAnimationRef.current);
                    progressAnimationRef.current = null;
                }
                // Fade out progress bar
                const navItems = document.querySelectorAll(`.${styles.slideNavItem}`);
                if (navItems[currentSlideIndex]) {
                    const progressFill = navItems[currentSlideIndex].querySelector(`.${styles.slideProgressFill}`);
                    if (progressFill) {
                        (progressFill as HTMLElement).style.opacity = "0";
                        setTimeout(() => {
                            (progressFill as HTMLElement).style.width = "0%";
                        }, 300);
                    }
                }
                if (!isTransitioning) {
                    handleSlideChange();
                }
            }
        }, updateInterval);
    }, [texturesLoaded, sliderEnabled, isTransitioning, handleSlideChange, currentSlideIndex, styles.slideNavItem, styles.slideProgressFill]);

    const stopAutoSlideTimer = useCallback(() => {
        if (progressAnimationRef.current) {
            clearInterval(progressAnimationRef.current);
            progressAnimationRef.current = null;
        }
        if (autoSlideTimerRef.current) {
            clearTimeout(autoSlideTimerRef.current);
            autoSlideTimerRef.current = null;
        }
    }, []);

    // Navigation functions
    const navigateToSlide = useCallback((targetIndex: number) => {
        if (isTransitioning || targetIndex === currentSlideIndex || !texturesLoaded || !sliderEnabled) return;

        // Reset current slide progress when manually navigating
        resetProgressBar(currentSlideIndex);

        const currentTexture = slideTexturesRef.current[currentSlideIndex];
        const targetTexture = slideTexturesRef.current[targetIndex];
        if (!currentTexture || !targetTexture || !shaderMaterialRef.current) return;

        setIsTransitioning(true);
        shaderMaterialRef.current.uniforms.uTexture1.value = currentTexture;
        shaderMaterialRef.current.uniforms.uTexture2.value = targetTexture;
        shaderMaterialRef.current.uniforms.uTexture1Size.value = currentTexture.userData.size;
        shaderMaterialRef.current.uniforms.uTexture2Size.value = targetTexture.userData.size;

        setCurrentSlideIndex(targetIndex);
        onSlideChange?.(targetIndex);

        // Animate transition using proper easing (replicating GSAP power2.inOut)
        const startTime = Date.now();
        const duration = SLIDER_CONFIG.settings.transitionDuration * 1000;

        // Power2.inOut easing function (GSAP equivalent)
        const easePower2InOut = (t: number): number => {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        };

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const rawProgress = Math.min(elapsed / duration, 1);
            const easedProgress = easePower2InOut(rawProgress);

            if (shaderMaterialRef.current) {
                shaderMaterialRef.current.uniforms.uProgress.value = easedProgress;
            }

            if (rawProgress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Complete transition
                if (shaderMaterialRef.current) {
                    shaderMaterialRef.current.uniforms.uProgress.value = 0;
                    shaderMaterialRef.current.uniforms.uTexture1.value = targetTexture;
                    shaderMaterialRef.current.uniforms.uTexture1Size.value = targetTexture.userData.size;
                }
                setIsTransitioning(false);
                // Start timer for new slide
                setTimeout(() => {
                    if (sliderEnabled && !isTransitioning) {
                        startAutoSlideTimer();
                    }
                }, 100);
            }
        };

        requestAnimationFrame(animate);
    }, [currentSlideIndex, isTransitioning, texturesLoaded, sliderEnabled, onSlideChange, resetProgressBar, startAutoSlideTimer]);

    // Touch handling
    const handleSwipe = useCallback(() => {
        if (Math.abs(touchEndXRef.current - touchStartXRef.current) < 50) return;

        if (touchEndXRef.current < touchStartXRef.current && !isTransitioning && sliderEnabled) {
            // Swipe left - next slide
            stopAutoSlideTimer();
            resetProgressBar(currentSlideIndex);
            handleSlideChange();
        } else if (touchEndXRef.current > touchStartXRef.current && !isTransitioning && sliderEnabled) {
            // Swipe right - previous slide
            stopAutoSlideTimer();
            resetProgressBar(currentSlideIndex);
            const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            navigateToSlide(prevIndex);
        }
    }, [isTransitioning, sliderEnabled, currentSlideIndex, slides.length, stopAutoSlideTimer, handleSlideChange, navigateToSlide, resetProgressBar]);

    // Client-side detection
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Initialize component
    useEffect(() => {
        if (!isClient) return;
        initializeRenderer();
    }, [isClient, initializeRenderer]);

    // Start auto-slide when textures are loaded
    useEffect(() => {
        if (texturesLoaded && sliderEnabled) {
            const timer = setTimeout(() => {
                startAutoSlideTimer();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [texturesLoaded, sliderEnabled, startAutoSlideTimer]);

    // Event listeners
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest(`.${styles.slidesNavigation}`)) return;
            // TODO: Add redirection to respective page based on current slide
            // Example: window.location.href = slides[currentSlideIndex].url;
            if (!isTransitioning && sliderEnabled) {
                stopAutoSlideTimer();
                resetProgressBar(currentSlideIndex);
                handleSlideChange();
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartXRef.current = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndXRef.current = e.changedTouches[0].screenX;
            handleSwipe();
        };

        const handleResize = () => {
            if (rendererRef.current && shaderMaterialRef.current) {
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
                shaderMaterialRef.current.uniforms.uResolution.value.set(
                    window.innerWidth,
                    window.innerHeight
                );
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.code === "ArrowRight") {
                e.preventDefault();
                if (!isTransitioning && sliderEnabled) {
                    stopAutoSlideTimer();
                    resetProgressBar(currentSlideIndex);
                    handleSlideChange();
                }
            } else if (e.code === "ArrowLeft") {
                e.preventDefault();
                if (!isTransitioning && sliderEnabled) {
                    stopAutoSlideTimer();
                    resetProgressBar(currentSlideIndex);
                    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
                    navigateToSlide(prevIndex);
                }
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopAutoSlideTimer();
            } else if (sliderEnabled && !isTransitioning) {
                startAutoSlideTimer();
            }
        };

        document.addEventListener("click", handleClick);
        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchend", handleTouchEnd);
        window.addEventListener("resize", handleResize);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [isTransitioning, sliderEnabled, handleSlideChange, handleSwipe, currentSlideIndex, slides.length, stopAutoSlideTimer, navigateToSlide, startAutoSlideTimer, resetProgressBar]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (autoSlideTimerRef.current) {
                clearTimeout(autoSlideTimerRef.current);
            }
            if (progressAnimationRef.current) {
                clearInterval(progressAnimationRef.current);
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    // Don't render on server side to avoid hydration mismatch
    if (!isClient) {
        return (
            <div className={`${styles.sliderWrapper} ${className}`}>
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: '#000000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10000
                }}>
                    <div style={{ color: '#ffffff', fontFamily: 'monospace' }}>Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${styles.sliderWrapper} ${isLoaded ? styles.loaded : ''} ${className}`}>
            <Preloader />
            <canvas ref={canvasRef} className={styles.webglCanvas} />
            <div className={styles.textOverlay}>
                <h1 className={styles.slideTitle}>{slides[currentSlideIndex].title}</h1>
                <p className={styles.slideDescription}>{slides[currentSlideIndex].description}</p>
            </div>
            <button
                className={styles.slideNumber}
                onClick={(e) => {
                    e.stopPropagation();
                    if (!isTransitioning) {
                        stopAutoSlideTimer();
                        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
                        navigateToSlide(prevIndex);
                    }
                }}
                onMouseEnter={(e) => e.currentTarget.textContent = '←'}
                onMouseLeave={(e) => e.currentTarget.textContent = String(currentSlideIndex + 1).padStart(2, "0")}
            >
                {String(currentSlideIndex + 1).padStart(2, "0")}
            </button>
            <button
                className={styles.slideTotal}
                onClick={(e) => {
                    e.stopPropagation();
                    if (!isTransitioning) {
                        stopAutoSlideTimer();
                        const nextIndex = (currentSlideIndex + 1) % slides.length;
                        navigateToSlide(nextIndex);
                    }
                }}
                onMouseEnter={(e) => e.currentTarget.textContent = '→'}
                onMouseLeave={(e) => e.currentTarget.textContent = String(slides.length).padStart(2, "0")}
            >
                {String(slides.length).padStart(2, "0")}
            </button>
            <nav className={styles.slidesNavigation}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slideNavItem} ${index === currentSlideIndex ? styles.active : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (index !== currentSlideIndex && !isTransitioning) {
                                stopAutoSlideTimer();
                                navigateToSlide(index);
                            }
                        }}
                    >
                        <div className={styles.slideProgressLine}>
                            <div
                                className={styles.slideProgressFill}
                                style={{ width: '0%', opacity: '0' }}
                            />
                        </div>
                        <div className={styles.slideNavTitle}>{slide.title}</div>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default HeroAnimation;
