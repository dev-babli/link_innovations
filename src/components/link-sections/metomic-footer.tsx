import Image from "next/image";
import Link from "next/link";
import { Youtube, ArrowRight, Star } from "lucide-react";

const companyLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact Us" },
];

const servicesLinks = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/mobile-apps", label: "Mobile Apps" },
    { href: "/services/ai-automation", label: "AI & Machine Learning" },
    { href: "/services/cloud-devops", label: "Cloud Solutions" },
    { href: "/services/cybersecurity", label: "Cybersecurity" },
    { href: "/services/data-analytics", label: "Data Analytics" },
    { href: "/services", label: "Managed Services" },
];

const industriesLinks = [];

const resourcesLinks = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Case Studies" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
];

const SocBadge = () => (
    <div className="bg-white p-2 rounded-lg flex items-center justify-center h-24 w-auto">
        <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/6492a666238d1c4a6a8fdcf2_21972-312_SOC_NonCPA_Blk-20.png?"
            alt="AICPA SOC Certified"
            width={80}
            height={80}
            className="object-contain h-full w-auto"
        />
    </div>
);

const GetAppBadge = () => (
    <div className="bg-white p-3 rounded-lg flex flex-col items-center justify-around h-24 w-auto aspect-[1.1]">
        <p className="text-gray-500 text-[9px] font-bold uppercase tracking-wider">Review us on</p>
        <p className="text-black text-xl font-extrabold leading-none">GetApp</p>
        <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-4 h-4" />
            ))}
        </div>
    </div>
);

const G2Badge = () => (
    <div className="bg-white p-3 rounded-lg flex flex-col items-center justify-around h-24 w-auto aspect-[1.25]">
        <p className="text-[#0000B2] text-[9px] font-bold uppercase tracking-wider">Read our reviews on</p>
        <div className="flex items-center my-0.5">
            <svg width="65" height="23" viewBox="0 0 65 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4498 22.544V0.5H18.7738V18.176H30.5V22.544H12.4498Z" fill="#0000B2" />
                <path d="M49.208 22.544C44.336 22.544 40.352 20.912 37.256 17.648C34.16 14.384 32.608 10.4 32.608 5.696V5.216C32.608 3.776 32.864 2.48 33.376 1.328C33.888 0.448 34.544 0 35.344 0C36.272 0 36.944 0.416 37.36 1.248L39.848 3.536C39.464 3.76 39.272 4.136 39.272 4.664V9.68H45.032V4.976C45.032 4.352 44.864 3.848 44.528 3.464L41.984 1.216C45.016 0.416 47.912 1.328 50.672 3.944C53.432 6.56 54.812 9.776 54.812 13.6C54.812 17.488 53.384 20.464 50.528 22.544H49.208ZM45.032 18.272C46.328 17.68 47.2 16.64 47.552 15.152C47.36 15.184 47.132 15.2 46.868 15.2H40.232V18.2C41.252 18.824 42.848 18.992 45.032 18.272Z" fill="#0000B2" />
                <g clipPath="url(#clip0_footer_badge)">
                    <path d="M11.968 22.8H0V0.799995H11.968C14.56 0.799995 16.784 1.216 18.64 2.048C20.464 2.88 21.872 4.08 22.864 5.648C23.664 6.896 24.16 8.368 24.352 10.064H18.736C18.256 7.472 17.152 5.68 15.424 4.688C14.032 3.896 12.64 3.664 11.248 4.016V18.784C12.544 19.04 13.84 18.848 15.136 18.224C17.032 17.296 18.16 15.536 18.736 12.944H24.352C23.968 16.192 22.576 18.656 20.176 20.336C17.776 22.016 14.88 22.8 11.968 22.8Z" fill="#FF6635" />
                </g>
                <defs>
                    <clipPath id="clip0_footer_badge"><rect width="24.4" height="22" fill="white" transform="translate(0 0.8)" /></clipPath>
                </defs>
            </svg>
        </div>
        <div className="flex text-[#0000B2]">
            {[...Array(4)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
            <Star fill="currentColor" className="w-4 h-4" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)" }} />
        </div>
    </div>
);


const LinkMetomicFooter = () => {
    return (
        <footer className="bg-gradient-to-b from-[#2D2B4A] to-[#1F1F2E] text-white">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
                    <div>
                        <Link href="/">
                            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                                Link Innovations
                            </span>
                        </Link>
                        <ul className="mt-8 space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        target="_self"
                                        rel=""
                                        className="text-sm font-medium text-text-secondary hover:text-white hover:underline transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-4 mt-8">
                            <Link href="#" className="text-text-secondary hover:text-white transition-colors">
                                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/63bedbd2df3d1d14061861ac_linkedin-9.svg?" alt="LinkedIn" width={24} height={24} />
                            </Link>
                            <Link href="#" className="text-text-secondary hover:text-white transition-colors">
                                <Youtube className="w-6 h-6" />
                            </Link>
                            <Link href="#" aria-label="X social media" className="text-text-secondary hover:text-white transition-colors">
                                <svg aria-hidden="true" width="24" height="24" viewBox="0 0 1200 1227" className="w-6 h-6 fill-current"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6902H308.01L603.013 500.178L650.481 568.072L1040.85 1160.31H876.852L569.165 687.854V687.828Z" /></svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-white">Services</h3>
                        <ul className="mt-6 space-y-4">
                            {servicesLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm font-medium text-text-secondary hover:text-white hover:underline transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-white">Industries</h3>
                        <ul className="mt-6 space-y-4">
                            {industriesLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm font-medium text-text-secondary hover:text-white hover:underline transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-white">Quick Links</h3>
                        <ul className="mt-6 space-y-4">
                            {resourcesLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm font-medium text-text-secondary hover:text-white hover:underline transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-16 border-t border-border-subtle">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-white">Ready to get started?</h3>
                            <p className="text-text-secondary max-w-md">Have a project in mind? Let's discuss how we can help transform your business with innovative technology solutions.</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-accent-orange transition-all duration-300 shadow-[0_4px_16px_rgba(255,122,89,0.3)] hover:shadow-[0_6px_20px_rgba(255,122,89,0.4)] transform hover:-translate-y-0.5"
                            >
                                Contact Us Today
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                            <SocBadge />
                            <GetAppBadge />
                            <G2Badge />
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border-subtle">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-text-tertiary gap-4">
                        <p>© 2025 Link Innovations. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <Link href="/terms" className="hover:text-white hover:underline transition-colors">Terms & Conditions</Link>
                            <Link href="/privacy" className="hover:text-white hover:underline transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default LinkMetomicFooter;

