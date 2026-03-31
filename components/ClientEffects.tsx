'use client'
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // Fade-in on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    // Active nav highlight
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('nav a')

    const onScroll = () => {
      let current = ''
      sections.forEach((s) => {
        const el = s as HTMLElement
        if (window.scrollY >= el.offsetTop - 120) current = el.id
      })
      navLinks.forEach((a) => {
        const link = a as HTMLAnchorElement
        link.style.color =
          link.getAttribute('href') === '#' + current ? 'var(--gold)' : ''
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
