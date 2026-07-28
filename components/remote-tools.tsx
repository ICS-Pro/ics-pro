import { MonitorCheck, MousePointerClick, ScreenShare } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const tools = [
  {
    icon: MonitorCheck,
    name: 'Quick Assist',
    text: 'Built-in Windows app. No download required.',
  },
  {
    icon: MousePointerClick,
    name: 'AnyDesk',
    text: 'Fast, lightweight and easy remote access.',
  },
  {
    icon: ScreenShare,
    name: 'TeamViewer',
    text: 'Reliable remote support anytime, anywhere.',
  },
]

export function RemoteTools() {
  return (
    <section
      id="remote"
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
              How We Help
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Remote IT Support – Simple, Fast &amp; Secure
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-brand" />
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              We provide professional remote assistance to help you solve
              technical issues quickly and efficiently using one of the
              following methods:
            </p>
          </Reveal>

          <div className="grid gap-4">
            {tools.map((tool, i) => (
              <Reveal
                key={tool.name}
                delay={i * 120}
                className="glass group flex items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(20,40,80,0.4)]"
              >
                <span className="bg-brand-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <tool.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">{tool.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {tool.text}
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
