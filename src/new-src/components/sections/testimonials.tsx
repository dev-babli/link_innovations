import Image from 'next/image';

const testimonials = [
  {
    quote: "Grovia helped us streamline our operations and scale faster than we imagined. Their mix of strategy and execution is unmatched.",
    name: "Talia Smith",
    title: "Head of Product at Forma",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7f400136be769bc9dc_Modern_20Portrait_20Gradi-13.avif"
  },
  {
    quote: "Working with Grovia felt like having an extension of our team. They understood our challenges and delivered real, measurable results.",
    name: "Jordan Johnson",
    title: "COO at Metrico",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7fa80bb87671d03416_Dreamy_20Portrait_20of_20-11.avif"
  },
  {
    quote: "From the first meeting, Grovia brought clarity and momentum to our hiring strategy. We've seen a major improvement in team performance.",
    name: "Samuel Torres",
    title: "Founder at Bloomtech",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7fa79008ec6716ac73_Modern_20man_20portrait_2-10.avif"
  }
];

const quoteIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/svgs/68a7e01f4b9688a13f476aa4_Quotes-9.svg";

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 flex flex-col shadow-[0px_2px_12px_rgba(0,0,0,0.06)]">
              <Image 
                src={quoteIconUrl} 
                alt="Quote icon" 
                width={40}
                height={40}
                className="w-10 h-10 mb-6" 
              />
              <p className="text-foreground text-base leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex-grow" />
              <div className="flex items-center gap-4 mt-8">
                <Image 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12"
                />
                <div>
                  <p className="font-medium text-base text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;