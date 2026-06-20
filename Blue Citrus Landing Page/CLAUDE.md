# Akintayo Akinnibosun — Portfolio · Project Notes

A type-forward, strictly-monochrome portfolio for **Akintayo Akinnibosun**, a
frontend developer who **designs and builds** sites for indie makers (the
Product Hunt / rough-site crowd). The site is itself the sales pitch — it has to
be the best-looking thing the visitor has seen that week.

## Files (what's live)
- `Portfolio.html` — the single scrolling page. Sections: hero → 01 Selected work
  → 02 About → 03 Experience → contact footer.
- `work/Hookline — Case Study.html` — in-depth case study (template-quality).
- `work/Pagaroo — Case Study.html` — second case study, same structure.
- `portfolio.css` — all shared design tokens + components.
- `case.css` — case-study-page-specific styles (extends portfolio.css).
- `Portfolio Directions.html` + `direction-*.jsx` + `design-canvas.jsx` — the
  ORIGINAL mockup exploration canvas. Kept for reference; not the live site.

## The design direction ("A+B")
Chosen from a 3-direction exploration. Final = **Direction A's hero + typography
+ body, with Direction B's flat hairline navbar** (mono uppercase links, not a
floating pill — deliberately less similar to the juliacodes.com inspiration).
- Type: `"Helvetica Neue", Helvetica, Arial` grotesque, huge & tight
  (letter-spacing ~-0.035em on h1), monospace for all labels/eyebrows/nav.
- Color: strict monochrome, LIGHT mode only. Tokens in `:root` of portfolio.css.
  User explicitly rejected dark mode and any accent color.
- Layout: desktop-first, responsive down to mobile. The original "column too
  narrow" complaint is solved with a 1200px max-width and 2-up work grid.

## Signature micro-interaction
"Site shots" are NOT images — they're **mini browser windows containing a CSS
wireframe** (`.preview` > `.preview-bar` + `.preview-view` > `.wf`). On hover the
`.wf` page scrolls top→bottom (translateY -50%; it's sized 200% of the viewport
so the math always lands at the bottom). Hero thumbnails also straighten from
their tilt and lift. Built with CSS container queries so it scales at any size,
and fully reduced-motion-safe. **A real tall screenshot dropped into
`.preview-view` gets the same scroll effect for free.**

## Known TODOs / open threads
1. **Copy is placeholder & too money-forward.** User flagged this twice: it leans
   on "$2–5k / fixed price" rather than WHAT HE DOES FOR CLIENTS. Rework hero
   lede + case-study outcomes toward client value. (Deferred on purpose.)
2. **All imagery is placeholder** (wireframes + a portrait block). User may want
   draggable image slots to drop real screenshots in.
3. **Case studies are invented examples** (Hookline, Pagaroo) — they demonstrate
   the STRUCTURE. Swap in his two real projects. Quality over quantity: he wants
   only 1–2 deep case studies, short and unbloated.
4. **Mobile**: hover previews don't fire on touch — consider a tap/auto-cycle
   fallback.
5. Placeholder contact details throughout: `hello@akintayo.dev`, Twitter/GitHub
   links point nowhere yet.

## User preferences
- Concise, direct communication.
- Quality over quantity; no filler content; minimalism.
- Inspired by juliacodes.com but wants his own identity, not a copy.
