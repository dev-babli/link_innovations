"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
    {
        title: "Healthcare",
        heading: "Transforming Patient Care with Technology",
        description:
            "We develop HIPAA-compliant healthcare solutions including telemedicine platforms, patient management systems, and AI-powered diagnostic tools. Our secure infrastructure ensures patient data protection while enabling seamless digital health experiences.",
        buttonText: "Healthcare Solutions",
        buttonLink: "/services",
        imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-923774-home_acc_01.png?",
    },
    {
        title: "Banking & Finance",
        heading: "Secure, Scalable Financial Technology",
        description:
            "Build trust with enterprise-grade fintech solutions. From mobile banking apps to fraud detection systems, we deliver PCI-compliant platforms with real-time processing, blockchain integration, and advanced analytics for the financial sector.",
        imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-671672-home_acc_02.png?",
    },
    {
        title: "Retail & E-commerce",
        heading: "Elevate Your Digital Commerce",
        description:
            "Create compelling shopping experiences with our e-commerce solutions. We build scalable platforms with AI-powered recommendations, inventory management, omnichannel integration, and seamless payment processing to boost conversions.",
        imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-929233-home_acc_03.png?",
    },
    {
        title: "Manufacturing",
        heading: "Industry 4.0 Digital Solutions",
        description:
            "Optimize operations with IoT-enabled manufacturing solutions. From predictive maintenance to supply chain optimization, we implement smart factory technologies that reduce downtime and increase productivity through real-time data analytics.",
        imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-162518-home_acc_04.png?",
    },
    {
        title: "Education",
        heading: "Modern Learning Management Solutions",
        description:
            "Empower educational institutions with digital learning platforms, virtual classrooms, and student management systems. Our solutions support hybrid learning models with interactive content delivery and comprehensive analytics.",
        imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-528406-home_acc_05.png?",
    },
    {
        title: "Energy & Utilities",
        heading: "Smart Energy Management Systems",
        description:
            "Drive sustainability with intelligent energy solutions. We develop smart grid technologies, renewable energy management platforms, and IoT monitoring systems that optimize energy consumption and reduce operational costs.",
        imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-330725-home_acc_06.png?",
    },
];

export default function LinkUseCasesAccordion() {
    return (
        <section className="bg-black py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-6 md:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                        Industries We Serve
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-text-secondary">
                        We deliver tailored technology solutions across diverse industries,
                        helping businesses transform digitally and achieve measurable results.
                    </p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-0"
                    className="mt-16 w-full"
                >
                    {accordionItems.map((item, index) => (
                        <AccordionItem
                            key={item.title}
                            value={`item-${index}`}
                            className="border-b border-border-subtle"
                        >
                            <AccordionTrigger className="group py-8 text-left hover:no-underline [&_svg]:hidden">
                                <div className="flex w-full items-start gap-6 md:items-center">
                                    <span className="font-monospace text-xl text-text-tertiary transition-colors group-data-[state=open]:text-primary">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-2xl font-semibold text-white">
                                        {item.title}
                                    </h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-12 pl-12 md:pl-14">
                                <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
                                    <div className="flex flex-col gap-4 lg:w-1/2">
                                        <h4 className="text-3xl font-semibold text-white">
                                            {item.heading}
                                        </h4>
                                        <p className="text-body-lg text-text-secondary">
                                            {item.description}
                                        </p>
                                        {item.buttonText && item.buttonLink && (
                                            <Link
                                                href={item.buttonLink}
                                                className="mt-4 inline-block w-fit rounded-md bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                            >
                                                {item.buttonText}
                                            </Link>
                                        )}
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.heading}
                                            width={991}
                                            height={912}
                                            className="h-auto w-full rounded-lg"
                                        />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

