import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyChoose } from '@/components/why-choose'
import { RemoteTools } from '@/components/remote-tools'
import { Contact } from '@/components/contact'
import { Payments } from '@/components/payments'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <RemoteTools />
        <Contact />
        <Payments />
      </main>
      <SiteFooter />
      <WhatsappButton />
    </>
  )
}
