"use client";

import { useState } from "react";
import { X } from "lucide-react";

const LinkAnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <div
            data-component="advertisement"
            className="fixed left-0 top-0 z-[101] hidden w-full items-center justify-center bg-[#E5DDFF] sm:flex sm:min-h-8"
        >
            <div className="relative mx-auto flex w-full max-w-screen-2xl items-center justify-center px-6 py-3 text-center">
                <div className="flex-1">
                    <p className="text-xs text-black sm:text-sm">
                        Link Innovations is expanding! 🚀{" "}
                        <a
                            href="/services"
                            className="relative bg-gradient-to-b from-primary via-primary to-primary bg-left-bottom bg-no-repeat text-primary transition-all duration-500 [background-size:0%_1px] hover:[background-size:100%_1px] will-change-[background-size]"
                        >
                            Explore our services
                        </a>{" "}
                        for cutting-edge web development, mobile apps, and AI solutions.
                    </p>
                </div>
                <button
                    onClick={handleClose}
                    className="absolute right-0 flex items-center px-6"
                    aria-label="Close advertisement"
                >
                    <X className="h-4 w-4 text-black" />
                </button>
            </div>
        </div>
    );
};

export default LinkAnnouncementBanner;

