"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function McKinseyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mckinsey-navy text-white">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/lumin-innovations-horizontal.png"
                alt="Link Innovations"
                width={180}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-mckinsey-light-gray text-sm mb-6 leading-relaxed">
              Transform ideas into digital reality with innovative technology solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mckinsey-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mckinsey-blue transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mckinsey-blue transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-merriweather font-bold text-white mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-services" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-merriweather font-bold text-white mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-merriweather font-bold text-white mb-4 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-mckinsey-light-gray text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@linkinnovations.ai" className="hover:text-white transition-colors">
                  info@linkinnovations.ai
                </a>
              </li>
              <li className="flex items-start gap-2 text-mckinsey-light-gray text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2 text-mckinsey-light-gray text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-mckinsey-light-gray text-sm">
              © {currentYear} Link Innovations. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-mckinsey-light-gray hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}










