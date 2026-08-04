import Image from 'next/image'
import { cn } from '@/lib/utils'

interface IcsLogoProps {
  className?: string
  /** Use light colors for dark backgrounds */
  light?: boolean
  spin3d?: boolean
}

export function IcsLogo({
  className,
  spin3d = false,
}: IcsLogoProps) {
  return (
    <div className={cn('logo-perspective', className)}>
      <div className={spin3d ? 'animate-logo-spin-3d' : ''}>
        <Image
          src="/logo.png"
          alt="ICS Pro"
          width={320}
          height={90}
          className="h-auto w-auto max-w-[320px]"
          priority
        />
      </div>
    </div>
  )
}