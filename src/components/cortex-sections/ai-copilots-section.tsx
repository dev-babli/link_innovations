import Image from 'next/image';
import { Brain, Cloud, Shield } from 'lucide-react';

const copilotsData = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to transform your business operations.',
    subDescription: 'From predictive analytics to intelligent automation, we build custom AI solutions that learn and adapt to your unique business needs, driving efficiency and innovation.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-765206-ai-section-image-1.png?',
    alt: 'AI & Machine Learning Solutions',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions & DevOps',
    description: 'Scale with confidence using modern cloud infrastructure and automation.',
    subDescription: 'We design, deploy, and manage cloud-native applications across AWS, Azure, and GCP. Our DevOps practices ensure continuous delivery, high availability, and optimal performance.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-572699-ai-section-image-2.png?',
    alt: 'Cloud Solutions Dashboard',
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Protect your digital assets with enterprise-grade security solutions.',
    subDescription: 'Our comprehensive security services include penetration testing, threat monitoring, compliance audits, and security architecture design to keep your business safe from evolving threats.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-122524-ai-section-image-3.png?',
    alt: 'Cybersecurity Solutions',
  },
];

const AiCopilotsSection = () => {
  return (
    <section className="relative mt-16 flex !max-w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-purple-light to-primary-purple px-0 pb-20 pt-20 md:pb-[90px] md:pt-28 xl:pb-[130px] xl:pt-[130px]">
      <Image
        alt="Wavy lines background"
        width={564}
        height={280.5}
        className="pointer-events-none absolute -left-[5%] top-0 h-auto w-1/2 min-w-[564px] opacity-70"
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-277670-wavy-lines.cc82dd52.png?"
      />
      <div className="z-10 w-full px-7 text-center">
        <div className="relative mx-auto mb-4 h-[30px] w-[30px]">
          <Image
            alt="Sparkle icon"
            fill
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/spark-icon.934f8ab1-22.svg?"
            className="!relative"
          />
        </div>
        <h2 className="mx-auto max-w-[800px] text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          Comprehensive Technology Solutions
          <br />
          Tailored to Your Business Needs
        </h2>
        <p className="mx-auto mt-4 max-w-[55ch] text-lg text-text-secondary md:mt-2">
          We deliver end-to-end digital transformation with cutting-edge technology
        </p>
      </div>

      <div className="z-10 mt-20 flex w-full flex-col justify-between gap-16 px-6 md:px-12 xl:mt-[100px] xl:flex-row xl:gap-8">
        {copilotsData.map((item, index) => (
          <div key={index} className="group relative flex w-full flex-col xl:w-1/3">
            <div className="relative w-full rounded-2xl border-border-subtle border border-b-0 transition-all duration-300 xl:group-hover:-translate-y-5">
              <Image
                alt={item.alt}
                width={401}
                height={182}
                className="w-full rounded-t-2xl"
                src={item.imageSrc}
              />
            </div>
            <div className="relative z-10 -mt-1 rounded-b-2xl rounded-t-lg bg-card p-6 pb-8 transition-all duration-300 xl:rounded-t-none xl:group-hover:-translate-y-5 xl:group-hover:rounded-t-lg">
              <div className="flex items-center gap-3">
                <item.icon className="h-[25px] w-[25px] text-purple-light" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
              </div>
              <p className="mt-4 whitespace-pre-line text-base text-text-secondary">{item.description}</p>
              <p className="mt-2 text-sm text-text-tertiary">{item.subDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiCopilotsSection;