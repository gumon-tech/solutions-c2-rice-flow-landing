# Rice Flow — Landing Site

Marketing and product landing site for **Rice Flow**, a digital operations platform for rice mill monitoring, alerting, and workflow management, developed by **C2 TECH COMPANY LIMITED**.

## Tech Stack

- **Framework** — Next.js 15 App Router (static export)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v3
- **Package Manager** — pnpm
- **Localisation** — Custom locale routing (`/en`, `/th`), no external i18n library

## Project Structure

```
app/
  layout.tsx              Root layout, fonts, global metadata
  page.tsx                Redirects to /en
  [locale]/               Localised pages (en, th)
    layout.tsx
    page.tsx              Home
    solution/page.tsx
    features/page.tsx
    architecture/page.tsx
    contact/page.tsx
    policy/page.tsx       Privacy Policy (Apple App Store / Google Play review)
  policy/page.tsx         Redirects /policy → /en/policy
components/
  sections/               Page-level section components
  ui/                     Reusable UI primitives
lib/
  i18n.ts                 Locale constants and helpers
  site-copy.ts            All copy for both locales (en, th)
  metadata.ts             OG/Twitter metadata helpers
  types.ts                Shared TypeScript types
public/
  brand/                  Logo assets
  images/                 Photos and OG images
```

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Building

```bash
pnpm build      # Outputs to /out (static export)
pnpm start      # Preview production build
```

The project outputs as a fully static site (`output: "export"` in `next.config.ts`).

## Localisation

All copy lives in `lib/site-copy.ts`. Each locale (`en`, `th`) has its own dictionary object. Adding or editing copy only requires updating that file — no JSX changes needed.

Available locales: **English** (`/en`) · **Thai** (`/th`). Default locale is `en`.

## Pages

| Route                    | Description                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| `/`                      | Redirects to `/{defaultLocale}`                                      |
| `/{locale}`              | Home — hero, problem, value, platform, capabilities, principles, CTA |
| `/{locale}/solution`     | Solution overview                                                    |
| `/{locale}/features`     | Core capabilities detail                                             |
| `/{locale}/architecture` | System architecture                                                  |
| `/{locale}/contact`      | Contact / request demo form                                          |
| `/{locale}/policy`       | Privacy Policy (public — for app store review)                       |

## Deployment

The build output is a static folder (`/out`) suitable for any static host (Vercel, Netlify, S3/CloudFront, etc.).

- Confirm `metadataBase` URL in `app/layout.tsx` matches the production domain before deploying.
- See [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) for pre-launch verification steps.

## Contact

**C2 TECH COMPANY LIMITED** · hello@riceflow.app
