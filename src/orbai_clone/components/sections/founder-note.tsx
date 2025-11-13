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
            We partner with businesses to deliver{' '}
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent font-semibold">
              scalable, secure, and intelligent
            </span>
            {' '}technology solutions that{' '}
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent font-semibold">
              drive growth and innovation
            </span>
            .
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
};

export default FounderNote;