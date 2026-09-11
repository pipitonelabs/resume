import React from 'react'
import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import Summary from '@/components/Summary'
import Experience from '@/components/Experience'
import Expertise from '@/components/Expertise'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

const App: React.FC = () => {
  return (
    <div id="top" className="relative isolate flex min-h-dvh flex-col">
      <div aria-hidden className="blueprint-grid absolute inset-x-0 top-0 -z-10 h-[34rem] print:hidden" />
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 sm:px-8">
        <Hero />
        <div className="space-y-16 pb-20 sm:space-y-20">
          <Summary />
          <Experience />
          <Expertise />
          <Skills />
          <Certifications />
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
