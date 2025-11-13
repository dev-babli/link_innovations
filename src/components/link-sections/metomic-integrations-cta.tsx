import Link from 'next/link';
import Image from 'next/image';

const LinkMetomicIntegrationsCta = () => {
    return (
        <div className="bg-[#F9FAFF] py-[60px]">
            <div className="container">
                <div className="relative flex flex-col items-center">
                    <div className="h-[30px] w-px bg-slate-200" />
                    <Link
                        href="/integration/all-integrations"
                        className="group flex max-w-[300px] items-center justify-center gap-x-3 rounded-sm bg-[#1F1F2E] px-7 py-[14px] text-center font-medium text-white ring-offset-background transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-[#3E3F52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <span className="text-base font-medium leading-none tracking-[0.01em]">
                            All integrations
                        </span>
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eaef4bf1-d07d-48c3-b176-750b9be61de7-metomic-io/assets/svgs/65f887b0bcd94666a2981fe1_Right%20Arrow-1.svg?"
                            alt="Right arrow icon"
                            width={20}
                            height={20}
                            className="h-5 w-5"
                        />
                    </Link>
                    <div className="h-[60px] w-px bg-slate-200" />
                </div>
            </div>
        </div>
    );
};

export default LinkMetomicIntegrationsCta;

