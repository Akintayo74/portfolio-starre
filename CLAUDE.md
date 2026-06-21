# Akintayo Akinnibosun — Portfolio (Astro)

A type-forward, strictly-monochrome portfolio that **is itself the sales pitch**.
Built in Astro: the site dogfoods the performance + accessibility story it sells.

## Positioning (locked)
- **Niche:** fast, accessible marketing sites for **technical / devtools SaaS**
  (dev tools, APIs, infra, AI-dev products). Founders here are technical, verify
  claims in devtools, and have budget — the dogfooding argument lands hardest.
- **Offer:** design **and** build, end-to-end. $3–5k range, but the site leads
  with client *value/outcomes*, not price. Price is reframed as predictability
  (fixed scope, clear timeline) in a "how it works" section — never the headline.
- **Anchor case study:** Centre for Earthworks (real). It's an NGO, not SaaS, so
  it's framed as proof of *method/rigor*; a SaaS-specific study is to follow.
- **Voice:** concise, plain, proof-led — no marketing fluff. Quality over
  quantity; only 1–2 deep case studies. Light mode only, no accent color
  (user rejected dark mode). Inspired by juliacodes.com, but its own identity.

## Build plan & status
- **Phase 1 — Scaffold & port. ✅ DONE.** Fresh Astro + TS (strict) at root,
  mockup archived to `/reference`, CSS ported verbatim, home + case study
  rebuilt with components/layouts. No visual or content change yet — a faithful
  1:1 port of the mockup.
- **Phase 2 — Componentize.** (Largely folded into Phase 1.) Remaining: extract
  any leftover repeated markup (e.g. the scoreboard/deltas) into components.
- **Phase 3 — Reposition & rewrite.** Apply devtools-SaaS copy (hero, about,
  add a "how it works"); migrate the Earthworks study into the MDX collection.
- **Phase 4 — Accessibility hardening + manual test protocol.** See below.
- **Phase 5 — Ship.** Perf budget, deploy (Cloudflare Pages / Netlify — TBD),
  optional GitHub Actions running axe + Lighthouse CI as the automated *floor*.

## Structure
```
src/
  layouts/   Base.astro, CaseStudy.astro
  components/ Nav, Footer, Button, SectionHead, Preview (wireframe)
  pages/      index.astro, work/centre-for-earthworks.astro
  content/    work/  (empty — schema ready for Phase 3 MDX migration)
  content.config.ts  typed case-study schema
  styles/     global.css (ex-portfolio.css), case.css  (ported verbatim)
reference/    the original HTML/CSS mockup, kept for side-by-side verification
```
- Astro ships **zero client JS by default**. The only scripts are two small
  inline modules in `CaseStudy.astro`: the reading-indicator ruler and the
  scoreboard scroll-reveal, plus the button shimmer. All are progressive
  enhancement — the page is fully readable without them and reduced-motion safe.

## Signature interaction
"Site shots" are **CSS wireframes in a mini browser window** (`Preview.astro`),
not images. On hover the `.wf` scrolls top→bottom (it's 200% tall so a -50%
shift lands at the bottom). Container-query sized; a real tall screenshot
dropped in gets the same scroll for free.

## Phase 4 — known accessibility work (deferred from the faithful port)
1. **Contrast:** `--mute` (#9b9893) on white ≈ 2.86:1 — fails AA. Used on the
   hero's "proud to ship." (large text) and many labels. Needs a real fix.
2. **Mobile menu** (`.nav-menu-btn`) is a dead button: no `aria-expanded`, no
   disclosure behavior, no ESC-to-close. Build a real disclosure pattern.
3. **No skip-to-content link.**
4. **Decorative wireframes** (`Preview`/`.wf`) aren't `aria-hidden` — they'd add
   noise for screen readers.
5. **Hover-only previews** don't fire on touch or keyboard focus.
6. **`:focus-visible`** styling is undefined — must be deliberate in monochrome.
7. Manual test protocol to write into the repo: keyboard pass, VoiceOver + NVDA,
   200% zoom/reflow, reduced motion, throttled mobile.

## Content TODOs
- Real contact details (currently `hello@akintayo.dev`; Twitter/GitHub → `#top`).
- Real experience history (the Experience section has a clearly-marked
  placeholder row).
- Real portrait image (currently a hatched placeholder block).

## Git
- Work on branch `claude/saas-portfolio-planning-6qmw0w`.
- `npm run dev` / `npm run build` / `npm run check`.
