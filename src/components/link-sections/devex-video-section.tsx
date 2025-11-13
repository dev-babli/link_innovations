import Image from "next/image";

const featureCards = [
    {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/database-33.svg?",
        title: "Link Innovations Agile Process",
        description:
            "Our proven agile methodology ensures your project delivers value at every sprint. With transparent communication, iterative development, and cutting-edge practices, we keep your project on track and within budget.",
    },
    {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/listchecks-34.svg?",
        title: "Enterprise-Grade Quality",
        description:
            "Link Innovations delivers enterprise-grade solutions through comprehensive QA processes. Every line of code undergoes rigorous testing, security audits, and performance optimization for maximum reliability.",
    },
    {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-812836-sharenetwork2.png?",
        title: "24/7 Link Innovations Support",
        description:
            "Your success drives our success. Link Innovations provides round-the-clock monitoring, proactive updates, and dedicated support to ensure your applications perform optimally and evolve with your business.",
    },
];

const LinkDevexVideoSection = () => {
    return (
        <section className="bg-background-primary py-16 lg:py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex flex-col items-center justify-center gap-10 text-center lg:gap-14">
                    <div className="flex flex-col items-center gap-6">
                        {/* Removed top heading and content - now only in video overlay */}
                    </div>

                    <div className="relative w-full max-w-[420px] lg:max-w-none">
                        <div className="absolute inset-x-0 -top-8 -bottom-8 hidden rounded-2xl bg-primary/20 blur-3xl lg:block" />
                        <div className="absolute -inset-px hidden rounded-2xl bg-gradient-to-t from-white/5 to-white/10 lg:block" />

                        <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-solid border-border/50 bg-gradient-to-t from-black/20 to-border/10">
                            <video
                                className="relative z-10 hidden h-full w-full object-cover lg:block"
                                poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-055770-cortex_home_mobile_asset.png?"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source
                                    src="https://a-us.storyblok.com/f/1021527/x/f4d27f0e4b/homepage_compressed.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-055770-cortex_home_mobile_asset.png?"
                                alt="Link Innovations Mobile UI Showcase"
                                width={750}
                                height={2839}
                                className="relative block w-full lg:hidden"
                                unoptimized
                            />

                            {/* Content Overlay on Video with Parallax Effect */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/25 backdrop-blur-[2px] lg:block">
                                <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-full lg:p-8 lg:text-center">
                                    <div className="max-w-2xl transform transition-transform duration-1000 ease-out hover:scale-105">
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
                                            Link Innovations Development Excellence
                                        </h3>
                                        <p className="text-lg text-white/95 leading-relaxed font-light">
                                            Excellence is the foundation of Link Innovations. From cutting-edge AI solutions to enterprise-grade cloud infrastructure, we deliver technology that transforms businesses. Our proven development process ensures your software is secure, scalable, and future-ready. Partner with Link Innovations for results that drive real business growth.
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile overlay with parallax */}
                                <div className="lg:hidden absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[1px]">
                                    <h3 className="text-xl font-bold text-white mb-3 font-orbitron">
                                        Development Excellence
                                    </h3>
                                    <p className="text-sm text-white/95 leading-relaxed font-light">
                                        Excellence is the foundation of Link Innovations. We deliver technology that transforms businesses with secure, scalable, and future-ready solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-10 pt-8 text-left lg:grid-cols-3 lg:gap-8 lg:pt-10">
                        {featureCards.map((card, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={card.icon}
                                        alt={`${card.title} icon`}
                                        width={20}
                                        height={20}
                                        className="h-5 w-5 flex-shrink-0"
                                        unoptimized
                                    />
                                    <h3 className="text-xl font-semibold leading-snug text-white">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-base text-white">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkDevexVideoSection;

