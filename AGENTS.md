# AGENTS.md

## Project Overview
Personal portfolio website for Alex (web developer), built with React 19 + Vite 6.
Single-page app with hash-based routing between home and contact views.

## Tech Stack
- React 19, Vite 6, plain CSS (no Tailwind/preprocessor)
- No backend — contact form uses formsubmit.co AJAX to send emails, plus WhatsApp deep links
- No database

## Development
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
App runs on port 3000. Vite dev server with hot reload.

## Key Design Decisions
- Dark-only obsidian theme (#070B14) with violet (#6C5CFF) and teal (#22E3C5) accents
- Fonts: Bricolage Grotesque (headings) + Instrument Sans (body), loaded from Google Fonts
- Canvas particle network in hero, cursor glow effect, typewriter headline, tech marquee
- 3D tilt on service cards and project mockup, magnetic buttons, scroll-reveal animations
- All animations respect `prefers-reduced-motion`
- Hash routing: `#contact` shows the contact page, other hashes scroll to sections

## Contact Automation (preserved from original site)
- WhatsApp: `wa.me/40727316319` with formatted message
- Email: `formsubmit.co/ajax/alxsarbu29@gmail.com` (AJAX POST, no page reload)
- Form fields: name, contact, project type (select), details (textarea)
- Success state shows email confirmation + option to also send via WhatsApp

## Sandbox Configuration
- `vite.config.js` sets `server.allowedHosts: true` when `BASE44_PREVIEW_MODE=1` to allow the preview proxy host
- `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` passed bare from platform env
- No secrets required (no external API keys needed for boot)
