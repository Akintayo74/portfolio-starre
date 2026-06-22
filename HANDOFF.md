# Handoff — Akintayo Akinnibosun portfolio

Read this first when picking the project up cold. It captures the *why* behind
the work, how the user likes to collaborate, and exactly what's open. For the
locked positioning, full structure, and the resolved accessibility list, see
**`CLAUDE.md`**; for the manual a11y protocol, **`ACCESSIBILITY.md`**.

---

## 1. What this is, in one line
A type-forward, strictly-monochrome **Astro** portfolio for Akintayo — a
**frontend developer** (not a traditional designer) who builds fast, accessible
marketing sites for **devtools companies**. The site *is* the sales pitch: it
dogfoods the performance + accessibility story it sells, for a technical buyer
who will open the network tab.

## 2. Status at a glance
- **Phases 1–4 done** (scaffold/port → componentize → reposition+rewrite →
  accessibility hardening). See `CLAUDE.md` "Build plan & status".
- Homepage copy rewritten in the user's voice; Earthworks case study migrated
  into the MDX content collection; case-study copy tightened to the voice rules.
- Recent polish: hero headline widened (14ch→20ch); animated hero accent
  "sheen" added in **two variants** for the user to compare (open loop, below).
- **Phase 5 (ship) not started** — by the user's instruction.
- Working branch: **`claude/saas-portfolio-planning-6qmw0w`**. Commit + push as
  work completes. `npm run dev` / `npm run build` / `npm run check`.

## 3. The buyer & positioning (summary — full version in CLAUDE.md)
- **Niche (locked):** fast, accessible marketing sites for **technical/devtools
  SaaS** — broad banner across dev tools / infra / APIs / AI-dev, not one
  sub-vein. Chosen over indie-makers because $3–5k fits funded founders and his
  craft/proof gets *read correctly* by a technical buyer.
- **North-star buyer:** seed→early-A devtools founder/CTO, recently funded, no
  in-house designer, a launch/raise coming, current site is a template. Admires
  Linear/Vercel/Resend. Wants taste + build shipped fast, no agency, no handoff.
- **Offer:** one person, start to finish. **$3–5k range — KEEP the number**, as
  a soft range in How-it-works step 02 (transparency filters tire-kickers, reads
  cheap at seed). A short **Cal.com** call is the front door.

## 4. Who he is — taste & identity (important, easy to get wrong)
- **A frontend developer with taste — NOT a designer.** Do not call him a
  designer or say "I design." His training is frontend craft (Josh Comeau's
  courses) and accessibility (Sara Soueidan's *Practical Accessibility*). He
  gets design results through **taste + iteration**, and can contract designer
  friends for heavier work. The site **shows** craft; it never **asserts** it —
  the work is the proof.
- **Aesthetic:** strict monochrome, **light mode only**, **no accent color**,
  Helvetica grotesque huge & tight, monospace for labels/eyebrows/nav. Restraint
  is the brand. Lineage he aspires to: Stripe → Linear → Vercel → Resend.
- **Craft pillars (the About section):** (1) **craft** — product-minded choices
  about how a site behaves + small touches that bring a moment of delight
  (Linear/Clerk-grade); (2) **accessibility** — past the score, "not leaving
  people out" (this is genuinely his value, not a feature — it ties to a real
  care about people).
- He likes tasteful motion done *well and subtly* (hence the sheen experiment),
  but only if it earns its place and doesn't read as gimmick.

## 5. Writing voice (his words are self-expression — match them)
Plain, sincere, grounded, proof-led. He stated it as "I simply am. It's like
breathing." Two **hard rules**, each from a real example he flagged:
1. **Don't overstate.** Make the point and stop. Don't add a clause that
   restates the point or insults the reader's intelligence. *(e.g. "…as a
   working stand-in." — do NOT append "because a subscribe box that silently
   does nothing is worse than not having one.")*
