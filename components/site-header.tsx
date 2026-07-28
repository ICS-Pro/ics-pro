'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { IcsLogo } from '@/components/ics-logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why ICS Pro', href: '#why' },
  { label: 'Remote Support', href: '#remote' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/40 bg-background/80 shadow-[0_8px_30px_-12px_rgba(20,40,80,0.25)] backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" aria-label="ICS Pro home">
          <IcsLogo className="scale-[0.8] origin-left sm:scale-90" light={!scrolled} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled
                  ? 'text-foreground/80 hover:text-brand'
                  : 'text-white/85 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gradient rounded-full px-6 py-2.5 text-sm font-semibold text-white"
          >
            Get Support
          </a>
        </nav>

        <button
          type="button"
          className={cn(
            'inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden',
            scrolled ? 'text-foreground' : 'text-white',
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gradient mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get Support
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
