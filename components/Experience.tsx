"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { experience } from "@/lib/data/skills";

export function Experience() {
  const { t, locale } = useLanguage();

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
          {experience.map((job, i) => (
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
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
