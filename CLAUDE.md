# Akintayo Akinnibosun — Portfolio (Astro)

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
- **Phase 4 — Accessibility hardening + manual test protocol.** See below.
- **Phase 5 — Ship.** Perf budget, deploy (Cloudflare Pages / Netlify — TBD),
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
- Real **Cal.com** booking URL (currently placeholder `https://cal.com/akintayo`,
  in `src/pages/index.astro` `CAL` const).
- Real contact details (currently `hello@akintayo.dev`; Twitter/GitHub → `#top`).
- Real experience history (the Experience section has a clearly-marked
  placeholder row).
- Real portrait image (currently a hatched placeholder block).

## Git
- Work on branch `claude/saas-portfolio-planning-6qmw0w`.
- `npm run dev` / `npm run build` / `npm run check`.
