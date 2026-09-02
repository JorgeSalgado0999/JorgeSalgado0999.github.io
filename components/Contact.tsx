"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GitHubIcon, LinkedInIcon } from "./icons/BrandIcons";

const EMAIL = "jorgesalgado_dev@outlook.com";
const GITHUB_URL = "https://github.com/JorgeSalgado0999";
const LINKEDIN_URL = "https://www.linkedin.com/in/jorge-salgado-aa208416b/";

export function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      label: t.contact.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: Mail,
    },
    {
      label: t.contact.linkedin,
      value: "jorge-salgado",
      href: LINKEDIN_URL,
      icon: LinkedInIcon,
    },
    {
      label: t.contact.github,
      value: "JorgeSalgado0999",
      href: GITHUB_URL,
      icon: GitHubIcon,
    },
  ];

  return (
    <section id="contact" className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t.contact.title}
        </motion.h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          {t.contact.description}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <link.icon className="text-accent" size={24} />
              <span className="text-sm font-semibold text-foreground">
                {link.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          <Mail size={16} />
          {t.contact.cta}
        </a>
      </div>
    </section>
  );
}
