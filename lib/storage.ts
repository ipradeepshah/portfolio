/**
 * Storage Layer — auto-switches between:
 *   - Vercel Blob Storage  (when BLOB_READ_WRITE_TOKEN is set — production)
 *   - Local JSON file      (when running locally — development)
 *
 * This means posts survive forever on Vercel and work normally in local dev.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const BLOB_KEY  = 'posts.json'
const LOCAL_DIR  = join(process.cwd(), 'data')
const LOCAL_FILE = join(LOCAL_DIR, 'posts.json')

export interface Post {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  published: boolean
  featured: boolean
  content: string
}

function isVercel(): boolean {
  return !!process.env.BLOB_READ_WRITE_TOKEN
}

// ── READ ─────────────────────────────────────────────────────────────────────

export async function readPosts(): Promise<Post[]> {
  try {
    if (isVercel()) {
      // Vercel Blob — fetch the stored JSON file
      const { list, head, get } = await import('@vercel/blob')

      // Try to get existing blob
      const { blobs } = await list({ prefix: BLOB_KEY })
      const existing = blobs.find(b => b.pathname === BLOB_KEY)

      if (!existing) {
        // First time — seed from local posts.json bundled at build time
        const seed = getSeedPosts()
        await writePosts(seed)
        return seed
      }

      const res = await fetch(existing.url, { cache: 'no-store' })
      const data = await res.json()
      return Array.isArray(data) ? data : []
    } else {
      // Local filesystem
      if (!existsSync(LOCAL_FILE)) return getSeedPosts()
      const raw = readFileSync(LOCAL_FILE, 'utf-8')
      return JSON.parse(raw)
    }
  } catch (e) {
    console.error('[Storage] readPosts error:', e)
    return getSeedPosts()
  }
}

// ── WRITE ────────────────────────────────────────────────────────────────────

export async function writePosts(posts: Post[]): Promise<void> {
  const json = JSON.stringify(posts, null, 2)

  if (isVercel()) {
    const { put } = await import('@vercel/blob')
    await put(BLOB_KEY, json, {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false, // always overwrite same key
    })
  } else {
    if (!existsSync(LOCAL_DIR)) mkdirSync(LOCAL_DIR, { recursive: true })
    writeFileSync(LOCAL_FILE, json, 'utf-8')
  }
}

// ── SEED DATA ────────────────────────────────────────────────────────────────
// Fallback seed posts (same as data/posts.json) used on first Vercel deploy

function getSeedPosts(): Post[] {
  try {
    // Try to read local seed file (bundled at build time)
    if (existsSync(LOCAL_FILE)) {
      return JSON.parse(readFileSync(LOCAL_FILE, 'utf-8'))
    }
  } catch { /* ignore */ }
  return []
}

// ── HELPERS ──────────────────────────────────────────────────────────────────

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}
