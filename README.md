# Kelley’s portfolio

A responsive React/Vite portfolio with systems projects, the original blue-and-white palette and robot illustration, and an interactive terminal.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` creates the production site in `dist/`. `npm run preview` serves the build locally.

## Editing

- `src/App.jsx`: biography, projects, experience, skill groups, contact links, and terminal commands.
- `src/styles.css`: colors, typography, and responsive layout.
- `public/assets/Buzz.png`: the original robot illustration.

Project summaries come from Kelley’s resume. Add individual repository links when available.

The terminal is a whimsical little garden: `plant`, `fireflies`, `wish`, and `cloud` summon small text illustrations and playful messages. `help` lists commands and `clear` resets output. Logic lives in `src/terminal.js`; no server or shell access is involved.

The terminal sits below the introduction and expands with output. History remains until `clear` or a page reload; command input has no character cap.

## GitHub Pages

The site deploys from `main` through `.github/workflows/deploy.yml` to https://kelleyliang.github.io/kelley-portfolio/. In repository Settings → Pages, select GitHub Actions as the source. The Vite base path and image paths support this repository URL.
