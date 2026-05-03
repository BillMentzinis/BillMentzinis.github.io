# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Personal website for Bill Mentzinis, hosted on GitHub Pages at https://billmentzinis.github.io.
Built with the [Astrofy](https://github.com/manuelernestog/astrofy) template on top of Astro.

## Stack
- **Framework:** Astro (static site generator)
- **Template:** Astrofy — provides About, CV timeline, and Projects sections with dark/light toggle
- **Hosting:** GitHub Pages (`BillMentzinis/BillMentzinis.github.io` repo)
- **Deploy:** GitHub Actions (auto-build on push to main); do not commit `dist/`

## Commands
```bash
npm run dev      # local dev server with hot reload at localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Architecture
Astrofy follows standard Astro conventions:
- `src/pages/` — file-based routing; `index.astro` = home/about, `cv.astro`, `projects/` etc.
- `src/content/` — Markdown/MDX content collections (blog posts, project entries, CV timeline entries)
- `src/components/` — reusable `.astro` components (nav, footer, cards, timeline)
- `src/layouts/` — page shell layouts wrapping page content
- `public/` — static assets served as-is (images, fonts, downloadable PDF resume)
- `src/config.ts` — site-wide config: name, bio, social links, nav items

Content is data-driven: add a Markdown file to the right collection folder and it appears on the page automatically. No need to edit component files for routine content updates.

## Key Conventions
- Dark mode is the default; Astrofy's theme toggle is built in — don't override it globally.
- Projects are manually curated (not auto-fetched from GitHub API) — add entries in `src/content/projects/`.
- Downloadable PDF resume goes in `public/` and is linked from the CV page.

## Decision Log
All architectural decisions and their justifications live in `personalWebsitePlan.txt`. Update that file whenever a significant choice is made — include what was decided, why, and any alternatives that were considered.
