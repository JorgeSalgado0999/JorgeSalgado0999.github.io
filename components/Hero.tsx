"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const [photoFailed, setPhotoFailed] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t.hero.greeting}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.hero.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
            {t.hero.role}
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
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
        </motion.div>

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
