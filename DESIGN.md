---
name: MERIDIAN
description: A fictional heirloom leatherware maison rendered as a dark editorial luxury surface — materials asleep in the workshop, waking to the hand.
colors:
  bg-dark: "#0b0a09"
  bg-surface: "#141311"
  bg-card: "#1a1816"
  text-cream: "#f6f3eb"
  text-muted: "#9e998e"
  accent-gold: "#c59b27"
  accent-gold-glow: "rgba(197, 155, 39, 0.25)"
  accent-cognac: "#a86538"
  border-subtle: "rgba(246, 243, 235, 0.08)"
  border-gold: "rgba(197, 155, 39, 0.35)"
typography:
  display:
    fontFamily: "Italiana, Bodoni Moda, Georgia, serif"
    fontSize: "clamp(4.2rem, 9.5vw, 11rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Bodoni Moda, Italiana, Georgia, serif"
    fontSize: "clamp(2.5rem, 4.2vw, 4.6rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bodoni Moda, Italiana, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 400
  body:
    fontFamily: "Jost, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.02em"
  label:
    fontFamily: "Jost, -apple-system, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.3em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "12px"
  pill: "60px"
  round: "50%"
spacing:
  page-margin: "6vw"
  section-y: "16vh"
  section-y-lg: "18vh"
  card: "3rem 2rem"
  grid-gap: "3vw"
components:
  button-primary:
    backgroundColor: "{colors.accent-gold}"
    textColor: "#000000"
    rounded: "{rounded.pill}"
    padding: "1.6rem 4rem"
    typography: "{typography.label}"
  button-island:
    backgroundColor: "rgba(197, 155, 39, 0.1)"
    textColor: "{colors.text-cream}"
    rounded: "999px"
    padding: "0.45rem 0.45rem 0.45rem 1.9rem"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-cream}"
    rounded: "{rounded.md}"
    padding: "3rem 2rem"
  input-field:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-cream}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.2rem"
  chip-swatch:
    backgroundColor: "{colors.accent-cognac}"
    size: "20px"
    rounded: "{rounded.round}"
---

# Design System: MERIDIAN

## Overview

**Creative North Star: "The Darkened Atelier"** *(editor-derived from the confirmed answers "material sensuality" + "quiet until touched"; replaceable by the owner at any time)*

The page is a workshop after closing time. Every surface is tannery-dark; nothing glows until a hand approaches it. Depth is not drawn with shadows but with the difference between one darkness and the next — the way leather reads against a bench at night. The voice is material and sensual: the vocabulary is hide, wax, cedar, and thread, never "features" or "benefits."

Interaction is the light source. Elements lie dormant under hairline borders and muted ink; hover, focus, and scroll are what strike the match — gold blooms, magnetic pulls answer the cursor, dust drifts away from the hand. The system never begs: scarcity is whispered in letterspaced smallcaps, not shouted in badges.

**Key Characteristics:**
- Near-black tonal layering (three darknesses) instead of shadows
- One metal — gold — rationed to ≤10% of any viewport
- Massive serif display over whispered sans labels; nothing in between shouts
- Hairline borders (8%-opacity cream, 35%-opacity gold) as the only structural line
- Motion on transform/opacity only, at `cubic-bezier(0.32, 0.72, 0, 1)` — heavy, decelerating, physical

## Colors

A candlelit palette: three darknesses for ground, one cream for ink, and two warm accents rationed like precious metal.

