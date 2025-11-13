'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Build 10x Faster with Link Innovations</h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg">Highly customizable solutions for building modern websites and applications that drive real business results.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base">
                                        <Link href="/contact">
                                            <span className="text-nowrap">Start Building</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                        <Link href="/portfolio">
                                            <span className="text-nowrap">View Our Work</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <div
                                className="size-full object-cover opacity-50 dark:opacity-35 dark:lg:opacity-75 bg-cover bg-center"
                                style={{
                                    backgroundImage: "url('/images/services/li-service-web-development-dashboard-v1.webp')"
                                }}
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Powering the best teams</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    duration={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-7 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <Link href="/contact">
                                        <span>Contact</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="/portfolio">
                                        <span>Portfolio</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Link Innovations
            </span>
        </div>
    )
}
