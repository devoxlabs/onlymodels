"use client";

import { motion } from "framer-motion";

const creatorMetrics = [
    { label: "Subscriptions", value: "$52,341.88", accent: "bg-accent" },
    { label: "Messages", value: "$112,450.76", accent: "bg-accent-secondary" },
    { label: "Tips", value: "$178,990.12", accent: "bg-accent/60" },
];

const graphBars = [
    { x: 20, height: 35 },
    { x: 70, height: 55 },
    { x: 120, height: 75 },
    { x: 170, height: 95 },
    { x: 220, height: 110 },
];

export function TopCreatorsSection() {
    return (
        <section
            id="growth"
            data-section="growth"
            className="top-creators-section relative z-10 mx-auto w-full max-w-6xl px-5 py-32"
        >
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                {/* Left Column: Text Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut",
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="top-creators-copy space-y-8 text-center md:text-left"
                >
                    {/* Main Heading with Animation */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative">
                        {/* Glow effect */}
                        <div className="top-creators-heading-glow absolute inset-x-0 -top-4 blur-3xl opacity-20 md:-left-4 md:right-auto md:w-max">
                            <h2 className="top-creators-heading-text bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                                We create the top 0.1%
                            </h2>
                        </div>

                        {/* Main heading */}
                        <h2 className="top-creators-heading relative bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text pb-2 text-5xl font-bold leading-tight text-transparent md:text-7xl">
                            We create the top 0.1%
                        </h2>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-xl text-muted md:text-2xl">
                        At <span className="font-semibold text-accent">OnlyModels</span>, we build systems that give creators their time back.
                    </motion.p>

                    {/* Description */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-4 text-base text-muted/80 md:text-lg">
                        <p>
                            From automation to content optimization, everything we set up is designed so you spend less energy on routine work and more on what actually grows your brand.
                        </p>
                        <p>
                            Our focus is helping you operate smarter, scale faster, and reach a level where your only job is deciding <span className="italic text-foreground">what's next</span>.
                        </p>
                    </motion.div>

                    {/* Decorative accent line */}
                    <motion.div
                        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-1 w-32 rounded-full bg-gradient-to-r from-accent to-transparent mx-auto origin-center md:mx-0 md:origin-left"
                    />
                </motion.div>

                {/* Right Column: Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative flex items-center justify-center"
                >
                    <div className="top-creators-card relative w-full max-w-sm rounded-[32px] border border-white/10 bg-gradient-to-b from-background/80 via-surface/70 to-surface/40 p-6 shadow-2xl shadow-black/40 backdrop-blur-lg md:max-w-md lg:max-w-lg">
                        <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-tr from-accent/30 via-transparent to-accent-secondary/30 opacity-40 blur-2xl" />
                        <div className="relative space-y-6">
                            <div className="top-creators-card-graph rounded-2xl border border-white/10 bg-background/60 p-4">
                                <svg viewBox="0 0 260 140" className="h-36 w-full">
                                    <defs>
                                        <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(255,105,180,0.15)" />
                                            <stop offset="80%" stopColor="rgba(255,105,180,0.4)" />
                                            <stop offset="100%" stopColor="rgba(255,192,203,0.8)" />
                                        </linearGradient>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(255,105,180,0.6)" />
                                            <stop offset="100%" stopColor="rgba(255,192,203,0.95)" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        {graphBars.map((bar) => (
                                            <rect
                                                key={bar.x}
                                                x={bar.x}
                                                y={130 - bar.height}
                                                width={25}
                                                height={bar.height}
                                                rx={12}
                                                fill="url(#barGradient)"
                                                className="drop-shadow-[0_10px_25px_rgba(255,105,180,0.35)]"
                                            />
                                        ))}
                                    </g>
                                    <path
                                        d="M20 120 L 45 110 L 82 90 L 120 70 L 170 45 L 220 25"
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth={5}
                                        strokeLinecap="round"
                                        className="drop-shadow-[0_0_20px_rgba(255,192,203,0.4)]"
                                    />
                                    <circle cx="220" cy="25" r="6" fill="url(#lineGradient)" />
                                </svg>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="top-creators-card-label rounded-full border border-white/10 bg-accent/70 px-6 py-2 text-sm font-semibold text-background shadow-lg shadow-accent/30">
                                    From Aug 2025 to Oct 2025
                                </div>
                            </div>

                            <div className="space-y-4">
                                {creatorMetrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="top-creators-card-metric flex items-center justify-between rounded-2xl border border-white/5 bg-background/70 px-4 py-3 text-sm text-muted-foreground"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`h-3 w-3 rounded-full ${metric.accent}`} />
                                            <span className="font-medium text-foreground">{metric.label}</span>
                                        </div>
                                        <span className="text-base font-semibold text-foreground">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements behind image */}
                    <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[34px] border border-accent/20 bg-accent/5" />
                    <div className="absolute -top-6 -left-6 -z-10 h-full w-full rounded-[34px] border border-accent-secondary/20 bg-accent-secondary/5" />
                </motion.div>
            </div>
        </section>
    );
}
