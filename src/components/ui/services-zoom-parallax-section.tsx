"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const servicesData = [
	{
		src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'AI Services',
		title: 'AI Services',
		description: 'Intelligent automation, predictive analytics, and AI copilots tailored to your operations.',
		href: '/services/ai-services',
	},
	{
		src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Cloud Services',
		title: 'Cloud Services',
		description: 'Secure, scalable architectures across Azure, AWS, and GCP with DevOps automation.',
		href: '/services/cloud-services',
	},
	{
		src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Data Analytics',
		title: 'Data Analytics',
		description: 'Unified data platforms, BI dashboards, and real-time insights for decision makers.',
		href: '/services/data-analytics',
	},
	{
		src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Cyber Security',
		title: 'Cyber Security',
		description: 'Threat detection, governance, and incident response with 24/7 monitoring.',
		href: '/services/cyber-security',
	},
	{
		src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Mobile App Development',
		title: 'Mobile App Development',
		description: 'Native and cross-platform apps with secure APIs and world-class UX.',
		href: '/services/mobile-app-development',
	},
	{
		src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Web App Development',
		title: 'Web App Development',
		description: 'High-performance web platforms built with modern frameworks and composable architecture.',
		href: '/services/web-app-development',
	},
	{
		src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Microsoft Managed Services',
		title: 'Microsoft Managed Services',
		description: 'Proactive administration of Microsoft 365, Azure tenants, and enterprise collaboration stacks.',
		href: '/services/microsoft-managed-services',
	},
	{
		src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Automation Testing',
		title: 'Automation Testing',
		description: 'CI/CD-ready test automation suites ensuring resilience and faster releases.',
		href: '/services/automation-testing',
	},
];

export function ServicesZoomParallaxSection() {
	return (
		<section className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-20 sm:py-24">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-14"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a]">
						Our Services
					</h2>
					<p className="text-lg text-[#666666] max-w-2xl mx-auto">
						A comprehensive suite of offerings to accelerate innovation and deliver measurable outcomes.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{servicesData.map((service, index) => (
						<motion.article
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
							className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-shadow duration-500"
						>
							<div className="relative h-64 sm:h-72">
								<Image
									src={service.src}
									alt={service.alt}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
									priority={index < 2}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
								<div className="absolute inset-x-0 bottom-0 px-6 pb-5 text-white">
									<p className="text-sm uppercase tracking-[0.3em] text-white/70">0{index + 1}</p>
									<h3 className="mt-2 text-2xl font-semibold leading-tight">
										{service.title}
									</h3>
								</div>
							</div>
							<div className="space-y-4 px-6 py-6">
								<p className="text-sm text-[#4b5563] leading-relaxed">
									{service.description}
								</p>
								{service.href && (
									<Link
										href={service.href}
										className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold hover:text-[#4338ca] transition-colors"
									>
										<span>Explore Service</span>
										<ArrowRight className="w-4 h-4" />
									</Link>
								)}
							</div>
						</motion.article>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mt-16"
				>
					<p className="text-lg text-[#4b5563] max-w-2xl mx-auto mb-6">
						Need a tailored engagement plan? Our team can assemble a dedicated pod across these capabilities within days.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] text-white font-semibold hover:bg-[#111827] transition-colors"
					>
						<span>Start a Conversation</span>
						<ArrowRight className="w-5 h-5" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

