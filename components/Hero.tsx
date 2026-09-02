"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const LINE_EASE = [0.65, 0, 0.35, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const [photoFailed, setPhotoFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const lineVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { clipPath: "inset(0 0% 0 0)" },
  };
  const lineDuration = shouldReduceMotion ? 0 : 0.4;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <motion.div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <motion.h1
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={lineVariants}
            transition={{ duration: lineDuration, ease: LINE_EASE }}
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            <span className="text-muted-foreground">{"<"}</span>
            {t.hero.greeting}{" "}
            <span className="text-accent">{t.hero.name}</span>
            <span className="text-muted-foreground">{"!>"}</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={lineVariants}
            transition={{
              duration: lineDuration,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease: LINE_EASE,
            }}
            className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            <span className="text-muted-foreground/60">{"<"}</span>
            {t.hero.role}
            <span className="text-muted-foreground/60">{">"}</span>
            <span
              aria-hidden
              className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.15em] bg-accent align-middle"
              style={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      animationName: "hero-cursor-blink",
                      animationDuration: "0.9s",
                      animationTimingFunction: "steps(1)",
                      animationDelay: "0.75s",
                      animationIterationCount: 1,
                      animationFillMode: "forwards",
                    }
              }
            />
          </motion.p>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={16} className="text-accent" />
            {t.hero.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume/JorgeSalgado_CV__2026.pdf"
              download
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              <Download size={16} />
              {t.hero.ctaCv}
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              {t.hero.ctaContact}
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-accent/40 to-accent/5 p-2 sm:h-72 sm:w-72"
        >
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-4 border-surface bg-surface-muted shadow-xl">
            {photoFailed ? (
              <span className="text-5xl font-bold text-accent sm:text-6xl">
                JS
              </span>
            ) : (
              <Image
                src="/images/profile.jpg"
                alt={t.hero.name}
                fill
                sizes="288px"
                className="object-cover"
                priority
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.85 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border/60 pt-6 lg:col-span-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t.hero.credibilityLabel}
          </span>
          {t.hero.credibilityItems.map((item) => (
            <span
              key={item}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label={t.hero.scrollHint}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {t.hero.scrollHint}
        <ArrowDown size={16} className="text-accent" />
      </motion.button>
    </section>
  );
}
