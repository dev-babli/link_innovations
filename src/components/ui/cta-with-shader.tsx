"use client"

import { Button } from "@/components/ui/button"
import { DitheringShader } from "@/components/ui/dithering-shader"
import { cn } from "@/lib/utils"
import { Moon } from "lucide-react"
import Image from "next/image"

interface CTAWithShaderProps {
    className?: string
    content?: Record<string, unknown>
}

export function CTAWithShader({ className, content }: CTAWithShaderProps) {
    const ctaContent = (content?.ctaSection ?? content ?? {}) as {
        headline?: string
        subheadline?: string
        phone?: string
        email?: string
        ratingLabel?: string
        ratingSupport?: string
        primaryButton?: { text: string }
        secondaryButton?: { text: string }
        microCopy?: string
    }

    const headline = ctaContent.headline ?? "Let's bring your idea to life."
    const subheadline =
        ctaContent.subheadline ??
        "Schedule a free discovery call — we'll respond within 24 hours."
    const phone = ctaContent.phone ?? "+1 (555) 123-4567"
    const email = ctaContent.email ?? "info@linkinnovations.ai"
    const ratingLabel = ctaContent.ratingLabel ?? "4.9/5 Rated"
    const ratingSupport =
        ctaContent.ratingSupport ?? "Trusted by 200+ Companies"
    const primaryButtonText =
        ctaContent.primaryButton?.text ?? "Book a Call"
    const secondaryButtonText =
        ctaContent.secondaryButton?.text ?? "Get a Free Estimate"
    const microCopy =
        ctaContent.microCopy ??
        "All discussions are confidential and protected by NDA."

    return (
        <section className={cn("relative w-full overflow-hidden py-16 md:py-20", className)}>
            <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-primary/95 to-background-primary/90" />
            <div className="relative mx-auto max-w-container px-6 md:px-8">
                {/* Main CTA Container with Shader Background */}
                <div className="relative rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(6,10,19,0.24)] border border-white/8 backdrop-blur-2xl">
                    {/* Gradient Background Base - Beige */}
                    <div className="absolute inset-0 z-0 bg-[#F5F5DC]" />

                    {/* DitheringShader Background with Wave Pattern */}
                    <div className="absolute inset-0 z-[1]">
                        <DitheringShader
                            shape="wave"
                            type="8x8"
                            colorBack="#F5F5DC"
                            colorFront="#00c4b8"
                            pxSize={4}
                            speed={0.4}
                            className="w-full h-full"
                            style={{ width: "100%", height: "100%", opacity: 0.7 }}
                        />
                    </div>

                    {/* Semi-transparent Dark Overlay */}
                    <div className="absolute inset-0 z-[2] bg-gradient-to-br from-black/55 via-black/45 to-black/55" />

                    {/* Subtle Vertical Beams Effect */}
                    <div className="absolute inset-0 z-[3] opacity-20">
                        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse" style={{ animationDelay: '0ms' }} />
                        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDelay: '300ms' }} />
                        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse" style={{ animationDelay: '700ms' }} />
                        <div className="absolute left-[70%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDelay: '500ms' }} />
                        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse" style={{ animationDelay: '1000ms' }} />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 p-6 md:p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                            {/* Left Column - Marketing Message & Contact Info */}
                            <div className="flex flex-col gap-6 text-white">
                                {/* Headline */}
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight drop-shadow-[0_24px_48px_rgba(0,0,0,0.25)]">
                                    {headline}
                                </h2>

                                {/* Sub-headline */}
                                <p className="text-lg md:text-xl text-white/85 font-normal leading-relaxed max-w-xl">
                                    {subheadline}
                                </p>

                                {/* Contact Details */}
                                <div className="flex flex-col gap-3 mt-2">
                                    <a
                                        href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                                        className="text-white text-base md:text-lg hover:text-white/80 transition-colors font-medium"
                                    >
                                        {phone}
                                    </a>
                                    <a
                                        href={`mailto:${email}`}
                                        className="text-white text-base md:text-lg hover:text-white/80 transition-colors font-medium"
                                    >
                                        {email}
                                    </a>
                                </div>

                                {/* Customer Rating */}
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="flex -space-x-2">
                                        <Image
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
                                            alt="Customer avatar 1"
                                            width={40}
                                            height={40}
                                            className="rounded-full border-2 border-white/80"
                                        />
                                        <Image
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                                            alt="Customer avatar 2"
                                            width={40}
                                            height={40}
                                            className="rounded-full border-2 border-white/80"
                                        />
                                        <Image
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                                            alt="Customer avatar 3"
                                            width={40}
                                            height={40}
                                            className="rounded-full border-2 border-white/80"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-semibold text-base">{ratingLabel}</span>
                                        <span className="text-white text-sm opacity-80">{ratingSupport}</span>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="rounded-full px-7 py-3.5 gap-2 text-sm font-semibold bg-white text-black hover:bg-white/90 shadow-[0_18px_45px_rgba(255,255,255,0.22)] transition-all duration-300"
                                    >
                                        <span>{primaryButtonText}</span>
                                        <Moon className="w-4 h-4 text-black" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full px-7 py-3.5 gap-2 text-sm font-semibold border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300"
                                    >
                                        <span className="text-white">{secondaryButtonText}</span>
                                    </Button>
                                </div>
                                
                                {/* Micro assurance text */}
                                <p className="mt-4 text-sm text-white/70">
                                    {microCopy}
                                </p>
                            </div>

                            {/* Right Column - Contact Form */}
                            <div className="flex flex-col justify-center">
                                <div className="bg-black/55 backdrop-blur-xl rounded-[28px] p-6 md:p-8 shadow-[0_24px_60px_rgba(6,10,19,0.35)] border border-white/12">
                                    <form className="flex flex-col gap-5">
                                        {/* Name Field */}
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="text-white text-sm font-medium">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Enter name"
                                                className="bg-white/5 text-white placeholder:text-white/60 rounded-xl px-4 py-3 border border-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all text-sm"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-white text-sm font-medium">
                                                Email<span className="text-white ml-1">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Enter email address"
                                                required
                                                className="bg-white/5 text-white placeholder:text-white/60 rounded-xl px-4 py-3 border border-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all text-sm"
                                            />
                                        </div>

                                        {/* Message Field */}
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="message" className="text-white text-sm font-medium">
                                                Message<span className="text-white ml-1">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder="Enter your message"
                                                required
                                                rows={4}
                                                className="bg-white/5 text-white placeholder:text-white/60 rounded-xl px-4 py-3 border border-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all resize-none text-sm"
                                            />
                                        </div>

                                        {/* Send Email Button */}
                                        <Button
                                            type="submit"
                                            size="lg"
                                        className="bg-gradient-to-r from-[#F2CB67] to-[#F4D178] hover:opacity-90 text-black font-semibold rounded-full px-7 py-3 mt-2 shadow-[0_20px_45px_rgba(242,203,103,0.35)] transition-all text-sm"
                                        >
                                            Send email
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}