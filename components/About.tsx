import styles from './About.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className={styles.about} aria-label="About Pradeep Shah">
      <div className="section-inner">
        <div className={styles.grid}>
          {/* Visual */}
          <div className={`${styles.visual} fade-in`}>
            <div className={styles.frame}>
              <div className={styles.frameInner}>
                <div className={styles.avatar}>
                  <Image
                  src="/pradeep-shah.jpg"
                  alt="Pradeep Shah — CEO & Founder"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
                </div>
                <div className={styles.frameLabel}>Pradeep Shah</div>
              </div>
              <div className={styles.badge}>CEO<br />&amp; Founder</div>
            </div>
          </div>

          {/* Text */}
          <div className={`${styles.text} fade-in`}>
            <div className="section-tag">About Me</div>
            <h2>
              Engineer.<br /><em>Entrepreneur.</em><br />Visionary.
            </h2>
            <div className="gold-divider" />

            <div className={styles.eduBadge}>
              🎓&nbsp;
              <span>Kurukshetra University, India</span>
              &nbsp;·&nbsp; B. Tech. in Computer Science & Engineering
            </div>

            <p>
              I&apos;m Pradeep Shah — a Computer Engineer by training, CEO by conviction, and founder by passion.
              My journey is defined by one belief: that technology, applied with precision and purpose,
              can transform entire industries.
            </p>
            <p>
              As the CEO of <strong>Standard Hardware &amp; Supply</strong>, I lead a growing hardware and
              supply business in Birgunj, Nepal — serving contractors, builders, and local businesses with
              construction materials, hardware tools, plumbing supplies, and industrial products.
            </p>
            <p>
              As the founder of <strong>Standard ERP</strong>, I&apos;m building next-generation business
              management software to help SMEs in Nepal digitize their operations — from accounting and
              inventory to billing and reporting, all in one platform.
            </p>

            <div className={styles.pills}>
              {['Computer Engineering','CEO Leadership','ERP Systems','Supply Chain','SME Software','Product Strategy','Tech Entrepreneurship','Birgunj, Nepal'].map(p => (
                <span key={p} className={styles.pill}>{p}</span>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/about" className="btn-outline" style={{ fontSize: '0.78rem' }}>Read Full Story →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
