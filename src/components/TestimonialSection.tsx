"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "Link Innovations delivered our mobile app ahead of schedule. Exceptional quality!",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
  },
  {
    name: "Michael Torres",
    role: "CTO",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "Their cloud solutions scaled our business perfectly. Link Innovations rocks!",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
  },
  {
    name: "David Kim",
    role: "COO",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "Web development expertise is unmatched. Our platform runs flawlessly now.",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
  },
  {
    name: "Lisa Wang",
    role: "Tech Lead",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content:
      "Link Innovations' API integration saved us months of development time!",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
  },
  {
    name: "Alex Rodriguez",
    role: "Designer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content:
      "Beautiful UI/UX design that users love. Link Innovations gets it right.",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg",
  },
  {
    name: "James Miller",
    role: "Developer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Clean code and solid architecture. Link Innovations delivers quality!",
    link: "#",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
  },
];

const Testimonial9 = () => {
  return (
    <section className="py-32">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <h2 className="mb-2">Trusted by companies worldwide</h2>
          <p className="text-muted-foreground lg:text-lg">
            Custom IT solutions that drive business growth.
          </p>
        </div>
        <div className="mt-14 w-full">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {testimonials.map((testimonial, idx) => {
                return (
                  <Card key={idx} className="p-5 shadow-sm">
                    <div className="flex justify-between">
                      <div className="flex gap-4 leading-5">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <a href={testimonial.link}>
                        <img
                          alt="Testimonial source"
                          src={testimonial.icon}
                          className="size-4"
                        />
                      </a>
                    </div>
                    <div className="mt-8 leading-7 text-foreground/70">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { Testimonial9 };