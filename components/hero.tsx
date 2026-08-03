'use client'

import { Headset, ShieldCheck, Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/lib/language-context'

export function Hero() {
  const { language, t } = useLanguage()

  const badges = [
    {
      icon: Headset,
      title: t.hero.badges.professional.title,
      text: t.hero.badges.professional.text,
    },
    {
      icon: ShieldCheck,
      title: t.hero.badges.secure.title,
      text: t.hero.badges.secure.text,
    },
    {
      icon: Clock,
      title: t.hero.badges.response.title,
      text: t.hero.badges.response.text,
    },
  ]

  return (
    <section
      id="top"
      className="bg-hero-gradient relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28"
    >
      {/* animated glow blobs */}
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#3884ff]/25 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#1e6fe0]/20 blur-3xl"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 pt-40 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <Reveal>
            {/* ENGLISH TITLE - ALL SCREEN SIZES */}
            {language === 'en' && (
              <h1
                dir="ltr"
                className="mt-6 text-[34.5px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {t.hero.title1}
                <br />

                <span>IT Support </span>

                <span className="bg-gradient-to-r from-[#7db4ff] to-[#3884ff] bg-clip-text text-transparent">
                  for
                </span>

                <br />

                <span className="bg-gradient-to-r from-[#7db4ff] to-[#3884ff] bg-clip-text text-transparent">
                  {t.hero.title3}
                </span>
              </h1>
            )}

            {/* ARABIC TITLE - MOBILE ONLY */}
            {language === 'ar' && (
              <h1
                dir="rtl"
                className="mt-6 block text-[27px] font-extrabold leading-[1.45] tracking-tight sm:hidden"
              >
                <span className="block whitespace-nowrap text-white">
                  دعم تقني عن بُعد - وفي الموقع
                </span>

                <span className="block whitespace-nowrap bg-gradient-to-r from-[#7db4ff] to-[#3884ff] bg-clip-text text-transparent">
                  للشركات الصغيرة والمتوسطة
                </span>
              </h1>
            )}

            {/* ARABIC TITLE - TABLET / DESKTOP ONLY */}
            {language === 'ar' && (
              <h1
                dir="rtl"
                className="mt-6 hidden font-extrabold leading-[1.3] tracking-tight sm:block"
              >
                <span className="block whitespace-nowrap text-[38px] text-white md:text-[42px] lg:text-[44px] xl:text-[48px]">
                  دعم تقني عن بُعد - وفي الموقع
                </span>

                <span className="mt-2 block whitespace-nowrap bg-gradient-to-r from-[#7db4ff] to-[#3884ff] bg-clip-text text-[36px] text-transparent md:text-[40px] lg:text-[42px] xl:text-[46px]">
                  للشركات الصغيرة والمتوسطة
                </span>
              </h1>
            )}

            {/* UNDERLINE */}
            <div
              className={`mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#3884ff] to-transparent ${
                language === 'ar' ? 'mr-0 ml-auto' : ''
              }`}
            />

            {/* DESCRIPTION */}
            <p
              dir={language === 'ar' ? 'rtl' : 'ltr'}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
            >
              {t.hero.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:flex sm:flex-wrap">
              <a
                href="#contact"
                className="btn-gradient w-full rounded-full px-8 py-3.5 text-center text-sm font-semibold text-white sm:w-auto"
              >
                {t.hero.getSupport}
              </a>

              <a
                href="#services"
                className="w-full rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                {t.hero.ourServices}
              </a>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={150} className="relative">
            <span className="glass-dark mx-auto mb-6 flex w-fit items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold tracking-wide text-white/90 lg:ml-45 lg:mr-0">
              <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
              {t.hero.tagline}
            </span>

            <div className="animate-float relative w-full min-w-0 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40 ring-1 ring-white/10">
              {/* Original flyer photo, cropped to the top-right remote-support scene */}
              <div className="relative aspect-[1.74/1] overflow-hidden">
                <img
                  src="/images/ics-flyer.png"
                  alt="ICS Pro technician providing remote IT support with a headset at a laptop"
                  className="absolute top-0 h-auto max-w-none select-none"
                  style={{ width: '177.2%', left: '-77.2%' }}
                  draggable={false}
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
              />
            </div>
          </Reveal>
        </div>

        {/* BADGES */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 lg:mt-24">
          {badges.map((badge, i) => (
            <Reveal
              key={badge.title}
              delay={i * 120}
              className="glass-dark group flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5"
            >
              <span className="bg-brand-gradient mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110">
                <badge.icon className="h-8 w-8" />
              </span>

              <h3 className="whitespace-pre-line text-sm font-bold uppercase tracking-wide text-white">
                {badge.title}
              </h3>

              <p className="mt-2 text-sm text-white/70">
                {badge.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* smooth transition into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}