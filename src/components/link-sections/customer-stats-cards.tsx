import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function LinkCustomerStatsCards() {
    return (
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-6">
            <Link
                href="/case-studies/healthcare-platform"
                className="group flex max-w-[235px] cursor-pointer flex-col gap-5 text-left transition-transform duration-300 hover:-translate-y-1"
            >
                <div className="flex w-full items-center justify-between gap-3">
                    <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/letsgetchecked-colored-with-text-5.svg?"
                        alt="Healthcare Platform logo"
                        width={139}
                        height={28}
                        className="h-7 w-auto"
                    />
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border-subtle text-text-tertiary transition-colors group-hover:border-transparent group-hover:bg-white group-hover:text-background-secondary">
                        <ChevronRight className="h-3 w-3" />
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-5xl font-bold leading-none text-white">67%</p>
                        <p className="text-xs leading-tight text-text-secondary">
                            Performance
                            <br />
                            improvement
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-5xl font-bold leading-none text-white">2x</p>
                        <p className="text-xs leading-tight text-text-secondary">
                            User
                            <br />
                            engagement
                        </p>
                    </div>
                </div>
            </Link>

            <div className="hidden h-auto w-px self-stretch bg-border-subtle sm:block" />

            <Link
                href="/case-studies/fintech-solution"
                className="group flex max-w-[235px] cursor-pointer flex-col gap-5 text-left transition-transform duration-300 hover:-translate-y-1"
            >
                <div className="flex w-full items-center justify-between gap-3">
                    <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/rapid7-colored-with-text-6.svg?"
                        alt="FinTech Solution logo"
                        width={79}
                        height={28}
                        className="h-7 w-auto"
                    />
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border-subtle text-text-tertiary transition-colors group-hover:border-transparent group-hover:bg-white group-hover:text-background-secondary">
                        <ChevronRight className="h-3 w-3" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-2">
                        <p className="text-5xl font-bold leading-none text-white">3,000</p>
                        <p className="max-w-[180px] text-xs leading-tight text-text-secondary">
                            Transactions processed in &lt; 2 weeks
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

