# Sequoia Landscapes Website

Ultra-premium, static-exportable website for Sequoia Landscapes.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
```

The production-ready static site is generated in `out/` and can be served by any static web server.

## GitHub Pages

The public site is deployed from `main` through `.github/workflows/deploy-pages.yml`:

`https://intelliflowtechnologies01.github.io/sequoia_landscapes_v1.1/`

The workflow supplies the repository base path during the static export so navigation, images and Next.js assets resolve correctly on GitHub Pages.

## Routes

- `/` — Home
- `/services/` — Capabilities and delivery framework
- `/gallery/` — Immersive visual gallery with lightbox viewing
- `/our-story/` — Brand story and design principles
- `/contact/` — Direct contact and static email enquiry handoff

## Content governance

- The supplied master logo is used without alteration.
- The current project imagery is labelled as design direction, not presented as verified case studies.
- Founder, client, award and numeric claims remain excluded until the business approves them.
- The contact form opens a prepared email in the visitor's email application; no data is stored or sent by the static website itself.

See `docs/PHASE_0_DISCOVERY_AND_BLUEPRINT.md` for the source review and implementation blueprint.
