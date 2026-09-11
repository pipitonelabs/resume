import React from 'react'
import { Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ThemeToggle'
import { resume } from '@/data/resume'

const SiteHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-12 w-full max-w-3xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-heading text-[0.95rem] font-semibold tracking-tight text-foreground/90 hover:text-foreground"
        >
          {resume.name}
        </a>
        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Printer data-icon="inline-start" />
            Print
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
