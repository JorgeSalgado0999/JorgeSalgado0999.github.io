# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

*(Inferred — user had no preference when asked directly.)* Primary visitor is a broad professional audience: recruiters and hiring managers evaluating Jorge for Tech Lead / Team Leader roles, professional-network contacts (peers, former colleagues, clients) looking him up after meeting him, and potential collaborators or freelance contacts. Bilingual (Spanish/English) audience — Jorge is based in Guadalajara, Mexico, and the site serves both Spanish- and English-speaking visitors equally.

## Product Purpose

A personal portfolio site (jorgesalgado.dev) representing Jorge Salgado professionally on the open web. Success means a visitor comes away with an accurate, credible picture of his experience and leadership track record, and is prompted to reach out (email, LinkedIn, GitHub) for opportunities or collaboration.

## Positioning

*(Inferred — user had no preference when asked directly.)* Leadership and technical depth presented as one combined identity, not two separate tracks: most developer portfolios showcase only code/projects, but Jorge's actual differentiator (per his resume and how the site was built) is that he leads teams and ships production systems at the same time — Tech Lead at Neostella, prior Team Leader roles, AWS-certified cloud/serverless expertise. The site's tagline "FullStack Developer | Team Leader" and the Experience/Skills sections were built to carry this combined claim.

## Operating Context

- Hosted as a static export on GitHub Pages (`JorgeSalgado0999/JorgeSalgado0999.github.io`), served at the custom domain jorgesalgado.dev.
- No backend/server — all "dynamic" behavior (theme, language) is client-side only; contact happens via `mailto:` and external links (LinkedIn, GitHub), not a hosted form.
- Deploys automatically via GitHub Actions on every push to `main`.
- Single-page layout with anchor sections (Home, About, Skills, Experience, Projects, Hobbies, Contact) navigated via a sticky nav with smooth scroll.

## Capabilities and Constraints

- Bilingual ES/EN via a client-side dictionary toggle (no routing split) — persists the visitor's choice, defaults to browser language.
- Light/dark theme toggle (`next-themes`), independent of language choice.
- Static export constraint: no server-rendered/dynamic routes, no real contact-form backend, no image optimization loader (images served unoptimized).
- Projects section is an intentional placeholder ("coming soon") — Jorge has not yet curated real projects/demos to showcase; do not fabricate project content to fill it.
- CV download served as a static PDF (`/resume/JorgeSalgado_CV__2026.pdf`), copied directly from Jorge's actual resume file — must be kept in sync manually when the resume updates.
- Profile photo is a graceful placeholder (initials avatar) until Jorge supplies a real photo at `/public/images/profile.jpg`.

## Brand Commitments

- Name: Jorge Salgado. Tagline: "FullStack Developer | Team Leader."
- Contact identity: GitHub `@JorgeSalgado0999`, LinkedIn `jorge-salgado-aa208416b`, email `jorgesalgado_dev@outlook.com`.
- Location: Guadalajara, Jalisco, Mexico.

## Evidence on Hand

- Real resume (`JorgeSalgado_CV__2026.pdf`) is the source of truth for work history, skills, and certifications — Tech Lead at Neostella (current), prior roles at IBM, iNBest (twice), Bradescard, and Fundación HACE (social service).
- Certifications: AWS Certified Cloud Practitioner, AWS Certified Developer.
- No case studies, testimonials, press mentions, or client logos exist — none should be fabricated or implied.
- No real project demos exist yet — the Projects section is explicitly a stub for this reason (see Capabilities and Constraints).

## Product Principles

1. Credibility through real, verifiable experience only — never invent projects, testimonials, metrics, or press.
2. Leadership and technical craft are presented as one combined identity, not competing claims.
3. Bilingual (ES/EN) accessibility is a first-class requirement, not an afterthought bolted onto an English-first site.
4. Personality and humanity (hobbies, casual tone in that section) are balanced against professional credibility elsewhere on the page.
5. The site must stay low-maintenance: static-hosted, no backend to operate, content changes are simple file edits.
