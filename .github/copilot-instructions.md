# GitHub Copilot Instructions for Beer Events Project

## Project Overview
This is a SvelteKit web application for managing and displaying beer-related events. It features event listings, beer information, judging, leaderboards, and user authentication. The stack includes TypeScript, Drizzle ORM, Playwright, and Docker Compose.

## Key Technologies
- bun (JavaScript runtime and package manager)
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
- Use runes mode for SvelteKit to ensure proper type checking and autocompletion.
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

## Translations and localization Guidelines
- Use Paraglide for managing translations.
- Add new translations in the `messages/` directory.
- Follow the naming convention for translation files: `en.json`, `sv.json`, etc.
- Ensure all new strings are added to the appropriate translation files.
- Run `bun run build` after updating translations to ensure they are included in the build.

## Common Scripts
- `bun install` — Install dependencies
- `bun run dev` — Start development server
- `bun run test` —  Run all tests
- `bun run test:unit` - Run unit tests
- `bun run test:e2e` - Run end-to-end tests
- `bun run build` — Build for production
- `bun run db:start` — Start database with podman compose up

## Contribution Tips
- Write clear, concise commit messages.
- Add or update tests for new features.
- Keep code style consistent with ESLint rules.

---
This file provides Copilot and contributors with an overview and best practices for working in this repository.
