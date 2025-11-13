"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function FeaturedSectionStats() {
  const data = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 60 },
    { name: "Apr", value: 80 },
    { name: "May", value: 100 },
    { name: "Jun", value: 130 },
    { name: "Jul", value: 160 },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto text-left py-16 sm:py-24 lg:py-32 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg sm:text-xl lg:text-4xl font-medium text-[#000000] mb-8 sm:mb-12 lg:mb-16">
          Powering teams with real-time insights.{" "}
          <span className="text-[#666666] text-sm sm:text-base lg:text-2xl">
            Our next-gen analytics dashboard helps you track performance, manage
            clients, and make data-driven decisions in seconds.
          </span>
        </h3>
        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-8">
          <div>
            <p className="text-3xl sm:text-4xl font-medium text-[#000000]">50,000+</p>
            <p className="text-[#666666] text-md mt-1">Projects Managed</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-medium text-[#000000]">99.9%</p>
            <p className="text-[#666666] text-md mt-1">Uptime Guarantee</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-medium text-[#000000]">1,200+</p>
            <p className="text-[#666666] text-md mt-1">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-medium text-[#000000]">1.2s</p>
            <p className="text-[#666666] text-md mt-1">Avg. Response Time</p>
          </div>
        </div>
      </div>
      {/* Area Chart */}
      <div className="w-full h-48 sm:h-64 mt-8 sm:mt-12">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#000000" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#000000" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                color: '#000000'
              }}
              labelStyle={{ color: '#000000' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#000000"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorBlue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

