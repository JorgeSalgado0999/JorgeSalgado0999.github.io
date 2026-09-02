---
name: Jorge Salgado Portfolio
description: Bilingual (ES/EN) personal portfolio for a FullStack Developer & Team Leader
colors:
  background: "#f8fafc"
  foreground: "#0f172a"
  surface: "#ffffff"
  surface-muted: "#eef2f6"
  border: "#e2e8f0"
  accent: "#0e7490"
  accent-foreground: "#ffffff"
  muted-foreground: "#475569"
typography:
  display:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  pill: "9999px"
  card: "16px"
  compact: "8px"
spacing:
  section-y: "80px"
  nav-height: "64px"
  card-p: "20px"
  gap: "16px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  chip:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  chip-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-p}"
---

# Design System: Jorge Salgado Portfolio

## Overview

**Creative North Star: "Night Harbor"**

The system reads as a calm, deep-navy harbor at night with a single cyan beacon cutting through it. Nearly every surface sits in a narrow band of navy-to-slate neutrals; the one saturated color in the entire palette — Beacon Cyan — is spent deliberately, on the handful of moments that should catch the eye: the active nav link, a primary button, an icon, a category label. Waves (literal inline SVG dividers) recur between sections, a direct nod to the harbor metaphor and to Jorge's own "Team Leader" positioning: someone who guides, doesn't just build.

The system is confident and precise rather than decorative. Structure comes from 1px borders and background-tone contrast, not shadows — depth is earned, not applied by default. Motion is purposeful and restrained: sections fade and lift into place once as the visitor scrolls past them, never on a loop, and the hero's ambient blob drift is the only continuous animation in the system.

