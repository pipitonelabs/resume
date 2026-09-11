import React from 'react'

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-16">
      <h2
        id={`${id}-heading`}
        className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-[1.75rem]"
      >
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default Section
