# spark33.github.io

Sean Park's personal site — a single, hand-built static page. No framework, no build
step: one `index.html` with inline CSS and vanilla JS, served directly by GitHub Pages.

## Design

Editorial serif (Newsreader, optical sizing), a warm 한지-paper palette, and a
moon-phase motif wired throughout: the favicon is tonight's moon over Seoul, scrolling
waxes the rail moon, posts show reading progress on it, and the light/dark toggle is a
View-Transitions circular wipe out of the moon. Tufte-style sidenotes, a FLIP lightbox,
a "where you are" breadcrumb, a print stylesheet, and full `prefers-reduced-motion`
handling.

Routing is hash-based (`#/work/<slug>`, `#/post/<slug>`), rendered client-side from the
`PROJ` and `POSTS` arrays near the bottom of `index.html`.

## Editing

- **Projects / posts** — edit the `PROJ` and `POSTS` arrays in `index.html`
  (marked `TODO(Sean)`). Case-study and post bodies are rendered by `renderCase()` and
  `renderPost()`; replace the placeholder copy there.
- **Contact email** — currently the `hello@example.com` placeholder (in the rail and the
  home lede). Swap in the real address before sharing.
- **Screenshots** — the `.shot` boxes are CSS placeholders. When you add real images, use
  `object-fit: cover` and an `onError` fallback.

## Deploy

GitHub Pages serves this repo directly. For it to appear at the root domain
`https://spark33.github.io/`, the repo must be named `spark33.github.io` and Pages must
be set to build from the default branch, `/` root. `.nojekyll` disables Jekyll processing.

## Known follow-ups

- Hash routing means no server-rendered per-page metadata — link previews and search
  engines only see the root page. A static multi-page build (one HTML per project/post)
  would fix this.
