'use client'

import { MessageCircle, Mail, Globe, Phone } from 'lucide-react'
import { FacebookIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/lib/language-context'

export function Contact() {
  const { t } = useLanguage()

  const channels = [
    {
      icon: MessageCircle,
      label: t.contact.methods.whatsapp,
      value: '+964 789 010 4338',
      href: 'https://wa.me/9647890104338',
      color: '#25D366',
    },
    {
      icon: Phone,
      label: t.contact.methods.phone,
      value: '+964 789 010 4338',
      href: 'tel:+9647890104338',
      color: '#1a3f7a',
    },
    {
      icon: Mail,
      label: t.contact.methods.email,
      value: 'ics-pro@outlook.com',
      href: 'mailto:ics-pro@outlook.com',
      color: '#1e6fe0',
    },
    {
      icon: FacebookIcon,
      label: t.contact.methods.facebook,
      value: 'ICS Pro',
      href: 'https://www.facebook.com/icspro.solutions/',
      color: '#1877F2',
    },
    {
      icon: LinkedinIcon,
      label: t.contact.methods.linkedin,
      value: 'ICS Pro',
      href: 'https://www.linkedin.com/company/ics-pro/',
      color: '#0A66C2',
    },
  ]

  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {t.contact.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-brand-dark" />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, i) => {
            const external = channel.href.startsWith('http')

            return (
              <Reveal
                key={channel.label}
                delay={(i % 3) * 120}
                className="h-full"
              >
                <a
                  href={channel.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="glass group flex h-full items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(20,40,80,0.4)]"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition-transform group-hover:scale-110"
                    style={{ backgroundColor: channel.color }}
                  >
                    <channel.icon className="h-6 w-6" />
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-navy">
                      {channel.label}
                    </p>

                    <p
                      dir="ltr"
                      className="mt-0.5 text-sm text-muted-foreground group-hover:text-brand"
                    >
                      {channel.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <a
            href="https://www.icspro.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
            dir="ltr"
          >
            <Globe className="h-5 w-5" />
            https://www.icspro.cloud
          </a>
        </Reveal>
      </div>
    </section>
  )
}