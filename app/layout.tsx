import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const BASE = 'https://pradeepshah.com.np'

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: 'Pradeep Shah | CEO Standard Hardware & Supply | Founder Standard ERP | Birgunj Nepal',
    template: '%s | Pradeep Shah',
  },

  description: 'Pradeep Shah — Computer Engineer from Kurukshetra University, CEO of Standard Hardware & Supply in Birgunj Nepal, and Founder of Standard ERP business management software for SMEs in Nepal.',

  keywords: [
    'Pradeep Shah', 'Pradeep Shah Nepal', 'Pradeep Shah CEO', 'Pradeep Shah Birgunj',
    'ipradeepshah', 'i_pradeepshah', 'Standard Hardware Supply', 'Standard Hardware Birgunj',
    'Standard ERP Nepal', 'Standard ERP software',
    'hardware store Birgunj', 'construction materials Birgunj Nepal',
    'ERP software Nepal', 'business management software Nepal',
    'Computer Engineer Nepal', 'CEO Birgunj Nepal',
    'Kurukshetra University Nepal alumni',
    'hardware supply Nepal', 'plumbing supplies Birgunj',
  ],

  authors: [{ name: 'Pradeep Shah', url: BASE }],
  creator: 'Pradeep Shah',
  publisher: 'Pradeep Shah',
  generator: 'Next.js',

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: BASE + '/',
    languages: { 'en-US': BASE + '/', 'en-NP': BASE + '/' },
  },

  openGraph: {
    type: 'profile',
    url: BASE + '/',
    title: 'Pradeep Shah | CEO & Founder | Computer Engineer | Nepal',
    description: 'CEO of Standard Hardware & Supply (Birgunj, Nepal) and Founder of Standard ERP. Computer Engineer from Kurukshetra University.',
    siteName: 'Pradeep Shah',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pradeep Shah — CEO of Standard Hardware & Supply | Founder of Standard ERP',
        type: 'image/jpeg',
      },
    ],
    firstName: 'Pradeep',
    lastName: 'Shah',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@i_pradeepshah',
    creator: '@i_pradeepshah',
    title: 'Pradeep Shah | CEO & Founder | Computer Engineer | Nepal',
    description: 'CEO of Standard Hardware & Supply, Birgunj. Founder of Standard ERP. Computer Engineer, Nepal.',
    images: [{ url: '/og-image.jpg', alt: 'Pradeep Shah — CEO & Founder' }],
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },

  category: 'Business & Technology',

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#c9a84c' }],
  },

  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Bebas Neue display font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

        {/* Geo / Local SEO — Birgunj, Parsa, Nepal */}
        <meta name="geo.region" content="NP-P2" />
        <meta name="geo.placename" content="Birgunj, Parsa, Nepal" />
        <meta name="geo.position" content="27.0104;84.8779" />
        <meta name="ICBM" content="27.0104, 84.8779" />

        {/* Additional SEO */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="Pradeep Shah" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
