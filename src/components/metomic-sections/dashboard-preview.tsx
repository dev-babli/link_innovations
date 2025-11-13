import Image from "next/image";

const DashboardPreview = () => {
  return (
    <section
      className="relative z-10 mx-auto mt-[-100px] max-w-[1300px] px-5 sm:px-8 md:-mt-[140px] lg:-mt-[160px]"
      aria-label="Metomic Platform Preview"
    >
      {/* Orange Gradient orb at the bottom */}
      <div
        className="absolute -bottom-[500px] -left-[20%] -z-20 h-[1000px] w-[1400px] rounded-full bg-[radial-gradient(circle,#ff8f6b_0,transparent_60%)] opacity-15"
        aria-hidden="true"
      />
      {/* Purple Gradient orb at the top */}
      <div
        className="absolute -top-[300px] -right-[300px] -z-10 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,#9d7fff_0,transparent_60%)] opacity-10"
        aria-hidden="true"
      />

      {/* Dashboard Image Container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.05] shadow-[0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/images/6606a2f9789f950f3a942611_Screenshot_2024-03-27_at_11.36.06-2.png"
          alt="Metomic dashboard"
          width={1299}
          height={655}
          priority
          sizes="(max-width: 479px) 91vw, (max-width: 767px) 90vw, (max-width: 991px) 94vw, (max-width: 1439px) 90vw, 1300px"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};

export default DashboardPreview;