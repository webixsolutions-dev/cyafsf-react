# CYAFSF Frontend (React + Vite + Tailwind CSS)

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```
Runs at http://localhost:5173 and proxies `/api` to the backend
(http://localhost:4000) — start the backend first (see ../backend).

## Styling
Tailwind CSS, configured with the CYAFSF brand tokens in
`tailwind.config.js`:

| Utility | Hex |
|---|---|
| `navy` | `#143B4A` |
| `navy-deep` | `#0E2C38` |
| `teal` | `#168C87` |
| `coral` / `coral-dark` | `#F06A5B` / `#D5533F` |
| `gold` | `#F3B544` |
| `cream` | `#F6F2E9` |
| `ink` | `#24343B` |

`src/styles/global.css` holds the Tailwind directives plus a small
`@layer components` block (`.btn`, `.btn-primary`, `.eyebrow`, etc.)
for the handful of shapes reused across many components — everything
else is plain utility classes directly in JSX.

## Structure
- `src/pages/` — one component per route (matches the static site's pages)
- `src/components/layout/` — header/footer shell
- `src/components/sections/` — homepage section blocks (hero, pathways, programs…)
- `src/components/ui/` — small reusable pieces (Button, Card)
- `src/lib/api.js` — typed fetch wrapper around the backend API
- `src/hooks/` — data/state hooks (e.g. `useContactForm`)
- `src/context/` — cross-cutting app state
- `src/data/` — static config that never needs the backend (nav links)
- `src/styles/` — Tailwind entry + design tokens

## Notes
This scaffold intentionally mirrors `cyafsf-static-site/`. Each
"stub" page component (About, Events, Resources, etc.) has a comment
pointing to the matching static HTML file — port the markup/copy
across page by page, reusing the Tailwind classes already established
in `Home.jsx`, `SiteHeader.jsx` and `Contact.jsx`.

## Verified
`npm run build` was run against this scaffold and produces a working
Tailwind bundle (brand colors compile correctly, e.g. `.btn-primary`
renders as `rgb(240, 106, 91)` = `#F06A5B`).
