import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import Link from 'next/link'
import { readPosts } from '@/lib/storage'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog | Business & Technology Insights | Pradeep Shah Nepal',
  description: 'Articles on ERP software, business management, hardware supply, and technology for small and medium businesses in Nepal. By Pradeep Shah.',
  alternates: { canonical: 'https://pradeepshah.com.np/blog' },
}

export const dynamic = 'force-dynamic'

export type { Post } from '@/lib/storage'

export default async function BlogPage() {
  const allPosts = await readPosts()
  const posts = allPosts.filter(p => p.published)

  return (
    <>
      <ClientEffects />
      <Nav />
      <main className={styles.main}>

        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="hero-inner">
            <div className="section-tag fade-in">Blog</div>
            <h1 className="fade-in">Insights on Business<br /><em>&amp; Technology</em></h1>
            <p className={`${styles.heroSub} fade-in`}>
              Articles on ERP software, business management, hardware supply, and technology for entrepreneurs and SMEs in Nepal.
            </p>
          </div>
        </section>

        <section className={styles.postsSection}>
          <div className="section-inner">
            {posts.length === 0 ? (
              <div className={styles.empty}>No posts published yet. Check back soon!</div>
            ) : (
              <div className={styles.postsGrid}>
                {posts.map((post, i) => (
                  <article key={post.slug} className={`${styles.postCard} ${i === 0 ? styles.featured : ''} fade-in`}>
                    {i === 0 && <div className={styles.featuredBadge}>Featured</div>}
                    <div className={styles.postCategory}>{post.category}</div>
                    <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                    <p>{post.excerpt}</p>
                    <div className={styles.postMeta}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>Read Article →</Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
