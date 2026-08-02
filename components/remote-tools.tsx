'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/lib/language-context'

const tools = [
  {
    key: 'quickAssist' as const,
    name: 'Quick Assist',
    image: '/images/quick-assist.png',
  },
  {
    key: 'anyDesk' as const,
    name: 'AnyDesk',
    image: '/images/anydesk.png',
  },
  {
    key: 'teamViewer' as const,
    name: 'TeamViewer',
    image: '/images/teamviewer.png',
  },
]

export function RemoteTools() {
  const { t, dir } = useLanguage()

  return (
    <section
      id="remote"
      dir={dir}
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {t.remoteSupport.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {t.remoteSupport.title}
            </h2>

            <div className="mt-4 h-1 w-20 rounded-full bg-brand" />

            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              {t.remoteSupport.description}
            </p>
          </Reveal>

          <div className="grid gap-4">
            {tools.map((tool, i) => (
              <Reveal
                key={tool.key}
                delay={i * 120}
                className="glass group flex items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(20,40,80,0.4)]"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={tool.image}
                    alt={`${tool.name} logo`}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </span>

                <div>
                  <h3 className="text-base font-bold text-navy">
                    {t.remoteSupport.methods[tool.key].title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t.remoteSupport.methods[tool.key].text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}