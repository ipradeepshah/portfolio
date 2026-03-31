import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section
      id="hero"
      className={styles.hero}
      aria-label="Introduction"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className={styles.bg} />
      <div className={styles.grid} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span itemProp="jobTitle">CEO · Founder · Computer Engineer</span>
        </div>
        <h1 itemProp="name">
          Pradeep<br /><em>Shah</em>
        </h1>
        <p className={styles.sub} itemProp="description">
          Bridging engineering excellence and business leadership — building ventures that redefine industries.
        </p>
        <div className={styles.actions}>
          <a href="#businesses" className="btn-primary">Explore Ventures</a>
          <a href="#contact" className="btn-outline">Connect With Me</a>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNum}>2</div>
          <div className={styles.statLabel}>Ventures Built</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>KU</div>
          <div className={styles.statLabel}>Kurukshetra University</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>NP</div>
          <div className={styles.statLabel}>Birgunj, Nepal</div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        Scroll to explore
      </div>
    </section>
  )
}
