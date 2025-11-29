"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Instagram } from "lucide-react";

export function HeroVisuals() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animations
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Different parallax depths for each element
    const mainCardX = useTransform(x, [-300, 300], [-15, 15]);
    const mainCardY = useTransform(y, [-300, 300], [-15, 15]);

    const tweetX = useTransform(x, [-300, 300], [-25, 25]);
    const tweetY = useTransform(y, [-300, 300], [-25, 25]);

    const messagesX = useTransform(x, [-300, 300], [-20, 20]);
    const messagesY = useTransform(y, [-300, 300], [-20, 20]);

    const statsX = useTransform(x, [-300, 300], [-20, 20]);
    const statsY = useTransform(y, [-300, 300], [-20, 20]);

    const notifX = useTransform(x, [-300, 300], [-30, 30]);
    const notifY = useTransform(y, [-300, 300], [-30, 30]);

    // New cards parallax
    const tiktokX = useTransform(x, [-300, 300], [-35, 35]);
    const tiktokY = useTransform(y, [-300, 300], [-35, 35]);

    const instaX = useTransform(x, [-300, 300], [-22, 22]);
    const instaY = useTransform(y, [-300, 300], [-22, 22]);

    const redditX = useTransform(x, [-300, 300], [-28, 28]);
    const redditY = useTransform(y, [-300, 300], [-28, 28]);


    const rotateXSpring = useSpring(useTransform(y, [-300, 300], [5, -5]), springConfig);
    const rotateYSpring = useSpring(useTransform(x, [-300, 300], [-5, 5]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hidden md:block relative h-[500px] w-full max-w-[600px] md:mx-auto xl:mx-0 origin-center scale-[0.65] sm:scale-75 md:h-[600px] md:scale-100"
            style={{ perspective: "1200px" }}
        >
            {/* Main Creator Image Card */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
                style={{
                    x: mainCardX,
                    y: mainCardY,
                    rotateX: rotateXSpring,
                    rotateY: rotateYSpring,
                }}
                initial={{ opacity: 0, scale: 0.6, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", type: "spring", bounce: 0.3 }}
            >
                <div
                    className="relative h-[280px] w-[200px] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-md md:h-[360px] md:w-[260px]"
                    style={{ transform: "rotateY(-8deg) rotateX(5deg)" }}
                >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/images/cute-model.jpeg"
                            alt="Creator"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Glow effect */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent" />
                </div>
            </motion.div>

            {/* X (Twitter) Widget - Top Right */}
            <motion.div
                style={{ x: tweetX, y: tweetY }}
                initial={{ opacity: 0, x: 100, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute right-4 top-8 md:right-8 md:top-12 will-change-transform"
            >
                <div
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-background/90 to-surface/80 px-4 py-3 shadow-xl backdrop-blur-md md:px-5 md:py-4"
                    style={{ transform: "rotateY(5deg) rotateX(-3deg)" }}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/20 md:h-12 md:w-12">
                        <svg className="h-5 w-5 fill-current text-white md:h-6 md:w-6" viewBox="0 0 24 24">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted">Post Impressions</p>
                        <p className="text-lg font-bold text-foreground md:text-xl">58.5M</p>
                        <p className="text-xs text-accent">+102% growth</p>
                    </div>
                </div>
            </motion.div>

            {/* TikTok Widget - Left Middle */}
            <motion.div
                style={{ x: tiktokX, y: tiktokY }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute left-4 top-[60%] -translate-y-1/2 md:left-8 will-change-transform"
            >
                <div
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-background/90 to-surface/80 px-4 py-3 shadow-xl backdrop-blur-md md:px-5 md:py-4"
                    style={{ transform: "rotateY(-5deg) rotateX(3deg)" }}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/20 md:h-12 md:w-12">
                        <svg className="h-5 w-5 fill-current text-white md:h-6 md:w-6" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted">TikTok Views</p>
                        <p className="text-lg font-bold text-foreground md:text-xl">2.4M</p>
                        <p className="text-xs text-accent">+45% growth</p>
                    </div>
                </div>
            </motion.div>

            {/* Instagram Widget - Bottom Left */}
            <motion.div
                style={{ x: instaX, y: instaY }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute bottom-12 left-4 md:bottom-16 md:left-8 will-change-transform"
            >
                <div
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-background/90 to-surface/80 px-4 py-3 shadow-xl backdrop-blur-md md:px-5 md:py-4"
                    style={{ transform: "rotateY(-8deg) rotateX(-5deg)" }}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 md:h-12 md:w-12">
                        <Instagram className="h-5 w-5 text-pink-500 md:h-6 md:w-6" />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted">Followers</p>
                        <p className="text-lg font-bold text-foreground md:text-xl">892K</p>
                        <p className="text-xs text-accent">+24% growth</p>
                    </div>
                </div>
            </motion.div>

            {/* Reddit Widget - Left Upper Middle */}
            <motion.div
                style={{ x: redditX, y: redditY }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute left-4 top-[32%] md:left-8 md:top-[34%] will-change-transform"
            >
                <div
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-background/90 to-surface/80 px-4 py-3 shadow-xl backdrop-blur-md md:px-5 md:py-4"
                    style={{ transform: "rotateY(-2deg) rotateX(4deg)" }}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 md:h-12 md:w-12">
                        <svg className="h-5 w-5 fill-current text-orange-500 md:h-6 md:w-6" viewBox="0 0 24 24">
                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted">Reddit Karma</p>
                        <p className="text-lg font-bold text-foreground md:text-xl">124.5K</p>
                        <p className="text-xs text-accent">+18% growth</p>
                    </div>
                </div>
            </motion.div>

            {/* Messages Widget with Graph - Right Middle */}
            <motion.div
                style={{ x: messagesX, y: messagesY }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 md:right-8 will-change-transform"
            >
                <div
                    className="rounded-2xl border border-white/20 bg-gradient-to-br from-background/90 to-surface/80 px-4 py-3 shadow-xl backdrop-blur-md md:px-5 md:py-4"
                    style={{ transform: "rotateY(5deg) rotateX(-3deg)" }}
                >
                    <div className="mb-3">
                        <p className="text-xs uppercase tracking-wider text-muted">Messages</p>
                        <p className="text-lg font-bold text-foreground md:text-xl">$87,637.20</p>
                        <p className="text-xs text-accent">+308% growth</p>
                    </div>
                    {/* Growth Graph */}
                    <svg width="120" height="40" className="mt-2">
                        <defs>
                            <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgb(255, 87, 182)" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="rgb(255, 87, 182)" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                        {/* Area under the curve */}
                        <path
                            d="M 0 40 L 0 28 Q 30 25, 60 16 T 120 8 L 120 40 Z"
                            fill="url(#graphGradient)"
                        />
                        {/* Line */}
                        <path
                            d="M 0 28 Q 30 25, 60 16 T 120 8"
                            stroke="rgb(255, 87, 182)"
                            strokeWidth="2"
                            fill="none"
                        />
                        {/* Dots */}
                        <circle cx="0" cy="28" r="2" fill="rgb(255, 87, 182)" />
                        <circle cx="60" cy="16" r="2" fill="rgb(255, 87, 182)" />
                        <circle cx="120" cy="8" r="2.5" fill="rgb(255, 87, 182)" />
                    </svg>
                </div>
            </motion.div>

            {/* Stats Widget - Top Left */}
            <motion.div
                style={{ x: statsX, y: statsY }}
                initial={{ opacity: 0, x: -100, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute left-4 top-12 md:left-8 md:top-16 will-change-transform"
            >
                <div
                    className="rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/20 to-accent-secondary/10 px-4 py-3 shadow-xl backdrop-blur-md md:px-5 md:py-4"
                    style={{ transform: "rotateY(-5deg) rotateX(3deg)" }}
                >
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                        <p className="text-xs uppercase tracking-wider text-accent-secondary">★ You are in the top</p>
                    </div>
                    <p className="mt-1 text-2xl font-bold text-foreground md:text-3xl">0.03%</p>
                    <p className="text-xs text-muted">of all creators</p>
                </div>
            </motion.div>

            {/* Payout Notification - Bottom Right */}
            <motion.div
                style={{ x: notifX, y: notifY }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute bottom-12 right-4 md:bottom-16 md:right-8 will-change-transform"
            >
                <div
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-background/95 to-panel/90 px-4 py-3 shadow-xl backdrop-blur-md md:px-5 md:py-4"
                    style={{ transform: "rotateY(8deg) rotateX(-5deg)" }}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 md:h-12 md:w-12">
                        <CheckCircle2 className="h-5 w-5 text-accent md:h-6 md:w-6" />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-accent-secondary">Payout Cleared</p>
                        <p className="text-lg font-bold text-foreground md:text-xl">$13,400.53</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
