import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface DropdownBentoItem {
    title: string;
    description: string;
    href: string;
    label?: string;
}

export interface MagicBentoDropdownProps {
    items: DropdownBentoItem[];
    className?: string;
}

const MagicBentoDropdown: React.FC<MagicBentoDropdownProps> = ({ items, className }) => {
    return (
        <div className={cn("w-full", className)}>
            <div className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group block p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="space-y-3">
                                {item.label && (
                                    <div className="inline-block px-3 py-1 text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
                                        {item.label}
                                    </div>
                                )}
                                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MagicBentoDropdown;
