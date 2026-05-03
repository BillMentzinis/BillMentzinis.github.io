# Personal Website — Claude Guidance

## Project Overview
Personal website for Bill Mentzinis, hosted on GitHub Pages at https://billmentzinis.github.io.

## Stack
- **Framework:** Astro (static site generator)
- **Hosting:** GitHub Pages (`BillMentzinis/BillMentzinis.github.io` repo)
- **Deploy:** GitHub Actions (auto-build on push to main)

## Decision Log
All architectural choices and their justifications are documented in `personalWebsitePlan.txt`.
Update that file whenever a new significant choice is made during development.

## Dev Workflow
1. Run `npm run dev` for local development (hot reload at localhost:4321)
2. Push to `main` branch to trigger GitHub Actions build and deploy
3. Live site updates at https://billmentzinis.github.io within ~1 minute of push

## Key Conventions
- Keep content changes in `src/content/` or `src/pages/`
- Static assets (images, fonts) go in `public/`
- Do not commit build output (`dist/`) — GitHub Actions handles the build
