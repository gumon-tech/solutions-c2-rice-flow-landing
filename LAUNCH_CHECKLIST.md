# Rice Flow Launch Checklist

## Brand And Metadata
- Confirm `https://riceflow.gumon.dev` in [`app/layout.tsx`](/Users/komphet/dev/solutions-c2-rice-flow-landing/app/layout.tsx) is the final production domain.
- Confirm the final company contact email and CTA links in [`lib/site-copy.ts`](/Users/komphet/dev/solutions-c2-rice-flow-landing/lib/site-copy.ts).
- Review OG previews for `/en` and `/th` using the final deployed URL.
- Verify browser tab icon, Apple touch icon, and manifest behavior on real devices.

## Copy Review
- Finalize which product terms stay in English across Thai pages: `Control Room`, `Web`, `Mobile`, `IoT`.
- Recheck all CTA labels and form text with sales or presales stakeholders.
- Confirm no internal wording remains, especially around architecture, product mockups, and partner/service language.

## Functional QA
- Test all routes in both locales: `/en`, `/th`, `/solution`, `/features`, `/architecture`, `/contact`.
- Check header navigation, locale switching, and mobile menu behavior on phone and tablet widths.
- Submit the contact form in both locales and verify success and validation states.
- Review sticky sections and product mockups at small, medium, and large breakpoints.

## Content And Assets
- Replace placeholder email addresses and any demo-only copy with real launch values.
- Confirm all local image assets are the approved versions and licenses are documented in [`public/images/SOURCES.md`](/Users/komphet/dev/solutions-c2-rice-flow-landing/public/images/SOURCES.md).
- Review logo usage in header, footer, OG images, and browser icons for consistency.

## Deployment Readiness
- Run a final production build before deploy.
- Validate environment-specific settings if contact handling is connected to real services.
- Check page titles, descriptions, and social previews after deployment.
- Take final screenshots for desktop and mobile as launch references.