2. **Don't write performatively or self-defensively.** No line that exists to
   look good or pre-empt a critic. *(e.g. cut "I'd rather ship an honest 86 I
   can explain than chase a rounder number"; cut "and said so"; cut "the honest
   gaps".)*
Other tells from editing the case study: avoid comedic setups ("one was small
enough to be funny"), avoid writerly framing devices ("one number stands in for
the rest"), avoid adjectives that praise his own honesty/rigor. Concrete numbers
and honest tradeoffs land; agency-speak ("stunning", "elevate", "transform your
brand", "bespoke", "synergy") repels this audience.

## 6. How the user likes to collaborate (observed)
- **Decisive and iterative.** He'll pick a direction, then refine in passes.
- **Wants reasoning, not just output.** Lead with a recommendation *and the
  logic*. When he asks "what do you think and why," he means it.
- **Loop back before acting on subjective/creative or ambiguous changes** — he
  explicitly asked for this on the closing copy and the gradient palette. When in
  doubt on taste-level or hard-to-reverse calls, present options + a rec and wait.
  For clear, requested changes, just do them (and explain the choice).
- Values restraint, honesty, quality over quantity. Dislikes filler and hype.
- Respond plainly to him too — he'd find performative or sycophantic replies
  off-putting (same rules as the site copy).

## 7. Work done so far (with the why)
- **Astro + TS strict** at root; original mockup archived to `/reference` for
  side-by-side checks. CSS ported verbatim (`global.css` ex-portfolio.css,
  `case.css`).
- **Components:** Nav, Footer, Button, SectionHead, Preview (wireframe site-shot),
  Scoreboard. **Layouts:** Base, CaseStudy. Homepage section order: hero → 01
  Work → 02 How it works → 03 About → 04 Experience → contact.
- **Case study** lives in `src/content/work/centre-for-earthworks.mdx`
  (typed frontmatter + MDX body using Preview/Scoreboard), rendered by
  `src/pages/work/[...slug].astro`. It's an NGO, framed as **proof of method**;
  a SaaS-specific study is the next big content task.
- **Copy** rewritten for devtools + the voice rules; price reframed as
  predictability in How-it-works.
- **Accessibility (Phase 4):** `--mute` darkened to #78756f (~4.6:1, AA);
  real mobile-menu disclosure; skip link; decorative previews `aria-hidden`;
  keyboard parity for the preview scroll; one deliberate monochrome
  `:focus-visible` ring; manual protocol in `ACCESSIBILITY.md`.
- **Portrait removed by choice** (type-forward aesthetic; a rushed photo costs
  more than it adds; the Cal.com call carries the human connection). Optional
  future touch: a small b&w avatar — not a blocker.
- **Hero width** 14ch→20ch (long headline looked cramped/ragged at 14ch).
- **Hero sheen** (see open loop) + **button shimmer** moved to `Base.astro` so
  it runs site-wide; it's on the Book-a-call CTAs.

## 8. Open loops (action needed)
1. **Hero animation — decided: option A.** ✅ The warm-grey luminance "sheen"
   sweeps the grey "for devtools companies." accent (6s, ease-in-out alternate,
   no JS, reduced-motion safe, every stop ≥3:1). `sheen-b` and the toggle const
   were deleted; the class is now plain `.sheen` (tune speed / lightness / band
   width via the `42%`/`58%` stops in the `.hero h1 .mute.sheen` rule).
2. **Manual accessibility testing.** The user will run `ACCESSIBILITY.md` on real
   hardware + screen readers (VoiceOver/NVDA). Fix whatever surfaces. This is the
   point — automated checks are only the floor.
3. **Real content — done.** ✅ Cal.com (`cal.com/akintayo`), email
   (`hello@akintayo.dev`), socials (X `akintayo074`, GitHub `Akintayo74`), and
   the Experience section (Independent 2026–now + Ixnote Services frontend intern
   2025–now) are all real; placeholder row removed. Still open: a
   **SaaS-specific case study** (quality over quantity, 1–2 total).

## 9. Remaining — Phase 5 (ship)
- **Performance budget** + verify the dogfooding claims hold (it's static, near-
  zero JS already).
- **Deploy to Cloudflare Pages** — recommended because the domain `akintayo.dev`
  is already on Cloudflare (least DNS friction), it's a static edge host (matches
  the perf story), free for commercial use. Static Astro output needs no adapter.
  Vercel was the main alternative (on-brand) but adds cross-provider DNS + free-
  tier commercial caveats.
- **Optional CI:** GitHub Actions running axe + Lighthouse CI as the automated
  *floor* under the manual testing.

## 10. Technical notes & gotchas (save future-you time)
- **Almost no client JS.** One tiny inline module per page (button shimmer in
  `Base.astro` + nav disclosure in `Nav.astro`); case studies add one more
  (reading-indicator ruler + scoreboard reveal). All progressive enhancement,
  reduced-motion safe. Keep it that way — it's the dogfooding proof.
- **Signature interaction:** "site shots" are CSS wireframes in a mini browser
  window (`Preview.astro`), not images; `.wf` is 200% tall and a -50% transform
  scrolls it on hover/focus. A real tall screenshot dropped in gets the scroll
  for free. Previews are decorative + `aria-hidden`.
- **MDX authoring gotchas** (for the next case study): no HTML `<!-- comments -->`
  (use `{/* */}`); **no inline `style="..."` strings** (JSX needs objects — use a
  class or a component, which is why the scoreboard became `Scoreboard.astro` and
  the single delta uses `.cs-deltas.single`); `class` is fine; import components
  at the top of the `.mdx`. Reader-nav sections need `data-reader="…"` (+
  `data-reader-sub` for sub-items); the scoreboard reveal targets `#scoreboard`.
- **Contrast token tradeoff:** `--mute` was darkened from the original #9b9893
  for AA. It's the lightest warm grey that passes; if a design tweak ever wants
  it lighter, that's the tension to weigh (it's a text token, so it must pass).
- **Git:** commit messages in this project end with the Co-Authored-By +
  Claude-Session trailers (see existing history). Do not put the model identifier
  in commits/PRs/code. Don't open a PR unless asked.

## 11. Decision log (so a new session doesn't relitigate)
- Astro over plain HTML / React-SPA — content collections + zero-JS dogfooding.
- Niche = devtools (broad), not indie-makers, not a single sub-vein.
- "Frontend developer," never "designer."
- Keep the $3–5k range, in How-it-works, framed as predictability.
- Cal.com call as the front door; offer call + email (devs like async too).
- Earthworks (NGO) kept as the anchor, framed as proof of method.
- Portrait removed by choice.
- Hero closing combines the human-stakes paragraph + the NGO→devtools method
  bridge, in that order, with no sales line (the footer handles the CTA).
- Pull-quote replaced by a plain emphasized line with a soft monochrome
  highlight (no self-quote/citation).
- Deploy target recommendation: Cloudflare Pages.
