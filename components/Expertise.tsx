import styles from './Expertise.module.css'

const skills = [
  { icon: '💻', title: 'Software Engineering',     desc: 'B. Tech. in Computer Engineering from Kurukshetra University — systems architecture, full-stack development, and enterprise software design.' },
  { icon: '🏢', title: 'CEO Leadership',            desc: 'Executive leadership at Siyaram Hardware & Suppliers — driving vision, strategy, and modernizing traditional business through technology in Birgunj.' },
  { icon: '📊', title: 'ERP & Business Systems',    desc: 'Founder-level expertise designing Standard ERP — a practical, integrated business management platform built specifically for SMEs in Nepal.' },
  { icon: '🔗', title: 'Supply Chain & Hardware',   desc: 'Hands-on expertise in construction materials, hardware tools, plumbing supplies, and B2B procurement and supply chain management in Nepal.' },
  { icon: '🚀', title: 'Product Development',       desc: 'Full-cycle product thinking — from identifying SME pain points to building software that solves real operational problems efficiently.' },
  { icon: '📈', title: 'Business Strategy',         desc: 'Strategic business development, digital transformation planning, and growth execution — bridging the gap between engineering and commerce.' },
]

export default function Expertise() {
  return (
    <section id="expertise" className={styles.expertise} aria-label="Core Expertise">
      <div className="section-inner">
        <div className="section-tag fade-in">Core Expertise</div>
        <h2 className="fade-in">Skills that<br /><em>Drive Results</em></h2>
        <div className={styles.grid}>
          {skills.map((s) => (
            <div key={s.title} className={`${styles.card} fade-in`}>
              <span className={styles.icon}>{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
