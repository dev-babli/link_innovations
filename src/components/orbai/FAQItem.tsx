'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { animations } from './animations';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen = false,
  onToggle,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    
    if (contentRef.current) {
      animations.accordionToggle(contentRef.current, newState);
    }
    
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <motion.div
      className={`bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Question */}
      <button
        onClick={handleToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/40 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-primary-text pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-secondary-text flex-shrink-0" />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-secondary-text leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;



