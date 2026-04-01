/**
 * Storage Layer
 *   - Vercel Blob  → when BLOB_READ_WRITE_TOKEN is set (production)
 *   - Local JSON   → when running locally (development)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const BLOB_PATHNAME = 'pradeep-posts/posts.json'
const LOCAL_DIR     = join(process.cwd(), 'data')
const LOCAL_FILE    = join(LOCAL_DIR, 'posts.json')

export interface Post {
  slug:      string
  title:     string
  excerpt:   string
  category:  string
  date:      string
  readTime:  string
  published: boolean
  featured:  boolean
  content:   string
}

const useBlob = () => !!process.env.BLOB_READ_WRITE_TOKEN

// ── READ ──────────────────────────────────────────────────────────────────────
export async function readPosts(): Promise<Post[]> {
  try {
    if (useBlob()) {
      const { head } = await import('@vercel/blob')

      // Build the expected public URL from the blob pathname
      // Format: https://<store>.public.blob.vercel-storage.com/<pathname>
      try {
        const blobInfo = await head(BLOB_PATHNAME)
        const res = await fetch(blobInfo.url, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        })
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
        const data = await res.json()
        return Array.isArray(data) ? data : []
      } catch {
        // File doesn't exist yet — seed it
        console.log('[Storage] No blob found, seeding from local data...')
        const seed = getLocalPosts()
        await writePosts(seed)
        return seed
      }
    } else {
      return getLocalPosts()
    }
  } catch (e) {
    console.error('[Storage] readPosts error:', e)
    return getLocalPosts()
  }
}

// ── WRITE ─────────────────────────────────────────────────────────────────────
export async function writePosts(posts: Post[]): Promise<void> {
  const json = JSON.stringify(posts, null, 2)

  if (useBlob()) {
    const { put } = await import('@vercel/blob')
    await put(BLOB_PATHNAME, json, {
      access: 'public',
      contentType: 'application/json',
      allowOverwrite: true,  // overwrite the same file each time
    })
  } else {
    if (!existsSync(LOCAL_DIR)) mkdirSync(LOCAL_DIR, { recursive: true })
    writeFileSync(LOCAL_FILE, json, 'utf-8')
  }
}

// ── LOCAL FALLBACK ────────────────────────────────────────────────────────────
function getLocalPosts(): Post[] {
  try {
    if (existsSync(LOCAL_FILE)) {
      return JSON.parse(readFileSync(LOCAL_FILE, 'utf-8'))
    }
  } catch { /* ignore */ }
  return []
}

// ── SLUGIFY ───────────────────────────────────────────────────────────────────
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}
