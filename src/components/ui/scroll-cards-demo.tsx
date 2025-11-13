"use client";

import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

const cardItems: iCardItem[] = [
  {
    title: "Web Development",
    description: "Build modern, scalable web applications with cutting-edge technology",
    tag: "development",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    color: "#3B82F6",
    textColor: "white",
  },
  {
    title: "Mobile Applications",
    description: "Create powerful mobile experiences for iOS and Android platforms",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "mobile",
    link: "#",
    color: "#8B5CF6",
    textColor: "white",
  },
  {
    title: "Cloud Services",
    description: "Deploy and scale your infrastructure with enterprise-grade cloud solutions",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "cloud",
    link: "#",
    color: "#06B6D4",
    textColor: "white",
  },
  {
    title: "AI & Automation",
    description: "Transform your business with intelligent automation and machine learning",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "ai",
    link: "#",
    color: "#10B981",
    textColor: "white",
  },
];

export const ScrollCardsDemo = () => {
  return <CardsParallax items={cardItems} />;
};

