import React from 'react';

const features = [
  {
    number: '01',
    title: 'Enterprise-Grade Quality',
    description: 'Our solutions are built with scalability, security, and performance in mind from day one.',
  },
  {
    number: '02',
    title: 'Seamless Collaboration',
    description: "Work closely with our expert team through agile sprints. Your vision, our technical excellence.",
  },
  {
    number: '03',
    title: 'Future-Proof Technology',
    description: 'We use cutting-edge technologies and best practices to ensure your solution stays relevant for years.',
  },
];

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description }) => {
  return (
    <div className="rounded-2xl bg-[#E8E4F3] p-10">
      <div className="mb-8 text-sm font-medium text-text-tertiary">{number}</div>
      <div>
        <h3 className="mb-4 text-[28px] font-semibold leading-tight text-text-primary">{title}</h3>
        <p className="text-lg leading-relaxed text-text-secondary">{description}</p>
      </div>
    </div>
  );
};

const MarqueeContent = () => (
  <div className="flex flex-shrink-0 items-center whitespace-nowrap px-8">
    <span className="text-6xl font-medium text-text-primary">Web Development.</span>
    <span className="mx-12 text-6xl font-medium text-text-primary">•</span>
    <span className="text-6xl font-medium text-text-primary">Mobile Apps.</span>
    <span className="mx-12 text-6xl font-medium text-text-primary">•</span>
    <span className="text-6xl font-medium text-text-primary">AI Solutions.</span>
    <span className="mx-12 text-6xl font-medium text-text-primary">•</span>
    <span className="text-6xl font-medium text-text-primary">Cloud & DevOps.</span>
    <span className="mx-12 text-6xl font-medium text-text-primary">•</span>
  </div>
);

const FeaturesSection = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#E8E4F3] via-[#F5F3FB] to-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
            <h2 className="text-[56px] font-normal leading-[1.15] tracking-[-0.015em] text-text-primary">
              Why Choose Link Innovations?
            </h2>
            <p className="mt-6 text-xl leading-[1.6] text-text-secondary">
              We combine technical expertise with business insight to deliver solutions that not only work flawlessly but also drive real business growth. Here's what sets us apart.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.number} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-accent-yellow py-12">
        <div className="flex [animation:marquee_40s_linear_infinite]">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;