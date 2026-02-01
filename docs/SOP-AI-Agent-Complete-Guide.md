# Illuminious Website - Complete AI Agent Operations Manual

> **Purpose:** This document is a comprehensive, standalone reference that enables ANY AI agent
> (with zero prior context about this project) to understand the entire codebase, make changes,
> deploy locally, and push to GitHub. Every decision tree, every gotcha, every file relationship
> is documented here. Follow this exactly.

---

## Table of Contents

1. [Project Identity & Overview](#1-project-identity--overview)
2. [Tech Stack Reference](#2-tech-stack-reference)
3. [Complete File Architecture](#3-complete-file-architecture)
4. [Brand Design System](#4-brand-design-system)
5. [Routing System](#5-routing-system)
6. [Page Anatomy & Patterns](#6-page-anatomy--patterns)
7. [Component Reference](#7-component-reference)
8. [Server & Backend](#8-server--backend)
9. [Git Workflow & Branching Strategy](#9-git-workflow--branching-strategy)
10. [Environment Setup (AI Agent)](#10-environment-setup-ai-agent)
11. [Environment Setup (Human on WSL/Windows)](#11-environment-setup-humanwsl-on-windows)
12. [Common Task Decision Trees](#12-common-task-decision-trees)
13. [Known Pitfalls & Gotchas](#13-known-pitfalls--gotchas)
14. [Verification Checklist](#14-verification-checklist)

---

## 1. Project Identity & Overview

- **Company:** Illuminious LLC
- **Incorporated:** Delaware, USA
- **Headquarters:** Palo Alto, California
- **Industry:** Electronics Manufacturing Services (EMS)
- **Business Model:** "China Plus Two" strategy - US headquarters + Hong Kong/Shenzhen engineering + Indonesia mass production
- **Repository:** `https://github.com/tudsds/illuminious-web`
- **Main Branch:** `main`
- **Official Phone:** +1 424-626-3312
- **Google Tag Manager ID:** GTM-TV3WNHSZ

### What This Website Does

A corporate marketing website for Illuminious LLC. It is NOT an e-commerce site, NOT a web app with user accounts (for public visitors). It showcases:
- Manufacturing services (NPI, PCBA, Box Build, Injection Molding, Supply Chain)
- Industry focus areas (IoT, Consumer, Automotive, Medical)
- Company capabilities (Quality, IoT Specialization)
- Factory tour information
- Case studies
- Blog & News (CMS-backed, requires database)
- Contact form (CMS-backed, requires database)
- Startups Program (cyberpunk-themed special page)

### Key Business Sensitivities

**CRITICAL:** The website positioning emphasizes Illuminious as a **US company**. When editing copy:
- Always refer to it as a US company, not a Chinese company
- Use "Asia Pacific" or "Shenzhen" for manufacturing locations, not "China" in prominent headlines
- Use "tariff optimization" or "cost-optimized" rather than "0% tariff" or "tariff-free" in prominent places
- The legal entity is US-based; manufacturing partners are in Asia
- IP protection under US law is a key selling point

---

## 2. Tech Stack Reference

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.x | UI framework |
| TypeScript | 5.9.x | Type safety |
| Vite | 7.x | Build tool & dev server |
| Tailwind CSS | 4.x | Utility-first CSS |
| wouter | 3.x | Client-side routing (NOT react-router) |
| framer-motion | 12.x | Animations |
| Shadcn UI | (via Radix) | Component library (60+ components in `ui/` folder) |
| lucide-react | 0.453 | Icon library |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Express.js | 4.x | HTTP server |
| tRPC | 11.x | Type-safe API layer |
| Drizzle ORM | 0.44.x | Database ORM |
| MySQL | (external) | Database (optional for dev - lazy connection) |
| jose | 6.x | JWT authentication |

### Key Conventions
- **Routing library is `wouter`**, NOT `react-router`. Use `<Link href="...">` and `useLocation()`.
- **Import aliases:** `@/` = `client/src/`, `@shared/` = `shared/`, `@assets/` = `attached_assets/`
- **Package manager:** `pnpm` (version 10.x). Fallback: `npm --legacy-peer-deps`
- **No database required for frontend development.** The server uses lazy DB connection.

---

## 3. Complete File Architecture

```
illuminious-web/
|
|-- package.json                    # Dependencies, scripts: dev, build, start, check
|-- vite.config.ts                  # Vite config with path aliases
|-- tsconfig.json                   # TypeScript config
|-- drizzle.config.ts               # Drizzle ORM database config
|-- .env                            # (gitignored) Environment variables
|
|-- client/                         # ===== FRONTEND =====
|   |-- index.html                  # HTML entry point (contains GTM script)
|   |-- public/
|   |   |-- images/                 # All static images (referenced as /images/filename.png)
|   |   |   |-- illuminious-logo-blue.png    # Logo for light backgrounds
|   |   |   |-- illuminious-logo-white.png   # Logo for dark backgrounds
|   |   |   |-- hero-global-supply-chain.png # Homepage hero image
|   |   |   |-- hero-ai-hardware.png         # Alternative hero
|   |   |   |-- about-*.png                  # About page images (4 files)
|   |   |   |-- service-*.png                # Service page images (8 files)
|   |   |   |-- industry-*.png               # Industry page images (3 files)
|   |   |   |-- ai-*.png                     # AI product images for Startups (6 files)
|   |   |   |-- blog-tech.png                # Blog placeholder image
|   |   |   |-- news-industry.png            # News placeholder image
|   |   |   |-- case-study-hero.png          # Case studies hero
|   |   |   |-- factory-tour-hero.png        # Factory tour hero
|   |   |   |-- startup-*.png                # Startups page images (2 files)
|   |   |   |-- future-factory-logo.png      # Future Factory logo
|   |   |   |-- ref-*.jpg                    # Reference product photos (4 files)
|   |
|   |-- src/
|       |-- main.tsx                # React entry point (renders App)
|       |-- App.tsx                 # Router - ALL routes defined here
|       |-- index.css               # Global styles, brand colors, animations
|       |-- const.ts                # Shared constants
|       |
|       |-- pages/                  # ===== PAGE COMPONENTS (one per route) =====
|       |   |-- Home.tsx            # /
|       |   |-- About.tsx           # /about
|       |   |-- Services.tsx        # /services
|       |   |-- Industries.tsx      # /industries
|       |   |-- Capabilities.tsx    # /capabilities
|       |   |-- FactoryTour.tsx     # /factory-tour
|       |   |-- CaseStudies.tsx     # /case-studies
|       |   |-- CaseStudyDetail.tsx # /case-studies/:slug
|       |   |-- News.tsx            # /news
|       |   |-- NewsDetail.tsx      # /news/:slug
|       |   |-- Blog.tsx            # /blog
|       |   |-- BlogDetail.tsx      # /blog/:slug
|       |   |-- Startups.tsx        # /startups (cyberpunk theme)
|       |   |-- Contact.tsx         # /contact
|       |   |-- ThankYou.tsx        # /thank-you
|       |   |-- NotFound.tsx        # /404 and catch-all
|       |   |-- ComponentShowcase.tsx # (dev only)
|       |   |
|       |   |-- services/           # Service sub-pages
|       |   |   |-- NPI.tsx         # /services/npi-engineering
|       |   |   |-- PCBA.tsx        # /services/pcb-assembly
|       |   |   |-- BoxBuild.tsx    # /services/box-build
|       |   |   |-- Injection.tsx   # /services/injection-molding
|       |   |   |-- SupplyChain.tsx # /services/supply-chain
|       |   |   |-- (legacy files: Assembly, DFM, EMS, Logistics, Molding, ODM, OEM, PCB, Packaging, Prototyping, Testing)
|       |   |
|       |   |-- industries/         # Industry sub-pages
|       |   |   |-- IoT.tsx         # /industries/iot
|       |   |   |-- Consumer.tsx    # /industries/consumer
|       |   |   |-- Automotive.tsx  # /industries/automotive
|       |   |   |-- Medical.tsx     # /industries/medical
|       |   |
|       |   |-- capabilities/       # Capability sub-pages
|       |       |-- Quality.tsx     # /capabilities/quality
|       |       |-- IoTSpecialization.tsx # /capabilities/iot
|       |
|       |-- components/             # ===== SHARED COMPONENTS =====
|       |   |-- Header.tsx          # Site header with mega menu navigation
|       |   |-- Footer.tsx          # Site footer with office locations
|       |   |-- FloatingContact.tsx # Floating contact button (bottom-right)
|       |   |-- SEO.tsx             # <head> meta tags component
|       |   |-- ServicePageTemplate.tsx # Generic template (used by some service pages)
|       |   |-- ErrorBoundary.tsx   # React error boundary
|       |   |-- Map.tsx             # Google Maps component
|       |   |-- AIChatBox.tsx       # AI chat widget
|       |   |-- ui/                 # 60+ Shadcn UI primitives (DO NOT EDIT unless necessary)
|       |       |-- button.tsx, card.tsx, dialog.tsx, accordion.tsx, ...
|       |
|       |-- contexts/
|       |   |-- ThemeContext.tsx     # Light/dark theme context
|       |
|       |-- hooks/
|       |   |-- useScrollAnimation.ts  # Intersection Observer for scroll animations
|       |   |-- useMobile.tsx          # Mobile breakpoint detection
|       |   |-- useComposition.ts      # Input composition state
|       |   |-- usePersistFn.ts        # Persistent function reference
|       |
|       |-- lib/
|           |-- trpc.ts             # tRPC client setup
|           |-- utils.ts            # Utility functions (cn() for classnames)
|
|-- server/                         # ===== BACKEND =====
|   |-- _core/
|   |   |-- index.ts               # Server entry point (Express + Vite)
|   |   |-- context.ts             # tRPC context (req/res)
|   |   |-- trpc.ts                # tRPC initialization
|   |   |-- vite.ts                # Vite dev middleware setup
|   |   |-- cookies.ts             # Cookie utilities
|   |   |-- env.ts                 # Environment variable access
|   |   |-- oauth.ts               # OAuth routes (Manus platform - can ignore)
|   |   |-- sdk.ts                 # SDK utilities
|   |   |-- imageGeneration.ts     # Image generation service
|   |   |-- llm.ts                 # LLM integration
|   |   |-- map.ts                 # Google Maps API
|   |   |-- notification.ts        # Notification service
|   |   |-- voiceTranscription.ts  # Voice transcription
|   |   |-- systemRouter.ts        # System health routes
|   |   |-- dataApi.ts             # Data API helpers
|   |
|   |-- routers.ts                 # ALL tRPC API routes (admin, posts, contact)
|   |-- db.ts                      # Database connection (lazy - works without DB)
|   |-- storage.ts                 # File storage (S3)
|
|-- shared/                         # Shared types between client/server
|-- drizzle/                        # Database schema definitions
|-- docs/                           # Documentation files
|-- patches/                        # pnpm patches (wouter)
```

### Legacy Files (exist but NOT routed)

These files exist in `client/src/pages/services/` but have NO route in `App.tsx`:
`Assembly.tsx`, `DFM.tsx`, `EMS.tsx`, `Logistics.tsx`, `Molding.tsx`, `ODM.tsx`, `OEM.tsx`, `PCB.tsx`, `Packaging.tsx`, `Prototyping.tsx`, `Testing.tsx`

**Do NOT modify these files** unless explicitly asked. They are remnants of an earlier site structure.

---

## 4. Brand Design System

### Color Palette

All brand colors are defined as CSS custom properties in `client/src/index.css` (lines 20-35):

```css
:root {
  --illuminious-navy: #132843;   /* Darkest - backgrounds, headings */
  --illuminious-blue: #3966A2;   /* Primary - buttons, accents */
  --illuminious-sky:  #6191D3;   /* Secondary - highlights, hover */
  --illuminious-light: #D6DEEE;  /* Lightest - light backgrounds, borders */
  --illuminious-white: #F8F6F6;  /* Near-white - page backgrounds */
}
```

### Tailwind Utility Classes (Custom)

These are defined in `client/src/index.css` (lines 221-268):

| Class | CSS | Use Case |
|-------|-----|----------|
| `bg-illuminious-navy` | `background-color: #132843` | Dark section backgrounds |
| `bg-illuminious-blue` | `background-color: #3966A2` | Button backgrounds |
| `bg-illuminious-sky` | `background-color: #6191D3` | Accent backgrounds |
| `bg-illuminious-light` | `background-color: #D6DEEE` | Light section backgrounds |
| `text-illuminious-navy` | `color: #132843` | Headings on light backgrounds |
| `text-illuminious-blue` | `color: #3966A2` | Accent text, links |
| `text-illuminious-sky` | `color: #6191D3` | Highlight text |
| `text-illuminious-light` | `color: #D6DEEE` | Text on dark backgrounds (with opacity) |
| `gradient-illuminious` | navy->blue->sky gradient | Hero sections |

### Text Color Decision Tree

```
Is the background DARK (navy, blue, gradient)?
|
|-- YES: Use one of these:
|   |-- Headings: text-white
|   |-- Body text: text-white (previously text-illuminious-light/80 - CHANGED to text-white)
|   |-- Secondary text: text-white (previously text-illuminious-light/70 - CHANGED to text-white)
|   |-- Accent text: text-illuminious-sky
|   |-- NEVER use text-muted-foreground on dark backgrounds (it's dark gray = invisible)
|
|-- NO (background is white, light, or illuminious-light):
    |-- Headings: text-illuminious-navy
    |-- Body text: text-muted-foreground
    |-- Accent text: text-illuminious-blue
    |-- NEVER use text-white on light backgrounds (invisible)
```

### CRITICAL COLOR RULE

**All text on `bg-illuminious-navy` backgrounds MUST use `text-white` for body/description text.**

Previously, many pages used `text-illuminious-light/70` or `text-illuminious-light/80` (which is #D6DEEE at 70-80% opacity - a washed-out grayish appearance). These were ALL changed to `text-white` across the entire site. If you add new content on dark backgrounds, use `text-white`, NOT `text-illuminious-light/XX`.

### Cyberpunk Theme (Startups page ONLY)

The `/startups` page uses a completely different color system:

```css
--cyber-black: #0a0a0f;
--cyber-purple: #8B5CF6;
--cyber-cyan: #00D4FF;
--cyber-pink: #FF00FF;
--cyber-green: #00FF88;
```

**These colors are ONLY for the Startups page.** Do not use them anywhere else.

### Typography

| Font | Usage | Defined In |
|------|-------|-----------|
| `Inter` | Body text, paragraphs | `--font-sans` (index.css line 6-11) |
| `Space Grotesk` | Headings (h1-h6) | `--font-heading` (index.css line 13-18) |

Headings automatically use Space Grotesk via the CSS rule on line 162-165.

### Logo Usage

| File | Background | Use In |
|------|-----------|--------|
| `illuminious-logo-white.png` | Dark backgrounds | Header (scrolled on home), Footer, Startups |
| `illuminious-logo-blue.png` | Light backgrounds | Header (default on most pages) |

The Header component (`Header.tsx`) handles logo switching automatically based on scroll position and current page.

---

## 5. Routing System

All routes are defined in `client/src/App.tsx` using `wouter` (NOT react-router):

```tsx
// wouter syntax:
<Route path="/url-path" component={ComponentName} />
```

### Complete Route Map

| URL | Component | File |
|-----|-----------|------|
| `/` | Home | `pages/Home.tsx` |
| `/about` | About | `pages/About.tsx` |
| `/services` | Services | `pages/Services.tsx` |
| `/services/npi-engineering` | ServiceNPI | `pages/services/NPI.tsx` |
| `/services/pcb-assembly` | ServicePCBA | `pages/services/PCBA.tsx` |
| `/services/box-build` | ServiceBoxBuild | `pages/services/BoxBuild.tsx` |
| `/services/injection-molding` | ServiceInjection | `pages/services/Injection.tsx` |
| `/services/supply-chain` | ServiceSupplyChain | `pages/services/SupplyChain.tsx` |
| `/factory-tour` | FactoryTour | `pages/FactoryTour.tsx` |
| `/case-studies` | CaseStudies | `pages/CaseStudies.tsx` |
| `/case-studies/:slug` | CaseStudyDetail | `pages/CaseStudyDetail.tsx` |
| `/industries` | Industries | `pages/Industries.tsx` |
| `/industries/iot` | IndustryIoT | `pages/industries/IoT.tsx` |
| `/industries/consumer` | IndustryConsumer | `pages/industries/Consumer.tsx` |
| `/industries/automotive` | IndustryAutomotive | `pages/industries/Automotive.tsx` |
| `/industries/medical` | IndustryMedical | `pages/industries/Medical.tsx` |
| `/capabilities` | Capabilities | `pages/Capabilities.tsx` |
| `/capabilities/quality` | CapabilitiesQuality | `pages/capabilities/Quality.tsx` |
| `/capabilities/iot` | CapabilitiesIoT | `pages/capabilities/IoTSpecialization.tsx` |
| `/news` | News | `pages/News.tsx` |
| `/news/:slug` | NewsDetail | `pages/NewsDetail.tsx` |
| `/blog` | Blog | `pages/Blog.tsx` |
| `/blog/:slug` | BlogDetail | `pages/BlogDetail.tsx` |
| `/startups` | Startups | `pages/Startups.tsx` |
| `/contact` | Contact | `pages/Contact.tsx` |
| `/thank-you` | ThankYou | `pages/ThankYou.tsx` |
| `/404` | NotFound | `pages/NotFound.tsx` |
| `*` (catch-all) | NotFound | `pages/NotFound.tsx` |

### Adding a New Route

1. Create file: `client/src/pages/YourPage.tsx`
2. Add import in `App.tsx`: `import YourPage from "./pages/YourPage";`
3. Add route inside `<Switch>`: `<Route path="/your-url" component={YourPage} />`
4. Add link in Header mega menu (`Header.tsx` navItems array) if needed
5. Add link in Footer (`Footer.tsx` footerLinks object) if needed

---

## 6. Page Anatomy & Patterns

### Standard Page Structure

Every page follows this exact pattern:

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";

export default function PageName() {
  return (
    <>
      <SEO title="..." description="..." keywords="..." url="/page-url" />
      <Header />

      {/* Hero Section - always first */}
      <section className="relative pt-32 pb-20 [background-class]">
        <div className="container">
          {/* Hero content */}
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 md:py-32 [background-class]">
        <div className="container">
          {/* Section content */}
        </div>
      </section>

      {/* CTA Section - always last before footer */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          {/* CTA content - all text-white */}
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
```

### Section Background Alternation Pattern

Pages alternate section backgrounds for visual rhythm:
```
Hero:     gradient-illuminious OR bg-illuminious-navy (dark)
Section:  bg-white (light)
Section:  bg-illuminious-light/30 (slight tint)
Section:  bg-illuminious-navy (dark)
Section:  bg-white (light)
CTA:      bg-illuminious-navy (dark)
```

### AnimatedSection Pattern

Almost every page defines this helper at the top:

```tsx
function AnimatedSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

This is used to wrap every section for scroll-triggered fade-in animation.

### Data-Driven Content Pattern

Most pages define data as arrays at the top of the file, then render them with `.map()`:

```tsx
// Data definition (top of file)
const features = [
  { title: "Feature 1", description: "..." },
  { title: "Feature 2", description: "..." },
];

// Rendering (in JSX)
{features.map((feature, index) => (
  <AnimatedSection key={feature.title} delay={index * 0.1}>
    <div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  </AnimatedSection>
))}
```

**To change text content, look for the data arrays at the TOP of the file first, NOT in the JSX.**

### Service Sub-Page Pattern (NPI, PCBA, BoxBuild, Injection, SupplyChain)

These pages all follow an identical structure:

1. **Data arrays at top:** `features`, `specs`, `process`, `faqs`
2. **Hero section** with gradient background
3. **Quick Stats bar** on `bg-illuminious-navy` (spec labels use `text-white`)
4. **Features grid**
5. **Process steps** (numbered)
6. **Benefits section**
7. **Industry-specific section** (dark background)
8. **FAQ accordion**
9. **CTA section** on `bg-illuminious-navy` (all `text-white`)

### CTA Section Pattern (EVERY page has this)

```tsx
<section className="py-20 bg-illuminious-navy">
  <div className="container">
    <AnimatedSection className="text-center max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
        CTA Heading
      </h2>
      <p className="text-lg text-white mb-8">
        CTA description text.
      </p>
      <Button asChild size="lg" className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8">
        <Link href="/contact">
          Contact Us <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </Button>
    </AnimatedSection>
  </div>
</section>
```

---

## 7. Component Reference

### Header (`components/Header.tsx`)

- **Mega Menu:** Defined in `navItems` array (line 8-80+). Each item can have `megaMenu: true` with `columns` array.
- **Logo Logic:** Automatically switches between white/blue logo based on page and scroll position.
- **Mobile:** Hamburger menu with slide-out panel.
- **Sticky:** Fixed to top with backdrop blur on scroll.

To add a nav item: modify the `navItems` array. For mega menu items, follow the existing column/items structure.

### Footer (`components/Footer.tsx`)

- **Office locations:** Defined in `globalOffices` array (line 4-9).
- **Links:** Defined in `footerLinks` object (line 11-28).
- **Cyberpunk variant:** Automatically applies dark cyberpunk styling on `/startups` page.
- **Contact info:** Company phone and email are hardcoded in the JSX.

### SEO (`components/SEO.tsx`)

Every page must include:
```tsx
<SEO
  title="Page Title | Illuminious"
  description="150-160 char description"
  keywords="comma, separated, keywords"
  url="/page-path"
/>
```

### FloatingContact (`components/FloatingContact.tsx`)

Fixed-position contact button in bottom-right corner. Included on every page. No configuration needed.

### ServicePageTemplate (`components/ServicePageTemplate.tsx`)

A generic template that can be used for service pages. However, the current 5 active service sub-pages (NPI, PCBA, BoxBuild, Injection, SupplyChain) each have their own custom layouts and do NOT use this template. This template exists as a fallback for simpler service pages.

---

## 8. Server & Backend

### Entry Point: `server/_core/index.ts`

```
Express app -> body parser -> OAuth routes -> tRPC API -> Vite (dev) or Static (prod)
```

- **Dev mode:** `NODE_ENV=development` - starts Vite dev server with HMR
- **Prod mode:** `NODE_ENV=production` - serves static files from `dist/public/`
- **Port:** Defaults to 3000, auto-increments to 3020 if busy

### API Routes: `server/routers.ts`

All API routes use tRPC. Key routers:

| Router | Endpoints | Auth Required |
|--------|-----------|---------------|
| `admin.login` | POST login | No |
| `admin.me` | GET current admin | Cookie |
| `admin.createAdmin` | POST new admin | Super admin |
| `posts.list` | GET posts by type | No |
| `posts.create` | POST new post | Bypassed (testing) |
| `posts.update` | PUT update post | Bypassed (testing) |
| `contact.submit` | POST contact form | No |
| `contact.list` | GET submissions | Admin cookie |

**IMPORTANT:** Post creation/update/delete currently has `bypassAuth = true` for testing. This should be changed to `false` in production.

### Database: `server/db.ts`

- Uses **Drizzle ORM** with **MySQL**
- **Lazy connection:** `getDb()` only connects if `DATABASE_URL` env var exists
- **No database required for frontend development** - the site renders fully without it
- Blog/News content will be empty without DB; Contact form submissions won't persist

### Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | No | MySQL connection string |
| `JWT_SECRET` | No | Admin JWT signing key (defaults to hardcoded fallback) |
| `PORT` | No | Server port (default: 3000) |
| `NODE_ENV` | No | `development` or `production` |
| `OAUTH_SERVER_URL` | No | Manus OAuth (ignore in local dev) |

---

## 9. Git Workflow & Branching Strategy

### For AI Agents (Cannot push to main directly)

```
Step 1: Fetch latest main
        git fetch origin main
        git merge origin/main

Step 2: Make changes on feature branch
        Branch name: claude/setup-illuminious-website-BP4Pu
        (or whatever branch the session specifies)

Step 3: Commit with descriptive message
        git add -A
        git commit -m "Description of changes"

Step 4: Push to feature branch
        git push -u origin claude/[branch-name]

Step 5: User merges to main on their machine
        (see Section 11 for user commands)
```

### For Humans (Direct push to main)

```
Step 1: Pull latest
        git pull origin main

Step 2: Make changes

Step 3: Preview locally
        pnpm dev

Step 4: Commit
        git add -A
        git commit -m "Description"

Step 5: Push
        git push origin main
```

### Commit Message Style

Use short, descriptive messages in imperative mood:
- `Fix text color on Services page CTA section`
- `Add new case study for IoT wearable`
- `Update hero image on About page`
- `Change phone number in Footer`
- `Add Factory Tour page with virtual tour sections`

### Branch Protection

- `main` is the production branch
- AI agents should NEVER force push
- Always merge, never rebase against main

---

## 10. Environment Setup (AI Agent)

### Prerequisites Check

```bash
which node && node --version    # Need 18+ (22 recommended)
which pnpm && pnpm --version    # Need 10.x
```

### Install Dependencies

```bash
cd /path/to/illuminious-web
pnpm install
```

If pnpm shows "Ignored build scripts" warning:
```bash
pnpm install --force
```

### Start Development Server

```bash
NODE_ENV=development npx tsx server/_core/index.ts
```

Or use the package.json script:
```bash
pnpm dev
```

### Verify Server is Running

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
# Should return: 200
```

### Verify All Routes

```bash
for route in / /about /services /contact /startups /factory-tour /case-studies /industries /blog /news /services/npi-engineering /services/pcb-assembly /services/box-build /services/injection-molding /services/supply-chain /industries/iot /industries/consumer /industries/automotive /industries/medical /capabilities /capabilities/quality /capabilities/iot; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000$route) $route"
done
```

All should return 200.

### Console Warnings to Ignore

These are expected and harmless:
- `[OAuth] ERROR: OAUTH_SERVER_URL is not configured!` - Manus platform specific, ignore
- `[Database] Failed to connect:` - Only if no DATABASE_URL, frontend still works

---

## 11. Environment Setup (Human/WSL on Windows)

### Context

The project owner uses:
- **OS:** Windows with WSL (Ubuntu)
- **WSL filesystem:** Moved to D: drive at `D:\WSL\Ubuntu`
- **Repository location:** `/mnt/d/web3/illuminious-web` (NTFS mount)
- **SSH key source:** `/mnt/d/web3/.ssh/id_ed25519`
- **GitHub account:** `tudsds`

### SSH Key Setup (Required EVERY time WSL restarts)

WSL loses the Linux filesystem copy of the SSH key on restart because the key is stored
on the NTFS drive where `chmod` doesn't work. Must copy to native Linux filesystem:

```bash
mkdir -p /home/jamesg27/.ssh
cp /mnt/d/web3/.ssh/id_ed25519 /home/jamesg27/.ssh/id_ed25519
cp /mnt/d/web3/.ssh/id_ed25519.pub /home/jamesg27/.ssh/id_ed25519.pub
chmod 600 /home/jamesg27/.ssh/id_ed25519
chmod 644 /home/jamesg27/.ssh/id_ed25519.pub
echo "Host github.com
  IdentityFile /home/jamesg27/.ssh/id_ed25519
  IdentitiesOnly yes" > /home/jamesg27/.ssh/config
chmod 600 /home/jamesg27/.ssh/config
export GIT_SSH_COMMAND="ssh -i /home/jamesg27/.ssh/id_ed25519"
```

Verify: `ssh -T git@github.com` should show `Hi tudsds!`

### Why chmod fails on /mnt/d/

The `/mnt/d/` path is a Windows NTFS filesystem mounted in WSL. NTFS does not support
Linux file permissions. All files on `/mnt/d/` have `0777` permissions and `chmod` is
silently ignored. This is why the SSH key must be copied to `/home/` (ext4 filesystem).

### Why `git config` fails on /mnt/d/

Same NTFS issue. `git config` writes to `.git/config` which requires Linux file
operations. Use `export GIT_SSH_COMMAND=...` environment variable instead.

### pnpm EPERM Error on /mnt/d/

pnpm's symlink-based node_modules doesn't work on NTFS. Use npm as fallback:
```bash
npm install --legacy-peer-deps
npm run dev
```

### Full Human Workflow (Copy-Paste Block)

```bash
# === SSH SETUP (once per WSL session) ===
mkdir -p /home/jamesg27/.ssh
cp /mnt/d/web3/.ssh/id_ed25519 /home/jamesg27/.ssh/id_ed25519
chmod 600 /home/jamesg27/.ssh/id_ed25519
echo "Host github.com
  IdentityFile /home/jamesg27/.ssh/id_ed25519
  IdentitiesOnly yes" > /home/jamesg27/.ssh/config
chmod 600 /home/jamesg27/.ssh/config
export GIT_SSH_COMMAND="ssh -i /home/jamesg27/.ssh/id_ed25519"

# === PULL LATEST ===
cd /mnt/d/web3/illuminious-web
git checkout main
git pull origin main

# === (make your edits here) ===

# === PREVIEW ===
npm install --legacy-peer-deps
npm run dev
# Open http://localhost:3000/

# === COMMIT & PUSH ===
git add -A
git commit -m "Your description"
git push origin main
```

### Merging AI Agent's Feature Branch

When an AI agent has pushed changes to a feature branch:

```bash
export GIT_SSH_COMMAND="ssh -i /home/jamesg27/.ssh/id_ed25519"
cd /mnt/d/web3/illuminious-web
git checkout main
git pull origin main
git fetch origin claude/setup-illuminious-website-BP4Pu
git merge origin/claude/setup-illuminious-website-BP4Pu
git push origin main
```

If merge is blocked by local changes:
```bash
git stash
git merge origin/claude/setup-illuminious-website-BP4Pu
git stash pop
```

---

## 12. Common Task Decision Trees

### Task: Change Text Content

```
1. Identify which page (URL -> file mapping in Section 5)
2. Open the page file
3. Look at the TOP of the file for data arrays (const features = [...], etc.)
   |
   |-- Found the text in a data array?
   |   YES -> Edit the text in the array. It will render automatically.
   |   NO  -> Search for the text in the JSX (the return statement).
   |           Edit it directly in the JSX.
4. Verify the change in browser (pnpm dev)
```

### Task: Change Text Color

```
1. Find the element containing the text
2. Look at its className attribute
3. Identify the current color class:
   |
   |-- text-white -> already white
   |-- text-illuminious-navy -> dark navy (#132843)
   |-- text-illuminious-blue -> blue (#3966A2)
   |-- text-illuminious-sky -> sky blue (#6191D3)
   |-- text-muted-foreground -> medium gray
   |-- text-illuminious-light -> light gray (#D6DEEE)
   |-- text-illuminious-light/70 -> light gray at 70% opacity
   |-- text-illuminious-light/80 -> light gray at 80% opacity
   |
4. Replace with desired color class
5. CHECK the background color to ensure contrast:
   |
   |-- Dark background (navy, blue, gradient) -> text should be text-white
   |-- Light background (white, light) -> text should be text-illuminious-navy or text-muted-foreground
```

### Task: Change Background Color

```
1. Find the <section> element
2. Look at its className for bg-* class
3. Common backgrounds:
   |-- bg-white -> pure white
   |-- bg-illuminious-light/30 -> very light blue tint
   |-- bg-illuminious-navy -> dark navy
   |-- gradient-illuminious -> navy-to-sky gradient
   |
4. Replace with desired background
5. CRITICAL: Update ALL text colors inside the section to match:
   |-- Changed to dark bg? -> ALL text must become text-white
   |-- Changed to light bg? -> ALL text must become text-illuminious-navy / text-muted-foreground
```

### Task: Add a New Image

```
1. Place image file in: client/public/images/
2. Reference in code as: src="/images/filename.png"
3. Always include alt text: alt="Description of image"
4. Common image classes:
   |-- Hero image: className="w-full h-full object-cover"
   |-- Content image: className="rounded-2xl shadow-2xl"
   |-- Logo: className="h-10 w-10"
```

### Task: Add a New Page

```
1. Create: client/src/pages/YourPage.tsx
   |-- Follow the Standard Page Structure (Section 6)
   |-- Include: SEO, Header, sections, Footer, FloatingContact
   |
2. Add route: client/src/App.tsx
   |-- Add import: import YourPage from "./pages/YourPage";
   |-- Add route in <Switch>: <Route path="/your-url" component={YourPage} />
   |
3. Add to navigation (if needed):
   |-- Header: client/src/components/Header.tsx -> navItems array
   |-- Footer: client/src/components/Footer.tsx -> footerLinks object
   |
4. Add to sitemap/SEO (if needed):
   |-- Include <SEO> component with proper title, description, keywords
```

### Task: Modify Navigation Menu

```
1. Open: client/src/components/Header.tsx
2. Find: const navItems = [...] (line 8+)
3. Structure:
   |
   |-- Simple link: { label: "Label", href: "/url" }
   |
   |-- Mega menu: {
   |     label: "Label",
   |     href: "/url",
   |     megaMenu: true,
   |     columns: [
   |       {
   |         title: "Column Title",
   |         items: [
   |           { label: "Item", href: "/url", icon: IconComponent, desc: "Short description" }
   |         ]
   |       }
   |     ]
   |   }
```

### Task: Update Contact Information

```
Phone number locations:
  - client/src/components/Footer.tsx (search for "424-626-3312")
  - client/src/pages/Contact.tsx

Email locations:
  - client/src/components/Footer.tsx
  - client/src/pages/Contact.tsx

Office addresses:
  - client/src/components/Footer.tsx -> globalOffices array (line 4-9)
  - client/src/pages/About.tsx -> locations array (line 26-59)
  - client/src/pages/Home.tsx -> locations array (line 50-72)
```

### Task: Change Global Branding Colors

```
1. Edit: client/src/index.css
2. Find: :root { (line 21)
3. Change the CSS variable values:
   --illuminious-navy: #NEWCOLOR;
   --illuminious-blue: #NEWCOLOR;
   --illuminious-sky: #NEWCOLOR;
   --illuminious-light: #NEWCOLOR;
4. Also update gradient definitions (lines 260-268) if colors changed significantly
5. Test ALL pages - color changes are global
```

---

## 13. Known Pitfalls & Gotchas

### Pitfall 1: wouter is NOT react-router

```
WRONG: import { Link } from "react-router-dom";
WRONG: <Link to="/about">
WRONG: useNavigate()

RIGHT: import { Link, useLocation } from "wouter";
RIGHT: <Link href="/about">
RIGHT: const [location, setLocation] = useLocation();
```

### Pitfall 2: Custom Tailwind classes need index.css

Standard Tailwind classes like `text-white`, `bg-blue-500`, `p-4` work normally.
But `text-illuminious-navy`, `bg-illuminious-light`, etc. are CUSTOM classes defined
in `index.css`. If you add a new brand color, you must add it there.

Tailwind's opacity modifier syntax (e.g., `text-illuminious-light/70`) works because
the underlying CSS custom properties support it.

### Pitfall 3: Legacy service page files

The `services/` directory contains many files that are NOT routed:
`Assembly.tsx`, `DFM.tsx`, `EMS.tsx`, `Logistics.tsx`, `Molding.tsx`, `ODM.tsx`,
`OEM.tsx`, `PCB.tsx`, `Packaging.tsx`, `Prototyping.tsx`, `Testing.tsx`

These are from an earlier site version. The ACTIVE service pages are ONLY:
`NPI.tsx`, `PCBA.tsx`, `BoxBuild.tsx`, `Injection.tsx`, `SupplyChain.tsx`

### Pitfall 4: Startups page has unique styling

`/startups` uses cyberpunk colors, NOT brand colors. The Header and Footer
components detect the `/startups` route and switch styling automatically.
Do NOT apply cyberpunk styles to any other page.

### Pitfall 5: Images must go in client/public/images/

NOT in `src/assets/` or `public/` root. The path in code is `/images/filename.png`
(no `client/public/` prefix - Vite serves public/ as root).

### Pitfall 6: Database is optional

The server starts and serves the full frontend without any database.
You will see console warnings about DB connection - these are harmless.
Blog/News pages will show empty lists without DB, but won't crash.

### Pitfall 7: OAuth warnings are normal

`[OAuth] ERROR: OAUTH_SERVER_URL is not configured!` appears on every startup.
This is for the Manus.ai platform integration and can be safely ignored in local dev.

### Pitfall 8: Port auto-selection

If port 3000 is busy, the server automatically tries 3001, 3002, ... up to 3020.
Check the console output for the actual port.

### Pitfall 9: WSL + NTFS filesystem limitations

On the project owner's Windows/WSL setup:
- `chmod` does not work on `/mnt/d/` (NTFS)
- `git config` fails on `/mnt/d/` repos
- `pnpm` may fail with EPERM on `/mnt/d/` (use `npm --legacy-peer-deps`)
- SSH keys must be copied to `/home/` (ext4) for proper permissions

### Pitfall 10: ServicePageTemplate vs Custom Pages

`ServicePageTemplate.tsx` exists but the 5 active service sub-pages do NOT use it.
They each have their own custom, more detailed layouts. Don't accidentally switch
a custom page to use the template - it would lose content.

---

## 14. Verification Checklist

Before committing any change, verify:

### Visual Checks
- [ ] Text is readable (proper contrast against background)
- [ ] No white text on white background
- [ ] No dark text on dark background
- [ ] Images load properly
- [ ] Links navigate to correct pages
- [ ] Mobile responsive (resize browser to < 768px)

### Code Checks
- [ ] All imports resolve (no red squiggly lines if using editor)
- [ ] No console errors in browser DevTools
- [ ] Route exists in App.tsx for any new page
- [ ] SEO component included on new pages
- [ ] Header and Footer included on new pages

### Route Verification (run after any structural changes)
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
# Must return 200 for all active routes
```

### Git Checks
- [ ] `git status` shows only files you intended to change
- [ ] `git diff` shows only the changes you intended
- [ ] No secrets (.env, credentials) in staged files
- [ ] Commit message is descriptive

---

## Appendix A: Quick Command Reference

| Action | Command |
|--------|---------|
| Install deps | `pnpm install` |
| Start dev server | `pnpm dev` |
| Build for production | `pnpm build` |
| Start production server | `pnpm start` |
| Type check | `pnpm check` |
| Format code | `pnpm format` |
| Run tests | `pnpm test` |
| Push DB schema | `pnpm db:push` |

## Appendix B: File -> URL Quick Reference

| If user says... | Edit this file... |
|----------------|-------------------|
| "homepage" or "/" | `pages/Home.tsx` |
| "about page" | `pages/About.tsx` |
| "services page" | `pages/Services.tsx` |
| "NPI" or "engineering" | `pages/services/NPI.tsx` |
| "PCBA" or "PCB assembly" | `pages/services/PCBA.tsx` |
| "box build" | `pages/services/BoxBuild.tsx` |
| "injection" or "molding" | `pages/services/Injection.tsx` |
| "supply chain" or "logistics" | `pages/services/SupplyChain.tsx` |
| "factory tour" | `pages/FactoryTour.tsx` |
| "case studies" | `pages/CaseStudies.tsx` |
| "industries" | `pages/Industries.tsx` |
| "IoT industry" | `pages/industries/IoT.tsx` |
| "consumer" | `pages/industries/Consumer.tsx` |
| "automotive" | `pages/industries/Automotive.tsx` |
| "medical" | `pages/industries/Medical.tsx` |
| "capabilities" | `pages/Capabilities.tsx` |
| "quality" | `pages/capabilities/Quality.tsx` |
| "IoT capabilities" | `pages/capabilities/IoTSpecialization.tsx` |
| "blog" | `pages/Blog.tsx` |
| "news" | `pages/News.tsx` |
| "startups" | `pages/Startups.tsx` |
| "contact" | `pages/Contact.tsx` |
| "header" or "navigation" | `components/Header.tsx` |
| "footer" | `components/Footer.tsx` |
| "colors" or "theme" | `index.css` |
| "routing" | `App.tsx` |
| "API" or "backend" | `server/routers.ts` |
| "database" | `server/db.ts` |
