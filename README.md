# MERIDIAN — Heirloom Full-Grain Leatherware

A **concept demo**: a fictional luxury leather-goods maison rendered as a single-page,
build-less static site. The craft of the page is the product — everything on it
(the atelier, the founder, the press mentions, the pricing) is invented fiction kept
internally consistent. See `PRODUCT.md` for the full product record.

## Run locally

Any static file server works:

```bash
python -m http.server 8080    # then open http://127.0.0.1:8080
# or: npx serve .
```

## Deploy

Push to the default branch — the project is linked to Vercel (`meridian-luxury-wallet`)
and deploys as a static site from the repository root. `vercel.json` sets asset caching
(one-year immutable for `/assets/`) and baseline security headers.

## Structure

| Path | Purpose |
|---|---|
| `index.html` | The entire site — markup, CSS, and JS in one self-contained file |
| `assets/` | Product imagery (WebP), favicon, self-hosted WOFF2 fonts |
| `PRODUCT.md` | Product truth (audience, positioning, constraints, canon) |
| `DESIGN.md` | The visual design system — tokens, rules, component recipes |
| `.impeccable/design.json` | Machine-readable design sidecar |
| `tests/` | Playwright smoke tests |
| `.claude/`, `.agents/`, `CLAUDE.md` | Agent tooling configuration — not site dependencies |

## Dependencies

Runtime: GSAP 3.12.5 + ScrollTrigger and Lenis 1.1.9 from CDN (SRI-pinned), everything
else self-hosted. The page degrades gracefully: if any CDN fails or JavaScript is off,
all content stays readable behind a forced reveal (see the `no-motion` fail-safe).

## Tests

```bash
npm install
npx playwright install chromium
npx playwright test
```

The smoke test covers the critical path: page loads, preloader clears, hero renders,
reservation drawer opens and closes via keyboard.

## Integration points (mocks awaiting real values)

- **Checkout** — the drawer's confirm button runs a mock success flow. Paste a Stripe
  Payment Link where marked in the script (`drawerConfirm` listener) to take payments.
- **Waitlist** — the Edition 02 form validates client-side only. Wire a Formspree /
  Buttondown endpoint where marked (`waitlistForm` submit handler).
- **Domain** — OG tags and the concierge email use `meridian-atelier.com` placeholders.
