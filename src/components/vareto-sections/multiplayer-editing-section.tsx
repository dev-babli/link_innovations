import Image from "next/image";

const MultiplayerEditingSection = () => {
  return (
    <section className="bg-[#f4f7a8] py-20 lg:py-[120px]">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-4 text-[40px] font-normal leading-[1.2] tracking-[-0.01em] text-text-primary md:mb-6 md:text-[56px] md:leading-[1.15] md:tracking-[-0.015em]">
            Multiplayer editing means no version issues.
          </h2>
          <p className="text-body-lg text-text-primary">
            Just like Gsheets, but designed for financial modeling.
          </p>
        </div>
        <div className="mt-12 md:mt-16">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a07632e8-c93f-4fef-b487-59d936e4d092-vareto-com/assets/images/661d9a89a2d1f5af74a0fa99_Hero-Multiplayer-Collaboration-13.png?"
            alt="An example of record level planning in Vareto"
            width={2240}
            height={1292}
            className="mx-auto block w-full max-w-[1120px] rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.1)] md:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MultiplayerEditingSection;