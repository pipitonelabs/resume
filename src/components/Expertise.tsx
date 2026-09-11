import React from 'react'
import { Badge } from '@/components/ui/badge'
import Section from '@/components/Section'
import { resume } from '@/data/resume'

const Expertise: React.FC = () => {
  return (
    <Section id="expertise" title="Areas of expertise">
      <ul className="flex flex-wrap gap-2">
        {resume.expertise.map((item) => (
          <li key={item}>
            <Badge variant="secondary" className="h-7 px-3 text-[0.8125rem]">
              {item}
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Expertise
