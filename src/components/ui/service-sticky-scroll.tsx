"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { createServiceStickyContent } from "@/components/ui/sticky-scroll-demo";

interface ServiceStickyScrollProps {
    serviceName: string;
    serviceDescription: string;
    customContent?: Array<{
        title: string;
        description: string;
        content?: React.ReactNode;
    }>;
}

export function ServiceStickyScroll({
    serviceName,
    serviceDescription,
    customContent
}: ServiceStickyScrollProps) {
    const content = customContent || createServiceStickyContent(serviceName, serviceDescription);

    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}




