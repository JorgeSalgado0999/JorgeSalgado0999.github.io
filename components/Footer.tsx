"use client";

import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GitHubIcon, LinkedInIcon } from "./icons/BrandIcons";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Jorge Salgado. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/JorgeSalgado0999"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-salgado-aa208416b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:jorgesalgado_dev@outlook.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">{t.footer.madeWith}</p>
      </div>
    </footer>
  );
}
