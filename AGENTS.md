# Base44 Dev Environment

## Project
Vite 6 + React 19 single-page frontend (portfolio / link-in-bio site, Romanian language). No backend, no database, no external services.

## Running
- `docker compose -f docker-compose.base44.yml up -d` — starts the Vite dev server on host port 3000 (container port 5173).
- Source is bind-mounted; edits hot-reload via Vite HMR.
- `node_modules` lives in a named volume so `npm install` only runs on first boot.

## Verifying
- `curl -s http://localhost:3000/` should return the HTML with Vite's `@vite/client` script tag.
- Container healthcheck probes `localhost:5173/` inside the container.

## Notes
- `vite.config.js` already has `host: true` and polling-based file watching (needed for bind mounts).
- `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` is passed through from the platform env so Vite accepts the preview's external hostname.
