import {
  MonitorSmartphone,
  Wrench,
  AppWindow,
  Wifi,
  MonitorCog,
  Users,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: MonitorSmartphone,
    title: 'REMOTE IT SUPPORT',
    text: 'Fast remote support wherever you are.',
  },
  {
    icon: Wrench,
    title: 'ON-SITE IT SUPPORT',
    text: 'We come to you and solve the problem.',
  },
  {
    icon: AppWindow,
    title: 'MICROSOFT 365 SUPPORT',
    text: 'Setup, management, and troubleshooting.',
  },
  {
    icon: Wifi,
    title: 'NETWORK SUPPORT',
    text: 'Network setup, Wi-Fi, troubleshooting & more.',
  },
  {
    icon: MonitorCog,
    title: 'WINDOWS TROUBLESHOOTING',
    text: 'Fix errors, slow performance and system issues.',
  },
  {
    icon: Users,
    title: 'IT CONSULTING',
    text: 'Get expert advice and smart IT solutions.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            OUR SERVICES
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-brand-dark" />
        </Reveal>
        
<Reveal className="mx-auto mt-10 max-w-4xl text-justify">
  <p className="text-base font-medium leading-relaxed text-foreground/75 sm:text-lg">
    ICS Pro provides professional remote and on-site IT support services for
    small and medium-sized businesses, organizations, and individuals.
  </p>

  <p className="mt-4 text-base font-medium leading-relaxed text-foreground/75 sm:text-lg">
    We help our clients minimize downtime by resolving technical issues quickly
    through secure remote support and on-site IT services. Our goal is to
    deliver reliable, cost-effective IT solutions that reduce the need for
    dedicated full-time IT staff and eliminate the inconvenience of
    transporting equipment to service centers.
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
