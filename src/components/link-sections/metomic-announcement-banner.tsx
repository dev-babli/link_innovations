"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const LinkMetomicAnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="relative bg-gradient-to-r from-[#8B7BE8] to-[#6B5DD6] text-white">
            <div className="mx-auto flex w-full max-w-[1200px] items-center justify-center py-3 px-6 lg:px-20">
                <a
                    href="/contact"
                    className="flex items-center gap-x-2.5 text-center transition-opacity duration-300 ease-in-out hover:opacity-80"
                >
                    <p className="text-sm font-medium leading-tight">
                        🚀 New! Get a FREE consultation for your next project - Limited time offer
                    </p>
                    <svg className="h-3 w-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-6 top-1/2 flex -translate-y-1/2 items-center gap-x-1.5 opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100 lg:right-20"
                    aria-label="Close announcement"
                >
                    <span className="hidden text-sm font-bold md:block">Close</span>
                    <X className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
                </button>
            </div>
        </div>
    );
};

export default LinkMetomicAnnouncementBanner;