Light and dark are equally first-class — the palette was designed dark-first (it's most itself at night) but every token ships as a matched pair, and nothing about the system assumes one mode is "default."

**Key Characteristics:**
- One accent color (Beacon Cyan), spent rarely, never as a fill for large areas.
- Flat by default; exactly one deliberate shadow in the whole system (the hero portrait frame).
- Two radius families only: fully-rounded pills for anything interactive, 16px for content cards.
- A single typeface (Inter) carries display, body, and label roles — hierarchy comes from size/weight, not a second family.
- Wave dividers are the system's one recurring decorative signature.

## Colors

Built from two adjacent Tailwind scales — slate for every neutral, cyan for the single accent — so light and dark are each other's mirror image, not independently art-directed.

### Primary
- **Beacon Cyan** (`accent`, light `#0e7490` / dark `#22d3ee`): the only saturated color in the system. Active nav link, primary button fill, focus/hover borders, icon accents, section-category labels (e.g. "LANGUAGES", "FRONTEND" in Skills). Light-mode value is Tailwind `cyan-700` rather than `cyan-600` specifically so it clears WCAG AA (4.5:1) as text color, not just as a fill — see The Legible Beacon Rule below.
- **On-Beacon** (`accent-foreground`, light `#ffffff` / dark `#0b1220`): text/icon color placed on top of a solid Beacon Cyan fill (primary button label, avatar-frame contrast).

### Neutral
- **Pale Mist / Deep Harbor** (`background`, light `#f8fafc` / dark `#0b1220`): page background; the "water" one tone below every surface.
- **Ink Navy / Moonlit Grey** (`foreground`, light `#0f172a` / dark `#e2e8f0`): primary text color.
- **Paper White / Harbor Panel** (`surface`, light `#ffffff` / dark `#101a2c`): raised content surfaces — cards, nav bar, alternating section bands.
- **Fog Bank / Deep Panel** (`surface-muted`, light `#eef2f6` / dark `#16223a`): secondary fill, one step quieter than `surface` — chip backgrounds, placeholder tiles.
- **Quiet Line / Dim Line** (`border`, light `#e2e8f0` / dark `#1e293b`): the only line-work in the system; every card, input, and toggle edge uses this and nothing else.
- **Harbor Mist Text / Faint Signal Text** (`muted-foreground`, light `#475569` / dark `#94a3b8`): secondary/supporting text — body copy, captions, timestamps.

### Named Rules
**The One Voice Rule.** Beacon Cyan appears on nav highlights, one button per view, icons, and labels — never as a background fill larger than a chip. If a design needs "more color," reach for surface/surface-muted contrast, not more cyan.

**The Paired Palette Rule.** Every token above ships as a light/dark pair that swaps together via the `.dark` class. Never hand-pick just one half of a pair for a new component — if you need `surface` in dark mode, `border` and `foreground` must also resolve to their dark pair in the same view.

**The Legible Beacon Rule.** `accent` is used as real text color (nav active state, category labels, eyebrows), not just as a fill — so it must clear WCAG AA's 4.5:1 text contrast against `background`/`surface` in both themes, not just the 3:1 non-text threshold. This is why light-mode `accent` is `cyan-700` (`#0e7490`, ~5:1) rather than the brighter `cyan-600` (`#0891b2`, ~3.5:1) — a brighter accent is a regression, not a refresh, unless it's re-verified against this ratio.

## Typography

**Body Font:** Inter (with Arial, Helvetica, sans-serif fallback)

**Character:** One typeface for the entire system. Inter's low-contrast, slightly geometric letterforms read as engineering-precise at body sizes and confidently plain at display size — hierarchy is built entirely from size, weight, and letter-spacing, never a second family.

### Hierarchy
- **Display** (800, `clamp(2.25rem, 5vw, 3.75rem)` / 36–60px, tracking `-0.02em`): the hero name only. One instance per page.
- **Headline** (700, `clamp(1.875rem, 3vw, 2.25rem)` / 30–36px, tracking `-0.01em`): section titles (About, Skills, Experience, Projects, Hobbies, Contact) — always centered, one per section.
- **Title** (600, 18px): card-level headings — an experience role, a card's primary line.
- **Body** (400, 16px, line-height 1.7): paragraph copy; About's paragraphs and card descriptions cap around 65–75ch for readability.
- **Label** (600, 14px, tracking `0.05em`, uppercase in practice): eyebrow text ("HI, I'M"), skill-category headers, "coming soon" badges — always paired with Beacon Cyan or muted-foreground, never plain foreground.

### Named Rules
**The Single Voice Rule.** Inter carries every role. A second typeface is never introduced for "personality" — personality comes from color and motion instead.

## Layout

Single-page, anchor-section layout (Home → About → Skills → Experience → Projects → Hobbies → Contact), navigated by a sticky nav with smooth scroll and active-section highlighting.

**The Alternating Tide Rule.** Consecutive sections alternate between `background` and `surface` tone (Hero: background → About: surface → Skills: background → Experience: surface → Projects: background → Hobbies: surface → Contact: background → Footer: surface). This is the only "seam" between sections other than the wave dividers — there is never a hard border between two stacked sections.

Container widths scale to content density, not a single fixed grid: `max-w-3xl` for prose-heavy sections (About, Contact copy), `max-w-4xl` (Projects), `max-w-5xl` (Skills), `max-w-6xl` (Nav, Footer, Hero). Vertical rhythm is a consistent 80px (`py-20`) top/bottom per section. Nav is 64px tall, sticky, with a blurred translucent background (`background/80` + backdrop-blur) so content is visible sliding under it.

Responsive behavior is mobile-first: the nav collapses to a hamburger + slide-down panel below `md` (768px); grids step down from 3-column → 2-column → 1-column (Skills cards, Hobbies tiles) or from a 2-column hero (photo beside text) to a single stacked column below `lg` (1024px).

## Elevation & Depth

Flat by default. Depth comes from a 1px `border` and from stepping between `background` → `surface` → `surface-muted` tones, not from shadows.

**The One Shadow Rule.** Exactly one shadow exists in the system: a soft `shadow-xl` on the hero's circular portrait frame. It exists to make the one literal photograph on the page read as a lifted, physical object rather than a flat panel — it is not a pattern to extend to cards, buttons, or anything else.

## Shapes

**The Pill-or-Panel Rule.** Every interactive or atomic element — buttons, the theme toggle, the language toggle, chips, badges, the hero portrait frame — is fully rounded (`9999px`/pill or circle). Every content container — skill cards, hobby tiles, contact cards, experience-timeline text, project-stub tiles — uses one consistent 16px radius. Mobile nav list rows are the one exception, at a smaller 8px radius, since they're list rows rather than free-floating cards. No other radius value is used anywhere.

Borders are always 1px solid `border`, with one meaningful variant: the Projects "coming soon" tiles use a **dashed** border specifically to signal "not real content yet" — the only dashed border in the system, reserved for placeholder/stub states.

## Components

### Buttons
- **Shape:** fully rounded (pill, 9999px).
- **Primary:** `accent` background, `accent-foreground` text, `font-semibold`, `10px 20px`–ish padding (`px-5 py-2.5` / `px-6 py-3` depending on context); scales up slightly on hover (`hover:scale-105`) rather than changing color.
- **Secondary / Ghost:** `surface` background, 1px `border`, `foreground` text; hover swaps both border and text to `accent` (no fill change).

### Chips (skill tags)
- **Style:** `surface-muted` background, `foreground` text, pill-shaped, small padding (`px-3 py-1`, `text-sm`).
- **State:** on hover, the chip *inverts* to a solid `accent` fill with `accent-foreground` text — the one place in the system where hover fully swaps a fill rather than nudging a border/text color.

### Cards / Containers
- **Corner Style:** 16px radius, consistently.
- **Background:** `surface`.
- **Shadow Strategy:** none (see Elevation & Depth) — separation comes from the 1px `border` against the section's `background`/`surface` tone.
- **Border:** 1px solid `border`; dashed specifically for placeholder/stub cards (Projects).
- **Internal Padding:** 20–24px (`p-5`/`p-6`).

### Navigation
- Sticky, 64px tall, translucent `background/80` with backdrop-blur, 1px bottom border.
- Links: `text-sm font-medium`; inactive = `muted-foreground`, hover = `foreground`, active section = `accent` (never underlined or boxed — color alone carries active state).
- Mobile: collapses to a hamburger icon-button; opening reveals a full-width dropdown panel (`surface`/`background`, same nav link styles stacked vertically, active item gets a `surface-muted` pill background in addition to the color change since there's no adjacent-link contrast to lean on at that width).

### Wave Divider (signature component)
An inline SVG wave (viewBox `1440×120`), colored via `currentColor` to always match the section it's transitioning *into*, placed at the top of an alternating-tone section. It is the system's one purely decorative element and the most direct visual expression of "Night Harbor" — reserve it for major tone transitions (About, Hobbies), not every section boundary, so it stays a signature rather than wallpaper.

## Do's and Don'ts

### Do:
- **Do** spend Beacon Cyan rarely and deliberately — one nav highlight, one primary action, an icon, a label. Its scarcity is what makes it register.
- **Do** alternate `background`/`surface` tone section-by-section (The Alternating Tide Rule) instead of adding a divider line between sections.
- **Do** use pill radius for anything a visitor clicks or toggles, and the 16px card radius for anything a visitor reads inside.
- **Do** keep all motion purposeful and respect `prefers-reduced-motion` (already wired globally): scroll-triggered fade/lift once per element, the hero blob's slow ambient drift, and hover micro-interactions (button scale, card lift, chip fill) are the complete motion vocabulary.

### Don't:
- **Don't** add a second shadow anywhere. The hero portrait's `shadow-xl` is a one-time, deliberate exception, not the start of a pattern.
- **Don't** introduce a second typeface. Inter carries display, headline, body, and label roles by size and weight alone.
- **Don't** use Beacon Cyan as a background fill for anything larger than a chip or button.
- **Don't** put a solid border between two stacked sections — the tone alternation and wave dividers are the only seams.
