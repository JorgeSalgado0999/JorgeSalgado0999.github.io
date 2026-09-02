---
target: Experience accordion (commit 4e67a3f)
total_score: 27
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/jorge.salgado/Documents/JorgeSalgado/portfolio/components/Experience.tsx"
target_fingerprint: "sha256:f3c2a04d7a50ca19435023af86d937ed5af2f92b45681d1e5d5065943983f208"
target_path: /Users/jorge.salgado/Documents/JorgeSalgado/portfolio/components/Experience.tsx
timestamp: 2026-09-02T21-04-14Z
slug: components-experience-tsx
---
Method: dual-agent (A: general-purpose design review · B: general-purpose detector/browser evidence)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Label/chevron/aria-expanded sync verified live |
| 2 | Match System/Real World | 4 | Plain resume language, logical order |
| 3 | User Control and Freedom | 4 | Independent per-entry toggle, no trap |
| 4 | Consistency and Standards | 4 | Exact reuse of Skills' bullet style |
| 5 | Error Prevention | 4 | No input surface to desync |
| 6 | Recognition Rather Than Recall | 3 | All 6 buttons share an identical accessible name |
| 7 | Flexibility and Efficiency | n/a | Experience-mode disclosure widget |
| 8 | Aesthetic and Minimalist Design | 4 | Clean, matches system, nothing decorative |
| 9 | Error Recovery | n/a | Binary toggle has no error states |
| 10 | Help and Documentation | n/a | Self-evident affordance |
| Total | | 27/28 | Excellent |

## Design Specificity Verdict
A (LLM): Authored for this system, not generic — reuses Skills' dot-bullet style, spends Beacon Cyan only on the toggle text/chevron, gates the height animation behind useReducedMotion(). B (deterministic): detector returned zero findings against Experience.tsx. No browser overlay panel was available (no native tab-mutation tool); B used a direct Playwright fallback instead.

## Overall Impression
Technically excellent and true to its own DESIGN.md spec, but two accessibility misses (same class of bug fixed project-wide two commits ago: touch-target size) slipped back in on the new toggle, plus a real content question: the expanded panels are exactly where a skeptical reader checks dates, and one overlap goes unexplained there.

## What's Working
1. Native-feeling token reuse (dot-bullets, single accent use) — doesn't read as bolted-on.
2. Content is metric-backed (25% faster delivery, 20% fewer bugs), not vague duties.
3. B verified ARIA wiring is actually correct live: aria-expanded/aria-controls correct on all 6 entries, panel id matches in every case, Enter and Space both toggle, zero console/page errors from the feature.

## Priority Issues

[P1] Mobile tap target too small — harden
Measured live on 390x844: 93.9x20px. Under the 44x44 minimum, after this exact class of bug was fixed project-wide two commits ago. Fix: add vertical padding to extend the hit area without growing the visible text.

[P1] Non-differentiated accessible names — harden
All 6 toggles announce identically ("Show more, button"); VoiceOver/NVDA element-list navigation can't tell entries apart. Fix: aria-label with role/company appended.

[P2] Bradescard/iNBest date overlap unaddressed — clarify
iNBest "Development Team Leader" (Jan 2022 - Jul 2024) overlaps Bradescard (Jul 2022 - Jul 2023) by a full year. Needs user input: accurate overlap (contract/freelance) or data error?

[P2] No hidden-content signal — clarify
Every closed button looks identical with no preview of contents; opening one doesn't scroll it into view.

[P3] No hover state on the toggle — polish
Text stays flat accent with no hover shift, unlike nav links/chips elsewhere in the system.

## Persona Red Flags
Sam (accessibility): identical accessible names block rotor navigation; 20px-tall mobile target risks mis-taps. Positives: full keyboard operability, visible focus ring, reduced-motion respected.
Casey (mobile): 20px tap target is a real mis-tap risk one-handed; opening an early entry pushes later roles down.
Jordan (recruiter/first-timer): all six buttons read identically with no signal of what's behind them.

## Minor Observations
key={point} (bullet text as React key) — fine today, fragile if copy ever repeats.

## Questions to Consider
1. Strongest metrics (25%, 20%) sit behind a click many scanners won't make — should they live in the always-visible line instead?
2. With only 3-4 bullets per role, is per-role accordion the right pattern, or should the top highlight always show and only the rest hide?
