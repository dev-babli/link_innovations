"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  "All of your key metrics in one place",
  "Compare actuals to any version",
  "Group your data however you like",
  "Drill down to transactions, opportunities, vendors, and more.",
];

const ReportingViewsSection = () => {
  return (
    <section className="bg-background-secondary py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image */}
          <div className="relative">
            <Image
              src="https://cdn.prod.website-files.com/63da9f0ba87657a719d36e42/66160b617ac97d436b895b46_drill-down-to-discover-blindspots.png"
              alt="A screenshot showing financial data tables with opportunity records including company names, stages, territories, and amounts."
              width={1512}
              height={980}
              className="rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.1)] w-full h-auto"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-[56px] leading-[1.15] tracking-[-0.015em] font-normal mb-6 text-text-primary">
              Reporting and views.
            </h2>
            <p className="text-xl leading-[1.6] text-text-secondary mb-12">
              Get a clear view of your data, from any angle or altitude. Create beautiful, interactive reports in moments. Share different views with each stakeholder.
            </p>
            
            <div className="border-t border-border-divider">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className={`
                    p-8
                    ${index === features.length - 1 ? 'bg-secondary' : 'border-b border-border-divider'}
                  `}
                >
                  <p className="text-xl leading-[1.6] text-text-primary">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReportingViewsSection;