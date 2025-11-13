"use client";

import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business goals, challenges, and vision to create a strategic roadmap for success.",
    image: "/images/card-stack/discover.png",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "process-2",
    title: "Design & Prototyping",
    description:
      "We create user-centered designs and interactive prototypes to validate concepts before development begins.",
    image: "/images/card-stack/design.png",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "process-3",
    title: "Development & Quality Assurance",
    description:
      "We build scalable, performant solutions with modern technologies and rigorous quality assurance.",
    image: "/images/card-stack/development.png",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "process-4",
    title: "Testing & Refinement",
    description:
      "We test thoroughly, gather feedback, and refine until your solution meets the highest standards.",
    image: "/images/card-stack/testing.png",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "process-5",
    title: "Launch & Deployment",
    description:
      "We handle strategic deployment with zero downtime, ensuring a smooth launch experience.",
    image: "/images/card-stack/launch.png",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "process-6",
    title: "Ongoing Support & Growth",
    description:
      "We provide continuous support, monitoring, and optimization to help your business grow and evolve.",
    image: "/images/card-stack/support.png",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const WORK_PROJECTS = [
  {
    id: "work-project-3",
    title: "YCF DEV",
    services: ["Portfolio", "Partnership", "UI UX Design"],
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-1",
    title: "Stridath Ecommerce",
    services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-2",
    title: "Marketing Agency",
    services: ["Partnership", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ACHIEVEMENTS = [
  {
    id: "achivement-1",
    title: "4",
    description: "site of the day",
    bg: "rgb(58,148,118)",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: "achivement-2",
    title: "60+",
    description: "website created",
    bg: "rgb(195,97,158)",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "achivement-3",
    title: "5+",
    description: "years of experience",
    bg: "rgb(202,128,53)",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "achivement-4",
    title: "6+",
    description: "component created",
    bg: "rgb(135,95,195)",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
  },
];

export const Process = () => {
  return (
    <section className="w-full bg-background-primary py-1 lg:py-3">
      <div className="container mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="left-0 top-0 md:sticky md:h-[calc(100vh-6rem)] md:py-12"
          >
            <div className="flex h-full flex-col justify-center">
              <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
                Planning your{" "}
                <span className="text-text-primary">project development</span>{" "}
                journey
              </h2>
              <p className="text-base leading-[1.6] text-text-secondary max-w-prose mb-10">
                From discovery to deployment, we guide you through every step of
                your project with clarity, transparency, and expertise.
              </p>

              {/* Learn More Button - Improved Design */}
              <div>
                <Link
                  href="/about"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-white text-text-primary font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.12)] overflow-hidden w-fit border border-border-subtle"
                >
                  {/* Button Background Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-background-primary/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Hover illumination effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] transition-opacity duration-300" />

                  <span className="relative z-10">Learn More</span>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-text-primary/10 group-hover:bg-text-primary/15 transition-colors duration-300">
                    <ArrowRight
                      className="w-4 h-4 text-text-primary transition-transform duration-300 group-hover:translate-x-0.5"
                      strokeWidth={2.5}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
          <ContainerScroll className="min-h-[300vh] space-y-6 py-8 md:min-h-[400vh] md:space-y-8 md:py-12">
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className="group overflow-hidden rounded-4xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)]"
              >
                {/* Image Section */}
                <div className="relative w-full h-96 sm:h-[450px] md:h-[500px] overflow-hidden rounded-4xl">
                  <img
                    src={phase.image}
                    alt={phase.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Step Number Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-secondary/90 backdrop-blur-sm border border-border-subtle shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
                    <span className="text-sm font-medium text-text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Text Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10">
                  <div
                    className="relative backdrop-blur-md rounded-b-4xl"
                    style={{
                      background:
                        index < 3
                          ? "linear-gradient(to top, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.60) 25%, rgba(255,255,255,0.40) 50%, rgba(255,255,255,0.25) 75%, transparent 100%)"
                          : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 25%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.30) 75%, transparent 100%)",
                    }}
                  >
                    <div className="p-6 sm:p-8 md:p-10">
                      <div className="mb-2">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-[0.08em] ${
                            index < 3
                              ? "process-text-black"
                              : "process-text-white"
                          }`}
                        >
                          Step {index + 1}
                        </span>
                      </div>

                      <h2
                        className={`text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.015em] mb-3 ${
                          index < 3
                            ? "process-text-black"
                            : "process-text-white"
                        }`}
                      >
                        {phase.title}
                      </h2>

                      <p
                        className={`text-sm sm:text-base leading-[1.5] max-w-xl font-medium ${
                          index < 3
                            ? "process-text-black"
                            : "process-text-white"
                        }`}
                        style={{ opacity: index < 3 ? 0.9 : 0.95 }}
                      >
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
    </section>
  );
};

export const Work = () => {
  return (
    <div className="w-full bg-white px-4 py-12 text-gray-900 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <h5 className="mb-4 text-xs uppercase tracking-wide text-gray-600">
            latest projects
          </h5>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Get a glimpse of <span className="text-indigo-600">our work</span>
          </h2>
          <p className="mx-auto max-w-prose text-sm leading-relaxed text-gray-600 sm:text-base">
            From ecommerce to startup landing pages and singl/multi page
            websites, building fully responsive and functional website that
            showcase your product and your unique identity.
          </p>
        </div>
        <ContainerScroll className="min-h-[300vh] py-6 sm:min-h-[400vh] md:min-h-[500vh] md:py-12">
          {WORK_PROJECTS.map((project, index) => (
            <CardSticky
              key={project.id}
              index={index}
              className="group w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
              incrementY={60}
              incrementZ={5}
            >
              <div className="relative h-64 w-full overflow-hidden sm:h-80">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width="100%"
                  height="100%"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 bg-white px-4 py-4 sm:px-6 sm:py-5">
                <h2 className="text-xl font-bold tracking-tighter text-gray-900 sm:text-2xl">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <div
                      key={service}
                      className="flex rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 sm:rounded-xl sm:px-4"
                    >
                      <span className="tracking-tight">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  );
};

export const Achievements = () => {
  return (
    <div className="w-full bg-white px-4 py-12 text-gray-900 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <h5 className="mb-4 text-xs uppercase tracking-wide text-gray-600">
            achievements
          </h5>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our <span className="text-indigo-600">milestones</span>
          </h2>
        </div>
        <ContainerScroll className="min-h-[300vh] place-items-center space-y-6 py-6 text-center sm:min-h-[400vh] md:space-y-8 md:py-12">
          {ACHIEVEMENTS.map((achievement, index) => (
            <CardSticky
              key={achievement.id}
              incrementY={20}
              index={index + 2}
              className="group relative flex h-64 w-full max-w-md flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl sm:h-72 sm:w-[420px]"
              style={{ rotate: index + 2 }}
            >
              <div className="absolute inset-0">
                <img
                  src={achievement.image}
                  alt={achievement.description}
                  className="h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                />
              </div>
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="text-left">
                  <h1 className="text-5xl font-semibold text-gray-900 sm:text-6xl">
                    {achievement.title}
                  </h1>
                </div>
                <div className="text-right">
                  <h3 className="max-w-[10ch] text-wrap text-2xl font-semibold capitalize tracking-tight text-gray-800 sm:text-3xl">
                    {achievement.description}
                  </h3>
                </div>
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  );
};
