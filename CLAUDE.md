# Akintayo Akinnibosun — Portfolio (Astro)

> **New / resuming session? Read [`HANDOFF.md`](./HANDOFF.md) first** — taste,
> voice rules, how the user collaborates, the decision log, open loops (hero
> animation A/B, manual a11y testing) and the remaining Phase 5 work. This file
> holds the locked positioning, structure, and resolved details.

A type-forward, strictly-monochrome portfolio that **is itself the sales pitch**.
Built in Astro: the site dogfoods the performance + accessibility story it sells.

## Positioning (locked)
- **Niche:** fast, accessible marketing sites for **technical / devtools SaaS**
  (dev tools, APIs, infra, AI-dev products). Founders here are technical, verify
  claims in devtools, and have budget — the dogfooding argument lands hardest.
- **Who he is (important):** a **frontend developer with taste — NOT a designer**
  in the traditional sense. Trained in frontend craft (Josh Comeau) and
  accessibility (Sara Soueidan's Practical Accessibility). He gets design results
  via taste + iteration, and can contract designer friends for heavier work. So
  the copy never claims "designer"/"I design" — it shows craft, doesn't assert it.
- **Offer:** builds the whole site, **start to finish, one person** (the value is
  "no handoff", not a designer title). $3–5k range — KEEP the number, as a soft
  range in "how it works" step 02 (transparency filters tire-kickers; reads cheap
  at seed budgets). Price is predictability (fixed scope, clear timeline), never
  the headline. A short **Cal.com** call is the front door (step 01 + contact).
- **Anchor case study:** Centre for Earthworks (real). It's an NGO, not SaaS, so
  it's framed as proof of *method/rigor*; a SaaS-specific study is to follow.
- **Voice:** concise, plain, proof-led — no marketing fluff. Writing is
  self-expression: plain, sincere, grounded. Two hard rules from the user:
  (1) **don't overstate** — make the point and stop; don't pile on a clause that
  insults the reader's intelligence. (2) **don't write performatively or
  self-defensively** — no lines that exist to look good or pre-empt a critic.
  His two craft pillars (the "About" section): **craft** (product-minded choices
  + small touches/delight, Linear/Clerk-grade) and **accessibility** (past the
  score — "not leaving people out", which is genuinely his value). Quality over
  quantity; 1–2 deep case studies. Light mode only, no accent color. Inspired by
  juliacodes.com, its own identity.
- **Aim:** broad devtools banner (dev tools / infra / APIs / AI-dev), not one
  sub-vein — the dogfooding proof carries across all four.

## Target buyer (locked)
- **North-star buyer:** seed → early-Series-A devtools founder/CTO. Technical,
  recently funded, **no in-house designer**, a launch/conference/raise coming
  up. Current site is a template that undersells them; they privately admire
  Linear / Vercel / Resend. They don't want a designer→dev handoff or a 6-week
  agency engagement — they want taste + build, shipped fast.
- **Why this niche converges for Akintayo:** (1) his monochrome, type-forward
  aesthetic *is* the Stripe→Linear→Vercel→Resend lineage they aspire to;
  (2) "one person, start to finish" answers a handoff pain technical founders
  have actually felt; (3) his proof (perf, a11y, the Earthworks rebuild) is verifiable
  by exactly this audience — they open the network tab; (4) $3–5k is trivial at
  seed stage. Everything he has gets *read correctly* by this buyer.
- **The site's job:** a devtools homepage is a ~10-second credibility proxy for
  the product itself (PLG funnel: HN/X/conf → site → docs → free-tier signup).
  Fast + crafted signals a quality product before a feature is read.
- **Qualify a prospect:** sells software to devs (docs + free tier) · seed–A,
  recently funded · technical founder, no designer · launch/raise imminent ·
  current site is a template · would nod at your network tab.
- **Language — resonates:** fast, ships, craft, plainly, proof, benchmarks,
  accessible, no bloat, concrete numbers, honest tradeoffs. **Repels:**
  "stunning", "transform your brand", "elevate", "synergy", "bespoke digital
  experiences" — generic agency-speak reads as a threat, not credibility.

## Build plan & status
- **Phase 1 — Scaffold & port. ✅ DONE.** Fresh Astro + TS (strict) at root,
  mockup archived to `/reference`, CSS ported verbatim, home + case study
  rebuilt with components/layouts. No visual or content change yet — a faithful
  1:1 port of the mockup.
- **Phase 2 — Componentize. ✅ DONE.** Nav/Footer/Button/SectionHead/Preview
  extracted in Phase 1; the scoreboard is now `Scoreboard.astro`.
- **Phase 3 — Reposition & rewrite. ✅ DONE.** Homepage copy done (hero, How it
  works, About with craft+a11y pillars, contact with Cal.com + email). Section
  order: hero → 01 Work → 02 How it works → 03 About → 04 Experience → contact.
  The Earthworks study now lives in the MDX collection
  (`src/content/work/centre-for-earthworks.mdx`), rendered by a dynamic route;
  its copy was tightened to the voice rules and the contact footer aligned to
  the homepage. Next big content task: a SaaS-specific case study.
- **Phase 4 — Accessibility hardening + manual test protocol. ✅ DONE.** See the
  resolved list below; the manual protocol lives in `ACCESSIBILITY.md`.
- **Phase 5 — Ship.** Perf budget, deploy to **Cloudflare Pages** (domain
  `akintayo.dev` is already on Cloudflare — least DNS friction, static edge),
  optional GitHub Actions running axe + Lighthouse CI as the automated *floor*.

## Structure
```
src/
  layouts/   Base.astro, CaseStudy.astro
  components/ Nav, Footer, Button, SectionHead, Preview (wireframe), Scoreboard
  pages/      index.astro (hero/work/how/about/experience/contact),
              work/[...slug].astro  (renders a case study from the collection)
  content/    work/centre-for-earthworks.mdx  (the case study, MDX + components)
  content.config.ts  typed case-study schema (incl. SEO description)
  styles/     global.css (ex-portfolio.css), case.css  (ported verbatim)
reference/    the original HTML/CSS mockup, kept for side-by-side verification
```
- Astro ships **almost no client JS**. Every page gets one tiny inline module
  (button shimmer in `Base.astro` + the nav disclosure in `Nav.astro`); case
  studies add one more for the reading-indicator ruler and scoreboard reveal.
  All are progressive enhancement — pages are fully readable/navigable without
  them and are reduced-motion safe.

## Signature interaction
"Site shots" are **CSS wireframes in a mini browser window** (`Preview.astro`),
not images. On hover the `.wf` scrolls top→bottom (it's 200% tall so a -50%
shift lands at the bottom). Container-query sized; a real tall screenshot
dropped in gets the same scroll for free.

## Phase 4 — accessibility work (✅ resolved)
1. **Contrast:** `--mute` darkened #9b9893 (2.86:1) → #78756f (~4.6:1) — passes
   AA for text.
2. **Mobile menu:** `Nav.astro` is now a real disclosure — `aria-expanded`,
   `aria-controls`, Esc-to-close, focus into menu on open / back to button on
   close, outside-click dismiss.
3. **Skip-to-content link** added in `Base.astro` (first tab stop → `<main>`,
   which is `tabindex="-1"`).
4. **Decorative wireframes** (`Preview`) are `aria-hidden` — silent to SRs.
5. **Previews** now scroll on keyboard focus too (`.case-card:focus-visible`),
   reduced-motion safe. Touch is intentionally static (decorative; see
   ACCESSIBILITY.md "Known limitation").
6. **`:focus-visible`** — one deliberate 2px ink ring site-wide; pointer focus
   shows none.
7. **Manual test protocol** written to `ACCESSIBILITY.md` (keyboard, VoiceOver +
   NVDA, 200%/400% zoom, reduced motion, throttled mobile, no-JS).

## Content TODOs
- Real **Cal.com** booking URL (currently placeholder `https://cal.com/akintayo`,
  in `src/pages/index.astro` `CAL` const).
- Real contact details (currently `hello@akintayo.dev`; Twitter/GitHub → `#top`).
- Real experience history (the Experience section has a clearly-marked
  placeholder row).
- Portrait was removed by choice (type-forward, devtools-aesthetic; a rushed
  photo would cost more credibility than it adds). Optional future touch: a
  small, tasteful b&w avatar near the About lede or contact — not a blocker.

## Git
- Work on branch `claude/saas-portfolio-planning-6qmw0w`.
- `npm run dev` / `npm run build` / `npm run check`.
