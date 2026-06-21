# Accessibility — manual test protocol

Automated tools (axe, Lighthouse) are the **floor**, not the goal. They catch
maybe a third of real issues — missing labels, contrast, bad roles. They cannot
tell you whether the site is actually *usable* with a keyboard or a screen
reader. This checklist is the part you run by hand. Re-run the relevant section
whenever you touch navigation, the previews, forms, or focus.

Status legend: ☐ not checked · ✅ pass · ⚠️ issue (note it)

---

## 0. Automated floor (quick, do first)
- ☐ Lighthouse (mobile) Accessibility = 100, Best Practices = 100.
- ☐ axe DevTools: 0 violations on `/` and `/work/centre-for-earthworks`.
- ☐ `npm run check` clean (catches missing alt props etc. at the type level).

These passing means nothing is *obviously* broken. The sections below are where
the real bugs hide.

---

## 1. Keyboard pass (no mouse — unplug it mentally)
Tab from a cold page load and drive the whole site with Tab / Shift+Tab / Enter
/ Space / Esc / arrows only.

- ☐ **Skip link** is the very first Tab stop, is visible when focused, and
  jumps focus into `<main>` (next Tab lands inside the main content).
- ☐ Every link and button is reachable, in an order that matches the visual
  layout. Nothing is skipped; nothing traps focus.
- ☐ **Focus is always visible** — the 2px ink ring shows on every interactive
  element (links, buttons, the email/Cal CTAs, form fields). Never hunt for it.
- ☐ **Nav disclosure (mobile width, ≤600px):**
  - Button shows `Menu`; Enter/Space opens it and focus moves to the first link.
  - **Esc** closes it and returns focus to the button.
  - Tabbing through the open menu reaches all three links.
  - A click/tap outside closes it.
  - `aria-expanded` flips true/false (check in the inspector).
- ☐ **Case-study card** (home, `/`): focusing the card shows the focus ring and
  the wireframe scrolls (keyboard parity with hover). Enter opens the study.
- ☐ **Reading-progress rail** (case study, wide screens): its links are
  reachable, focusing it expands the labels, Enter scrolls to the section.
- ☐ **Subscribe mock** (case study): the email field is focusable and labelled;
  Tab reaches the Subscribe button.

## 2. Screen reader pass
Test with **VoiceOver** (macOS: Cmd+F5) and **NVDA** (Windows). Don't just turn
it on — navigate by landmarks, then by headings, then read in order.

- ☐ **Landmarks:** banner (nav), main, contentinfo (footer) are announced. On
  the case study, the reading-progress `<nav>` reads as "Reading progress".
- ☐ **Heading order** is logical with no skips: one `<h1>` per page, then h2s
  (section heads / contact), then h3s (case-study block titles). Navigate by
  heading and confirm it tells the story.
- ☐ **Decorative previews are silent** — the browser-frame wireframes
  (`aria-hidden`) are NOT announced. You should never hear "image" or the fake
  URL like "centreforearthworks.org".
- ☐ **Links make sense out of context** — the case-card link announces its
  heading + summary, not "link, link, link". CTAs read "Book a call",
  "Email me", etc.
- ☐ **Results table** (case study) reads as a table with a caption and row/col
  headers (e.g. "Performance, After mobile, 86"). Scoreboard numbers are
  reachable as text.
- ☐ **Form field** announces "Email address, edit text".
- ☐ Reading the page top-to-bottom makes sense with no visual context.

## 3. Zoom & reflow
- ☐ Browser zoom to **200%** — no horizontal scroll, nothing clipped or
  overlapping, all text still present (WCAG 1.4.10 reflow).
- ☐ **400%** zoom (≈320px viewport): layout collapses to one column and stays
  usable; the nav disclosure handles the links.
- ☐ Increase text size only (no page zoom) — layout survives `em`/`ch`-based
  widths.

## 4. Reduced motion
Turn on "Reduce motion" (macOS: System Settings → Accessibility → Display).
- ☐ Wireframes don't scroll on hover/focus; the spinner doesn't spin.
- ☐ Scoreboard bars render at final width (no grow animation).
- ☐ Button shimmer does not fire.
- ☐ Smooth-scroll is off (jumps instead of glides).

## 5. Contrast & color (spot check)
- ☐ All grey text (`--mute`, labels, eyebrows, captions) is comfortably
  readable — `--mute` is #78756f ≈ 4.6:1 on white (AA for text).
- ☐ The hero accent ("for devtools companies.") is legible, not faint.
- ☐ No information is conveyed by color alone (the site is monochrome by
  design, so this is mostly free — but check before/after states use text, not
  just shade).

## 6. Throttled mobile (the real-world test)
This is the Earthworks lesson: test on the device and network your visitor
actually uses, not your laptop on fibre.
- ☐ DevTools → throttle to "Slow 4G" + mid-tier mobile CPU. First paint is
  near-instant (static HTML); the page is readable before any JS runs.
- ☐ Disable JavaScript entirely: the page is fully readable and navigable.
  Only the nav disclosure (links still reachable at desktop width), the
  scoreboard reveal (bars at final width), and the shimmer are lost — all
  progressive enhancements.
- ☐ Real touch device: tap targets are comfortable; the nav menu opens/closes
  by tap; nothing depends on hover to be usable.

---

## Known limitation (by design)
- The wireframe previews scroll on hover and on keyboard focus, but **not on
  touch** — there's no clean touch trigger without adding JS, and the previews
  are decorative (`aria-hidden`), so a touch user simply sees a static
  wireframe. No information is lost.
