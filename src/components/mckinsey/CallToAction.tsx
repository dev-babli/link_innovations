"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-mckinsey-navy">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-merriweather text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Let's discuss how our expertise can help you achieve your digital transformation goals. Our team is ready to partner with you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mckinsey-blue text-white rounded hover:bg-opacity-90 transition-all font-medium text-lg group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded hover:bg-white hover:text-mckinsey-navy transition-all font-medium text-lg"
            >
              View Our Work
            </Link>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80">
            <a
              href="mailto:info@linkinnovations.ai"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@linkinnovations.ai</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}










