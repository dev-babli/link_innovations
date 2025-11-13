import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const metricsData = [
    {
        stat: "200+",
        description: "projects delivered",
        linkText: "View Portfolio",
        href: "/portfolio",
    },
    {
        stat: "98%",
        description: "client satisfaction rate",
        linkText: "Read Reviews",
        href: "/portfolio",
    },
    {
        stat: "50+",
        description: "enterprise clients",
        linkText: "Case Studies",
        href: "/portfolio",
    },
    {
        stat: "24/7",
        description: "support & monitoring",
        linkText: "Learn More",
        href: "/services",
    },
    {
        stat: "10+",
        description: "years of expertise",
        linkText: "About Us",
        href: "/about",
    },
    {
        stat: "100%",
        description: "on-time delivery",
        linkText: "Our Process",
        href: "/about",
    },
];

const LinkMetricsGrid = () => {
    return (
        <section className="bg-background-primary py-12 lg:py-24">
            <div className="container">
                <div className="mx-auto max-w-[760px] text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                        Results That Speak for Themselves
                    </h2>
                    <p className="mt-4 text-body-lg text-text-secondary">
                        We don't just build software — we deliver measurable business outcomes. From startups to Fortune 500 companies, our clients trust us to transform their digital presence and drive real growth. See how we've helped businesses like yours succeed.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-20">
                    <div className="relative mx-auto flex h-full max-w-[500px] items-center justify-center rounded-lg border border-dashed border-border-subtle p-4 lg:col-span-2 lg:p-10">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-945873-home_measure.png?"
                            alt="Dashboard visualization of Link Innovations engineering metrics including merged PRs, MTTR, cloud costs, and productivity scorecard"
                            width={544}
                            height={544}
                            className="h-auto w-full"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:col-span-3">
                        {metricsData.map((metric, index) => (
                            <a
                                key={index}
                                href={metric.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex h-[220px] flex-col justify-between bg-card p-8 text-left transition-colors hover:bg-background-tertiary sm:p-10"
                            >
                                <div>
                                    <p className="text-5xl font-bold tracking-tight text-text-primary">
                                        {metric.stat}
                                    </p>
                                    <p className="mt-2 text-body-lg text-text-secondary">
                                        {metric.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-text-tertiary transition-colors group-hover:text-text-primary">
                                    <span>{metric.linkText}</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkMetricsGrid;

