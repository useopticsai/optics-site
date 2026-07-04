# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# AGENTS.md — Optics Marketing Website

Standing instructions for any agent working in this repo. Read before every task. These are conventions and constraints, not a one-time build script.

---

## 1. What this is

A **marketing site only** for **Optics** — an AI demand-forecasting product that helps independent bakeries cut overproduction waste. No auth, no product app, no accounts, no dashboard. Purpose: explain the problem, pitch the product, introduce the company/team, collect a waitlist, surface careers.

Audience: independent bakery owners (primary); investors and hires (secondary).
Tone: warm, clear, confident — not hype-y. Short declarative sentences. Generous whitespace. Calm and premium, not busy.

---

## 2. Content lives in code, not here

All copy, links, team info, and shared data live in **`src/lib/constants.ts`** — the single source of truth. Import from it; never hardcode this data inline or duplicate it across files. When you need marketing copy, read `constants.ts`. Do not invent claims, stats, or copy that isn't there — ask instead.

---

## 3. Tech stack (do not change without asking)

- **Next.js 16, App Router, TypeScript.** Turbopack is the default bundler (no `--turbopack` flag).
- **Tailwind CSS v4, CSS-first.** There is **no `tailwind.config.js`** — all tokens live in the `@theme` block in `src/app/globals.css`. Do not create a Tailwind config file.
- **Font: Nunito**, via `next/font/google` in `layout.tsx` (already wired). Do not switch fonts.
- **Animation: `motion`** — import from `motion/react`, NEVER `framer-motion`.
- **Hosting: Vercel**, auto-deploys from `main`.
- **Import alias `@/*` → `src/*`.** Use it, not long relative paths.

Package rules: use `npm`. Do NOT run `npm audit fix --force`. No new dependencies without stating why and getting confirmation.

---

## 4. Locked palette (do not alter these tokens or invent colors)

In `src/app/globals.css` under `@theme`. Use via Tailwind v4 auto-generated utilities (`--color-cream` → `bg-cream`, `text-cream`, etc.).

```css
@theme {
  --font-sans: var(--font-nunito), ui-sans-serif, system-ui, sans-serif;

  --color-cream:  rgb(243, 240, 234);   /* default page background */
  --color-sand:   rgb(234, 229, 218);   /* alternate section background */
  --color-deep:   rgb(221, 214, 197);   /* deepest neutral layer */
  --color-line:   rgb(216, 210, 195);   /* 1px section divider */

  --color-forest:      oklch(38% 0.07 150);  /* headings + body text */
  --color-forest-soft: oklch(48% 0.06 150);  /* secondary text */

  --color-espresso:    rgb(33, 29, 25);      /* dark contrast band */
  --color-terracotta:  rgb(196, 98, 62);     /* primary CTA / accent */
}
```

Rules:
- Default bg `cream`, text `forest`, secondary text `forest-soft`.
- **Green is the ONLY text color.** Never use terracotta/brown for body text (fails readability). Terracotta = CTAs/buttons and one accent band only.
- Separate sections with a 1px `line` top border — hairlines, not heavy boxes.
- Per long page, break the calm with exactly TWO full-bleed contrast bands: one `espresso` (dark, cream text) and one `terracotta` CTA band. No more.
- Warm-tinted shadows (`rgba(64,42,28,0.05)`), never grey/black.
- `scroll-padding-top: 5rem` for anchor offset. Respect `prefers-reduced-motion`.

---

## 5. Motion

Subtle only: fade/slide-in on scroll, smooth easing (`cubic-bezier(.22,1,.36,1)` reads premium). Use `motion/react`. No bouncy/flashy motion. Disable all motion under `prefers-reduced-motion`. When in doubt, less.

---

## 6. Pages & routes

Multi-page. Nav links navigate between routes (they do NOT scroll within one page).

| Route | Contents |
|---|---|
| `/` | Hero (value prop + waitlist CTA), condensed problem teaser, terracotta CTA band |
| `/product` | Problem, technology, competitive edge, MVP demo slot (placeholder now) |
| `/about` | What Optics is and why it exists |
| `/team` | Founder cards with LinkedIns; company LinkedIn + email |
| `/waitlist` | Tally embed + short privacy note |
| `/careers` | "We're growing, reach out" |
| `/privacy` | Short honest note on data collected and why |

**Navbar + Footer live in `layout.tsx`** (render on every page).

**Nav pattern:** logo-left → centered links (Product, About, Team, Careers) → ONE button right ("Join Waitlist", terracotta). Single primary action — never multiple competing buttons.

**Footer:** columned page links, company LinkedIn, company email, Careers + Privacy links. CTA may repeat.

---

## 7. Folder structure

```
src/
├── app/            layout.tsx, page.tsx, globals.css, and one folder per route
├── components/
│   ├── layout/     Navbar.tsx, Footer.tsx
│   └── sections/   Hero.tsx, Problem.tsx, Technology.tsx, CTA.tsx, TeamGrid.tsx, ...
└── lib/
    └── constants.ts   ← all copy, links, shared data
```

**Anti-one-big-file rule:** pages compose small section components; no hundreds of lines of inline JSX. Reusable data comes from `constants.ts`. Keep components small and focused.

---

## 8. Brand assets

Logos in `public/`: `Optics logo no bio.jpg` (primary), `Optics logo V2.jpg` (alternate). Paths (with encoded spaces) are in `constants.ts`.
**KNOWN ISSUE:** they're `.jpg` (no transparency) — on `cream` they'll show a solid rectangle that clashes. A transparent **PNG/SVG** is needed before launch. Until then, check the JPG background against `cream`; flag in any logo task.

---

## 9. Waitlist

Embed a **Tally** form on `/waitlist` (Tally handles email notification + Google Sheet). No custom backend/API/database. If the embed URL isn't available yet, build the page with a labeled placeholder + privacy note. Include a one-line privacy note wherever emails are collected; keep `/privacy` honest.

---

## 10. SEO

Not automatic. Set the Metadata API (`title`, `description`) per route. Add `sitemap.ts` and `robots.ts` before launch.

---

## 11. Guardrails — what NOT to do

- Keep everything **simple and clear**; prefer the straightforward solution.
- Don't change stack, fonts, or palette tokens without asking.
- No new dependencies without reason + confirmation.
- Never run `npm audit fix --force`.
- Never deploy, push to git, or run destructive git commands on your own — ask first.
- Ask before deleting/renaming files.
- **No pricing/ROI figures on the public site** — ever. Don't "helpfully" add them.
- Present projections as projections, not proven facts (framing note is in `constants.ts`).
- Keep components small; never one giant file.
- `import { motion } from "motion/react"` — never `framer-motion`.
- No `tailwind.config.js` (Tailwind v4 is CSS-first).
- When ambiguous on brand, copy, or structure — ask a brief question, don't guess.

---

## 12. Done = renders with the locked palette + Nunito, small composed components, data from `constants.ts`, responsive (mobile-first), subtle motion respecting reduced-motion, no pricing, no overstated claims, links wired from `constants.ts`.