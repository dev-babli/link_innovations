import React from "react";

const LinkVaretoCtaSection = () => {
    return (
        <section className="bg-primary py-20 lg:py-32">
            <div className="container">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-[56px] leading-[1.15] tracking-[-0.015em] font-normal mb-6 text-white">
                        Ready to get started?
                    </h2>
                    <p className="text-xl leading-[1.6] text-white/90 mb-12">
                        Join thousands of teams already using Link Innovations to plan,
                        model, and collaborate on their financial future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors">
                            Start free trial
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">
                            Schedule demo
                        </button>
                    </div>

                    <p className="text-white/70 mt-8 text-sm">
                        No credit card required • 14-day free trial • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LinkVaretoCtaSection;

