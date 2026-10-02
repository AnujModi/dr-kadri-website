# Dr. Kadri Website

A patient-facing website for **Carrollton Periodontics & Implant Dentistry**, built by **Anuj Modi** with React, TypeScript, and Vite.

The project brings practice information, treatment education, doctor and team profiles, and a locally hosted dental implant presentation into one responsive website.

## Run locally

Install **Node.js 22.13+ or 24 LTS** (Node 22 LTS recommended), then:

```bash
git clone https://github.com/AnujModi/dr-kadri-website.git
cd dr-kadri-website
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). If you download a ZIP, extract it and run the same npm commands from the folder containing `package.json`.

Dependency installation is required once before `npm run dev`. No backend, API keys, or `.env` file is required. All site images and videos are included. The media makes the repository roughly 316 MB before Git compression; allow time for the initial download.

For a repeatable install using the committed lockfile, use `npm ci` instead of `npm install`.

## Features

- Doctor and staff profiles, including portrait-and-biography layouts.
- Surgical and non-surgical treatment sections with in-page navigation.
- Dental implant presentation with 37 locally hosted chapters, English and Spanish education, and consultation mode.
- Video autoplay after opening the presentation or selecting a chapter; native playback controls remain available if a browser blocks autoplay.
- Native dialog keyboard handling, Escape-to-close, scroll locking, and focus restoration.
- Consistent typography, motion transitions, page metadata, sitemap, and service worker support.

## Stack

React 19 · TypeScript · Vite (Rolldown build) · Tailwind CSS 4 · React Router · Framer Motion

## Tests

```bash
npm test                    # Unit and component integration tests
npm run test:media          # Check local media paths, casing, and old-site dependencies
npm run lint                # ESLint
npm run build               # TypeScript checks and production build
npx playwright install chromium  # One-time browser installation
npm run test:e2e             # Desktop and mobile Chromium tests against dist
npm run check               # Run all checks, including build and browser tests
```

Build before running `test:e2e` on its own. Playwright starts the preview server automatically on port 4173; keep that port free. Tests cover treatment navigation, presentation mode and chapter changes, actual autoplay, keyboard focus, closing/reopening the dialog, team content, direct page routes, missing images, and unknown-route recovery.

GitHub Actions runs the complete check on every push and pull request, and can also be started manually from the Actions tab. Navigation tests click every primary link at six widths (375–1920px), every footer link, and every team subpage link. They also verify automatic install prompts stay suppressed on all public pages. These are real browser clicks, so obstructed links fail. When adding a page, update the shared route contract in `e2e/routes.ts` and add its visible navigation link; direct-load and popup checks reuse that contract.

Browser coverage currently uses desktop and mobile Chromium; Safari and Firefox are not included.

### Test conventions

Use sentence-style behavior names: `Given a scenario, when an action occurs, then an outcome follows`. This is the JavaScript equivalent of C# `GivenScenario_WhenAction_ThenOutcome` test methods. Keep setup, action, and assertions separated with `// Given`, `// When`, and `// Then` comments.

Keep one behavior per test. Use table-driven cases for the same behavior across routes, viewport sizes, or presentation modes. Use Playwright `test.step` for individual actions in a navigation journey so failures identify the affected route.

Shared browser helpers live in `e2e/helpers/`; shared React rendering helpers live in `tests/helpers/`. Extract repeated setup and domain assertions, but keep the action and expected outcome readable in the test itself. Use real clicks without `force` so inaccessible controls fail.

## Project layout

```text
src/components/     Shared UI and presentation player
src/pages/          Pages and treatment navigation
src/data/           Treatment copy, profiles, and presentation chapters
public/images/      Local photos and illustrations
public/videos/      Local treatment and presentation videos
tests/              Vitest unit and integration tests
e2e/                Playwright browser tests
scripts/            Media validation and optional import utility
.github/workflows/  Continuous integration
```

To edit practice content, start in `src/data/` and `src/pages/TeamStaff.tsx`. Media URLs are rooted at `/images/` or `/videos/` and map to `public/`.

## Production build

```bash
npm run build
npm run preview
```

The generated `dist/` folder is the deployment artifact for Cloudflare Pages. It is intentionally excluded from Git, along with dependencies, local environment files, upload ZIPs, editor settings, and test reports. Deploy at the domain root; for other hosts configure SPA route fallback to `index.html`. This project does not ship the previously rejected catch-all `_redirects` rule.

Analytics is optional. See `.env.example` if you want to configure it; never put private credentials in client-side `VITE_` variables.

## Media attribution

Practice photography, branding, clinical content, and the PBHS educational videos belong to their respective owners. This public repository showcases the website implementation; it does not grant redistribution rights to third-party media. The video player retains its PBHS attribution.
