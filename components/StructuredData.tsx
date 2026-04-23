const BASE = 'https://pradeepshah.com.np'

export default function StructuredData() {

  // 1. Person — Google Knowledge Panel trigger
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE}/#pradeep-shah`,
    name: 'Pradeep Shah',
    givenName: 'Pradeep',
    familyName: 'Shah',
    url: `${BASE}/`,
    email: 'ipradeepshah@gmail.com',
    telephone: '+9779815256619',
    image: {
      '@type': 'ImageObject',
      '@id': `${BASE}/#person-image`,
      url: `${BASE}/pradeep-shah.jpg`,
      width: 800,
      height: 800,
      caption: 'Pradeep Shah — CEO of Siyaram Hardware & Suppliers and Founder of Standard ERP',
    },
    description: 'Pradeep Shah is a Computer Engineer from Kurukshetra University, CEO of Siyaram Hardware & Suppliers in Birgunj, Nepal, and Founder of Standard ERP — building next-generation business management software for small and medium businesses.',
    jobTitle: 'CEO & Founder',
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Chief Executive Officer',
        occupationLocation: { '@type': 'City', name: 'Birgunj', containedInPlace: { '@type': 'Country', name: 'Nepal' } },
        description: 'CEO of Siyaram Hardware & Suppliers, a hardware and construction materials business in Birgunj, Nepal.',
      },
      {
        '@type': 'Occupation',
        name: 'Software Engineer',
        occupationLocation: { '@type': 'City', name: 'Birgunj' },
        description: 'Founder and developer of Standard ERP, a business management software for SMEs in Nepal.',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      '@id': `${BASE}/#Siyaram-hardware`,
      name: 'Siyaram Hardware & Suppliers',
      url: `${BASE}/Siyaram-hardware`,
    },
    founder: [
      {
        '@type': 'Organization',
        '@id': `${BASE}/#siyaram-hardware`,
        name: 'Siyaram Hardware & Suppliers',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${BASE}/#standard-erp`,
        name: 'Standard ERP',
      },
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Kurukshetra University',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kurukshetra',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
      url: 'https://kuk.ac.in',
    },
    knowsAbout: [
      'Computer Engineering', 'Enterprise Resource Planning', 'Supply Chain Management',
      'Business Leadership', 'Software Development', 'Construction Materials Supply',
      'SME Business Software', 'Hardware Distribution', 'Business Management',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nagawa Chowk',
      addressLocality: 'Birgunj',
      addressRegion: 'Parsa',
      postalCode: '44300',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.0104,
      longitude: 84.8779,
    },
    nationality: { '@type': 'Country', name: 'Nepal' },
    sameAs: [
      'https://www.linkedin.com/in/ipradeepshah/',
      'https://x.com/i_pradeepshah',
      'https://www.instagram.com/i_pradeepshah',
      'https://www.tiktok.com/@ipradeepshah',
      'https://github.com/ipradeepshah',
      'https://www.facebook.com/ipradeepshah/',
      'https://www.wikidata.org/wiki/Q138849114',
      'https://nec.gov.np/registration/9102?programName=Computer%20Engineering',
      `${BASE}/`,
    ],
  }

  // 2. LocalBusiness — Siyaram Hardware & Suppliers
  const hardware = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    '@id': `${BASE}/#siyaram-hardware`,
    name: 'Siyaram Hardware & Suppliers',
    alternateName: 'Siyaram Hardware Birgunj',
    url: `${BASE}/siyaram-hardware`,
    description: 'Siyaram Hardware & Suppliers is a leading hardware and construction materials business in Birgunj, Nepal. We supply construction materials, hardware tools, plumbing supplies, electrical supplies, and industrial products to contractors, builders, and local businesses.',
    image: `${BASE}/og-image.jpg`,
    logo: `${BASE}/favicon-32x32.png`,
    telephone: '+9779815256619',
    email: 'ipradeepshah@gmail.com',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      '@id': `${BASE}/#pradeep-shah`,
      name: 'Pradeep Shah',
    },
    employee: {
      '@type': 'Person',
      '@id': `${BASE}/#pradeep-shah`,
      name: 'Pradeep Shah',
      jobTitle: 'Chief Executive Officer',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nagawa Chowk',
      addressLocality: 'Birgunj',
      addressRegion: 'Parsa',
      postalCode: '44300',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.0104,
      longitude: 84.8779,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Birgunj' },
      { '@type': 'State', name: 'Parsa' },
      { '@type': 'Country', name: 'Nepal' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hardware & Construction Products',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Construction Materials' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Hardware Tools' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Plumbing Supplies' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Electrical Supplies' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Industrial Products' } },
      ],
    },
    sameAs: [
      'https://www.linkedin.com/in/ipradeepshah/',
      'https://www.instagram.com/i_pradeepshah',
      'https://www.tiktok.com/@ipradeepshah',
      'https://www.facebook.com/ipradeepshah/',
    ],
  }

  // 3. SoftwareApplication — Standard ERP
  const erp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${BASE}/#standard-erp`,
    name: 'Standard ERP',
    alternateName: 'Standard ERP Nepal',
    url: `${BASE}/standard-erp`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Enterprise Resource Planning',
    operatingSystem: 'Web Browser',
    description: 'Standard ERP is a business management software platform for small and medium businesses in Nepal — integrating accounting, inventory management, billing, and reporting into a single easy-to-use platform.',
    screenshot: `${BASE}/og-image.jpg`,
    author: {
      '@type': 'Person',
      '@id': `${BASE}/#pradeep-shah`,
      name: 'Pradeep Shah',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      areaServed: { '@type': 'Country', name: 'Nepal' },
    },
    featureList: [
      'Accounting & Financial Management',
      'Inventory Management',
      'Billing & Invoicing',
      'Business Reporting & Analytics',
      'Customer Management',
      'Supplier Management',
      'VAT Compliance for Nepal',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Small and Medium Businesses in Nepal',
    },
    inLanguage: 'en',
    countryOfOrigin: { '@type': 'Country', name: 'Nepal' },
  }

  // 4. WebSite
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    name: 'Pradeep Shah',
    url: `${BASE}/`,
    description: 'Personal portfolio and business website of Pradeep Shah — CEO of Siyaram Hardware & Suppliers and Founder of Standard ERP, Birgunj, Nepal.',
    publisher: {
      '@type': 'Person',
      '@id': `${BASE}/#pradeep-shah`,
      name: 'Pradeep Shah',
    },
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // 5. WebPage — homepage
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE}/#webpage`,
    url: `${BASE}/`,
    name: 'Pradeep Shah — CEO & Founder | Birgunj, Nepal',
    isPartOf: { '@id': `${BASE}/#website` },
    about: { '@id': `${BASE}/#pradeep-shah` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${BASE}/pradeep-shah.jpg`,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      ],
    },
    inLanguage: 'en',
    dateModified: new Date().toISOString(),
  }

  // 6. BreadcrumbList — all pages
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',             item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'About',            item: `${BASE}/about` },
      { '@type': 'ListItem', position: 3, name: 'Siyaram Hardware', item: `${BASE}/siyaram-hardware` },
      { '@type': 'ListItem', position: 4, name: 'Standard ERP',     item: `${BASE}/standard-erp` },
      { '@type': 'ListItem', position: 5, name: 'Blog',             item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 6, name: 'Contact',          item: `${BASE}/contact` },
    ],
  }

  // 7. FAQ — common questions (boosts rich snippets)
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Pradeep Shah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pradeep Shah is a Computer Engineer from Kurukshetra University, CEO of Siyaram Hardware & Suppliers in Birgunj, Nepal, and Founder of Standard ERP — a business management software platform for SMEs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Siyaram Hardware & Suppliers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Siyaram Hardware & Suppliers is a hardware and construction materials business located in Birgunj, Nepal. It supplies construction materials, hardware tools, plumbing supplies, and industrial products to contractors, builders, and local businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Standard ERP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard ERP is an upcoming business management software developed by Pradeep Shah, designed for small and medium businesses in Nepal. It integrates accounting, inventory management, billing, and reporting into one platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Siyaram Hardware & Suppliers located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Siyaram Hardware & Suppliers is located in Nagawa Chowk, Birgunj, Parsa, Nepal. You can contact them at +977 9815256619 or email ipradeepshah@gmail.com.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Pradeep Shah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact Pradeep Shah via email at ipradeepshah@gmail.com, WhatsApp at +977 9815256619, or through the contact form at pradeepshah.com.np/contact.',
        },
      },
    ],
  }

  const schemas = [person, hardware, erp, website, webpage, breadcrumbs, faq]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Hidden sameAs for crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <a rel="me" href="https://www.linkedin.com/in/ipradeepshah/">LinkedIn</a>
        <a rel="me" href="https://x.com/i_pradeepshah">Twitter/X</a>
        <a rel="me" href="https://www.instagram.com/i_pradeepshah">Instagram</a>
        <a rel="me" href="https://www.tiktok.com/@ipradeepshah">TikTok</a>
        <a rel="me" href="https://github.com/ipradeepshah">GitHub</a>
        <a rel="me" href="https://www.facebook.com/ipradeepshah/">Facebook</a>
      </div>
    </>
  )
}
