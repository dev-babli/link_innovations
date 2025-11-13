import { cn } from "@/lib/utils";

const LOGOS = [
    { name: "HealthTech Solutions", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/64d2493582f41e59b4c088ff_affirm-7.svg?" },
    { name: "FinanceHub", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/canva-logo-8.svg?" },
    { name: "RetailPro", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/66a93bb62e703eb3e11c4131_attentive-logo-180-64-light-9.svg?" },
    { name: "EduLearn University", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/66a93d0ece92bf0b0ff36795_oreilly-logo-180-64-light-10.svg?" },
    { name: "ManufactureMax", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/6622dec49bf9dbd99d74f64f_skyscanner-11.svg?" },
    { name: "AgriTech Systems", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/64d2494c9f412fb1a1e41658_avianca-12.svg?" },
    { name: "Energy Solutions Corp", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/64d248fd7e819903941d6018_tripadvisor-13.svg?" },
    { name: "TechVision Inc", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/6633fb6a345c88c5059058ab_logo-grammarly-14.svg?" },
    { name: "MedCare Global", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/64f0b14eeac4d00b3e9d3d90_national-geographic-15.svg?" },
    { name: "SecureBank", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/bumble-logo-banner-16.svg?" },
    { name: "DataFlow Analytics", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/65720e02da87bd0b916cff32_logo-xero-17.svg?" },
    { name: "CloudFirst Systems", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/64d2490e8718fb26707ba839_sofi-18.svg?" },
    { name: "SmartFactory Industries", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/fanatics-logo-banner-19.svg?" },
    { name: "InnovateTech", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/clear-logo-20.svg?" },
    { name: "Global Commerce", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/workleap-180x64-21.svg?" },
];

const Logo = ({ src, alt }: { src: string; alt: string }) => (
    <img
        src={src}
        alt={alt}
        className="h-10 w-auto max-w-[152px] flex-shrink-0 object-contain grayscale brightness-80 transition-all duration-300 hover:grayscale-0 hover:brightness-100 md:h-[55px]"
    />
);

const MarqueeGroup = ({ logos }: { logos: { name: string; src: string }[] }) => (
    <div className="flex shrink-0 items-center justify-start gap-12 px-6 md:gap-20">
        {logos.map((logo, index) => (
            <Logo key={`${logo.name}-${index}`} src={logo.src} alt={logo.name} />
        ))}
    </div>
);

type MarqueeRowProps = {
    logos: { name: string; src: string }[];
    reverse?: boolean;
    duration?: number;
    className?: string;
};

const MarqueeRow = ({ logos, reverse = false, duration = 80, className }: MarqueeRowProps) => {
    return (
        <div
            className={cn(
                "flex w-max items-center",
                `animate-[marquee_${duration}s_linear_infinite]`,
                { "animate-[marquee-reverse_100s_linear_infinite]": reverse },
                className
            )}
        >
            <MarqueeGroup logos={logos} />
            <div aria-hidden="true">
                <MarqueeGroup logos={logos} />
            </div>
        </div>
    );
};


export default function LinkLogoMarquee() {
    const row2Logos = [...LOGOS.slice(5), ...LOGOS.slice(0, 5)];
    const row3Logos = [...LOGOS.slice(10), ...LOGOS.slice(0, 10)];
    const row4Logos = [...LOGOS.slice(2), ...LOGOS.slice(0, 2)];

    return (
        <section className="bg-black py-16 md:py-24">
            <style>
                {`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-100%); } }
          @keyframes marquee-reverse { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        `}
            </style>
            <div className="relative w-full space-y-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <MarqueeRow logos={LOGOS} duration={90} />
                <MarqueeRow logos={row2Logos} reverse duration={75} />
                <MarqueeRow logos={row3Logos} duration={80} className="hidden lg:flex" />
                <MarqueeRow logos={row4Logos} reverse duration={100} className="hidden lg:flex" />
            </div>
        </section>
    );
}
