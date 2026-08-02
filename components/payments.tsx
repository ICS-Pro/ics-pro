'use client'

import { Lock } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/lib/language-context'

const methods = [
  {
    key: 'fib',
    image: '/images/fib.png',
    alt: 'FIB',
  },
  {
    key: 'fastPay',
    image: '/images/fastpay.png',
    alt: 'FastPay',
  },
  {
    key: 'zainCash',
    image: '/images/zaincash.png',
    alt: 'ZainCash',
  },
  {
    key: 'qiCard',
    image: '/images/qicard.png',
    alt: 'QiCard',
  },
] as const

export function Payments() {
  const { t } = useLanguage()

  return (
    <section
      id="payments"
      className="bg-gradient-to-b from-background to-secondary py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {t.payment.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {t.payment.title}
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-brand-dark" />
        </Reveal>

        <div
        dir="ltr"
        className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
>
          {methods.map((method, i) => (
            <Reveal
              key={method.key}
              delay={i * 100}
              className="glass flex h-28 items-center justify-center rounded-2xl px-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(20,40,80,0.4)]"
            >
              <img
                src={method.image}
                alt={method.alt}
                className="max-h-16 max-w-full object-contain"
                draggable={false}
              />
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="mt-8 flex items-center justify-center gap-2 text-navy"
        >
          <Lock className="h-5 w-5 text-brand" />

          <p className="text-sm font-semibold">
            {t.payment.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}