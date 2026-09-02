"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { WaveDivider } from "./WaveDivider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-surface">
      <WaveDivider className="text-background" />
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t.about.title}
        </motion.h2>
        <div className="mt-8 space-y-5">
          {t.about.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
