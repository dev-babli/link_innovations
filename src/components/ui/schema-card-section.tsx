"use client";

import React from 'react';
import SchemaCard from '@/components/ui/schema-card-with-animated-wave-visualizer';

export const SchemaCardSection = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 z-20 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Database Schema Management
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Visualize and manage your database schemas with powerful tools
          </p>
        </div>
        <div className="relative z-10">
          <SchemaCard />
        </div>
      </div>
    </section>
  );
};

