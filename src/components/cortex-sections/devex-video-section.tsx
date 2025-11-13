import Image from "next/image";

const featureCards = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/database-33.svg?",
    title: "Agile Development Process",
    description:
      "We follow industry-leading agile methodologies to ensure your project stays on track, on budget, and delivers value at every sprint. Transparent communication and iterative development keep you in control.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/listchecks-34.svg?",
    title: "Quality Assurance Excellence",
    description:
      "Every line of code is thoroughly tested. We implement comprehensive QA processes including automated testing, security audits, and performance optimization to deliver enterprise-grade solutions you can rely on.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-812836-sharenetwork2.png?",
    title: "Ongoing Support & Maintenance",
    description:
      "Your success is our success. We provide 24/7 monitoring, regular updates, and dedicated support to ensure your applications run smoothly and continue to evolve with your business needs.",
  },
];

const DevexVideoSection = () => {
  return (
    <section className="bg-background-primary py-16 lg:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-10 text-center lg:gap-14">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-[48px] lg:leading-[1.2]">
              Our Development Excellence
            </h2>
            <p className="max-w-4xl text-lg leading-relaxed text-text-secondary">
              Quality is at the heart of everything we do. From the first line of code
              to ongoing maintenance, we follow best practices that ensure your software
              is secure, scalable, and ready for growth. Our proven process delivers results
              that exceed expectations.
            </p>
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
                alt="Cortex Mobile UI Showcase"
                width={750}
                height={2839}
                className="relative block w-full lg:hidden"
                unoptimized
              />
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
                  <h3 className="text-xl font-semibold leading-snug text-text-primary">
                    {card.title}
                  </h3>
                </div>
                <p className="text-base text-text-tertiary">
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

export default DevexVideoSection;