import React from 'react'
import { Badge } from '@/components/ui/badge'
import Section from '@/components/Section'
import { resume } from '@/data/resume'

const CHIP_MAX_LENGTH = 44

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills and knowledge">
      <dl className="flex flex-col gap-7 sm:grid sm:grid-cols-[minmax(11rem,13rem)_1fr] sm:gap-x-8 sm:gap-y-6">
        {resume.skills.map((group) => {
          const chips = group.items.every((item) => item.length <= CHIP_MAX_LENGTH)
          return (
            <div key={group.name} className="print-avoid-break sm:contents">
              <dt className="mb-2 font-heading text-base font-semibold sm:mb-0 sm:pt-0.5">{group.name}</dt>
              <dd>
                {chips ? (
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Badge variant="outline" className="h-6 px-2.5 font-normal">
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="list-disc space-y-1 pl-5 text-[0.9375rem] leading-relaxed text-foreground/85 marker:text-primary/60">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
          )
        })}
      </dl>
    </Section>
  )
}

export default Skills
