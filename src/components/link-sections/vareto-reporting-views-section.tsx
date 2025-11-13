"use client";

import React from 'react';
import Image from 'next/image';

const features = [
    "All of your key metrics in one place",
    "Compare actuals to any version",
    "Group your data however you like",
    "Drill down to transactions, opportunities, vendors, and more.",
];

const LinkVaretoReportingViewsSection = () => {
    return (
        <section className="bg-background-secondary py-20 lg:py-32">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Image */}
                    <div className="relative">
                        <Image
                            src="/images/services/li-service-data-analytics-dashboard-v1.webp"
                            alt="Financial data analytics dashboard showing key metrics and insights"
                            width={800}
                            height={520}
                            className="rounded-2xl shadow-lg w-full h-auto"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (target.src !== "/images/services/li-service-data-analytics-dashboard-v1.jpg") {
                                    target.src = "/images/services/li-service-data-analytics-dashboard-v1.jpg";
                                }
                            }}
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

export default LinkVaretoReportingViewsSection;

