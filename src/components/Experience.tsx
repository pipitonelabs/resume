import React from 'react'
import { Badge } from '@/components/ui/badge'
import Section from '@/components/Section'
import { formatRange, resume, type Employer } from '@/data/resume'

function tenure(employer: Employer): string {
  const roles = employer.roles
  const start = roles[roles.length - 1].start
  const end = roles[0].end
  return formatRange(start, end)
}

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-1.5 border-l border-border pl-7 sm:ml-2 sm:pl-9">
        {resume.experience.map((employer) => {
          const current = employer.roles[0].end === null
          return (
            <li key={employer.company} className="relative pb-12 last:pb-0">
              <span
                aria-hidden
                className={
                  'absolute top-1.5 left-[calc(-1.75rem_-_6.5px)] size-3 rounded-full ring-4 ring-background sm:left-[calc(-2.25rem_-_6.5px)] ' +
                  (current ? 'bg-primary' : 'border-2 border-primary bg-background')
                }
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 print:break-after-avoid">
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">{employer.company}</h3>
                  <p className="text-sm text-muted-foreground">{employer.location}</p>
                </div>
                {employer.roles.length > 1 && (
                  <p className="text-sm text-muted-foreground tabular-nums sm:shrink-0">{tenure(employer)}</p>
                )}
              </div>

              <div className="mt-5 space-y-8">
                {employer.roles.map((role) => (
                  <article key={role.title}>
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 print:break-after-avoid">
                      <h4 className="text-base font-semibold">{role.title}</h4>
                      <Badge variant="outline" className="h-6 shrink-0 self-start font-normal tabular-nums sm:self-auto">
                        {formatRange(role.start, role.end)}
                      </Badge>
                    </div>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.9375rem] leading-relaxed text-foreground/85 marker:text-primary/60 text-pretty">
                      {role.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

export default Experience
