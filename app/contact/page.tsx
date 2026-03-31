import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import ContactForm from '@/components/Contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Pradeep Shah | Standard Hardware & Supply | Standard ERP',
  description: 'Get in touch with Pradeep Shah — CEO of Standard Hardware & Supply and Founder of Standard ERP in Birgunj, Nepal. Email: ipradeepshah@gmail.com | WhatsApp: +977 9815256619',
  alternates: { canonical: 'https://pradeepshah.com.np/contact' },
}

export default function ContactPage() {
  return (
    <>
      <ClientEffects />
      <Nav />
      <main style={{ paddingTop: '72px' }}>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
