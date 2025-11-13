'use client';

import { motion } from 'framer-motion';
import { LineChart, FileCheck2, Headset, MoreHorizontal } from 'lucide-react';

const processData = [
  {
    step: '01',
    icon: LineChart,
    title: 'Workflow Assessment',
    description:
      'We begin by examining your existing workflows to identify where AI can deliver the greatest impact.',
  },
  {
    step: '02',
    icon: FileCheck2,
    title: 'Deploy with Confidence',
    description:
      'Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.',
  },
  {
    step: '03',
    icon: Headset,
    title: 'Ongoing Support & Optimization',
    description:
      'After deployment, we provide support and refine your AI systems to keep them performing at their best.',
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-secondary py-[100px]">
      <div className="mx-auto max-w-[1200px] px-8">
        <motion.div 
          className="mb-16 flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/40 py-1.5 px-3 bg-white/80 backdrop-blur-md"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.55px] text-tertiary-text">
              PROCESS
            </p>
          </div>
          <h2 className="text-[44px] font-bold leading-tight tracking-[-0.02em] text-[#1a1a1a]">
            Simple & Scalable
          </h2>
          <p className="max-w-2xl text-lg leading-[1.6] text-secondary-text">
            A transparent process of collaboration and feedback
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {processData.map((item, index) => (
            <motion.div
              key={item.step}
              className={`flex ${index === 1 ? 'md:mt-[60px]' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12)] hover:scale-[1.02]">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-text">
                      <item.icon className="h-6 w-6 text-card" />
                    </div>
                    <div className="mt-1">
                      <h3 className="text-[22px] font-semibold leading-tight text-[#1a1a1a]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-secondary-text">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <h2 className="text-[80px] font-bold tracking-[-0.03em] text-neutral-200">
                    {item.step}
                  </h2>
                  <MoreHorizontal className="h-8 w-8 text-neutral-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

