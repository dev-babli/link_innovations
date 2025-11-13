import Image from "next/image";
import Link from "next/link";

const ImplementationSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 lg:grid-cols-2">
          
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-gradient-radial from-[#E8FF7A]/30 to-transparent" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-radial from-[#E8FF7A]/30 to-transparent" />
          
          <div className="relative min-h-[450px] lg:min-h-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/6441aa0a26cf68bdaebe1016_shutterstock_1139663846_Edited-24.jpg?"
              alt="An image of clients working with Vareto"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center bg-[#F5F4F1] p-12 md:p-16 lg:p-20">
            <div className="mb-6">
              <h2 className="text-[40px] font-medium leading-[1.2] tracking-[-0.01em] text-black lg:text-[48px]">
                Implementation in as few as five weeks.
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-xl leading-relaxed text-text-secondary">
                With a background in FP&A, our Customer Growth Managers are uniquely equipped to help you onboard quickly and get max value from Vareto.
              </p>
            </div>
            <Link
              href="/how-to-buy/customer-success"
              className="self-start rounded-full bg-black px-8 py-4 text-base font-medium text-white transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;