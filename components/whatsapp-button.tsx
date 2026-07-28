import { WhatsappIcon } from '@/components/brand-icons'

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/9647890104338"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ICS Pro on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_-8px_rgba(37,211,102,0.75)] sm:bottom-8 sm:right-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping"
      />
      <WhatsappIcon className="relative h-7 w-7" />
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[8rem] sm:inline-block">
        Chat with us
      </span>
    </a>
  )
}