### Primary
- **Oak-Bark Gold** (#c59b27): the single metal. CTAs, active states, eyebrows, italic display accents, hairline gold borders (rgba(197,155,39,0.35)). Its glow variant (rgba(197,155,39,0.25)) lights the one glowing element per screen.
- **Oak-Bark Gold Glow** (rgba(197, 155, 39, 0.25)): box-shadow halo reserved for the primary CTA and particle dust.

### Secondary
- **Cognac Hide** (#a86538): the leather itself — used sparingly for warm copy moments and the default cognac swatch; never for UI chrome.

### Neutral
- **Tannery Black** (#0b0a09): the page ground.
- **Bench Surface** (#141311): raised section bands, alternating with the ground for scroll rhythm.
- **Leather Card** (#1a1816): cards, filled inputs, drawer surfaces.
- **Vellum Cream** (#f6f3eb): primary text — never pure white.
- **Aged Linen** (#9e998e): secondary text, captions, footer notes.
- **Ghost Cream Border** (rgba(246, 243, 235, 0.08)) and **Ghost Gold Border** (rgba(197, 155, 39, 0.35)): the only structural lines.

### Named Rules
**The One Metal Rule.** Gold appears on at most one glowing element and a handful of hairlines per viewport. Its rarity is the value.

**The Three Darknesses Rule.** Elevation is expressed only as Tannery Black → Bench Surface → Leather Card. Never add a fourth background tone or a light surface.

## Typography

**Display Font:** Italiana (Bodoni Moda, Georgia fallback)
**Headline Font:** Bodoni Moda (Italiana, Georgia fallback)
**Body/Label Font:** Jost (-apple-system fallback)

**Character:** A fashion-maison pairing — Italiana's hairline, ultra-high-contrast caps are the couture voice for the enormous statements; Bodoni Moda is the engraved didone for section headlines and owns every italic accent (the gold-italic voice is Bodoni italic — a real italic, never a synthesized slant); Jost, a Futura-spirit geometric, does the quiet work at weight 400/500, uppercase and letterspaced when small. Body copy runs 400 on dark — light faces get one step more weight.

### Hierarchy
- **Display** (400, clamp(4.2rem→11rem), lh 0.9, ls 0.01em): hero and CTA statements; second line in Bodoni italic gold via `.gold-italic`.
- **Headline** (300, clamp(2.5rem→4.6rem), lh 1.05): section headlines and pull-quotes.
- **Title** (400, 2rem): card and drawer headings.
- **Body** (400, 0.85–1.05rem, lh 1.7–1.8, ls 0.02em): editorial paragraphs, max ~62ch.
- **Label** (500, 0.56–0.75rem, ls 0.25–0.42em, uppercase): eyebrows, input labels, tags, captions — the system's whisper register.

### Named Rules
**The Whisper Rule.** The smaller the text, the wider its tracking: labels run 0.25–0.42em; body never exceeds 0.02em. Small text never drops below 0.56rem.

**The Two-Serif Rule.** Italiana speaks, Bodoni Moda engraves — and Bodoni owns every italic. Never set body copy in a serif, never synthesize an oblique.

## Layout

A single vertical scroll narrative — hero → material → architecture → patina → craft (pinned, scrubbed) → spec → unboxing → atelier → guarantee → FAQ → archive → CTA → footer. Sections breathe at 16–18vh vertical padding with 6vw side margins; alternating ground tones (Tannery Black / Bench Surface) mark chapter breaks without dividers.

Content sits in two-column editorial grids (roughly 1.1fr / 0.9fr, 3–4vw gutters) with hairline-ruled tables and rows for data. The header is fixed with `mix-blend-mode: difference` so it inverts over whatever passes beneath it. One breakpoint: 900px, where grids collapse to one column, the nav becomes a staggered full-screen serif overlay, and the side rail disappears.

## Elevation & Depth

No structural shadows anywhere. Depth is tonal (the Three Darknesses) plus atmosphere: a fixed film-grain noise overlay, a vignette, and gold dust particles on the hero canvas. The only literal shadow in the system is the gold glow halo, and it belongs to one element at a time.

### Shadow Vocabulary
- **Gold Halo** (`box-shadow: 0 0 40px rgba(197,155,39,0.25)`): primary CTA only — the candle in the room.
- **Title Atmosphere** (`text-shadow: 0 4px 44px rgba(11,10,9,0.55)`): legibility bloom behind display type over photography, invisible as a "shadow."

### Named Rules
**The Single Flame Rule.** At most one glowing element per viewport. If something new glows, something else must go dark.

## Shapes

Two families, strictly separated. **Ledger forms** — cards, fields, tables, drawers — are rectangles with 4–6px corners and hairline borders: the world of records, figures, and certificates. **Jewel forms** — buttons and orbs — are full pills (30–60px, 999px) in solid gold or ghost-gold: the world of objects precious to the touch. Perfect circles (20px swatches, 40px+ orbs, the cursor follower) are reserved for material samples and interactive satellites.

### Named Rules
**The Ledger-vs-Jewel Rule.** Containers are ledger (rect + hairline); actions are jewel (pill + gold). Never give a card a pill corner or a button a 4px corner.

## Components

### Buttons
- **Shape:** full pill (60px radius; 999px for the nested island variant)
- **Primary (CTA):** Oak-Bark Gold fill, black text, label typography, padding 1.6rem 4rem, arrow glyph in an inline SVG stroke; carries the Gold Halo; magnetic pull on hover (GSAP x/y toward cursor).
- **Island (hero):** ghost-gold fill (10% gold), ghost-gold border, cream label, trailing 2.5rem circular orb holding a ↗ that translates diagonally on hover; gold fill floods the pill on hover.
- **Hover / Focus:** color floods and translates run at 0.7s `cubic-bezier(0.32,0.72,0,1)`; focus-visible = 1px gold outline, 4px offset. Never underline.
- **Drawer confirm:** full-width pill, same gold fill, disabled state at 0.5 opacity — no other secondary button style exists.

### Chips
- **Swatches:** 20px circles, leather-tone fills, 20%-white hairline ring; active = gold ring + soft scale.
- **Unit pills / foil options:** ghost-bordered pills, muted text; active = gold border + cream text; disabled ("Reserved") = 0.35 opacity, no-cursor.

### Cards / Containers
- **Corner Style:** 6px; **Background:** Leather Card; **Border:** Ghost Cream, → Ghost Gold on hover with a −6px lift (transform only); **Internal Padding:** ~3rem 2rem. No shadows ever.

### Inputs / Fields
- **Filled (drawer):** Leather Card ground, 4px corners, ghost border; serif text at 1.4rem with 0.3em tracking for monogram entry; focus = gold border shift only.
- **Underline (waitlist):** transparent ground, bottom gold hairline, focus brightens the line. No glow, no ring.

### Navigation
- **Style:** fixed bar, transparent over the hero; past 80px it becomes a compact frosted plate (Tannery Black at 82% + 14px blur, bottom Ghost Cream hairline). Cream serif wordmark + numbered sans links ("01. LEATHER") — the current chapter's number turns gold with a scaleX gold underline; links hide on scroll-down and return on scroll-up, and a 1px gold progress hairline tracks reading position along the header's base. The CTA is the header's one jewel (ghost-gold border flooding solid gold on hover); the sound toggle is an icon-only circle. No blend modes — the header owns its contrast. ≤1200px tightens gaps; ≤900px replaces links with a staggered full-screen serif overlay behind a morphing two-bar hamburger; ≤600px drops the sound toggle.

### Certificate Preview
The signature component: a double-framed plate (outer gold hairline, inset ghost-cream hairline at 6px) with a microscopic letterspaced heading, large Bodoni certificate number, foil-class monogram, and archival foot line. Updates live. It is the ledger-and-jewel idea in one object.

## Do's and Don'ts

### Do:
- **Do** ration gold: one glow, a few hairlines, one italic word per headline at most.
- **Do** letterspace every uppercase label (0.25–0.42em) and keep labels ≤0.75rem.
- **Do** use hairline borders (cream at 8% or gold at 35%) instead of fills to delineate structure.
- **Do** animate transform and opacity only, on the luxury easing `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Do** mark chapters by alternating Tannery Black and Bench Surface, not by dividers.
- **Do** write in the material register — hide, wax, cedar, thread, tannage.

### Don't:
- **Don't** use pure white (#fff) or pure black (#000) text; ink is Vellum Cream and only button fills go near-black.
- **Don't** add drop shadows, gradients-as-decoration, or a second glowing element per viewport.
- **Don't** introduce a new background tone, a fourth font, or a saturated color outside the canon.
- **Don't** give containers pill corners or actions rectangle corners (Ledger-vs-Jewel).
- **Don't** animate width/height/top/left, or ship motion that ignores `prefers-reduced-motion`.
- **Don't** shout scarcity — no countdown timers, no red badges, no exclamation marks.
