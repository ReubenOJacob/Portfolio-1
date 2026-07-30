# reubenjacob.com

Personal site of Reuben Jacob, Co-Founder & CEO of [Syphon Labs](https://syphonlabs.com/).

Editorial single-page portfolio: featured company, selected work index, experience timeline, testimonials, contact. Case-study pages are statically generated from one data file. A `/press` page carries the bio, headshot, and company boilerplate; `/resume` serves the PDF.

## Stack

- Next.js 15 (App Router, static generation) · React 19 · TypeScript
- Tailwind CSS 3 with OKLCH design tokens (paper/ink/oxblood, defined in `app/globals.css`)
- Libre Caslon Text (display) + Public Sans (text) via `next/font`
- Contact form posts to Formspree

## Structure

| Path | Purpose |
|---|---|
| `lib/projects.ts` | Single source of truth for all project/case-study data (tiers, titles, timelines) |
| `lib/profile.ts` | Experience/education/certifications; entries tied to a project derive role and years from `lib/projects.ts` |
| `app/projects/[id]/` | Statically generated case-study pages with per-page metadata |
| `app/press/` | Press kit (bio, headshot, boilerplate) |
| `components/` | Site sections; `components/ui/` holds only the three shadcn primitives in use |
| `PRODUCT.md`, `DESIGN.md` | Positioning and design-system context used by design tooling |

## Develop

```bash
npm install
npm run dev      # local dev
npm run build    # production build (static)
npm start        # serve the build
```

Adding a project: add an entry to `lib/projects.ts` with an explicit `tier` (`featured`, `listed`, or `unlisted`); the index, sitemap, and detail page all derive from it.
