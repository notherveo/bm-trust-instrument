Build a complete, production-quality multi-page Next.js (App Router) website — a mid-size **CPA & advisory firm** (tax, outsourced CFO, audit, wealth). The feeling: "clarity is the product" — clean, structured, confident, like a well-built financial statement.

## Routes
`/`, `/services`, `/industries`, `/insights`, `/careers`, `/contact`

## Design language
- Palette: crisp white, graphite `#2B2F36`, trustworthy deep teal `#0E5E5A`, warm amber for data highlights.
- Type: modern geometric sans with tabular numerals (Inter-like) + a serif for pull quotes.
- Layout: modular cards, clear service architecture, data-viz-led storytelling (NO handshake stock photos).

## Motion language (signature)
- **"Find your service" guided path**: pick a business stage + a pain point -> a recommended service bundle animates in.
- **Interactive tax-deadline calendar** + resource hub.
- **Industry pages** with mini case-study metrics (illustrative).

Write: `components/reveal.tsx`, `components/service-finder.tsx`, `components/deadline-calendar.tsx`, `components/stat-card.tsx`, `components/accordion.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`. Create `lib/services.ts` + `lib/industries.ts`.

## Content — fictional firm "TRUST INSTRUMENT ADVISORY"
- `/` — confident hero; service pillars; the "find your service" guided path; industry teaser; insights; careers teaser; CTA.
- `/services` — Tax, Advisory, Outsourced CFO, Audit, Wealth (deep sections/cards).
- `/industries` — construction, real estate, healthcare, nonprofits — each with relevant metrics (illustrative).
- `/insights` — filterable articles (cards).
- `/careers` — culture + open roles (fictional) + benefits.
- `/contact` — consultation form (name / company / email / service interest / message) with validation.

Use a fictional firm + sample contact details; label metrics/case studies as illustrative.

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`
- NO 3D/WebGL/map libraries. Do NOT import `three`, `@react-three/*`, `mapbox-gl`, `maplibre-gl`, `d3`, etc. (not installed). Build any "3D"/interactive visuals with CSS 3D transforms, inline SVG, gradients, and motion.

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` -> `{ Button }`
- `@/components/ui/card` -> `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` -> `{ Badge }`
- `@/components/ui/input` -> `{ Input }`
- `@/components/ui/label` -> `{ Label }`
Everything else you MUST write yourself under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1. (A dynamic route page with `generateStaticParams`/`generateMetadata` stays a SERVER component; put interactive UI in `"use client"` children.)
2. Icons are components: `<ArrowUpRight className="size-4" />`. Never `{icon.size}`. JSX component names MUST be Capitalized (never `<icon />`).
3. Shared chrome (header/nav, footer) lives in `app/layout.tsx`, rendered EXACTLY once; pages must NOT render it.
4. Import every symbol you use; no unused imports; no `any`; type props explicitly.
5. Photos: plain `<img loading="lazy" alt="..." className="... object-cover">`; use `https://picsum.photos/seed/<unique-slug>/<w>/<h>`; graphics via CSS gradients / inline SVG. No empty src.
6. Respect reduced motion (`useReducedMotion()`); skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy (fictional business). No lorem ipsum / TODO / sample text.
8. Responsive mobile-first; never overflow horizontally.
9. Clearly label testimonials, results, figures, and imagery as illustrative demo content. Use a FICTIONAL business name + sample contact details; never present invented credentials, results, certifications, or reviews as verified facts.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="...">...</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route, every component, and any `lib/*` data module you reference.
