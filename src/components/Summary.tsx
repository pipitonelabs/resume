import React from 'react'
import Section from '@/components/Section'
import { resume } from '@/data/resume'

const Summary: React.FC = () => {
  return (
    <Section id="summary" title="Summary">
      <p className="max-w-prose text-[1.0625rem] leading-relaxed text-foreground/90 text-pretty">
        {resume.summary}
      </p>
    </Section>
  )
}

export default Summary
