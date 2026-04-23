import Nav            from '@/components/Nav'
import Hero           from '@/components/Hero'
import About          from '@/components/About'
import Expertise      from '@/components/Expertise'
import HomeBizCards   from '@/components/HomeBizCards'
import Footer         from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import ClientEffects  from '@/components/ClientEffects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pradeep Shah | CEO & Founder | Computer Engineer | Birgunj, Nepal',
  description: 'Pradeep Shah is a Computer Engineer from Kurukshetra University, CEO of Siyaram Hardware & Suppliers in Birgunj, Nepal, and Founder of Standard ERP — building next-generation business management software for SMEs.',
  alternates: { canonical: 'https://pradeepshah.com.np/' },
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <ClientEffects />
      <Nav />
      <main>
        <Hero />
        <About />
        <HomeBizCards />
        <Expertise />
      </main>
      <Footer />
    </>
  )
}
