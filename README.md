# Sam Oswald — Portfolio

Personal portfolio site for Sam Oswald, Senior Digital Analytics Analyst.

The site is a single page (`index.html`). Fonts and imagery are embedded in the
page and unpacked in the browser at load time; the React/Babel runtime it needs
is vendored locally under `assets/`. There is **no build step and no external
CDN** — the page renders fully offline. Just open `index.html` or serve the
folder statically.

## Files

- `index.html` — the portfolio (requires JavaScript).
- `assets/Sam-Oswald-Resume.pdf` — résumé, linked from the "Resume ↓" buttons.
- `assets/vendor/` — React, ReactDOM and Babel, preloaded so the page never
  reaches out to a CDN. (The runtime skips its remote fetches when these are
  already present, so the site has zero external dependencies.)
- `.nojekyll` — tells GitHub Pages to serve files as-is.

## Deploying with GitHub Pages

Settings → Pages → Build and deployment → **Deploy from a branch**, then pick this
branch and the `/ (root)` folder. GitHub serves `index.html` directly.
