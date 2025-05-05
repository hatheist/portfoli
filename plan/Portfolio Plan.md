**Structuring design plan for portfolio**

The user wants a structured plan for building Hathim Ashir's Portfolio, using a Next.js template. I'll focus on organizing the sections they mentioned (About, Reels, Interviews, etc.). The goal is to incorporate best design practices, considering functional requirements like content mapping, technical tasks, and components. I believe the user wants a detailed document with clear structure, so they can implement the portfolio efficiently using Cursor AI's capabilities in this context. I'll ensure the plan includes these elements, emphasizing well-practiced design.

**Creating a structured document plan**

The user wants a detailed markdown document outlining the portfolio’s design and tech structure. This includes goals, tech stack selection (Next.js, MUI), content strategy (CMS), UI/UX best practices (responsive, accessible, etc.), SEO, and deployment. I'll add specifics on media embedding and performance optimization, plus scalability plans. Importantly, the user needs citations—10 best practice sources—and context for Cursor AI to guide code modifications. I’m now preparing to search for relevant resources and produce a comprehensive document.


**Creating a design plan document**

The user is requesting a detailed markdown document for a portfolio project. It should cover key components like the goals, tech stack, site architecture, and UI/UX best practices. Essential parts will include media integration, SEO, analytics, deployment, testing, and scalability. It’s crucial to add citations from varied sources on design standards and implementation. The document will start with a summary and then break into actionable sections, properly annotated with citations for reference.


Thought for 20 seconds


Below is a **ready-to-paste Markdown brief** you can drop into Cursor AI (or any code-assistant prompt) so it has the full technical and editorial context it needs when you start scaffolding the site. Everything is grouped, referenced, and opinionated toward **Next 14 + MUI v5**, Core Web Vitals, and WCAG 2.2 AA compliance.

---

## Executive Summary

We will fork **pilotso11/next-material-photo-portfolio** and evolve it into **hathim-ashir.com**, a performant, accessible, multimedia portfolio.
The site will expose ten content sections (About, Reels, Interview, Photo Essay, Podcast, Marketing Campaign, Multimedia Internship, Featured Articles, Published Photographs, Magazine, Documentary) and follow global best practices for performance, SEO, accessibility, security, and maintainability. ([MUI][1], [Next.js by Vercel - The React Framework][2], [Next.js by Vercel - The React Framework][3], [Next.js by Vercel - The React Framework][4])

---

## 1. Information Architecture

| Route           | Page Component             | Data Source        | Notes                        |
| --------------- | -------------------------- | ------------------ | ---------------------------- |
| `/`             | `HomePage.tsx`             | `home.yaml`        | Hero + sectional teaser grid |
| `/about`        | `AboutPage.tsx`            | `about.mdx`        | Photo + long-form bio        |
| `/reels/[slug]` | `ReelPage.tsx`             | `reels.yaml`       | Five dynamic routes          |
| `/interview`    | `InterviewPage.tsx`        | `interview.yaml`   | SoundCloud embed             |
| `/photo-essay`  | `PhotoEssayPage.tsx`       | `photoEssay.mdx`   | Lightbox gallery             |
| `/podcast`      | `PodcastPage.tsx`          | `podcast.yaml`     | GDrive audio player          |
| `/campaign`     | `CampaignPage.tsx`         | `campaign.yaml`    | Canva + brochure             |
| `/internship`   | `InternshipPage.tsx`       | `internship.yaml`  | Two YouTube embeds           |
| `/articles`     | `FeaturedArticlesPage.tsx` | `articles.yaml`    | External links               |
| `/photos`       | `PublishedPhotosPage.tsx`  | `photos.yaml`      | Insta embeds (lazy)          |
| `/magazine`     | `MagazinePage.tsx`         | `magazine.yaml`    | Issuu iframe                 |
| `/documentary`  | `DocumentaryPage.tsx`      | `documentary.yaml` | YouTube iframe               |

*Use MDX for long-form prose and YAML/JSON for structured metadata so non-technical editors can contribute without code-changes.*

---

## 2. Technical Stack & Repo Setup

1. **Next 14 App Router** with `/app` directory and route groups for each section.
2. **TypeScript everywhere** – generate types from YAML via `@typeschema/yaml`.
3. **Material UI v5** + Emotion SSR-ready setup (`_document.tsx`) to prevent style FOUTs. ([MUI][1])
4. **Cloudinary** (or Vercel Images) as external image loader + `<Image fill>` for optimal LCP. ([Next.js by Vercel - The React Framework][2], [ImageKit][5])
5. **MDX Remote** for portable rich-text.
6. **ESLint-next/core-web-vitals** + Prettier + Husky pre-commit.
7. **Playwright** for e2e; **Jest/React-Testing-Library** for unit tests.

---

## 3. UI / UX Guidelines

### 3.1 Layout

