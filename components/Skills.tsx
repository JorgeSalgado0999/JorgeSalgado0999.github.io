"use client";

import { motion } from "framer-motion";
import { Award, Languages as LanguagesIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { skillCategories } from "@/lib/data/skills";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t.skills.title}
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {t.skills.categories[category.key]}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-surface-muted px-3 py-1 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-surface p-6 lg:col-span-1"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {t.skills.softTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {t.skills.soft.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-2xl border border-border bg-surface p-6 lg:col-span-1"
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
              <LanguagesIcon size={16} />
              {t.skills.languagesTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.skills.languagesSpoken.map((item) => (
                <li key={item.lang} className="text-sm">
                  <span className="font-medium text-foreground">
                    {item.lang}
                  </span>
                  <span className="text-muted-foreground"> — {item.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-6 lg:col-span-1"
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
              <Award size={16} />
              {t.skills.certsTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {t.skills.certs.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
