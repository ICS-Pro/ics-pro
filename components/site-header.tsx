'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { IcsLogo } from '@/components/ics-logo'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.whyIcsPro, href: '#why' },
    { label: t.nav.remoteSupport, href: '#remote' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMobileLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <header className="absolute left-0 top-0 z-50 w-full max-w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#top"
          aria-label="ICS Pro home"
          className="-mt-4 block leading-none"
        >
          <IcsLogo
            className="scale-[0.8] origin-left sm:scale-90"
            light={!scrolled}
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
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
            {t.nav.getSupport}
          </a>

          {/* Desktop language selector */}
          <div
            className={cn(
              'flex items-center rounded-full border p-1 text-xs font-semibold',
              scrolled
                ? 'border-border bg-background/80 text-foreground'
                : 'border-white/25 bg-white/10 text-white',
            )}
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={cn(
                'rounded-full px-3 py-1.5 transition-all',
                language === 'en'
                  ? 'bg-brand text-white shadow-sm'
                  : 'opacity-70 hover:opacity-100',
              )}
              aria-label="Switch to English"
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLanguage('ar')}
              className={cn(
                'rounded-full px-3 py-1.5 transition-all',
                language === 'ar'
                  ? 'bg-brand text-white shadow-sm'
                  : 'opacity-70 hover:opacity-100',
              )}
              aria-label="التبديل إلى العربية"
            >
              عربي
            </button>
          </div>
        </nav>

        {/* Mobile controls */}
        <div
          dir="ltr"
          className="absolute right-4 top-4 flex items-center gap-2 md:hidden"
        >
          {/* Mobile language button */}
          <button
            type="button"
            onClick={toggleMobileLanguage}
            className={cn(
              'inline-flex h-10 min-w-[52px] items-center justify-center rounded-full border px-3 text-sm font-semibold transition-all',
              scrolled
                ? 'border-border bg-background/90 text-foreground'
                : 'border-white/25 bg-white/10 text-white backdrop-blur-sm',
            )}
            aria-label={
              language === 'en'
                ? 'التبديل إلى العربية'
                : 'Switch to English'
            }
          >
            {language === 'en' ? 'عربي' : 'EN'}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors',
              scrolled ? 'text-foreground' : 'text-white',
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
              {t.nav.getSupport}
            </a>

          </div>
        </nav>
      )}
    </header>
  )
}