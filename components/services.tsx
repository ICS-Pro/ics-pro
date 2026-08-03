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
      englishTitle: 'REMOTE IT SUPPORT',
      kurdishTitle: 'پشتگیری IT لە دوورەوە',
    },
    {
      icon: Wrench,
      title: t.services.cards.onsite.title,
      text: t.services.cards.onsite.text,
      englishTitle: 'ON-SITE IT SUPPORT',
      kurdishTitle: 'پشتگیری IT لە شوێن',
    },
    {
      icon: AppWindow,
      title: t.services.cards.microsoft365.title,
      text: t.services.cards.microsoft365.text,
      englishTitle: 'MICROSOFT 365 SUPPORT',
      kurdishTitle: 'پشتگیری Microsoft 365',
    },
    {
      icon: Wifi,
      title: t.services.cards.network.title,
      text: t.services.cards.network.text,
      englishTitle: 'NETWORK SUPPORT',
      kurdishTitle: 'پشتگیری تۆڕ',
    },
    {
      icon: MonitorCog,
      title: t.services.cards.windows.title,
      text: t.services.cards.windows.text,
      englishTitle: 'WINDOWS TROUBLESHOOTING',
      kurdishTitle: 'چارەسەرکردنی کێشەکانی Windows',
    },
    {
      icon: Users,
      title: t.services.cards.consulting.title,
      text: t.services.cards.consulting.text,
      englishTitle: 'IT CONSULTING',
      kurdishTitle: 'ڕاوێژکاری IT',
    },
  ]

  return (
    <section id="services" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <Reveal className="mx-auto max-w-2xl text-center">

          {/* English & Arabic eyebrow */}
          {language !== 'ku' && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {t.services.eyebrow}
            </p>
          )}

          {/* Kurdish eyebrow - slightly larger */}
          {language === 'ku' && (
            <p
              dir="rtl"
              className="text-xl font-semibold tracking-normal text-brand sm:text-2xl"
            >
              {t.services.eyebrow}
            </p>
          )}

          {/* English & Arabic title */}
          {language !== 'ku' && (
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {t.services.title}
            </h2>
          )}

          {/* Kurdish title - slightly smaller */}
          {language === 'ku' && (
            <h2
              dir="rtl"
              className="mt-3 text-[30px] font-extrabold tracking-tight text-navy sm:text-[36px] lg:text-[42px]"
            >
              {t.services.title}
            </h2>
          )}

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-brand-dark" />
        </Reveal>

        {/* INTRODUCTION */}
        <Reveal
          className={`mx-auto mt-10 max-w-4xl ${
            language === 'ar' || language === 'ku'
              ? 'text-right sm:text-justify'
              : 'text-left sm:text-justify'
          }`}
        >
          <p
            dir={language === 'ar' || language === 'ku' ? 'rtl' : 'ltr'}
            className="text-base font-medium leading-relaxed text-foreground/75 sm:text-lg"
          >
            {t.services.intro1}
          </p>

          <p
            dir={language === 'ar' || language === 'ku' ? 'rtl' : 'ltr'}
            className="mt-4 text-base font-medium leading-relaxed text-foreground/75 sm:text-lg"
          >
            {t.services.intro2}
          </p>
        </Reveal>

        {/* SERVICE CARDS */}
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

              {/* ENGLISH & ARABIC - unchanged */}
              {language !== 'ku' && (
                <h3 className="text-base font-bold uppercase tracking-wide text-navy">
                  {service.title}
                </h3>
              )}

              {/* KURDISH CARD TITLE */}
              {language === 'ku' && (
                <div className="text-center">
                  <h3
                    dir="ltr"
                    className="text-base font-bold uppercase tracking-wide text-navy"
                  >
                    {service.englishTitle}
                  </h3>

                  <p
                    dir="rtl"
                    className="mt-2 text-[15px] font-bold leading-relaxed text-navy"
                  >
                    {service.kurdishTitle}
                  </p>
                </div>
              )}

              {/* DESCRIPTION */}
              <p
                dir={language === 'ku' ? 'rtl' : undefined}
                className={`mt-2 text-sm leading-relaxed text-muted-foreground ${
                  language === 'ku' ? 'text-center' : ''
                }`}
              >
                {service.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}