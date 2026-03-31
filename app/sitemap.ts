import { MetadataRoute } from 'next'
import { readPosts } from '@/lib/storage'

const BASE = 'https://pradeepshah.com.np'

function parseDate(d?: string): Date {
  if (!d) return new Date()
  const parsed = new Date(d)
  return isNaN(parsed.getTime()) ? new Date() : parsed
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Reads from Blob Storage on Vercel, local JSON in dev
  const posts = await readPosts()
  const published = posts.filter(p => p.published)

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/standard-hardware`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/standard-erp`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`,              lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE}/contact`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ]

  const blogPages: MetadataRoute.Sitemap = published.map(p => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: parseDate(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
