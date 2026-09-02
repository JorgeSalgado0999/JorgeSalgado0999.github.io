# Portfolio Enhancements — Proposal

Produced by (1) auditing the shipped site against `ui-ux-pro-max`'s UX guideline database, and (2) analyzing two reference portfolios Jorge pointed to for inspiration. After a design-director pass weighing each idea against `PRODUCT.md`/`DESIGN.md` fit and actual value to the primary audience (a recruiter evaluating leadership + technical depth), the verdict below is final and approved:

| # | Item | Verdict |
|---|------|---------|
| 1 | Fix touch-target sizes | ✅ **Approved — implementing** |
| 5 | Credibility strip | ✅ **Approved — implementing** (highest-value item; directly serves PRODUCT.md's positioning) |
| 3 | Typed hero reveal | ✅ **Approved with a constraint — implementing**: total reveal must stay fast enough (~800ms) to never delay a recruiter reading name/role/tagline; full text stays in the DOM immediately for accessibility/SEO regardless of the visual animation |
| 2 | Beacon cursor | ❌ **Rejected.** Custom cursors are a gimmick risk on a leadership-positioned portfolio — reads as "look what I can build" (fits a creative-agency site like tamalsen.dev), not "confident and precise" (this site's actual character per DESIGN.md). |
| 4 | Monospace accent (JetBrains Mono) | ❌ **Rejected.** Would break DESIGN.md's "Single Voice Rule," written deliberately, for marginal benefit — and adds a second font to maintain forever on a site whose own PRODUCT.md says it must stay low-maintenance. The *structural* idea from #3 (bracket-wrapped, numbered lines) is kept; the font-swap is not. |
| 7 | Back-to-top button | ❌ **Rejected — redundant.** The sticky nav's "Home" link already jumps to top instantly; a second control doing the same thing adds no value. |
| 6 | Filterable project grid | ⏸ **Correctly deferred** — no real projects exist yet. |
| 8 | Sidebar nav redesign | ⏸ **Correctly deferred** — a structural redesign, not a bolt-on; separate future conversation. |

## Reference sites analyzed

**[tamalsen.dev](https://tamalsen.dev/)** — dark, code-inspired developer portfolio.
- Hero: bold display name over a 3D isometric-cube illustration, `// home` / `// expertise` comment-style nav labels with numbered indices (01–05).
- **Custom cursor**: a small dot (`circle-cursor--inner`) plus a larger lagging ring (`circle-cursor--outer`) that replaces the native pointer — confirmed by inspecting the live DOM.
- "AS FEATURED IN" logo strip under the hero for social proof.
- Project grid with filter tabs showing counts ("All 10 / Data Visualization 01 / Web Development 08").
- Sticky back-to-top button, bottom-right.

**[briceclain.com](https://briceclain.com/en/)** — playful, high-craft agency-style portfolio.
- **Fixed left sidebar nav** (not a top bar): circular profile photo, icon+label links, language toggle, social icons — content scrolls independently on the right.
- Hero types itself in line-by-line, each line wrapped in code brackets (`<Hello, I'm Brice!>`) with a growing line number and a blinking text-cursor at the end of the current line.
- A floating vertical "Honors" badge pinned to the page edge for an awards callout.

## Proposed enhancements

### 1. Fix touch-target sizes — accessibility, quick win
**Found while auditing, not reference-inspired.** The theme toggle, language toggle, and mobile hamburger button (`ThemeToggle.tsx`, `LanguageToggle.tsx`, `Navbar.tsx`) are all `h-9 w-9` (36×36px). The `ui-ux-pro-max` UX guideline database flags this at **High severity**: web pointer targets should be at least 24×24 CSS px per WCAG 2.2, and native app guidance (44pt/48dp) is a stricter bar worth matching since these are the only icon-only controls on the page.
- **Fix:** bump to `h-11 w-11` (44×44px) on all three. Purely a size change — no visual redesign, fits the existing Pill-or-Panel shape rule exactly.
- **Effort:** trivial (three className edits).

### 2. Beacon cursor — inspired by tamalsen.dev
Replace the native cursor (desktop only) with a two-part custom cursor that's a *literal* expression of the "Night Harbor" metaphor already in `DESIGN.md`: a small solid dot in Beacon Cyan, with a larger ring trailing behind it on an eased delay, scaling up when hovering any link/button/card.
- **Fit with DESIGN.md:** directly reinforces "The One Voice Rule" (cyan stays rare — only the cursor's small dot/ring, nothing else changes) rather than conflicting with it.
- **Implementation:** `framer-motion` is already a dependency — a `useMotionValue` + `useSpring` pair driven by `pointermove` gives the lag-then-catch-up feel without a new library. Disable entirely on touch devices (`(pointer: coarse)` media check) and under `prefers-reduced-motion` — the UX guideline data is explicit that a magnetic/cursor effect should never be the only way to perceive hover state, so it's additive, not load-bearing.
- **Effort:** medium (one new client component, mounted once in `layout.tsx`).

### 3. Hero "typed line" reveal — inspired by briceclain.com
Right now the hero fades in as one block (`Hero.tsx`). Brice's site instead reveals the greeting/name and role as sequential bracket-wrapped lines with a line-number gutter and a blinking cursor at the end of the active line — it reads like a file being typed. **Final approach: the structural idea (brackets, line numbers, sequential reveal) is kept; the monospace font it originally came bundled with is not** — see #4.
- **Fit with DESIGN.md:** compatible as-is, no token changes — brackets/numbers render in Inter, same as everything else.
- **Implementation:** a `clip-path` reveal per line (real text stays in the DOM the whole time — screen readers and crawlers get the full content immediately regardless of the visual animation), staggered fast enough to finish in ~800ms total; `useReducedMotion()` skips the animation entirely rather than relying only on the global CSS media query, since Framer Motion's JS-driven transforms aren't reliably caught by `animation-duration` overrides.
- **Effort:** medium.

### 4. A controlled monospace accent — rejected, see verdict table
Both reference sites lean on a monospace face for line-numbers/comment-style labels. Considered as a companion to #3, but rejected: it would amend DESIGN.md's "Single Voice Rule" for marginal benefit and permanent added maintenance surface. #3 ships with the structural idea only, in Inter.

### 5. Credibility strip under the hero — adapted from tamalsen.dev's "AS FEATURED IN"
Jorge has no press features to show, so this isn't a straight copy — but the same *pattern* (a quiet logo row for instant credibility) fits real evidence he does have: AWS certification badges plus the real employer names (Neostella, IBM, iNBest, Bradescard). A single muted row under the hero, above the fold.
- **Guardrail:** `PRODUCT.md`'s evidence section is explicit that nothing fabricated (no invented press, no invented logos) belongs here — this only uses real, already-documented facts.
- **Effort:** low (logos/wordmarks needed — text-only wordmarks are fine, no need to source actual company logo files).

### 6. Filterable project grid — inspired by tamalsen.dev, for later
The Projects section is currently an intentional "coming soon" stub. When Jorge adds real projects, tamalsen.dev's filter-tabs-with-counts pattern (`All 10 / Data Viz 01 / Web Dev 08`) scales much better than a flat grid once there are more than 3-4 items.
- **Not actionable today** — no real projects exist yet (per `PRODUCT.md`) — but worth designing the Projects section *for* this pattern from the start rather than retrofitting later.
- **Effort:** medium, deferred until real project content exists.

### 7. Sticky back-to-top button
Small, cheap addition once the page has real scroll depth (it already does). A `rounded-full` button (fits Pill-or-Panel) fixed bottom-right, fading in after scrolling past the hero.
- **Effort:** trivial.

### 8. Considered but not recommended: sidebar nav layout (briceclain.com)
Brice's fixed-left-sidebar nav is the most visually distinctive thing on that site, but adopting it here would be a structural rewrite, not an enhancement: it replaces the sticky top nav, changes every section's container math, and cuts against "The Alternating Tide Rule" (section-by-section background/surface alternation reads naturally in a full-width top-nav layout; a persistent sidebar changes that relationship). I'd call this a genuine redesign decision, not a bolt-on — worth a future `/impeccable` or design-skill new-work pass if Jorge wants to consider it deliberately, not something to fold in alongside the smaller items above.

## Build order (this batch)

**#1 (touch targets) → #5 (credibility strip) → #3 (typed hero reveal, ≤800ms, no font change).** #2, #4, #7 rejected — see verdict table. #6 and #8 remain correctly deferred.
