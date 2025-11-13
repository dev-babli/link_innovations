import Image from "next/image";

export const WebDevelopmentImage = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/webdevelopment.png"
            alt="Full-Stack Development Services by Link Innovations"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};


