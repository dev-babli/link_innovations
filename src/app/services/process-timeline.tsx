"use client";

import { Briefcase, ImageIcon, Box, Cpu, Server } from "lucide-react";

const services = [
  {
    title: "Analyze Business Needs",
    description:
      "First, we assess your business needs and existing tech ecosystem to determine if AI-driven solutions are the right investment and how they will add value to your operational growth.",
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Evaluate Data Sources",
    description:
      "Next, we explore and evaluate data sources, including corporate assets and public databases. This step ensures we have relevant and high-quality data for AI model development.",
    icon: <ImageIcon className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Design the Product",
    description:
      "We choose the best tech stack, craft the product’s architecture, and outline an implementation plan. We also offer a PoC to validate feasibility and viability.",
    icon: <Box className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Develop AI Solution",
    description:
      "Our AI developers conduct data preprocessing, model training, and validation to ensure a high-performing solution.",
    icon: <Cpu className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Deploy AI Model",
    description:
      "Here comes the most vital step of the process. We deploy the model into production, ensuring scalability and reliability.",
    icon: <Server className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Ongoing Support",
    description:
      "We provide post-deployment monitoring, maintenance, and model updates to keep your AI solutions running smoothly.",
    icon: <Server className="w-6 h-6 text-indigo-600" />,
  },
];

export default function AiRoadmap() {
  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-6 rounded-3xl shadow-lg mt-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
        AI Solution Development Roadmap
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Implementing AI in business requires a structured approach to ensure seamless integration, reliability, and measurable outcomes. We follow a structured process that focuses on leveraging AI to unlock new business opportunities while maintaining security and compliance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:bg-indigo-500 transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
