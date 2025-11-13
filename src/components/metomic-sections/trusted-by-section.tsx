import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Zego', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fdcfdf2fb400f6d15ed525_Zego%20logo-7.png?' },
  { name: 'Zappi', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fdcfdfaf9b773fe3c7749f_Zappi%20Logo-9.png?' },
  { name: 'Numan', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/65fdcfde281ae2c230161ef9_Numan%20Logo-10.jpeg?' },
  { name: 'Curve', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/65fdcfde8f077fb05e34f8ab_Curve%20logo-3.webp?' },
  { name: 'Revolut', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/682caa015ed6fb2e2bbd8c5f_revolut%20mark-11.png?' },
  { name: 'Marshmallow', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fdd082c08c1132a801288d_Frame%201000005295-12.png?' },
  { name: 'Oyster', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fdcfde1ad27fc3d23289ce_oyster-13.png?' },
  { name: 'Color', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/65fdcfdf2149a5389c99b5ac_color-14.png?' },
  { name: 'Leroy Merlin', logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/67ab4499996e15169e8aaf77_Leroy%20Merlin-15.png?' },
];

const badges = [
  { alt: 'G2 High Performer Mid-Market Winter 2024', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/675710649aeead56ad7b8523_DataSecurity_HighPerformer_Mid-Market_HighPerformer-4.png?' },
  { alt: 'G2 Easiest To Do Business With Winter 2024', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/6757106d5c9c9e83ccee86ce_SensitiveDataDiscovery_EasiestToDoBusinessWith_EaseOfDoingBusinessWith-5.png?' },
  { alt: 'G2 Best Est. ROI Mid-Market Winter 2024', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/675710a020c6edfaf7176976_DataLossPrevention(DLP)_BestEstimatedROI_Mid-Market_Roi-6.png?' },
  { alt: 'G2 High Performer Winter 2024', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/67571085106b79b63ff37297_DataLossPrevention(DLP)_HighPerformer_HighPerformer-7.png?' },
  { alt: 'G2 Easiest Setup Winter 2024', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/6757108c2adc224fd340b798_SensitiveDataDiscovery_EasiestSetup_EaseOfSetup-8.png?' },
];

const TrustedBySection = () => {
  return (
    <section className="bg-white py-20 text-background-primary">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xs font-semibold uppercase tracking-[2px] text-[#7B68EE]">
            Trusted by these SaaS enabled teams
          </h3>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-12">
            <h2 className="text-5xl font-medium leading-tight text-[#0A0B14]">
              The{' '}
              <span className="relative">
                security teams
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 162 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M1.5 6.5C36.1667 3.5 106.5 -1.5 160.5 4.5" stroke="#8B7FE8" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              at these industry-leading companies can rest assured, their data is secure
            </h2>

            <div className="text-4xl font-medium text-gray-700 leading-relaxed">
              {companies.map((company) => (
                <span key={company.name} className="mr-4 inline-flex items-center gap-3">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <span>{company.name},</span>
                </span>
              ))}
              <span className="inline-flex items-center">and more...</span>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {badges.map((badge) => (
              <Image
                key={badge.src}
                src={badge.src}
                alt={badge.alt}
                width={115}
                height={140}
                className="h-auto w-full max-w-[115px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;