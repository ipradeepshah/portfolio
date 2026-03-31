import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Standard ERP | Business Management Software Nepal | ERP for SMEs',
  description: 'Standard ERP is an upcoming business management software for small and medium businesses in Nepal. Integrates accounting, inventory management, billing, and reporting in one platform.',
  keywords: ['ERP software Nepal', 'business management software Nepal', 'accounting software Nepal', 'inventory management Nepal', 'SME software Nepal', 'Standard ERP'],
  alternates: { canonical: 'https://pradeepshah.com.np/standard-erp' },
  openGraph: {
    title: 'Standard ERP | Business Management Software for Nepal SMEs',
    description: 'Upcoming ERP software integrating accounting, inventory, billing and reporting for small and medium businesses in Nepal.',
    url: 'https://pradeepshah.com.np/standard-erp',
  },
}

const features = [
  { icon: '📒', title: 'Accounting & Finance',     desc: 'Complete double-entry accounting, journal entries, ledgers, profit & loss, balance sheet, and financial reporting — all automated.' },
  { icon: '📦', title: 'Inventory Management',     desc: 'Real-time stock tracking, purchase orders, stock alerts, multi-location inventory, and product catalogue management.' },
  { icon: '🧾', title: 'Billing & Invoicing',      desc: 'Professional invoices, quotations, receipts, VAT calculations, and payment tracking — paperless and instant.' },
  { icon: '📊', title: 'Reports & Analytics',      desc: 'Sales reports, expense summaries, inventory reports, and business dashboards that give you a clear view of your business health.' },
  { icon: '👥', title: 'Customer Management',      desc: 'Customer database, purchase history, credit management, and relationship tracking to strengthen business relationships.' },
  { icon: '🏢', title: 'Supplier Management',      desc: 'Vendor database, purchase management, payment tracking, and supplier performance monitoring.' },
]

const problems = [
  { q: 'Using Excel for accounting?',        a: 'Standard ERP automates your entire accounting process — no more manual entries or formula errors.' },
  { q: 'Losing track of stock?',             a: 'Real-time inventory tracking means you always know exactly what you have and what needs reordering.' },
  { q: 'Billing takes too long?',            a: 'Generate professional invoices in seconds with automatic VAT calculations and payment tracking.' },
  { q: 'No clear business overview?',        a: 'Dashboard reports show your sales, expenses, and profit in real-time — make decisions with confidence.' },
]

export default function StandardERPPage() {
  return (
    <>
      <ClientEffects />
      <Nav />
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroGrid} />
          <div className="hero-inner">
            <div className={styles.heroInner}>
              <div className={`${styles.heroContent} fade-in`}>
                <div className="section-tag">Business Software · In Development</div>
                <h1>Standard <em>ERP</em></h1>
                <p className={styles.heroSub}>
                  One platform to manage your entire business — accounting, inventory, billing, and reporting. Built specifically for small and medium businesses in Nepal.
                </p>
                <div className={styles.devBadge}>
                  <div className={styles.devDot} />
                  <span>Currently In Development</span>
                </div>
                <div className={styles.heroBtns}>
                  <Link href="/contact" className="btn-primary">Get Early Access</Link>
                  <Link href="/about" className="btn-outline">Meet the Founder</Link>
                </div>
              </div>
              <div className={`${styles.heroVisual} fade-in`}>
                <div className={styles.mockDashboard}>
                  <div className={styles.mockBar}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.mockCards}>
                    {['Revenue', 'Inventory', 'Invoices', 'Expenses'].map(l => (
                      <div key={l} className={styles.mockCard}>
                        <div className={styles.mockCardLine} />
                        <div className={styles.mockCardLabel}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.mockChart}>
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className={styles.mockBar2} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className={styles.problemSection}>
          <div className="section-inner">
            <div className="section-tag fade-in">The Problem</div>
            <h2 className="fade-in">Nepali SMEs Deserve<br /><em>Better Tools</em></h2>
            <p className={`${styles.problemIntro} fade-in`}>Most small and medium businesses in Nepal still rely on manual processes, spreadsheets, and paper records. This leads to errors, wasted time, and poor decision-making.</p>
            <div className={styles.problemGrid}>
              {problems.map(p => (
                <div key={p.q} className={`${styles.problemCard} fade-in`}>
                  <div className={styles.problemQ}>❌ &nbsp;{p.q}</div>
                  <div className={styles.problemA}>✅ &nbsp;{p.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.featuresSection}>
          <div className="section-inner">
            <div className="section-tag fade-in">Features</div>
            <h2 className="fade-in">Everything Your Business<br /><em>Needs in One Place</em></h2>
            <div className={styles.featuresGrid}>
              {features.map(f => (
                <div key={f.title} className={`${styles.featureCard} fade-in`}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About founder */}
        <section className={styles.founderSection}>
          <div className="section-inner">
            <div className={`${styles.founderBox} fade-in`}>
              <div className={styles.founderAvatar}>
                <img src="/pradeep-shah-founder.jpg" alt="Pradeep Shah" />
              </div>
              <div className={styles.founderText}>
                <div className="section-tag">Built By</div>
                <h2>Pradeep Shah<br /><em>Founder &amp; Developer</em></h2>
                <p>Standard ERP is being built by Pradeep Shah — a Computer Engineer from Kurukshetra University who also runs Standard Hardware &amp; Supply in Birgunj. Having experienced firsthand the challenges of managing a business manually, Pradeep is building the software he wished existed when he started.</p>
                <Link href="/about" className={styles.founderLink}>Learn more about Pradeep →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="section-inner">
            <div className={`${styles.ctaBox} fade-in`}>
              <h2>Be the First to<br /><em>Get Access</em></h2>
              <p>Standard ERP is currently in development. Register your interest now and be among the first businesses in Nepal to use it when it launches.</p>
              <Link href="/contact" className="btn-primary">Register Interest →</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