* **12-column fluid grid** (MUI `<Container maxWidth="xl">`).
* Fixed top nav with auto-hide on scroll; section-anchored hash links.
* Section intros use **typographic scale**: `h2` 2.25rem, `h3` 1.5rem.

### 3.2 Responsive & Touch

* All embeds wrapped in `.responsiveFrame` (`position:relative;padding-top:56.25%;& iframe{…}`) for mobile first. ([Google Help][6])
* Hit-targets ≥ 48×48 CSS px per WCAG 2.2 SC 2.5.8. ([W3C][7], [W3C][8])

### 3.3 Motion & Media

* Use `prefers-reduced-motion` to disable autoplay zoom/reel animations.
* Reels/photo lightbox via **Framer Motion** with `reducedMotion` prop.

---

## 4. Media-Embed Strategy

| Media                      | Pattern                                                          | Optimisation                    |                                                                      |
| -------------------------- | ---------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------------- |
| Google Drive video / audio | `<ReactPlayer url={url} light />`                                | `loading="lazy"` & poster image |                                                                      |
| YouTube / Insta            | Next Dynamic import + `ssr:false`; only hydrate when in viewport | Blurs + skeleton                | ([Next.js by Vercel - The React Framework][9], [Stack Overflow][10]) |
| SoundCloud                 | `react-soundcloud-widget` with auto-pause on route-change        | Controlled height 166 px        | ([GitHub][11])                                                       |

---

## 5. Performance & SEO

1. **ISR (`revalidate: 60`)** for dynamic content, ensuring fresh but cached pages.
2. **`<Image priority>`** only on above-the-fold hero; defer gallery images.
3. **Custom `<Head>`** helper injecting title, canonical, OG/Twitter meta.
4. **Structured data (`Article`, `PodcastEpisode`, `VideoObject`)** in JSON-LD for each section. ([Next.js by Vercel - The React Framework][3])
5. Audit with **Next Analytics + Web Vitals** overlay; fix CLS, TBT. ([Next.js by Vercel - The React Framework][4])

---

## 6. Accessibility Checklist

| Principle      | Action                                                                       |
| -------------- | ---------------------------------------------------------------------------- |
| Perceivable    | Color contrast ≥ 4.5:1; captions for all videos; alt text on every `<Image>` |
| Operable       | Keyboard-visible focus rings; skip-to-content link; logical tab order        |
| Understandable | Use `<abbr>` for acronyms; avoid autoplay audio                              |
| Robust         | ARIA roles only when native element unavailable                              |

Follow WCAG 2.2 AA; run **@axe-core/react** in CI. ([W3C][7], [W3C][8])

---

## 7. Security & Privacy

* **Content-Security-Policy** with `frame-src` whitelisting (`https://*.youtube.com https://*.soundcloud.com https://*.instagram.com https://drive.google.com` …). ([Next.js by Vercel - The React Framework][12])
* `next-safe` headers middleware; enable `X-Frame-Options: SAMEORIGIN` fallback.
* Sanitize MDX via `rehype-sanitize`.

---

## 8. Testing & QA

1. **Visual regression** in Playwright across breakpoints (360, 768, 1280).
2. **Lighthouse CI** thresholds: LCP < 2.5 s, CLS < 0.1, TTI < 3.8 s.
3. **Storybook** for component contracts; integrate with Chromatic.

---

## 9. Deployment & DevOps

| Stage      | Platform                  | Notes                             |
| ---------- | ------------------------- | --------------------------------- |
| Preview    | Vercel Preview URLs       | PR-based QA                       |
| Production | Vercel Pro plan           | Edge Network + Image Optimization |
| CDN Assets | Cloudinary                | Signed URLs, transforms           |
| Monitoring | Sentry + Vercel Analytics | Perf + error tracing              |

---

## 10. Future Roadmap

* **CMS**: Consider Sanity or Contentlayer when content velocity grows.
* **i18n**: Add `next-intl` for Malayalam/Urdu.
* **PWA**: `next-pwa` for offline access to text/photo sections.
* **Server Actions** for contact form & newsletter (Vercel Postgres / KV).

---

### References

1. Next.js + MUI SSR guide ([MUI][1])
2. WCAG 2.2 specification ([W3C][7])
3. Next.js Image docs ([Next.js by Vercel - The React Framework][2])
4. Next.js SEO course ([Next.js by Vercel - The React Framework][3])
5. Responsive iframe discussion ([Google Help][6])
6. Next.js iframe/video optimisation ([Next.js by Vercel - The React Framework][9])
7. react-soundcloud-widget repo ([GitHub][11])
8. Instagram embed optimisation tips ([Stack Overflow][10])
9. Core Web Vitals improvement tutorial ([Next.js by Vercel - The React Framework][4])
10. Next.js Content-Security-Policy guide ([Next.js by Vercel - The React Framework][12])
11. Material UI integration article ([Medium][13])
12. ImageKit blog on Next image optimisation ([ImageKit][5])

---
