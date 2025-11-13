"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";

  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  return (
    <motion.span
      className={cn("inline-block bg-gradient-to-r from-[#f0d3f7] to-[#b98ea7] bg-clip-text text-transparent", isSpace && "w-4")}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};
const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 50, 0],
  );

  return (
    <motion.img
      src={char}
      className={cn("inline-block", isSpace && "w-4")}
      style={{
        x,
        scale,
        y,
        transformOrigin: "center",
      }}
    />
  );
};
const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 90, 0],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      className={cn("inline-block", isSpace && "w-4")}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    />
  );
};

const Skiper31 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
  });

  const text = "Our Services Excellence";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const serviceIcons = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  ];
  const iconCenterIndex = Math.floor(serviceIcons.length / 2);

  return (
    <ReactLenis root>
      <main className="w-full bg-gradient-to-br from-[#120d31] via-[#302f4d] to-[#a57982]">
        <div className="top-22 absolute left-1/2 z-10 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-white">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-60 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#f0d3f7] after:to-[#b98ea7] after:content-['']">
            Scroll to see more
          </span>
        </div>
        <div
          ref={targetRef}
          className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden bg-gradient-to-br from-[#120d31] via-[#302f4d] to-[#a57982] p-[2vw]"
        >
          <div
            className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter bg-gradient-to-r from-[#f0d3f7] via-[#b98ea7] to-[#a57982] bg-clip-text text-transparent"
            style={{
              perspective: "500px",
            }}
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
        <div
          ref={targetRef2}
          className="relative -mt-[100vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-gradient-to-br from-[#302f4d] via-[#a57982] to-[#b98ea7] p-[2vw]"
        >
          <p className="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-white">
            <Bracket className="h-12 text-[#f0d3f7]" />
            <span className="font-geist font-medium">
              integrate with your favorite services
            </span>
            <Bracket className="h-12 scale-x-[-1] text-[#f0d3f7]" />
          </p>
          <div className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-white">
            {serviceIcons.map((char, index) => (
              <CharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>
        <div
          ref={targetRef3}
          className="relative -mt-[95vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-gradient-to-br from-[#a57982] via-[#b98ea7] to-[#f0d3f7] p-[2vw]"
        >
          <p className="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-white">
            <Bracket className="h-12 text-[#302f4d]" />
            <span className="font-geist font-medium">
              discover our comprehensive solutions
            </span>
            <Bracket className="h-12 scale-x-[-1] text-[#302f4d]" />
          </p>
          <div
            className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-white"
            style={{
              perspective: "500px",
            }}
          >
            {serviceIcons.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>
      </main>
    </ReactLenis>
  );
};

export { CharacterV1, CharacterV2, CharacterV3, Skiper31 };

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="#000"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};

/**
 * Skiper 31 ScrollAnimation_002 — React + framer motion + lenis
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
