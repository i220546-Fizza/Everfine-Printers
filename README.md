# EverfinePrinters

A premium, animated marketing site for **EverfinePrinters** — a printing, packaging, branding and
promotional-products company. Built with React, TypeScript, Vite, Tailwind CSS, Three.js /
React Three Fiber, GSAP and Framer Motion.

No fake company history, statistics, testimonials or team photos were invented. Anywhere real
information wasn't provided, the site uses clearly-marked editable placeholder content (see
**Content you should edit** below).

## Tech stack

- **React 19 + TypeScript + Vite** — app shell and tooling
- **Tailwind CSS v4** — design system, theme tokens in `src/index.css` (`@theme`)
- **Three.js + React Three Fiber + drei** — the 3D scenes (hero, wedding card, packaging box, business card flip, promotional objects)
- **GSAP (ScrollTrigger)** — scroll-scrubbed transitions (e.g. the hero scene receding as you scroll)
- **Framer Motion** — scroll reveals, hover/tilt micro-interactions, page transitions, the portfolio filter/masonry, modals
- **lucide-react** — iconography

## Project structure

```
src/
  assets/            local image assets (currently just leadership/ placeholder folder)
  components/
    layout/          Navbar, Footer, WhatsAppButton
    three/            All R3F scenes + CanvasStage (Suspense/ErrorBoundary/WebGL-fallback wrapper)
    ui/               Reusable primitives: Button, Modal, SectionHeading, ServiceCard,
                      ProductArt (line-art placeholder illustrations), LeadershipPhoto,
                      ProductTiltCard, StickerSheet, FormField, Reveal, Icon, SocialIcons...
  data/               All editable content lives here (see below) — no content is hardcoded in JSX
  hooks/              useTilt, useReducedMotion, useMediaQuery, useScrollSpy, useInViewOnce,
                      useWebGLSupport
  pages/
    Home.tsx          Assembles every section in the scroll-story order
  sections/            One component per homepage section (Hero, Services, Packaging, ...)
  utils/               cn, scrollTo, whatsapp link builder, gsap setup, form validation, color contrast
```

## Content you should edit

Everything content-related lives in `src/data/*.ts` — no need to touch component code to update
copy, add/remove a product or service, or change contact details.

| File | Controls |
| --- | --- |
| `data/site.ts` | Company info, tagline, **WhatsApp number**, phone, email, address, hours, social links, Google Maps embed URL |
| `data/services.ts` | Business printing services grid |
| `data/weddingEvents.ts` | Wedding & event stationery services |
| `data/promotionalProducts.ts` | Promotional products — set `enabled: false` on any item EverfinePrinters doesn't actually offer |
| `data/packaging.ts` | Packaging, labels/stickers, large-format service lists |
| `data/digitalOffset.ts` | Digital vs. offset printing copy |
| `data/products.ts` | The 12-item "Printed To Impress" showcase grid |
| `data/process.ts` | The 6-step "How It Works" timeline |
| `data/portfolio.ts` | Portfolio/case-study entries (category, description, printing type, material, finishing) |
| `data/leadership.ts` | Founder/CEO name, role, bio, photo path, LinkedIn |
| `data/about.ts` | Story / Mission / Vision / Values / Quality philosophy (all placeholders) |
| `data/whyChooseUs.ts` | "Why Choose Us" + homepage feature cards |
| `data/testimonials.ts` | **Placeholder** testimonials — replace with real reviews |
| `data/faq.ts` | FAQ questions & answers |
| `data/quoteOptions.ts` | Quote form dropdown options + artwork guidelines list |

Every service/product list item has an `enabled: boolean` — set it to `false` (or delete the
entry) to hide something EverfinePrinters doesn't offer, without touching any component.

### Leadership photos

Real photographs were not provided, so no faces were generated. Drop the real files in:

```
public/assets/leadership/founder.jpg   → Srafraz Ahmed Bhatti, Founder
public/assets/leadership/ceo.jpg       → Ashfaq Ahmad, Chief Executive Officer
```

JPG, PNG and WebP all work — just keep `data/leadership.ts`'s `photoSrc` extension in sync. Until
a real file exists, `LeadershipPhoto` automatically renders an elegant initials placeholder
instead of a broken image — never a generated face.

### WhatsApp number

Update `siteConfig.contact.whatsappNumber` in `src/data/site.ts` (digits only, international
format, no `+`). It powers both the floating WhatsApp button and the "Order via WhatsApp" quote
form button.

## Running locally

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build
npm run lint      # oxlint
npm run preview   # preview the production build
```

## Performance & responsiveness notes

- Every 3D scene is lazy-loaded (`React.lazy` + `Suspense`) and wrapped in `CanvasStage`, which
  also catches WebGL context errors (`ErrorBoundary`) and falls back to a lightweight static
  illustration (`ProductArt`) when WebGL isn't available at all.
- The hero scene reduces object count and disables shadows on mobile/tablet (`useIsMobile` /
  `useIsTablet`) and caps device pixel ratio.
- `prefers-reduced-motion` is respected globally: CSS animation/transition durations are
  clamped via a media query in `index.css`, Framer Motion is wrapped in
  `<MotionConfig reducedMotion="user">`, and every scroll-triggered 3D animation
  (`useReducedMotion`) jumps straight to its resting state instead of animating.
- No product/portfolio photography was available, so a consistent set of hand-drawn line-art
  "blueprint" illustrations (`ProductArt`) stands in for stock photography — swap these for real
  photography whenever it's available.

## Future backend integration (not implemented yet)

The frontend is structured so a backend can be added later without a rewrite:

- **Quote Requests** — `QuoteForm` already validates and structures form state
  (`src/utils/validation.ts`); the submit handler has a comment marking exactly where a
  `POST /api/quotes` call would go.
- **Products / Portfolio / Testimonials** — each currently lives in a typed `src/data/*.ts` array;
  swapping the static array for a `fetch`/React Query call is a drop-in change since components
  already consume these through their TypeScript interfaces.
- **Admin dashboard** — not built (per scope), but the data shapes above map directly onto the
  MongoDB collections it would manage (Products, Quote Requests, Portfolio, Testimonials, Users).
