"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="flex h-9 items-center gap-1 rounded-full border border-border bg-surface px-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      <span className={locale === "es" ? "text-accent" : ""}>ES</span>
      <span className="text-muted-foreground">/</span>
      <span className={locale === "en" ? "text-accent" : ""}>EN</span>
    </button>
  );
}
