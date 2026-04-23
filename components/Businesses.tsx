import styles from './Businesses.module.css'

const businesses = [
  {
    num: '01',
    icon: '⚙',
    type: 'Hardware Business · CEO',
    name: 'Siyaram Hardware & Suppliers',
    status: '✦ Active · Birgunj, Nepal',
    statusClass: 'active',
    description:
      'A growing hardware and supply business in Birgunj, Nepal, specializing in construction materials, hardware tools, plumbing supplies, and industrial products. Founded with a commitment to quality and reliability — simplifying procurement for contractors, builders, and local businesses.',
    features: [
      'Construction materials & hardware tools',
      'Plumbing supplies & industrial products',
      'Serving contractors, builders & local businesses',
      'Modernizing operations through technology & innovation',
    ],
    link: '#contact',
    linkText: 'Get in Touch',
  },
  {
    num: '02',
    icon: '⬡',
    type: 'Business Software · Founder',
    name: 'Standard ERP',
    status: '⚡ Currently In Development',
    statusClass: 'dev',
    description:
      'An upcoming business management software designed to transform how small and medium-sized businesses manage their operations. Standard ERP integrates accounting, inventory management, billing, and reporting into a single, easy-to-use platform tailored for the Nepali market.',
    features: [
      'Accounting & financial management',
      'Inventory management & billing',
      'Business reporting & analytics',
      'Scalable digitization for Nepali SMEs',
    ],
    link: '#contact',
    linkText: 'Stay Updated',
  },
]

export default function Businesses() {
  return (
    <section id="businesses" aria-label="Business Ventures" className={styles.section}>
      <div className="section-inner">
        <div className="section-tag fade-in">My Ventures</div>
        <h2 className="fade-in">
          Built with<br /><em>Purpose &amp; Precision</em>
        </h2>

        <div className={styles.grid}>
          {businesses.map((b) => (
            <div key={b.num} className={`${styles.card} fade-in`}>
              <div className={styles.num}>{b.num}</div>
              <div className={styles.icon}>{b.icon}</div>
              <div className={styles.type}>{b.type}</div>
              <h3>{b.name}</h3>
              <div className={`${styles.status} ${b.statusClass === 'dev' ? styles.dev : ''}`}>
                {b.status}
              </div>
              <p>{b.description}</p>
              <ul className={styles.features}>
                {b.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href={b.link} className={styles.link}>{b.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
