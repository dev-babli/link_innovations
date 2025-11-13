"use client";

import CoreValueStats, { CoreStat } from "@/components/ui/core-value-stats";

export default function CoreValueStatsDemo() {
    const stats: CoreStat[] = [
        {
            value: "8+",
            label: "Years of Innovation",
            description: "Over eight years of building design systems that empower developers and designers.",
        },
        {
            value: "32+",
            label: "Industries Served",
            description: "From fintech to healthcare, we build adaptive digital frameworks for every challenge.",
        },
        {
            value: "20+",
            label: "Creative Partners",
            description: "We work with studios and startups to transform bold ideas into exceptional results.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
        },
        {
            value: "19+",
            label: "Expert Teams",
            description: "A collective of engineers, designers, and strategists united by a shared goal.",
        },
        {
            value: "100+",
            label: "Delivered Projects",
            description: "Every launch is proof of our dedication to craft, performance, and seamless user experience.",
        },
    ];

    return <CoreValueStats stats={stats} />;
}



