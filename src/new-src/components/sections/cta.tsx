"use client";

import Image from "next/image";
import { useState } from "react";

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative overflow-hidden rounded-[24px] bg-background-dark py-16 md:py-24">
      {/* Background Gradients */}
      <div
        className="absolute top-1/2 left-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(139,69,69,0.4)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-20%] right-[-20%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(75,50,100,0.3)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl font-medium leading-[1.15] text-text-inverse md:text-[48px] lg:text-left">
              Start your journey
            </h2>
            <p className="mt-4 text-lg text-text-inverse-secondary md:text-xl lg:text-left">
              Let's start building something great together.
            </p>

            <div className="mt-12 flex flex-col gap-4 lg:items-start">
              <a
                href="tel:206-473-1725"
                className="font-display text-2xl font-medium text-text-inverse transition-opacity hover:opacity-80 md:text-[28px]"
              >
                206-473-1725
              </a>
              <a
                href="mailto:hello@grovia.io"
                className="font-display text-2xl font-medium text-text-inverse transition-opacity hover:opacity-80 md:text-[28px]"
              >
                hello@grovia.io
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7fa79008ec6716ac73_Modern_20man_20portrait_2-10.avif"
                  alt="Customer portrait"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-background-dark object-cover"
                />
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7fa80bb87671d03416_Dreamy_20Portrait_20of_20-11.avif"
                  alt="Customer portrait"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-background-dark object-cover"
                />
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7fa80bb87671d03408_Contemplative_20Woman_20i-12.avif"
                  alt="Customer portrait"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-background-dark object-cover"
                />
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7f400136be769bc9dc_Modern_20Portrait_20Gradi-13.avif"
                  alt="Customer portrait"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-background-dark object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-text-inverse">4.9/5 Rated</p>
                <p className="text-sm text-text-inverse-secondary">
                  Over 9.2K Customers
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="flex items-center">
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-base font-normal text-text-inverse"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter name"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-base text-text-inverse placeholder:text-text-inverse-secondary/50 transition-colors focus:border-white/40 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-base font-normal text-text-inverse"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter email address"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-base text-text-inverse placeholder:text-text-inverse-secondary/50 transition-colors focus:border-white/40 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-base font-normal text-text-inverse"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-base text-text-inverse placeholder:text-text-inverse-secondary/50 transition-colors focus:border-white/40 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-accent-yellow px-8 py-3.5 font-medium text-text-primary transition-transform hover:scale-[1.02]"
              >
                Send email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;