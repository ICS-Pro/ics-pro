import { cn } from '@/lib/utils'

interface IcsLogoProps {
  className?: string
  /** Use light colors for dark backgrounds */
  light?: boolean
}

export function IcsLogo({ className, light = false }: IcsLogoProps) {
  const main = light ? '#ffffff' : '#0e2a5e'
  const accent = '#1e6fe0'
  const sub = light ? 'rgba(255,255,255,0.75)' : '#5b6b86'

  return (
    <div className={cn('flex flex-col leading-none', className)}>
      <div className="flex items-end gap-2">
        <div className="relative">
          {/* Swoosh arrow */}
          <svg
            className="absolute -top-3 left-0 h-5 w-full overflow-visible"
            viewBox="0 0 120 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 20 C 30 6, 78 6, 108 10"
              stroke={accent}
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M96 2 L 116 9 L 100 18 Z"
              fill={accent}
            />
          </svg>
          <span
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: main }}
          >
            i<span style={{ color: accent }}>C</span>S
          </span>
        </div>
        <span
          className="pb-0.5 text-2xl font-medium sm:text-3xl"
          style={{ color: sub }}
        >
          Pro
        </span>
      </div>
      <span
        className="mt-1 text-[0.72rem] font-medium uppercase tracking-[0.12em] sm:text-sm"
        style={{ color: sub }}
      >
        IT &amp; Computer Solutions
      </span>
    </div>
  )
}
