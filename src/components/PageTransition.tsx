'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const currentPath = usePathname();
    const stairParentRef = useRef<HTMLDivElement>(null);
    const pageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Show stairs container
        tl.to(stairParentRef.current, {
            display: 'block',
        });

        // Animate stairs from height 0
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        });

        // Move stairs down
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        });

        // Hide stairs container
        tl.to(stairParentRef.current, {
            display: 'none'
        });

        // Reset stairs position
        tl.to('.stair', {
            y: '0%',
        });

        // Animate page content
        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.02,
            duration: 0.8,
            ease: 'power2.out'
        });
    }, [currentPath]);

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-[9999] top-0 pointer-events-none' style={{ display: 'none' }}>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-gradient-to-b from-zinc-950 via-black to-black'></div>
                    <div className='stair h-full w-1/5 bg-gradient-to-b from-neutral-950 via-zinc-950 to-black'></div>
                    <div className='stair h-full w-1/5 bg-gradient-to-b from-slate-950 via-neutral-950 to-black'></div>
                    <div className='stair h-full w-1/5 bg-gradient-to-b from-neutral-950 via-zinc-950 to-black'></div>
                    <div className='stair h-full w-1/5 bg-gradient-to-b from-zinc-950 via-black to-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    );
}



