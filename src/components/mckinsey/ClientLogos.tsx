"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { name: "AWS", logo: "/images/partners/aws.png" },
  { name: "Microsoft", logo: "/images/partners/microsoft.png" },
  { name: "Google Cloud", logo: "/images/partners/google-cloud.png" },
  { name: "IBM", logo: "/images/partners/ibm.png" },
  { name: "Oracle", logo: "/images/partners/oracle.png" },
  { name: "Salesforce", logo: "/images/partners/salesforce.png" },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-mckinsey-slate uppercase tracking-wider mb-2">
            Trusted Technology Partners
          </p>
          <h3 className="font-merriweather text-2xl font-bold text-mckinsey-navy">
            We Work With Industry Leaders
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}










