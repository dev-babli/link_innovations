import Image from "next/image";

// Background SVG for the radial gradient glow.
// This is a decorative element and is not interactive.
const RadialGradientSvg = () => (
  <svg
    width="1919"
    height="747"
    viewBox="0 0 1919 747"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-x-0 mx-auto w-full object-cover"
    aria-hidden="true"
  >
    <path
      d="M959.5 747C1489.28 747 1919 579.742 1919 373.5C1919 167.258 1489.28 0 959.5 0C429.721 0 0 167.258 0 373.5C0 579.742 429.721 747 959.5 747Z"
      fill="url(#paint0_radial_final_cta)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_final_cta"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(959.5 373.5) rotate(90) scale(373.5 959.5)"
      >
        <stop stopColor="#552199" stopOpacity="0.16" />
        <stop offset="1" stopColor="#220D40" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// Background SVG for the curved lines.
// This is a decorative element and is not interactive.
const CurvedLinesSvg = () => (
  <svg
    width="1920"
    height="960"
    viewBox="0 0 1920 960"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 w-full object-cover"
    aria-hidden="true"
  >
    <g opacity="0.15">
      <path d="M-66 480C-66 215.193 115.193 33 280 33H1640C1804.81 33 1986 215.193 1986 480" stroke="#9333EA" />
      <path d="M-115 480C-115 186.294 89.2944 11 280 11H1640C1833.71 11 1995 186.294 1995 480" stroke="#9333EA" />
      <path
        d="M-167 480C-167 155.675 61.6751 -21 280 -21H1640C1862.32 -21 2047 155.675 2047 480"
        stroke="#9333EA"
      />
      <path d="M-220 480C-220 124.31 33.3096 -54 280 -54H1640C1890.69 -54 2100 124.31 2100 480" stroke="#9333EA" />
      <path d="M-274 480C-274 92.2019 4.20193 -88 280 -88H1640C1919.8 -88 2154 92.2019 2154 480" stroke="#9333EA" />
      <path
        d="M-329 480C-329 59.3491 -5.34913 -123 280 -123H1640C1949.65 -123 2209 59.3491 2209 480"
        stroke="#9333EA"
      />
    </g>
  </svg>
);

const FinalCtaSection = () => {
  return (
    <section className="relative bg-background-primary py-24 sm:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -top-64 z-0 hidden sm:block">
        <div className="absolute top-0 w-full">
          <RadialGradientSvg />
        </div>
        <div className="absolute inset-x-0 top-0 mx-auto">
          <CurvedLinesSvg />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-10 px-6">
        <h2 className="z-10 w-full max-w-[500px] text-center text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary sm:text-[56px]">
          Ready to Transform Your Business?
        </h2>
        <div className="group/main relative">
          <a
            href="/contact"
            className="w-fit inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 md:px-5 shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5),0_4px_8px_rgba(0,0,0,0.3)] hover:-translate-y-px"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;