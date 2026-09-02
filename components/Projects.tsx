"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t.projects.title}
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface p-6"
            >
              <Sparkles className="text-accent" size={28} />
              <span className="rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t.projects.comingSoonBadge}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground sm:text-base">
          {t.projects.description}
        </p>
      </div>
    </section>
  );
}
