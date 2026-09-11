import React from 'react'
import { GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Section from '@/components/Section'
import { resume } from '@/data/resume'

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-4">
        {resume.education.map((entry) => (
          <li key={entry.degree} className="flex items-start gap-3 print-avoid-break">
            <span
              aria-hidden
              className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary"
            >
              <GraduationCap className="size-4" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-base font-semibold">{entry.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {entry.school}, {entry.location}
                </p>
              </div>
              <Badge variant="outline" className="h-6 shrink-0 self-start font-normal tabular-nums sm:self-auto">
                {entry.year}
              </Badge>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Education
