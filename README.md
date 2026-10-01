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

The terminal is a local systems playground: `schedule 2` simulates round-robin scheduling, `memory 8192` splits an address into a page and offset, and `race` / `race lock` compare shared-counter updates. `help` lists commands and `clear` resets output. Logic lives in `src/terminal.js`; no server or shell access is involved.

The terminal sits below the introduction and expands with output. History remains until `clear` or a page reload; command input has no character cap.
