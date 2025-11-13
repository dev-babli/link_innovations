import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65e05a7f597b582dc717c3b1_group-meeting-call--group-meeting-call-work-10.svg?",
    title: "Multiplayer editing",
    description: "No more asking if it's your turn to go into the model.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f386c684def4d6ffa9b38c_discussion-threads-11.svg?",
    title: "Comments and @-mentions",
    description: "Collaborate with others all in one place, and with all the context.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/svgs/65f386e31e8639265f135254_notifications-12.svg?",
    title: "Email/Slack notifications",
    description: "Never miss an update: know when it's your turn to take action.",
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center px-4">
    <div className="mb-6 flex h-[48px] w-[48px] items-center justify-center">
      <Image src={icon} alt="" width={48} height={48} className="h-auto w-full" />
    </div>
    <h3 className="text-2xl font-medium text-text-primary mb-2">{title}</h3>
    <p className="text-lg text-text-secondary leading-relaxed max-w-xs">{description}</p>
  </div>
);

const CollaborationSection = () => {
  return (
    <section className="bg-background-secondary py-24 sm:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-text-primary mb-6 text-center text-[56px] font-normal leading-[1.15] tracking-[-0.015em]">
            Collaborate side-by-side.
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-16">
            We figured out how to combine secret-service level controls with live
            comments and notifications. Discuss your plans in context and in real
            time.
          </p>
        </div>

        <div className="flex justify-center mb-24 lg:mb-32">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/65f9e73780d13c3d1ac079b0_collaborate-14.png?"
            alt="A conversation between employees about headcount planning"
            width={1080}
            height={567}
            className="w-full max-w-[1080px] h-auto rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;