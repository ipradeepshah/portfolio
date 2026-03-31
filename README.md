# Pradeep Shah — Personal Portfolio
> CEO of Standard Hardware & Supply | Founder of Standard ERP | Computer Engineer

Live at: **https://pradeepshah.com.np**

---

## Tech Stack
- **Framework**: Next.js **16.2.1** (App Router, Turbopack default)
- **Runtime**: Node.js ≥ 20.9 (required)
- **Language**: TypeScript 5
- **React**: React 19
- **Styling**: CSS Modules + Global CSS variables
- **Fonts**: Cormorant Garamond, DM Sans (next/font), Bebas Neue (Google Fonts)
- **Bundler**: Turbopack (default in v16) — use `--webpack` flag to opt out
- **Linting**: ESLint 9 (flat config)
- **SEO**: 5× Schema.org JSON-LD, Open Graph, Twitter Card, geo meta, sitemap, robots.txt

---

## Project Structure

```
pradeep-portfolio/
├── app/
│   ├── layout.tsx        # Root layout — metadata, fonts, geo meta
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # Design tokens + shared utilities
├── components/
│   ├── Nav.tsx / .css    # Fixed navigation bar
│   ├── Hero.tsx / .css   # Full-screen hero section
│   ├── About.tsx / .css  # About me + education + skill pills
│   ├── Businesses.tsx    # Standard Hardware & Standard ERP cards
│   ├── Expertise.tsx     # 6-card skills grid
│   ├── Contact.tsx       # Contact form + info + social links
│   ├── Footer.tsx        # Footer + hidden sameAs microdata
│   ├── StructuredData.tsx# All 5 Schema.org JSON-LD blocks
│   └── ClientEffects.tsx # Scroll fade-in + nav highlight (client)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── pradeep-shah.jpg  # ← Add your photo here (800×800px)
│   └── og-image.jpg      # ← Add OG image here (1200×630px)
├── eslint.config.mjs     # ESLint 9 flat config (Next.js 16)
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## Getting Started

> **Requires Node.js 20.9 or higher**

```bash
# 1. Install dependencies
npm install

# 2. Run development server (uses Turbopack by default)
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

### Use Webpack instead of Turbopack (optional)
```bash
next dev --webpack
next build --webpack
```

---

## Deploy to Vercel (free — recommended)

```bash
npx vercel
```

Then point your domain `pradeepshah.com.np` to Vercel → Settings → Domains.

---

## Customization Checklist

- [ ] Add your photo as `/public/pradeep-shah.jpg` (800×800px, square)
- [ ] Add OG image as `/public/og-image.jpg` (1200×630px)
- [ ] Create Wikidata entry (fastest path to Google Knowledge Panel)
- [ ] Submit to Google Search Console after going live
- [ ] Update social URLs in `components/StructuredData.tsx` if they change

---

## SEO Included

| Feature | Status |
|---------|--------|
| Schema.org Person | ✅ |
| Schema.org LocalBusiness | ✅ |
| Schema.org SoftwareApplication | ✅ |
| Schema.org WebSite | ✅ |
| Schema.org BreadcrumbList | ✅ |
| Open Graph (LinkedIn/Facebook) | ✅ |
| Twitter Card | ✅ |
| Geo / Local SEO (Birgunj) | ✅ |
| Canonical URL | ✅ |
| sitemap.xml | ✅ |
| robots.txt | ✅ |
| sameAs social microdata | ✅ |

---

*Built for Pradeep Shah · pradeepshah.com.np · Next.js 16.2.1*

