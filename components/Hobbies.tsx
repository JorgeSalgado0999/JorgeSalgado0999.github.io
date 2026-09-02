"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Clapperboard,
  Code2,
  Dumbbell,
  Gamepad2,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { WaveDivider } from "./WaveDivider";

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Headphones,
  Code2,
  Gamepad2,
  Clapperboard,
  Dumbbell,
};

export function Hobbies() {
  const { t } = useLanguage();

  return (
    <section id="hobbies" className="relative bg-surface">
      <WaveDivider className="text-background" />
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t.hobbies.title}
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {t.hobbies.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Code2;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-background p-5 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
