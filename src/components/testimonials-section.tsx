"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  TrendingUp,
} from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  metric: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I was stuck at $5k/mo for months. OnlyModels optimized my chat scripts and now I'm hitting $25k consistently. The freedom is real.",
    name: "Sarah J.",
    role: "Top 0.5% Creator",
    metric: "+400% Revenue",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
  },
  {
    quote:
      "I was drowning in DMs. The team took over my chats 24/7, and my conversion rate doubled. I finally have time to actually create content.",
    name: "Chloe V.",
    role: "Rising Star",
    metric: "20hrs Saved/Wk",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
  },
  {
    quote:
      "Professional, transparent, and they actually care. My old agency treated me like a number. OnlyModels treats me like a partner.",
    name: "Jessica M.",
    role: "Top 1% Creator",
    metric: "98% Retention",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces",
  },
  {
    quote:
      "Started from zero. They guided me on branding, socials, and content. Hit top 5% in my first two months. Insane growth.",
    name: "Bella R.",
    role: "New Creator",
    metric: "0 to Top 5%",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces",
  },
  {
    quote:
      "The daily reports are a game changer. I know exactly what's working. My revenue per sub is up 40% since joining.",
    name: "Elena K.",
    role: "VIP Model",
    metric: "+40% LTV",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=faces",
  },
  {
    quote:
      "I thought I could do it all myself. I was wrong. Handing over the backend to OnlyModels was the best business decision I ever made.",
    name: "Daniella S.",
    role: "Top 0.1% Creator",
    metric: "$50k+ Month",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=faces",
  },
];

const ROTATION_PER_CARD = 360 / testimonials.length;

