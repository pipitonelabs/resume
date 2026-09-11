import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import GithubIcon from '@/components/GithubIcon'
import { Button } from '@/components/ui/button'
import { resume } from '@/data/resume'

const Hero: React.FC = () => {
  return (
    <section className="pt-14 pb-14 sm:pt-20 sm:pb-16 print:pt-0 print:pb-6">
      <h1
        className="hero-rise font-heading text-[2.75rem] leading-[1.02] font-bold tracking-[-0.025em] text-balance sm:text-6xl"
        style={{ animationDelay: '0ms' }}
      >
        {resume.name}
      </h1>
      <p
        className="hero-rise mt-3 text-xl font-medium text-primary sm:text-2xl"
        style={{ animationDelay: '80ms' }}
      >
        {resume.title}
      </p>

      <ul
        className="hero-rise mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
        style={{ animationDelay: '160ms' }}
      >
        <li className="inline-flex items-center gap-1.5">
          <MapPin className="size-4 shrink-0" aria-hidden />
          <span>{resume.address}</span>
        </li>
        <li className="inline-flex items-center gap-1.5">
          <Phone className="size-4 shrink-0" aria-hidden />
          <a href={`tel:${resume.phone}`} className="hover:text-foreground hover:underline underline-offset-4">
            {resume.phone}
          </a>
        </li>
      </ul>

      <div className="hero-rise mt-6 flex flex-wrap gap-2" style={{ animationDelay: '240ms' }}>
        <Button asChild>
          <a href={`mailto:${resume.email}`}>
            <Mail data-icon="inline-start" />
            {resume.email}
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={resume.github.url} target="_blank" rel="noopener noreferrer">
            <GithubIcon data-icon="inline-start" />
            {resume.github.handle}
          </a>
        </Button>
      </div>
    </section>
  )
}

export default Hero
