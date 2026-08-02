'use client'

import {
  MonitorSmartphone,
  Wrench,
  AppWindow,
  Wifi,
  MonitorCog,
  Users,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/lib/language-context'

export function Services() {
  const { language, t } = useLanguage()

  const services = [
    {
      icon: MonitorSmartphone,
      title: t.services.cards.remote.title,
      text: t.services.cards.remote.text,
    },
    {
      icon: Wrench,
      title: t.services.cards.onsite.title,
      text: t.services.cards.onsite.text,
    },
    {
      icon: AppWindow,
      title: t.services.cards.microsoft365.title,
      text: t.services.cards.microsoft365.text,
    },
    {
      icon: Wifi,
      title: t.services.cards.network.title,
      text: t.services.cards.network.text,
    },
    {
      icon: MonitorCog,
      title: t.services.cards.windows.title,
      text: t.services.cards.windows.text,
    },
    {
      icon: Users,
      title: t.services.cards.consulting.title,
      text: t.services.cards.consulting.text,
    },
  ]

  return (
    <section id="services" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {t.services.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-brand-dark" />
        </Reveal>

        <Reveal
          className={`mx-auto mt-10 max-w-4xl ${
            language === 'ar'
              ? 'text-right sm:text-justify'
              : 'text-left sm:text-justify'
          }`}
        >
          <p className="text-base font-medium leading-relaxed text-foreground/75 sm:text-lg">
            {t.services.intro1}
          </p>

          <p className="mt-4 text-base font-medium leading-relaxed text-foreground/75 sm:text-lg">
            {t.services.intro2}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 120}
              className="glass group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_50px_-20px_rgba(20,40,80,0.4)]"
            >
              <span className="bg-brand-gradient mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md shadow-brand/30 transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-7 w-7" />
              </span>

              <h3 className="text-base font-bold uppercase tracking-wide text-navy">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}