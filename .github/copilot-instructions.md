# GitHub Copilot Instructions for Beer Events Project

## Project Overview
This is a SvelteKit web application for managing and displaying beer-related events. It features event listings, beer information, judging, leaderboards, and user authentication. The stack includes TypeScript, Drizzle ORM, Playwright, and Docker Compose.

## Key Technologies
- SvelteKit (frontend framework)
- TypeScript (type safety)
- Drizzle ORM (database access)
- Playwright (E2E testing)
- Vite (build tool)
- Docker Compose (development environment)
- ESLint (linting)
- Paraglide (i18n/messages)
- Lucia (authentication)
- @testing-library/svelte (testing library for Svelte)

## Main Structure
- `src/` — Main source code
  - `routes/` — SvelteKit routes (pages)
    - `events/`, `beers/`, `judging/`, `leaderboard/`, `demo/`
  - `lib/` — Shared libraries and utilities
    - `server/` — Server-side logic (auth, db)
    - `paraglide/` — Internationalization support
  - `stories/` — Storybook components and stories
- `messages/` — Localization files (en, sv)
- `e2e/` — End-to-end tests (Playwright)
- `static/` — Static assets
- `drizzle.config.ts` — Drizzle ORM configuration
- `docker-compose.yml` — Docker setup
- `vite.config.ts` — Vite configuration
- `package.json` — Project dependencies and scripts

## Copilot Usage Guidelines
- Follow SvelteKit conventions for routing and file structure but also try to organize files in feature slices.
- Organize code in a modular way and in feature slice directories.
- Use TypeScript for all new code.
- Write failing test first to follow TDD principles.
- Use @testing-library/svelte for testing behaviour in Svelte components.
- Use Drizzle ORM for all database interactions.
- Use Paraglide for internationalization and messages.
- Write E2E tests in the `e2e/` directory using Playwright.
- Use Lucia for authentication flows.
- Add new UI components and stories in `src/stories/`.
- Keep localization files updated in `messages/`.
- Use Docker Compose for local development when needed.

## Common Scripts
- `npm install` — Install dependencies
- `npm run dev` — Start development server
- `npm run test` or `npx playwright test` — Run tests
- `npm run build` — Build for production
- `docker-compose up` — Start full-stack environment

## Contribution Tips
- Write clear, concise commit messages.
- Add or update tests for new features.
- Keep code style consistent with ESLint rules.

---
This file provides Copilot and contributors with an overview and best practices for working in this repository.
