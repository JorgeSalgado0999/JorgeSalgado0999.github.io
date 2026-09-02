"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useActiveSection } from "@/lib/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "hobbies",
  "contact",
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection([...SECTION_IDS]);

  const links: { id: (typeof SECTION_IDS)[number]; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "hobbies", label: t.nav.hobbies },
    { id: "contact", label: t.nav.contact },
  ];

  const handleNavigate = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavigate("home")}
          className="text-lg font-bold tracking-tight text-foreground"
        >
          JS<span className="text-accent">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavigate(link.id)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavigate(link.id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    activeId === link.id
                      ? "bg-surface-muted text-accent"
                      : "text-muted-foreground hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}
