# Design

Target system for the quiet-authority redesign. This describes the system being built, not the legacy v0 styling it replaces.

## Visual Theme

Editorial paper. Single light theme: warm ivory ground, warm ink text, one oxblood accent. No dark mode; the site is a document read in daylight, not a tool used at night. Depth comes from typographic scale, hairline rules, and whitespace, not shadows or cards.

## Color

OKLCH tokens, all neutrals tinted warm (hue ~85, chroma 0.004-0.008). Never pure #000/#fff.

- `--background` paper: `oklch(0.972 0.006 85)`
- `--foreground` ink: `oklch(0.24 0.012 60)`
- `--muted-foreground` ink-soft: `oklch(0.45 0.012 60)`
- `--faint` ink-faint (rules, hairlines): `oklch(0.87 0.008 80)`
- `--card` raised paper: `oklch(0.985 0.005 85)`
- Brand accent, oxblood: `oklch(0.42 0.115 25)` — links, markers, moments of emphasis. Strategy: Restrained; accent stays under ~10% of any viewport. (Implemented as the `brand` Tailwind color; shadcn's `--accent` token stays a neutral hover tint so stock components keep working.)
- Accent-on-paper passes AA for text at all used sizes.

Category-reflex note: deliberately not navy/gold "executive" and not startup blue/purple.

## Typography

- **Display: Libre Caslon Text** (next/font/google, `--font-serif`), 400/700 + italic, used for the wordmark, section headings, project titles, pull quotes. Caslon carries classical printed authority without the Playfair/Fraunces portfolio cliché.
- **Text/UI: Public Sans** (`--font-sans`) for body, navigation, meta, forms. Sturdy and institutional; a quiet nod to the public-sector track record.
- Labels/eyebrows: Inter 11-12px, uppercase, `tracking-[0.14em]`, ink-soft.
- Scale contrast ≥1.25 between steps; hero display roughly clamp(2.5rem, 6vw, 4.5rem).
- Body max width 65-75ch. Prose on case-study pages is set calm and readable (prose classes tuned to the palette).

## Layout

- Single centered column, max-w ~72rem, generous vertical rhythm (section padding 6-9rem desktop).
- Hairline rules (`--faint`) separate sections; no card grids, no shadows as structure.
- Experience is a two-column editorial timeline (dates left, substance right), collapsing to stacked on mobile.
- Projects are a numbered editorial index (serif title, one-line summary, year + role meta), not a carousel.
- Testimonials are large serif pull quotes with small-caps attribution.
- Hobbies is a quiet photo strip with a one-line caption.

## Components

- Buttons: rectangular, 2px radius max, ink outline or solid ink; accent reserved for text links and markers.
- Links: accent color, underline on hover with `text-underline-offset: 3px`.
- Forms: hairline-bordered inputs on paper, ink focus ring, no filled backgrounds.
- Photography: rendered grayscale by default, full color on hover (`filter: grayscale`), transition 400ms ease-out.

## Motion

Almost none. Opacity/transform fades ≤400ms, ease-out (quart/expo), honoring prefers-reduced-motion. No parallax, no particles, no typing effects, no hover glow, no scale-on-hover cards.
