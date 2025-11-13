'use client';

import Image from 'next/image';

const KeyframesStyle = () => (
    <style>
        {`
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes marqueeReverse {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
    `}
    </style>
);

const LinkMetomicIntegrationsMarquee = () => {
    const row1Logos = [
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/66f13c9bd6126cc4d8d60c96_64f99ca38caea04829497b81_Integration%2520logos%2520(6).png?', alt: 'Google Workspace logo' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/66f13c9f21ecc227416e7712_6669b0d7da7702d939c4e3fe_Slack_icon_2019.svg-5.png?', alt: 'Slack logo' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/663b7e7f1290f07f7c8efbc6_dropbox-1-6.svg?', alt: 'Dropbox logo' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/66f13c9e9d96650391f3a35d_64d4eb3db0f8d65aac13bd7e_Integration%2520logos%2520(4).png?', alt: 'Notion logo' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/66f13ca59416bea7f8987589_64d4e94a6f43bd5b11e4b1c9_sharepoint-17.png?', alt: 'SharePoint logo' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/66f13c9cbfd2ab1e2d07812b_64d4f29b3cc88f29d2a27f42_Integration%2520logos%2520(5).png?', alt: 'OneDrive logo' },
        { src: 'https://cdn.prod.website-files.com/633d92770fc68507890ca62d/64bfa8eff7c70775e8c7fba9_Untitled%20design%20(22).png', alt: 'Jira logo' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/66f13c9c501efd695c4b6936_6493079a0f571d5937df5e2b_box-39-logo-png-transparent-21.png?', alt: 'Box logo' },
    ];

    const row2Logos = [
        { src: 'https://cdn.prod.website-files.com/633d92770fc68507890ca62d/64bfa87d2a5deee25944eb92_Untitled%20design%20(19).png', alt: 'Zendesk logo' },
        { src: 'https://cdn.prod.website-files.com/633d92770fc68507890ca62d/64bfa8af77234d4b48e2768b_Untitled%20design%20(21).png', alt: 'GitHub logo' },
        { src: 'https://cdn.prod.website-files.com/633d92770fc68507890ca62d/64bfa67e363259218e60571f_Untitled%20design%20(9).png', alt: 'Microsoft Teams logo' },
        { src: 'https://cdn.prod.website-files.com/633d92770fc68507890ca62d/64bfa6dc1406f7a5ffa5d731_Untitled%20design%20(12).png', alt: 'ChatGPT logo' },
        { src: 'https://cdn.prod.website-files.com/633d92770fc68507890ca62d/64bfa6bc998875181caf8c49_Untitled%20design%20(11).png', alt: 'Salesforce logo' },
        { src: 'https://cdn.prod.website-files.com/633d92770fc68507890ca62d/64bfa773325ba04290e3b35f_Untitled%20design%20(16).png', alt: 'Gmail logo' },
        { src: 'https://cdn.prod.website-files.com/633d92770fc68507890ca62d/64d4e91f4295725d07950457_Integration%20logos.png', alt: 'Google Drive logo' },
        { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/66f13c9e9d96650391f3a35d_64d4eb3db0f8d65aac13bd7e_Integration%2520logos%2520(4).png?', alt: 'Notion logo' },
    ];

    return (
        <>
            <KeyframesStyle />
            <section className="relative w-full overflow-hidden bg-background-primary py-16 md:py-24">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-background-primary to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-background-primary to-transparent" />

                <div className="flex flex-col gap-6">
                    <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center space-x-6">
                        {[...row1Logos, ...row1Logos].map((logo, index) => (
                            <div key={`row1-${index}`} className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-md">
                                <Image src={logo.src} alt={logo.alt} width={36} height={36} className="object-contain" />
                            </div>
                        ))}
                    </div>
                    <div className="flex w-max animate-[marqueeReverse_30s_linear_infinite] items-center space-x-6">
                        {[...row2Logos, ...row2Logos].map((logo, index) => (
                            <div key={`row2-${index}`} className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-md">
                                <Image src={logo.src} alt={logo.alt} width={36} height={36} className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LinkMetomicIntegrationsMarquee;

