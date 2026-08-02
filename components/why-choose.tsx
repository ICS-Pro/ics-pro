'use client'

import { Zap, Lock, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/lib/language-context'

export function WhyChoose() {
  const { t } = useLanguage()

  const reasons = [
    {
      icon: Zap,
      title: t.whyChoose.cards.fastResponse.title,
      text: t.whyChoose.cards.fastResponse.text,
    },
    {
      icon: Lock,
      title: t.whyChoose.cards.secureAssistance.title,
      text: t.whyChoose.cards.secureAssistance.text,
    },
    {
      icon: BadgeCheck,
      title: t.whyChoose.cards.reliableSupport.title,
      text: t.whyChoose.cards.reliableSupport.text,
    },
  ]

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-navy py-20 text-navy-foreground sm:py-28"
    >
      {/* subtle grid glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(56,132,255,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(56,132,255,0.2), transparent 45%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.whyChoose.title}
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#3884ff]" />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 150}
              className="glass-dark group flex flex-col items-center rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2"
            >
              <span className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#2f6fe0] to-[#123a86] shadow-[0_0_40px_rgba(56,132,255,0.5)] transition-transform duration-300 group-hover:scale-110">
                <reason.icon className="h-10 w-10 text-white" />
              </span>

              <h3 className="text-lg font-bold uppercase tracking-wide">
                {reason.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-navy-foreground/75">
                {reason.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}