import Image from "next/image";

// Data for the activity feed cards, based on the provided content and HTML structure.
const activities = [
  {
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/660c1277387892b7e67ad50c_Frame%201000005277-4.jpg?",
    name: "Bob",
    action: "removed public sharing from a Google Drive file containing sensitive data",
  },
  {
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/660c127e327455a695d162a4_Frame%201000005278-5.jpg?",
    name: "Antonie",
    action: "revoked permissions to a Notion page containing PII",
  },
  {
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/660b20a0efb57fa9843a2d2f_Frame%201000005275-1.webp?",
    name: "Ashley",
    action: "quarantined a message on Slack containing an API key",
  },
  {
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/icons/660c1277387892b7e67ad50c_Frame%201000005277-4.jpg?",
    name: "Bob",
    action: "removed public sharing from a Google Drive file containing sensitive data",
  },
];

interface ActivityCardProps {
  avatar: string;
  name: string;
  action: string;
}

const ActivityCard = ({ avatar, name, action }: ActivityCardProps) => (
  <div
    className="flex w-[400px] flex-none flex-col justify-start rounded-xl border-[rgba(255,255,255,0.08)] bg-[#1f1f2e] p-5 shadow-[0px_8px_32px_rgba(0,0,0,0.4)] bg-[linear-gradient(108.52deg,rgba(255,255,255,0.08)_-21.46%,rgba(255,255,255,0.02)_111.39%)]"
  >
    <div className="flex items-center gap-4">
      <Image
        src={avatar}
        alt={`${name}'s avatar`}
        width={48}
        height={48}
        className="h-12 w-12 rounded-full object-cover"
      />
      <p className="text-sm leading-[1.5] text-text-tertiary">
        <strong className="font-medium text-text-primary">{name}</strong> {action}
      </p>
    </div>
  </div>
);

export default function ActivityFeedCarousel() {
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="relative flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_60s_linear_infinite] motion-reduce:animate-none">
          {activities.map((activity, index) => (
            <div key={`first-set-${index}`} className="px-2"> {/* Creates a 1rem/16px gap */}
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-[marquee_60s_linear_infinite] motion-reduce:animate-none" aria-hidden="true">
           {activities.map((activity, index) => (
            <div key={`second-set-${index}`} className="px-2"> {/* Creates a 1rem/16px gap */}
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}