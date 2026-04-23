'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/',                  label: 'Home' },
    { href: '/about',             label: 'About' },
    { href: '/siyaram-hardware', label: 'Hardware' },
    { href: '/standard-erp',      label: 'Standard ERP' },
    { href: '/blog',              label: 'Blog' },
  ]

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main Navigation">
      <Link href="/" className={styles.logo}>PS</Link>

      {/* Desktop links */}
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={pathname === l.href ? styles.active : ''}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact" className={styles.cta}>Get in Touch</Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.bar1Open : styles.bar1} />
        <span className={menuOpen ? styles.bar2Open : styles.bar2} />
        <span className={menuOpen ? styles.bar3Open : styles.bar3} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? styles.mobileActive : styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  )
}
