# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is an **open decision** (interview question skipped 2026-09-24). Factual context:
the page is built as a luxury-consumer persuasion surface (copy, scarcity, and provenance patterns
address an affluent buyer), but the confirmed purpose below is a concept demo whose craft is judged
by design-literate viewers. Do not treat either audience as confirmed until the owner decides.

## Product Purpose

MERIDIAN is a **portfolio / concept demo**: a fictional luxury leather-goods house executed
end-to-end as a single-page site. It exists to demonstrate out-of-distribution front-end craft —
motion choreography, editorial art direction, and interaction design — not to sell a product.
Success means the page reads as the work of an established maison and is evaluated on its finish.

## Positioning

As a piece: a complete fictional brand world (atelier canon, numbered editions, certificate
provenance) rendered with production-grade polish in one dependency-light static file — the
fiction is the medium, coherence of the fiction is the differentiator.

## Operating Context

- Single-page scroll narrative (hero → material → architecture → patina → craft → spec →
  unboxing → atelier → guarantee → FAQ → archive → CTA), local dev via `python -m http.server`,
  static deploy via Vercel (project `meridian-luxury-wallet`).
- Interactive systems: leather-finish swatch filters, patina aging simulator, pinned craft
  scrub, unit/monogram/foil reservation drawer with live certificate preview, waitlist form,
  policy modals, world clocks, Web Audio ambience (off by default).

## Capabilities and Constraints

- One self-contained `index.html` (~3.9k lines, inline CSS + JS) plus 4 WebP assets; **no build
  system** — keep it runnable as a plain static file.
- CDN dependencies: GSAP 3.12.5 + ScrollTrigger, Lenis 1.1.9, Google Fonts (Bodoni Moda,
  Instrument Serif, Plus Jakarta Sans). All GSAP/Lenis usage is guarded; the page degrades to a
  fully readable static experience if CDNs fail or JS is off.
- Selection persistence via localStorage; `prefers-reduced-motion` honored; drawer is keyboard
  accessible (Escape, focus trap, ARIA dialog); mobile nav overlay below 900px.
- Checkout, waitlist, and policies are **mocks with marked integration points** (Stripe link /
  form endpoint comments in the script).

## Brand Commitments

- Name **MERIDIAN**; voice: restrained, archival, specific — short declarative sentences,
  uppercase letterspaced labels, serif display over near-black (`#0b0a09`) with cognac/gold
  (`#a86538` / `#c59b27`) accents.
- The fictional canon is binding *as fiction*: Édouard Meridian (founder), Tanneries Roux Alsace
  est. 1883, oak-bark tannage, Edition 00 (12 units, sold out) / Edition 01 (250 units, $380) /
  Edition 02 (in tannage), certificate numbers `MER-2026-###`. Keep the canon internally
  consistent; never present it as real.

## Evidence on Hand

- Four product renders: `assets/hero.webp`, `open.webp`, `flatlay.webp`, `macro.webp`
  (1024×1024, converted from JPEG originals; no source photography exists).
- **No real evidence of any kind**: no customers, press, testimonials, pricing authority, or
  atelier. Everything on the page (press strip, quotes, policies, addresses) is invented.
  Future work must not fabricate reality beyond the established fiction, and must not present
  fictional claims as real when asked for evidence.

## Product Principles

1. **Craft is the product.** Every change must raise the perceived ceiling of finish; nothing
   ships that looks templated.
2. **The fiction stays coherent.** One maison, one canon, one voice — additions extend the
   world, never contradict it.
3. **Restraint is the register.** Fewer elements, more polish; luxury speaks in whispers.
4. **Mocks must be honest.** Demo flows look real but carry clearly marked integration points;
   never wire fake money movement.
5. **Performance is polish.** The demo budgets measured impact (≈380 KB imagery, LCP on text)
   and keeps the no-build, degrade-gracefully constraints.

## Accessibility & Inclusion

Baseline established and to be preserved: reduced-motion support, keyboard-operable drawer and
mobile nav, ARIA dialog semantics, focus-visible styles on primary controls, lazy-loaded
below-fold imagery.
