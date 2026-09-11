import React from 'react'
import { Separator } from '@/components/ui/separator'
import { resume } from '@/data/resume'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="mx-auto w-full max-w-3xl px-5 pb-10 sm:px-8 print:hidden">
      <Separator />
      <div className="flex flex-col gap-1 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {currentYear} {resume.name}. All rights reserved.
        </p>
        <p>Self-hosted on a Talos Linux Kubernetes cluster.</p>
      </div>
    </footer>
  )
}

export default Footer