const credibilityHighlights = [
  {
    label: "Creator satisfaction",
    value: "4.9/5",
    icon: Star,
  },
  {
    label: "Average uplift",
    value: "+38%",
    icon: TrendingUp,
  },
  {
    label: "Creator retention",
    value: "98%",
    icon: CheckCircle2,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cardDepth, setCardDepth] = useState(520);
  const containerRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const moveBy = useCallback((step: number) => {
    setActiveIndex((prev) => (prev + step + testimonials.length) % testimonials.length);
    setRotation((prev) => prev - step * ROTATION_PER_CARD);
  }, []);

  const handlePrevious = useCallback(() => {
    moveBy(-1);
  }, [moveBy]);

  const handleNext = useCallback(() => {
    moveBy(1);
  }, [moveBy]);

  const handleDotClick = useCallback(
    (targetIndex: number) => {
      if (targetIndex === activeIndex) {
        return;
      }
      let delta = targetIndex - activeIndex;
      const half = testimonials.length / 2;
      if (delta > half) {
        delta -= testimonials.length;
      } else if (delta < -half) {
        delta += testimonials.length;
      }
      moveBy(delta);
    },
    [activeIndex, moveBy]
  );

  useEffect(() => {
    if (isHovering) {
      return;
    }

    const timer = setInterval(() => {
      moveBy(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [isHovering, moveBy]);

  useEffect(() => {
    const updateDepth = () => {
      if (typeof window === "undefined") return;
      setCardDepth(window.innerWidth < 768 ? 320 : 520);
    };
    updateDepth();
    window.addEventListener("resize", updateDepth);
    return () => window.removeEventListener("resize", updateDepth);
  }, []);

  // Touch swipe handlers for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    // Reset touch state
    setTouchStart(null);
    setTouchEnd(null);
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="testimonials-section relative isolate overflow-hidden py-24 sm:py-32"
      id="testimonials"
      data-section="testimonials"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center">
          <motion.span
            initial="hidden"
            animate={controls}
            variants={headlineVariants}
            className="testimonials-pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70"
          >
            <Star className="h-4 w-4 text-accent" />
            Verified Creator Receipts
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={headlineVariants}
            className="testimonials-heading text-balance text-4xl font-semibold leading-tight text-accent sm:text-5xl lg:text-6xl"
          >
            The trust that keeps elite creators scaling with us
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={headlineVariants}
            className="testimonials-subtext text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Every message, every upsell, every retention play is handled like a white-glove service.
            Here is what a handful of our partners say after handing us the backend.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delayChildren: 0.1, staggerChildren: 0.05 },
            },
          }}
          className="mx-auto mb-16 flex flex-wrap items-center justify-center gap-4"
        >
          {credibilityHighlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.label}
                className="testimonial-highlight group flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-muted-foreground backdrop-blur transition hover:border-white/30 hover:text-foreground md:w-auto md:py-2"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-1 items-center justify-between text-left md:flex-none md:flex-col md:items-start md:justify-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                    {highlight.label}
                  </p>
                  <p className="text-base font-semibold text-foreground">{highlight.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="testimonials-shell relative mx-auto max-w-4xl rounded-[3rem] border border-white/10 bg-gradient-to-b from-background/70 via-background/50 to-background/70 p-8 shadow-2xl shadow-black/30 backdrop-blur">
          <div
            ref={sliderRef}
            className="relative mx-auto max-w-3xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/40">
                Orbiting testimonials
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-foreground/80">
                <Quote className="h-4 w-4 text-accent" />
                Swipe or wait for the rotation
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-visible md:min-h-[420px]" style={{ perspective: "1600px" }}>
              <motion.div
                className="relative h-[320px] w-full md:h-[420px] will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: rotation } : {}}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { type: "spring", stiffness: 60, damping: 15, delay: 0.2 },
                  rotateY: { type: "spring", stiffness: 120, damping: 28 } // Keep existing rotation spring
                }}
              >
                {testimonials.map((testimonial, index) => {
                  const angle = ROTATION_PER_CARD * index;
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={testimonial.name}
                      className="testimonial-card absolute left-1/2 top-1/2 w-full max-w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur md:max-w-sm md:rounded-[28px] md:p-6"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${cardDepth}px)`,
                        opacity: isActive ? 1 : 0.25,
                        pointerEvents: isActive ? "auto" : "none",
                        filter: isActive ? "none" : "blur(1px)",
                        boxShadow: isActive
                          ? "0 20px 80px rgba(0,0,0,0.45)"
                          : "0 10px 30px rgba(0,0,0,0.25)",
                      }}
                    >
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-foreground/40">
                        <span>Creator story</span>
                        <span>{testimonial.metric}</span>
                      </div>
                      <p className="mt-4 text-base leading-relaxed text-foreground md:mt-6 md:text-lg">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-6 flex items-center justify-between gap-4 md:mt-8 md:gap-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-10 w-10 rounded-full border border-white/20 object-cover md:h-14 md:w-14"
                          />
                          <div>
                            <p className="text-sm font-semibold text-foreground md:text-base">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground md:text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-1.5 text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-accent md:rounded-2xl md:px-4 md:py-2 md:text-xs">
                          {isActive ? "Live scaling" : "Queued"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Show previous testimonial"
                  onClick={handlePrevious}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-foreground transition hover:bg-white/10 cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Show next testimonial"
                  onClick={handleNext}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-foreground transition hover:bg-white/10 cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={testimonial.name}
                      type="button"
                      aria-label={`Show testimonial from ${testimonial.name}`}
                      onClick={() => handleDotClick(index)}
                      className={`testimonial-dot group flex items-center gap-2 rounded-full border transition ${isActive
                        ? "border-accent bg-accent/15 text-foreground"
                        : "border-white/10 bg-white/5 text-foreground/60 hover:border-white/30 hover:text-foreground"
                        } px-2 py-2 md:px-4 md:py-1.5`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full transition ${isActive ? "scale-125 bg-accent" : "bg-white/30 group-hover:bg-white/50"
                          }`}
                      />
                      <span className="hidden text-xs font-semibold uppercase tracking-[0.25em] tracking-normal normal-case md:inline">{testimonial.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
