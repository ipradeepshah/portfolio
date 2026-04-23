import Link from 'next/link'
import styles from './HomeBizCards.module.css'

export default function HomeBizCards() {
  return (
    <section className={styles.section} aria-label="My Ventures">
      <div className="section-inner">
        <div className="section-tag fade-in">My Ventures</div>
        <h2 className="fade-in">Built with<br /><em>Purpose &amp; Precision</em></h2>

        <div className={styles.grid}>
          <div className={`${styles.card} fade-in`}>
            <div className={styles.num}>01</div>
            <div className={styles.icon}>⚙</div>
            <div className={styles.type}>Hardware Business · CEO</div>
            <h3>Siyaram Hardware &amp; Suppliers</h3>
            <div className={styles.status}>✦ Active · Birgunj, Nepal</div>
            <p>A growing hardware and supply business in Birgunj, Nepal — specializing in construction materials, hardware tools, plumbing supplies, and industrial products for contractors and builders.</p>
            <ul className={styles.features}>
              <li>Construction materials &amp; hardware tools</li>
              <li>Plumbing supplies &amp; industrial products</li>
              <li>Serving contractors &amp; builders in Nepal</li>
            </ul>
            <Link href="/siyaram-hardware" className={styles.link}>View Full Details</Link>
          </div>

          <div className={`${styles.card} fade-in`}>
            <div className={styles.num}>02</div>
            <div className={styles.icon}>⬡</div>
            <div className={styles.type}>Business Software · Founder</div>
            <h3>Standard ERP</h3>
            <div className={`${styles.status} ${styles.dev}`}>⚡ Currently In Development</div>
            <p>An upcoming business management software integrating accounting, inventory, billing, and reporting into a single platform — designed specifically for small and medium businesses in Nepal.</p>
            <ul className={styles.features}>
              <li>Accounting &amp; inventory management</li>
              <li>Billing &amp; business reporting</li>
              <li>Built for Nepali SMEs</li>
            </ul>
            <Link href="/standard-erp" className={styles.link}>View Full Details</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
