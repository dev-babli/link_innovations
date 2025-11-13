"use client";

import { ExpandableCard } from "@/components/ui/expandable-card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const industries = [
  {
    title: "Healthcare & Life Sciences",
    src: "/Industry Card images/Healthcar and Lifesciences.webp",
    description: "Transforming Healthcare with Technology",
    content: (
      <>
        <h4>Digital Health Revolution</h4>
        <p>
          We're revolutionizing healthcare delivery through cutting-edge technology solutions. 
          Our HIPAA-compliant platforms enable seamless patient care, telemedicine services, 
          and advanced medical data analytics. From electronic health records to AI-powered 
          diagnostic tools, we're helping healthcare providers deliver better outcomes.
        </p>
        <h4>Medical Device Integration</h4>
        <p>
          Our expertise in medical device connectivity and IoT solutions allows healthcare 
          facilities to integrate smart devices, monitor patient vitals in real-time, and 
          automate critical care processes. We ensure compliance with FDA regulations while 
          delivering innovative solutions that improve patient safety and care quality.
        </p>
        <h4>Pharmaceutical Innovation</h4>
        <p>
          From drug discovery platforms to clinical trial management systems, we support 
          pharmaceutical companies with advanced data analytics, regulatory compliance tools, 
          and patient engagement solutions. Our technology accelerates the path from research 
          to market, bringing life-saving treatments to patients faster.
        </p>
        <h4>Healthcare Analytics & AI</h4>
        <p>
          Leveraging machine learning and predictive analytics, we help healthcare organizations 
          optimize operations, predict patient outcomes, and personalize treatment plans. Our 
          AI solutions analyze vast amounts of medical data to provide actionable insights that 
          improve both clinical and operational efficiency.
        </p>
      </>
    )
  },
  {
    title: "Banking & Financial Services",
    src: "/Industry Card images/Baking and Financial.webp",
    description: "Secure Financial Technology Solutions",
    content: (
      <>
        <h4>Digital Banking Transformation</h4>
        <p>
          We're reshaping the financial landscape with secure, scalable digital banking solutions. 
          Our platforms enable seamless online banking, mobile payments, and digital wallet 
          services while maintaining the highest security standards. From core banking systems 
          to customer-facing applications, we deliver comprehensive financial technology solutions.
        </p>
        <h4>Fintech Innovation</h4>
        <p>
          Our fintech solutions include peer-to-peer lending platforms, robo-advisory services, 
          and cryptocurrency trading systems. We help financial institutions embrace innovation 
          while maintaining regulatory compliance and security. Our blockchain and AI-powered 
          solutions are transforming how people manage their finances.
        </p>
        <h4>Risk Management & Compliance</h4>
        <p>
          Advanced risk assessment tools, fraud detection systems, and regulatory compliance 
          platforms help financial institutions navigate complex regulatory environments. Our 
          solutions use machine learning to identify suspicious activities and ensure adherence 
          to international financial regulations.
        </p>
        <h4>Investment & Trading Platforms</h4>
        <p>
          From algorithmic trading systems to portfolio management platforms, we provide 
          sophisticated tools for investment professionals and retail investors. Our real-time 
          data processing and analytics capabilities enable informed decision-making in fast-paced 
          financial markets.
        </p>
      </>
    )
  },
  {
    title: "Education & Training",
    src: "/Industry Card images/Education and Training.webp",
    description: "Next-Generation Learning Platforms",
    content: (
      <>
        <h4>E-Learning Revolution</h4>
        <p>
          We're transforming education with interactive learning management systems, virtual 
          classrooms, and personalized learning experiences. Our platforms support both 
          traditional and modern educational approaches, enabling institutions to deliver 
          engaging content and track student progress effectively.
        </p>
        <h4>Virtual Reality in Education</h4>
        <p>
          Immersive VR learning experiences bring complex subjects to life. From virtual 
          laboratory simulations to historical recreations, we create educational content 
          that enhances understanding and retention. Our VR solutions make learning more 
          engaging and accessible to students worldwide.
        </p>
        <h4>Corporate Training Solutions</h4>
        <p>
          Advanced corporate training platforms with AI-powered personalization, skill 
          assessment tools, and progress tracking help organizations develop their workforce. 
          Our solutions support various learning formats including microlearning, gamification, 
          and collaborative learning environments.
        </p>
        <h4>Educational Analytics</h4>
        <p>
          Data-driven insights help educators understand learning patterns, identify at-risk 
          students, and optimize curriculum delivery. Our analytics platforms provide 
          comprehensive reporting and predictive modeling to improve educational outcomes 
          and institutional performance.
        </p>
      </>
    )
  },
  {
    title: "Energy & Utilities",
    src: "/Industry Card images/Energy and Utilities.webp",
    description: "Smart Energy Management Systems",
    content: (
      <>
        <h4>Smart Grid Technology</h4>
        <p>
          We're building the future of energy distribution with smart grid solutions that 
          optimize power delivery, integrate renewable energy sources, and enable real-time 
          monitoring. Our IoT-enabled systems help utilities manage demand, reduce outages, 
          and improve overall grid efficiency.
        </p>
        <h4>Renewable Energy Integration</h4>
        <p>
          Advanced energy management systems seamlessly integrate solar, wind, and other 
          renewable sources into existing power grids. Our solutions include energy storage 
          optimization, demand response systems, and predictive maintenance for renewable 
          energy infrastructure.
        </p>
        <h4>Utility Operations Management</h4>
        <p>
          Comprehensive utility management platforms streamline operations, asset management, 
          and customer service. From meter reading automation to outage management systems, 
          we help utilities improve efficiency and customer satisfaction while reducing 
          operational costs.
        </p>
        <h4>Energy Analytics & Optimization</h4>
        <p>
          AI-powered energy analytics help utilities and consumers optimize energy usage, 
          predict demand patterns, and identify efficiency opportunities. Our solutions 
          provide actionable insights for energy conservation and cost reduction across 
          residential, commercial, and industrial sectors.
        </p>
      </>
    )
  },
  {
    title: "Aerospace & Defense",
    src: "/Industry Card images/Aerospace and Defense.webp",
    description: "Advanced Aerospace Technology",
    content: (
      <>
        <h4>Flight Management Systems</h4>
        <p>
          Sophisticated flight management and navigation systems ensure safe and efficient 
          air travel. Our solutions include real-time weather monitoring, route optimization, 
          and automated flight planning. We support both commercial aviation and defense 
          applications with mission-critical reliability.
        </p>
        <h4>Defense Technology Solutions</h4>
        <p>
          Secure communication systems, surveillance platforms, and command and control 
          solutions support defense operations worldwide. Our technology meets the highest 
          security standards and provides real-time situational awareness for military 
          and defense applications.
        </p>
        <h4>Satellite & Space Technology</h4>
        <p>
          Ground station management systems, satellite communication networks, and space 
          mission planning tools support the growing space industry. Our solutions enable 
          reliable communication, data transmission, and mission control for satellite 
          operations and space exploration.
        </p>
        <h4>Aerospace Manufacturing</h4>
        <p>
          Advanced manufacturing execution systems, quality control platforms, and supply 
          chain management solutions optimize aerospace production processes. Our technology 
          ensures precision manufacturing, regulatory compliance, and traceability throughout 
          the aerospace supply chain.
        </p>
      </>
    )
  },
  {
    title: "Retail & E-Commerce",
    src: "/Industry Card images/Retail and Ecommerce.webp",
    description: "Digital Commerce Solutions",
    content: (
      <>
        <h4>Omnichannel Commerce</h4>
        <p>
          Seamless integration across online and offline channels creates unified customer 
          experiences. Our platforms enable inventory synchronization, personalized 
          recommendations, and consistent branding across all touchpoints. From mobile apps 
          to in-store kiosks, we deliver comprehensive commerce solutions.
        </p>
        <h4>AI-Powered Personalization</h4>
        <p>
          Machine learning algorithms analyze customer behavior to deliver personalized 
          product recommendations, dynamic pricing, and targeted marketing campaigns. Our 
          AI solutions increase conversion rates, customer satisfaction, and revenue growth 
          for retail businesses.
        </p>
        <h4>Supply Chain Optimization</h4>
        <p>
          Advanced supply chain management systems optimize inventory, reduce costs, and 
          improve delivery times. Our solutions include demand forecasting, automated 
          replenishment, and real-time tracking across the entire supply chain from 
          manufacturer to customer.
        </p>
        <h4>Customer Experience Innovation</h4>
        <p>
          Virtual try-on technology, augmented reality shopping experiences, and voice 
          commerce solutions enhance customer engagement. Our innovative platforms create 
          immersive shopping experiences that drive sales and build brand loyalty in the 
          competitive retail landscape.
        </p>
      </>
    )
  },
  {
    title: "Manufacturing & Automotive",
    src: "/Industry Card images/Manufacturing and Automotive.webp",
    description: "Industry 4.0 Manufacturing Solutions",
    content: (
      <>
        <h4>Smart Manufacturing</h4>
        <p>
          Industry 4.0 solutions transform traditional manufacturing with IoT sensors, 
          real-time monitoring, and predictive maintenance. Our platforms optimize production 
          processes, reduce downtime, and improve quality control through advanced analytics 
          and automation technologies.
        </p>
        <h4>Automotive Innovation</h4>
        <p>
          Connected vehicle platforms, autonomous driving systems, and electric vehicle 
          management solutions drive the future of automotive technology. We support 
          automakers with advanced software systems for vehicle connectivity, safety, 
          and performance optimization.
        </p>
        <h4>Quality Management Systems</h4>
        <p>
          Comprehensive quality control platforms ensure product excellence throughout 
          the manufacturing process. Our solutions include automated inspection systems, 
          defect detection algorithms, and quality analytics that help manufacturers 
          maintain high standards and reduce waste.
        </p>
        <h4>Supply Chain Integration</h4>
        <p>
          End-to-end supply chain visibility and optimization solutions connect manufacturers 
          with suppliers and customers. Our platforms enable real-time tracking, demand 
          planning, and collaborative forecasting to improve efficiency and reduce costs 
          across the manufacturing ecosystem.
        </p>
      </>
    )
  },
  {
    title: "Logistics & Transportation",
    src: "/Industry Card images/Logotstic and Transportation.webp",
    description: "Intelligent Transportation Systems",
    content: (
      <>
        <h4>Fleet Management Solutions</h4>
        <p>
          Advanced fleet management systems optimize routes, monitor vehicle performance, 
          and ensure driver safety. Our IoT-enabled platforms provide real-time tracking, 
          fuel efficiency monitoring, and predictive maintenance to reduce costs and 
          improve operational efficiency.
        </p>
        <h4>Supply Chain Visibility</h4>
        <p>
          End-to-end supply chain tracking and optimization solutions provide complete 
          visibility from origin to destination. Our platforms integrate with various 
          transportation modes and enable real-time updates, exception management, and 
          performance analytics.
        </p>
        <h4>Last-Mile Delivery Optimization</h4>
        <p>
          AI-powered delivery optimization algorithms reduce delivery times and costs 
          while improving customer satisfaction. Our solutions include dynamic routing, 
          delivery scheduling, and customer communication tools that streamline the 
          final stage of the supply chain.
        </p>
        <h4>Transportation Analytics</h4>
        <p>
          Data-driven insights help transportation companies optimize operations, predict 
          demand, and improve service quality. Our analytics platforms provide comprehensive 
          reporting on performance metrics, cost analysis, and customer satisfaction to 
          drive continuous improvement.
        </p>
      </>
    )
  }
];

export default function IndustryExpandableSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full glass-button px-4 py-2 text-sm font-medium text-white/80 mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse-glow"></span>
            Industries We Serve
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Empowering{' '}
            <span className="font-normal italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            From healthcare to finance, we deliver specialized solutions tailored to your industry's unique challenges and opportunities
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ExpandableCard
                title={industry.title}
                src={industry.src}
                description={industry.description}
                className="h-full"
                classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium [&_h4]:text-xl [&_h4]:mb-3 [&_p]:text-zinc-600 dark:[&_p]:text-zinc-300 [&_p]:leading-relaxed [&_p]:mb-4"
              >
                {industry.content}
              </ExpandableCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
