import Image from "next/image";
import React from "react";

const integrations = [
    {
        name: "Salesforce",
        logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_salesforce-logo.svg?",
        description: "Sync your sales data seamlessly"
    },
    {
        name: "HubSpot",
        logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_hubspot-logo.svg?",
        description: "Connect your marketing data"
    },
    {
        name: "QuickBooks",
        logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_quickbooks-logo.svg?",
        description: "Import financial records"
    },
    {
        name: "Stripe",
        logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_stripe-logo.svg?",
        description: "Track payment data"
    },
    {
        name: "Google Analytics",
        logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_google-analytics-logo.svg?",
        description: "Analyze web performance"
    },
    {
        name: "Slack",
        logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_slack-logo.svg?",
        description: "Get notifications and updates"
    }
];

const LinkVaretoIntegrationsSection = () => {
    return (
        <section className="bg-background-secondary py-20 lg:py-32">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-[56px] leading-[1.15] tracking-[-0.015em] font-normal mb-6 text-text-primary">
                        Integrations.
                    </h2>
                    <p className="text-xl leading-[1.6] text-text-secondary max-w-3xl mx-auto">
                        Connect Link Innovations with your favorite tools and data sources.
                        Seamlessly sync information across your entire tech stack.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                    {integrations.map((integration, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center">
                                <Image
                                    src={integration.logo}
                                    alt={`${integration.name} logo`}
                                    width={48}
                                    height={48}
                                    className="w-full h-auto"
                                />
                            </div>
                            <h3 className="text-sm font-medium text-text-primary text-center mb-2">
                                {integration.name}
                            </h3>
                            <p className="text-xs text-text-secondary text-center">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-primary font-medium">
                        <span>View all integrations</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkVaretoIntegrationsSection;

