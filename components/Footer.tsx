import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer
      className={styles.footer}
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content="Pradeep Shah" />
      <meta itemProp="url" content="https://pradeepshah.com.np/" />

      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>Pradeep Shah</div>
          <p className={styles.tagline}>CEO · Founder · Computer Engineer<br />Birgunj, Nepal</p>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/ipradeepshah/" target="_blank" rel="noopener noreferrer me" itemProp="sameAs" className={styles.social}>LinkedIn</a>
            <a href="https://x.com/i_pradeepshah"                target="_blank" rel="noopener noreferrer me" itemProp="sameAs" className={styles.social}>Twitter / X</a>
            <a href="https://www.instagram.com/i_pradeepshah"    target="_blank" rel="noopener noreferrer me" itemProp="sameAs" className={styles.social}>Instagram</a>
            <a href="https://www.tiktok.com/@ipradeepshah"       target="_blank" rel="noopener noreferrer me" itemProp="sameAs" className={styles.social}>TikTok</a>
            <a href="https://github.com/ipradeepshah"            target="_blank" rel="noopener noreferrer me" itemProp="sameAs" className={styles.social}>GitHub</a>
            <a href="https://www.facebook.com/ipradeepshah/"     target="_blank" rel="noopener noreferrer me" itemProp="sameAs" className={styles.social}>Facebook</a>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Pages</div>
          <Link href="/"                  className={styles.colLink}>Home</Link>
          <Link href="/about"             className={styles.colLink}>About Me</Link>
          <Link href="/standard-hardware" className={styles.colLink}>Standard Hardware</Link>
          <Link href="/standard-erp"      className={styles.colLink}>Standard ERP</Link>
          <Link href="/blog"              className={styles.colLink}>Blog</Link>
          <Link href="/contact"           className={styles.colLink}>Contact</Link>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Ventures</div>
          <Link href="/standard-hardware" className={styles.colLink}>Standard Hardware &amp; Supply</Link>
          <Link href="/standard-erp"      className={styles.colLink}>Standard ERP</Link>
          <a href="mailto:ipradeepshah@gmail.com" className={styles.colLink}>ipradeepshah@gmail.com</a>
          <a href="https://wa.me/9779815256619" target="_blank" rel="noopener noreferrer" className={styles.colLink}>+977 9815256619</a>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Recent Posts</div>
          <Link href="/blog/why-nepali-sme-need-erp"                      className={styles.colLink}>Why SMEs Need ERP</Link>
          <Link href="/blog/construction-materials-birgunj"                className={styles.colLink}>Construction Materials Birgunj</Link>
          <Link href="/blog/accounting-software-nepal-small-business"      className={styles.colLink}>Accounting for Nepal SMEs</Link>
          <Link href="/blog/digital-transformation-nepal-business"         className={styles.colLink}>Digital Transformation Nepal</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div
          className={styles.copy}
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          © 2025 Pradeep Shah · <span itemProp="addressLocality">Birgunj</span>, <span itemProp="addressRegion">Parsa</span>, <span itemProp="addressCountry">Nepal</span> · All rights reserved.
        </div>
        <div className={styles.bottomLinks}>
          <Link href="/sitemap.xml" className={styles.bottomLink}>Sitemap</Link>
          <Link href="/contact"     className={styles.bottomLink}>Contact</Link>
        </div>
      </div>
    </footer>
  )
}
