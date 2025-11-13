import Image from "next/image";
import React from "react";

const LinkVaretoAiInsightsSection = () => {
    return (
        <section className="bg-background-secondary py-20 lg:py-32">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col">
                        <h2 className="text-[56px] leading-[1.15] tracking-[-0.015em] font-normal mb-6 text-text-primary">
                            AI insights.
                        </h2>
                        <p className="text-xl leading-[1.6] text-text-secondary mb-12">
                            Get a clear view of your data, from any angle or altitude. Create beautiful, interactive reports in moments. Share different views with each stakeholder.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                                    <span className="text-white text-sm font-medium">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-text-primary mb-2">Smart Data Analysis</h3>
                                    <p className="text-text-secondary">AI-powered insights that automatically identify trends and anomalies in your financial data.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                                    <span className="text-white text-sm font-medium">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-text-primary mb-2">Predictive Forecasting</h3>
                                    <p className="text-text-secondary">Advanced algorithms that help you make more accurate predictions and strategic decisions.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                                    <span className="text-white text-sm font-medium">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-text-primary mb-2">Automated Reporting</h3>
                                    <p className="text-text-secondary">Generate comprehensive reports automatically with AI-generated insights and recommendations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative">
                        <Image
                            src="https://cdn.prod.website-files.com/63da9f0ba87657a719d36e42/66160b617ac97d436b895b46_drill-down-to-discover-blindspots.png"
                            alt="AI-powered financial insights dashboard showing data analysis and predictions"
                            width={1512}
                            height={980}
                            className="rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.1)] w-full h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LinkVaretoAiInsightsSection;

