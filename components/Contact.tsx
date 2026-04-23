'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

const contactItems = [
  { icon: '✉', label: 'Email',            value: 'ipradeepshah@gmail.com',                   href: 'mailto:ipradeepshah@gmail.com' },
  { icon: '📱', label: 'Phone / WhatsApp', value: '+977 9815256619',                           href: 'https://wa.me/9779815256619' },
  { icon: '🏢', label: 'Company',          value: 'Siyaram Hardware & Suppliers, Birgunj, Nepal', href: null },
  { icon: '⬡',  label: 'Product',          value: 'Standard ERP — Coming Soon',                href: null },
  { icon: '🌐', label: 'Website',          value: 'pradeepshah.com.np',                        href: 'https://pradeepshah.com.np' },
  { icon: '📍', label: 'Location',         value: 'Birgunj, Parsa, Nepal',                     href: null },
]

const socials = [
  { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/ipradeepshah/' },
  { label: 'Twitter / X', href: 'https://x.com/i_pradeepshah' },
  { label: 'Instagram',   href: 'https://www.instagram.com/i_pradeepshah' },
  { label: 'TikTok',      href: 'https://www.tiktok.com/@ipradeepshah' },
  { label: 'GitHub',      href: 'https://github.com/ipradeepshah' },
  { label: 'Facebook',    href: 'https://www.facebook.com/ipradeepshah/' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [name,    setName]    = useState('')
  const [email,   setEmail]   = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status,  setStatus]  = useState<Status>('idle')
  const [errMsg,  setErrMsg]  = useState('')

  async function handleSubmit() {
    // Client-side validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrMsg('Please fill in all fields.')
      setStatus('error')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send.')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err: unknown) {
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  const btnLabel =
    status === 'loading' ? 'Sending...' :
    status === 'success' ? 'Message Sent ✓' :
    'Send Message →'

  return (
    <section id="contact" aria-label="Contact Pradeep Shah" className={styles.section}>
      <div className="section-inner">
        <div className={styles.wrap}>

          {/* Info */}
          <div className={`${styles.info} fade-in`}>
            <div className="section-tag">Contact</div>
            <h2>Let&apos;s Build<br /><em>Something Great</em></h2>
            <div className="gold-divider" />
            <p>
              Whether you&apos;re interested in Siyaram Hardware &amp; Suppliers, want to know more about
              Standard ERP, or simply want to connect — I&apos;d love to hear from you.
            </p>

            <div className={styles.items}>
              {contactItems.map((c) => (
                <div key={c.label} className={styles.item}>
                  <div className={styles.itemIcon}>{c.icon}</div>
                  <div className={styles.itemText}>
                    <strong>{c.label}</strong>
                    {c.href
                      ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.value}</a>
                      : <span>{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer me" className={styles.socialBtn}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`${styles.form} fade-in`}>
            <div className={styles.field}>
              <label htmlFor="fname">Your Name</label>
              <input
                id="fname" type="text" placeholder="Full name"
                value={name} onChange={(e) => setName(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="femail">Email Address</label>
              <input
                id="femail" type="email" placeholder="your@email.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="fsubject">Subject</label>
              <input
                id="fsubject" type="text" placeholder="Standard Hardware, ERP, or general enquiry"
                value={subject} onChange={(e) => setSubject(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="fmessage">Message</label>
              <textarea
                id="fmessage" rows={5} placeholder="Tell me about your project or enquiry..."
                value={message} onChange={(e) => setMessage(e.target.value)}
                disabled={status === 'loading'}
              />
            </div>

            {status === 'error' && (
              <div className={styles.errorMsg}>⚠ {errMsg}</div>
            )}

            <button
              className={`btn-primary ${styles.sendBtn} ${status === 'success' ? styles.sent : ''} ${status === 'loading' ? styles.loading : ''}`}
              onClick={handleSubmit}
              disabled={status === 'loading' || status === 'success'}
            >
              {btnLabel}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
