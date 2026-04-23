import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Siyaram Hardware & Suppliers | Hardware Store Birgunj Nepal | Construction Materials',
  description: 'Siyaram Hardware & Suppliers is a leading hardware and construction materials business in Birgunj, Nepal. We supply hardware tools, plumbing supplies, construction materials and industrial products to contractors and builders.',
  keywords: ['hardware store Birgunj', 'construction materials Nepal', 'hardware supply Birgunj', 'plumbing supplies Nepal', 'industrial products Birgunj', 'Siyaram Hardware Suppliers'],
  alternates: { canonical: 'https://pradeepshah.com.np/siyaram-hardware' },
  openGraph: {
    title: 'Siyaram Hardware & Supply | Birgunj, Nepal',
    description: 'Leading hardware and construction materials supplier in Birgunj, Nepal. Serving contractors, builders, and local businesses.',
    url: 'https://pradeepshah.com.np/siyaram-hardware',
  },
}

const products = [
  { icon: '🏗', name: 'Construction Materials', desc: 'Cement, sand, bricks, steel rods, TMT bars, and all essential construction materials for residential and commercial projects.' },
  { icon: '🔧', name: 'Hardware Tools',          desc: 'Hand tools, power tools, fasteners, nuts, bolts, and professional-grade hardware equipment for contractors and builders.' },
  { icon: '🚿', name: 'Plumbing Supplies',       desc: 'Pipes, fittings, valves, tanks, pumps, and complete plumbing solutions for construction and renovation projects.' },
  { icon: '⚡', name: 'Electrical Supplies',     desc: 'Wires, cables, switches, sockets, MCBs, and electrical components for residential and commercial installations.' },
  { icon: '🏭', name: 'Industrial Products',     desc: 'Industrial-grade materials, safety equipment, machinery parts, and specialized products for commercial operations.' },
  { icon: '🎨', name: 'Paints & Finishes',       desc: 'Interior and exterior paints, primers, varnishes, and finishing products from trusted brands.' },
]

const whyUs = [
  { icon: '✓', title: 'Quality Assured',      desc: 'Every product is sourced from reliable manufacturers and verified for quality before reaching our customers.' },
  { icon: '✓', title: 'Wide Product Range',   desc: 'One-stop shop for all construction and hardware needs — saving you time and simplifying procurement.' },
  { icon: '✓', title: 'Competitive Pricing',  desc: 'Best prices in Birgunj with bulk discounts available for contractors and regular business customers.' },
  { icon: '✓', title: 'Reliable Supply',      desc: 'Consistent stock availability so your projects never face delays due to material shortages.' },
  { icon: '✓', title: 'Expert Guidance',      desc: 'Experienced staff who understand construction needs and can recommend the right products for your project.' },
  { icon: '✓', title: 'Tech-Driven',          desc: 'Led by a Computer Engineer CEO focused on modernizing operations through technology and innovation.' },
]

export default function SiyaramHardwarePage() {
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
                <div className="section-tag">Hardware Business · Birgunj, Nepal</div>
                <h1>Siyaram Hardware<br /><em>&amp; Suppliers</em></h1>
                <p className={styles.heroSub}>
                  Your trusted partner for construction materials, hardware tools, plumbing supplies, and industrial products in Birgunj, Nepal.
                </p>
                <div className={styles.heroBtns}>
                  <Link href="/contact" className="btn-primary">Contact Us</Link>
                  <a href="https://wa.me/9779815256619" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp Us</a>
                </div>
              </div>
              <div className={`${styles.infoCard} fade-in`}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Status</span>
                  <span className={styles.infoValue} style={{color:'var(--gold)'}}>✦ Active Business</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Birgunj, Parsa, Nepal</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>CEO</span>
                  <span className={styles.infoValue}>Pradeep Shah</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Serves</span>
                  <span className={styles.infoValue}>Contractors, Builders &amp; Businesses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Business */}
        <section className={styles.aboutSection}>
          <div className="section-inner">
            <div className={styles.aboutGrid}>
              <div className="fade-in">
                <div className="section-tag">About the Business</div>
                <h2>Hardware &amp; Supply<br /><em>Excellence in Birgunj</em></h2>
                <div className="gold-divider" />
                <p>Siyaram Hardware &amp; Suppliers is a growing hardware and supply business located in Birgunj, Nepal. Founded with a commitment to quality and reliability, we have established ourselves as a trusted supplier for contractors, builders, and local businesses across the region.</p>
                <p>We specialize in providing construction materials, hardware tools, plumbing supplies, and essential industrial products — all under one roof. Our goal is to simplify procurement for our customers by offering a wide product range, dependable service, and expert guidance.</p>
                <p>Under the leadership of CEO <strong>Pradeep Shah</strong>, a Computer Engineer by profession, Siyaram Hardware &amp; Suppliers is actively modernizing its operations through technology — making it easier for customers to find, order, and receive the products they need.</p>
              </div>
              <div className="fade-in">
                <div className={styles.statsGrid}>
                  {[
                    { num: '100+', label: 'Product Categories' },
                    { num: 'B2B',  label: 'Business Focus' },
                    { num: 'NP',   label: 'Based in Nepal' },
                    { num: '24/7', label: 'WhatsApp Support' },
                  ].map(s => (
                    <div key={s.label} className={styles.statCard}>
                      <div className={styles.statNum}>{s.num}</div>
                      <div className={styles.statLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className={styles.productsSection}>
          <div className="section-inner">
            <div className="section-tag fade-in">What We Supply</div>
            <h2 className="fade-in">Our Product<br /><em>Categories</em></h2>
            <div className={styles.productsGrid}>
              {products.map(p => (
                <div key={p.name} className={`${styles.productCard} fade-in`}>
                  <div className={styles.productIcon}>{p.icon}</div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className={styles.whySection}>
          <div className="section-inner">
            <div className="section-tag fade-in">Why Choose Us</div>
            <h2 className="fade-in">The Siyaram Hardware<br /><em>Difference</em></h2>
            <div className={styles.whyGrid}>
              {whyUs.map(w => (
                <div key={w.title} className={`${styles.whyCard} fade-in`}>
                  <div className={styles.whyIcon}>{w.icon}</div>
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="section-inner">
            <div className={`${styles.ctaBox} fade-in`}>
              <h2>Need Hardware Supplies<br /><em>in Birgunj?</em></h2>
              <p>Get in touch with us today — we&apos;ll help you find the right products for your project at the best prices.</p>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className="btn-primary">Contact Us</Link>
                <a href="https://wa.me/9779815256619" target="_blank" rel="noopener noreferrer" className="btn-outline">+977 9815256619</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
