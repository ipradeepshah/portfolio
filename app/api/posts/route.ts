import { NextRequest, NextResponse } from 'next/server'
import { readPosts, writePosts, slugify } from '@/lib/storage'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'pradeep2025'

function auth(req: NextRequest): boolean {
  return req.headers.get('x-admin-password') === ADMIN_PASSWORD
}

// ── GET — public ──────────────────────────────────────────────────────────────
export async function GET() {
  try {
    const posts = await readPosts()
    return NextResponse.json(posts)
  } catch (e) {
    console.error('[GET /api/posts]', e)
    return NextResponse.json([], { status: 200 })
  }
}

// ── POST — create / update ────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!auth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  // Auth-check ping from the login screen
  if (body.title === '__auth_check__') {
    return NextResponse.json({ ok: true })
  }

  const { title, excerpt, category, content, published, featured, existingSlug } = body as {
    title?: string; excerpt?: string; category?: string; content?: string
    published?: boolean; featured?: boolean; existingSlug?: string
  }

  if (!title?.trim() || !content?.trim() || !category) {
    return NextResponse.json(
      { error: 'Title, category and content are required.' },
      { status: 400 }
    )
  }

  try {
    const posts    = await readPosts()
    const dateStr  = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const words    = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length
    const readTime = `${Math.max(1, Math.ceil(words / 200))} min read`

    if (existingSlug) {
      const idx = posts.findIndex(p => p.slug === existingSlug)
      if (idx === -1) return NextResponse.json({ error: 'Post not found' }, { status: 404 })
      posts[idx] = {
        ...posts[idx],
        title:     title.trim(),
        excerpt:   excerpt?.trim() || '',
        category,
        content,
        published: published ?? posts[idx].published,
        featured:  featured  ?? posts[idx].featured,
        readTime,
      }
      await writePosts(posts)
      return NextResponse.json({ success: true, slug: existingSlug })

    } else {
      let slug    = slugify(title)
      let counter = 1
      while (posts.find(p => p.slug === slug)) {
        slug = `${slugify(title)}-${counter++}`
      }
      posts.unshift({
        slug,
        title:     title.trim(),
        excerpt:   excerpt?.trim() || '',
        category,
        date:      dateStr,
        readTime,
        published: published ?? true,
        featured:  featured  ?? false,
        content,
      })
      await writePosts(posts)
      return NextResponse.json({ success: true, slug })
    }
  } catch (e) {
    console.error('[POST /api/posts] Storage error:', e)
    return NextResponse.json(
      { error: `Storage error: ${e instanceof Error ? e.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}

// ── DELETE ────────────────────────────────────────────────────────────────────
export async function DELETE(req: NextRequest) {
  if (!auth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let slug: string
  try {
    const body = await req.json()
    slug = body.slug
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!slug) return NextResponse.json({ error: 'Slug required' }, { status: 400 })

  try {
    const posts = await readPosts()
    await writePosts(posts.filter(p => p.slug !== slug))
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('[DELETE /api/posts] Storage error:', e)
    return NextResponse.json(
      { error: `Storage error: ${e instanceof Error ? e.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
