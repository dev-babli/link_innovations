import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
    iconSrc: string;
    title: string;
    description: string;
    link: string;
}

const solutionsData: SolutionCardProps[] = [
    {
        iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fc507fcd73e890342ce7f8_Frame%201000005123-32.png?",
        title: "Web Development",
        description: "Modern, responsive websites and web applications built with the latest technologies like React, Next.js, and Node.js",
        link: "/services/web-development",
    },
    {
        iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fc508e65866d311f3da0d4_Frame%201000005283-33.png?",
        title: "Mobile Applications",
        description: "Native iOS and Android apps, or cross-platform solutions using React Native and Flutter for seamless user experiences",
        link: "/services/mobile-apps",
    },
    {
        iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fc509b19336f429d3cb7c6_Frame%201000005284-34.png?",
        title: "AI & Machine Learning",
        description: "Intelligent automation, predictive analytics, and custom AI models that transform your business operations",
        link: "/services/ai-automation",
    },
    {
        iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fc50b06d1e2d2b3ad05d8e_Frame%201000005124-35.png?",
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure on AWS, Azure, and GCP with DevOps automation and continuous deployment",
        link: "/services/cloud-devops",
    },
    {
        iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fc50c4f3b529f672479958_Frame%201000005285-36.png?",
        title: "Cybersecurity",
        description: "Comprehensive security solutions including penetration testing, threat monitoring, and compliance audits",
        link: "/services/cybersecurity",
    },
    {
        iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fc50c9f28fd756cea80a6d_Frame%201000005286-37.png?",
        title: "Data Analytics",
        description: "Turn your data into actionable insights with custom dashboards, reporting tools, and business intelligence solutions",
        link: "/services/data-analytics",
    },
];

const GridLines = () => (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-[20.5px] bg-[#3D3A5A]" />
        <div className="absolute left-1/3 top-8 bottom-8 w-px -translate-x-1/2 bg-[#3D3A5A]" />
        <div className="absolute left-2/3 top-8 bottom-8 w-px -translate-x-1/2 bg-[#3D3A5A]" />
        <div className="absolute left-1/3 top-1/2 size-2 -translate-x-1/2 -translate-y-[20.5px] rounded-full border border-[#3D3A5A] bg-[#2d2b4a]" />
        <div className="absolute left-2/3 top-1/2 size-2 -translate-x-1/2 -translate-y-[20.5px] rounded-full border border-[#3D3A5A] bg-[#2d2b4a]" />
    </div>
);

const SolutionCard = ({ iconSrc, title, description, link }: SolutionCardProps) => (
    <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-[#5B4FBF] to-[#4A3FA8] p-8">
        <Image src={iconSrc} alt={`${title} icon`} width={64} height={64} className="mb-8" />
        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className="mb-6 flex-grow text-[#B8B9C8]">{description}</p>
        <a href={link} className="group mt-auto inline-flex items-center gap-2 font-medium text-white">
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
    </div>
);

const LinkMetomicSolutionsGrid = () => {
    return (
        <section id="solutions" className="bg-gradient-to-br from-[#2D2B4A] to-[#1F1F2E] py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 px-3 text-sm font-medium text-[#c2baff] transition-colors hover:bg-white/20"
                    >
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/660186181e2e6783fd190385_bolt-7.svg?"
                            alt="bolt icon"
                            width={12}
                            height={12}
                        />
                        Our Services
                    </Link>
                    <h2 className="mt-4 max-w-3xl text-[40px] font-bold leading-tight text-white">
                        Complete Technology Solutions to Drive Your Business Forward
                    </h2>
                </div>

                <div className="relative mx-auto mt-16 max-w-7xl lg:mt-24">
                    <GridLines />
                    <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {solutionsData.map((solution) => (
                            <SolutionCard key={solution.title} {...solution} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkMetomicSolutionsGrid;

