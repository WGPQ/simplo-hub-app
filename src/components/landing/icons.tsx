import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M13 2 5.8 13.2h4.8L9.8 22l8.4-11.2h-4.9L13 2Z" />
    </svg>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
      <path d="m18.5 15 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" />
      <path d="m5.5 14 .8 2 .2.1 2 .8-2 .8-.1.2-.9 2-.8-2-.2-.1-2-.9 2-.8.1-.2.9-1.9Z" />
    </svg>
  )
}

export function TrendingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4 16 9.5 10.5l3.5 3.5L20 7" />
      <path d="M14 7h6v6" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3 5 6v5c0 4.8 2.9 8.7 7 10 4.1-1.3 7-5.2 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-4.1" />
    </svg>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 9.5h17" />
    </svg>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="11" r="3" />
      <path d="M20 18a3.5 3.5 0 0 0-3-3.5M4 18a3.5 3.5 0 0 1 3-3.5" />
    </svg>
  )
}

export function MessageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M6 18.5 3.5 20V6.5A2.5 2.5 0 0 1 6 4h12A2.5 2.5 0 0 1 20.5 6.5v8A2.5 2.5 0 0 1 18 17H6Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  )
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4 19.5h16" />
      <path d="M7 16V9M12 16V5M17 16v-7" />
    </svg>
  )
}

export function ScissorsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="m14 6 6-2-7 8m-2 2-7 8 6-2 4-4m2-2 4 4" />
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
    </svg>
  )
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M3.5 12h3.2l1.8-3.5 2.8 7 2.2-4h6.2" />
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    </svg>
  )
}

export function ToothIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3c-3.4 0-6 1.5-6 4.7 0 2 1 3.3 1.7 5 .7 1.6 1 4.3 2.7 4.3 1.8 0 1.2-4.2 2.6-4.2s.8 4.2 2.6 4.2c1.8 0 2-2.7 2.8-4.3.7-1.7 1.6-3 1.6-5C18 4.5 15.4 3 12 3Z" />
    </svg>
  )
}

export function PawIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 15.5c-1.9 0-4.5 1.2-4.5 3.2S9.4 21 12 21s4.5-.7 4.5-2.3-2.6-3.2-4.5-3.2Z" />
      <circle cx="7" cy="10" r="1.8" />
      <circle cx="12" cy="7.5" r="1.8" />
      <circle cx="17" cy="10" r="1.8" />
      <circle cx="9" cy="5.5" r="1.6" />
    </svg>
  )
}

export function StoreIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4 9.5 5.4 5h13.2L20 9.5" />
      <path d="M5 10v8.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V10" />
      <path d="M9 10a3 3 0 0 0 6 0" />
    </svg>
  )
}
