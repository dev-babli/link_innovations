"use client";

import Image from 'next/image';

const row1Logos = [
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f89d5d4fb2baaede282f7b_adp-logo-13.svg?', alt: 'ADP logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f89d5d1c7c92b58f98480e_workday-logo-14.svg?', alt: 'Workday logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f89d5ee636f00136bdcb0d_zenefits-logo-15.svg?', alt: 'Zenefits logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f89d5e15f25366dc23bcc8_bamboohr-logo-16.svg?', alt: 'BambooHR logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/660333646ac7b78c6fcfaf6d_oracle-netsuite-logo-17.svg?', alt: 'Oracle NetSuite logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f89d5fe76f005764b41ca0_paylocity-logo-18.svg?', alt: 'Paylocity logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/66033364a27cd4ca59bee56a_salesforce-logo-19.svg?', alt: 'Salesforce logo' },
];

const row2Logos = [
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f89d5ee7048f90e60b274a_rippling-logo-20.svg?', alt: 'Rippling logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63e6691f307a954db7510a11_sage-logo-25.svg?', alt: 'Sage logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63e66937a3644169a60a8c8e_snowflake-logo-26.svg?', alt: 'Snowflake logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/659c858f1f51d19c0efe2856_oracle-cloud-erp-logo-27.svg?', alt: 'Oracle Cloud ERP logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/659c8d12e92c506ee1f7c495_Microsoft-Dynamics-logo-29.svg?', alt: 'Microsoft Dynamics logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/63e668c9e290944a527596ec_intuit-quickbooks-logo-23.svg?', alt: 'QuickBooks logo' },
 ];

const features = [
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f3745c6c43f4c22c76c855_auto-sync-32.svg?',
    title: 'Auto-sync',
    description: 'Schedule automatic data pulls for transactions, employees, and more.',
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f3745cc5f7a7e7b6e8ea40_on-demand-refresh-33.svg?',
    title: 'On-demand refresh',
    description: 'Need the latest numbers and don’t want to wait? Refresh your data.',
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f9e7eab1164cc138afbf9a_self-manage-34.svg?',
    title: 'Self manage',
    description: 'Easily connect and monitor the status of your integrations.',
  },
];

export default function IntegrationsSection() {
  return (
    <>
      <style jsx global>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 80s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 80s linear infinite;
        }
      `}</style>
      <section className="bg-[#f1eeeb] py-20 lg:py-[120px]">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-[56px] font-normal leading-[1.15] -tracking-[0.015em] text-black">
              All your data, all the time.
            </h2>
            <p className="text-xl text-[#4A4A4A] mt-6">
              Pull in the latest actuals from your ERP, HRIS, CRM, and other systems.
            </p>
          </div>

          <div className="mt-16 space-y-8 overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...row1Logos, ...row1Logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 px-8 lg:px-12 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={40}
                    className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-scroll-left">
              {[...row2Logos, ...row2Logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 px-8 lg:px-12 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={40}
                    className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center my-10 space-y-[-1px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65fcb1ef673050d92c674f10_dashed-line-31.svg?"
              alt="Dashed connecting line"
              width={1}
              height={48}
              unoptimized
            />
             <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65fcb1ef673050d92c674f10_dashed-line-31.svg?"
              alt=""
              width={1}
              height={48}
              unoptimized
              aria-hidden="true"
            />
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6618aee47b8435e750523454_get-latest-expense-actuals-15.png?"
              alt="Screenshot of Operating Expense table in Vareto with vendor data"
              width={1120}
              height={550}
              className="rounded-xl border border-[#E0E0E0] shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
            />
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-20 lg:mt-24">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={48}
                  height={48}
                  className="mx-auto mb-6"
                />
                <h3 className="text-xl font-medium text-black mb-2">{feature.title}</h3>
                <p className="text-base text-[#4a4a4a] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}