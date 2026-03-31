# 🚀 Deployment Checklist — Pradeep Shah Portfolio
## Complete this in order before and after deploying

---

## ✅ STEP 1 — Add Images to `public/` folder

| File | Size | How to get it |
|------|------|---------------|
| `pradeep-shah.jpg` | 800×800px | Your photo, cropped square |
| `og-image.jpg` | 1200×630px | Make at canva.com — 1200×630 with name & title |
| `favicon.ico` | 32×32 | Generate all favicon files at favicon.io |
| `favicon-16x16.png` | 16×16 | From favicon.io |
| `favicon-32x32.png` | 32×32 | From favicon.io |
| `apple-touch-icon.png` | 180×180 | From favicon.io |

---

## ✅ STEP 2 — Create `.env.local` (local dev only)

Copy `.env.local.example` → rename to `.env.local` and fill in:

```
RESEND_API_KEY=re_your_key_from_resend.com
ADMIN_PASSWORD=YourStrongPassword2025
GOOGLE_SITE_VERIFICATION=leave_blank_for_now
BLOB_READ_WRITE_TOKEN=           ← leave blank locally
```

---

## ✅ STEP 3 — Push to GitHub

```bash
git add .
git commit -m "Production ready with Vercel Blob Storage"
git push origin main
```

---

## ✅ STEP 4 — Deploy on Vercel

1. vercel.com → **Add New Project** → Import your GitHub repo
2. Set Root Directory: `pradeep-portfolio-v16`
3. Add Environment Variables:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | Your Resend key |
| `ADMIN_PASSWORD` | Your strong password |
| `GOOGLE_SITE_VERIFICATION` | Leave blank for now |

4. Click **Deploy**

---

## ✅ STEP 5 — Enable Vercel Blob Storage (IMPORTANT — do after first deploy)

This makes blog posts survive forever — stored in the cloud, not the server.

1. Go to your project in Vercel dashboard
2. Click **Storage** tab (top menu)
3. Click **Create Database** → Select **Blob**
4. Name it: `pradeep-posts` → Click Create
5. Click **Connect to Project** → Select your portfolio project → Connect
6. Vercel **automatically adds** `BLOB_READ_WRITE_TOKEN` to your env vars
7. Go to **Deployments** → click the 3 dots on latest → **Redeploy**

That's it! From now on:
- All blog posts saved via `/admin` are stored in Vercel Blob
- Posts survive every redeployment forever
- The first deploy auto-seeds your existing 6 blog posts into Blob

---

## ✅ STEP 6 — Connect Your Domain

1. Vercel → Your project → Settings → Domains
2. Add: `pradeepshah.com.np`
3. Update DNS at your domain registrar:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

---

## ✅ STEP 7 — Google Search Console

1. Go to search.google.com/search-console
2. Add property: `pradeepshah.com.np`
3. Verify → HTML tag method → copy the content value
4. Vercel → Settings → Env Vars → add `GOOGLE_SITE_VERIFICATION=xxxxx`
5. Redeploy
6. Submit sitemap: `https://pradeepshah.com.np/sitemap.xml`
7. Request indexing for each page URL

---

## ✅ STEP 8 — Test Everything

| Tool | URL | What to check |
|------|-----|---------------|
| Schema validator | validator.schema.org | Paste site URL — all schemas green |
| Rich Results | search.google.com/test/rich-results | FAQ, Article, Person panels |
| PageSpeed | pagespeed.web.dev | Aim for 90+ on mobile |
| OG Tags | developers.facebook.com/tools/debug | Social share preview looks right |
| Mobile friendly | search.google.com/test/mobile-friendly | Should pass |

---

## ✅ STEP 9 — Admin Portal

Visit: `https://pradeepshah.com.np/admin`
Password: whatever you set as `ADMIN_PASSWORD`

Write your first new blog post — it saves to Vercel Blob and appears on the blog instantly!

---

## 📋 Final Checklist

| Task | Done? |
|------|-------|
| Profile photo in `public/pradeep-shah.jpg` | ⬜ |
| OG image in `public/og-image.jpg` | ⬜ |
| Favicon files in `public/` | ⬜ |
| `.env.local` created with real values | ⬜ |
| Pushed to GitHub | ⬜ |
| Deployed on Vercel | ⬜ |
| Env vars added in Vercel dashboard | ⬜ |
| Vercel Blob Storage enabled + connected | ⬜ |
| Project redeployed after Blob setup | ⬜ |
| Domain `pradeepshah.com.np` connected | ⬜ |
| Google Search Console verified | ⬜ |
| Sitemap submitted | ⬜ |
| Schema & Rich Results tested | ⬜ |
| First blog post written from admin | ⬜ |

---

*Pradeep Shah Portfolio · Next.js 16.2.1 · Vercel Blob Storage · pradeepshah.com.np*
