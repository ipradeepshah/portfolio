import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import BlogPostSchema from '@/components/BlogPostSchema'
import ShareButtons from '@/components/ShareButtons'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { readPosts } from '@/lib/storage'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const posts = await readPosts()
  const post  = posts.find(p => p.slug === slug && p.published)
  if (!post) return {}
  return {
    title: `${post.title} | Pradeep Shah Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://pradeepshah.com.np/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://pradeepshah.com.np/blog/${slug}`,
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts    = await readPosts()
  const post     = posts.find(p => p.slug === slug && p.published)
  if (!post) notFound()

  return (
    <>
      <BlogPostSchema
        title={post.title}
        excerpt={post.excerpt}
        slug={post.slug}
        date={post.date}
        category={post.category}
        content={post.content}
      />
      <ClientEffects />
      <Nav />
      <main className={styles.main}>
        <article>
          <header className={styles.header}>
            <div className={styles.headerBg} />
            <div className="hero-inner">
              <div className={`${styles.breadcrumb} fade-in`}>
                <Link href="/blog">Blog</Link>
                <span>/</span>
                <span>{post.category}</span>
              </div>
              <div className="section-tag fade-in">{post.category}</div>
              <h1 className="fade-in">{post.title}</h1>
              <div className={`${styles.meta} fade-in`}>
                <span>By <Link href="/about">Pradeep Shah</Link></span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className={styles.content}>
            <div className="section-inner">
              <div className={styles.contentGrid}>
                <div className="fade-in">
                  <div
                    className={styles.article}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  {/* Share buttons — below article */}
                  <ShareButtons
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                  />
                </div>
                <aside className={`${styles.sidebar} fade-in`}>
                  <div className={styles.authorCard}>
                    <div className={styles.authorAvatar}>
                      <img src="/pradeep-shah-ceo.jpg" alt="Pradeep Shah" />
                    </div>
                    <div className={styles.authorName}>Pradeep Shah</div>
                    <div className={styles.authorTitle}>CEO &amp; Founder · Computer Engineer</div>
                    <Link href="/about" className={styles.authorLink}>View Profile →</Link>
                  </div>
                  <div className={styles.relatedBox}>
                    <div className={styles.relatedTitle}>Explore</div>
                    <Link href="/standard-hardware" className={styles.relatedLink}>Standard Hardware &amp; Supply →</Link>
                    <Link href="/standard-erp"      className={styles.relatedLink}>Standard ERP →</Link>
                    <Link href="/contact"            className={styles.relatedLink}>Get in Touch →</Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </article>

        <div className={styles.backSection}>
          <div className="section-inner">
            <Link href="/blog" className={styles.backLink}>← Back to all articles</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
