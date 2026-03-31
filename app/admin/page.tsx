'use client'
import { useState, useRef } from 'react'
import styles from './page.module.css'

interface Post {
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

const CATEGORIES = [
  'ERP & Business Software',
  'Hardware & Construction',
  'Accounting & Finance',
  'Operations & Management',
  'Technology & Innovation',
  'Personal Story',
  'Business Tips',
  'Nepal Business News',
]

const EMPTY: Partial<Post> = {
  title: '', excerpt: '', category: CATEGORIES[0],
  content: '', published: true, featured: false,
}

export default function AdminPage() {
  const [password, setPassword]   = useState('')
  const [authed, setAuthed]       = useState(false)
  const [authErr, setAuthErr]     = useState('')
  const [posts, setPosts]         = useState<Post[]>([])
  const [view, setView]           = useState<'list' | 'editor'>('list')
  const [form, setForm]           = useState<Partial<Post>>(EMPTY)
  const [editSlug, setEditSlug]   = useState<string | null>(null)
  const [saving, setSaving]       = useState(false)
  const [deleting, setDeleting]   = useState<string | null>(null)
  const [msg, setMsg]             = useState('')
  const [preview, setPreview]     = useState(false)
  const editorRef = useRef<HTMLDivElement>(null)

  function flash(m: string) { setMsg(m); setTimeout(() => setMsg(''), 3500) }

  async function login() {
    setAuthErr('')
    const res = await fetch('/api/posts', {
      headers: { 'x-admin-password': password },
      method: 'POST',
      body: JSON.stringify({ title: '__auth_check__', category: 'x', content: 'x' }),
    })
    if (res.status === 401) { setAuthErr('Wrong password. Try again.'); return }
    setAuthed(true)
    loadPosts()
  }

  async function loadPosts() {
    const res = await fetch('/api/posts')
    const data = await res.json()
    setPosts(data)
  }

  function newPost() {
    setForm(EMPTY)
    setEditSlug(null)
    setPreview(false)
    setView('editor')
    setTimeout(() => {
      if (editorRef.current) editorRef.current.innerHTML = ''
    }, 50)
  }

  function editPost(post: Post) {
    setForm({ ...post })
    setEditSlug(post.slug)
    setPreview(false)
    setView('editor')
    setTimeout(() => {
      if (editorRef.current) editorRef.current.innerHTML = post.content
    }, 50)
  }

  function execCmd(cmd: string, value?: string) {
    document.execCommand(cmd, false, value)
    editorRef.current?.focus()
    syncContent()
  }

  function syncContent() {
    if (editorRef.current) {
      setForm(f => ({ ...f, content: editorRef.current!.innerHTML }))
    }
  }

  async function save(publish: boolean) {
    const content = editorRef.current?.innerHTML || form.content || ''
    if (!form.title?.trim()) { flash('⚠ Please enter a title.'); return }
    if (!content.trim() || content === '<br>') { flash('⚠ Please write some content.'); return }

    setSaving(true)
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({
        ...form,
        content,
        published: publish,
        existingSlug: editSlug,
      }),
    })
    const data = await res.json()
    setSaving(false)

    if (!res.ok) { flash('❌ ' + data.error); return }
    flash(publish ? '✓ Post published!' : '✓ Draft saved!')
    loadPosts()
    setView('list')
  }

  async function deletePost(slug: string) {
    if (!confirm('Delete this post permanently?')) return
    setDeleting(slug)
    await fetch('/api/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ slug }),
    })
    setDeleting(null)
    flash('🗑 Post deleted.')
    loadPosts()
  }

  async function togglePublish(post: Post) {
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ ...post, published: !post.published, existingSlug: post.slug }),
    })
    loadPosts()
  }

  // ── Login screen ──
  if (!authed) {
    return (
      <div className={styles.loginWrap}>
        <div className={styles.loginBox}>
          <div className={styles.loginLogo}>PS</div>
          <div className={styles.loginTitle}>Blog Admin</div>
          <div className={styles.loginSub}>Pradeep Shah · pradeepshah.com.np</div>
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            autoFocus
          />
          {authErr && <div className={styles.loginErr}>{authErr}</div>}
          <button className={styles.loginBtn} onClick={login}>Sign In →</button>
        </div>
      </div>
    )
  }

  // ── Post list ──
  if (view === 'list') {
    return (
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.logo}>PS Admin</div>
            <div className={styles.headerSub}>Blog Management</div>
          </div>
          <div className={styles.headerRight}>
            {msg && <div className={styles.msg}>{msg}</div>}
            <a href="/blog" target="_blank" className={styles.viewSite}>View Blog ↗</a>
            <button className={styles.newBtn} onClick={newPost}>+ New Post</button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <div className={styles.statNum}>{posts.length}</div>
              <div className={styles.statLbl}>Total Posts</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>{posts.filter(p => p.published).length}</div>
              <div className={styles.statLbl}>Published</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>{posts.filter(p => !p.published).length}</div>
              <div className={styles.statLbl}>Drafts</div>
            </div>
          </div>

          <div className={styles.postsTable}>
            <div className={styles.tableHead}>
              <span>Title</span>
              <span>Category</span>
              <span>Status</span>
              <span>Read Time</span>
              <span>Actions</span>
            </div>
            {posts.length === 0 && (
              <div className={styles.emptyState}>No posts yet. Click "+ New Post" to write your first article!</div>
            )}
            {posts.map(post => (
              <div key={post.slug} className={styles.tableRow}>
                <div className={styles.postTitle}>
                  {post.featured && <span className={styles.featuredPill}>Featured</span>}
                  <span>{post.title}</span>
                </div>
                <div className={styles.postCat}>{post.category}</div>
                <div>
                  <button
                    className={post.published ? styles.pubBadge : styles.draftBadge}
                    onClick={() => togglePublish(post)}
                    title="Click to toggle"
                  >
                    {post.published ? '● Published' : '○ Draft'}
                  </button>
                </div>
                <div className={styles.postMeta}>{post.readTime}</div>
                <div className={styles.actions}>
                  <button className={styles.editBtn} onClick={() => editPost(post)}>Edit</button>
                  <a href={`/blog/${post.slug}`} target="_blank" className={styles.viewBtn}>View</a>
                  <button
                    className={styles.delBtn}
                    onClick={() => deletePost(post.slug)}
                    disabled={deleting === post.slug}
                  >
                    {deleting === post.slug ? '...' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }

  // ── Editor ──
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={() => setView('list')}>← Back</button>
          <div className={styles.logo}>{editSlug ? 'Edit Post' : 'New Post'}</div>
        </div>
        <div className={styles.headerRight}>
          {msg && <div className={styles.msg}>{msg}</div>}
          <button className={styles.previewBtn} onClick={() => setPreview(p => !p)}>
            {preview ? 'Edit' : 'Preview'}
          </button>
          <button className={styles.draftBtn} onClick={() => save(false)} disabled={saving}>
            Save Draft
          </button>
          <button className={styles.publishBtn} onClick={() => save(true)} disabled={saving}>
            {saving ? 'Saving...' : editSlug ? 'Update & Publish' : 'Publish Post'}
          </button>
        </div>
      </header>

      <div className={styles.editorLayout}>
        {/* Main editor */}
        <div className={styles.editorMain}>
          {!preview ? (
            <>
              <input
                className={styles.titleInput}
                placeholder="Post title..."
                value={form.title || ''}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              />
              <textarea
                className={styles.excerptInput}
                placeholder="Short excerpt / description (shown on blog listing page)..."
                rows={2}
                value={form.excerpt || ''}
                onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
              />

              {/* Toolbar */}
              <div className={styles.toolbar}>
                <button onClick={() => execCmd('bold')} title="Bold"><strong>B</strong></button>
                <button onClick={() => execCmd('italic')} title="Italic"><em>I</em></button>
                <button onClick={() => execCmd('underline')} title="Underline"><u>U</u></button>
                <div className={styles.sep} />
                <button onClick={() => execCmd('formatBlock', 'h2')} title="Heading 2">H2</button>
                <button onClick={() => execCmd('formatBlock', 'h3')} title="Heading 3">H3</button>
                <button onClick={() => execCmd('formatBlock', 'p')} title="Paragraph">P</button>
                <div className={styles.sep} />
                <button onClick={() => execCmd('insertUnorderedList')} title="Bullet list">• List</button>
                <button onClick={() => execCmd('insertOrderedList')} title="Numbered list">1. List</button>
                <div className={styles.sep} />
                <button onClick={() => execCmd('removeFormat')} title="Clear formatting">Clear</button>
              </div>

              {/* Content editor */}
              <div
                ref={editorRef}
                className={styles.contentEditor}
                contentEditable
                suppressContentEditableWarning
                onInput={syncContent}
                data-placeholder="Start writing your article here...

Tips:
• Use H2 for main sections, H3 for sub-sections
• Keep paragraphs short and easy to read
• Add real examples from your experience in Birgunj"
              />
            </>
          ) : (
            <div className={styles.previewWrap}>
              <div className={styles.previewTitle}>{form.title || 'Untitled'}</div>
              <div className={styles.previewMeta}>{form.category} · {form.excerpt}</div>
              <div
                className={styles.previewContent}
                dangerouslySetInnerHTML={{ __html: form.content || '' }}
              />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className={styles.editorSidebar}>
          <div className={styles.sideCard}>
            <div className={styles.sideTitle}>Post Settings</div>

            <label className={styles.sideLabel}>Category</label>
            <select
              className={styles.sideSelect}
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
            >
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>

            <label className={styles.sideLabel} style={{ marginTop: '1.2rem' }}>Status</label>
            <div className={styles.toggleRow}>
              <span>Published</span>
              <button
                className={form.published ? styles.toggleOn : styles.toggleOff}
                onClick={() => setForm(f => ({ ...f, published: !f.published }))}
              >
                {form.published ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className={styles.toggleRow}>
              <span>Featured Post</span>
              <button
                className={form.featured ? styles.toggleOn : styles.toggleOff}
                onClick={() => setForm(f => ({ ...f, featured: !f.featured }))}
              >
                {form.featured ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          <div className={styles.sideCard}>
            <div className={styles.sideTitle}>SEO Tips</div>
            <div className={styles.seoTip}>✓ Title: 50–60 characters ideal</div>
            <div className={styles.seoTip}>✓ Excerpt: 120–160 characters</div>
            <div className={styles.seoTip}>✓ Use H2/H3 headings in content</div>
            <div className={styles.seoTip}>✓ Mention "Nepal" or "Birgunj" naturally</div>
            <div className={styles.seoTip}>✓ Aim for 500+ words per article</div>
            {form.title && (
              <div className={styles.charCount} style={{ color: form.title.length > 60 ? '#f87171' : '#6ee7b7' }}>
                Title: {form.title.length} chars {form.title.length > 60 ? '(too long)' : '(good)'}
              </div>
            )}
            {form.excerpt && (
              <div className={styles.charCount} style={{ color: form.excerpt.length > 160 ? '#f87171' : '#6ee7b7' }}>
                Excerpt: {form.excerpt.length} chars {form.excerpt.length > 160 ? '(too long)' : '(good)'}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
