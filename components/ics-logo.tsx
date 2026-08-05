import Image from 'next/image'
import { cn } from '@/lib/utils'

interface IcsLogoProps {
  className?: string
  light?: boolean
  spin3d?: boolean
}

export function IcsLogo({
  className,
  spin3d = false,
}: IcsLogoProps) {
  if (!spin3d) {
    return (
      <Image
        src="/logo.png"
        alt="ICS Pro"
        width={320}
        height={90}
        className={cn('h-auto w-auto max-w-[320px]', className)}
        priority
      />
    )
  }

  return (
    <div className={cn('logo-perspective', className)}>
      <div className="logo-spinner">
        {/* Front */}
        <Image
          src="/logo.png"
          alt="ICS Pro"
          width={320}
          height={90}
          className="logo-face logo-front h-auto w-auto max-w-[320px]"
          priority
        />

        {/* Back - also readable */}
        <Image
          src="/logo.png"
          alt=""
          width={320}
          height={90}
          className="logo-face logo-back h-auto w-auto max-w-[320px]"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}