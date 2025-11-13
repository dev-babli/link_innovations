"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';

type Testimonial = {
    id: string;
    company: string;
    quote: string;
    authorImage: string;
    authorName: string;
    authorTitle: string;
};

const testimonials: Testimonial[] = [
    {
        id: 'kantox',
        company: 'Kantox',
        quote: 'Easy integration. It is as simple as a few clicks (and the Link Innovations onboarding process is excellent, too, as the team guides us through the process).',
        authorImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/67f7843ebcb34216e1e0b1a9_1583951375759-15.jpeg?',
        authorName: 'Philippe Cartier',
        authorTitle: 'Cloud Infrastructure Engineering Manager',
    },
    {
        id: 'wrapbook',
        company: 'Wrapbook',
        quote: 'Link Innovations provides an excellent, easy-to-navigate interface with the necessary features to help keep our workspace secure.',
        authorImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/67f787096d83d5bf09622282_image%20(3)-16.png?',
        authorName: 'Stephen Droner',
        authorTitle: 'IT Help Desk Analyst',
    },
    {
        id: 'numan',
        company: 'Numan',
        quote: 'Link Innovations is user-centric, easy to use and has some great integrations. The best thing is that it helps data controllers remain compliant but more importantly able to easily assess risks and prevent breaches or infringements.',
        authorImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/655f8683db8bc4fdaa2c0424_sam%20shah-17.jpeg?',
        authorName: 'Sam Shah',
        authorTitle: 'Chief Medical Strategy Officer',
    },
    {
        id: 'zappi',
        company: 'Zappi',
        quote: 'Immediately, especially for the Google Workspace document sharing, Link Innovations has paid for itself seven fold.',
        authorImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/640f408e4743d4346e502bad_hatitye%20chindove-18.jpeg?',
        authorName: 'Hatitye Chindove',
        authorTitle: 'Head of Information Security and Data Compliance',
    },
    {
        id: 'zego',
        company: 'Zego',
        quote: 'The big thing for me was how interactive it was in Slack. That was one of our biggest problem points and there was a solution for that immediately.',
        authorImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/63e6255a497f17555f8d9831_cary-19.jpeg?',
        authorName: 'Cary Vidal',
        authorTitle: 'Director, Security & IT',
    },
];

const linkInnovationsLogoUrl = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/6672ecf19cd586d2e16a0c71_Frame%2010194-38.jpeg?';
const shieldHeartIconUrl = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/67ebc509011e90929725647e_shield-heart-8.svg?';

const KeyboardKey = ({ children }: { children: React.ReactNode }) => (
    <kbd className="mx-1 inline-block rounded-[4px] border border-gray-300 bg-gray-50 px-1.5 pb-0.5 text-xs font-sans font-medium text-gray-500 shadow-sm">
        {children}
    </kbd>
);

const LinkMetomicTestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        } else if (event.key === 'ArrowRight') {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto max-w-[1280px] px-6 md:px-20">
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 py-1.5 px-3">
                        <Image src={shieldHeartIconUrl} alt="Testimonials Icon" width={16} height={16} />
                        <span className="text-sm font-medium text-accent">Testimonials</span>
                    </div>
                    <h2 className="mt-4 text-[56px] font-bold leading-[1.1] tracking-[-0.015em] text-[#322e4a] animate-in fade-in-0 slide-in-from-bottom-5 duration-700">
                        Don't take our word for it.
                    </h2>
                    <p className="mt-6 text-base text-[#696d8c]">
                        Use keyboard <KeyboardKey>&larr;</KeyboardKey> <KeyboardKey>&rarr;</KeyboardKey> to navigate through testimonials
                    </p>
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="flex flex-wrap justify-center gap-2 rounded-lg bg-[#f0f0f5] p-1">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.id}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    'rounded-md py-2 px-6 text-base font-medium transition-colors duration-300',
                                    activeIndex === index
                                        ? 'bg-accent text-accent-foreground shadow-sm'
                                        : 'text-[#322e4a] hover:bg-white/60'
                                )}
                            >
                                {testimonial.company}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-16 relative h-[360px] sm:h-[280px] md:h-[240px]">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={cn(
                                'absolute inset-0 transition-opacity duration-500 ease-in-out',
                                activeIndex === index ? 'opacity-100' : 'opacity-0'
                            )}
                        >
                            <div className="relative h-full overflow-hidden rounded-[20px] bg-gradient-to-br from-white to-[#F9FAFB] p-12 shadow-[0_12px_40px_-12px_rgba(142,142,166,0.2)]">
                                <div className="flex h-full flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
                                    <div className="flex-1">
                                        <p className="text-xl leading-relaxed text-[#322e4a]">
                                            {testimonial.quote}
                                        </p>
                                        <div className="mt-6 flex items-center">
                                            <div className="text-left">
                                                <p className="font-semibold text-[#322e4a]">{testimonial.authorName}</p>
                                                <p className="text-sm text-[#696d8c]">{testimonial.authorTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <Image
                                            src={testimonial.authorImage}
                                            alt={testimonial.authorName}
                                            width={120}
                                            height={120}
                                            className="h-[120px] w-[120px] rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-12 right-12 hidden md:block">
                                    <Image
                                        src={linkInnovationsLogoUrl}
                                        alt="Link Innovations Logo"
                                        width={104}
                                        height={24}
                                        className="h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinkMetomicTestimonialsSection;

