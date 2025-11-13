'use client';

import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceImage {
	src: string;
	alt?: string;
	title?: string;
	description?: string;
	href?: string;
}

interface ZoomParallaxProps {
	/** Array of service images to be displayed in the parallax effect max 7 images */
	images: ServiceImage[];
	/** Show text overlay on images */
	showText?: boolean;
	/** Callback when scroll completes */
	onScrollComplete?: () => void;
}

export function ZoomParallax({ images, showText = true, onScrollComplete }: ZoomParallaxProps) {
	const container = useRef<HTMLDivElement>(null);
	const [showGrid, setShowGrid] = useState(false);
	const [scrollComplete, setScrollComplete] = useState(false);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		if (latest >= 0.95 && !scrollComplete) {
			setScrollComplete(true);
			setShowGrid(true);
			onScrollComplete?.();
		}
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	const gridOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
	const parallaxOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

	return (
		<div ref={container} className="relative w-full bg-white" style={{ height: '300vh' }}>
			<div className="sticky top-0 w-full h-screen overflow-hidden bg-white" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
				{images.map(({ src, alt, title, description, href }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ 
								scale, 
								opacity: parallaxOpacity,
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							className={`${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
						>
							<div className="relative h-[25vh] w-[25vw] group">
								<div className="relative h-full w-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
									<Image
										src={src || '/placeholder.svg'}
										alt={alt || `Service image ${index + 1}`}
										width={800}
										height={600}
										className="h-full w-full object-cover"
										priority={index === 0}
									/>
									{showText && title && (
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.2 }}
											className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent flex flex-col justify-end p-6"
										>
											<div className="space-y-2">
												<h3 className="text-[#1a1a1a] text-lg md:text-2xl font-bold leading-tight">{title}</h3>
												{description && (
													<p className="text-[#666666] text-sm leading-relaxed max-w-md">{description}</p>
												)}
												{href && (
													<Link
														href={href}
														className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#1a1a1a] text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm w-fit group/button"
													>
														<span>Learn More</span>
														<ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
													</Link>
												)}
											</div>
										</motion.div>
									)}
								</div>
							</div>
						</motion.div>
					);
				})}

				{/* Grid Showcase - Appears after scroll */}
				<motion.div
					style={{ opacity: gridOpacity }}
					className="absolute inset-0 bg-white pointer-events-auto z-20 overflow-y-auto"
				>
					<div className="min-h-full w-full flex items-center justify-center p-8 md:p-12 lg:p-16">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl w-full">
							{images.slice(0, 6).map(({ src, alt, title, description, href }, index) => (
								<motion.div
									key={`grid-${index}`}
									initial={{ opacity: 0, y: 20 }}
									animate={showGrid ? { opacity: 1, y: 0 } : { opacity: 0 }}
									transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
									className="relative aspect-[4/3] rounded-xl overflow-hidden group bg-white border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300"
								>
									<Image
										src={src || '/placeholder.svg'}
										alt={alt || `Service ${index + 1}`}
										width={600}
										height={450}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 flex flex-col justify-end">
										<div className="bg-gradient-to-t from-white via-white/70 via-white/30 to-transparent h-3/4 pb-6 md:pb-8 px-6 md:px-8 flex flex-col justify-end">
											<div className="space-y-3">
												{title && (
													<h3 className="text-[#1a1a1a] text-xl md:text-2xl font-bold leading-tight">{title}</h3>
												)}
												{description && (
													<p className="text-[#666666] text-sm md:text-base leading-relaxed line-clamp-2">{description}</p>
												)}
												{href && (
													<Link
														href={href}
														className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#1a1a1a] text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm w-fit group/btn shadow-lg"
														onClick={(e) => e.stopPropagation()}
													>
														<span>Explore Service</span>
														<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
													</Link>
												)}
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

