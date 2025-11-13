"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const integrations = [
    {
        name: "Google Drive",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/66f13c9cbfd2ab1e2d07812b_64d4f29b3cc88f29d2a27f42_Integration%2520logos%2520(5).png",
        style: { top: "52%", left: "calc(0% + 20px)" },
        iconSize: 40,
    },
    {
        name: "Slack",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/66f13c9f21ecc227416e7712_6669b0d7da7702d939c4e3fe_Slack_icon_2019.svg.png",
        style: { top: "27%", left: "calc(10% + 10px)" },
        iconSize: 40,
    },
    {
        name: "Dropbox",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/663b7e7f1290f07f7c8efbc6_dropbox-1.svg",
        style: { top: "8%", left: "calc(22%)" },
        iconSize: 40,
    },
    {
        name: "Notion",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/66f13c9dc745b3cb589da3b8_6581b566b6c315163d00a999_Integration%2520logos%2520(8).png",
        style: { top: "0%", left: "calc(35% + 10px)" },
        iconSize: 40,
    },
    {
        name: "ChatGPT",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/66f13c9bd6126cc4d8d60c96_64f99ca38caea04829497b81_Integration%2520logos%2520(6).png",
        style: { top: "-5%", left: "50%", transform: "translateX(-50%)" },
        isCentral: true,
        iconSize: 48,
    },
    {
        name: "Gmail",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/66f13c9e9d96650391f3a35d_64d4eb3db0f8d65aac13bd7e_Integration%2520logos%2520(4).png",
        style: { top: "0%", right: "calc(35% + 10px)" },
        iconSize: 40,
    },
    {
        name: "Salesforce",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/66f13c9ec0780ccf262cd62f_64d4e91f4295725d07950457_Integration%2520logos.png",
        style: { top: "8%", right: "calc(22%)" },
        iconSize: 40,
    },
    {
        name: "SharePoint",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/66f13ca59416bea7f8987589_64d4e94a6f43bd5b11e4b1c9_sharepoint.png",
        style: { top: "27%", right: "calc(10% + 10px)" },
        iconSize: 40,
    },
    {
        name: "OneDrive",
        src: "https://cdn.prod.website-files.com/633d92770fc68507890ca62d/66f13c9ced678bdd51db376a_64bfa773325ba04290e3b35f_Untitled%2520design%2520(16).png",
        style: { top: "52%", right: "calc(0% + 20px)" },
        iconSize: 40,
    },
];

const LinkMetomicIntegrationsHero = () => {
    return (
        <section className="relative overflow-hidden bg-background py-24 sm:py-32">
            <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(139,127,232,0.15),transparent_70%)]" />
            <div className="container relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-x-2 rounded-full bg-accent-purple-primary/10 px-3.5 py-1.5 text-sm font-medium text-accent-purple-primary ring-1 ring-inset ring-accent-purple-primary/20">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/66028b63893908db90e72dad_integrations-plug-4.svg?"
                            alt="Plug icon"
                            width={13}
                            height={13}
                        />
                        Integrations
                    </div>
                    <h2 className="mt-6 text-[48px] font-black leading-[1.2] tracking-tighter text-text-primary">
                        A data security solution that works for your ecosystem
                    </h2>
                    <p className="mt-6 text-xl leading-8 text-text-secondary">
                        Link Innovations' API connectors allow you to integrate your most high-risk SaaS apps quickly and agent-free, making it easy to add our data security tool to your tech stack
                    </p>
                </div>

                <div className="relative mt-20 sm:mt-24">
                    <div className="relative mx-auto h-auto w-full max-w-[1000px] aspect-[1.8/1]">
                        <div className="absolute inset-x-[15%] bottom-0 top-[20%] flex items-center justify-center">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/65fb619591b5bc831c2c5e23_orb-13.png?"
                                alt="Purple gradient sphere"
                                width={500}
                                height={500}
                                className="h-auto w-full object-contain drop-shadow-[0_0_80px_rgba(157,127,255,0.4)]"
                            />
                        </div>
                        {integrations.map((logo) => (
                            <div
                                key={logo.name}
                                className="absolute transition-transform duration-300 ease-in-out will-change-transform hover:-translate-y-2"
                                style={logo.style}
                            >
                                <div
                                    className={cn(
                                        "flex items-center justify-center rounded-2xl bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.1),0px_4px_8px_rgba(0,0,0,0.05)] backdrop-blur-sm",
                                        logo.isCentral
                                            ? "h-[100px] w-[100px] p-6 lg:h-[110px] lg:w-[110px]"
                                            : "h-[80px] w-[80px] p-5 lg:h-[90px] lg:w-[90px]",
                                    )}
                                >
                                    <Image
                                        src={logo.src}
                                        alt={`${logo.name} logo`}
                                        width={logo.iconSize}
                                        height={logo.iconSize}
                                        className="h-auto w-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <Link href="/integration/all-integrations" className="group inline-flex items-center gap-2 rounded-lg bg-background-quaternary px-6 py-3 text-base font-medium text-text-primary transition-colors hover:bg-white/10">
                        All integrations
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LinkMetomicIntegrationsHero;

