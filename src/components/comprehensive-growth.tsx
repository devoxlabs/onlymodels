"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, MessageSquare, ShieldAlert } from "lucide-react";

const growthPoints = [
    {
        title: "Creator Consulting",
        icon: BrainCircuit,
        content: [
            "We fast-track your growth by analyzing what’s pushing you forward and what’s quietly holding you back.",
            "We identify the gaps, the missed opportunities, and the areas where you’re leaving money on the table.",
            "Then we build a personalized roadmap based on you — not some recycled plan pulled from another creator.",
            "From content direction to platform strategy to how your material should be used across the ecosystem, everything is tailored.",
            "And once the plan is built, our team handles the execution so you’re not stuck figuring it out alone.",
            "Excellence isn’t guesswork.",
            "It’s precision — and we make sure your path is straight, fast, and intentional.",
        ],
    },
    {
        title: "Strategic Growth",
        icon: LineChart,
        content: [
            "At OnlyModels, we don’t post everywhere blindly.",
            "We start by building traction on the platforms that matter most: Instagram and Reddit.",
            "Once those two are strong, we use their traffic to expand into X and TikTok.",
            "Every post, story, caption, and campaign is built to attract high-value subscribers who stay and spend.",
            "Nothing is generic. Everything matches your persona and your brand.",
            "Your growth isn’t random.",
            "It’s engineered",
        ],
    },
    {
        title: "In-House Chatters",
        icon: MessageSquare,
        content: [
            "Our U.S.-based chat team is trained to match your exact tone, personality, and style so every message sounds like you.",
            "They’re supervised daily by an expert who reviews their data, improves their performance, and teaches them how to build real connection with your fans.",
            "Unlike other agencies that spam cheap PPVs and make you look like a robot begging for money, we focus on genuine relationship-building.",
            "Our approach creates a true GFE-style experience, where fans feel close to you, stay loyal, and keep coming back — without you ever touching the inbox.",
            "Authentic conversations.",
            "We track conversation performance every single day: response speed, message structure, emotional impact, conversion patterns, and retention signals. This lets us adjust instantly and keep the chat quality consistent, no matter the hour or the fan.",
        ],
    },
    {
        title: "Boundary Control & Compliance",
        icon: ShieldAlert,
        content: [
            "All messaging follows strict boundary control and compliance rules. Your limits, your brand image, and your comfort level are protected at all times. Our chatters know exactly what can be said, what must never be said, and how to maintain a safe, respectful environment while still keeping fans deeply engaged.",
        ],
    },
];

export function ComprehensiveGrowth() {
    return (
        <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-6xl space-y-32">
                {growthPoints.map((point, index) => {
                    const Icon = point.icon;
                    return (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`flex flex-col gap-12 lg:items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                                }`}
                        >
                            {/* Icon / Visual Side */}
                            <div className="flex-1 flex justify-center lg:justify-start">
                                <div className="relative group">
                                    <div className="absolute -inset-4 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex h-32 w-32 items-center justify-center rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        <Icon className="h-16 w-16 text-accent drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]" />

                                        {/* Animated Lines/Particles */}
                                        <motion.div
                                            className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-accent"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        />
                                        <motion.div
                                            className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-accent-secondary"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-[2] space-y-8 text-center lg:text-left">
                                <div className="flex flex-col items-center space-y-4 lg:items-start">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100px" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-1 bg-gradient-to-r from-accent to-transparent rounded-full"
                                    />
                                    <h3 className="text-3xl font-bold leading-tight text-accent sm:text-4xl">
                                        {point.title}
                                    </h3>
                                </div>
                                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                    {point.content.map((paragraph, i) => (
                                        <motion.p
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
