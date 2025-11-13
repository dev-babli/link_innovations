"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain,
  Eye,
  Bot,
  Cpu,
  Shield,
  Users,
  Rocket,
  Heart,
  Globe,
  Sparkles,
} from "lucide-react";

export default function AboutUs() {
  return (
    <main className="relative bg-black text-gray-100 overflow-hidden">
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.1),transparent_60%)]"></div>
      <section className="relative w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 overflow-hidden">
        {/* BACKGROUND LIGHTS */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/60 to-black"></div>
        <div className="absolute top-[-200px] left-[-150px] w-[700px] h-[700px] bg-indigo-700/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-250px] right-[-200px] w-[800px] h-[800px] bg-purple-600/25 rounded-full blur-[160px]"></div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex-1 space-y-10 mt-24 md:mt-0"
        >
          {/* SPARKLE WELCOME */}
          <div className="flex items-center gap-2 text-indigo-400 mt-10">
            <span className="animate-pulse">✨</span>
            <p className="uppercase tracking-widest text-sm font-medium">
              Welcome to Link Innovation UI
            </p>
          </div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white"
          >
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500">
              Ideas into Intelligence
            </span>
          </motion.h1>

          {/* MAIN PARAGRAPH */}
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            At{" "}
            <span className="text-indigo-400 font-semibold">
              Link Innovation UI
            </span>
            , we merge human creativity with artificial intelligence to craft
            transformative digital ecosystems that empower organizations and
            inspire progress.
          </p>

          {/* ADDITIONAL PARAGRAPH */}
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            From intelligent automation and predictive analytics to
            next-generation design experiences, we help businesses embrace a
            smarter, data-driven future. Our mission is not just to innovate —
            but to elevate how humanity connects, creates, and evolves through
            technology.
          </p>

          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            Every solution we build combines empathy with intelligence —
            ensuring digital transformation is not only powerful, but also
            purposeful.
          </p>

          {/* CTA BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(99,102,241,0.6)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-indigo-600 hover:bg-indigo-500 px-10 py-4 rounded-2xl text-white font-semibold shadow-lg transition-all mt-4"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center mt-16 md:mt-0 relative z-10">
          <div className="relative w-[720px] h-[660px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/link-innovation/link-innovation-about.jpg"
              alt="Link Innovation Illustration"
              fill
              sizes="100vw"
              className="object-cover rounded-[2.5rem]"
            />
          </div>
        </div>
      </section>

      {/* WHO WE ARE - ADVANCED DESIGN */}
      <section className="relative w-full bg-black text-white py-22 px-4 md:px-8 overflow-hidden">
        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          {/* LEFT SIDE - TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm uppercase tracking-[5px] text-indigo-400 font-semibold"
            >
              About Our Vision
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-white"
            >
              Who We Are
            </motion.h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              We are a collective of{" "}
              <span className="text-white font-semibold">
                innovators, engineers, and dreamers
              </span>{" "}
              reshaping digital transformation through the fusion of creativity
              and AI. At{" "}
              <span className="text-indigo-400 font-semibold">
                Link Innovation UI
              </span>
              , we craft intelligent ecosystems that empower organizations to
              scale, adapt, and thrive.
            </p>

            <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
              Our foundation is built on{" "}
              <span className="text-indigo-400">
                trust, transparency, and technology
              </span>
              . We focus on blending human insight with automation precision —
              turning ideas into sustainable, data-driven innovations that
              redefine business impact globally.
            </p>

            <ul className="space-y-3 text-gray-400 list-disc list-inside">
              <li>AI-first approach to innovation & product engineering</li>
              <li>Collaborative, transparent, and growth-driven mindset</li>
              <li>
                Human-centered design that empowers meaningful experiences
              </li>
            </ul>
          </motion.div>

          {/* RIGHT SIDE - STATS GRID */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid sm:grid-cols-2 gap-8 relative"
          >
            {/* Floating Glow Element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

            {[
              ["10+", "Years of Experience"],
              ["50+", "Clients Served"],
              ["20+", "Countries Reached"],
              ["100+", "Projects Delivered"],
              ["30+", "AI Solutions Built"],
              ["15+", "Industry Partnerships"],
            ].map(([num, label], i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.1,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow: "0 0 40px rgba(99,102,241,0.5)",
                }}
                transition={{ duration: 0.4, type: "spring" }}
                className="relative bg-gradient-to-b from-gray-900/90 to-gray-800/60 border border-gray-700/60 rounded-3xl p-10 text-center backdrop-blur-lg hover:border-indigo-400/40 hover:from-gray-900 hover:to-gray-900 transition-all group overflow-hidden"
              >
                {/* inner glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10"></div>

                <h3 className="text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
                  {num}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="relative py-18 bg-black overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-800/10 to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-white"
          >
            Our Journey
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mx-auto text-center text-gray-400 text-lg leading-relaxed mb-10"
          >
            <p>
              From a small team of dreamers to a global innovation powerhouse —
              our journey at{" "}
              <span className="text-white font-semibold">
                Link Innovation UI
              </span>{" "}
              has always been about pushing boundaries, merging design with
              intelligence, and empowering digital transformation across
              industries.
            </p>
            <p className="mt-4">
              Each milestone we achieve is a step toward crafting a smarter,
              more human-centered future powered by AI.
            </p>
          </motion.div>

          {/* Timeline grid */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-10">
            {[
              {
                year: "2018",
                title: "The Beginning",
                desc: "We started as a small creative team with one mission — to redefine how humans interact with digital experiences.",
              },
              {
                year: "2021",
                title: "Global Expansion",
                desc: "Our AI-driven innovation found a global voice as we partnered with enterprises across industries and continents.",
              },
              {
                year: "2024",
                title: "Future Forward",
                desc: "Today, we build intelligent ecosystems that learn, adapt, and evolve — shaping tomorrow’s digital landscape.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(99,102,241,0.4)",
                }}
                className="relative group bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-gray-700/60 hover:border-indigo-500/40 
                     rounded-3xl p-10 w-full md:w-[340px] backdrop-blur-lg transition-all duration-500"
              >
                {/* Glow ring behind year */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all"></div>

                <div className="relative z-10 text-center">
                  <h3 className="text-5xl font-extrabold text-indigo-400 mb-3 tracking-tight">
                    {item.year}
                  </h3>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative w-full bg-black text-white py-10 px-6 md:px-12 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center mb-6 text-white"
          >
            Mission & Vision
          </motion.h2>

          {/* Sub-paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            At{" "}
            <span className="text-indigo-400 font-semibold">
              Link Innovation UI
            </span>
            , our mission and vision guide every step of our journey — from
            designing intelligent systems to building AI-driven ecosystems that
            reshape industries and empower human potential.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            {
              icon: <Rocket className="text-indigo-400" size={36} />,
              title: "Mission",
              desc: "To empower organizations through intelligent, data-driven solutions that amplify efficiency, creativity, and innovation.",
            },
            {
              icon: <Eye className="text-indigo-400" size={36} />,
              title: "Vision",
              desc: "To be the leading force behind global digital transformation through next-generation AI and automation.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(99,102,241,0.4)",
                borderColor: "rgba(99,102,241,0.4)",
              }}
              className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-gray-700/70 rounded-3xl p-10 
                   backdrop-blur-xl transition-all duration-500 hover:from-gray-900 hover:to-gray-900"
            >
              {/* Icon Glow */}
              <div className="absolute -top-6 left-8 w-16 h-16 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/40 transition-all" />
              <div className="relative z-10 flex flex-col items-start">
                <div className="p-3 bg-gray-900/80 rounded-2xl border border-gray-700 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-black text-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Helping You Thrive in the AI Era
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Empowering your organization to innovate, adapt, and lead
              confidently with AI — from infrastructure to customer experience.
            </p>
          </div>

          {/* CARD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Build the Right Foundation",
                desc: "Modernize your cloud, data, and technology infrastructure so you can hit the ground running with AI.",
                icon: "⚙️",
              },
              {
                title: "Rethink Work",
                desc: "Transform how, when, and where work gets done — going beyond productivity and empowering creativity.",
                icon: "💡",
              },
              {
                title: "Innovate the Customer Experience",
                desc: "Push beyond automation into innovation, enabling your teams to deliver next-level customer experiences.",
                icon: "🚀",
              },
              {
                title: "Create Trust and Security",
                desc: "Embrace the potential of AI while keeping your organization, people, and customers safe.",
                icon: "🛡️",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-500 p-8 overflow-hidden"
              >
                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl"></div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-black text-white py-24 px-6 md:px-16 relative overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-700/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-700/10 blur-[150px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* HEADER */}
          <h2 className="text-4xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-indigo-400">Link Innovation UI</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
            We combine AI excellence, creativity, and technology to deliver
            next-generation solutions that empower organizations to innovate and
            lead.
          </p>

          {/* GRID OF CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "⚡",
                title: "Unmatched Expertise",
                desc: "Our deep technical mastery in AI, automation, and digital transformation ensures scalable and future-ready outcomes.",
              },
              {
                icon: "🎯",
                title: "Result-Driven Strategy",
                desc: "We focus on real-world impact — crafting solutions that are measurable, efficient, and aligned with business goals.",
              },
              {
                icon: "🤝",
                title: "Human-Centered Design",
                desc: "Our approach is grounded in empathy — designing intuitive, accessible, and meaningful experiences for people.",
              },
              {
                icon: "🌍",
                title: "Global Reach",
                desc: "With clients in over 20 countries, we bring global perspectives that fuel creativity and innovation.",
              },
              {
                icon: "💡",
                title: "Continuous Innovation",
                desc: "We stay ahead of the curve — experimenting, learning, and evolving to deliver solutions that define the future.",
              },
              {
                icon: "🛡️",
                title: "Responsible AI",
                desc: "Every innovation we create is built responsibly — ensuring ethical, sustainable, and human-centric outcomes.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8 text-left 
          hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] 
          transition-all duration-500 overflow-hidden group"
              >
                {/* GLOW EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl"></div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CULTURE */}
      <section className="bg-black py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-black to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
          <p className="text-gray-400 max-w-5xl mx-auto mb-16 text-lg">
            At Link Innovation UI, culture is the pulse of everything we create.
            We thrive on empathy, innovation, collaboration, and a shared belief
            that technology can shape a more human future.
          </p>

          {/* CULTURE ICONS */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-10">
            {[
              {
                icon: (
                  <div className="bg-gray-900/60 border border-gray-800 p-5 rounded-2xl shadow-md backdrop-blur-lg">
                    {/* Empathy Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-blue-400 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c1.656 0 3-1.344 3-3S13.656 5 12 5s-3 1.344-3 3 1.344 3 3 3zM19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                      />
                    </svg>
                  </div>
                ),
                title: "Empathy First",
                desc: "We lead with understanding, ensuring every innovation respects people and their experiences.",
              },
              {
                icon: (
                  <div className="bg-gray-900/60 border border-gray-800 p-5 rounded-2xl shadow-md backdrop-blur-lg">
                    {/* Creativity Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-indigo-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
                      />
                    </svg>
                  </div>
                ),
                title: "Creative Freedom",
                desc: "Our teams experiment fearlessly — where bold imagination meets precision engineering.",
              },
              {
                icon: (
                  <div className="bg-gray-900/60 border border-gray-800 p-5 rounded-2xl shadow-md backdrop-blur-lg">
                    {/* Global Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-cyan-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0v18m0-9H3m9 0h18"
                      />
                    </svg>
                  </div>
                ),
                title: "Global Mindset",
                desc: "We collaborate across borders, blending diverse perspectives into every solution we build.",
              },
              {
                icon: (
                  <div className="bg-gray-900/60 border border-gray-800 p-5 rounded-2xl shadow-md backdrop-blur-lg">
                    {/* Innovation Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-purple-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2v4m0 12v4m8-8h4M2 12H6m12.364-7.636l2.828 2.828M4.808 19.192l2.828-2.828M19.192 19.192l-2.828-2.828M7.636 4.808L4.808 7.636"
                      />
                    </svg>
                  </div>
                ),
                title: "Innovation DNA",
                desc: "Innovation isn't an act — it’s in our core. We question, reimagine, and reinvent constantly.",
              },
              {
                icon: (
                  <div className="bg-gray-900/60 border border-gray-800 p-5 rounded-2xl shadow-md backdrop-blur-lg">
                    {/* Integrity Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-emerald-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                ),
                title: "Integrity at Core",
                desc: "We uphold transparency and trust — because strong values are the foundation of innovation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center transition-transform hover:scale-105"
              >
                <div className="inline-block">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-[260px] mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black py-28 px-6 text-center overflow-hidden">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-700/20 blur-[180px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-purple-700/10 blur-[160px] rounded-full"></div>
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-8xl mx-auto"
        >
          <p className="uppercase tracking-[5px] text-indigo-400 mb-4 font-semibold">
            Let’s Collaborate
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
            Build the Future with{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Link Innovation UI
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-4xl mx-auto">
            From AI transformation to intelligent automation, we partner with
            forward-thinking teams to design digital ecosystems that inspire
            innovation and drive results.
          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 40px rgba(99,102,241,0.6)",
            }}
            transition={{ duration: 0.3 }}
            className="relative bg-indigo-600 hover:bg-indigo-500 px-12 py-4 rounded-full font-semibold text-white text-lg transition-all"
          >
            Let’s Talk →
          </motion.button>
        </motion.div>

        {/* DECORATIVE LINES / PARTICLES */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      </section>
    </main>
  );
}
