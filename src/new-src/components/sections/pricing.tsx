import React from 'react';
import Image from 'next/image';
import { Check, Star } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 24,
    description: 'Designed for growing teams needing advanced features and scalability.',
    features: [
      'Access to core features',
      'Basic performance reporting',
      'Email support',
      'Strategy onboarding guide',
      'Monthly check-in summary',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: 69,
    description: 'Designed for growing teams that need powerful tools and expert guidance.',
    features: [
      'Access to core features',
      'Advanced analytics dashboard',
      'Priority email support',
      'Quarterly strategy sessions',
      'Team access (up to 5 users)',
    ],
    popular: true,
  },
  {
    name: 'Scale',
    price: 129,
    description: 'Built for fast-scaling startups that require deep insights and partnership.',
    features: [
      'Access to all features',
      'Dedicated success manager',
      'Custom KPI tracking',
      'Monthly performance reviews',
      'Team access (unlimited users)',
    ],
    popular: false,
  },
];

const customerAvatarsData = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7fa79008ec6716ac73_Modern_20man_20portrait_2-10.avif", alt: "Customer Avatar 1" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7fa80bb87671d03416_Dreamy_20Portrait_20of_20-11.avif", alt: "Customer Avatar 2" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7fa80bb87671d03408_Contemplative_20Woman_20i-12.avif", alt: "Customer Avatar 3" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a71d7f400136be769bc9dc_Modern_20Portrait_20Gradi-13.avif", alt: "Customer Avatar 4" },
];

type PricingPlanProps = typeof pricingPlans[0];

const PricingCard = ({ name, price, description, features, popular }: PricingPlanProps) => {
  return (
    <div className={`flex h-full flex-col text-center p-10 rounded-[24px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:scale-[1.02] backdrop-blur-[10px]`}>
      {popular && (
        <div className="flex items-center justify-center gap-2 self-center text-sm bg-[rgba(255,255,255,0.1)] rounded-full px-3 py-1.5 mb-8">
            <Check className="w-4 h-4 text-[#D7F2A8]" />
            <span>Most popular</span>
        </div>
      )}
      <div className="flex flex-col items-center gap-2 mb-8">
          <h3 className="text-[28px] font-medium leading-[1.3] text-white">{name}</h3>
          <p className="text-[40px] font-medium leading-[1.2] tracking-[-0.01em] text-white">${price}</p>
      </div>
      <p className="grow text-base text-[rgba(255,255,255,0.7)] mb-8">{description}</p>
      
      <a href="#" className={`w-full block text-center py-3 px-6 rounded-full text-base font-medium transition-all duration-200 mb-8 ${
        popular 
          ? 'bg-white text-text-primary hover:bg-gray-200 shadow-lg' 
          : 'border border-white text-white hover:bg-white hover:text-text-primary'
      }`}>
        Schedule a demo
      </a>
      
      <div className="w-full h-px bg-[rgba(255,255,255,0.1)] mb-8"></div>
      
      <ul className="w-full flex flex-col gap-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#D7F2A8] shrink-0" />
              <span className="text-base text-[rgba(255,255,255,0.7)]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingSection = () => {
    return (
        <section id="pricing" className="relative overflow-hidden bg-background-dark text-text-inverse py-24 lg:py-32">
            <div 
                className="absolute inset-0 z-0 opacity-50" 
                style={{
                    background: "radial-gradient(circle, #8b4545 10%, rgba(139, 69, 69, 0) 40%), radial-gradient(circle, #4b3264 5%, rgba(75, 50, 100, 0) 30%), radial-gradient(circle, #326464 5%, rgba(50, 100, 100, 0) 30%)",
                    backgroundPosition: "20% 50%, 80% 80%, 40% 20%",
                    filter: 'blur(120px) saturate(0.8)',
                }}
            ></div>

            <div className="container relative z-10 mx-auto px-6 md:px-20">
                <div className="flex flex-col items-center gap-16 max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em]">Flexible pricing</h2>
                    </div>
                
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        {pricingPlans.map((plan) => (
                            <PricingCard key={plan.name} {...plan} />
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 text-center">
                        <div className="flex -space-x-3">
                            {customerAvatarsData.map((avatar, index) => (
                                <Image
                                    key={index}
                                    src={avatar.src}
                                    alt={avatar.alt}
                                    width={40}
                                    height={40}
                                    className="rounded-full border-2 border-background-dark"
                                    style={{ zIndex: customerAvatarsData.length - index }}
                                />
                            ))}
                        </div>
                        <div>
                           <div className="flex items-center gap-1.5 justify-center md:justify-start">
                             <Star className="w-4 h-4 text-yellow-400 fill-current" />
                             <p className="text-sm text-white">4.9/5 Rated</p>
                           </div>
                           <p className="text-sm text-[rgba(255,255,255,0.7)]">Over 9.2K customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;