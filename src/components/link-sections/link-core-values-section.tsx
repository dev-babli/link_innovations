"use client";

import CoreValueStats, { CoreStat } from "@/components/ui/core-value-stats";

export default function LinkCoreValuesSection() {
    const stats: CoreStat[] = [
        {
            value: "500+",
            label: "Projects Delivered",
            description: "Over 500 successful projects delivered across multiple industries, from startups to Fortune 500 companies.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        },
        {
            value: "99%",
            label: "Client Satisfaction",
            description: "Our commitment to excellence ensures the highest client satisfaction rates in the industry.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
        },
        {
            value: "50+",
            label: "Enterprise Clients",
            description: "Trusted by leading enterprises worldwide to deliver cutting-edge technology solutions.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
        },
        {
            value: "24/7",
            label: "Support Available",
            description: "Round-the-clock support to ensure your business never stops moving forward.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        },
        {
            value: "100+",
            label: "Expert Team Members",
            description: "A collective of engineers, designers, and strategists dedicated to your success.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
        },
    ];

    return (
        <CoreValueStats
            subtitle="Trusted by Industry Leaders"
            title="Trusted by innovative companies worldwide"
            description="From startups to Fortune 500 companies, we deliver cutting-edge technology solutions that drive business growth and digital transformation."
            stats={stats}
        />
    );
}

