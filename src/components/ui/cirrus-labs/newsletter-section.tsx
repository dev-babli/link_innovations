"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
              <Mail className="w-4 h-4 mr-2 text-black" />
              <p className="text-xs font-medium text-black uppercase tracking-wider">NEWSLETTER</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              Enjoyed this read? Subscribe.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover design insights, project updates, and tips to elevate your work straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">Unsubscribe at any time</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



