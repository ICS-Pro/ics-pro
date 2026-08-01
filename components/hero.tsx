import { Headset, ShieldCheck, Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const badges = [
  {
    icon: Headset,
    title: 'PROFESSIONAL\nIT SUPPORT',
    text: 'You can count on ICS Pro.',
  },
  {
    icon: ShieldCheck,
    title: 'FAST & SECURE\nRELIABLE',
    text: 'Your satisfaction is our priority.',
  },
  {
    icon: Clock,
    title: 'QUICK RESPONSE\nALWAYS HERE',
    text: "We're ready to help when you need us.",
  },
]

export function Hero() {
  return (
    <section
      id="top"
      className="bg-hero-gradient relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28"
    >
            {/* animated glow blobs - temporarily hidden for mobile overflow test */}
      <div
        aria-hidden="true"
        className="hidden"
      />

      <div
        aria-hidden="true"
        className="hidden"
        style={{ animationDelay: '3s' }}
      />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 pt-40 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE */}
          <Reveal>
       <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
  Remote &amp; On-Site
  <br />
  IT Support{' '}
  <span className="bg-gradient-to-r from-[#7db4ff] to-[#3884ff] bg-clip-text text-transparent">
    for
  </span>
  <br />
  <span className="bg-gradient-to-r from-[#7db4ff] to-[#3884ff] bg-clip-text text-transparent">
    Small &amp; Medium Businesses
  </span>
</h1>
<div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#3884ff] to-transparent" />

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              Fast, Secure, and Professional IT Support for Small &amp; Medium
              Businesses and Home Users.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:flex sm:flex-wrap">
              <a
                href="#contact"
                className="btn-gradient w-full rounded-full px-8 py-3.5 text-center text-sm font-semibold text-white sm:w-auto"
              >
                Get IT Support
              </a>

              <a
                href="#services"
                className="w-full rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Our Services
              </a>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={150} className="relative">

            <span className="glass-dark mx-auto mb-6 flex w-fit items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold tracking-wide text-white/90 lg:ml-45 lg:mr-0">
              <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
              IT &amp; Computer Solutions
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

              <p className="mt-2 text-sm text-white/70">{badge.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* smooth transition into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}