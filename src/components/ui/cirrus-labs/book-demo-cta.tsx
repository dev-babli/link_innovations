"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const logos = [
  "Google", "Microsoft", "Amazon", "Apple", "Meta", "Tesla", "IBM", "Oracle",
  "Salesforce", "Adobe", "Netflix", "Spotify", "Uber", "Airbnb"
];

export default function BookDemoCTA() {
  return (
    <section className="relative bg-white py-24 overflow-hidden border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Ready to Accelerate your organization's AI strategy?
            </h2>
            
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {logos.slice(0, 14).map((logo, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                >
                  <span className="text-xs text-gray-400 font-medium">{logo}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-lg"
            >
              Book a Demo Today.
            </Link>
            <p className="text-gray-600 mt-4 text-sm">
              AI consulting experts delivering safe, scalable, and compliant enterprise solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



