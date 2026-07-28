import { Headset, ShieldCheck, Users, MessageCircle, Mail, Globe } from 'lucide-react'
import { FacebookIcon, LinkedinIcon } from '@/components/brand-icons'
import { IcsLogo } from '@/components/ics-logo'

const pillars = [
  { icon: Headset, label: 'Professional Support' },
  { icon: ShieldCheck, label: 'Trusted Solutions' },
  { icon: Users, label: 'Client Focused' },
]

const socials = [
  { icon: MessageCircle, href: 'https://wa.me/9647690104338', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:ics-pro@outlook.com', label: 'Email' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { icon: Globe, href: 'https://www.icspro.cloud', label: 'Website' },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(40% 60% at 15% 0%, rgba(56,132,255,0.2), transparent 60%), radial-gradient(40% 60% at 90% 100%, rgba(56,132,255,0.15), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="max-w-xs">
            <IcsLogo light />
            <p className="mt-5 text-sm leading-relaxed text-navy-foreground/70">
              Fast, Secure, and Professional IT Support for Small &amp; Medium
              Businesses and Home Users.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => {
                const external = social.href.startsWith('http')
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-all hover:-translate-y-0.5 hover:bg-[#3884ff]"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="md:justify-self-center">
            <h3 className="text-sm font-bold uppercase tracking-wide text-navy-foreground">
              Why ICS Pro
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex items-center gap-3 text-navy-foreground/85"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <pillar.icon className="h-5 w-5 text-[#3884ff]" />
                  </span>
                  <span className="text-sm font-medium">{pillar.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-bold uppercase tracking-wide text-navy-foreground">
              Contact
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-navy-foreground/80">
              <a href="https://wa.me/9647690104338" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#3884ff]">
                +964 769 010 4338
              </a>
              <a href="mailto:ics-pro@outlook.com" className="transition-colors hover:text-[#3884ff]">
                ics-pro@outlook.com
              </a>
              <a href="https://www.icspro.cloud" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#3884ff]">
                https://www.icspro.cloud
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-navy-foreground/70">
            &copy; 2028 ICS Pro, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
