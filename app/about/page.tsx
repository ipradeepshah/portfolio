import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Pradeep Shah | Computer Engineer | CEO & Founder | Nepal",
  description:
    "Learn about Pradeep Shah — Computer Engineer from Kurukshetra University, CEO of Standard Hardware & Supply, and Founder of Standard ERP. Based in Birgunj, Nepal.",
  alternates: { canonical: "https://pradeepshah.com.np/about" },
  openGraph: {
    title: "About Pradeep Shah | Computer Engineer | CEO & Founder",
    description:
      "Computer Engineer, CEO of Standard Hardware & Supply, Founder of Standard ERP. Based in Birgunj, Nepal.",
    url: "https://pradeepshah.com.np/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <ClientEffects />
      <Nav />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="hero-inner">
            <div className="section-tag fade-in">About Me</div>
            <h1 className="fade-in">
              Pradeep <em>Shah</em>
            </h1>
            <p className={`${styles.heroSub} fade-in`}>
              Computer Engineer · CEO · Founder · Based in Birgunj, Nepal
            </p>
          </div>
        </section>

        {/* Story */}
        <section className={styles.storySection}>
          <div className="section-inner">
            <div className={styles.storyGrid}>
              <div className={`${styles.visual} fade-in`}>
                <div className={styles.frame}>
                  <div className={styles.frameInner}>
                    <Image
                      src="/pradeep-shah.jpg"
                      alt="Pradeep Shah — CEO & Founder"
                      fill
                      sizes="(max-width: 900px) 100vw, 40vw"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                    <div className={styles.frameLabel}>Pradeep Shah</div>
                  </div>
                  <div className={styles.badge}>
                    CEO
                    <br />
                    &amp; Founder
                  </div>
                </div>
                <div className={`${styles.eduCard} fade-in`}>
                  <div className={styles.eduIcon}>🎓</div>
                  <div>
                    <div className={styles.eduTitle}>
                      Kurukshetra University , India
                    </div>
                    <div className={styles.eduSub}>
                      B. Tech in Computer Science & Engineering
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.story} fade-in`}>
                <div className="section-tag">My Story</div>
                <h2>
                  Engineering meets
                  <br />
                  <em>Entrepreneurship</em>
                </h2>
                <div className="gold-divider" />
                <p>
                  I'm Pradeep Shah — a Computer Engineer by training, CEO by
                  conviction, and founder by passion. Born and raised in Nepal,
                  I pursued my engineering degree at Kurukshetra University in
                  India, where I built a strong foundation in computer science,
                  software development, and systems thinking.
                </p>
                <p>
                  Returning to Birgunj, Nepal, I took the helm of{" "}
                  <strong>Standard Hardware &amp; Supply</strong> — a growing
                  hardware and construction materials business serving
                  contractors, builders, and local businesses across the region.
                  As CEO, my focus has been on combining operational excellence
                  with modern technology to build a business that's both
                  reliable and forward-looking.
                </p>
                <p>
                  Recognizing that small and medium businesses in Nepal struggle
                  with outdated, manual processes, I founded{" "}
                  <strong>Standard ERP</strong> — a business management software
                  platform currently in development that will integrate
                  accounting, inventory, billing, and reporting into one
                  easy-to-use system built specifically for the Nepali market.
                </p>
                <p>
                  My engineering background gives me a unique edge: I don't just
                  identify business problems — I architect solutions to solve
                  them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={styles.skillsSection}>
          <div className="section-inner">
            <div className="section-tag fade-in">Skills &amp; Expertise</div>
            <h2 className="fade-in">
              What I Bring
              <br />
              <em>to the Table</em>
            </h2>
            <div className={styles.skillsGrid}>
              {[
                {
                  icon: "💻",
                  title: "Computer Engineering",
                  desc: "B. Tech from Kurukshetra University — systems architecture, full-stack development, database design, and enterprise software.",
                },
                {
                  icon: "🏢",
                  title: "Business Leadership",
                  desc: "CEO-level execution at Standard Hardware & Supply — strategy, operations, team management, and business modernization.",
                },
                {
                  icon: "📊",
                  title: "ERP & Business Systems",
                  desc: "Designing Standard ERP from the ground up — deep knowledge of accounting flows, inventory systems, and reporting.",
                },
                {
                  icon: "🔗",
                  title: "Supply Chain",
                  desc: "Procurement, vendor management, logistics, and distribution of construction materials and hardware in Nepal.",
                },
                {
                  icon: "🚀",
                  title: "Product Strategy",
                  desc: "End-to-end product thinking — market research, feature prioritization, technical execution, and go-to-market.",
                },
                {
                  icon: "📈",
                  title: "Digital Transformation",
                  desc: "Helping traditional businesses adopt modern technology — from manual processes to integrated digital systems.",
                },
              ].map((s) => (
                <div key={s.title} className={`${styles.skillCard} fade-in`}>
                  <span className={styles.skillIcon}>{s.icon}</span>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timelineSection}>
          <div className="section-inner">
            <div className="section-tag fade-in">Journey</div>
            <h2 className="fade-in">
              My <em>Timeline</em>
            </h2>
            <div className={styles.timeline}>
              {[
                {
                  year: "Education",
                  title: "B.E. Computer Engineering",
                  sub: "Kurukshetra University, Kurukshetra, India",
                  desc: "Completed a Bachelor of Technology in Computer Science Engineering, building expertise in software development, algorithms, databases, and systems design.",
                },
                {
                  year: "Career",
                  title: "CEO — Standard Hardware & Supply",
                  sub: "Birgunj, Parsa, Nepal",
                  desc: "Took leadership of Standard Hardware & Supply, driving growth, modernizing operations, and building a reputation for quality and reliability in the hardware and construction materials sector.",
                },
                {
                  year: "Founding",
                  title: "Founded Standard ERP",
                  sub: "In Development",
                  desc: "Identified a major gap in business software for Nepali SMEs and began building Standard ERP — an integrated business management platform designed specifically for the local market.",
                },
                {
                  year: "Vision",
                  title: "Building the Future",
                  sub: "pradeepshah.com.np",
                  desc: "Continuing to grow Standard Hardware & Supply while developing Standard ERP to empower thousands of small and medium businesses across Nepal with modern, accessible technology.",
                },
              ].map((t, i) => (
                <div key={i} className={`${styles.timelineItem} fade-in`}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineYear}>{t.year}</div>
                    <h3>{t.title}</h3>
                    <div className={styles.timelineSub}>{t.sub}</div>
                    <p>{t.desc}</p>
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
              <h2>
                Want to <em>Connect?</em>
              </h2>
              <p>
                Whether you&apos;re interested in Standard Hardware &amp;
                Supply, Standard ERP, or want to discuss a collaboration —
                I&apos;d love to hear from you.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link href="/standard-erp" className="btn-outline">
                  View Standard ERP
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
