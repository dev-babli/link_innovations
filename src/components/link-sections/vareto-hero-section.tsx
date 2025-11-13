"use client";
import React from "react";
import Image from "next/image";

const LinkVaretoHeroSection = () => {
    const g2Badges = [
        {
            src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/6425e79b0f9e10836e65d01c_users-love-us-2.svg?",
            alt: "Users Love Us G2 Badge",
            width: 96,
            height: 96,
        },
        {
            src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6838fec7cd45b328114a09bf_BusinessIntelligence_HighPerformer_HighPerformer-1.png?",
            alt: "G2 High Performer Badge",
            width: 79,
            height: 96,
        },
        {
            src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6838fef0d0ef4305f4bd0520_BudgetingandForecasting_BestSupport_QualityOfSupport-2.png?",
            alt: "G2 Best Support Badge",
            width: 79,
            height: 96,
        },
        {
            src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6838fefe0319b80f32c6510b_BudgetingandForecasting_EasiestToUse_EaseOfUse-3.png?",
            alt: "G2 Easiest to Use Badge",
            width: 79,
            height: 96,
        },
        {
            src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6838ff0a84edc8a5127da540_FP%26A(FinancialPlanning%26Analysis)_BestEstimatedROI_Mid-Market_Roi-4.png?",
            alt: "G2 Best Estimated ROI Badge",
            width: 79,
            height: 96,
        },
        {
            src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/6838ff1845d37893ffd00f2d_FP%26A(FinancialPlanning%26Analysis)_FastestImplementation_Mid-Market_GoLiveTime-3.svg?",
            alt: "G2 Fastest Implementation Badge",
            width: 80,
            height: 96,
        },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <main>
            <div className="bg-gradient-to-b from-[#f5f3ff] to-white">
                <div className="mx-auto max-w-[1200px] px-10">
                    <div className="py-24 text-center sm:py-32">
                        <div className="mx-auto max-w-[896px]">
                            <h1 className="mb-6 font-display text-[56px] font-normal leading-none -tracking-[0.02em] text-text-primary sm:text-[72px] lg:text-[80px]">
                                Building innovative digital solutions for modern businesses
                            </h1>
                            <p className="mx-auto mt-4 max-w-[620px] text-[20px] leading-[1.6] text-text-secondary">
                                Link Innovations delivers cutting-edge technology solutions across web, mobile, AI, cloud, and cybersecurity.
                            </p>
                        </div>
                        <div className="mx-auto mt-10 max-w-sm">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="h-14 flex-grow rounded-lg border border-input bg-white px-5 text-base text-black placeholder:text-placeholder focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    aria-label="Your Email"
                                />
                                <button
                                    type="submit"
                                    className="text-button flex h-14 items-center justify-center rounded-lg bg-button-primary-bg px-8 text-button-primary-text transition-transform duration-150 ease-in-out hover:scale-[1.02]"
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                        <div className="mt-16 px-0 md:px-0 lg:-px-8">
                            <Image
                                src="https://i.imgur.com/uI927aK.png"
                                alt="Link Innovations platform interface showing a financial planning table with employee data"
                                width={1328}
                                height={908}
                                className="mx-auto rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
                                priority
                            />
                        </div>
                        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
                            {g2Badges.map((badge, index) => (
                                <Image
                                    key={index}
                                    src={badge.src}
                                    alt={badge.alt}
                                    width={badge.width}
                                    height={badge.height}
                                    className="h-auto"
                                    style={{ width: 'auto', height: `${badge.height}px` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <LogoCarousel />
        </main>
    );
};

const LogoCarousel = () => {
    const companyLogos = [
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63dbd8bd2486f01d93919536_Group%203067-4.svg?', alt: 'Health Gorilla' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63dbd8bda98b51d25179b33e_Group%203069-5.svg?', alt: 'Mindtickle' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65eae632bae9790cce61bac2_gem-logo-6.svg?', alt: 'Gem' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63dbd8bd218c0a7975045122_Group%203070-7.svg?', alt: 'Wrapbook' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65eae67941d450fb927d75d8_Huntress-logo-8.svg?', alt: 'Huntress' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63dbd8bdab98bb45b729a80c_Group%203071-9.svg?', alt: 'Hippo' },
    ];

    const duplicatedLogos = [...companyLogos, ...companyLogos, ...companyLogos];

    return (
        <div className="bg-white py-12">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex animate-infinite-scroll items-center justify-center motion-safe:animate-scroll [&_li]:mx-8 [&_img]:max-w-none">
                    {duplicatedLogos.map((logo, index) => (
                        <li key={index}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={150}
                                height={40}
                                className="h-8 w-auto filter grayscale opacity-60 transition-all hover:opacity-100 hover:grayscale-0"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default LinkVaretoHeroSection;

