"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";

const services = [
    {
        title: "Authentic U.S. Chatters Who Speak Like You",
        icon: MessageCircle,
        content: [
            "Get round-the-clock coverage from highly trained U.S.-based chatters who match your personality, tone, and style perfectly. Every reply feels like you, not a bot.",
            "Your chatters are supervised daily by an expert who tracks their performance, analyzes their data, and gives them guidance to improve connection, intimacy, and relationship-building with your fans. Most agencies don’t even know how to chat properly. They just spam cheap PPV messages and instantly make you look like someone who’s only there for money.",
            "At OnlyModels, we focus on real connection.",
            "We build a GFE-style experience where clients get emotionally invested in you, stay loyal longer, and spend more because they feel a genuine bond. No fake pressure, no desperate spamming, no “robot energy.”",
            "We create conversations that make fans fall for you, not run away.",
        ],
    },
    {
        title: "Anti-Leak Protection & Content Security",
        icon: ShieldCheck,
        content: [
            "At OnlyModels, your content is guarded with a full protection system built to keep your photos and videos OFF every platform you never approved.",
            "If something gets reposted anywhere — even on places like Reddit, where removals are notoriously difficult — we take action instantly.",
            "We use a mix of internal monitoring tools and direct contacts to wipe stolen content fast. When a leak appears, our team flags it, requests removal through priority channels, and blocks the account responsible through our software within a few hours.",
            "No waiting days, no “we’ll look into it”, no chaos.",
            "Your brand stays protected.",
            "Your content stays yours.",
            "And leaks don’t survive long enough to hurt your image.",
        ],
    },
    {
        title: "Tailored Marketing That Actually Works",
        icon: TrendingUp,
        content: [
            "At OnlyModels, we don’t blast your content on every platform hoping something magically takes off.",
            "Most agencies rely on generalists who post everywhere at once, without understanding how each platform truly works. The result is the same every time: nothing is optimized, nothing grows properly, and your audience stays flat.",
            "We do it differently.",
            "If we choose to work with you, it’s because we know exactly which platforms fit your personality and your niche. We’re specialists, not random “post everywhere” assistants.",
            "We focus deeply on one platform first and build real traction there.",
            "Once that ecosystem is strong, we use the traffic from that platform to boost the next one — creating a chain reaction instead of scattered, useless visibility.",
            "TikTok, Instagram, Threads, YouTube, Twitch, Reddit, Twitter — we only use what makes sense for you, in the right order, at the right moment.",
            "That’s why our creators don’t just grow.",
            "They scale.",
        ],
    },
];

export function ServicesDetail() {
    return (
        <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.1),_transparent_50%)]" />
            <div className="mx-auto max-w-6xl space-y-24">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`flex flex-col gap-12 lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                                }`}
                        >
                            {/* Visual Side */}
                            <div className="flex-1">
                                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-1 shadow-2xl shadow-black/50 mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/20 opacity-50" />
                                    <div className="relative flex h-full w-full items-center justify-center rounded-[36px] bg-background/90 backdrop-blur-sm">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
                                        <Icon className="relative h-32 w-32 text-accent drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 space-y-8 text-center lg:text-left">
                                <div className="flex flex-col items-center space-y-4 lg:items-start">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                                        Core Pillar {index + 1}
                                    </div>
                                    <h3 className="text-3xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl">
                                        {service.title}
                                    </h3>
                                </div>
                                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                    {service.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
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
