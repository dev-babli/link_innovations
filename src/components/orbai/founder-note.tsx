'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FounderNote = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-20">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.4] text-[#1a1a1a] italic">
            We harness your data, understand your audience, and use AI to help your brand{' '}
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent font-semibold">
              rise above the noise
            </span>
            . The best part? We{' '}
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent font-semibold">
              execute, too
            </span>
            .
          </blockquote>
        </motion.div>

        <motion.div 
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-gray-100 ring-offset-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/images/W7xYkGKzPzvnPv58ZBNzxS3JZI-1.jpg"
              alt="Founder portrait"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-[#999999]">Founder of ORB AI</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderNote;

