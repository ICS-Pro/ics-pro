import Image from 'next/image'
import { cn } from '@/lib/utils'

interface IcsLogoProps {
  className?: string
  /** Use light colors for dark backgrounds */
  light?: boolean
}

export function IcsLogo({ className }: IcsLogoProps) {
  return (
  <Image
    src="/logo.png"
    alt="ICS Pro"
    width={320}
    height={90}
    className={cn("h-auto w-auto max-w-[320px]", className)}
    priority
  />
)
}