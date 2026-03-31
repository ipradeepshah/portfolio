const BASE = 'https://pradeepshah.com.np'

interface Props {
  title: string
  excerpt: string
  slug: string
  date: string
  category: string
  content: string
}

export default function BlogPostSchema({ title, excerpt, slug, date, category, content }: Props) {
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length
  const url = `${BASE}/blog/${slug}`

  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: title,
    description: excerpt,
    url,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      '@type': 'Person',
      '@id': `${BASE}/#pradeep-shah`,
      name: 'Pradeep Shah',
      url: `${BASE}/about`,
      image: `${BASE}/pradeep-shah.jpg`,
      jobTitle: 'CEO & Founder',
      sameAs: [
        'https://www.linkedin.com/in/ipradeepshah/',
        'https://x.com/i_pradeepshah',
        'https://www.instagram.com/i_pradeepshah',
        'https://www.tiktok.com/@ipradeepshah',
      ],
    },
    publisher: {
      '@type': 'Person',
      '@id': `${BASE}/#pradeep-shah`,
      name: 'Pradeep Shah',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/favicon-32x32.png`,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `${BASE}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${BASE}/blog`,
      name: 'Pradeep Shah Blog',
      publisher: { '@type': 'Person', name: 'Pradeep Shah' },
    },
    articleSection: category,
    inLanguage: 'en',
    wordCount,
    about: [
      { '@type': 'Thing', name: 'Nepal Business' },
      { '@type': 'Thing', name: category },
    ],
    keywords: [title, category, 'Nepal', 'Birgunj', 'Pradeep Shah', 'business Nepal'].join(', '),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}
