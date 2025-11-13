import Image from "next/image";
import React from "react";

const securityFeatures = [
    {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_shield-check.svg?",
        title: "Enterprise-grade security",
        description: "SOC 2 Type II compliant with end-to-end encryption"
    },
    {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_lock.svg?",
        title: "Role-based access control",
        description: "Granular permissions for different team members"
    },
    {
        icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_audit-log.svg?",
        title: "Audit trails",
        description: "Complete visibility into all changes and access"
    }
];

const LinkVaretoSecuritySection = () => {
    return (
        <section className="bg-background-secondary py-20 lg:py-32">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Image */}
                    <div className="relative">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/65f9e73780d13c3d1ac079b0_security-dashboard.png?"
                            alt="Security dashboard showing compliance and access controls"
                            width={1512}
                            height={980}
                            className="rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.1)] w-full h-auto"
                        />
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col">
                        <h2 className="text-[56px] leading-[1.15] tracking-[-0.015em] font-normal mb-6 text-text-primary">
                            Security.
                        </h2>
                        <p className="text-xl leading-[1.6] text-text-secondary mb-12">
                            Your financial data is protected with enterprise-grade security.
                            We're SOC 2 Type II compliant and use bank-level encryption.
                        </p>

                        <div className="space-y-8">
                            {securityFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Image
                                            src={feature.icon}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-text-primary mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-text-secondary">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LinkVaretoSecuritySection;

