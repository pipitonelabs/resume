import React from 'react'
import { Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Section from '@/components/Section'
import { formatMonth, resume } from '@/data/resume'

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-3 sm:grid-cols-2">
        {resume.certifications.map((cert) => (
          <li key={cert.name} className="print-avoid-break">
            <Card size="sm" className={'h-full ' + (cert.lapsed ? 'bg-card/60' : '')}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={
                      'mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg ' +
                      (cert.lapsed ? 'bg-muted text-muted-foreground' : 'bg-primary/12 text-primary')
                    }
                  >
                    <Award className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <CardTitle className={'text-pretty ' + (cert.lapsed ? 'text-foreground/75' : '')}>
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="mt-1 tabular-nums">Issued {formatMonth(cert.issued)}</CardDescription>
                  </div>
                </div>
                {cert.lapsed && (
                  <CardAction>
                    <Badge variant="outline" className="font-normal text-muted-foreground">
                      Lapsed
                    </Badge>
                  </CardAction>
                )}
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Certifications
