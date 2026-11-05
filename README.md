# Ace De Castro — Portfolio

A typography-led portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Warm white and charcoal themes, responsive layouts, and a small, deliberately straightforward codebase.

## Requirements

- Node.js 22 or newer (an actively supported LTS release is recommended)
- npm

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Next.js prints the actual address if that port is already in use.

## Commands

| Command                | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Development server with live reload           |
| `npm run typecheck`    | Strict TypeScript validation                  |
| `npm run build`        | Production build and static export to `out/`  |
| `npm run format`       | Format source and configuration with Prettier |
| `npm run format:check` | Check formatting without changing files       |

For the current static build, serve the `out/` directory with a static web server. A `start` script is intentionally omitted because `next start` cannot serve a static export.

## Structure

```text
src/
  app/
    layout.tsx              Shared document, metadata, header, footer, and themes
    page.tsx                Homepage composed from independent sections
    globals.css             Color tokens, Tailwind configuration, and base styles
    work/[slug]/page.tsx     Project pages generated from the project data
    not-found.tsx           Custom 404 page
    sitemap.ts              Generated sitemap
    robots.ts               Generated crawler configuration
  components/
    layout/                 Shared header and footer
    sections/               Homepage sections
    theme/                  The two client components for color themes
    ui/                     Small shared layout and visual primitives
  content/
    profile.ts              Personal details, links, skills, and navigation
    projects.ts             Typed project entries and detail-page content
    experience.ts           Company, position, and tenure years only
  lib/
    site.ts                 Canonical site URL
  types/
    portfolio.ts            Content contracts
```

## Update content

- Edit `src/content/profile.ts` to change personal details, navigation, skills, and social links.
- Edit `src/content/experience.ts` to add or update employment history. Each entry contains only a company, position, and tenure years.
- Add a `Project` record to `src/content/projects.ts` to create both a homepage project row and a statically generated `/work/your-slug/` page. Every project needs a unique URL-safe slug. Keep summaries and outcomes factual; omit technologies when they are not known.
- Edit `profile.resume` in `src/content/profile.ts` to update the Google Drive résumé link. The résumé is hosted externally; no PDF is bundled with the project.

The supplied CV is the source of the initial experience and project content. Update the current employer's tenure when needed; “Present” is taken from that CV.

## Add another page

Create `src/app/about/page.tsx`, for example:

```tsx
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1" tabIndex={-1}>
      <Container className="py-24">
        <h1 className="text-5xl font-semibold tracking-tight">About Ace</h1>
        <p className="mt-6 text-lg text-muted">Your page content goes here.</p>
      </Container>
    </main>
  );
}
```

The root layout supplies the header, footer, typeface, and theme automatically. Add a link in `src/content/profile.ts` and an entry to `src/app/sitemap.ts` when appropriate. Keep reusable page sections in `components/`, and keep content out of layout components.

Server Components are the default. Add `"use client"` only to components that need browser state or event handlers. The portfolio currently needs client code only for theme support.

## Design and accessibility

- Semantic color tokens live in `src/app/globals.css`. Change the light and dark palettes there instead of editing individual components.
- Tailwind CSS v4 uses the PostCSS plugin and CSS-first configuration; no `tailwind.config.js` is required.
- The variable Inter typeface is self-hosted through `next/font/local`; builds do not fetch fonts from Google.
- The initial theme follows the operating system. A visitor's explicit toggle preference persists in localStorage through `next-themes`.
- Navigation, theme control, project links, and the skip link are keyboard accessible with visible focus styles.
- Motion respects the visitor's reduced-motion setting.

## Deploy

The project is a standard Next.js application configured for a static export. `npm run build` emits `out/`, which can be deployed to a static host. Nested routes use trailing slashes so hosts can serve their `index.html` files directly.

For a custom domain, copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_SITE_URL`, and rebuild. This updates canonical URLs, the sitemap, and social metadata.

To add server actions, authentication, or request-time data later, remove `output: "export"` from `next.config.ts` and use a compatible Next.js server host. Existing page and component organization can stay in place. Add `"start": "next start"` to the package scripts and configure that host to use `npm run build` and `npm start`.

`.openai/hosting.json` contains the current private Sites deployment identity and points at `out/`. It is deployment configuration, not application logic.

## Dependencies

Next.js 16.4.5 (Active LTS line), React 19.3.1, and Tailwind CSS 4.3.4 were verified against the npm registry when this project was created. `package-lock.json` makes installs reproducible. Review release notes and use your normal dependency update process to apply future updates.
