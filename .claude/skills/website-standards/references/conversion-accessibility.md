# Conversion, Accessibility & Analytics — Next.js + Strapi

Read this when the goal is turning visitors into clients, or when building forms,
landing pages, or interactive UI. Traffic without conversion is wasted.

## Conversion — above-the-fold essentials

A visitor must instantly get three things:
- Clear value proposition: what you do + the benefit + for whom.
- One primary CTA, action-oriented ("Book a free strategy call," not "Submit").
- A supporting trust element (client logos, rating, or guarantee).

Manage this hero content in a Strapi **single type** (Homepage) so it's editable
without code, including the CTA label and target.

## Trust signals (critical for service businesses)

- **Case studies with numbers** — problem → action → measurable result. The single
  strongest sales tool. Model a `CaseStudy` content-type in Strapi with fields for
  client, challenge, solution, and quantified results.
- Testimonials with real names, photos, and companies (`Testimonial` content-type).
- Client/partner logos, awards, certifications.
- Team photos and bios — people buy from people.
- Clear contact details and a real address build legitimacy.

## Reduce friction

- Keep forms short — ask only what you truly need; each extra field lowers completion.
- Offer multiple contact options: form, WhatsApp, call, calendar booking.
- Repeat the CTA as the user scrolls long pages.
- Place social proof right next to CTAs and pricing.
- Confirm submissions with a real thank-you **route** (`/thank-you`) — needed for
  conversion tracking.

## High-converting landing-page structure

1. Hook (value proposition + CTA)
2. The problem you solve
3. Your solution & benefits (benefits, not just features)
4. Proof (case studies, testimonials, logos)
5. Process — what working with you looks like
6. Objection handling / FAQ (also great for FAQ JSON-LD)
7. Final strong CTA

Build these as components fed by a Strapi **dynamic zone** so marketers can
reorder sections without a developer.

## Form UX in Next.js

- The form itself is a small client component (`"use client"`) for validation and
  state; it POSTs to the Route Handler (see backend-security.md), which does the
  real work server-side.
- Show inline validation and a clear success/error state.
- On success, redirect to `/thank-you` and fire the conversion event there.
- Disable the submit button while pending; never lose the user's input on error.

## Accessibility (WCAG — target Level AA)

Accessible sites reach more people, rank better, and are increasingly a legal
requirement.

- Meaningful `alt` text on every informative image (pass real `alt` to `next/image`).
- Color contrast at least 4.5:1 for body text.
- Full keyboard navigation with visible focus states (don't remove focus outlines).
- Real `<label>`s on all form fields; clear, specific error messages tied to inputs.
- Logical heading order; use ARIA only where native HTML is not enough.
- Never rely on color alone to convey meaning.
- Captions/transcripts for video and audio.
- Test with a screen reader and tools like WAVE, axe, or Lighthouse a11y.

## Analytics & tracking (set up before launch)

- Install analytics — GA4 via `@next/third-parties` (`GoogleAnalytics`), or
  Vercel Analytics, or a privacy-friendly option (Plausible). `@next/third-parties`
  loads scripts efficiently without hurting performance.
- Connect Google Search Console — monitor keywords, clicks, indexing. Verify via a
  DNS record or the `verification` field in root `metadata`.
- Track **conversions as events**: form submit (on `/thank-you`), call clicks,
  booking, downloads.
- Set up goals/funnels to see where visitors drop off.
- Add heatmaps + session recording (Microsoft Clarity is free).
- Respect privacy: consent mode, anonymize where required.
- Review a simple dashboard weekly: traffic, top pages, conversion rate, leads.

### The improvement loop

Measure → find the biggest drop-off → form a hypothesis → change one thing →
measure again. This is how a good site becomes a great one.
