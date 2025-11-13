"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const tabData = [
  {
    id: 0,
    number: '01',
    label: 'Web & Mobile',
    title: ['Modern web and mobile apps ', 'built with cutting-edge technology'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-684706-hero-tab-1.avif?',
  },
  {
    id: 1,
    number: '02',
    label: 'AI & Analytics',
    title: ['Unlock business intelligence with ', 'AI-powered data solutions'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-605504-hero-tab-2.avif?',
  },
  {
    id: 2,
    number: '03',
    label: 'Cloud Solutions',
    title: ['Scale seamlessly with ', 'enterprise cloud infrastructure'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-534806-hero-tab-3.avif?',
  },
  {
    id: 3,
    number: '04',
    label: 'Security',
    title: ['Protect your business with ', 'comprehensive cybersecurity solutions'],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-890192-hero-tab-4.avif?',
  },
];

const ProgressNotch = () => (
  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 0L6 3L3 6H0V0H3Z" fill="currentColor" className="text-primary"></path>
    <path d="M6 3L8 5V1L6 3Z" fill="currentColor" className="text-primary/50"></path>
  </svg>
);


const ProgressBar: React.FC<{ status: 'past' | 'present' | 'future'; progress: number }> = ({ status, progress }) => {
  const baseClasses = "relative mb-3 h-1.5 w-full overflow-hidden rounded-[1.5px]";

  if (status === 'past') {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-primary opacity-50" />
      </div>
    );
  }
  if (status === 'present') {
    return (
      <div className={`${baseClasses} bg-border/20`}>
        <div
          className="h-full bg-primary flex justify-end items-center"
          style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
        >
          <div className="h-1.5 w-2 flex-shrink-0" style={{ transform: 'translateX(100%)' }}>
            {progress > 0 && <ProgressNotch />}
          </div>
        </div>
      </div>
    );
  }
  // 'future' status
  return <div className={`${baseClasses} bg-border/20`} />;
}

const TabbedFeatures = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const duration = 5000;

  const handleNextTab = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % tabData.length);
  }, []);

  const animate = useCallback((time: number) => {
    if (startTimeRef.current === undefined) {
      startTimeRef.current = time;
    }
    const elapsed = time - startTimeRef.current;
    const newProgress = Math.min((elapsed / duration) * 100, 100);
    setProgress(newProgress);

    if (elapsed < duration) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      handleNextTab();
    }
  }, [handleNextTab]);

  useEffect(() => {
    if (!isPaused) {
      setProgress(0);
      startTimeRef.current = undefined;
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [activeTab, isPaused, animate]);

  const handleTabClick = (index: number) => {
    if (index !== activeTab) {
      setActiveTab(index);
    }
  };

  const getTabStatus = (index: number) => {
    if (index === activeTab) return 'present';
    if (index < activeTab) return 'past';
    return 'future';
  }

  return (
    <div
      className="flex flex-col items-center justify-center gap-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full overflow-hidden rounded-xl border border-border">
        <div className="z-10 flex w-full gap-2 px-5 pt-5">
          {tabData.map((tab) => (
            <div key={tab.id} className="flex flex-1 flex-col items-center">
              <ProgressBar
                status={getTabStatus(tab.id)}
                progress={tab.id === activeTab ? progress : 0}
              />
              <div
                className={`flex shrink-0 cursor-pointer flex-col items-center gap-1.5 rounded-[4px] px-[3px] sm:flex-row group ${tab.id === activeTab ? 'text-text-primary' : 'text-text-secondary hover:bg-border'}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className={`font-monospace my-[3px] h-4 w-5 rounded-[4px] border border-border text-center text-xs leading-tight ${tab.id === activeTab ? 'bg-primary' : ''}`}>
                  {tab.number}
                </span>
                <p className="font-primary text-center text-[11px] not-italic group-hover:text-text-primary sm:text-nowrap sm:text-sm">
                  {tab.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto mt-6 w-full lg:w-[634px]" style={{ minHeight: '520px' }}>
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`absolute top-0 w-full transition-opacity duration-300 ${tab.id === activeTab ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <h4 className="absolute left-1/2 top-0 z-10 w-full max-w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center text-[20px] font-semibold leading-tight sm:text-[28px] lg:text-[32px]">
                <span>{tab.title[0]}</span>
                <span className="bg-gradient-to-b from-white to-[#999] bg-clip-text text-transparent">{tab.title[1]}</span>
              </h4>
              <div className="pointer-events-none relative">
                <Image
                  src={tab.image}
                  alt={tab.label}
                  width={634}
                  height={477}
                  className="m-auto"
                  unoptimized // Since the source images might be SVGs or other formats that don't need optimization
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabbedFeatures;