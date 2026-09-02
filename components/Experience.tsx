"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { experience } from "@/lib/data/skills";

export function Experience() {
  const { t, locale } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <section id="experience" className="bg-surface py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t.experience.title}
        </motion.h2>

        <ol className="mt-12 space-y-8 border-l border-border pl-6 sm:pl-8">
          {experience.map((job, i) => {
            const isOpen = expanded.has(i);
            const panelId = `experience-panel-${i}`;
            return (
              <motion.li
                key={`${job.company}-${job.period.en}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent sm:-left-[calc(2rem+5px)]" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role[locale]}
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    {job.period[locale]}
                  </span>
                </div>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <Briefcase size={14} />
                  {job.company}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {job.description[locale]}
                </p>
                {job.note && (
                  <p className="mt-1 text-xs italic text-muted-foreground/80">
                    {job.note[locale]}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-label={`${isOpen ? t.experience.showLess : t.experience.showMore} — ${job.role[locale]}, ${job.company}`}
                  className="mt-2 flex items-center gap-1 py-3 text-sm font-semibold text-accent hover:underline underline-offset-2"
                >
                  {isOpen
                    ? t.experience.showLess
                    : `${t.experience.showMore} (+${job.highlights[locale].length})`}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-3 space-y-2 pb-1">
                        {job.highlights[locale].map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
