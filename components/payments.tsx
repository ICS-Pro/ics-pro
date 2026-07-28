import { Lock } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const methods = [
  { name: 'FIB', className: 'text-[#00B4A0]' },
  { name: 'FastPay', className: 'text-[#E4002B]' },
  { name: 'Zain Cash', className: 'text-[#5A2D82]' },
  { name: 'QiCard', className: 'text-[#F5A623]' },
]

export function Payments() {
  return (
    <section
      id="payments"
      className="bg-gradient-to-b from-background to-secondary py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Payment Methods
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            WE ACCEPT
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-brand-dark" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {methods.map((method, i) => (
            <Reveal
              key={method.name}
              delay={i * 100}
              className="glass flex h-28 items-center justify-center rounded-2xl px-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(20,40,80,0.4)]"
            >
              <span
                className={`text-xl font-extrabold tracking-tight sm:text-2xl ${method.className}`}
              >
                {method.name}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-8 flex items-center justify-center gap-2 text-navy">
          <Lock className="h-5 w-5 text-brand" />
          <p className="text-sm font-semibold">
            Secure &amp; Trusted Payment Methods
          </p>
        </Reveal>
      </div>
    </section>
  )
}
